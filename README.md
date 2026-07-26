# ZeeFrames — high-fidelity frontend recreation

A React + Vite + TypeScript + Tailwind recreation of the ZeeFrames homepage
(`https://zeeframes.com`), built by reading the live site's DOM and stylesheets
rather than eyeballing screenshots.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production bundle into dist/
npm run preview  # serve the production build
```

## Design system

Every token below is transcribed from the original `colors.css`, `style.css`,
`common.css`, `home.css` and `custom-animations.css`. They live as CSS custom
properties at the top of `src/index.css`, so the whole palette is re-themable
from one block.

| Token | Value | Used for |
| --- | --- | --- |
| `--color-primary` | `#F3FE00` | Lime accent, active states, rail |
| `--color-black-300` | `#0B0B0B` | Page background |
| `--color-black-200` | `#0D0D0D` | Header background |
| `--color-cream-white` | `#FAF9F4` | Light sections |
| `--color-gray-200` | `#8F8F8F` | Muted body copy |
| `--color-black-400` | `#3C3C3C` | Dark borders |
| `--border-light` | `#D7D8D4` | Hairlines on cream service rows |

**Typefaces** — Geologica (display, 800, hero headline and FAQ questions),
Inter Tight (default body), Inter (utility and captions). All three are the
originals, loaded from Google Fonts, with metric-matched local fallbacks so
nothing reflows during the swap.

**Layout** — container `max-width: 1400px`, padding stepping 80 → 60 → 40 → 16px
at the 1204 / 991 / 575px breakpoints. Sections are `80px 0`, collapsing to
`32px 0` below 575px.

## Structure

```
src/
  index.css                 tokens + component classes mirroring the original CSS
  App.tsx                   section composition only
  lib/            assets.ts, cn.ts
  hooks/          useMediaQuery, useTypewriter, useReveal
  data/           navigation.ts, content.ts, countries.ts
  components/
    Header.tsx              sticky header, desktop nav, mobile drawer
    ServicesMegaMenu.tsx    tabbed mega menu, shared desktop + mobile
    Hero.tsx                layered hero composition
    ClientLogos.tsx         seamless logo marquee
    Showreel.tsx            lazy-attached process video
    SectionHeading.tsx      shared eyebrow / title / description
    Services.tsx            hairline service rows
    Process.tsx             scroll-driven rail + sticky artwork
    ProcessStep.tsx
    Showcase.tsx            staggered portfolio grid
    ProjectCard.tsx
    CTASection.tsx          lime band
    FAQ.tsx                 accessible accordion
    Insights.tsx / InsightCard.tsx
    Testimonials.tsx        autoplaying review slider
    Contact.tsx             validated form, local submit state
    Footer.tsx              offices, wordmark, link columns, socials
    SocialIcons.tsx         inline brand glyphs
    CursorGlow.tsx          ambient pointer glow
```

All repeated content is driven by arrays in `src/data/` — no duplicated JSX.

## Interactions implemented

Hover mega menu (with click and `Escape` support), mobile drawer with body-scroll
lock, inline mobile services accordion, FAQ accordion, testimonial slider
(autoplay, arrows, dots, pauses on hover/focus), hero typewriter, cursor-following
showreel pill, searchable country dropdown, form validation with focus management,
service-row and portfolio hover states, footer link hovers, smooth anchor scrolling
with `scroll-padding-top` set to the header height.

## Accessibility

Semantic landmarks, one `<h1>`, skip link, visible focus rings, `aria-expanded` /
`aria-controls` on every disclosure, `role="tablist"` on the mega menu with
`tabIndex` managed by open state, labelled form fields with `aria-invalid` and
`aria-describedby`, decorative imagery marked `aria-hidden`, and
`prefers-reduced-motion` honoured globally (it also disables the typewriter and
the cursor glow).

## Assets

Artwork is referenced from the original public CDN paths rather than re-hosted.
Every image carries explicit `width`/`height` or sits in a fixed-height container
with a placeholder background, so a failed request leaves a coloured box and never
shifts the layout. Below-the-fold images use `loading="lazy"`.

## Known differences from the original

1. **No screenshot diffing.** The build environment had no headless browser and
   the network allowlist blocked `zeeframes.com`, so fidelity comes from reading
   the site's actual CSS rather than pixel comparison. Values are transcribed,
   not estimated, but a side-by-side eye check is still worth doing.
2. **Marquee timing.** The original hard-codes `translateX(-1150px)`, tied to one
   specific track width. This uses a duplicated track and `-50%`, which loops
   seamlessly at any width; speed is tuned to match (~77px/s).
3. **Social icons.** `lucide-react` has dropped brand icons, so the five footer
   glyphs are inlined in `SocialIcons.tsx` and are close but not identical to the
   originals.
4. **Contact form.** No backend, so submission settles into a local confirmation
   state that says plainly that nothing was sent.
5. **Two deliberate fixes.** The original's "Explore More" arrow is `#463F3F` on a
   black button (effectively invisible) — recoloured to white. The original hero
   headline is a `<p>` and its only `<h1>` is in the services section; this uses a
   single `<h1>` on the hero for correct hierarchy.
6. **Omitted.** The third-party Clutch review widget (a remote script) is
   represented by the static badge the original keeps commented out beside it, and
   the AI chatbot widget and WhatsApp float are not reproduced.

## Ownership note

The logo, client logos, testimonials, office addresses and case-study imagery all
belong to ZeeFrames. This is a technique study; anything client-facing would need
that content replaced.
