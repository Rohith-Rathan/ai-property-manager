import React from 'react';
import { Card } from './Card';
import { Chip } from './Chip';
import { MoreActionsButton } from './MoreActionsButton';
import { KeyValuePair } from './KeyValuePair';
import { ThemeIcon } from './ThemeIcon';

export interface AssetDetail {
  label: string;
  value: string;
}

export interface AssetCardProps {
  // Asset Info
  assetName: string;
  category: string;
  propertyName?: string;
  date: string;
  imageUrl?: string;
  
  // Asset Details
  details?: AssetDetail[];
  
  // Footer Info
  maintenanceInfo?: {
    text: string;
    vendor?: string;
  };
  
  // Actions
  onMoreActions?: () => void;
  onExpand?: () => void;
  
  // Variant
  variant?: 'detailed' | 'compact';
  
  className?: string;
}

export const AssetCard: React.FC<AssetCardProps> = ({
  assetName,
  category,
  propertyName,
  date,
  imageUrl,
  details,
  maintenanceInfo,
  onMoreActions,
  onExpand,
  variant = 'detailed',
  className = ''
}) => {
  return (
    <Card className={`bg-white-5 border border-overlays-white-inverse-10 shadow-card-small ${className}`}>
      <div className="flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div className="flex gap-2 items-start flex-1">
            {/* Asset Image */}
            <div className="relative rounded-xxl w-10 h-10 shrink-0">
              <div className="absolute inset-0 pointer-events-none rounded-xxl">
                <div className="absolute bg-overlays-primary-10 inset-0 rounded-xxl" />
                {imageUrl && (
                  <img 
                    alt={assetName} 
                    className="absolute max-w-none object-cover rounded-xxl w-full h-full" 
                    src={imageUrl} 
                  />
                )}
              </div>
            </div>
            
            {/* Asset Details */}
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex gap-2 items-center">
                <h3 className="font-semibold text-base text-primary">
                  {assetName}
                </h3>
                {variant === 'detailed' && (
                  <Chip
                    label={category}
                    variant="primary"
                    type="low-hue-border"
                    size="sm"
                  />
                )}
              </div>
              
              {/* Property & Date Info */}
              <div className="flex gap-2 items-center">
                {variant === 'detailed' && propertyName && (
                  <>
                    <p className="text-xs text-tertiary">
                      {propertyName}
                    </p>
                    <div className="w-1 h-1 bg-tertiary rounded-full"></div>
                  </>
                )}
                {variant === 'compact' && (
                  <>
                    <p className="text-xs text-tertiary">
                      {category}
                    </p>
                    <div className="w-1 h-1 bg-tertiary rounded-full"></div>
                  </>
                )}
                <p className="text-xs text-tertiary">
                  {date}
                </p>
              </div>
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
                  id: 'edit-asset',
                  label: 'Edit Asset', 
                  icon: '/assets/edit-property-icon.svg',
                  onClick: () => console.log('Edit clicked') 
                },
                { 
                  id: 'maintenance-history',
                  label: 'Maintenance History', 
                  icon: '/assets/maintenance-icon.svg',
                  onClick: () => console.log('Maintenance clicked') 
                }
              ]}
            />
          )}
        </div>
        
        {/* Asset Details Grid */}
        {variant === 'detailed' && details && details.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {details.map((detail, index) => (
              <KeyValuePair
                key={index}
                label={detail.label}
                value={detail.value}
                layout="vertical"
              />
            ))}
          </div>
        )}
        
        {/* Footer Section */}
        {maintenanceInfo && (
          <div className="bg-gray-100 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-start">
                <div className="flex items-center justify-center rounded-[10px] w-6 h-6">
                  <ThemeIcon 
                    src="/assets/maintenance-icon.svg"
                    alt="Maintenance"
                    size="md"
                    variant="default"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-error-500">
                    {maintenanceInfo.text}
                  </p>
                  {maintenanceInfo.vendor && (
                    <p className="text-xs text-tertiary">
                      {variant === 'compact' ? 'Assigned to: ' : 'Assigned Vendor: '}{maintenanceInfo.vendor}
                    </p>
                  )}
                </div>
              </div>
              {onExpand && (
                <button onClick={onExpand} className="flex items-center justify-center">
                  <div className="rotate-180">
                    <ThemeIcon 
                      src="/assets/right-arrow.svg"
                      alt="Expand"
                      size="sm"
                      variant="default"
                    />
                  </div>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default AssetCard;