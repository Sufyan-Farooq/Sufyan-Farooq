<a href="https://sufyanfarooq.com/"><img src="https://sufyanfarooq.com/terminal.svg" alt="Terminal: Sufyan Farooq, support engineer in Jeddah. Live status of the apps I run, my site's latest commit, and what I'm looking for." width="100%" /></a>

<p>
  <a href="https://sufyanfarooq.com/"><img src="https://img.shields.io/badge/sufyanfarooq.com-0e1b3f?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website" /></a>
  <a href="https://sufyanfarooq.com/assets/cv/Sufyan_Farooq_CV.pdf"><img src="https://img.shields.io/badge/CV-0e1b3f?style=for-the-badge&logo=readthedocs&logoColor=white" alt="CV" /></a>
  <a href="https://www.linkedin.com/in/sufyanmfarooq/"><img src="https://img.shields.io/badge/LinkedIn-0e1b3f?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:sufyanfarooqsmf@gmail.com"><img src="https://img.shields.io/badge/Email-0e1b3f?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://wa.me/966544882306"><img src="https://img.shields.io/badge/WhatsApp-0e1b3f?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" /></a>
</p>

By day I keep a university learning platform working for 2,000+ students and staff (Digival, since March 2023). The rest of the time I build apps, run them on my own Oracle Cloud VM, and automate the boring parts with Python, n8n and AI agents. The terminal above is drawn live by that server.

## Things I built and keep running

<table>
  <tr>
    <td width="50%" valign="top">
      <a href="https://turnup.sufyanfarooq.com/"><img src="assets/turnup-screen.png" alt="TurnUp lobby" width="100%" /></a>
      <h3><a href="https://github.com/Sufyan-Farooq/TurnUp.io">TurnUp</a></h3>
      Realtime multiplayer board games. Docker Compose on Oracle Cloud, GitHub Actions deploys, health checks, database backups and rollback.
      <p>
        <a href="https://turnup.sufyanfarooq.com/"><img src="https://img.shields.io/badge/Live-0e1b3f?style=flat-square" alt="Live" /></a>
        <a href="https://github.com/Sufyan-Farooq/TurnUp.io"><img src="https://img.shields.io/badge/Code-efefef?style=flat-square&logo=github&logoColor=0e1b3f&labelColor=efefef&color=efefef" alt="Code" /></a>
      </p>
      <code>React</code> <code>Socket.io</code> <code>PostgreSQL</code> <code>Docker</code>
    </td>
    <td width="50%" valign="top">
      <a href="https://naqlapp.com/"><img src="assets/naqlapp-screen.jpg" alt="naqlapp logistics website" width="100%" /></a>
      <h3><a href="https://naqlapp.com/">naqlapp</a></h3>
      Logistics site and Truck Dispatcher TMS for a client: dispatch, fleet and driver assignment, delivery evidence, billing readiness.
      <p>
        <a href="https://naqlapp.com/"><img src="https://img.shields.io/badge/Live-0e1b3f?style=flat-square" alt="Live" /></a>
        <img src="https://img.shields.io/badge/Client_code-private-efefef?style=flat-square&labelColor=efefef&color=d6d6da" alt="Client code is private" />
      </p>
      <code>React</code> <code>TypeScript</code> <code>Node.js</code> <code>PostgreSQL</code>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <a href="https://riyasat.sufyanfarooq.com/"><img src="assets/riyasat-screen.png" alt="Riyasat sign-in" width="100%" /></a>
      <h3><a href="https://github.com/Sufyan-Farooq/Riyasat">Riyasat</a></h3>
      Property management for owners and families: agreements, payments, maintenance, reports and role-based access.
      <p>
        <a href="https://riyasat.sufyanfarooq.com/"><img src="https://img.shields.io/badge/Live-0e1b3f?style=flat-square" alt="Live" /></a>
        <a href="https://github.com/Sufyan-Farooq/Riyasat"><img src="https://img.shields.io/badge/Code-efefef?style=flat-square&logo=github&logoColor=0e1b3f&labelColor=efefef&color=efefef" alt="Code" /></a>
      </p>
      <code>Next.js</code> <code>TypeScript</code> <code>Supabase</code>
    </td>
    <td width="50%" valign="top">
      <a href="https://mawarith.sufyanfarooq.com/"><img src="assets/mawarith-screen.png" alt="Mawarith calculator" width="100%" /></a>
      <h3><a href="https://github.com/Sufyan-Farooq/Mawarith">Mawarith</a></h3>
      Public beta of an Islamic inheritance calculator with a typed calculation engine and an Arabic interface.
      <p>
        <a href="https://mawarith.sufyanfarooq.com/"><img src="https://img.shields.io/badge/Live-0e1b3f?style=flat-square" alt="Live" /></a>
        <a href="https://github.com/Sufyan-Farooq/Mawarith"><img src="https://img.shields.io/badge/Code-efefef?style=flat-square&logo=github&logoColor=0e1b3f&labelColor=efefef&color=efefef" alt="Code" /></a>
      </p>
      <code>React</code> <code>TypeScript</code> <code>Arabic UI</code>
    </td>
  </tr>
</table>

<details>
<summary><b>How sufyanfarooq.com ships</b></summary>

```text
git push main
  └─ GitHub Actions: syntax check · node tests · shell lint · docker build
       └─ ssh (pinned host key, restricted key) → Oracle Cloud VM
            └─ docker compose up · memory cap · log rotation · persistent stats
                 └─ health check  ── fail → roll back to the previous image
```

One VM on purpose: small traffic, every moving part visible. The trade-off is no redundancy, and the live board records it when something goes down. [Source](https://github.com/Sufyan-Farooq/sufyanfarooq.com)
</details>

<details>
<summary><b>AI agents and automation</b></summary>

- **Bilingual voice booking agent:** answers in Arabic or English, checks availability, books, and hands off to a human. Vapi/Retell, OpenAI, n8n, webhooks.
- **WhatsApp AI sales agent:** qualifies leads from Meta ads and passes them to consultants. n8n, OpenAI tool calling, WhatsApp Business API.
- **Health monitoring daemon:** polls endpoints, records latency and status in SQLite, alerts with backoff. Python.
- **This profile:** the "Shipped lately" table below is rewritten every day by a GitHub Action in this repo.
</details>

<details>
<summary><b>At work: Digival IT Solutions, March 2023 to now</b></summary>

Senior Onsite Support Engineer on university learning platforms.

- Exam-readiness dashboard: daily checks from **about 2 hours to under 5 minutes**.
- **50+ defects** escalated with the exact failing request, reproduced with logs, Postman and cURL.
- Traced missing platform emails to queuing in the AWS email service.
- Arabic and English runbooks; ticket response times **down 30%**, **98%** satisfaction.
</details>

## Tools

<p>
  <b>Run</b>&nbsp;
  <img src="https://img.shields.io/badge/Linux-0e1b3f?style=flat-square&logo=linux&logoColor=white" alt="Linux" />
  <img src="https://img.shields.io/badge/Docker-0e1b3f?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/GitHub_Actions-0e1b3f?style=flat-square&logo=githubactions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/Nginx-0e1b3f?style=flat-square&logo=nginx&logoColor=white" alt="Nginx" />
  <img src="https://img.shields.io/badge/Oracle_Cloud-0e1b3f?style=flat-square&logo=oracle&logoColor=white" alt="Oracle Cloud" />
  <img src="https://img.shields.io/badge/AWS_EC2-0e1b3f?style=flat-square&logo=amazonec2&logoColor=white" alt="AWS EC2" />
  <img src="https://img.shields.io/badge/Bash-0e1b3f?style=flat-square&logo=gnubash&logoColor=white" alt="Bash" />
</p>
<p>
  <b>Build</b>&nbsp;
  <img src="https://img.shields.io/badge/TypeScript-0e1b3f?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-0e1b3f?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Next.js-0e1b3f?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Node.js-0e1b3f?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/PostgreSQL-0e1b3f?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Supabase-0e1b3f?style=flat-square&logo=supabase&logoColor=white" alt="Supabase" />
</p>
<p>
  <b>Automate</b>&nbsp;
  <img src="https://img.shields.io/badge/Python-0e1b3f?style=flat-square&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/n8n-0e1b3f?style=flat-square&logo=n8n&logoColor=white" alt="n8n" />
  <img src="https://img.shields.io/badge/OpenAI_API-0e1b3f?style=flat-square&logo=openai&logoColor=white" alt="OpenAI API" />
  <img src="https://img.shields.io/badge/Claude_Code-0e1b3f?style=flat-square&logo=anthropic&logoColor=white" alt="Claude Code" />
  <img src="https://img.shields.io/badge/Postman-0e1b3f?style=flat-square&logo=postman&logoColor=white" alt="Postman" />
</p>
<p>
  <b>Learning</b>&nbsp;
  <img src="https://img.shields.io/badge/Kubernetes-efefef?style=flat-square&logo=kubernetes&logoColor=0e1b3f" alt="Kubernetes" />
  <img src="https://img.shields.io/badge/Helm-efefef?style=flat-square&logo=helm&logoColor=0e1b3f" alt="Helm" />
  <img src="https://img.shields.io/badge/Argo_CD-efefef?style=flat-square&logo=argo&logoColor=0e1b3f" alt="Argo CD" />
  <img src="https://img.shields.io/badge/Prometheus-efefef?style=flat-square&logo=prometheus&logoColor=0e1b3f" alt="Prometheus" />
  <img src="https://img.shields.io/badge/Grafana-efefef?style=flat-square&logo=grafana&logoColor=0e1b3f" alt="Grafana" />
  <img src="https://img.shields.io/badge/Terraform-efefef?style=flat-square&logo=terraform&logoColor=0e1b3f" alt="Terraform" />
</p>

## Shipped lately

<!-- SHIPPED:START -->
| Repo | Latest commit | Date |
|---|---|---|
| [sufyanfarooq.com](https://github.com/Sufyan-Farooq/sufyanfarooq.com) | [Check the status board in the server deploy health check](https://github.com/Sufyan-Farooq/sufyanfarooq.com/commit/11b0ef90a28c304e3fe2ed32c1946fe3bad9496b) | 2026-10-30 |
| [TurnUp.io](https://github.com/Sufyan-Farooq/TurnUp.io) | [Cap memory for turnup containers on Oracle](https://github.com/Sufyan-Farooq/TurnUp.io/commit/a47bedf4d6a1a54a2b226b095da3450290400a03) | 2026-10-28 |
| [Mawarith](https://github.com/Sufyan-Farooq/Mawarith) | [Remove AI advisor and add Docker deployment](https://github.com/Sufyan-Farooq/Mawarith/commit/d89f8aee8e9de27e5f2fc3d6b31a81f84dd3c4f2) | 2026-09-27 |
| [Riyasat](https://github.com/Sufyan-Farooq/Riyasat) | [Fix password recovery and add Google sign-in](https://github.com/Sufyan-Farooq/Riyasat/commit/73f20087a93c878ca1d34f6e499d59e920ad4e23) | 2026-10-07 |
| [far-and-found-travel-template](https://github.com/Sufyan-Farooq/far-and-found-travel-template) | [Expand featured destinations and lower WhatsApp button](https://github.com/Sufyan-Farooq/far-and-found-travel-template/commit/cfc8dbcf3da418e394363eac0f4796cf6b8feafc) | 2026-09-28 |
<!-- SHIPPED:END -->

<sub>BCA, Osmania University (2025) · MBA in progress · Arabic, English, Hindi, Urdu · Jeddah, open to relocating</sub>
