import { useEffect, useRef } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

/**
 * Soft lime glow that trails the pointer. It sits at z-index 1; sections
 * carrying `.above-glow` sit at 2, so the glow only reads through the gaps.
 * Skipped entirely on touch devices and when reduced motion is requested.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const finePointer = useMediaQuery('(pointer: fine)');
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const enabled = finePointer && !reducedMotion;

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      if (ref.current) {
        ref.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
