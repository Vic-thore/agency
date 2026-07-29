import { motion } from 'framer-motion';
import { Target, Users, Sparkles, LineChart } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { reveal } from '../hooks/useReveal';
import { SITE_NAME } from '../lib/assets';

const values = [
  {
    icon: Target,
    title: 'Outcomes over output',
    description:
      'A beautiful screen that doesn’t move a metric isn’t a win. We design against the problem you’re actually trying to solve.',
  },
  {
    icon: LineChart,
    title: 'Evidence over opinion',
    description:
      'Research, testing, and real user behavior settle design debates — not whoever argues loudest in the room.',
  },
  {
    icon: Users,
    title: 'One team, your team',
    description:
      'No black box. You see the work in progress, weigh in early, and never wait until the big reveal to find out it missed the mark.',
  },
  {
    icon: Sparkles,
    title: 'Craft, still',
    description:
      'Rigor doesn’t excuse sloppy pixels. The strategy has to be right, and the execution has to look like it.',
  },
];

const stats = [
  { value: '6', label: 'Step design process' },
  { value: '100%', label: 'Research-informed decisions' },
  { value: 'Worldwide', label: 'Clients, one process' },
];

export default function About() {
  return (
    <>
      <section className="section-pad" aria-labelledby="about-heading">
        <div className="container-zf">
          <SectionHeading
            id="about-heading"
            as="h1"
            eyebrow="About"
            title={`The studio behind ${SITE_NAME}`}
            description="We're a UI/UX design studio that treats every engagement as a partnership, not a hand-off. Research in, evidence-based decisions out."
          />
        </div>
      </section>

      <section className="section-pad bg-cream" aria-labelledby="about-story-heading">
        <div className="container-zf">
          <motion.div {...reveal()} className="mx-auto max-w-[760px]">
            <p className="eyebrow text-gray-muted-dark">Our story</p>
            <h2
              id="about-story-heading"
              className="section-title text-left text-black"
            >
              Built for teams who are tired of guessing
            </h2>
            <p className="mt-6 font-inter text-[16px] leading-7 text-gray-muted-light">
              {SITE_NAME} exists because too much product design gets decided
              by whoever has the loudest opinion in the room. We do it
              differently: every engagement starts with understanding the
              actual problem your users have, not just the brief we were
              handed, and closes the loop with real testing instead of
              guessing at what &ldquo;good&rdquo; looks like.
            </p>
            <p className="mt-4 font-inter text-[16px] leading-7 text-gray-muted-light">
              That means research, flows, wireframes, and prototypes are
              treated as one continuous conversation with your users — not
              separate hand-offs — so the final product actually matches how
              people want to use it. We work with startups shipping their
              first product and established teams revamping something that's
              stopped working, using the same process either way.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="about-values-heading">
        <div className="container-zf">
          <SectionHeading
            id="about-values-heading"
            eyebrow="How we work"
            title="What we won't compromise on"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 max-[575px]:mt-8 max-[575px]:gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                {...reveal(Math.min(i, 3) * 0.05)}
                className="rounded-2xl border border-ink-400 bg-ink-800 p-8"
              >
                <value.icon
                  size={28}
                  className="text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-tight text-[22px] leading-normal text-white">
                  {value.title}
                </h3>
                <p className="mt-2 font-inter text-[15px] leading-6 text-gray-495">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="lime-band" aria-label="Our approach in numbers">
        <div className="container-zf">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <motion.div key={stat.label} {...reveal()} className="text-center">
                <p className="font-display text-[40px] font-semibold leading-none text-black max-[575px]:text-[32px]">
                  {stat.value}
                </p>
                <p className="mt-3 font-inter text-[15px] text-black/70">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="about-cta-heading">
        <div className="container-zf">
          <motion.div
            {...reveal()}
            className="mx-auto flex max-w-[640px] flex-col items-center gap-6 text-center"
          >
            <h2
              id="about-cta-heading"
              className="section-title text-white"
            >
              Got a project in mind?
            </h2>
            <p className="section-sub text-gray-495">
              Tell us what you're building and where it's stuck — we'll tell
              you honestly whether we're the right fit.
            </p>
            <a href="/#contact" className="btn btn-primary font-inter">
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
