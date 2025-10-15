import React from 'react';
import { Card } from './Card';
import { Chip } from './Chip';
import { MoreActionsButton } from './MoreActionsButton';
import { KeyValuePair } from './KeyValuePair';
import { ThemeIcon } from './ThemeIcon';

export interface TenantCardProps {
  // User Info
  userInitials: string;
  userName: string;
  propertyName: string;
  unitName: string;
  badges?: Array<{
    label: string;
    variant: 'success' | 'error' | 'warning' | 'info';
  }>;
  
  // Document Info
  document?: {
    title: string;
    subtitle: string;
  };
  
  // Additional Info
  additionalInfo?: {
    text: string;
  };
  
  // Actions
  onMoreActions?: () => void;
  onDocumentClick?: () => void;
  
  className?: string;
}

export const TenantCard: React.FC<TenantCardProps> = ({
  userInitials,
  userName,
  propertyName,
  unitName,
  badges = [],
  document,
  additionalInfo,
  onMoreActions,
  onDocumentClick,
  className = ''
}) => {
  return (
    <Card className={`bg-gray-50 border border-overlays-white-inverse-10 p-4 rounded-xxl shadow-card-small ${className}`}>
      <div className="flex flex-col gap-4">
        {/* User Info Section */}
        <div className="flex items-start justify-between">
          <div className="flex gap-2 items-start flex-1">
            {/* User Avatar */}
            <div className="bg-gradient-aqua-2 flex items-center justify-center rounded-xxl w-10 h-10 shrink-0">
              <p className="font-medium text-sm text-white">
                {userInitials}
              </p>
            </div>
            
            {/* User Details */}
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="font-normal text-lg text-primary">
                {userName}
              </h3>
              
              {/* Property & Unit Info */}
              <div className="flex gap-2 items-center">
                <ThemeIcon 
                  src="/assets/properties-icon.svg"
                  alt="Property"
                  size="xs" 
                  variant="gray"
                />
                <p className="text-xs text-tertiary">
                  <span>{propertyName} - </span>
                  <span className="font-medium">{unitName}</span>
                </p>
              </div>
              
              {/* Status Badges */}
              {badges.length > 0 && (
                <div className="flex gap-1 items-center pt-2">
                  {badges.map((badge, index) => (
                    <Chip
                      key={index}
                      label={badge.label}
                      variant={badge.variant}
                      type="low-hue"
                      size="sm"
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
                  id: 'edit-tenant',
                  label: 'Edit Tenant', 
                  icon: '/assets/edit-property-icon.svg',
                  onClick: () => console.log('Edit clicked') 
                },
                { 
                  id: 'send-message',
                  label: 'Send Message', 
                  icon: '/assets/email-icon.svg',
                  onClick: () => console.log('Message clicked') 
                }
              ]}
            />
          )}
        </div>
        
        {/* Document Info Section */}
        {document && (
          <div className="bg-gray-100 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <KeyValuePair
                icon="/assets/document-files-icon.svg"
                label={document.title}
                value={document.subtitle}
                layout="vertical"
              />
              {onDocumentClick && (
                <button onClick={onDocumentClick} className="ml-2">
                  <ThemeIcon 
                    src="/assets/external-link-icon.svg"
                    alt="External link"
                    size="sm"
                    variant="gray"
                  />
                </button>
              )}
            </div>
          </div>
        )}
        
        {/* Additional Info Section */}
        {additionalInfo && (
          <div className="flex gap-2 items-center">
            <ThemeIcon 
              src="/assets/maintenance-icon.svg"
              alt="Maintenance"
              size="xs" 
              variant="default"
            />
            <p className="text-xs text-primary">
              {additionalInfo.text}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TenantCard;
