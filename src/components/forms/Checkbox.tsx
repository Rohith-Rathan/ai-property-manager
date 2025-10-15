import React from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';

// Asset constants
const checkmarkIcon = getAssetPath('checkmark-icon');

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'outlined' | 'button';
  color?: 'primary' | 'success' | 'warning' | 'error';
  indeterminate?: boolean;
  className?: string;
}

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  size = 'md',
  variant = 'default',
  color = 'primary',
  indeterminate = false,
  className = ''
}: CheckboxProps) {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'sm':
        return {
          checkbox: 'w-3 h-3',
          icon: 'w-2 h-2',
          text: 'text-label-small'
        };
      case 'lg':
        return {
          checkbox: 'w-6 h-6',
          icon: 'w-4 h-4',
          text: 'text-base'
        };
      default:
        return {
          checkbox: 'w-4 h-4',
          icon: 'w-3 h-3',
          text: 'text-small'
        };
    }
  };

  const getVariantClasses = (variant: string, checked: boolean, color: string) => {
    if (variant === 'button') {
      const baseClasses = 'border border-solid box-border flex gap-2 items-center justify-center px-4 py-2 relative rounded-lg w-full cursor-pointer transition-colors duration-200';
      
      if (disabled) {
        return `${baseClasses} border-overlays-white-inverse-10 bg-gray-100 text-tertiary cursor-not-allowed opacity-50`;
      }
      
      if (checked) {
        return `${baseClasses} border-secondary-500 bg-overlays-primary-10 text-primary hover:bg-overlays-primary-20`;
      }
      
      return `${baseClasses} border-overlays-white-inverse-10 bg-default text-tertiary hover:bg-overlays-white-inverse-5`;
    }

    const baseClasses = 'border-solid relative rounded-md shrink-0 cursor-pointer transition-all duration-200';
    
    if (checked || indeterminate) {
      switch (color) {
        case 'success':
          return `${baseClasses} bg-success-500 border-success-500`;
        case 'warning':
          return `${baseClasses} bg-warning-500 border-warning-500`;
        case 'error':
          return `${baseClasses} bg-error-500 border-error-500`;
        default:
          return `${baseClasses} bg-primary-500 border-primary-500`;
      }
    }

    switch (variant) {
      case 'filled':
        return `${baseClasses} bg-paper-paper-elevation-1 border-overlays-white-inverse-10`;
      case 'outlined':
        return `${baseClasses} bg-transparent border-2 border-overlays-white-inverse-10`;
      default:
        return `${baseClasses} bg-transparent border border-overlays-white-inverse-10`;
    }
  };

  const sizeClasses = getSizeClasses(size);
  const variantClasses = getVariantClasses(variant, checked || indeterminate, color);

  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  if (variant === 'button') {
    return (
      <div 
        className={`${variantClasses} ${className}`}
        onClick={handleClick}
        role="checkbox"
        aria-checked={checked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault();
            handleClick();
          }
        }}
        data-name="Checkbox Button"
      >
        <p className="font-medium leading-6 not-italic relative shrink-0 text-center text-nowrap whitespace-pre">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center relative w-auto ${className}`} data-name="Checkbox Container">
      <div
        className={`${variantClasses} ${sizeClasses.checkbox} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleClick}
        data-name="Checkbox"
      >
        {(checked || indeterminate) && (
          <div className="absolute inset-0 flex items-center justify-center" data-name="Check Icon">
            <div className={`relative shrink-0 ${sizeClasses.icon}`} data-name="Icon">
              <img alt="" className="block max-w-none size-full" src={checkmarkIcon} />
            </div>
          </div>
        )}
      </div>

      {label && (
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label Container">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center relative w-full" data-name="Label">
            <p className={`font-sans font-medium leading-normal not-italic relative shrink-0 text-primary ${sizeClasses.text} text-nowrap tracking-normal whitespace-pre ${disabled ? 'opacity-50' : ''}`} data-name="Label Text">
              {label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
