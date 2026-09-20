import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Check, Globe, LayoutGrid, TrendingUp } from 'lucide-react';
import { ImageStreamHero } from '@/components/ui/image-stream-hero';
import { Button } from '@/components/ui/button';
import { CTASection } from '../components/CTASection';
import { FaqAccordion } from '../components/FaqAccordion';
import { SectionHeading } from '../components/SectionHeading';
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
import { serviceGroups } from '../data/services';
import { reveal } from '../hooks/useReveal';
import { cn } from '../lib/cn';

// Original brand-board tiles (identity marks, palettes, type, packaging) that
// live in /public/images/branding. Swap these for real client work as it comes.
const HERO_IMAGES = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/branding/brand-${String(i + 1).padStart(2, '0')}.svg`,
}));

// Related services shown at the end of the page.
const relatedIcons: Record<string, LucideIcon> = {
  'web-development': Globe,
  'ui-ux-design': LayoutGrid,
  seo: TrendingUp,
};
const relatedServices = serviceGroups.filter((group) => group.slug in relatedIcons);

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

      {/* The problem */}
      <section
        className="section-pad bg-cream"
        aria-labelledby="branding-problem-heading"
      >
        <div className="container-zf">
          <SectionHeading
            id="branding-problem-heading"
            className="max-w-[760px]"
            eyebrow="The problem"
            title="Good businesses, held back by their branding"
            description="Most brand problems aren’t about a bad logo. They’re about a brand that doesn’t hold together."
            tone="light"
          />

          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_1fr] max-[575px]:mt-8 max-[575px]:gap-8">
            <motion.div
              {...reveal()}
              className="overflow-hidden rounded-3xl border border-[var(--border-light)] bg-white shadow-sm"
            >
              <img
                src="/images/branding/problem-before-after.svg"
                alt="Before and after: mismatched brand materials on the left, one cohesive branded set on the right"
                width={1200}
                height={760}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </motion.div>

            <ul className="flex flex-col gap-8">
              {brandingProblems.map((item, i) => (
                <motion.li
                  key={item.title}
                  {...reveal(i * 0.06)}
                  className="flex gap-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white">
                    <item.icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-tight text-[22px] leading-normal text-black">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 font-inter text-[15px] leading-6 text-gray-muted-light">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section
        className="section-pad"
        aria-labelledby="branding-includes-heading"
      >
        <div className="container-zf">
          <SectionHeading
            id="branding-includes-heading"
            className="max-w-[760px]"
            eyebrow="What’s included"
            title="Everything a brand needs, nothing it doesn’t"
            description="Take the full system, or just the pieces you need."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-[575px]:mt-8">
            {brandingIncludes.map((item, i) => (
              <motion.div
                key={item.title}
                {...reveal(Math.min(i, 3) * 0.05)}
                className="group rounded-2xl border border-ink-400 bg-ink-800 p-8 transition-colors duration-300 hover:border-white/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-400 bg-ink text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                  <item.icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-tight text-[22px] leading-normal text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-inter text-[15px] leading-6 text-gray-495">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="section-pad bg-cream"
        aria-labelledby="branding-process-heading"
      >
        <div className="container-zf">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[360px_1fr] lg:items-start lg:gap-20">
            <motion.div {...reveal()} className="lg:sticky lg:top-28">
              <p className="eyebrow text-gray-muted-dark">Our process</p>
              <h2
                id="branding-process-heading"
                className="section-title mt-6 text-left text-black"
              >
                From first conversation to finished brand
              </h2>
              <p className="mt-4 font-inter text-[16px] leading-7 text-gray-muted-light">
                Six clear stages, with your sign-off before we move on to the
                next.
              </p>
            </motion.div>

            <ol>
              {brandingSteps.map((step, i) => (
                <motion.li
                  key={step.title}
                  {...reveal(Math.min(i, 3) * 0.05)}
                  className={cn(
                    'relative pl-16',
                    i < brandingSteps.length - 1 &&
                      'pb-10 after:absolute after:bottom-0 after:left-[19px] after:top-12 after:w-px after:bg-black/15',
                  )}
                >
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-black font-display text-[14px] font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="pt-1.5 font-tight text-[24px] leading-normal text-black">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[560px] font-inter text-[15px] leading-6 text-gray-muted-light">
                    {step.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Work: concept projects */}
      <section className="section-pad" aria-labelledby="branding-work-heading">
        <div className="container-zf">
          <SectionHeading
            id="branding-work-heading"
            className="max-w-[760px]"
            eyebrow="Our approach in action"
            title="Concept work that shows how we think"
            description="Original brand concepts made to show our approach. Client projects will appear here as they’re published."
          />

          <div className="mt-16 flex flex-col gap-20 max-[575px]:mt-8 max-[575px]:gap-14">
            {brandingConcepts.map((concept, i) => (
              <motion.article
                key={concept.name}
                {...reveal()}
                className={cn(
                  'grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14',
                  i % 2 === 1 && 'lg:[&>div:first-child]:order-2',
                )}
              >
                <div className="overflow-hidden rounded-3xl border border-ink-400 bg-ink-800">
                  <img
                    src={concept.image}
                    alt={concept.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full"
                  />
                </div>

                <div>
                  <span className="inline-block rounded-full border border-ink-400 bg-white/5 px-3 py-1 font-inter text-[12px] font-medium uppercase tracking-wide text-gray-495">
                    Concept · {concept.category}
                  </span>
                  <h3 className="mt-5 font-display text-[40px] font-semibold leading-none tracking-tight text-white max-[575px]:text-[32px]">
                    {concept.name}
                  </h3>
                  <p className="mt-5 font-inter text-[16px] leading-7 text-white">
                    {concept.brief}
                  </p>
                  <p className="mt-3 font-inter text-[15px] leading-6 text-gray-495">
                    {concept.approach}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {concept.delivered.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-ink-800 px-3.5 py-1.5 font-inter text-[13px] text-gray-495"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section
        className="section-pad bg-cream"
        aria-labelledby="branding-deliverables-heading"
      >
        <div className="container-zf">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              {...reveal()}
              className="overflow-hidden rounded-3xl border border-[var(--border-light)] shadow-sm"
            >
              <img
                src="/images/branding/guidelines-mockup.svg"
                alt="A brand guidelines document: a cover with the logo, a color palette page, and a typography page"
                width={1200}
                height={760}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </motion.div>

            <motion.div {...reveal(0.08)}>
              <p className="eyebrow text-gray-muted-dark">What you receive</p>
              <h2
                id="branding-deliverables-heading"
                className="section-title mt-6 text-left text-black"
              >
                A brand you can actually use
              </h2>
              <p className="mt-4 font-inter text-[16px] leading-7 text-gray-muted-light">
                A clear handover: everything you need to run your brand
                without us in the room.
              </p>

              <ul className="mt-8 flex flex-col gap-4">
                {brandingDeliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <Check size={14} aria-hidden="true" />
                    </span>
                    <span className="font-inter text-[16px] leading-6 text-black">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="mr-1 font-inter text-[13px] text-gray-muted-light">
                  Delivered as
                </span>
                {brandingFileFormats.map((format) => (
                  <span
                    key={format}
                    className="rounded-md border border-[var(--border-light)] bg-white px-2.5 py-1 font-inter text-[12px] font-semibold text-black"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section
        className="section-pad"
        aria-labelledby="branding-packages-heading"
      >
        <div className="container-zf">
          <SectionHeading
            id="branding-packages-heading"
            eyebrow="Ways to work with us"
            title="Start with what you need"
            description="Every project is scoped to your business, so pricing is quoted after a short call."
          />

          <div className="mt-16 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 max-[575px]:mt-8">
            {brandingPackages.map((tier, i) => (
              <motion.div
                key={tier.name}
                {...reveal(i * 0.06)}
                className={cn(
                  'relative flex flex-col rounded-3xl border p-8',
                  tier.highlight
                    ? 'border-white bg-white text-black'
                    : 'border-ink-400 bg-ink-800 text-white',
                )}
              >
                {tier.badge && (
                  <span className="absolute right-6 top-6 rounded-full bg-black px-3 py-1 font-inter text-[11px] font-semibold uppercase tracking-wide text-white">
                    {tier.badge}
                  </span>
                )}
                <h3 className="font-display text-[26px] font-semibold leading-tight">
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    'mt-2 font-inter text-[15px] leading-6',
                    tier.highlight ? 'text-gray-muted-light' : 'text-gray-495',
                  )}
                >
                  {tier.blurb}
                </p>

                <ul className="mt-8 flex flex-1 flex-col gap-3.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className={cn(
                          'mt-0.5 shrink-0',
                          tier.highlight ? 'text-black' : 'text-white',
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={cn(
                          'font-inter text-[15px] leading-6',
                          tier.highlight ? 'text-black' : 'text-gray-495',
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={cn(
                    'mt-8 h-11 gap-2 rounded-full px-6',
                    tier.highlight
                      ? 'bg-black text-white hover:bg-gray-900'
                      : 'hover:bg-primary-2',
                  )}
                >
                  <Link
                    to={`/?service=${encodeURIComponent(`Branding: ${tier.name}`)}#contact`}
                  >
                    Request a quote
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section
        className="section-pad bg-cream"
        aria-labelledby="branding-why-heading"
      >
        <div className="container-zf">
          <SectionHeading
            id="branding-why-heading"
            eyebrow="Why Metron Studio"
            title="A brand is only as good as how consistently it shows up"
            tone="light"
            className="max-w-[760px]"
          />

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 max-[575px]:mt-8 max-[575px]:gap-8">
            {brandingWhyUs.map((item, i) => (
              <motion.div
                key={item.title}
                {...reveal(i * 0.06)}
                className="border-t border-black/15 pt-6"
              >
                <item.icon size={28} className="text-black" aria-hidden="true" />
                <h3 className="mt-5 font-tight text-[22px] leading-normal text-black">
                  {item.title}
                </h3>
                <p className="mt-2 font-inter text-[15px] leading-6 text-gray-muted-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section-pad above-glow relative bg-ink"
        aria-label="Branding FAQs"
      >
        <div className="container-zf">
          <FaqAccordion
            eyebrow="FAQs"
            title="Branding questions, answered"
            description="The things people usually ask before starting a brand project."
            items={brandingFaqs}
            ctaLabel="Book a free call"
          />
        </div>
      </section>

      {/* Related services */}
      <section
        className="section-pad bg-cream"
        aria-labelledby="branding-related-heading"
      >
        <div className="container-zf">
          <SectionHeading
            id="branding-related-heading"
            className="max-w-[760px]"
            eyebrow="Put your brand to work"
            title="Now make it work everywhere"
            description="Your identity is only the start. We can carry it through your website, your product, and your search presence."
            tone="light"
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 max-[575px]:mt-8">
            {relatedServices.map((group, i) => {
              const Icon = relatedIcons[group.slug];
              return (
                <motion.div key={group.slug} {...reveal(i * 0.06)}>
                  <Link
                    to={group.href ?? `/services#${group.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-[var(--border-light)] p-8 transition-colors duration-300 hover:bg-white"
                  >
                    <Icon size={28} className="text-black" aria-hidden="true" />
                    <h3 className="mt-5 font-tight text-[22px] leading-normal text-black">
                      {group.tabLabel}
                    </h3>
                    <p className="mt-2 font-inter text-[15px] leading-6 text-gray-muted-light">
                      {group.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-inter text-[14px] font-medium text-black">
                      Learn more
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CTASection />
    </>
  );
}
