import React from 'react';
import { Card } from './Card';
import { Chip } from './Chip';
import Button from '../forms/Button';
import { KeyValuePair } from './KeyValuePair';
import { ThemeIcon } from './ThemeIcon';
import { MoreActionsButton } from './MoreActionsButton';

export interface TemplateDetail {
  label: string;
  value: string;
}

export interface ChannelIcon {
  src: string;
  alt: string;
}

export interface TemplateCardProps {
  // Template Info
  title: string;
  category: string;
  templateName: string;
  
  // Template Details
  details: TemplateDetail[];
  
  // Channel Icons
  channels?: ChannelIcon[];
  
  // Actions
  onUseTemplate?: () => void;
  onViewDetails?: () => void;
  onTranslate?: () => void;
  onMoreActions?: () => void;
  
  className?: string;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  category,
  templateName,
  details,
  channels = [],
  onUseTemplate,
  onViewDetails,
  onTranslate,
  onMoreActions,
  className = ''
}) => {
  return (
    <Card className={`bg-overlays-white-10 border border-overlays-white-inverse-10 shadow-card-small ${className}`}>
      <div className="flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex gap-1 items-start flex-wrap">
              <h3 className="font-semibold text-base text-primary break-words">
                {title}
              </h3>
              <Chip
                label={category}
                variant="primary"
                type="low-hue-border"
                size="sm"
              />
            </div>
            
            {/* Template Name */}
            <p className="text-xs text-tertiary">
              Template: {templateName}
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Use Template Button */}
            {onUseTemplate && (
              <Button
                variant="primary"
                size="sm"
                onClick={onUseTemplate}
              >
                Use Template
              </Button>
            )}
            
            {/* More Actions Button */}
            {onMoreActions && (
              <MoreActionsButton 
                items={[
                  { 
                    id: 'view-template',
                    label: 'View Template', 
                    icon: '/assets/view-details-icon.svg',
                    onClick: onMoreActions 
                  },
                  { 
                    id: 'edit-template',
                    label: 'Edit Template', 
                    icon: '/assets/edit-property-icon.svg',
                    onClick: () => console.log('Edit template clicked') 
                  },
                  { 
                    id: 'duplicate-template',
                    label: 'Duplicate Template', 
                    icon: '/assets/view-details-icon.svg',
                    onClick: () => console.log('Duplicate template clicked') 
                  },
                  { 
                    id: 'delete-template',
                    label: 'Delete Template', 
                    icon: '/assets/delete-item-icon.svg',
                    onClick: () => console.log('Delete template clicked') 
                  }
                ]}
              />
            )}
          </div>
        </div>
        
        {/* Template Details */}
        <div className="flex flex-col gap-4">
          {details.map((detail, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="text-sm text-tertiary">
                {detail.label}
              </p>
              <p className="text-sm text-primary break-words whitespace-pre-wrap">
                {detail.value}
              </p>
            </div>
          ))}
          
          {/* Channel Icons */}
          {channels.length > 0 && (
            <div className="flex gap-2 items-center">
              <p className="text-sm text-tertiary">
                Channel:
              </p>
              <div className="flex gap-2">
                {channels.map((channel, index) => (
                  <ThemeIcon
                    key={index}
                    src={channel.src}
                    alt={channel.alt}
                    size="sm"
                    variant="default"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          {onViewDetails && (
            <Button
              variant="secondary"
              size="sm"
              onClick={onViewDetails}
            >
              View Details
            </Button>
          )}
          {onTranslate && (
            <Button
              variant="secondary"
              size="sm"
              onClick={onTranslate}
            >
              Translate
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TemplateCard;
