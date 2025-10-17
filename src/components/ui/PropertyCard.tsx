import React from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';
import ThemeIcon from './ThemeIcon';
import ProgressBar from './ProgressBar';
import { MoreActionsButton } from './MoreActionsButton';

// Asset constants
const locationIcon = getAssetPath('location-icon');
const propertyActionsIcon = getAssetPath('property-actions-icon');
const unitsIcon = getAssetPath('units-icon');
const dollarIcon = getAssetPath('dollar-icon');
const calendarIcon = getAssetPath('calendar-icon');
const userIcon = getAssetPath('user-icon');
const viewDetailsIcon = getAssetPath('view-details-icon');
const editIcon = getAssetPath('edit-icon');
const reportsIcon = getAssetPath('reports-icon');
const moreOptionsIcon = getAssetPath('more-options-icon');

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
    <div className="bg-overlays-black-inverse-95 border border-overlays-white-inverse-5 border-solid box-border content-stretch flex flex-col items-start relative rounded-xxl shrink-0 w-full shadow-card-small" data-name="Property Card">
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
          <MoreActionsButton
            items={[
              { 
                id: 'view-property',
                label: 'View Property', 
                onClick: () => onView?.(property.id),
                icon: viewDetailsIcon
              },
              { 
                id: 'edit-property',
                label: 'Edit Property', 
                onClick: () => onEdit?.(property.id),
                icon: editIcon
              },
              { 
                id: 'view-units',
                label: 'View Units', 
                onClick: () => console.log('View units for', property.id),
                icon: unitsIcon
              },
              { 
                id: 'generate-report',
                label: 'Generate Report', 
                onClick: () => console.log('Generate report for', property.id),
                icon: reportsIcon
              }
            ]}
            triggerIcon={moreOptionsIcon}
            position="bottom-right"
          />
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
        <ProgressBar
          variant="occupancy"
          percentage={property.occupancy.percentage}
          label="Occupancy"
          value={`${property.occupancy.percentage}%`}
          subtitle={property.occupancy.description}
        />
      </div>
    </div>
  );
}
