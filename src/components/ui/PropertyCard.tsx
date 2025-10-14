import React from 'react';
import PropertyBadge from './PropertyBadge';

interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    address: string;
    image: string;
    type: 'apartment' | 'individual' | 'commercial' | 'residential';
    units: number;
    monthlyRevenue: string;
    occupancyRate: string;
    occupancyColor?: 'success' | 'warning' | 'error';
  };
  onEdit?: (id: string) => void;
  onView?: (id: string) => void;
}

export default function PropertyCard({
  property,
  onEdit,
  onView
}: PropertyCardProps) {
  
  // Occupancy color mapping - EXACT FIGMA MAPPING
  const getOccupancyColor = (rate: string, color?: string) => {
    if (color) {
      const colorMap = {
        success: 'text-[#00c950]',  // success/500
        warning: 'text-[#f0b100]',  // warning/500
        error: 'text-[#fb2c36]'     // error/500
      };
      return colorMap[color as keyof typeof colorMap] || 'text-[#101828]';
    }
    
    // Auto-detect color based on occupancy rate
    const rateNum = parseFloat(rate.replace('%', ''));
    if (rateNum >= 80) return 'text-[#00c950]';
    if (rateNum >= 50) return 'text-[#f0b100]';
    return 'text-[#fb2c36]';
  };

  return (
    <div 
      className="bg-surface-primary border border-overlays-black-10 border-solid box-border content-stretch flex items-center justify-between p-px relative rounded-2xl shrink-0 w-full shadow-card-large" 
      data-name="Card"
    >
      
      {/* Property Info Section - EXACT FIGMA STRUCTURE */}
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-[400px]" data-name="CardContent">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center p-[16px] relative w-[400px]">
            
            {/* Property Image - EXACT FIGMA STRUCTURE */}
            <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="ImageWithFallback">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <img alt={property.name} className="absolute max-w-none object-50%-50% object-cover size-full" src={property.image} />
                  <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
                </div>
              </div>
            </div>

            {/* Property Details - EXACT FIGMA STRUCTURE WITH DESIGN SYSTEM */}
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
              <div className="content-stretch flex gap-2 items-center relative shrink-0">
                <p className="font-semibold leading-6 not-italic relative shrink-0 text-text-primary text-16 text-nowrap whitespace-pre">
                  {property.name}
                </p>
                <PropertyBadge 
                  type={property.type} 
                  label={property.type.charAt(0).toUpperCase() + property.type.slice(1)} 
                />
              </div>
              <p className="font-normal leading-normal not-italic relative shrink-0 text-text-tertiary text-12 w-[194px]">
                {property.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Units Stats - EXACT FIGMA STRUCTURE WITH DESIGN SYSTEM */}
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="CardContent">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center justify-center p-4 relative size-full">
            <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="Container">
              <p className="font-semibold leading-6 relative shrink-0 text-text-primary text-16">
                {property.units}
              </p>
              <p className="font-normal leading-normal relative shrink-0 text-text-tertiary text-12">
                Units
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Stats - EXACT FIGMA STRUCTURE WITH DESIGN SYSTEM */}
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="CardContent">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center justify-center p-4 relative size-full">
            <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="Container">
              <p className="font-semibold leading-6 relative shrink-0 text-text-primary text-16">
                {property.monthlyRevenue}
              </p>
              <p className="font-normal leading-normal relative shrink-0 text-text-tertiary text-12">
                Monthly Revenue
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Occupancy Stats - EXACT FIGMA STRUCTURE WITH DESIGN SYSTEM */}
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="CardContent">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center justify-center p-4 relative size-full">
            <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="Container">
              <p className={`font-semibold leading-6 relative shrink-0 text-16 ${getOccupancyColor(property.occupancyRate, property.occupancyColor)}`}>
                {property.occupancyRate}
              </p>
              <p className="font-normal leading-normal relative shrink-0 text-text-tertiary text-12">
                Occupied
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions Section - EXACT FIGMA STRUCTURE WITH DESIGN SYSTEM */}
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-[88px]" data-name="CardContent">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-full items-center justify-center p-4 relative w-[88px]">
            <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-6" data-name="Button">
              <button 
                onClick={() => onEdit?.(property.id)}
                className="block cursor-pointer relative shrink-0 size-4" data-name="Icon"
              >
                <img alt="" className="block max-w-none size-full" src="/assets/more-options-icon.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
