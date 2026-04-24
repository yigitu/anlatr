# ANLA.TR — Claude Code Project Notes

## What this project is

**ANLA.TR** is a Turkish knowledge platform — "anla.tr anlatır" (it explains). A fast, visually strong content site that explains complex topics (networking, economics, security, tech) in short, clear Turkish articles.

Two real-world goals:
1. **Domain registration proof** — submitted to TRABIS (.tr registry) to prove the domain will be used for a real site
2. **Actual platform** — if the domain is granted, this becomes a real published site

The final approved design reference is in `project/anlatr.html`.

---

## Current status

**Live at:** https://yigitu.github.io/anlatr/

The Vite + React project is fully built and deployed. All major features are implemented:
- Full URL-based routing via react-router-dom v6
- 8 expanded Turkish articles (400-600 words each)
- GitHub Pages SPA redirect (404.html trick)
- Search overlay (Ctrl+K / Cmd+K)
- Category filter via `?cat=` query param
- Browser back/forward button works correctly

---

## Tech stack

- **Vite** — build tool, fast dev server
- **React 18** with **react-router-dom v6**
- **Plain CSS** — CSS variables only, no Tailwind
- **No TypeScript**
- **Google Fonts** — Fraunces (serif, headings) + Plus Jakarta Sans (UI/body)

---

## Routing

```
/anlatr/                    → HomePage
/anlatr/:articleId          → ContentPage (e.g. /anlatr/vlan-nedir)
/anlatr/subscribe           → SubscribePage
```

- `BrowserRouter` with `basename="/anlatr"` in `src/main.jsx`
- Category filter: `?cat=Ağ` query param via `useSearchParams` in `HomePage`
- `ScrollToTop` component in `App.jsx` resets scroll on route change
- GitHub Pages SPA redirect: `public/404.html` redirects to `/?/path` and `index.html` decodes it

---

## File structure

```
anlatr/
├── index.html              (includes SPA redirect decoder script)
├── package.json
├── vite.config.js          (base: '/anlatr/')
├── public/
│   ├── favicon.svg
│   └── 404.html            (GitHub Pages SPA redirect)
└── src/
    ├── main.jsx            (BrowserRouter wrapper)
    ├── App.jsx             (Routes, ScrollToTop, search overlay state)
    ├── index.css           (CSS variables, global styles, .ab-h2/.ab-h3)
    ├── utils.jsx           (formatBody: parses ## h2, ### h3, - lists, **bold**, `code`)
    ├── data/
    │   └── content.js      (8 articles as JS objects with template literal bodies)
    ├── components/
    │   ├── illustrations/index.jsx
    │   ├── Nav.jsx         (dark→light on scroll, useNavigate for category links)
    │   ├── SearchOverlay.jsx (useNavigate, no onNav prop)
    │   ├── HeaderBand.jsx
    │   ├── CatStrip.jsx
    │   ├── BentoGrid.jsx
    │   ├── NewsletterBand.jsx
    │   ├── Footer.jsx
    │   └── Badge.jsx
    └── pages/
        ├── HomePage.jsx    (useSearchParams for ?cat= filter)
        ├── ContentPage.jsx (useParams for :articleId)
        └── SubscribePage.jsx
```

---

## Design tokens

```
--bg: #f4f2ed       --teal: #0d9488     --amber: #d97706
--ink: #0f0e17      --teal-l: #f0fdfb   --amber-l: #fef3c7
--muted: #7a7888    --teal-d: #0a7a70   --blue: #2563eb
--border: #e3e0d8                        --rose: #e11d48
                                         --purple: #7c3aed
```

Category colors: Ağ=blue, Ekonomi=amber, Güvenlik=rose, Teknoloji=purple, Yazılım=teal

---

## Key implementation details

**Article bodies** are JS template literals in `src/data/content.js`. Inline code in article text must use escaped backticks (`\`code\``) to avoid terminating the template literal prematurely.

**`formatBody` utility** in `src/utils.jsx` parses article bodies:
- `## heading` → `<h2 className="fr ab-h2">`
- `### heading` → `<h3 className="ab-h3">`
- `- item` lines → `<ul><li>`
- `**bold**` → `<strong>`
- `` `code` `` → `<code>` (styled with teal color)

**Navigation pattern:** All components use `useNavigate()` directly. The old `onNav` prop pattern has been eliminated.

---

## The 8 articles

| ID | Title | Category |
|---|---|---|
| vlan-nedir | VLAN nedir? | Ağ |
| wireguard-nasil-calisir | WireGuard nasıl çalışır? | Ağ |
| faiz-nedir | Faiz nedir? | Ekonomi |
| dns-nedir | DNS nedir? | Ağ |
| vpn-nedir | VPN nedir? | Güvenlik |
| ssh-nedir | SSH nedir? | Ağ |
| blockchain-nedir | Blockchain nedir? | Teknoloji |
| tcp-ip-nedir | TCP/IP nedir? | Ağ |

---

## Deployment

```bash
npm run deploy    # vite build && gh-pages -d dist
git push origin main
```

GitHub Pages serves from the `gh-pages` branch. Direct URL navigation and page refresh work via the 404.html SPA redirect trick.

---

## Future work (planned)

- Replace JS template literal article storage with a proper CMS or markdown file system
- Add more articles
- Wire up newsletter subscription to a real backend (currently UI-only)
