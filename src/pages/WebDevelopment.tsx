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
  webdevConcepts,
  webdevDeliverables,
  webdevFaqs,
  webdevIncludes,
  webdevPackages,
  webdevProblems,
  webdevSteps,
  webdevWhyUs,
} from '../data/webdev';

export default function WebDevelopment() {
  return (
    <>
      <SaasHero
        headingId="webdev-heading"
        tagline={
          <span className="font-inter text-xs text-muted-foreground">
            Web Development
          </span>
        }
        title={
          <>
            Give your business <br className="hidden md:block" />
            the website it deserves
          </>
        }
        description={
          <>
            Fast, secure, and easy-to-manage websites and web apps,{' '}
            <br className="hidden md:block" />
            designed to look sharp and turn visitors into customers.
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
          // Original illustration in /public/images/web. Swap in a real project
          // screenshot when there is one.
          src: '/images/web/hero-preview.svg',
          alt: 'A dark website design in a browser window, with its responsive mobile version, a performance check card, and a code snippet',
          width: 1600,
          height: 1000,
        }}
      />

      <ProblemSection
        idPrefix="webdev"
        eyebrow="The problem"
        title="Good businesses, held back by their websites"
        description="Most website problems aren’t about looks. They’re about speed, phones, and how hard the site is to keep up to date."
        image={{
          src: '/images/web/before-after.svg',
          alt: 'Before and after: a dated, cluttered website that breaks on a phone, next to a clean modern site that loads fast and works on mobile',
          width: 1200,
          height: 760,
        }}
        items={webdevProblems}
      />

      <IncludesSection
        idPrefix="webdev"
        eyebrow="What we build"
        title="From a single page to a full web app"
        description="Whatever your business needs online, built to load fast and easy to run."
        items={webdevIncludes}
      />

      <ProcessSection
        idPrefix="webdev"
        eyebrow="Our process"
        title="From first brief to live website"
        description="Six clear stages, with your sign-off before we move on to the next."
        steps={webdevSteps}
      />

      <ConceptWorkSection
        idPrefix="webdev"
        eyebrow="Our approach in action"
        title="Concept sites that show how we build"
        description="Original website concepts made to show our approach. Client projects will appear here as they’re published."
        concepts={webdevConcepts}
      />

      <DeliverablesSection
        idPrefix="webdev"
        eyebrow="What you receive"
        title="A website you can run without us"
        description="A clear handover: everything you need to edit, run, and grow your site on your own."
        image={{
          src: '/images/web/handover.svg',
          alt: 'A live website beside a deployment status card, a performance check, a repository file tree, a content editor, and a handover guide',
          width: 1200,
          height: 760,
        }}
        items={webdevDeliverables}
      />

      <PackagesSection
        idPrefix="webdev"
        serviceName="Web Development"
        eyebrow="Ways to work with us"
        title="Choose the build that fits"
        description="Every project is scoped to your business, so pricing is quoted after a short call."
        packages={webdevPackages}
      />

      <WhySection
        idPrefix="webdev"
        eyebrow="Why Metron Studio"
        title="A great website keeps working long after launch"
        items={webdevWhyUs}
      />

      <FaqSection
        ariaLabel="Web development FAQs"
        eyebrow="FAQs"
        title="Web development questions, answered"
        description="The things people usually ask before starting a website project."
        items={webdevFaqs}
      />

      <RelatedSection
        idPrefix="webdev"
        eyebrow="Round out your presence"
        title="A website works harder with the right partners"
        description="Great design, a strong brand, and search visibility all make a website perform. We can take care of them together."
        slugs={['branding', 'ui-ux-design', 'seo']}
      />

      <CTASection />
    </>
  );
}
