import { forwardRef } from 'react';
import type { ProcessStepData } from '../data/content';
import { cn } from '../lib/cn';

interface ProcessStepProps {
  step: ProcessStepData;
  active: boolean;
}

export const ProcessStep = forwardRef<HTMLLIElement, ProcessStepProps>(
  function ProcessStep({ step, active }, ref) {
    return (
      <li ref={ref} className={cn('process-item', active && 'is-active')}>
        <h3 className="text-[36px] font-semibold max-[575px]:text-[20px] max-[575px]:font-bold">
          <span className="hidden pr-1.5 text-[16px] font-medium max-[575px]:inline">
            {step.index}
          </span>
          {step.title}
        </h3>
        <h4 className="mb-4 mt-1.5 font-inter text-[18px] max-[575px]:text-[16px]">
          {step.tag}
        </h4>
        <p className="process-desc font-inter text-[16px] leading-6 max-[575px]:text-[14px] max-[575px]:leading-[21px]">
          {step.description}
        </p>

        {/* Mobile-only illustration; the desktop layout uses one sticky image. */}
        <div className="mt-6 hidden h-[188px] overflow-hidden rounded-2xl bg-ink-800 max-[768px]:block">
          <img
            src={step.image}
            alt={`${step.title} — ${step.tag}`}
            width={327}
            height={185}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </li>
    );
  }
);
