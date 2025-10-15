import React from 'react';

interface AlertItemProps {
  /** Priority level of the alert */
  priority: 'high' | 'medium' | 'low';
  /** Category of the alert */
  category: string;
  /** Main alert message */
  message: string;
  /** Relative timestamp (e.g., "30 min", "2 hours ago") */
  timestamp: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const AlertItem: React.FC<AlertItemProps> = ({
  priority,
  category,
  message,
  timestamp,
  onClick,
  className = ''
}) => {
  // Get priority-specific styling
  const getPriorityStyles = () => {
    switch (priority) {
      case 'high':
        return {
          borderColor: 'border-error-500',
          badgeBg: 'bg-error-500',
          badgeText: 'text-static-white',
          badgeLabel: 'High'
        };
      case 'medium':
        return {
          borderColor: 'border-warning-500',
          badgeBg: 'bg-warning-500',
          badgeText: 'text-static-white',
          badgeLabel: 'Medium'
        };
      case 'low':
        return {
          borderColor: 'border-info-500',
          badgeBg: 'bg-info-500',
          badgeText: 'text-static-white',
          badgeLabel: 'Low'
        };
      default:
        return {
          borderColor: 'border-error-500',
          badgeBg: 'bg-error-500',
          badgeText: 'text-static-white',
          badgeLabel: 'High'
        };
    }
  };

  const priorityStyles = getPriorityStyles();

  return (
    <div 
      className={`bg-gray-50 ${priorityStyles.borderColor} border-l-2 border-solid box-border content-center flex flex-wrap gap-2 items-center pl-5 pr-4 py-3 relative rounded-lg size-full cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${className}`}
      onClick={onClick}
      data-name="Alert Item"
    >
      {/* Content Section */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Content Container">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex flex-col gap-2 items-start relative w-full">
          {/* Header Section */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
            {/* Left Side - Badges */}
            <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Badges">
              {/* Priority Badge */}
              <div className={`${priorityStyles.badgeBg} box-border content-stretch flex gap-1 items-center px-2 py-0.5 relative rounded-full shrink-0`} data-name="Priority Badge">
                <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-xs text-nowrap ${priorityStyles.badgeText} whitespace-pre" data-name="Priority Text">
                  {priorityStyles.badgeLabel}
                </p>
              </div>
              
              {/* Category Badge */}
              <div className="bg-gray-50 border border-overlays-white-inverse-10 border-solid box-border content-stretch flex gap-1 items-center px-2 py-0.5 relative rounded-full shrink-0" data-name="Category Badge">
                <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-xs text-nowrap whitespace-pre" data-name="Category Text">
                  {category}
                </p>
              </div>
            </div>
            
            {/* Right Side - Timestamp */}
            <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-xs text-nowrap whitespace-pre" data-name="Timestamp">
              {timestamp}
            </p>
          </div>
          
          {/* Alert Message */}
          <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-primary text-sm w-full" data-name="Alert Message">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlertItem;
