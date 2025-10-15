import React from 'react';
import ThemeIcon from './ThemeIcon';

interface PageHeaderProps {
  variant?: 'default' | 'property';
  title: string;
  subtitle?: string;
  address?: string;
  onBack?: () => void;
  primaryAction?: {
    label: string;
    onClick: () => void;
    icon?: string;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
    icon?: string;
  };
}

export default function PageHeader({
  variant = 'default',
  title,
  subtitle,
  address,
  onBack,
  primaryAction,
  secondaryAction
}: PageHeaderProps) {
  
  if (variant === 'property') {
    return (
      <div className="bg-white-95 border border-overlays-white-inverse-5 border-solid box-border content-center flex flex-wrap gap-4 items-center justify-between p-6 relative rounded-xxxl size-full shadow-card-large">
        <div className="basis-0 content-stretch flex gap-4 grow items-center min-h-px min-w-80 relative shrink-0">
          {onBack && (
            <button
              onClick={onBack}
              className="relative shrink-0 w-4 h-4 hover:opacity-70 transition-opacity duration-200"
            >
              <ThemeIcon src="/assets/previous-arrow-icon.svg" alt="Back" size="sm" variant="default" />
            </button>
          )}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex flex-col gap-1 items-start relative w-full">
              <p className="font-sans font-bold leading-h3 not-italic relative shrink-0 text-primary text-h3 w-full">
                {title}
              </p>
              {address && (
                <div className="content-stretch flex gap-1 items-center relative shrink-0 w-full">
                  <div className="relative shrink-0 w-4 h-4">
                    <ThemeIcon src="/assets/location-icon.svg" alt="Location" size="sm" variant="default" />
                  </div>
                  <p className="basis-0 font-sans font-normal grow leading-base min-h-px min-w-px not-italic relative shrink-0 text-base text-tertiary">
                    {address}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="content-center flex flex-wrap gap-2 items-center relative shrink-0">
          {secondaryAction && (
            <button
              onClick={secondaryAction.onClick}
              className="border border-overlays-white-inverse-10 border-solid box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative rounded-lg shrink-0 hover:bg-gray-50 transition-colors duration-200"
            >
              {secondaryAction.icon && (
                <div className="relative shrink-0 w-4 h-4">
                  <ThemeIcon src={secondaryAction.icon} alt={secondaryAction.label} size="sm" variant="default" />
                </div>
              )}
              <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-primary text-small text-center text-nowrap whitespace-pre">
                {secondaryAction.label}
              </p>
            </button>
          )}
          {primaryAction && (
            <button
              onClick={primaryAction.onClick}
              className="bg-gradient-brand-aurora box-border content-stretch cursor-pointer flex gap-2 items-center justify-center overflow-visible px-4 py-2 relative rounded-lg shrink-0 hover:opacity-90 transition-opacity duration-200"
            >
              {primaryAction.icon && (
                <div className="relative shrink-0 w-4 h-4">
                  <ThemeIcon src={primaryAction.icon} alt={primaryAction.label} size="sm" variant="white" />
                </div>
              )}
              <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-small text-nowrap text-white whitespace-pre">
                {primaryAction.label}
              </p>
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="content-center flex flex-wrap gap-4 items-center justify-between relative shrink-0 w-full">
      <div className="relative shrink-0">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex flex-col items-start not-italic relative">
          <p className="font-sans font-bold leading-h3 relative shrink-0 text-primary text-h3">
            {title}
          </p>
          {subtitle && (
            <p className="font-sans font-normal leading-base relative shrink-0 text-base text-tertiary text-nowrap whitespace-pre">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="h-[36px] relative shrink-0" data-name="Container" data-node-id="242:8219">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-start relative">
          <div className="relative shrink-0" data-node-id="242:14186">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-center flex flex-wrap gap-[8px] items-center relative">
              
              {/* Secondary Action Button */}
              {secondaryAction && (
                <button
                  onClick={secondaryAction.onClick}
                  className="border border-overlays-white-inverse-10 border-solid box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative rounded-lg shrink-0 hover:bg-gray-50 transition-colors duration-200"
                >
                  {secondaryAction.icon && (
                    <div className="relative shrink-0 w-4 h-4">
                      <ThemeIcon src={secondaryAction.icon} alt={secondaryAction.label} size="sm" variant="default" />
                    </div>
                  )}
                  <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-primary text-small text-center text-nowrap whitespace-pre">
                    {secondaryAction.label}
                  </p>
                </button>
              )}

              {/* Primary Action Button */}
              {primaryAction && (
                <button
                  onClick={primaryAction.onClick}
                  className="bg-gradient-brand-aurora box-border content-stretch cursor-pointer flex gap-2 items-center justify-center overflow-visible px-4 py-2 relative rounded-lg shrink-0 hover:opacity-90 transition-opacity duration-200"
                >
                  {primaryAction.icon && (
                    <div className="relative shrink-0 w-4 h-4">
                      <ThemeIcon src={primaryAction.icon} alt={primaryAction.label} size="sm" variant="white" />
                    </div>
                  )}
                  <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-small text-nowrap text-white whitespace-pre">
                    {primaryAction.label}
                  </p>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
