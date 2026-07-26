import { motion } from 'framer-motion';
import { CALENDLY, IMG } from '../lib/assets';
import { reveal } from '../hooks/useReveal';

/** The bright lime band between the showcase and the FAQ. */
export function CTASection() {
  return (
    <section className="lime-band" aria-labelledby="cta-heading">
      <div className="container-zf">
        <div className="flex items-center justify-between gap-6 max-[575px]:flex-col max-[575px]:gap-6">
          <motion.div
            {...reveal()}
            className="flex w-full max-w-[646px] flex-col items-start gap-4 font-tight"
          >
            <h2
              id="cta-heading"
              className="text-[36px] font-medium leading-[48px] text-black max-[575px]:text-[32px] max-[575px]:leading-9"
              style={{ letterSpacing: '-0.8px' }}
            >
              Your next great product decision starts with one conversation.
            </h2>
            <p className="text-[16px] leading-6 text-black">
              If your product isn&apos;t where you want it to be, 30 minutes with
              us might tell you why.And more often than not, we&apos;re exactly
              the team to fix it.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer noopener"
              className="insight-btn"
            >
              Book a Free Discovery Call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4.19617 11.7628L3.5 11.0667L10.0603 4.5H4.09617V3.5H11.7628V11.1667H10.7628V5.2025L4.19617 11.7628Z"
                  fill="#3F3F46"
                />
              </svg>
            </a>
          </motion.div>

          <div className="gif-wrapper flex max-[768px]:w-full max-[768px]:justify-center">
            <img
              className="star-gif h-auto max-w-full object-contain"
              width={294}
              height={294}
              src={`${IMG}/services/gif-icon.gif`}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <img
              className="star-gif absolute right-0 top-0 h-auto max-w-full object-contain"
              width={103}
              height={103}
              src={`${IMG}/services/gif-icon.gif`}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
