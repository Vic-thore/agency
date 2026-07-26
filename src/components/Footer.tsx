import {
  DribbbleIcon,
  YoutubeIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
} from './SocialIcons';
import {
  offices,
  footerColumns,
  industries,
  awards,
  socialLinks,
} from '../data/content';
import { SITE_NAME } from '../lib/assets';

import type { ReactElement } from 'react';

type Glyph = (props: { size?: number; className?: string }) => ReactElement;

const socialIcons: Record<string, Glyph> = {
  Dribbble: DribbbleIcon,
  YouTube: YoutubeIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
};

function SocialList({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex list-none items-center gap-4 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = socialIcons[social.label];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className="social-item"
              aria-label={`${SITE_NAME} on ${social.label}`}
            >
              <Icon size={18} className="text-white" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Footer() {
  return (
    <>
      {/* Office locations */}
      <section className="footer-top" aria-label="Office locations">
        <div className="footer-container">
          <div className="address-container">
            {offices.map((office) => (
              <div className="address-card" key={office.region}>
                <img
                  src={office.icon}
                  alt=""
                  aria-hidden="true"
                  width={100}
                  height={100}
                  loading="lazy"
                  decoding="async"
                  className="h-[100px] w-[100px] shrink-0 object-contain"
                />
                <div className="flex min-w-0 flex-col gap-1.5">
                  <h2 className="font-tight text-[20px] font-medium leading-normal text-white max-[575px]:text-[18px]">
                    {office.region}
                  </h2>
                  <p className="my-1.5 font-tight text-[14px] leading-[22px] text-gray-400">
                    {office.address}
                  </p>
                  <a
                    href={office.tel}
                    className="font-tight text-[16px] font-medium leading-[22px] text-primary"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="zf-footer above-glow relative">
        <div className="container-zf">
          <p
            aria-hidden="true"
            className="font-display text-[15vw] font-semibold uppercase leading-none tracking-tight text-white/10 max-[575px]:text-[22vw]"
          >
            {SITE_NAME}
          </p>

          <div className="footer-grid">
            <div className="footer-text">
              <p className="font-inter text-[18px] leading-[27px] text-gray-495">
                We transform ideas into user-centered digital experiences for
                businesses worldwide, from Fortune 500s to startups, using
                Figma, Webflow, and no-code solutions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                {awards.map((award) => (
                  <img
                    key={award.alt}
                    src={award.src}
                    alt={award.alt}
                    width={award.width}
                    height={award.height}
                    loading="lazy"
                    className="object-contain"
                    style={{ height: award.height }}
                  />
                ))}
              </div>
            </div>

            {footerColumns.map((column) => (
              <nav
                className="footer-col"
                key={column.heading}
                aria-label={column.heading}
              >
                <h2 className="font-inter text-[16px] font-semibold leading-5 text-white">
                  {column.heading}
                </h2>
                <ul className="mt-5 flex list-none flex-col gap-3.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="arrow-hover font-inter text-[15px] leading-5 text-gray-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="footer-col">
              <h2 className="font-inter text-[16px] font-semibold leading-5 text-white">
                Industries
              </h2>
              <ul className="mt-5 flex list-none flex-col gap-3.5">
                {industries.map((industry) => (
                  <li key={industry}>
                    <span className="font-inter text-[15px] leading-5 text-gray-200">
                      {industry}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5">
            <p className="font-inter text-[14px] leading-[21px] text-gray-200">
              © 2026 Copyright {SITE_NAME}. All rights reserved.
            </p>
            <a
              href="#"
              className="arrow-hover font-inter text-[14px] leading-[21px] text-gray-200"
            >
              Privacy Policy
            </a>
            <SocialList />
          </div>
        </div>
      </footer>
    </>
  );
}
