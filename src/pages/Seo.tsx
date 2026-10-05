import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SaasHero } from '@/components/ui/saa-s-template';
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
  seoConcepts,
  seoDeliverables,
  seoFaqs,
  seoIncludes,
  seoPackages,
  seoProblems,
  seoSteps,
  seoWhyUs,
} from '../data/seo';

export default function Seo() {
  return (
    <>
      <SaasHero
        headingId="seo-heading"
        tagline={
          <span className="font-inter text-xs text-muted-foreground">SEO</span>
        }
        title={
          <>
            Be the business <br className="hidden md:block" />
            people find first
          </>
        }
        description={
          <>
            Technical fixes, content, and local search, so the people already{' '}
            <br className="hidden md:block" />
            looking for what you offer find you, and get in touch.
          </>
        }
        actions={
          <Button
            asChild
            className="h-12 gap-2 rounded-lg bg-transparent bg-gradient-to-b from-white via-white/95 to-white/60 px-8 text-base text-black transition-all hover:scale-105 active:scale-95"
          >
            <Link to="/#contact">
              Book a free call
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Button>
        }
        preview={{
          // Original illustration in /public/images/seo. Swap in a real
          // results screenshot when there is one.
          src: '/images/seo/hero-preview.svg',
          alt: 'A dark search results page with a business ranked first, an organic visits chart, a mobile local result with a map, a site health check, and a structured data snippet',
          width: 1600,
          height: 1000,
        }}
      />

      <ProblemSection
        idPrefix="seo"
        eyebrow="The problem"
        title="Good businesses, hard to find"
        description="Most SEO problems aren’t about effort. They’re about being invisible for the searches that matter, and not knowing why."
        image={{
          src: '/images/seo/before-after.svg',
          alt: 'Before and after: a business buried on page three of the search results with flat traffic, next to the same business ranked first with reviews and climbing traffic',
          width: 1200,
          height: 760,
        }}
        items={seoProblems}
      />

      <IncludesSection
        idPrefix="seo"
        eyebrow="What we do"
        title="Everything it takes to be found"
        description="From the technical foundations to the content and links that move you up, tied to enquiries you can measure."
        items={seoIncludes}
      />

      <ProcessSection
        idPrefix="seo"
        eyebrow="Our process"
        title="From first audit to steady growth"
        description="Six clear stages, with a plan you approve before any work begins."
        steps={seoSteps}
      />

      <ConceptWorkSection
        idPrefix="seo"
        eyebrow="Our approach in action"
        title="Concept projects that show how we work"
        description="Original concepts made to show our approach. Client results will appear here as they’re published."
        concepts={seoConcepts}
      />

      <DeliverablesSection
        idPrefix="seo"
        eyebrow="What you receive"
        title="A clear plan, and the proof it’s working"
        description="Everything you need to understand where you stand, what we’re doing about it, and what it’s delivering."
        image={{
          src: '/images/seo/handover.svg',
          alt: 'A technical audit checklist, a keyword map, a content calendar, a monthly report with a rising chart, and a handover pack checklist',
          width: 1200,
          height: 760,
        }}
        items={seoDeliverables}
      />

      <PackagesSection
        idPrefix="seo"
        serviceName="SEO"
        eyebrow="Ways to work with us"
        title="Choose the support that fits"
        description="Every engagement is scoped to your market and goals, so pricing is quoted after a short call."
        packages={seoPackages}
      />

      <WhySection
        idPrefix="seo"
        eyebrow="Why Varoq"
        title="SEO that earns its keep"
        items={seoWhyUs}
      />

      <FaqSection
        ariaLabel="SEO FAQs"
        eyebrow="FAQs"
        title="SEO questions, answered"
        description="The things people usually ask before starting with SEO."
        items={seoFaqs}
      />

      <RelatedSection
        idPrefix="seo"
        eyebrow="Round out your presence"
        title="Search works harder with the right partners"
        description="A fast website, a strong brand, and a clear design all help people find you and choose you. We can take care of them together."
        slugs={['web-development', 'branding', 'ui-ux-design']}
      />

      <CTASection />
    </>
  );
}
