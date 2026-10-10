import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SaasHero } from '@/components/ui/saa-s-template';
import { Button } from '@/components/ui/button';
import { CTASection } from '../components/CTASection';
import {
  ConceptWorkSection,
  DeepDiveSection,
  DeliverablesSection,
  FaqSection,
  IncludesSection,
  PackagesSection,
  ProblemSection,
  ProcessSection,
  RelatedSection,
  SplitCalloutSection,
  WhySection,
} from '../components/service-page/sections';
import {
  seoConcepts,
  seoDeepDives,
  seoDeliverables,
  seoFaqs,
  seoIncludes,
  seoPackages,
  seoProblems,
  seoSteps,
  seoTrustFacts,
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
            Get a free SEO audit,<br className="hidden md:block" />
            and be found first
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
          <>
            <Button
              asChild
              className="h-12 gap-2 rounded-lg bg-transparent bg-gradient-to-b from-white via-white/95 to-white/60 px-8 text-base text-black transition-all hover:scale-105 active:scale-95"
            >
              <Link to="/#contact">
                Get my free audit
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-lg border-white/20 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#seo-work-heading">See concept work</a>
            </Button>
          </>
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

      <section aria-label="Why work with us" className="border-y border-ink-400 py-6">
        <ul className="container-zf flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-inter text-sm text-gray-495">
          {seoTrustFacts.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      </section>

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

      <DeepDiveSection idPrefix="seo" items={seoDeepDives} />

      <ProcessSection
        idPrefix="seo"
        eyebrow="Our process"
        title="From first audit to steady growth"
        description="Six clear stages, with a plan you approve before any work begins."
        steps={seoSteps}
      />

      <SplitCalloutSection
        idPrefix="seo-audit"
        eyebrow="Start here"
        title="Not sure where you stand? Start with a free audit"
        description="We look at how your site is found today, what’s holding it back, and where the quickest wins are. Then you decide what to do next."
        points={[
          'Technical health and speed',
          'Keywords you rank for, and the ones you’re missing',
          'How you compare with competitors',
        ]}
        cta={{ label: 'Get my free audit', to: '/#contact' }}
        lottie="/lottie/audit.json"
        image={{
          src: '/images/seo/dive-keywords.svg',
          alt: 'A web page being scanned, with a checklist of speed, keywords and competitors ticking off one by one',
          width: 600,
          height: 400,
        }}
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

      <SplitCalloutSection
        idPrefix="seo-talk"
        light
        flip
        eyebrow="Talk to us"
        title="Questions? Talk to a real person"
        description="Tell us about your business and what you want to be found for. We’ll reply within 24 hours with honest next steps."
        cta={{ label: 'Contact us', to: '/#contact' }}
        lottie="/lottie/talk.json"
        image={{
          src: '/images/seo/dive-local.svg',
          alt: 'A chat conversation: a question comes in, and a reply is typed and sent',
          width: 600,
          height: 400,
        }}
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
