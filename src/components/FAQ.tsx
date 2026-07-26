import { useId, useState } from 'react';
import { motion } from 'framer-motion';
import { faqs } from '../data/content';
import { SITE_NAME } from '../lib/assets';
import { reveal } from '../hooks/useReveal';
import { cn } from '../lib/cn';

export function FAQ() {
  // The original opens the first question by default.
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      id="faq"
      className="section-pad above-glow relative bg-ink"
      aria-labelledby="faq-heading"
    >
      <div className="container-zf">
        <div className="flex gap-x-12 gap-y-8 max-[768px]:flex-wrap">
          <motion.div {...reveal()} className="w-full max-w-[409px]">
            <span className="eyebrow text-primary">FAQs</span>
            <h2
              id="faq-heading"
              className="mb-3 mt-8 text-[36px] font-medium capitalize leading-10 text-white max-[575px]:text-[28px]"
            >
              Questions? We&rsquo;ve Got Answers
            </h2>
            <p className="section-sub text-gray-495">
              {SITE_NAME} reduces design complexity &amp; speeds up product
              launches with clear UX workflows, scalable visual systems, and
              no-code execution.
            </p>
            <div className="mt-8 flex items-center gap-8 max-[575px]:flex-wrap">
              <a
                href="#contact"
                className="btn btn-light btn-swap font-inter"
              >
                <span className="swap-out">Book a free call</span>
                <svg
                  className="swap-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M14.5833 5.41699L5 15.0003" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.66666 5H15V13.3333" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="swap-in">Lets Talk</span>
              </a>
            </div>
          </motion.div>

          <div className="flex grow flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={faq.question}
                  {...reveal(Math.min(i, 4) * 0.04)}
                  className={cn('accordion', isOpen && 'is-open')}
                >
                  <h3>
                    <button
                      type="button"
                      className="accordion-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`${baseId}-panel-${i}`}
                      id={`${baseId}-trigger-${i}`}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <span className="grow text-left font-display text-[16px] font-medium leading-normal text-white">
                        {faq.question}
                      </span>
                      <span className="accordion-icon" aria-hidden="true">
                        <svg className="plus-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 2.66699V13.3337" stroke="#6D6D6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2.66663 8H13.3333" stroke="#6D6D6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg className="minus-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2.66663 8H13.3333" stroke="#515050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div
                    className="accordion-body"
                    id={`${baseId}-panel-${i}`}
                    role="region"
                    aria-labelledby={`${baseId}-trigger-${i}`}
                  >
                    {faq.answer.map((paragraph, p) => (
                      <p
                        key={p}
                        className="font-inter text-[16px] leading-6 text-gray-495"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
