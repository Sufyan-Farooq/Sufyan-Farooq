// Rewrites the "Shipped lately" block in README.md with the latest commit from
// each recently pushed public repository. Run daily by .github/workflows/shipped.yml.
import { readFile, writeFile } from 'node:fs/promises';

const USER = 'Sufyan-Farooq';
const SKIP = new Set(['Sufyan-Farooq', '100xdevs-toolkit']);
const LIMIT = 5;
const START = '<!-- SHIPPED:START -->';
const END = '<!-- SHIPPED:END -->';

const headers = { Accept: 'application/vnd.github+json', 'User-Agent': USER };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function api(path) {
  const res = await fetch(`https://api.github.com/${path}`, { headers });
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return res.json();
}

const repos = (await api(`users/${USER}/repos?sort=pushed&per_page=20&type=owner`))
  .filter((r) => !r.fork && !r.archived && !SKIP.has(r.name))
  .slice(0, LIMIT);

const rows = [];
for (const repo of repos) {
  const [commit] = await api(`repos/${USER}/${repo.name}/commits?per_page=1`);
  if (!commit) continue;
  const message = commit.commit.message.split('\n')[0]
    .replace(/\s*\[(skip ci|ci skip)\]/gi, '')
    .replace(/\|/g, '/')
    .slice(0, 80);
  const date = commit.commit.committer.date.slice(0, 10);
  rows.push(`| [${repo.name}](${repo.html_url}) | [${message}](${commit.html_url}) | ${date} |`);
}

const block = [
  START,
  '| Repo | Latest commit | Date |',
  '|---|---|---|',
  ...rows,
  END,
].join('\n');

const readme = await readFile('README.md', 'utf8');
const start = readme.indexOf(START);
const end = readme.indexOf(END);
if (start < 0 || end < 0) throw new Error('README is missing the SHIPPED markers');
const next = readme.slice(0, start) + block + readme.slice(end + END.length);
if (next !== readme) {
  await writeFile('README.md', next);
  console.log(`Updated with ${rows.length} repos.`);
} else {
  console.log('No change.');
}
