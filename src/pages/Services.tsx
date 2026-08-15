import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  MessageCircle,
  Search,
  Boxes,
  PenTool,
  LayoutGrid,
  FlaskConical,
  Sparkles,
  Fingerprint,
  Palette,
  Film,
  Shapes,
  Heart,
  Bot,
  Smartphone,
  Globe,
  Layers,
  Triangle,
  Compass,
  Users,
  Repeat,
  Puzzle,
  Handshake,
  UserCheck,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { Contact } from '../components/Contact';
import { reveal } from '../hooks/useReveal';
import { cn } from '../lib/cn';
import { SITE_NAME } from '../lib/assets';

interface Card {
  icon: LucideIcon;
  title: string;
  description: string;
}

const uiuxCards: Card[] = [
  {
    icon: MessageCircle,
    title: 'UX Consultation',
    description: 'Shape your product vision with insights, market analysis, and growth strategies.',
  },
  {
    icon: Search,
    title: 'UX Research',
    description: 'Uncover user needs and behaviors through research that drives design decisions.',
  },
  {
    icon: Boxes,
    title: 'Experience Architecture',
    description: 'Design intuitive structures and user flows that make products effortless.',
  },
  {
    icon: PenTool,
    title: 'User Experience Design',
    description: 'Information architecture, user flows, wireframes, and interaction design.',
  },
  {
    icon: LayoutGrid,
    title: 'Design Systems',
    description: 'Develop scalable ecosystems that ensure brand consistency across platforms.',
  },
  {
    icon: FlaskConical,
    title: 'Prototyping & Usability Testing',
    description: 'Turn ideas into prototypes, validate with users, and refine before launch.',
  },
];

const brandCards: Card[] = [
  {
    icon: Fingerprint,
    title: 'Brand Strategy',
    description: 'Define brand direction through strategy, positioning, and guiding decisions.',
  },
  {
    icon: Palette,
    title: 'Visual Communication Design',
    description: "Deliver cohesive assets from social to campaigns, reinforcing consistency.",
  },
  {
    icon: Film,
    title: 'Motion Design',
    description: 'Evolve brands with scalable systems that ensure clarity, consistency, and relevance.',
  },
  {
    icon: Shapes,
    title: 'Graphic Design',
    description: 'Creative graphic designs for impactful brand communication.',
  },
];

const nocodeCards: Card[] = [
  {
    icon: Heart,
    title: 'Lovable Development',
    description: 'Building AI-powered apps with Lovable for rapid product development.',
  },
  {
    icon: Bot,
    title: 'Claude AI Development',
    description: 'Developing intelligent AI solutions powered by Claude models.',
  },
  {
    icon: Smartphone,
    title: 'Flutter Development',
    description: 'Building fast, cross-platform mobile apps with Flutter.',
  },
  {
    icon: Globe,
    title: 'WebFlow Development',
    description: 'Creating responsive, no-code websites with Webflow.',
  },
  {
    icon: Layers,
    title: 'Framer Development',
    description: 'Designing and developing modern, interactive websites with Framer.',
  },
  {
    icon: Triangle,
    title: 'Vercel Development',
    description: 'Deploying high-performance web apps with Vercel infrastructure.',
  },
];

const approach = [
  {
    icon: Compass,
    title: 'Strategic Vision',
    description: 'Partners that help define goals and a unified roadmap for long-term business growth.',
  },
  {
    icon: Users,
    title: 'Expert Designers',
    description: 'Design experts from diverse practice areas who flex as projects and goals change.',
  },
  {
    icon: Repeat,
    title: 'Build to Learn',
    description: 'Hit the ground running with proven methods, rapid prototyping, and lean deliverables.',
  },
  {
    icon: Puzzle,
    title: 'Seamless Integration',
    description: 'An embedded team that understands the ins and outs of your business and goals.',
  },
];

const whyUs = [
  {
    icon: Handshake,
    title: 'One accountable team',
    description: 'Design and build live under one roof, so nothing gets lost in handoff.',
  },
  {
    icon: Search,
    title: 'Research before visuals, always',
    description: "We start with the problem your users have, not just the brief you bring in.",
  },
  {
    icon: Sparkles,
    title: 'AI-native workflow',
    description: 'Modern AI tooling is part of our daily practice — used to accelerate, not replace craft.',
  },
  {
    icon: UserCheck,
    title: 'Direct access to the work',
    description: "You talk to the person doing the work, not an account manager relaying it.",
  },
  {
    icon: CheckCircle2,
    title: 'Honest scoping',
    description: "We'll tell you plainly if something is a bad fit for what you actually need.",
  },
  {
    icon: Repeat,
    title: 'Built to learn',
    description: 'Rapid prototyping and lean, testable deliverables over big up-front bets.',
  },
];

function ServiceCard({ card, accent = false }: { card: Card; accent?: boolean }) {
  return (
    <Link
      to={`/?service=${encodeURIComponent(card.title)}#contact`}
      className={cn(
        'service-item-card flex-col items-start',
        accent && 'bg-primary'
      )}
    >
      <span
        className={cn(
          'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
          accent ? 'bg-black/10' : 'bg-white/10'
        )}
      >
        <card.icon size={20} className={accent ? 'text-black' : 'text-primary'} aria-hidden="true" />
      </span>
      <span
        className={cn(
          'mt-4 block text-[16px] leading-6 font-semibold',
          accent ? 'text-black' : 'text-white'
        )}
      >
        {card.title}
      </span>
      <span
        className={cn(
          'mt-1 block text-[16px] leading-6 font-normal',
          accent ? 'text-black/70' : 'text-white/70'
        )}
      >
        {card.description}
      </span>
      <span
        className={cn(
          'mt-4 inline-flex items-center gap-1.5 font-inter text-[14px] font-medium',
          accent ? 'text-black' : 'text-primary'
        )}
      >
        Enquire about this
        <ArrowRight size={14} aria-hidden="true" />
      </span>
    </Link>
  );
}

function CategoryPanel({ gradient, label }: { gradient: string; label: string }) {
  return (
    <div
      className={cn(
        'flex h-[330px] items-end rounded-2xl border border-ink-400 p-5',
        gradient
      )}
    >
      <span className="font-inter text-[12px] tracking-wide text-black/50">{label}</span>
    </div>
  );
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad" aria-labelledby="services-heading">
        <div className="container-zf">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <motion.div {...reveal()}>
              <p className="eyebrow text-primary">What We Do</p>
              <h1
                id="services-heading"
                className="section-title max-w-[560px] text-white"
              >
                Growth-driven product services
              </h1>
              <p className="section-sub max-w-[500px] text-gray-495">
                {SITE_NAME} covers UI/UX design, brand identity, and no-code
                development under one roof, so nothing gets lost between
                specialists.
              </p>
              <a href="/#contact" className="btn btn-primary mt-8 inline-flex">
                Work with us
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </motion.div>

            <motion.aside
              {...reveal(0.1)}
              className="rounded-2xl border border-ink-400 bg-ink-800 p-8"
            >
              <h3 className="font-tight text-[19px] leading-normal text-white">
                Ready to build a product users love?
              </h3>
              <p className="mt-2 font-inter text-[13px] leading-6 text-gray-495">
                Book a free 30-minute discovery call and talk through where
                your product is today.
              </p>
              <a href="/#contact" className="btn btn-primary mt-5 inline-flex">
                Schedule your free call
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* UI UX Design */}
      <section className="section-pad pt-0" aria-labelledby="uiux-heading">
        <div className="container-zf">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <h2 id="uiux-heading" className="section-title mt-0 text-white">
                UI UX Design
              </h2>
              <p className="section-sub mb-6 text-gray-495">
                Create intuitive, user-focused interfaces that deliver
                seamless and engaging digital experiences.
              </p>
              <CategoryPanel
                gradient="bg-gradient-to-br from-[#f2b3c9] via-[#e8ddff] to-[#cfd6ff]"
                label="UI/UX Design"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {uiuxCards.map((card, i) => (
                <motion.div key={card.title} {...reveal(Math.min(i, 3) * 0.05)}>
                  <ServiceCard card={card} />
                </motion.div>
              ))}
              <motion.div {...reveal(3 * 0.05)}>
                <ServiceCard
                  accent
                  card={{
                    icon: Sparkles,
                    title: 'Not sure which path fits your project?',
                    description:
                      "Tell us where you are and we'll recommend the right approach, honestly.",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Design */}
      <section className="section-pad pt-0" aria-labelledby="brand-heading">
        <div className="container-zf">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <h2 id="brand-heading" className="section-title mt-0 text-white">
                Brand Design
              </h2>
              <p className="section-sub mb-6 text-gray-495">
                Build a memorable brand identity with cohesive visuals,
                messaging, and strategy.
              </p>
              <CategoryPanel
                gradient="bg-gradient-to-br from-[#3d0f16] via-[#7a1626] to-[#20080c]"
                label="Brand Design"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {brandCards.map((card, i) => (
                <motion.div key={card.title} {...reveal(Math.min(i, 3) * 0.05)}>
                  <ServiceCard card={card} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* No Code Development */}
      <section className="section-pad pt-0" aria-labelledby="nocode-heading">
        <div className="container-zf">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <h2 id="nocode-heading" className="section-title mt-0 text-white">
                No Code Development
              </h2>
              <p className="section-sub mb-6 text-gray-495">
                Launch scalable digital products quickly using modern
                no-code platforms.
              </p>
              <CategoryPanel
                gradient="bg-gradient-to-br from-[#0e2f52] via-[#1f7ae0] to-[#0a1a2e]"
                label="No-Code Development"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {nocodeCards.map((card, i) => (
                <motion.div key={card.title} {...reveal(Math.min(i, 3) * 0.05)}>
                  <ServiceCard card={card} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad bg-cream" aria-labelledby="approach-heading">
        <div className="container-zf">
          <SectionHeading
            id="approach-heading"
            eyebrow="Our Approach"
            title="What sets our approach apart"
            description="How we partner with teams, from first call to final handoff."
            tone="light"
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-[575px]:mt-8">
            {approach.map((item, i) => (
              <motion.div key={item.title} {...reveal(i * 0.05)}>
                <item.icon size={28} className="text-black" aria-hidden="true" />
                <h3 className="mt-4 font-tight text-[17px] leading-normal text-black">
                  {item.title}
                </h3>
                <p className="mt-2 font-inter text-[14px] leading-6 text-gray-muted-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-pad" aria-labelledby="why-heading">
        <div className="container-zf">
          <SectionHeading
            id="why-heading"
            eyebrow={`Why ${SITE_NAME}`}
            title={`Why choose ${SITE_NAME} as your product partner`}
            description="Plenty of agencies can design a screen. Here's what makes us a different kind of partner."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-[575px]:mt-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                {...reveal(Math.min(i, 3) * 0.05)}
                className="rounded-2xl border border-ink-400 bg-ink-800 p-8"
              >
                <item.icon size={28} className="text-primary" aria-hidden="true" />
                <h3 className="mt-5 font-tight text-[19px] leading-normal text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-inter text-[14px] leading-6 text-gray-495">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Testimonials + Contact */}
      <Contact />
    </>
  );
}
