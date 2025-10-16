import React from 'react';
import { Chip } from './Chip';
import { ThemeIcon } from './ThemeIcon';

export interface ActivityFeedItemProps {
  // Variant
  variant?: 'default' | 'compact';
  
  // User Information
  userName: string;
  userIcon?: string;
  
  // Activity Details
  action: string;
  description: string;
  timestamp: string;
  
  // Badges/Tags
  badges?: Array<{
    label: string;
    icon?: string;
    variant?: 'success' | 'warning' | 'error' | 'info' | 'primary' | 'secondary' | 'tertiary' | 'gray' | 'neutral';
  }>;
  
  // Priority
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  
  // Metadata
  metadata?: Array<{
    label: string;
    value: string;
  }>;
  
  // Actions
  onMoreActions?: () => void;
  
  // Timeline
  isLastItem?: boolean;
  
  className?: string;
}

export const ActivityFeedItem: React.FC<ActivityFeedItemProps> = ({
  variant = 'default',
  userName,
  userIcon,
  action,
  description,
  timestamp,
  badges = [],
  priority = 'low',
  metadata = [],
  onMoreActions,
  isLastItem = false,
  className = ''
}) => {
  // Priority color mapping
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-error-500';
      case 'high': return 'bg-warning-500';
      case 'medium': return 'bg-info-500';
      case 'low': return 'bg-success-500';
      default: return 'bg-success-500';
    }
  };

  // Compact variant - matches Figma design exactly
  if (variant === 'compact') {
    return (
      <div className={`bg-gray-50 box-border content-center flex flex-wrap gap-2 items-center px-4 py-3 relative rounded-lg size-full ${className}`} data-name="Container">
        {/* Icon Container */}
        <div className="bg-overlays-primary-10 relative rounded-full shrink-0 size-8" data-name="Icon Container">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex items-center justify-center relative size-8">
            <div className="relative shrink-0 size-4" data-name="Icon">
              {userIcon && (
                <ThemeIcon
                  src={userIcon}
                  alt="Activity icon"
                  size="sm"
                  variant="default"
                />
              )}
            </div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text Container">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex flex-col gap-1 items-start relative w-full">
            {/* Primary Text */}
            <p className="font-sans font-normal leading-4 not-italic relative shrink-0 text-primary text-sm w-full" data-name="Primary Text">
              {action}
            </p>
            
            {/* Secondary Text with Dot Separator */}
            <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full" data-name="Secondary Text">
              <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-xs text-nowrap whitespace-pre" data-name="Category">
                {badges.length > 0 ? badges[0].label : 'activity'}
              </p>
              <div className="relative shrink-0 size-1" data-name="Dot Separator">
                <div className="bg-tertiary rounded-full size-1" />
              </div>
              <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-xs text-nowrap whitespace-pre" data-name="Timestamp">
                {timestamp}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant - full activity feed item
  return (
    <div className={`flex gap-4 items-start p-4 ${className}`}>
      {/* Timeline Indicator */}
      <div className="flex flex-col items-center w-3 shrink-0">
        {/* Status Dot */}
        <div className={`${getPriorityColor(priority)} rounded-full w-3 h-3 shrink-0`} />
        
        {/* Timeline Line - extends below the dot, hidden for last item */}
        {!isLastItem && (
          <div className="bg-gray-400 dark:bg-gray-500 w-px h-16" />
        )}
      </div>
      
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
          <div className="flex flex-wrap items-center gap-2">
            {/* User Info */}
            <div className="flex items-center gap-2">
              {userIcon && (
                <ThemeIcon
                  src={userIcon}
                  alt={userName}
                  size="sm"
                  variant="default"
                />
              )}
              <h3 className="font-semibold text-base text-primary">
                {userName}
              </h3>
            </div>
            
            {/* Badges */}
            {badges.map((badge, index) => (
              <Chip
                key={index}
                label={badge.label}
                variant={badge.variant || 'neutral'}
                type="low-hue-border"
                size="sm"
                icon={badge.icon}
              />
            ))}
          </div>
          
          {/* Timestamp and Priority */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-tertiary">
              {timestamp}
            </span>
            <Chip
              label={priority}
              variant="success"
              type="filled"
              size="sm"
            />
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-tertiary mb-2">
          {description}
        </p>
        
        {/* Metadata */}
        {metadata.length > 0 && (
          <div className="flex gap-4 text-xs text-disabled">
            {metadata.map((item, index) => (
              <span key={index}>
                {item.label}: {item.value}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* More Actions Button */}
      {onMoreActions && (
        <button
          onClick={onMoreActions}
          className="flex items-center justify-center w-9 h-8 rounded-lg hover:bg-surface-secondary transition-colors"
        >
          <ThemeIcon
            src="/assets/eye-icon.svg"
            alt="View details"
            size="sm"
            variant="gray"
          />
        </button>
      )}
    </div>
  );
};

export default ActivityFeedItem;