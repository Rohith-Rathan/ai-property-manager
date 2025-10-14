import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
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
  title,
  subtitle,
  primaryAction,
  secondaryAction
}: PageHeaderProps) {
  
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="242:8215">
      <div className="relative shrink-0" data-name="Container" data-node-id="242:8216">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start not-italic relative">
          <p className="font-['Inter:Bold',_sans-serif] font-bold h-[36px] leading-[38px] relative shrink-0 text-[#101828] text-[30px] w-[492.75px]" data-node-id="242:8217">
            {title}
          </p>
          {subtitle && (
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-gray-500 text-nowrap whitespace-pre" data-node-id="242:8218">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="h-[36px] relative shrink-0" data-name="Container" data-node-id="242:8219">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-start relative">
          <div className="relative shrink-0" data-node-id="242:14186">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-center flex flex-wrap gap-[8px] items-center relative">
              
              {/* Secondary Action Button - EXACT FIGMA STRUCTURE */}
              {secondaryAction && (
                <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center opacity-0 px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="242:14187">
                  {secondaryAction.icon && (
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:14188">
                      <img alt="" className="block max-w-none size-full" src={secondaryAction.icon} />
                    </div>
                  )}
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="242:14191">
                    {secondaryAction.label}
                  </p>
                </div>
              )}

              {/* Primary Action Button - EXACT FIGMA STRUCTURE */}
              {primaryAction && (
                <div className="bg-gradient-to-b box-border content-stretch flex from-[#7c86ff] gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[10px] shrink-0 to-[#2b7fff]" data-name="Button" data-node-id="242:14192">
                  {primaryAction.icon && (
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:14193">
                      <img alt="" className="block max-w-none size-full" src={primaryAction.icon} />
                    </div>
                  )}
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" data-node-id="242:14196">
                    {primaryAction.label}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
