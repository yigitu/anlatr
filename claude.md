\# ANLA.TR — Claude Code Handoff



\## What this project is



\*\*ANLA.TR\*\* is a Turkish knowledge platform — "anla.tr anlatır" (it explains). The goal is a fast, visually strong content site that explains complex topics (networking, economics, security, tech) in short, clear Turkish articles.



There are two real-world goals for the site:

1\. \*\*Domain registration proof\*\* — submitted to TRABIS (.tr registry) to prove the domain will be used for a real site

2\. \*\*Actual platform\*\* — if the domain is granted, this becomes a real published site



The design was iterated extensively. The final approved design is in `project/anlatr.html`. \*\*Read that file first\*\* — it is the single source of truth for every visual and functional detail.



\---



\## Your first task on this session



The user wants to build this as a proper Vite + React project (they have Node.js on this machine). Your job is to implement the design from `project/anlatr.html` as a clean, modular codebase.



\*\*Do not start implementing until you have read `project/anlatr.html` in full.\*\*



\---



\## Tech stack



\- \*\*Vite\*\* — build tool, fast dev server, easy GitHub Pages deploy

\- \*\*React 18\*\* — already used in the prototype

\- \*\*Plain CSS\*\* — no Tailwind, no CSS-in-JS, just CSS variables (already defined in the prototype)

\- \*\*No TypeScript\*\* — keep it simple

\- \*\*Google Fonts\*\* — Fraunces + Plus Jakarta Sans (already in the prototype)



\### Setup command

```bash

npm create vite@latest anlatr -- --template react

cd anlatr

npm install

npm run dev



Planned file structure

anlatr/

├── index.html

├── package.json

├── vite.config.js

├── public/

│   └── favicon.svg

└── src/

&#x20;   ├── main.jsx

&#x20;   ├── App.jsx

&#x20;   ├── index.css

&#x20;   ├── data/

&#x20;   │   └── content.js

&#x20;   ├── components/

&#x20;   │   ├── illustrations/

&#x20;   │   │   └── index.jsx

&#x20;   │   ├── Nav.jsx

&#x20;   │   ├── SearchOverlay.jsx

&#x20;   │   ├── HeaderBand.jsx

&#x20;   │   ├── CatStrip.jsx

&#x20;   │   ├── BentoGrid.jsx

&#x20;   │   ├── NewsletterBand.jsx

&#x20;   │   ├── Footer.jsx

&#x20;   │   └── Badge.jsx

&#x20;   └── pages/

&#x20;       ├── HomePage.jsx

&#x20;       ├── ContentPage.jsx

&#x20;       └── SubscribePage.jsx





Design tokens

\--bg: #f4f2ed;

\--white: #ffffff;

\--ink: #0f0e17;

\--ink2: #1c1b2b;

\--muted: #7a7888;

\--dim: #b0aebb;

\--border: #e3e0d8;

\--border2: #ece9e2;

\--teal: #0d9488;

\--teal-l: #f0fdfb;

\--teal-d: #0a7a70;

\--amber: #d97706;

\--amber-l: #fef3c7;

\--blue: #2563eb;

\--blue-l: #eff6ff;

\--rose: #e11d48;

\--rose-l: #fff1f3;

\--purple: #7c3aed;

\--purple-l: #f5f3ff;

Fonts: Fraunces (serif, headings/brand) + Plus Jakarta Sans (UI/body)





Key design decisions

Nav starts dark, transitions to light on scroll

"anla.tr anlatır." slogan — appears once in HeaderBand only

Header band is compact, not a full-screen hero

Bento grid — 12 columns, first card spans 7 (tall), second 5, rest 4

Each card has a dark-background SVG illustration thumbnail

Category colors: Ağ=blue, Ekonomi=amber, Güvenlik=rose, Teknoloji=purple, Yazılım=teal

Search overlay opens on "Ara" button click or ⌘K/Ctrl+K

Newsletter in footer band AND as mini widget in article sidebar

High information density — no wasted space, no repeated text


The 8 articles

ID	Title	Category

vlan-nedir	VLAN nedir?	Ağ

wireguard-nasil-calisir	WireGuard nasıl çalışır?	Ağ

faiz-nedir	Faiz nedir?	Ekonomi

dns-nedir	DNS nedir?	Ağ

vpn-nedir	VPN nedir?	Güvenlik

ssh-nedir	SSH nedir?	Ağ

blockchain-nedir	Blockchain nedir?	Teknoloji

tcp-ip-nedir	TCP/IP nedir?	Ağ

All SVG illustration code is in project/anlatr.html — copy into src/components/illustrations/index.jsx.



GitHub Pages deployment

npm install --save-dev gh-pages

vite.config.js:



export default { base: '/anlatr/' }

package.json scripts:



"deploy": "vite build \&\& gh-pages -d dist"

What to do in this session

Read project/anlatr.html completely

Scaffold with npm create vite@latest

Implement each module in the file structure above

Run npm run dev to verify

Create GitHub repo and push

Configure GitHub Pages

Do NOT start writing code until you have read the design file in full.



