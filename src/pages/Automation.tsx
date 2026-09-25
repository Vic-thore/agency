import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { InteractiveSynapseNetwork } from '@/components/ui/interactive-synapse-network';
import { Button } from '@/components/ui/button';

export default function Automation() {
  return (
    <section
      className="relative h-[max(640px,calc(100svh-var(--header-height)))] w-full"
      aria-labelledby="automation-heading"
    >
      <InteractiveSynapseNetwork
        ariaLabel="An animated network of connected nodes, representing automated workflows"
        nodeColor="rgba(56,189,248,0.85)"
        pulseColor="rgba(255,255,255,1)"
      >
        <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-5 inline-block rounded-full border border-ink-400 bg-white/5 px-4 py-1.5 font-inter text-sm font-medium text-white/80 backdrop-blur-sm">
            Automation
          </p>
          <h1
            id="automation-heading"
            className="mx-auto max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tighter text-white sm:text-5xl md:text-6xl"
          >
            Let your systems do the busywork
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance font-inter text-base leading-normal text-white/80 md:text-lg">
            Connect the tools you already use so leads get routed, records
            stay in sync, and follow-ups go out, without anyone remembering
            to do it by hand.
          </p>
          <Button
            asChild
            className="mt-8 h-11 gap-2 rounded-full px-6 hover:bg-primary-2"
          >
            <Link to="/#contact">
              Book a free call
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </InteractiveSynapseNetwork>
    </section>
  );
}
