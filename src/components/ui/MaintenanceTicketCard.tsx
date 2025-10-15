import React from 'react';
import { Card } from './Card';
import { Chip } from './Chip';
import { MoreActionsButton } from './MoreActionsButton';
import { ThemeIcon } from './ThemeIcon';

export interface MaintenanceTicketCardProps {
  // Ticket Info
  ticketId: string;
  
  // Property Info
  propertyName?: string;
  equipmentType?: string;
  assetInfo?: string; // For compact variant
  
  // Status Badges
  badges?: Array<{
    label: string;
    variant: 'success' | 'error' | 'warning' | 'info' | 'primary' | 'secondary' | 'neutral';
    icon?: string;
    type?: 'filled' | 'low-hue' | 'low-hue-border';
  }>;
  
  // Description
  description: string;
  
  // Actions
  onMoreActions?: () => void;
  onViewDetails?: () => void;
  
  // Variant
  variant?: 'detailed' | 'compact';
  
  className?: string;
}

export const MaintenanceTicketCard: React.FC<MaintenanceTicketCardProps> = ({
  ticketId,
  propertyName,
  equipmentType,
  assetInfo,
  badges = [],
  description,
  onMoreActions,
  onViewDetails,
  variant = 'detailed',
  className = ''
}) => {
  if (variant === 'compact') {
    return (
      <Card className={`bg-gray-50 border border-overlays-white-inverse-10 p-4 rounded-xxl shadow-card-small ${className}`}>
        <div className="flex flex-col gap-4">
          {/* Header Section */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-lg text-primary">
                  {ticketId}
                </h3>
                
                {/* Status Badges */}
                {badges.length > 0 && (
                  <div className="flex gap-1 items-center">
                    {badges.map((badge, index) => (
                      <Chip
                        key={index}
                        label={badge.label}
                        variant={badge.variant}
                        type={badge.type || 'low-hue-border'}
                        size="sm"
                        icon={badge.icon}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Asset Info */}
              {assetInfo && (
                <p className="text-xs text-tertiary">
                  {assetInfo}
                </p>
              )}
            </div>
          </div>
          
          {/* Description Section */}
          <div className="bg-gray-100 rounded-lg p-3 h-11 flex items-center">
            <p className="text-sm text-primary">
              {description}
            </p>
          </div>
          
          {/* View Details Button */}
          {onViewDetails && (
            <button 
              onClick={onViewDetails}
              className="border border-overlays-white-inverse-10 rounded-lg px-4 py-2 w-full"
            >
              <p className="font-medium text-sm text-primary text-center">
                View Full Details
              </p>
            </button>
          )}
        </div>
      </Card>
    );
  }

  // Detailed variant (existing implementation)
  return (
    <Card className={`bg-gray-50 border border-overlays-white-inverse-10 p-4 rounded-xxl shadow-card-small ${className}`}>
      <div className="flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div className="flex gap-2 items-start flex-1">
            {/* Maintenance Avatar */}
            <div className="bg-gradient-magenta-candy flex items-center justify-center rounded-xxl w-10 h-10 shrink-0">
              <ThemeIcon 
                src="/assets/maintenance-icon.svg"
                alt="Maintenance"
                size="sm"
                variant="white"
              />
            </div>
            
            {/* Ticket Details */}
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="font-normal text-lg text-primary">
                {ticketId}
              </h3>
              
              {/* Property & Equipment Info */}
              {propertyName && equipmentType && (
                <div className="flex gap-2 items-center">
                  <p className="text-xs text-tertiary">
                    {propertyName}
                  </p>
                  <div className="w-1 h-1 bg-tertiary rounded-full"></div>
                  <p className="text-xs text-tertiary">
                    {equipmentType}
                  </p>
                </div>
              )}
              
              {/* Status Badges */}
              {badges.length > 0 && (
                <div className="flex gap-1 items-center pt-2">
                  {badges.map((badge, index) => (
                    <Chip
                      key={index}
                      label={badge.label}
                      variant={badge.variant}
                      type={badge.type || 'low-hue-border'}
                      size="sm"
                      icon={badge.icon}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* More Actions Button */}
          {onMoreActions && (
            <MoreActionsButton 
              items={[
                { 
                  id: 'view-details',
                  label: 'View Details', 
                  icon: '/assets/view-details-icon.svg',
                  onClick: onMoreActions 
                },
                { 
                  id: 'edit-ticket',
                  label: 'Edit Ticket', 
                  icon: '/assets/edit-property-icon.svg',
                  onClick: () => console.log('Edit clicked') 
                },
                { 
                  id: 'assign-vendor',
                  label: 'Assign Vendor', 
                  icon: '/assets/add-manager-icon.svg',
                  onClick: () => console.log('Assign vendor clicked') 
                }
              ]}
            />
          )}
        </div>
        
        {/* Description Section */}
        <div className="bg-gray-100 rounded-lg p-3">
          <p className="text-xs text-primary">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default MaintenanceTicketCard;