import React from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';
import ThemeIcon from '../ui/ThemeIcon';

// Asset constants
const starFilledIcon = getAssetPath('star-filled-icon');
const dollarIcon = getAssetPath('dollar-icon');
const propertyActionsIcon = getAssetPath('property-actions-icon');
const locationIcon = getAssetPath('location-icon');

interface DashboardPropertyCardProps {
  rank: number;
  title: string;
  address: string;
  rating: number;
  revenue: string;
  occupancy: {
    percentage: number;
    color: 'success' | 'warning' | 'error';
    description: string;
  };
  showActions?: boolean;
}

export default function DashboardPropertyCard({ 
  rank,
  title,
  address,
  rating,
  revenue,
  occupancy,
  showActions = true
}: DashboardPropertyCardProps) {
  const getOccupancyColorClass = (color: string) => {
    switch (color) {
      case 'error': return 'text-error-500';
      case 'warning': return 'text-warning-500';
      default: return 'text-success-500';
    }
  };

  const getOccupancyGradientClass = (color: string) => {
    switch (color) {
      case 'error': return 'from-accent-red to-accent-orange';
      case 'warning': return 'from-accent-yellow to-accent-orange';
      default: return 'from-accent-purple to-accent-blue';
    }
  };

  return (
    <div className="bg-paper-paper-elevation-1 border border-overlays-white-inverse-5 border-solid box-border content-stretch flex flex-col items-start relative rounded-xxl shrink-0 w-96 h-66 shadow-card-small" data-name="Dashboard Property Card">
      <div className="box-border content-stretch flex flex-col gap-4 items-center p-6 relative rounded-bl-xxl rounded-br-xxl shrink-0 w-full" data-name="Card">
        {/* Header with Rank and Rating */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Header">
          <div className="bg-gradient-danger-glow content-stretch flex items-center justify-center relative rounded-xxl shadow-brand-purple-glow shrink-0 w-10 h-10" data-name="Rank Container">
            <p className="font-sans font-bold leading-base not-italic relative shrink-0 text-h5 text-center text-nowrap text-white whitespace-pre" data-name="Rank">
              {rank}
            </p>
          </div>
          <div className="content-stretch flex gap-1 h-6 items-center justify-center relative rounded-lg shrink-0" data-name="Rating Container">
            <ThemeIcon src={starFilledIcon} alt="Rating" size="sm" variant="default" />
            <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-primary text-small text-nowrap whitespace-pre" data-name="Rating">
              {rating}
            </p>
          </div>
        </div>

        {/* Property Info */}
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="PropertyCard">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex flex-col gap-1 items-start relative w-full">
              <p className="font-sans font-normal leading-base not-italic relative shrink-0 text-primary text-h5 w-full" data-name="Property Title">
                {title}
              </p>
              <div className="box-border content-stretch flex gap-2 items-center px-0 py-px relative shrink-0 w-full" data-name="Address">
                <ThemeIcon src={locationIcon} alt="Location" size="xs" variant="default" />
                <p className="basis-0 font-sans font-normal grow leading-normal min-h-px min-w-px not-italic relative shrink-0 text-tertiary text-label-small" data-name="Address Text">
                  {address}
                </p>
              </div>
            </div>
          </div>
          {showActions && (
            <div className="relative rounded-lg shrink-0 w-6 h-6" data-name="Actions Button">
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex items-center justify-center relative w-6 h-6">
                <button className="block cursor-pointer relative shrink-0 w-4 h-4" data-name="Icon">
                  <ThemeIcon src={propertyActionsIcon} alt="Actions" size="sm" variant="default" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Revenue Section */}
        <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="Revenue Section">
          <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="Revenue Container">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Revenue Row">
              <div className="content-stretch flex gap-2 h-4 items-center relative shrink-0" data-name="Revenue Label Container">
                <ThemeIcon src={dollarIcon} alt="Revenue" size="sm" variant="default" />
                <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-primary text-small text-nowrap whitespace-pre" data-name="Revenue Label">
                  Revenue
                </p>
              </div>
              <p className="font-sans font-medium leading-base not-italic relative shrink-0 text-success-500 text-small text-nowrap whitespace-pre" data-name="Revenue Amount">
                {revenue}
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
              {occupancy.percentage}%
            </p>
          </div>
          <div className="bg-gradient-to-r box-border content-stretch flex flex-col from-[rgba(124,134,255,0.2)] h-2 items-start overflow-clip py-0 relative rounded-full shrink-0 to-[rgba(43,127,255,0.2)] w-full" data-name="Occupancy Bar Background">
            <div className="absolute bg-gradient-to-b from-[#7c86ff] h-2 left-0 to-[#2b7fff] top-0" style={{ width: `${occupancy.percentage}%` }} data-name="Occupancy Fill" />
          </div>
          <div className="content-stretch flex font-sans font-normal items-center justify-between not-italic relative shrink-0 text-primary text-label-small text-nowrap w-full whitespace-pre" data-name="Occupancy Footer">
            <p className="leading-normal relative shrink-0" data-name="Occupancy Description">
              {occupancy.description}
            </p>
            <p className="leading-base opacity-0 relative shrink-0 tracking-tight" data-name="Occupancy Percentage Footer">
              {occupancy.percentage}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
