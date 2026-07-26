import { motion } from 'framer-motion';
import { serviceRows } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { reveal } from '../hooks/useReveal';

export function Services() {
  return (
    <section
      id="services"
      className="section-pad above-glow relative bg-cream"
      aria-labelledby="services-heading"
    >
      <div className="container-zf">
        <SectionHeading
          id="services-heading"
          eyebrow="WE are great at"
          title="UI UX Design and Product Experience Services"
          description="Designs with Exceptional User Experiences"
          tone="light"
        />

        <div className="services-grid mt-16 max-[575px]:mt-8">
          {serviceRows.map((service, i) => (
            <motion.a
              key={service.title}
              {...reveal(Math.min(i, 3) * 0.05)}
              href={service.href}
              className="service-card"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="service-eyebrow font-inter text-[18px] uppercase leading-[27px] text-gray-02 transition-colors duration-500 max-[575px]:text-[16px]">
                    {service.eyebrow}
                  </p>
                  <h3 className="service-name mt-5 text-[28px] leading-normal text-gray-03 transition-colors duration-500 max-[575px]:mt-2 max-[575px]:text-[22px]">
                    {service.title}
                  </h3>
                </div>
                <span className="arrow-box" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M14.5833 5.41663L5 15" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.66675 5H15.0001V13.3333" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
