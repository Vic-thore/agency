import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SaasHero } from '@/components/ui/saa-s-template';
import { Button } from '@/components/ui/button';
import { CTASection } from '../components/CTASection';
import {
  FaqSection,
  IncludesSection,
  PackagesSection,
  ProcessSection,
  RelatedSection,
  SplitCalloutSection,
  ToolsSection,
  UseCaseTabsSection,
  WhySection,
} from '../components/service-page/sections';
import {
  aiCapabilities,
  aiEdge,
  aiFaqs,
  aiPackages,
  aiSteps,
  aiToolGroups,
  aiTrustFacts,
  aiUseCases,
  aiWhyUs,
} from '../data/aiSolutions';

export default function AiSolutions() {
  return (
    <>
      <SaasHero
        headingId="ai-heading"
        tagline={<span className="font-inter text-xs text-muted-foreground">AI solutions</span>}
        title={
          <>
            Put AI to work <br className="hidden md:block" />
            in your business
          </>
        }
        description={
          <>
            Practical assistants and automations that save your team time,{' '}
            <br className="hidden md:block" />
            answer customers faster, and keep people in charge.
          </>
        }
        actions={
          <>
            <Button
              asChild
              className="h-12 gap-2 rounded-lg bg-transparent bg-gradient-to-b from-white via-white/95 to-white/60 px-8 text-base text-black transition-all hover:scale-105 active:scale-95"
            >
              <Link to="/#contact">
                Book a free call
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-lg border-white/20 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#ai-use-cases-tabs-heading">See use cases</a>
            </Button>
          </>
        }
        preview={{
          src: '/images/ai/hero-preview.svg',
          alt: 'A customer chat answered by an AI assistant, beside a workflow showing a message being read, checked against an order system, and replied to or handed to a person',
          width: 1600,
          height: 1000,
        }}
      />

      <section aria-label="Why work with us" className="border-y border-ink-400 py-6">
        <ul className="container-zf flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-inter text-sm text-gray-495">
          {aiTrustFacts.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      <WhySection idPrefix="ai-edge" eyebrow="Our edge" title="AI that fits how you work" items={aiEdge} />

      <IncludesSection
        idPrefix="ai"
        eyebrow="What we build"
        title="Where AI helps most"
        description="Six places we’ve found AI and automation save real time, without adding complexity."
        items={aiCapabilities}
      />

      <UseCaseTabsSection
        idPrefix="ai-use-cases"
        eyebrow="Use cases"
        title="What could AI change in your business?"
        description="Pick the area that costs you the most time and see what it could look like."
        tabs={aiUseCases}
        cta={{ label: 'Talk through my use case', to: '/#contact' }}
      />

      <ProcessSection
        idPrefix="ai"
        eyebrow="Our process"
        title="From idea to a working assistant"
        description="Five clear stages, starting small so you see value early."
        steps={aiSteps}
      />

      <SplitCalloutSection
        idPrefix="ai-start"
        eyebrow="Start small"
        title="Not sure where to begin? Start with one workflow"
        description="Tell us the task that eats the most time. We’ll tell you honestly whether AI is the right tool, and what a first version would look like."
        points={['One workflow, built and live', 'Connected to the tools you already use', 'A person always able to step in']}
        cta={{ label: 'Book a free call', to: '/#contact' }}
        lottie="/lottie/talk.json"
        image={{
          src: '/images/seo/dive-local.svg',
          alt: 'A chat conversation: a question comes in, and a reply is typed and sent',
          width: 600,
          height: 400,
        }}
      />

      <PackagesSection
        idPrefix="ai"
        serviceName="AI solutions"
        eyebrow="Ways to work with us"
        title="Choose how you want to start"
        description="Every engagement is scoped to your business, so pricing is quoted after a short call."
        packages={aiPackages}
      />

      <WhySection idPrefix="ai-why" eyebrow="Why Varoq" title="AI you can trust with real work" items={aiWhyUs} />

      <ToolsSection
        idPrefix="ai"
        eyebrow="Tools"
        title="The tools we work with"
        description="We pick what suits your business and the tools you already use, not what’s fashionable."
        groups={aiToolGroups}
      />

      <FaqSection
        ariaLabel="AI FAQs"
        eyebrow="FAQs"
        title="AI questions, answered"
        description="What people usually ask before starting with AI."
        items={aiFaqs}
      />

      <RelatedSection
        idPrefix="ai"
        eyebrow="Round out your presence"
        title="AI works best alongside the rest"
        description="A clear brand, a fast website and good search visibility give your AI something solid to work with."
        slugs={['automation', 'web-development', 'seo']}
      />

      <CTASection />
    </>
  );
}
