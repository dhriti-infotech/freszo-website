# Freszo — Premium Editorial Website

React + Vite static website for Freszo, a Bihar-born food brand focused on packaged and processed makhana and Indian spices.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages + GoDaddy domain

`vite.config.js` uses `base: './'`, so the same build can be served from:

- GitHub Pages repository URL
- A GoDaddy custom domain connected to GitHub Pages

## WhatsApp / Phone

Configured in `src/main.jsx`:

```js
const WHATSAPP_NUMBER = '916200895416';
```

Update this number before launch if Freszo will use a different business number.

## Design direction

The UI uses a premium editorial food-brand style inspired by the supplied reference video:

- announcement ticker
- clean sticky navigation
- serif editorial typography
- warm cream/gold/rust palette
- circular hero product presentation
- animated orbit rings and floating badges
- scroll reveal animations
- product hover interactions
- fixed WhatsApp and phone actions
- responsive mobile navigation
- founder placeholders
- Dhriti Infotech footer credit
