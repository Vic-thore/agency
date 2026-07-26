import { useEffect, useRef, useState } from 'react';
import { ORIGIN } from '../lib/assets';

/**
 * Full-bleed process video with a cursor-tracking "All Works" pill.
 * The clip is only attached once the section scrolls into view.
 */
export function Showreel() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          return;
        }
        if (!video.src) video.src = video.dataset.src ?? '';
        void video.play().catch(() => {
          /* autoplay can be blocked; the poster frame still shows */
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="above-glow relative overflow-hidden bg-ink"
      aria-label="ZeeFrames process reel"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        ref={videoRef}
        data-src="/videos/hero-showreel.mp4"
        className="h-auto w-full object-cover"
        style={{ aspectRatio: '1440 / 766', maxHeight: 'calc(100dvh - 88px)' }}
        width={1440}
        height={766}
        muted
        loop
        playsInline
        preload="none"
        aria-label="ZeeFrames process video"
      />

      {/* Keyboard and screen-reader route to the same destination as the
          cursor-following pill, which is decorative only. */}
      <a
        href={`${ORIGIN}/work`}
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-20 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        View all works
      </a>

      <span
        className="btn btn-light pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{ left: pos.x, top: pos.y, opacity: hovered ? 1 : 0 }}
        aria-hidden="true"
      >
        All Works
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M14.5833 5.41699L5 15.0003" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.66666 5H15V13.3333" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </section>
  );
}
