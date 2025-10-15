import React from 'react';
import { ThemeIcon } from './ThemeIcon';
import { getAssetPath } from '../../utils/completeAssetMapping';

interface ActivityFeedItemProps {
  /** Main activity description */
  title: string;
  /** Activity category (e.g., "communication", "maintenance", "financial") */
  category: string;
  /** Relative timestamp (e.g., "2 hours ago", "5 minutes ago") */
  timestamp: string;
  /** Icon for the activity type */
  icon?: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const ActivityFeedItem: React.FC<ActivityFeedItemProps> = ({
  title,
  category,
  timestamp,
  icon,
  onClick,
  className = ''
}) => {
  // Default activity icon if none provided
  const defaultIcon = icon || getAssetPath('ai-efficiency-icon');

  return (
    <div 
      className={`bg-gray-50 box-border content-center flex flex-wrap gap-2 items-center px-4 py-3 relative rounded-lg size-full ${className}`}
      onClick={onClick}
      data-name="Activity Feed Item"
    >
      {/* Icon Section */}
      <div className="bg-overlays-primary-10 relative rounded-full shrink-0 size-8" data-name="Icon Container">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex items-center justify-center relative size-8">
          <div className="relative shrink-0 size-4" data-name="Icon">
            <ThemeIcon 
              src={defaultIcon} 
              alt="Activity icon" 
              size="sm" 
              variant="primary"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Content Container">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex flex-col gap-1 items-start relative w-full">
          {/* Primary Text */}
          <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-primary text-small w-full" data-name="Activity Title">
            {title}
          </p>
          
          {/* Metadata Section */}
          <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full" data-name="Metadata">
            <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-label-small text-nowrap whitespace-pre" data-name="Category">
              {category}
            </p>
            <div className="relative shrink-0 size-1" data-name="Separator">
              <div className="bg-tertiary relative rounded-full size-1" />
            </div>
            <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-label-small text-nowrap whitespace-pre" data-name="Timestamp">
              {timestamp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeedItem;
