import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Compass,
  PenTool,
  Hammer,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { FaqAccordion } from '../components/FaqAccordion';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';
import { reveal } from '../hooks/useReveal';
import { serviceGroups } from '../data/services';
import { SITE_NAME } from '../lib/assets';

const processSteps = [
  {
    icon: Compass,
    phase: 'Discover',
    description: 'Research, stakeholder interviews, and competitive review before anything gets designed.',
  },
  {
    icon: PenTool,
    phase: 'Design',
    description: 'Flows, wireframes, and high-fidelity screens, reviewed with you at every stage.',
  },
  {
    icon: Hammer,
    phase: 'Build',
    description: 'Development on the right platform for the job, matched to the approved design.',
  },
  {
    icon: Rocket,
    phase: 'Launch & Support',
    description: 'QA, handoff, and ongoing care so the work keeps working after launch.',
  },
];

const stack = [
  'Figma',
  'FigJam',
  'Framer',
  'Webflow',
  'WordPress',
  'Shopify',
  'Three.js',
  'GSAP',
  'n8n',
  'Claude',
  'Cursor',
  'ChatGPT',
  'Vercel',
  'Supabase',
  'Notion',
];

const useCases = [
  'Pre-launch product design',
  'Confusing dashboard redesign',
  'New company naming & identity',
  'Ecommerce store launch',
  'Scroll-triggered storytelling homepage',
  'Internal workflow automation',
];

const whyUs = [
  'One team designs and builds, so nothing gets lost in handoff.',
  'Research before visuals, always.',
  'Direct access to the person doing the work.',
  'Honest scoping — we tell you if something is a bad fit.',
];

const servicesFaqs = [
  {
    question: 'How do you scope a new project?',
    answer: [
      'We start with a short discovery call to understand the problem, not just the deliverable you have in mind. From there we send a written scope covering timeline, price, and what "done" looks like before any work starts.',
    ],
  },
  {
    question: 'Do you work with early-stage startups?',
    answer: [
      "Yes — a good chunk of our work is pre-launch product and brand design. We're used to moving fast on limited information and revisiting decisions as things firm up.",
    ],
  },
  {
    question: 'Can you just design, or just build?',
    answer: [
      "Either. Most clients use us for both since it removes the handoff gap, but design-only and development-only engagements are both common and scoped the same honest way.",
    ],
  },
  {
    question: 'What does an ongoing retainer look like?',
    answer: [
      'A fixed monthly block of design or development time, used for whatever comes up — new features, care-plan maintenance, or continued iteration on something we already shipped.',
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad" aria-labelledby="services-heading">
        <div className="container-zf">
          <SectionHeading
            id="services-heading"
            as="h1"
            eyebrow="What We Do"
            title="Every service, one accountable team."
            description={`${SITE_NAME} covers design, brand, build, motion, and automation — under one roof, so nothing gets lost between specialists.`}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad pt-0" aria-labelledby="services-grid-heading">
        <div className="container-zf">
          <h2 id="services-grid-heading" className="sr-only">
            Services
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.flatMap((group) =>
              group.cards.map((card, i) => (
                <motion.div key={`${group.slug}-${card.title}`} {...reveal(Math.min(i, 3) * 0.05)}>
                  <Link
                    to={`/?service=${encodeURIComponent(card.title)}#contact`}
                    className="service-item-card flex-col items-start"
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <card.icon size={20} className="text-primary" aria-hidden="true" />
                      </span>
                      <span className="badge">{group.tabLabel}</span>
                    </div>
                    <span className="mt-4 block text-[16px] leading-6 font-semibold text-white">
                      {card.title}
                    </span>
                    <span className="mt-1 block text-[16px] leading-6 font-normal text-white/70">
                      {card.description}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-inter text-[14px] font-medium text-primary">
                      Enquire about this
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-pad bg-cream" aria-labelledby="services-process-heading">
        <div className="container-zf">
          <SectionHeading
            id="services-process-heading"
            eyebrow="How We Work"
            title="A process built for accountability"
            tone="light"
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-[575px]:mt-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.phase}
                {...reveal(i * 0.05)}
                className="rounded-2xl border border-ink-400 bg-ink-800 p-8"
              >
                <step.icon size={28} className="text-primary" aria-hidden="true" />
                <h3 className="mt-5 font-tight text-[22px] leading-normal text-white">
                  {step.phase}
                </h3>
                <p className="mt-2 font-inter text-[15px] leading-6 text-gray-495">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-pad" aria-labelledby="services-stack-heading">
        <div className="container-zf">
          <SectionHeading
            id="services-stack-heading"
            eyebrow="Stack"
            title="Tools we work in"
          />
          <motion.div {...reveal()} className="mt-12 flex flex-wrap justify-center gap-3">
            {stack.map((tool) => (
              <span key={tool} className="badge">
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-pad bg-cream" aria-labelledby="services-usecases-heading">
        <div className="container-zf">
          <SectionHeading
            id="services-usecases-heading"
            eyebrow="Use Cases"
            title="Where this fits"
            tone="light"
          />
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 max-[575px]:mt-8">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase}
                {...reveal(Math.min(i, 3) * 0.05)}
                className="flex items-center gap-3 rounded-xl border border-ink-400 bg-ink-800 px-6 py-5"
              >
                <CheckCircle2 size={20} className="shrink-0 text-primary" aria-hidden="true" />
                <span className="font-inter text-[16px] text-white/90">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad" aria-labelledby="services-why-heading">
        <div className="container-zf">
          <SectionHeading
            id="services-why-heading"
            eyebrow="Why Us"
            title={`Why ${SITE_NAME}`}
          />
          <div className="mx-auto mt-12 flex max-w-[720px] flex-col gap-4">
            {whyUs.map((point, i) => (
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
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-cream" aria-label="What clients say">
        <div className="container-zf">
          <Testimonials standalone />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" aria-label="Services FAQs">
        <div className="container-zf">
          <FaqAccordion
            eyebrow="FAQs"
            title="Questions about working with us"
            description="Straight answers about scope, timelines, and how an engagement actually runs."
            items={servicesFaqs}
            ctaLabel="Book a free call"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <CTASection />
    </>
  );
}
