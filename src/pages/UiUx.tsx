import { Link } from 'react-router-dom';
import { VideoIcon } from 'lucide-react';
import {
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from '@/components/ui/animated-gallery';
import { Button } from '@/components/ui/button';

// Original UI illustrations (dashboards, mobile apps, landing pages, design
// systems, flows) in /public/images/uiux. Swap in real project screens later.
const screen = (n: number) => `/images/uiux/screen-${String(n).padStart(2, '0')}.svg`;

const COLUMNS = [
  { yRange: ['-10%', '2%'], className: '-mt-2', screens: [1, 4, 7, 10] },
  { yRange: ['15%', '5%'], className: 'mt-[-50%]', screens: [3, 9, 5, 12] },
  { yRange: ['-10%', '2%'], className: '-mt-2', screens: [2, 6, 8, 11] },
];

export default function UiUx() {
  return (
    <section
      className="relative bg-background"
      aria-labelledby="uiux-heading"
    >
      <ContainerStagger className="relative z-20 -mb-12 px-6 pt-12 text-center max-[575px]:pt-8">
        <ContainerAnimated>
          <p className="mb-5 inline-block rounded-full border border-ink-400 bg-white/5 px-4 py-1.5 font-inter text-sm font-medium text-white/80 backdrop-blur-sm">
            UI/UX Design
          </p>
        </ContainerAnimated>

        <ContainerAnimated>
          <h1
            id="uiux-heading"
            className="mx-auto max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tighter text-white sm:text-5xl md:text-6xl"
          >
            Interfaces that feel{' '}
            <span className="bg-gradient-to-r from-indigo-300 to-violet-200 bg-clip-text text-transparent">
              obvious
            </span>{' '}
            to use
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="my-5">
          <p className="mx-auto max-w-xl text-balance font-inter text-base leading-normal text-white/80 md:text-lg">
            Research, wireframes, and polished interfaces for websites, apps,
            and products, built to be easy to use and easy to hand off.
          </p>
        </ContainerAnimated>

        <ContainerAnimated>
          <Button asChild className="h-11 gap-2 rounded-full px-6 hover:bg-primary-2">
            <Link to="/#contact">
              Book a free call
              <VideoIcon className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </ContainerAnimated>
      </ContainerStagger>

      {/* Soft colored glow behind the gallery */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-10 h-[70vh] w-full opacity-60"
        style={{
          background: 'linear-gradient(to right, #6b7280, #663399, #3b82f6)',
          filter: 'blur(84px)',
          mixBlendMode: 'screen',
        }}
      />

      <ContainerScroll className="relative h-[350vh]" aria-hidden="true">
        <ContainerSticky className="top-[var(--header-height)] h-[calc(100svh-var(--header-height))]">
          <GalleryContainer>
            {COLUMNS.map((col, c) => (
              <GalleryCol key={c} yRange={col.yRange} className={col.className}>
                {col.screens.map((n) => (
                  <img
                    key={n}
                    src={screen(n)}
                    alt=""
                    width={1280}
                    height={720}
                    decoding="async"
                    className="block aspect-video h-auto max-h-full w-full rounded-md object-cover shadow max-[575px]:aspect-[3/4]"
                  />
                ))}
              </GalleryCol>
            ))}
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </section>
  );
}
