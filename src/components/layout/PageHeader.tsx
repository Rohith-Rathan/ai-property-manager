import React from 'react';
import Button from '../forms/Button';


interface ActionButton {
  id: string;
  label: string;
  icon?: 'add' | 'edit' | 'calendar' | 'dropdown' | 'none';
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
}

export default function PageHeader({ 
  title,
  description,
  actions = [],
  showActions = true
}: PageHeaderProps) {

  return (
    <div className="flex flex-wrap gap-4 items-start justify-between w-full" data-name="Page Header">
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
              onClick={action.onClick}
              size="sm"
              className="pageheader-button-mobile"
            />
          ))}
        </div>
      )}
    </div>
  );
}
