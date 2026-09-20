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
import { CTASection } from '../components/CTASection';
import {
  ConceptWorkSection,
  DeliverablesSection,
  FaqSection,
  IncludesSection,
  PackagesSection,
  ProblemSection,
  ProcessSection,
  RelatedSection,
  WhySection,
} from '../components/service-page/sections';
import {
  uiuxConcepts,
  uiuxDeliverables,
  uiuxFaqs,
  uiuxFileFormats,
  uiuxIncludes,
  uiuxPackages,
  uiuxProblems,
  uiuxSteps,
  uiuxWhyUs,
} from '../data/uiux';

// Project screens for the hero gallery (cropped to 4:3 WebP in
// /public/images/uiux/gallery). Swap or reorder them here.
const image = (name: string) => `/images/uiux/gallery/${name}.webp`;

const COLUMNS = [
  {
    yRange: ['-10%', '2%'],
    className: '-mt-2',
    images: ['reform', 'vent-travel', 'health-vital', 'timezone'],
  },
  {
    yRange: ['15%', '5%'],
    className: 'mt-[-50%]',
    images: ['amg-cars', 'collectr', 'padel-club'],
  },
  {
    yRange: ['-10%', '2%'],
    // Phones get two columns, so the third is desktop-only.
    className: '-mt-2 max-[575px]:hidden',
    images: ['arena-game', 'community-app', 'techdrive'],
  },
];

export default function UiUx() {
  return (
    <>
      {/* Hero */}
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
            <Button
              asChild
              className="h-11 gap-2 rounded-full px-6 hover:bg-primary-2"
            >
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
            <GalleryContainer className="max-[575px]:grid-cols-2">
              {COLUMNS.map((col, c) => (
                <GalleryCol
                  key={c}
                  yRange={col.yRange}
                  className={col.className}
                >
                  {col.images.map((name) => (
                    <img
                      key={name}
                      src={image(name)}
                      alt=""
                      width={1000}
                      height={750}
                      decoding="async"
                      className="block aspect-[4/3] h-auto max-h-full w-full rounded-md object-cover shadow max-[575px]:aspect-[3/4]"
                    />
                  ))}
                </GalleryCol>
              ))}
            </GalleryContainer>
          </ContainerSticky>
        </ContainerScroll>
      </section>

      <ProblemSection
        idPrefix="uiux"
        eyebrow="The problem"
        title="Good products, lost to confusing design"
        description="Most usability problems aren’t about visuals. They’re about design that was never tested against real people."
        image={{
          src: '/images/uiux/before-after.svg',
          alt: 'Before and after: a cluttered sign-up page with pop-ups and too many fields, next to a clean redesign with two fields and one clear button',
          width: 1200,
          height: 760,
        }}
        items={uiuxProblems}
      />

      <IncludesSection
        idPrefix="uiux"
        eyebrow="What’s included"
        title="Everything from first sketch to final screen"
        description="Take the full design process, or the stage you need most."
        items={uiuxIncludes}
      />

      <ProcessSection
        idPrefix="uiux"
        eyebrow="Our process"
        title="From first question to finished interface"
        description="Six clear stages, with your sign-off before we move on to the next."
        steps={uiuxSteps}
      />

      <ConceptWorkSection
        idPrefix="uiux"
        eyebrow="Our approach in action"
        title="Concept work that shows how we design"
        description="Original product concepts made to show our approach. Client projects will appear here as they’re published."
        concepts={uiuxConcepts}
      />

      <DeliverablesSection
        idPrefix="uiux"
        eyebrow="What you receive"
        title="Design your developers can actually build"
        description="A clear handover: everything your team needs to build the product without guessing."
        image={{
          src: '/images/uiux/figma-file.svg',
          alt: 'A design file open in an editor: layers on the left, desktop and mobile screens with a component sheet on the canvas, and properties on the right',
          width: 1200,
          height: 760,
        }}
        items={uiuxDeliverables}
        formatsLabel="Delivered in"
        formats={uiuxFileFormats}
      />

      <PackagesSection
        idPrefix="uiux"
        serviceName="UI/UX Design"
        eyebrow="Ways to work with us"
        title="Pick the level of support you need"
        description="Every project is scoped to your product, so pricing is quoted after a short call."
        packages={uiuxPackages}
      />

      <WhySection
        idPrefix="uiux"
        eyebrow="Why Metron Studio"
        title="The best interface is the one nobody has to think about"
        items={uiuxWhyUs}
      />

      <FaqSection
        ariaLabel="UI/UX FAQs"
        eyebrow="FAQs"
        title="UI/UX questions, answered"
        description="The things people usually ask before starting a design project."
        items={uiuxFaqs}
      />

      <RelatedSection
        idPrefix="uiux"
        eyebrow="Put your design to work"
        title="Now bring it to life"
        description="A great design needs a great build behind it. We can take it from prototype to a live product, on a brand that ties it together."
        slugs={['branding', 'web-development', 'no-code-development']}
      />

      <CTASection />
    </>
  );
}
