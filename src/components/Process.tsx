import { useEffect, useRef, useState } from 'react';
import { processSteps } from '../data/content';
import { IMG } from '../lib/assets';
import { SectionHeading } from './SectionHeading';
import { ProcessStep } from './ProcessStep';

export function Process() {
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      // The reading line sits ~40% down the viewport; the lime rail fills
      // to wherever that line has reached inside the list.
      const line = window.innerHeight * 0.4;
      const filled = Math.min(Math.max(line - rect.top, 0), rect.height);
      list.style.setProperty('--scroll-height', `${filled}px`);

      let next = 0;
      itemRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= line) next = i;
      });
      setActiveIndex(next);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="section-pad" id="process" aria-labelledby="process-heading">
      <div className="container-zf">
        <SectionHeading
          id="process-heading"
          eyebrow="Our process, Your Advantage"
          title="From Idea To Execution"
          description="We have become experts in creating top-notch digital products. We design beautifully and develop excellently. And we care deeply about what we do."
        />

        <div className="mt-16 max-[575px]:mt-8">
          <div className="process-layout">
            <div className="process-list-wrap" ref={listRef}>
              <ol className="process-list">
                {processSteps.map((step, i) => (
                  <ProcessStep
                    key={step.index}
                    step={step}
                    active={i === activeIndex}
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                  />
                ))}
              </ol>
            </div>

            <div className="process-image-wrap above-glow hidden md:block">
              <img
                src={`${IMG}/home-process-1.webp`}
                alt="Design process artwork"
                width={527}
                height={506}
                loading="lazy"
                decoding="async"
                className="max-w-full rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
