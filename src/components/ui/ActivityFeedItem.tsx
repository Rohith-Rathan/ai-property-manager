import React from 'react';
import { Card } from './Card';
import { Chip } from './Chip';
import { ThemeIcon } from './ThemeIcon';

export interface ActivityFeedItemProps {
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

  return (
    <Card className={`bg-white-5 border border-overlays-white-inverse-10 ${className}`}>
      <div className="flex gap-4 items-start p-4">
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
          <div className="flex items-center justify-between h-6 mb-1">
            <div className="flex items-center gap-2">
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
    </Card>
  );
};

export default ActivityFeedItem;