# Lila Yoga

Four card decks drawn from ancient wisdom traditions — practices for the body, mind, and spirit, grounded in nature.

Part of the [Lila](https://lilatrips.com) family. Sister site to Lila Trips.

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Stack

- React 18 + Vite
- Tailwind CSS v4
- React Router v6
- Deployed on Vercel at [lila.yoga](https://lila.yoga)

## Routes

- `/` — Landing page with 4-deck grid
- `/deck` — 30-card meditation deck (practices)
- `/teachings` — 30-card teachings deck (concepts by tradition)
- `/movements` — Movements deck (yoga sequence, L1)
- `/body` — Lila Body deck (movement science, L2)

## Pending content work

- **Card examples (Meditations)**: All 30 `connection` fields in `src/data/cardDeck.js` currently contain trip-specific examples from Lila Trips (references to Zion, Big Sur, Joshua Tree, etc.). These need to be rewritten for everyday nature context — walks in the park, walking the dog, time in a garden, sitting on a porch. Each field is marked with `// TODO: rewrite for daily-life context`.
- **Card examples (Teachings)**: The `journey` fields in `src/data/teachingsDeck.js` contain trail/trip-specific language. These should be reviewed and softened for the yoga context.
- **Landing page copy**: Hero tagline, about section, and CTA text are placeholder. Each is marked with `{/* TODO */}` comments in `src/pages/Landing.jsx`.
- **Analytics**: Needs its own GA4 property (separate from Lila Trips G-H3TCF22GPL). Placeholder comment in `index.html`.
