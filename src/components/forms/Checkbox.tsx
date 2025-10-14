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
  variant?: 'default' | 'filled' | 'outlined';
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
