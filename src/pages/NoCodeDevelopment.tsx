import { Link } from 'react-router-dom';
import { ArrowRight, Layers3, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-01-utils/hero';
import { BrandSlider } from '@/components/ui/hero-01-utils/brand-slider';
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
  nocodeConcepts,
  nocodeDeliverables,
  nocodeFaqs,
  nocodeIncludes,
  nocodePackages,
  nocodeProblems,
  nocodeSteps,
  nocodeWhyUs,
} from '../data/nocode';

export default function NoCodeDevelopment() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headingId="nocode-heading"
        eyebrow="No-Code Development"
        title="Launch in days, not months"
        description="Websites, MVPs, and internal tools built fast on Webflow, Framer, Bubble, and Lovable, without cutting corners on design."
        primaryCta={
          <Button
            asChild
            className="h-11 gap-2 rounded-full px-6 hover:bg-primary-2"
          >
            <Link to="/#contact">
              Book a free call
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Button>
        }
        preview={{
          src: '/images/nocode/hero-preview.webp',
          alt: 'A project open in the Webflow Designer, showing a running club anniversary campaign page with the layers, style, and layout panels visible',
          width: 1912,
          height: 1130,
        }}
      />

      <BrandSlider
        items={[
          { icon: Zap, name: 'Webflow' },
          { icon: Layers3, name: 'Framer' },
          { icon: Layers3, name: 'Bubble' },
          { icon: Sparkles, name: 'Lovable' },
        ]}
      />

      <ProblemSection
        idPrefix="nocode"
        eyebrow="The problem"
        title="Good ideas, held back by a slow build"
        description="Not every project needs a months-long custom build. Most just need it done well, and done now."
        image={{
          src: '/images/nocode/before-after.svg',
          alt: 'Before and after: an 8-week custom build timeline stalled after two stages, next to a 3-day no-code build that is already live',
          width: 1200,
          height: 760,
        }}
        items={nocodeProblems}
      />

      <IncludesSection
        idPrefix="nocode"
        eyebrow="What we build"
        title="The right platform for what you need"
        description="From a marketing site to a full internal tool, matched to the platform that fits."
        items={nocodeIncludes}
      />

      <ProcessSection
        idPrefix="nocode"
        eyebrow="Our process"
        title="From first call to a live site or app"
        description="Six clear stages, with your sign-off before we move on to the next."
        steps={nocodeSteps}
      />

      <ConceptWorkSection
        idPrefix="nocode"
        eyebrow="Our approach in action"
        title="Concept builds that show how we work"
        description="Original no-code concepts made to show our approach. Client projects will appear here as they’re published."
        concepts={nocodeConcepts}
      />

      <DeliverablesSection
        idPrefix="nocode"
        eyebrow="What you receive"
        title="A site or app your team can run"
        description="A clear handover: everything you need to edit, manage, and grow it without depending on us."
        image={{
          src: '/images/nocode/handover.svg',
          alt: 'A live no-code site beside a project handover card with editor access granted, a training video, documentation links, and the platforms covered',
          width: 1200,
          height: 760,
        }}
        items={nocodeDeliverables}
      />

      <PackagesSection
        idPrefix="nocode"
        serviceName="No-Code Development"
        eyebrow="Ways to work with us"
        title="Pick the build that fits"
        description="Every project is scoped to your business, so pricing is quoted after a short call."
        packages={nocodePackages}
      />

      <WhySection
        idPrefix="nocode"
        eyebrow="Why Metron Studio"
        title="Fast doesn’t have to mean generic"
        items={nocodeWhyUs}
      />

      <FaqSection
        ariaLabel="No-code development FAQs"
        eyebrow="FAQs"
        title="No-code questions, answered"
        description="The things people usually ask before starting a no-code project."
        items={nocodeFaqs}
      />

      <RelatedSection
        idPrefix="nocode"
        eyebrow="Round out the build"
        title="A fast build still needs the full picture"
        description="Brand, interface design, and search visibility all make a fast build perform like a considered one."
        slugs={['branding', 'ui-ux-design', 'seo']}
      />

      <CTASection />
    </>
  );
}
