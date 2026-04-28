# ANLA.TR

**Türkçe teknik bilgi platformu.** Ağ, güvenlik, yazılım ve yapay zeka konularını kısa ve anlaşılır Türkçe makalelerle açıklar.

A Turkish-language knowledge platform that explains complex tech topics (networking, security, software, AI) in short, clear articles.

**Live:** https://yigitu.github.io/anlatr/

---

## Tech Stack

| | |
|---|---|
| Build | Vite |
| UI | React 18 |
| Routing | react-router-dom v6 |
| Styling | Plain CSS (CSS variables, no Tailwind) |
| Fonts | Fraunces + Plus Jakarta Sans (Google Fonts) |
| Hosting | GitHub Pages |

---

## Articles

| Title | Category |
|---|---|
| VLAN nedir? | Ağ |
| WireGuard nasıl çalışır? | Ağ |
| DNS nedir? | Ağ |
| VPN nedir? | Güvenlik |
| SSH nedir? | Ağ |
| Blockchain nedir? | Teknoloji |
| TCP/IP nedir? | Ağ |
| Docker nedir? | Yazılım |
| Agentic AI nedir? | Yapay Zeka |
| Yerel LLM nedir? | Yapay Zeka |
| MCP nedir? | Yapay Zeka |
| Zigbee, Thread ve Matter nedir? | Teknoloji |

---

## Run Locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/anlatr/`

---

## Deploy

```bash
npm run deploy
```

Builds with Vite and pushes `dist/` to the `gh-pages` branch. GitHub Pages serves from that branch.
