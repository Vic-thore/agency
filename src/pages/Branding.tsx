import { ImageStreamHero } from '@/components/ui/image-stream-hero';
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
  brandingConcepts,
  brandingDeliverables,
  brandingFaqs,
  brandingFileFormats,
  brandingIncludes,
  brandingPackages,
  brandingProblems,
  brandingSteps,
  brandingWhyUs,
} from '../data/branding';

// Original brand-board tiles (identity marks, palettes, type, packaging) that
// live in /public/images/branding. Swap these for real client work as it comes.
const HERO_IMAGES = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/branding/brand-${String(i + 1).padStart(2, '0')}.svg`,
}));

export default function Branding() {
  return (
    <>
      {/* Hero */}
      <ImageStreamHero
        images={HERO_IMAGES}
        role="region"
        aria-labelledby="branding-heading"
        className="h-[max(640px,calc(100svh-var(--header-height)))] w-full bg-background"
      >
        <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 py-12 text-center max-[575px]:py-8">
          <div className="flex flex-col items-center">
            <p className="mb-4 inline-block rounded-full border border-ink-400 bg-white/5 px-4 py-1.5 font-inter text-sm font-medium text-white/80 backdrop-blur-sm">
              Branding
            </p>
            <h1
              id="branding-heading"
              className="max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tighter text-white sm:text-5xl md:text-6xl"
            >
              A brand that makes you look as good as you are
            </h1>
          </div>
          <p className="max-w-md text-balance font-inter text-sm text-white/80 md:text-base">
            Strategy, identity, and guidelines for businesses ready to be taken
            seriously, from a name and logo to a complete brand system.
          </p>
        </div>
      </ImageStreamHero>

      <ProblemSection
        idPrefix="branding"
        eyebrow="The problem"
        title="Good businesses, held back by their branding"
        description="Most brand problems aren’t about a bad logo. They’re about a brand that doesn’t hold together."
        image={{
          src: '/images/branding/problem-before-after.svg',
          alt: 'Before and after: mismatched brand materials on the left, one cohesive branded set on the right',
          width: 1200,
          height: 760,
        }}
        items={brandingProblems}
      />

      <IncludesSection
        idPrefix="branding"
        eyebrow="What’s included"
        title="Everything a brand needs, nothing it doesn’t"
        description="Take the full system, or just the pieces you need."
        items={brandingIncludes}
      />

      <ProcessSection
        idPrefix="branding"
        eyebrow="Our process"
        title="From first conversation to finished brand"
        description="Six clear stages, with your sign-off before we move on to the next."
        steps={brandingSteps}
      />

      <ConceptWorkSection
        idPrefix="branding"
        eyebrow="Our approach in action"
        title="Concept work that shows how we think"
        description="Original brand concepts made to show our approach. Client projects will appear here as they’re published."
        concepts={brandingConcepts}
      />

      <DeliverablesSection
        idPrefix="branding"
        eyebrow="What you receive"
        title="A brand you can actually use"
        description="A clear handover: everything you need to run your brand without us in the room."
        image={{
          src: '/images/branding/guidelines-mockup.svg',
          alt: 'A brand guidelines document: a cover with the logo, a color palette page, and a typography page',
          width: 1200,
          height: 760,
        }}
        items={brandingDeliverables}
        formats={brandingFileFormats}
      />

      <PackagesSection
        idPrefix="branding"
        serviceName="Branding"
        eyebrow="Ways to work with us"
        title="Start with what you need"
        description="Every project is scoped to your business, so pricing is quoted after a short call."
        packages={brandingPackages}
      />

      <WhySection
        idPrefix="branding"
        eyebrow="Why Metron Studio"
        title="A brand is only as good as how consistently it shows up"
        items={brandingWhyUs}
      />

      <FaqSection
        ariaLabel="Branding FAQs"
        eyebrow="FAQs"
        title="Branding questions, answered"
        description="The things people usually ask before starting a brand project."
        items={brandingFaqs}
      />

      <RelatedSection
        idPrefix="branding"
        eyebrow="Put your brand to work"
        title="Now make it work everywhere"
        description="Your identity is only the start. We can carry it through your website, your product, and your search presence."
        slugs={['ui-ux-design', 'web-development', 'seo']}
      />

      {/* Closing CTA */}
      <CTASection />
    </>
  );
}
