# noir

Landing page for NOIR, a men's grooming house. Static single-page site, React + Vite + Tailwind v4.

## run it

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## what's in here

- `src/data/content.js` — all the copy in one place. Services, barbers, hours, the lot. Editing copy = editing one file, not sifting through JSX.
- `src/components/` — one component per section. Nothing clever, just small files that are easy to find.
- `src/index.css` — theme tokens (the palette below) plus a couple of animation helpers (scroll-reveal, marquee, nav underline).
- `src/components/Reveal.jsx` — tiny IntersectionObserver wrapper used for the fade-up on scroll.

## the palette

Defined once in `@theme` and reused everywhere. If I need a colour, it comes from this list — no random hexes wandering in.

| Role | Hex |
|---|---|
| Primary (ink) | `#111111` |
| Secondary | `#2A2A2A` |
| Background (paper) | `#F4F1EB` |
| Surface | `#E8E3DA` |
| Text | `#171717` |
| Muted text | `#6B6862` |
| Accent (gold) | `#B08D57` |
| Accent light | `#D2B98A` |

Rough ratio on the page: ~60% background/neutral, ~30% ink tones, ~10% gold. Gold only ever touches buttons, borders, icons and small highlights — it stays an accent and never becomes a section of its own.

## notes

- Images are hotlinked from unsplash and have a graceful fallback block in `Photo.jsx` if one ever dies.
- No build-time bundler plugins beyond Vite + Tailwind; motion is plain CSS + a tiny observer, so there are no animation libraries to keep up to date.