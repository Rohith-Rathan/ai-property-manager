import React from 'react';

export interface ChipProps {
  label: string;
  variant?: 'error' | 'success' | 'warning' | 'info' | 'primary' | 'secondary' | 'tertiary' | 'gray' | 'neutral';
  type?: 'filled' | 'low-hue' | 'low-hue-border';
  size?: 'sm' | 'md';
  icon?: string;
  className?: string;
  onClick?: () => void;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'primary',
  type = 'filled',
  size = 'sm',
  icon,
  className = '',
  onClick
}) => {
  const getVariantClasses = (variant: string, type: string) => {
    const getTypeClasses = (variant: string, type: string) => {
      switch (type) {
        case 'filled':
          switch (variant) {
            case 'error': return { container: 'bg-error-500', text: 'text-white' };
            case 'success': return { container: 'bg-success-500', text: 'text-white' };
            case 'warning': return { container: 'bg-warning-500', text: 'text-white' };
            case 'info': return { container: 'bg-info-500', text: 'text-white' };
            case 'primary': return { container: 'bg-primary-500', text: 'text-white' };
            case 'secondary': return { container: 'bg-secondary-500', text: 'text-white' };
            case 'tertiary': return { container: 'bg-gray-500', text: 'text-white' };
            case 'gray': return { container: 'bg-gray-600', text: 'text-white' };
            case 'neutral': return { container: 'bg-overlays-gray-20', text: 'text-primary' };
            default: return { container: 'bg-primary-500', text: 'text-white' };
          }
        case 'low-hue':
          switch (variant) {
            case 'error': return { container: 'bg-overlays-error-10', text: 'text-error-900' };
            case 'success': return { container: 'bg-overlays-success-10', text: 'text-success-900' };
            case 'warning': return { container: 'bg-overlays-warning-10', text: 'text-warning-900' };
            case 'info': return { container: 'bg-overlays-info-10', text: 'text-info-900' };
            case 'primary': return { container: 'bg-overlays-primary-10', text: 'text-primary-900' };
            case 'secondary': return { container: 'bg-secondary-200', text: 'text-primary' };
            case 'tertiary': return { container: 'bg-overlays-gray-10', text: 'text-gray-900' };
            case 'gray': return { container: 'bg-gray-100', text: 'text-gray-700' };
            case 'neutral': return { container: 'bg-overlays-gray-10', text: 'text-primary' };
            default: return { container: 'bg-overlays-primary-10', text: 'text-primary-900' };
          }
        case 'low-hue-border':
          switch (variant) {
            case 'error': return { container: 'bg-overlays-error-10 border border-overlays-error-30', text: 'text-error-900' };
            case 'success': return { container: 'bg-overlays-success-10 border border-overlays-success-30', text: 'text-success-900' };
            case 'warning': return { container: 'bg-overlays-warning-10 border border-overlays-warning-30', text: 'text-warning-900' };
            case 'info': return { container: 'bg-overlays-info-10 border border-overlays-info-30', text: 'text-info-900' };
            case 'primary': return { container: 'bg-overlays-primary-10 border border-overlays-primary-30', text: 'text-primary-900' };
            case 'secondary': return { container: 'bg-secondary-200 border border-secondary-500', text: 'text-primary' };
            case 'tertiary': return { container: 'bg-overlays-gray-10 border border-overlays-gray-30', text: 'text-gray-900' };
            case 'gray': return { container: 'bg-gray-100 border border-gray-300', text: 'text-gray-700' };
            case 'neutral': return { container: 'bg-overlays-gray-10 border border-overlays-gray-30', text: 'text-primary' };
            default: return { container: 'bg-overlays-primary-10 border border-overlays-primary-30', text: 'text-primary-900' };
          }
        default:
          return { container: 'bg-primary-500', text: 'text-white' };
      }
    };
    
    return getTypeClasses(variant, type);
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'sm':
        return {
          container: 'px-2 py-1',
          text: 'text-xs'
        };
      case 'md':
        return {
          container: 'px-3 py-1.5',
          text: 'text-sm'
        };
      default:
        return {
          container: 'px-2 py-1',
          text: 'text-xs'
        };
    }
  };

  const variantClasses = getVariantClasses(variant, type);
  const sizeClasses = getSizeClasses(size);

  const baseClasses = 'box-border content-stretch flex gap-1 items-center justify-center overflow-clip relative rounded-full shrink-0 font-normal leading-normal not-italic text-nowrap whitespace-pre';
  const interactiveClasses = onClick ? 'cursor-pointer hover:opacity-80 transition-opacity duration-200' : '';

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      className={`${baseClasses} ${variantClasses.container} ${sizeClasses.container} ${interactiveClasses} ${className}`}
      onClick={onClick}
    >
      {icon && (
        <div className="relative shrink-0 w-3 h-3">
          <img 
            alt="Chip icon" 
            className={`block max-w-none w-full h-full ${
              variantClasses.text.includes('white') 
                ? 'icon-white' 
                : variantClasses.text.includes('error') 
                ? 'icon-red'
                : variantClasses.text.includes('success') 
                ? 'icon-gray'
                : variantClasses.text.includes('warning') 
                ? 'icon-gray'
                : variantClasses.text.includes('info') 
                ? 'icon-gray'
                : variantClasses.text.includes('primary') && !variantClasses.text.includes('900')
                ? 'icon-theme-primary'
                : variantClasses.text.includes('primary') 
                ? 'icon-gray'
                : 'icon-theme-primary'
            }`}
            src={icon} 
          />
        </div>
      )}
      <p className={`relative shrink-0 ${variantClasses.text} ${sizeClasses.text}`}>
        {label}
      </p>
    </Component>
  );
};

export default Chip;
