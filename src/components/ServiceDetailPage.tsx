import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { reveal } from '../hooks/useReveal';
import type { ServiceGroup } from '../data/services';

/** Shared template for the five /services/* pages. */
export function ServiceDetailPage({ group }: { group: ServiceGroup }) {
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

      <section className="section-pad" aria-labelledby="service-includes-heading">
        <div className="container-zf">
          <h2 id="service-includes-heading" className="sr-only">
            What&apos;s included
          </h2>
          <div className="mega-panel max-[575px]:grid-cols-1">
            {group.cards.map((card) => (
              <motion.div key={card.title} {...reveal()} className="service-item-card">
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
