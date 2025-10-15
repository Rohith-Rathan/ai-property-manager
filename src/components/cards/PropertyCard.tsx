import React from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';
import ThemeIcon from '../ui/ThemeIcon';
import ProgressBar from '../ui/ProgressBar';

// Asset constants
const propertyActionsIcon = getAssetPath('property-actions-icon');
const propertiesNavIcon = getAssetPath('properties-nav-icon');
const dollarIcon = getAssetPath('dollar-icon');
const calendarIcon = getAssetPath('calendar-icon');
const dotSeparatorIcon = getAssetPath('dot-separator-icon');

interface PropertyCardProps {
  title: string;
  address: string;
  image: string;
  badge: {
    text: string;
    color: 'success' | 'warning' | 'error' | 'info';
  };
  stats: {
    units?: string;
    revenue?: string;
    date?: string;
  };
  occupancy: {
    percentage: number;
    color: 'success' | 'warning' | 'error';
    description: string;
  };
  showActions?: boolean;
}

export default function PropertyCard({ 
  title,
  address,
  image,
  badge,
  stats,
  occupancy,
  showActions = true
}: PropertyCardProps) {
  const getBadgeColorClass = (color: string) => {
    switch (color) {
      case 'error': return 'bg-error-500';
      case 'warning': return 'bg-warning-500';
      case 'info': return 'bg-info-500';
      default: return 'bg-success-500';
    }
  };


  return (
    <div className="bg-static-white border border-overlays-white-inverse-10 border-solid box-border content-stretch flex flex-col gap-4 items-start p-6 relative rounded-xxl shrink-0 w-96 h-90 shadow-card-small" data-name="Property Card">
      {/* Image Section */}
      <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="Image Section">
        <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="Image Container">
          <img alt={title} className="block max-w-none size-full object-cover rounded-md" src={image} />
          <div className={`${getBadgeColorClass(badge.color)} box-border content-stretch flex gap-1 items-center justify-center overflow-clip px-2 py-1 relative rounded-full shrink-0`} data-name="Property Badge">
            <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-label-small text-nowrap text-white whitespace-pre" data-name="Badge Text">
              {badge.text}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="Content Section">
        {/* Title and Actions */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title Section">
          <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0" data-name="Title Container">
            <p className="font-sans font-semibold leading-base not-italic relative shrink-0 text-primary text-base" data-name="Property Title">
              {title}
            </p>
            <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full" data-name="Address">
              <ThemeIcon src={dotSeparatorIcon} alt="Separator" size="xs" variant="default" />
              <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-tertiary text-label-small" data-name="Address Text">
                {address}
              </p>
            </div>
          </div>
          {showActions && (
            <button className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-6 h-6 cursor-pointer" data-name="Actions Button">
              <ThemeIcon src={propertyActionsIcon} alt="Actions" size="sm" variant="default" />
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="content-stretch flex gap-4 items-center relative shrink-0 w-full" data-name="Stats Section">
          {stats.units && (
            <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Units Stat">
              <ThemeIcon src={propertiesNavIcon} alt="Units" size="sm" variant="default" />
              <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-primary text-label-small" data-name="Units Text">
                {stats.units}
              </p>
            </div>
          )}
          {stats.revenue && (
            <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Revenue Stat">
              <ThemeIcon src={dollarIcon} alt="Revenue" size="sm" variant="default" />
              <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-primary text-label-small" data-name="Revenue Text">
                {stats.revenue}
              </p>
            </div>
          )}
          {stats.date && (
            <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Date Stat">
              <ThemeIcon src={calendarIcon} alt="Date" size="sm" variant="default" />
              <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-primary text-label-small" data-name="Date Text">
                {stats.date}
              </p>
            </div>
          )}
        </div>

        {/* Occupancy Section */}
        <ProgressBar
          variant="occupancy"
          percentage={occupancy.percentage}
          label="Occupancy"
          value={`${occupancy.percentage}%`}
          subtitle={occupancy.description}
        />
      </div>
    </div>
  );
}
