/**
 * Landing.jsx — Lila Yoga home page
 * ══════════════════════════════════
 *
 * Hero + 4-deck grid + Footer.
 */

import { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { C, FONTS } from '@data/brand';

// Cover components — imported lazily from each deck page
import { MeditationsCover } from '@pages/Deck';
import { TeachingsCover } from '@pages/Teachings';
import { MovementsCover } from '@pages/Movements';
import { CoverScreen as BodyCover } from '@pages/MovementsL2';
import { L1_MARK_IDS } from '@components/guide/DeckMarks';

const SANS = FONTS.body;
const SERIF = FONTS.serif;

// Source dimensions the CoverScreen components were designed for
const SRC_W = 400;
const SRC_H = 720;
const ASPECT = SRC_H / SRC_W; // 1.8

const DECKS = [
  {
    key: 'movements',
    route: '/movements',
    name: 'Movements',
    subtitle: 'Physical \u00b7 Embodied',
    desc: 'A complete flowing yoga sequence.',
    Cover: () => (
      <MovementsCover
        subtitle="30 poses for a complete practice"
        countLabel="6 sections \u00b7 31 cards"
        markIds={L1_MARK_IDS}
      />
    ),
  },
  {
    key: 'body',
    route: '/body',
    name: 'Lila Body',
    subtitle: 'Intellectual \u00b7 Scientific',
    desc: '47 cards on movement science and the body.',
    Cover: () => <BodyCover />,
  },
  {
    key: 'teachings',
    route: '/teachings',
    name: 'Teachings',
    subtitle: 'Conceptual \u00b7 Traditional',
    desc: '30 concept cards \u2014 what the traditions believe.',
    Cover: () => <TeachingsCover />,
  },
  {
    key: 'meditations',
    route: '/deck',
    name: 'Meditations',
    subtitle: 'Reflective \u00b7 Spiritual',
    desc: '30 practice cards across five wisdom traditions.',
    Cover: () => <MeditationsCover />,
  },
];

function DeckTile({ deck }) {
  const { route, name, subtitle, desc, Cover } = deck;
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / SRC_W);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <Link
      to={route}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {/* Scaled cover thumbnail */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          paddingBottom: `${ASPECT * 100}%`,
          overflow: 'hidden',
          position: 'relative',
          borderRadius: 10,
        }}
      >
        <div style={{
          width: SRC_W,
          height: SRC_H,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
        }}>
          <Cover />
        </div>
      </div>

      {/* Labels */}
      <div style={{
        fontSize: 18, fontFamily: SERIF, fontWeight: 400,
        color: C.darkInk, marginTop: 12,
      }}>
        {name}
      </div>
      <div style={{
        fontSize: 10, fontFamily: SANS, fontWeight: 500,
        letterSpacing: '0.1em', color: C.slate,
        textTransform: 'uppercase', marginTop: 4,
      }}>
        {subtitle}
      </div>
      <div style={{
        fontSize: 11, fontFamily: SANS, fontWeight: 400,
        color: C.slate, lineHeight: 1.6, marginTop: 6,
      }}>
        {desc}
      </div>
    </Link>
  );
}

export default function Landing() {
  return (
    <>
      <Helmet>
        <title>Lila Yoga — Ancient Practices for Presence</title>
        <meta name="description" content="Four card decks drawn from ancient wisdom traditions. Practices for the body, mind, and spirit — grounded in nature." />
        <link rel="canonical" href="https://lila.yoga" />
      </Helmet>

      <div style={{
        minHeight: '100vh',
        background: C.cream,
        fontFamily: SANS,
        color: C.darkInk,
      }}>
        {/* ─── Hero ─────────────────────────────────────────────────────── */}
        <section style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '80px 28px 48px',
          textAlign: 'center',
        }}>
          {/* Wordmark */}
          <div style={{
            fontSize: 'clamp(52px, 12vw, 80px)',
            fontFamily: SANS, fontWeight: 700,
            lineHeight: 1.0, letterSpacing: '-0.02em',
            color: C.darkInk, marginBottom: 8,
          }}>
            Lila Yoga
          </div>

          {/* Dot divider */}
          <div style={{
            width: 10, height: 10, borderRadius: '50%',
            background: C.darkInk,
            margin: '28px 0 32px',
          }} />

          <div style={{
            fontSize: 16, fontFamily: SANS, fontWeight: 500,
            color: 'rgba(26,37,48,0.6)', lineHeight: 1.9,
            maxWidth: 520, textAlign: 'left',
          }}>
            <p style={{ marginBottom: 20 }}>
              Lila Yoga is a collection of meditation and movement practices curated from ancient frameworks and modern science, arranged into four digital card decks. Each card carries a teaching, a practice, and an invitation to notice the world differently.
            </p>
            <p style={{ marginBottom: 20 }}>
              Meditations to sit with. Teachings to carry. Movements to practice. The body as teacher.
            </p>
            <p style={{ marginBottom: 20 }}>
              The decks are made for time in nature — a walk in the park, tending a garden, sitting on the porch at dawn, or deep in an adventure.
            </p>
            <p style={{ margin: 0 }}>
              Draw a card, carry it with you, and notice what shifts.
            </p>
          </div>
        </section>

        {/* ─── Deck Grid ────────────────────────────────────────────────── */}
        <section style={{
          padding: '24px 24px 64px',
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
          }}>
            {DECKS.map(deck => (
              <DeckTile key={deck.key} deck={deck} />
            ))}
          </div>

          {/* Responsive: 2-col on tablet, 1-col on mobile */}
          <style>{`
            @media (max-width: 860px) {
              section > div[style*="grid"] { grid-template-columns: repeat(2, 1fr) !important; }
            }
          `}</style>
        </section>

        {/* ─── Footer ───────────────────────────────────────────────────── */}
        <footer style={{
          padding: '40px 28px',
          textAlign: 'center',
          borderTop: '0.5px solid rgba(26,37,48,0.08)',
        }}>
          <div style={{
            fontSize: 12, fontFamily: SANS,
            color: 'rgba(26,37,48,0.35)',
            lineHeight: 2.2,
          }}>
            <span style={{ color: C.oceanTeal }}>&#9670;</span>
            {' '}Part of the Lila family{' · '}
            <a
              href="https://lilatrips.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'rgba(26,37,48,0.45)',
                textDecoration: 'none',
                borderBottom: '0.5px solid rgba(26,37,48,0.2)',
              }}
            >
              lilatrips.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
