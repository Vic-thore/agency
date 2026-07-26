import { ParticleWave } from '@/components/ui/particle-wave';

// Standalone reference demo for the ParticleWave component. Not mounted
// anywhere in this single-page app (there's no router) — kept for
// reference/preview purposes, matching the component's registry demo.
const DemoOne = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      <ParticleWave />
      <div className="absolute top-4 left-4 z-10 text-foreground/80 text-sm font-mono">
        <p>Particle Wave Animation</p>
        <p className="text-xs opacity-60 mt-1">Move your mouse to interact</p>
      </div>
    </div>
  );
};

export { DemoOne };
