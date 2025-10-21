import React from 'react';
import Button from '../forms/Button';
import ThemeIcon from '../ui/ThemeIcon';
import { getAssetPath } from '../../utils/completeAssetMapping';

interface ActionButton {
  id: string;
  label: string;
  icon?: 'add' | 'edit' | 'calendar' | 'dropdown' | 'google' | 'microsoft' | 'checkmark' | 'search' | 'none';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  gradient?: 'brand-aurora' | 'aqua-2' | 'info-flow' | 'magenta-pop' | 'ai-violet-2' | 'emerald-glow';
  rightIcon?: 'dropdown' | 'arrow' | 'none';
  onClick?: () => void;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ActionButton[];
  showActions?: boolean;
  onActionClick?: (actionId: string) => void;
  // Back button functionality
  showBackButton?: boolean;
  onBack?: () => void;
  backButtonLabel?: string;
}

export default function PageHeader({ 
  title,
  description,
  actions = [],
  showActions = true,
  onActionClick,
  showBackButton = false,
  onBack,
  backButtonLabel = "Back"
}: PageHeaderProps) {

  return (
    <div className="flex flex-wrap gap-4 items-start justify-between w-full" data-name="Page Header">
      {/* Left Section - Back Button + Title */}
      <div className="flex items-center gap-3 flex-1 min-w-0" data-name="Left Container">
        {/* Back Button */}
        {showBackButton && (
          <button
            onClick={onBack}
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors text-primary"
            data-name="Back Button"
            title={backButtonLabel}
          >
            <ThemeIcon
              src={getAssetPath('back-arrow-icon')}
              alt="Back"
              size="md"
              variant="default"
            />
          </button>
        )}
        
        {/* Title Section */}
        <div className="flex-1 min-w-0" data-name="Title Container">
          <p className="font-sans font-bold leading-h3 relative shrink-0 text-primary text-h3" data-name="Page Title">
            {title}
          </p>
          {description && (
            <p className="font-sans font-normal leading-base relative shrink-0 text-secondary text-base" data-name="Page Description">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Actions Section */}
      {showActions && actions.length > 0 && (
        <div className="pageheader-buttons-mobile" data-name="Actions Container">
          {actions.map((action) => (
            <Button
              key={action.id}
              label={action.label}
              variant={action.variant || 'primary'}
              gradient={action.gradient || 'brand-aurora'}
              icon={action.icon || 'none'}
              rightIcon={action.rightIcon || 'none'}
              onClick={() => {
                if (action.onClick) {
                  action.onClick();
                }
                if (onActionClick) {
                  onActionClick(action.id);
                }
              }}
              size="sm"
              className="pageheader-button-mobile"
            />
          ))}
        </div>
      )}
    </div>
  );
}
