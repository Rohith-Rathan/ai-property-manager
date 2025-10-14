import React from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';
import ThemeIcon from './ThemeIcon';

// Asset constants
const locationIcon = getAssetPath('location-icon');
const propertyActionsIcon = getAssetPath('property-actions-icon');
const unitsIcon = getAssetPath('units-icon');
const dollarIcon = getAssetPath('dollar-icon');
const calendarIcon = getAssetPath('calendar-icon');
const userIcon = getAssetPath('user-icon');

interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    address: string;
    image: string;
    badge?: string;
    badgeColor?: 'success' | 'warning' | 'error';
    units: number;
    monthlyRevenue: string;
    date: string;
    manager: string;
    occupancy: {
      percentage: number;
      description: string;
    };
  };
  onEdit?: (id: string) => void;
  onView?: (id: string) => void;
}

export default function PropertyCard({
  property,
  onEdit,
  onView
}: PropertyCardProps) {
  
  const getBadgeColorClass = (color?: string) => {
    switch (color) {
      case 'error': return 'bg-error-500';
      case 'warning': return 'bg-warning-500';
      default: return 'bg-success-500';
    }
  };

  return (
    <div className="bg-paper-paper-elevation-1 border border-overlays-white-inverse-5 border-solid box-border content-stretch flex flex-col items-start relative rounded-xxl shrink-0 w-full shadow-card-small" data-name="Property Card">
      {/* Image Section with Badge */}
      <div className="content-stretch flex flex-col gap-4 items-center overflow-clip relative rounded-tl-xxl rounded-tr-xxl shrink-0 w-full" data-name="Card">
        <div className="h-48 relative shrink-0 w-full" data-name="ImageWithFallback">
          <img alt={property.name} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={property.image} />
          {property.badge && (
            <div className={`absolute ${getBadgeColorClass(property.badgeColor)} box-border content-stretch flex gap-1 h-6 items-center justify-center overflow-clip px-2 py-0.5 right-4 rounded-lg top-6`} data-name="Badge">
              <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-label-small text-nowrap text-white whitespace-pre" data-name="Badge Text">
                {property.badge}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="box-border content-stretch flex flex-col gap-4 items-center p-6 relative rounded-bl-xxl rounded-br-xxl shrink-0 w-full" data-name="Card">
        {/* Property Info */}
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="PropertyCard">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex flex-col gap-1 items-start relative w-full">
              <p className="font-sans font-normal leading-base not-italic relative shrink-0 text-primary text-h5 w-full" data-name="Property Title">
                {property.name}
              </p>
              <div className="box-border content-stretch flex gap-2 items-center px-0 py-px relative shrink-0 w-full" data-name="Address">
                <ThemeIcon src={locationIcon} alt="Location" size="xs" variant="default" />
                <p className="basis-0 font-sans font-normal grow leading-normal min-h-px min-w-px not-italic relative shrink-0 text-tertiary text-label-small" data-name="Address Text">
                  {property.address}
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg shrink-0 w-6 h-6" data-name="Actions Button">
            <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex items-center justify-center relative w-6 h-6">
              <button 
                className="block cursor-pointer relative shrink-0 w-4 h-4" 
                data-name="Icon"
                onClick={() => onEdit?.(property.id)}
              >
                <ThemeIcon src={propertyActionsIcon} alt="Actions" size="sm" variant="default" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="Stats Section">
          {/* First Row - Units and Revenue */}
          <div className="content-center flex flex-wrap gap-2 items-center justify-between relative shrink-0 w-full" data-name="Stats Row 1">
            <div className="content-stretch flex gap-2 h-4 items-center relative shrink-0 w-33" data-name="Units Container">
              <ThemeIcon src={unitsIcon} alt="Units" size="sm" variant="default" />
              <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-primary text-label-small w-13" data-name="Units Text">
                {property.units} units
              </p>
            </div>
            <div className="content-stretch flex gap-2 h-4 items-center relative shrink-0 w-33" data-name="Revenue Container">
              <ThemeIcon src={dollarIcon} alt="Revenue" size="sm" variant="default" />
              <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-primary text-label-small w-13" data-name="Revenue Text">
                {property.monthlyRevenue}
              </p>
            </div>
          </div>
          {/* Second Row - Date and Manager */}
          <div className="content-center flex flex-wrap gap-2 items-center justify-between relative shrink-0 w-full" data-name="Stats Row 2">
            <div className="content-stretch flex gap-2 items-center relative shrink-0 w-33" data-name="Date Container">
              <ThemeIcon src={calendarIcon} alt="Date" size="sm" variant="default" />
              <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-primary text-label-small text-nowrap whitespace-pre" data-name="Date Text">
                {property.date}
              </p>
            </div>
            <div className="content-stretch flex gap-2 items-center relative shrink-0 w-33" data-name="Manager Container">
              <ThemeIcon src={userIcon} alt="Manager" size="sm" variant="default" />
              <p className="basis-0 font-sans font-normal grow leading-normal min-h-px min-w-px not-italic relative shrink-0 text-primary text-label-small" data-name="Manager Text">
                {property.manager}
              </p>
            </div>
          </div>
        </div>

        {/* Occupancy Section */}
        <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="Occupancy Section">
          <div className="content-stretch flex font-sans font-normal items-center justify-between leading-normal not-italic relative shrink-0 text-primary text-label-small text-nowrap w-full whitespace-pre" data-name="Occupancy Header">
            <p className="relative shrink-0" data-name="Occupancy Label">
              Occupancy
            </p>
            <p className="relative shrink-0" data-name="Occupancy Percentage">
              {property.occupancy.percentage}%
            </p>
          </div>
          <div className="bg-gradient-to-r box-border content-stretch flex flex-col from-[rgba(124,134,255,0.2)] h-2 items-start overflow-clip py-0 relative rounded-full shrink-0 to-[rgba(43,127,255,0.2)] w-full" data-name="Occupancy Bar Background">
            <div className="absolute bg-gradient-to-b from-[#7c86ff] h-2 left-0 to-[#2b7fff] top-0" style={{ width: `${property.occupancy.percentage}%` }} data-name="Occupancy Fill" />
          </div>
          <div className="content-stretch flex font-sans font-normal items-center justify-between not-italic relative shrink-0 text-primary text-label-small text-nowrap w-full whitespace-pre" data-name="Occupancy Footer">
            <p className="leading-normal relative shrink-0" data-name="Occupancy Description">
              {property.occupancy.description}
            </p>
            <p className="leading-base opacity-0 relative shrink-0 tracking-tight" data-name="Occupancy Percentage Footer">
              {property.occupancy.percentage}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
