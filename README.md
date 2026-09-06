# noir

One-page site for a fictional NYC men's grooming house. React + Vite + Tailwind v4. Built as a portfolio piece, palette comes from the NOIR brand system.

## run it

```sh
npm install
npm run dev
npm run build    # -> dist/
npm run preview
```

## layout

- `src/data/content.js` — all the copy (services, barbers, hours, products, journal). Editing text = one file.
- `src/components/` — one file per section, named after the section.
- `src/index.css` — theme tokens + the handful of keyframes (`reveal`, `marquee`, cursor dot, animated underline).
- `src/hooks/useParallax.js`, `src/components/CountUp.jsx`, `src/components/MotionFX.jsx` — the only "systems" in here, each one's tiny.

## palette

Defined once in `@theme`, referenced everywhere. Rules the brand doc gave me: gold is an accent, ~10% of the page, never a full section.

| Role | Hex |
|---|---|
| Ink (primary) | `#111111` |
| Secondary | `#2A2A2A` |
| Paper (bg) | `#F4F1EB` |
| Surface | `#E8E3DA` |
| Text | `#171717` |
| Muted | `#6B6862` |
| Gold (accent) | `#B08D57` |
| Gold light | `#D2B98A` |

## known rough edges

- Images are hotlinked from Unsplash (`Photo.jsx` falls back to a brand block if one 404s). Check the URLs before showing this to anyone who might actually deploy it.
- The booking form is front-end only — no backend. It just swaps to a confirmation state. That's a lie to the user, by design, until there's an API to hit.
- Smooth scrolling is Lenis (`src/components/SmoothScroll.jsx`) driving the wheel and the same-page nav anchors. It runs even for people with reduced-motion on, which is a deliberate fudge — the brief asked for smooth and I didn't want it silently dead on half the machines. `scroll-behavior` is set to `auto` in CSS because a `smooth` one there makes Lenis stutter.
- `scroll-mt-32` on sections compensates for the fixed header; if the header height ever changes, those need revisiting.