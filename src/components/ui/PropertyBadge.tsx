import React from 'react';

interface PropertyBadgeProps {
  type: 'apartment' | 'individual' | 'commercial' | 'residential' | 'custom';
  label: string;
  customColor?: string;
}

export default function PropertyBadge({
  type,
  label,
  customColor
}: PropertyBadgeProps) {
  
  // Badge color mapping - EXACT FIGMA MAPPING
  const getBadgeColor = (badgeType: string) => {
    const colorMap = {
      apartment: 'bg-[#00c950]',      // success/500
      individual: 'bg-[#f0b100]',     // warning/500  
      commercial: 'bg-[#635ff5]',     // secondary/500
      residential: 'bg-[#7c86ff]',    // brand-aurora/color1
      custom: customColor || 'bg-[#6a7282]' // colors/text/tertiary
    };
    return colorMap[badgeType as keyof typeof colorMap] || 'bg-[#6a7282]';
  };

  return (
    <div className={`${getBadgeColor(type)} box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[9999px] shrink-0`} data-name="Badge">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">
        {label}
      </p>
    </div>
  );
}
