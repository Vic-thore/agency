import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { ContactInfo } from '../components/ContactInfo';
import { reveal } from '../hooks/useReveal';
import { SITE_NAME } from '../lib/assets';

export default function Contact() {
  useEffect(() => {
    document.title = `Contact | ${SITE_NAME}`;
  }, []);

  return (
    <section className="section-pad pt-[160px] max-[575px]:pt-[120px]" aria-labelledby="contact-page-heading">
      <div className="container-zf">
        <SectionHeading
          id="contact-page-heading"
          as="h1"
          className="max-w-[720px]"
          eyebrow="Contact"
          title="Let’s talk about your project"
          description="Tell us what you’re working on. Brand, website, automation, SEO or AI, we’ll reply with a clear next step."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[420px_1fr] max-[575px]:mt-8">
          <motion.div {...reveal()} className="overflow-hidden rounded-xl">
            <ContactInfo className="h-full" />
          </motion.div>
          <motion.div
            {...reveal(0.1)}
            className="rounded-xl border border-white/10 bg-[var(--color-black-750)] p-10 max-[575px]:p-6"
          >
            <h2 className="font-tight text-[26px] leading-8 text-white">Send us a message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
