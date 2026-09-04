# Freszo — Premium React Website

A responsive, premium static website for **Freszo — Nature's Fresh**, built with React + Vite and structured so it can later be connected to APIs/CMS/backend services.

## Included
- Premium responsive design for mobile, tablet and desktop
- Freszo logo and all supplied product imagery
- Hero, brand story, product collection, quality, founders and contact sections
- Product quick-view modal
- WhatsApp CTA in hero, contact section and product enquiry
- Three founder placeholders ready for real names/photos/bios
- No backend dependency; content is easy to replace with API data later

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build for production

```bash
npm run build
npm run preview
```

## Before launch

1. Open `src/main.jsx`.
2. Replace `WHATSAPP_NUMBER = '91XXXXXXXXXX'` with the Freszo WhatsApp number in international format, without `+` or spaces.
3. Replace founder names and bios.
4. Replace `hello@freszo.in` if the client has a different email.
5. Replace the Instagram URL with the real Freszo profile.
6. For a dynamic version, move `products` and company/contact data to an API/CMS and keep the present components as the UI layer.
