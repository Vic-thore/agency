import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Blocks,
  Globe,
  Handshake,
  LayoutGrid,
  LineChart,
  Palette,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  User,
  Users,
  Workflow,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { serviceGroups } from '../data/services';
import { reveal } from '../hooks/useReveal';
import { SITE_NAME } from '../lib/assets';

const serviceIcons: Record<string, LucideIcon> = {
  branding: Palette,
  'ui-ux-design': LayoutGrid,
  'web-development': Globe,
  'no-code-development': Blocks,
  automation: Workflow,
  seo: TrendingUp,
};

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
      'Research, testing, and real user behavior settle debates, not whoever argues loudest in the room.',
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
  {
    icon: Handshake,
    title: 'Honest scoping',
    description:
      'We’ll tell you plainly if something isn’t the right fit, or isn’t worth building yet.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to last',
    description:
      'Brands, sites, and systems you can keep using long after the project ends.',
  },
];

const steps = [
  {
    title: 'Discover',
    description:
      'We learn your business, your customers, and what success looks like before anything gets designed.',
  },
  {
    title: 'Plan',
    description:
      'Scope, priorities, and a clear roadmap, so you know what gets built, when, and why.',
  },
  {
    title: 'Design',
    description:
      'Brand, interface, and content take shape, reviewed with you early and often.',
  },
  {
    title: 'Build',
    description:
      'Websites, no-code products, and automations built to the approved designs.',
  },
  {
    title: 'Launch',
    description:
      'Tested, checked, and released with a clear go-live plan.',
  },
  {
    title: 'Grow',
    description:
      'SEO, reporting, and improvements after launch, because launch day is the start, not the finish.',
  },
];

// Placeholder profile: replace with real names, roles, bios and photos.
const team: { name: string; role: string; bio: string; photo?: string }[] = [
  {
    name: 'Founder Name',
    role: 'Founder & Creative Lead',
    bio: 'A two-line bio goes here: your background, what you’re best at, and why you started Metron Studio.',
  },
];

const stats = [
  { value: '6', label: 'Services under one roof' },
  { value: '30 min', label: 'Free discovery call' },
  { value: '1', label: 'Team from brand to launch' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad" aria-labelledby="about-heading">
        <div className="container-zf">
          <SectionHeading
            id="about-heading"
            as="h1"
            eyebrow="About"
            title="We help businesses look credible, work smarter, and get found online"
            description={`${SITE_NAME} brings branding, UI/UX design, web development, no-code, automation, and SEO together, so your brand, website, and growth aren’t handled by five people who never talk to each other.`}
            className="max-w-[760px]"
          />
        </div>
      </section>

      {/* Story + mission */}
      <section className="section-pad bg-cream" aria-labelledby="about-story-heading">
        <div className="container-zf">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <motion.div {...reveal()}>
              <p className="eyebrow text-gray-muted-dark">Our story</p>
              <h2
                id="about-story-heading"
                className="section-title text-left text-black"
              >
                One team for the whole picture
              </h2>
              <p className="mt-6 font-inter text-[16px] leading-7 text-gray-muted-light">
                {SITE_NAME} exists because too many businesses end up with a
                logo from one person, a website from another, and no plan for
                being found. The pieces never quite fit, and nobody is
                accountable for the whole.
              </p>
              <p className="mt-4 font-inter text-[16px] leading-7 text-gray-muted-light">
                So we built one team to handle all of it: the brand, the
                interface, the website, the systems behind it, and the search
                visibility that brings people in. Every decision is made with
                the full picture in mind, and you always know who is doing the
                work.
              </p>
            </motion.div>

            <motion.aside
              {...reveal(0.1)}
              className="rounded-2xl bg-ink p-8"
              aria-label="Our mission"
            >
              <p className="eyebrow text-primary">Our mission</p>
              <p className="mt-4 font-tight text-[24px] leading-8 text-white">
                To give growing businesses the brand, website, and systems of
                a much bigger company.
              </p>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" aria-labelledby="about-values-heading">
        <div className="container-zf">
          <SectionHeading
            id="about-values-heading"
            eyebrow="How we think"
            title="What we won't compromise on"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-[575px]:mt-8 max-[575px]:gap-6">
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

      {/* What we do */}
      <section className="section-pad bg-cream" aria-labelledby="about-services-heading">
        <div className="container-zf">
          <SectionHeading
            id="about-services-heading"
            eyebrow="What we do"
            title="Six services, one team"
            description="Everything your business needs to launch, run, and grow online."
            tone="light"
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-[575px]:mt-8">
            {serviceGroups.map((group, i) => {
              const Icon = serviceIcons[group.slug] ?? Sparkles;
              return (
                <motion.div key={group.slug} {...reveal(Math.min(i, 3) * 0.05)}>
                  <Link
                    to={`/services#${group.slug}`}
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

      {/* How we work */}
      <section className="section-pad" aria-labelledby="about-process-heading">
        <div className="container-zf">
          <SectionHeading
            id="about-process-heading"
            eyebrow="How we work"
            title="From first call to launch and beyond"
            description="One process across every service, so you always know what happens next."
          />

          <ol className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 max-[575px]:mt-8 max-[575px]:gap-y-8">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                {...reveal(Math.min(i, 3) * 0.05)}
                className="border-t border-ink-400 pt-6"
              >
                <span className="font-display text-[14px] text-gray-200">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-tight text-[24px] leading-normal text-white">
                  {step.title}
                </h3>
                <p className="mt-2 font-inter text-[15px] leading-6 text-gray-495">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-ink-800" aria-labelledby="about-team-heading">
        <div className="container-zf">
          <SectionHeading
            id="about-team-heading"
            eyebrow="Team"
            title={`The people behind ${SITE_NAME}`}
            description="You work directly with the people doing the work."
          />

          <div className="mt-16 flex flex-wrap justify-center gap-8 max-[575px]:mt-8">
            {team.map((member, i) => (
              <motion.article
                key={member.name}
                {...reveal(i * 0.05)}
                className="w-full max-w-[340px] rounded-2xl border border-ink-400 bg-ink p-8 text-center"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-ink-400 bg-ink-800">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      width={96}
                      height={96}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User size={36} className="text-gray-200" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-5 font-tight text-[22px] leading-normal text-white">
                  {member.name}
                </h3>
                <p className="mt-1 font-inter text-[13px] uppercase tracking-wide text-gray-200">
                  {member.role}
                </p>
                <p className="mt-4 font-inter text-[15px] leading-6 text-gray-495">
                  {member.bio}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="lime-band" aria-label="Metron Studio at a glance">
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

      {/* Closing CTA */}
      <CTASection />
    </>
  );
}
