import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Layers } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { reveal } from '../hooks/useReveal';
import { cn } from '../lib/cn';
import type { ServiceGroup } from '../data/services';

const SECTIONS = [
  { id: 'who-we-are', label: 'Who We Help' },
  { id: 'the-gap', label: 'The Gap' },
  { id: 'services', label: 'How We Help' },
  { id: 'process', label: 'Our Process' },
  { id: 'tools', label: 'Stack' },
  { id: 'use-cases', label: 'Use Cases' },
  { id: 'why-us', label: 'Why Us' },
];

/** Shared long-form template for the five /services/* pages. */
export function ServiceDetailPage({ group }: { group: ServiceGroup }) {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [group.slug]);

  return (
    <>
      <section className="section-pad" aria-labelledby="service-heading">
        <div className="container-zf">
          <SectionHeading
            id="service-heading"
            as="h1"
            eyebrow={group.tabLabel}
            title={group.heroTitle}
            description={group.heroBody}
          />
          {group.comingSoon && (
            <div className="mt-6 flex justify-center">
              <span className="badge">Coming soon</span>
            </div>
          )}
        </div>
      </section>

      <section className="section-pad pt-0" aria-label={`${group.tabLabel} details`}>
        <div className="container-zf">
          <div ref={containerRef} className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr]">
            <nav
              className="mega-menu-tabs hidden lg:block"
              style={{ top: 'calc(var(--header-height) + 24px)' }}
              aria-label={`${group.tabLabel} sections`}
            >
              {SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={cn('mega-tab', activeId === section.id && 'is-active')}
                >
                  <span className="text-[15px] leading-6 font-medium text-white">
                    {section.label}
                  </span>
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-24 max-[575px]:gap-16">
              {/* Who We Help */}
              <div id="who-we-are" className="scroll-mt-24">
                <p className="eyebrow text-primary">Who We Help</p>
                <h2 className="section-title text-left text-white">
                  Built for teams like yours
                </h2>
                <div className="mt-8 flex flex-col gap-4">
                  {group.whoWeHelp.map((item, i) => (
                    <motion.div
                      key={item.title}
                      {...reveal(Math.min(i, 3) * 0.05)}
                      className="service-item-card"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 font-tight text-[14px] font-semibold text-primary">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>
                        <span className="block text-[16px] leading-6 font-semibold text-white">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-[16px] leading-6 font-normal text-white/70">
                          {item.description}
                        </span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* The Gap */}
              <div id="the-gap" className="scroll-mt-24">
                <p className="eyebrow text-primary">The Gap</p>
                <h2 className="section-title text-left text-white">
                  Where things usually break down
                </h2>
                <div className="mt-8 flex flex-col gap-4">
                  {group.theGap.map((point, i) => (
                    <motion.div
                      key={point}
                      {...reveal(Math.min(i, 3) * 0.05)}
                      className="service-item-card"
                    >
                      <AlertCircle
                        size={20}
                        className="mt-0.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="block text-[16px] leading-6 font-normal text-white/90">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* How We Help */}
              <div id="services" className="scroll-mt-24">
                <p className="eyebrow text-primary">How We Help</p>
                <h2 className="section-title text-left text-white">
                  What&apos;s included
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {group.cards.map((card, i) => (
                    <motion.div
                      key={card.title}
                      {...reveal(Math.min(i, 3) * 0.05)}
                      className="service-item-card"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <card.icon size={20} className="text-primary" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[16px] leading-6 font-semibold text-white">
                          {card.title}
                        </span>
                        <span className="mt-1 block text-[16px] leading-6 font-normal text-white/70">
                          {card.description}
                        </span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Our Process */}
              <div id="process" className="scroll-mt-24">
                <p className="eyebrow text-primary">Our Process</p>
                <h2 className="section-title text-left text-white">
                  How an engagement runs
                </h2>
                <div className="mt-8 flex flex-col gap-4">
                  {group.process.map((step, i) => (
                    <motion.div
                      key={step.phase}
                      {...reveal(Math.min(i, 3) * 0.05)}
                      className="service-item-card"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 font-tight text-[14px] font-semibold text-primary">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>
                        <span className="block text-[16px] leading-6 font-semibold text-white">
                          {step.phase}
                        </span>
                        <span className="mt-1 block text-[16px] leading-6 font-normal text-white/70">
                          {step.description}
                        </span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stack */}
              <div id="tools" className="scroll-mt-24">
                <p className="eyebrow text-primary">Stack</p>
                <h2 className="section-title text-left text-white">
                  Tools we work in
                </h2>
                <motion.div {...reveal()} className="mt-8 flex flex-wrap gap-3">
                  {group.stack.map((tool) => (
                    <span key={tool} className="badge">
                      {tool}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Use Cases */}
              <div id="use-cases" className="scroll-mt-24">
                <p className="eyebrow text-primary">Use Cases</p>
                <h2 className="section-title text-left text-white">
                  Where this fits
                </h2>
                <p className="mt-2 font-inter text-[15px] leading-6 text-white/60">
                  Case studies for these engagements are on the way — get in
                  touch and we&apos;ll walk you through examples of similar work.
                </p>
                <div className="mt-8 flex flex-col gap-4">
                  {group.useCases.map((useCase, i) => (
                    <motion.div
                      key={useCase}
                      {...reveal(Math.min(i, 3) * 0.05)}
                      className="service-item-card"
                    >
                      <Layers
                        size={20}
                        className="shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="block text-[16px] leading-6 font-normal text-white/90">
                        {useCase}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Why Us */}
              <div id="why-us" className="scroll-mt-24">
                <p className="eyebrow text-primary">Why Us</p>
                <h2 className="section-title text-left text-white">
                  Why Metron Studio
                </h2>
                <div className="mt-8 flex flex-col gap-4">
                  {group.whyUs.map((point, i) => (
                    <motion.div
                      key={point}
                      {...reveal(Math.min(i, 3) * 0.05)}
                      className="service-item-card"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="block text-[16px] leading-6 font-normal text-white/90">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="service-cta-heading">
        <div className="container-zf">
          <motion.div
            {...reveal()}
            className="mx-auto flex max-w-[640px] flex-col items-center gap-6 text-center"
          >
            <h2 id="service-cta-heading" className="section-title text-white">
              Got a project in mind?
            </h2>
            <a href="/#contact" className="btn btn-primary font-inter">
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
