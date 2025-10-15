import React from 'react';
import { ThemeIcon } from './ThemeIcon';

export interface MoreActionItem {
  id: string;
  label: string;
  icon: string;
  onClick: () => void;
  variant?: 'default' | 'gradient' | 'danger';
  gradient?: 'info-flow' | 'magenta-pop' | 'brand-aurora' | 'ai-violet-2';
  disabled?: boolean;
}

export interface MoreActionsProps {
  items: MoreActionItem[];
  isOpen: boolean;
  onClose: () => void;
  variant?: 'simple' | 'gradient';
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export const MoreActions: React.FC<MoreActionsProps> = ({
  items,
  isOpen,
  onClose,
  variant = 'simple',
  className = '',
  position = 'center',
  triggerRef
}) => {
  if (!isOpen) return null;

  const handleItemClick = (item: MoreActionItem) => {
    if (!item.disabled) {
      item.onClick();
      onClose();
    }
  };

  const getGradientClass = (gradient?: string) => {
    switch (gradient) {
      case 'info-flow':
        return 'bg-gradient-info-flow';
      case 'magenta-pop':
        return 'bg-gradient-magenta-pop';
      case 'brand-aurora':
        return 'bg-gradient-brand-aurora';
      case 'ai-violet-2':
        return 'bg-gradient-ai-violet-2';
      default:
        return 'bg-gradient-brand-aurora';
    }
  };

  const getTextColorClass = (item: MoreActionItem) => {
    if (item.variant === 'danger') {
      return 'text-error-500';
    }
    return 'text-primary';
  };

  const getDropdownPosition = () => {
    if (!triggerRef?.current) {
      return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
    }

    const trigger = triggerRef.current;
    const rect = trigger.getBoundingClientRect();
    const dropdownHeight = 200; // Approximate height
    const dropdownWidth = 200; // Approximate width
    
    let top = rect.bottom + 8; // Default: below the trigger
    let left = rect.left;
    let transform = '';

    // Adjust if dropdown would go off screen
    if (top + dropdownHeight > window.innerHeight) {
      top = rect.top - dropdownHeight - 8; // Show above instead
    }
    
    if (left + dropdownWidth > window.innerWidth) {
      left = window.innerWidth - dropdownWidth - 16; // Adjust to fit
    }
    
    if (left < 16) {
      left = 16; // Minimum margin from edge
    }

    return { top: `${top}px`, left: `${left}px`, transform };
  };

  const renderSimpleItem = (item: MoreActionItem) => (
    <div
      key={item.id}
      onClick={() => handleItemClick(item)}
      className={`bg-clip-padding border-0 border-transparent border-solid box-border flex gap-2 items-center p-4 relative w-full cursor-pointer hover:bg-overlays-white-inverse-5 transition-colors duration-200 ${
        item.disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      <div className="relative shrink-0 w-4 h-4">
        {item.variant === 'danger' ? (
          <img 
            src={item.icon} 
            alt={item.label}
            className="w-4 h-4 filter brightness-0 saturate-100 invert-[27%] sepia-[51%] saturate-[2878%] hue-rotate-[346deg] brightness-[104%] contrast-[97%]"
          />
        ) : (
          <ThemeIcon 
            src={item.icon} 
            alt={item.label} 
            size="sm" 
            color="primary" 
          />
        )}
      </div>
      <p className={`font-medium leading-3.5 not-italic relative shrink-0 text-sm text-nowrap tracking-[-0.15px] whitespace-pre ${getTextColorClass(item)}`}>
        {item.label}
      </p>
    </div>
  );

  const renderGradientItem = (item: MoreActionItem) => (
    <div
      key={item.id}
      onClick={() => handleItemClick(item)}
      className={`bg-clip-padding border-0 border-transparent border-solid box-border flex gap-2 items-center px-4 py-3 relative w-full cursor-pointer hover:bg-overlays-white-inverse-5 transition-colors duration-200 ${
        item.disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      <div className={`box-border flex items-center justify-center relative rounded-full shrink-0 w-7 h-7 shadow-card-small ${getGradientClass(item.gradient)}`}>
        <div className="relative shrink-0 w-3 h-3">
          <ThemeIcon 
            src={item.icon} 
            alt={item.label} 
            size="xs" 
            color="inverse" 
          />
        </div>
      </div>
      <p className="font-normal leading-4 not-italic relative shrink-0 text-primary text-sm text-nowrap whitespace-pre">
        {item.label}
      </p>
    </div>
  );

  const dropdownPosition = getDropdownPosition();

  return (
    <div className="fixed inset-0 z-[9998]" onClick={onClose}>
      <div 
        className={`absolute bg-paper-paper-elevation-1 border border-overlays-white-inverse-10 border-solid box-border flex flex-col items-start p-px relative rounded-xxl shadow-card-small w-fit min-w-48 ${className}`}
        style={{ 
          top: dropdownPosition.top, 
          left: dropdownPosition.left, 
          transform: dropdownPosition.transform 
        }}
      >
        {items.map((item) => 
          variant === 'gradient' ? renderGradientItem(item) : renderSimpleItem(item)
        )}
      </div>
    </div>
  );
};
