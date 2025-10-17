import React, { useRef } from 'react';
import { useMoreActions } from '../../hooks/useMoreActions';
import Button from '../forms/Button';
import QuickActions from '../../pages/QuickActions';

export interface QuickActionsButtonProps {
  triggerIcon?: string;
  triggerLabel?: string;
  className?: string;
  buttonClassName?: string;
}

export const QuickActionsButton: React.FC<QuickActionsButtonProps> = ({
  triggerIcon = '/assets/quick-actions-icon.svg',
  triggerLabel = 'Quick Actions',
  className = '',
  buttonClassName = ''
}) => {
  const { isOpen, openActions, closeActions } = useMoreActions();
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`relative inline-block ${className}`}>
      <div ref={buttonRef}>
        <Button
          label={triggerLabel}
          variant="primary"
          size="sm"
          icon="add"
          rightIcon="dropdown"
          onClick={() => {
            console.log('QuickActionsButton clicked, opening actions...');
            openActions();
          }}
          className={buttonClassName}
        />
      </div>

      <QuickActions
        isOpen={isOpen}
        onClose={closeActions}
        triggerRef={buttonRef}
      />
    </div>
  );
};
