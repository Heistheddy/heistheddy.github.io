# 🖥️ heistheddy.github.io

Personal portfolio of **Olatade Onibudo** — Full-Stack Engineer, Product Data Analyst, and Video Editor based in Lagos, Nigeria.

🔗 **Live site:** [heistheddy.github.io](https://heistheddy.github.io)

---

## About

This is the second iteration of my personal portfolio. Built from scratch with React — no UI libraries, no templates. Every component, animation, and design decision is custom.

The site showcases who I am, what I build, and the kind of problems I like solving — from fintech infrastructure and SaaS platforms to commercial video productions.

> Most of my professional work is covered by NDA and cannot be shown publicly. I'm happy to discuss my experience confidentially.

---

## What's inside

- **Hero** — Typewriter role animation, ambient orb background, stats
- **About** — Bio, social links, quick-info card
- **Projects** — Hardcoded project cards with NDA badges and status indicators
- **Skills** — Category-based skill explorer with 3D icon cards and animated SVG backgrounds per category
- **Contact** — Direct email CTA

---

## Tech stack

| Layer | Tech |
|---|---|
| Framework | React 18 |
| Styling | Custom CSS (design tokens, no Tailwind) |
| Icons | Devicons CDN |
| Fonts | Space Grotesk + Inter + JetBrains Mono |
| Animations | CSS keyframes + Intersection Observer |
| Deployment | GitHub Pages via `gh-pages` |

---

## Design system

Built around a custom dark theme:

- **Background:** `#0A0A0F`
- **Accent:** Violet `#7C3AED` → Cyan `#06B6D4` gradient
- **Type scale:** Space Grotesk (display) / Inter (body) / JetBrains Mono (code)
- **Motion:** `cubic-bezier(0.16, 1, 0.3, 1)` scroll reveals throughout

---

## Run locally

```bash
git clone https://github.com/Heistheddy/heistheddy.github.io.git
cd heistheddy.github.io
npm install
npm start
```

Opens at `http://localhost:3000`

---

## Deploy

```bash
npm run deploy
```

Builds the project and pushes to the `gh-pages` branch automatically.

---

## Project structure
src/

├── components/

│   ├── Navbar.jsx / Navbar.css

│   ├── Hero.jsx / Hero.css

│   ├── About.jsx / About.css

│   ├── Projects.jsx / Projects.css

│   ├── Skills.jsx / Skills.css

│   ├── Contact.jsx / Contact.css

│   └── Section.css

├── hooks/

│   └── useScrollReveal.js

├── data/

│   └── projects.js

├── App.jsx

├── index.js

└── index.css

---

## Currently building

**Posteering** — a Nigerian fintech platform for POS operator discovery, escrow-backed transactions, and real-time cash intelligence. Tackling the infrastructure gap in Nigeria's cash economy.

---

## Contact

- 📧 heistheddy@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/onibudo-olatade)
- 🐙 [GitHub](https://github.com/Heistheddy)
- 📸 [Instagram](https://instagram.com/th3ddy4k)

---

*Built with care in Lagos. No frameworks were harmed.*
