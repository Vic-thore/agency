import { useState } from 'react';
import { megaMenuTabs } from '../data/navigation';
import { cn } from '../lib/cn';

interface ServicesMegaMenuProps {
  open: boolean;
  /** Mobile renders the menu inline inside the drawer instead of as an overlay. */
  variant?: 'desktop' | 'mobile';
  id?: string;
  onNavigate?: () => void;
}

export function ServicesMegaMenu({
  open,
  variant = 'desktop',
  id,
  onNavigate,
}: ServicesMegaMenuProps) {
  const [activeTab, setActiveTab] = useState(megaMenuTabs[0].id);
  const current =
    megaMenuTabs.find((tab) => tab.id === activeTab) ?? megaMenuTabs[0];

  return (
    <div
      id={id}
      className={cn(
        'mega-menu',
        variant === 'mobile' && 'is-mobile',
        open && 'is-open'
      )}
      aria-hidden={!open}
    >
      <div className={variant === 'desktop' ? 'container-zf' : ''}>
        <div className="mega-menu-grid">
          <div className="mega-menu-tabs" role="tablist" aria-label="Service categories">
            {megaMenuTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={tab.id === activeTab}
                aria-controls={`panel-${tab.id}`}
                tabIndex={open ? 0 : -1}
                className={cn('mega-tab', tab.id === activeTab && 'is-active')}
                onMouseEnter={() => setActiveTab(tab.id)}
                onFocus={() => setActiveTab(tab.id)}
                onClick={() => setActiveTab(tab.id)}
              >
                <img
                  src={tab.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-[16px] leading-6 font-semibold text-white">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          <div
            className="mega-panel"
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
          >
            {current.services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="service-item-card"
                tabIndex={open ? 0 : -1}
                onClick={onNavigate}
              >
                <span className="shrink-0">
                  <img
                    src={service.icon}
                    alt=""
                    width={24}
                    height={24}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span>
                  <span className="block text-[16px] leading-6 font-semibold text-white">
                    {service.title}
                  </span>
                  <span className="mt-1 block text-[16px] leading-6 font-normal text-white/70">
                    {service.description}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
