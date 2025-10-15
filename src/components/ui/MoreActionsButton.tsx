import React, { useRef } from 'react';
import { MoreActions, MoreActionItem } from './MoreActions';
import { useMoreActions } from '../../hooks/useMoreActions';
import { ThemeIcon } from './ThemeIcon';

export interface MoreActionsButtonProps {
  items: MoreActionItem[];
  triggerIcon?: string;
  triggerLabel?: string;
  variant?: 'simple' | 'gradient';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  className?: string;
  buttonClassName?: string;
}

export const MoreActionsButton: React.FC<MoreActionsButtonProps> = ({
  items,
  triggerIcon = '/assets/more-options-icon.svg',
  triggerLabel = 'More actions',
  variant = 'simple',
  position = 'bottom-right',
  className = '',
  buttonClassName = ''
}) => {
  const { isOpen, openActions, closeActions } = useMoreActions();
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={openActions}
        className={`p-2 rounded-lg hover:bg-overlays-white-inverse-5 transition-colors duration-200 flex items-center justify-center ${buttonClassName}`}
        aria-label={triggerLabel}
        title={triggerLabel}
      >
        <ThemeIcon 
          src={triggerIcon} 
          alt={triggerLabel} 
          size="sm" 
          color="tertiary" 
        />
      </button>

      <MoreActions
        items={items}
        isOpen={isOpen}
        onClose={closeActions}
        variant={variant}
        position={position}
        className={className}
        triggerRef={buttonRef}
      />
    </div>
  );
};
