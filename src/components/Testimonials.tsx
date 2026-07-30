import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/content';
import { cn } from '../lib/cn';

const AUTOPLAY_MS = 6000;

interface TestimonialsProps {
  /**
   * The default layout (`.testimonial-side`) is built to sit beside the
   * contact form: capped at 542px and hidden below 768px, since the form
   * takes over the mobile layout there. `standalone` is for using this
   * slider on its own — full width, centered, and visible on every
   * breakpoint.
   */
  standalone?: boolean;
}

export function Testimonials({ standalone = false }: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(
      () => setIndex((i) => (i + 1) % testimonials.length),
      AUTOPLAY_MS
    );
    return () => window.clearTimeout(timer);
  }, [index, paused]);

  const go = (next: number) =>
    setIndex((next + testimonials.length) % testimonials.length);

  return (
    <div
      className={cn(
        standalone ? 'testimonial-side-standalone' : 'testimonial-side'
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="testimonial-panel">
        <h2 className="font-tight text-[24px] font-semibold leading-8 text-gray-800">
          What Our Customers Say
        </h2>

        <div className="slides-viewport">
          {testimonials.map((item, i) => (
            <figure
              key={i}
              className={cn('slide', i === index && 'is-active')}
              aria-hidden={i !== index}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="31"
                  viewBox="0 0 40 31"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 30.6009V21.8455C0 19.3276 0.472103 16.7096 1.41631 13.9914C2.38913 11.2446 3.70529 8.65522 5.36481 6.22318C7.05293 3.76252 8.94135 1.68813 11.03 0L18.2403 4.67811C16.5522 7.22461 15.1359 9.88555 13.9914 12.6609C12.8755 15.4077 12.3319 18.4406 12.3605 21.7597V30.6009H0ZM21.7597 30.6009V21.8455C21.7597 19.3276 22.2318 16.7096 23.176 13.9914C24.1488 11.2446 25.465 8.65522 27.1245 6.22318C28.8126 3.76252 30.701 1.68813 32.7897 0L40 4.67811C38.3119 7.22461 36.8956 9.88555 35.7511 12.6609C34.6352 15.4077 34.0916 18.4406 34.1202 21.7597V30.6009H21.7597Z"
                    fill="#52525B"
                  />
                </svg>
                <blockquote className="mt-3 font-inter text-[16px] leading-7 text-gray-800 max-[575px]:text-[14px]">
                  {item.quote}
                </blockquote>
              </div>

              <figcaption className="flex items-end justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="cf-avatar flex items-center justify-center bg-primary font-tight text-[18px] font-semibold text-black"
                  >
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <p className="mb-1 font-inter text-[16px] font-medium leading-6 text-black">
                      {item.name}
                    </p>
                    <p className="font-inter text-[14px] leading-5 text-black">
                      {item.role}
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-9 flex items-center justify-between">
          <div className="flex gap-5">
            <button
              type="button"
              className="cf-nav-btn"
              aria-label="Previous review"
              onClick={() => go(index - 1)}
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="cf-nav-btn"
              aria-label="Next review"
              onClick={() => go(index + 1)}
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="cf-dot-wrapper">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                className={cn('cf-dot', i === index && 'is-active')}
                aria-label={`Show review ${i + 1} of ${testimonials.length}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
              >
                {i === index && (
                  <span
                    className="cf-dot-fill"
                    key={`fill-${index}-${paused}`}
                    style={{ animationPlayState: paused ? 'paused' : 'running' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
