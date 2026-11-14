# Vaibhav & Kiran Wedding Invitation Website (Next.js & React)

A modern, production-ready **Next.js (App Router) + React** web application replicating the [original live wedding invitation website](https://vaibhav-kiran-wedding.vercel.app/wedding).

---

## 🌟 Architecture & Features

- **Framework:** Next.js 14 (App Router) & React 18
- **Static & SSR Routing:**
  - `/` & `/wedding` — Full Wedding Ceremony Invitation page
  - `/sangeet` — Sangeet Night Invitation page
- **API Route:**
  - `POST /api/rsvp` — Server-side Route Handler in Next.js (`app/api/rsvp/route.js`) that records RSVPs to `rsvps.json`.
- **Interactive Gate & Thread Unwinding:**
  - 96-frame interactive canvas animation (`/v5/assets/env/f_0000.webp` to `f_0095.webp`).
- **Petals & Haveli Stage Animation:**
  - Canvas drifting blossom physics engine.
  - Haveli arch and courtyard scene with animated doors opening, walking couple, and glowing diyas.
- **Soundtrack & Web Audio Engine:**
  - Background music (`/v5/assets/audio/m.mp3`) with Web Audio API gain ramping and top-right toggle.
- **Countdown & Venues:**
  - Auspicious countdown clock and Google Maps venue navigation for Utsav Grand, Sonipat.
- **Assets Directory:**
  - All static assets, fonts, stylesheets, and audio are placed in `public/v5/` for zero-configuration CDN and static serving.

---

## 🛠️ Development & Running Locally

### 1. Development Mode
```bash
npm run dev
```
Runs at: [http://localhost:3000](http://localhost:3000)

### 2. Production Build & Start
```bash
npm run build
npm start
```
Runs the optimized Next.js server on [http://localhost:3000](http://localhost:3000).

---

## 🚀 Deployment Options

### Deploying to Vercel (Recommended)
This Next.js app is natively optimized for Vercel:
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the repository into **Vercel** ([vercel.com](https://vercel.com)).
3. Framework preset: **Next.js** (detected automatically).
4. Click **Deploy**!

Or via Vercel CLI:
```bash
npx vercel
```

### Deploying to Any Node Server / VPS (AWS, DigitalOcean, Ubuntu, Windows)
```bash
npm install
npm run build
npm start
```
Or use a process manager like PM2:
```bash
npm install -g pm2
pm2 start npm --name "wedding-invitation" -- start
```

### Deploying to Netlify
Netlify automatically detects Next.js:
```bash
npx netlify deploy --build --prod
```

---

## 📁 Project Directory Structure

```
Wedding Invitaion/
├── app/
│   ├── api/
│   │   └── rsvp/
│   │       └── route.js         # Next.js POST /api/rsvp Route Handler
│   ├── components/
│   │   ├── WeddingView.jsx      # React client component for Wedding
│   │   └── SangeetView.jsx      # React client component for Sangeet
│   ├── wedding/
│   │   └── page.jsx             # /wedding page
│   ├── sangeet/
│   │   └── page.jsx             # /sangeet page
│   ├── layout.jsx               # Root layout (fonts, metadata, styles)
│   ├── page.jsx                 # Root / page (serves Wedding)
│   └── globals.css              # Global styles
├── public/
│   └── v5/
│       ├── assets/              # Audio, 96 env frames, images, backgrounds
│       ├── css/                 # style.css
│       └── js/                  # main.js
├── rsvps.json                   # Recorded RSVP submissions
├── package.json                 # Dependencies & scripts
└── .gitignore                   # Ignores .next and node_modules
```
