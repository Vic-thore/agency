import * as React from 'react';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';

interface SmoothScrollHeroProps {
  /** Height of the scroll section in pixels. @default 1500 */
  scrollHeight?: number;
  /** Background image URL for desktop view (ignored when `video` is set). */
  desktopImage?: string;
  /** Background image URL for mobile view (ignored when `video` is set). */
  mobileImage?: string;
  /**
   * Background video URL, used for both mobile and desktop. When set, this
   * takes over from `desktopImage`/`mobileImage` entirely — video needs an
   * actual <video> element, not a CSS background-image.
   */
  video?: string;
  /** Initial clip path percentage. @default 25 */
  initialClipPercentage?: number;
  /** Final clip path percentage. @default 75 */
  finalClipPercentage?: number;
  /** Optional content overlaid on top of the sticky background (e.g. a CTA). */
  children?: React.ReactNode;
}

const DEFAULT_DESKTOP_IMAGE =
  'https://images.unsplash.com/photo-1511884642898-4c92249e20b6';
const DEFAULT_MOBILE_IMAGE =
  'https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

interface SmoothScrollHeroBackgroundProps extends SmoothScrollHeroProps {
  scrollHeight: number;
  initialClipPercentage: number;
  finalClipPercentage: number;
}

const SmoothScrollHeroBackground: React.FC<
  SmoothScrollHeroBackgroundProps
> = ({
  scrollHeight,
  desktopImage = DEFAULT_DESKTOP_IMAGE,
  mobileImage = DEFAULT_MOBILE_IMAGE,
  video,
  initialClipPercentage,
  finalClipPercentage,
  children,
}) => {
  const { scrollY } = useScroll();

  const clipStart = useTransform(
    scrollY,
    [0, scrollHeight],
    [initialClipPercentage, 0]
  );
  const clipEnd = useTransform(
    scrollY,
    [0, scrollHeight],
    [finalClipPercentage, 100]
  );

  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, scrollHeight + 500],
    ['170%', '100%']
  );
  const videoScale = useTransform(scrollY, [0, scrollHeight + 500], [1.7, 1]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden bg-black"
      style={{
        clipPath,
        willChange: 'transform, opacity',
      }}
    >
      {video ? (
        <motion.video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ scale: videoScale }}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      ) : (
        <>
          {/* Mobile background */}
          <motion.div
            className="absolute inset-0 md:hidden"
            style={{
              backgroundImage: `url(${mobileImage})`,
              backgroundSize,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          {/* Desktop background */}
          <motion.div
            className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage: `url(${desktopImage})`,
              backgroundSize,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </>
      )}
      {children}
    </motion.div>
  );
};

/**
 * A smooth scroll hero component with a parallax background effect.
 * Pass `video` for a video background, or `desktopImage`/`mobileImage` for
 * the original image-based behavior.
 */
const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1500,
  desktopImage,
  mobileImage,
  video,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
  children,
}) => {
  return (
    <div
      style={{ height: `calc(${scrollHeight}px + 100vh)` }}
      className="relative w-full"
    >
      <SmoothScrollHeroBackground
        scrollHeight={scrollHeight}
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        video={video}
        initialClipPercentage={initialClipPercentage}
        finalClipPercentage={finalClipPercentage}
      >
        {children}
      </SmoothScrollHeroBackground>
    </div>
  );
};

export default SmoothScrollHero;
