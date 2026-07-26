import { motion } from 'framer-motion';
import { reveal } from '../hooks/useReveal';
import { cn } from '../lib/cn';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'dark' | 'light';
  as?: 'h1' | 'h2';
  id?: string;
  className?: string;
}

/** Centered eyebrow / title / description block shared by four sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'dark',
  as = 'h2',
  id,
  className,
}: SectionHeadingProps) {
  const Title = as;
  const light = tone === 'light';

  return (
    <motion.div
      {...reveal()}
      className={cn('mx-auto max-w-[596px] text-center', className)}
    >
      <p className={cn('eyebrow', light ? 'text-gray-muted-dark' : 'text-primary')}>
        {eyebrow}
      </p>
      <Title
        id={id}
        className={cn('section-title', light ? 'text-black' : 'text-white')}
      >
        {title}
      </Title>
      {description && (
        <p
          className={cn(
            'section-sub',
            light ? 'text-gray-muted-light' : 'text-gray-495'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
