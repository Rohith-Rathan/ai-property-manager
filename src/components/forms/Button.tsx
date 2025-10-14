import React from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';
import ThemeIcon from '../ui/ThemeIcon';

// Asset constants
const addPropertyButtonIcon = getAssetPath('add-property-button-icon');
const editPropertyButtonIcon = getAssetPath('edit-property-button-icon');
const calendarIcon = getAssetPath('date-icon');
const dropdownArrowIcon = getAssetPath('dropdown-arrow-icon');
const googleLoginIcon = getAssetPath('google-login-icon');
const microsoftLoginIcon = getAssetPath('microsoft-login-icon');
const checkmarkIcon = getAssetPath('checkmark-icon');
const searchIcon = getAssetPath('search-icon');

interface ButtonProps {
  children?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'social';
  size?: 'sm' | 'md' | 'lg';
  gradient?: 'brand-aurora' | 'aqua-2' | 'info-flow' | 'magenta-pop' | 'ai-violet-2' | 'emerald-glow';
  icon?: 'add' | 'edit' | 'calendar' | 'dropdown' | 'google' | 'microsoft' | 'checkmark' | 'search' | 'none';
  iconPosition?: 'left' | 'right' | 'both';
  rightIcon?: 'dropdown' | 'arrow' | 'none';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  children,
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  gradient = 'brand-aurora',
  icon = 'none',
  iconPosition = 'left',
  rightIcon = 'none',
  disabled = false,
  loading = false,
  fullWidth = false,
  className = ''
}: ButtonProps) {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'sm':
        return {
          container: 'px-3 py-2',
          text: 'text-label-small',
          icon: 'w-3 h-3'
        };
      case 'lg':
        return {
          container: 'px-6 py-4',
          text: 'text-base',
          icon: 'w-5 h-5'
        };
      default:
        return {
          container: 'px-4 py-3',
          text: 'text-small',
          icon: 'w-4 h-4'
        };
    }
  };

  const getGradientClass = (gradient: string) => {
    switch (gradient) {
      case 'aqua-2': return 'bg-gradient-aqua-2';
      case 'info-flow': return 'bg-gradient-info-flow';
      case 'magenta-pop': return 'bg-gradient-magenta-pop';
      case 'ai-violet-2': return 'bg-gradient-ai-violet-2';
      case 'emerald-glow': return 'bg-gradient-emerald-glow';
      default: return 'bg-gradient-brand-aurora';
    }
  };

  const getVariantClasses = (variant: string, gradient: string) => {
    const baseClasses = 'box-border content-stretch cursor-pointer flex gap-2 items-center justify-center overflow-visible relative rounded-lg shrink-0 transition-all duration-200';
    
    switch (variant) {
      case 'primary':
        // Always use Brand Aurora for primary buttons
        return `${baseClasses} bg-gradient-brand-aurora text-white shadow-lg hover:shadow-xl`;
      case 'secondary':
        return `${baseClasses} bg-paper-paper-elevation-1 border border-overlays-white-inverse-10 text-primary hover:bg-paper-paper-elevation-2`;
      case 'outline':
        return `${baseClasses} border border-overlays-white-inverse-10 border-solid bg-transparent text-primary hover:bg-paper-paper-elevation-1`;
      case 'ghost':
        return `${baseClasses} bg-transparent text-primary hover:bg-paper-paper-elevation-1`;
      case 'social':
        return `${baseClasses} border border-overlays-white-inverse-10 border-solid bg-transparent text-primary hover:bg-paper-paper-elevation-1`;
      default:
        // Always use Brand Aurora for default buttons
        return `${baseClasses} bg-gradient-brand-aurora text-white`;
    }
  };

  const getIconSrc = (iconType: string) => {
    switch (iconType) {
      case 'add': return addPropertyButtonIcon;
      case 'edit': return editPropertyButtonIcon;
      case 'calendar': return calendarIcon;
      case 'dropdown': return dropdownArrowIcon;
      case 'google': return googleLoginIcon;
      case 'microsoft': return microsoftLoginIcon;
      case 'checkmark': return checkmarkIcon;
      case 'search': return searchIcon;
      default: return null;
    }
  };

  const sizeClasses = getSizeClasses(size);
  const variantClasses = getVariantClasses(variant, gradient);
  const leftIconSrc = getIconSrc(icon);
  const rightIconSrc = getIconSrc(rightIcon);

  const buttonClasses = `
    ${variantClasses}
    ${sizeClasses.container}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${loading ? 'cursor-wait' : ''}
    ${className}
  `.trim();

  const renderIcon = (iconSrc: string | null, position: string) => {
    if (!iconSrc) return null;
    
    // Determine icon variant based on button variant
    const iconVariant = variant === 'primary' ? 'white' : 'default';
    
    // Map button size to design system icon size
    const getIconSize = (buttonSize: string) => {
      switch (buttonSize) {
        case 'xs': return 'xs';
        case 'sm': return 'sm';
        case 'md': return 'md';
        case 'lg': return 'lg';
        case 'xl': return 'xl';
        default: return 'md';
      }
    };
    
    return (
      <ThemeIcon 
        src={iconSrc} 
        alt={`${position} Icon`} 
        size={getIconSize(size)}
        variant={iconVariant}
      />
    );
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
      data-name="Button"
    >
      {/* Left Icon */}
      {iconPosition === 'left' && renderIcon(leftIconSrc, 'Left')}
      {iconPosition === 'both' && renderIcon(leftIconSrc, 'Left')}

      {/* Loading Spinner */}
      {loading && (
        <div className={`relative shrink-0 ${sizeClasses.icon}`} data-name="Loading Spinner">
          <div className="animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        </div>
      )}

      {/* Button Text */}
      {(label || children) && (
        <p className={`font-sans font-medium leading-small not-italic relative shrink-0 ${sizeClasses.text} text-nowrap whitespace-pre`} data-name="Button Text">
          {label || children}
        </p>
      )}

      {/* Right Icon */}
      {iconPosition === 'right' && renderIcon(leftIconSrc, 'Right')}
      {iconPosition === 'both' && renderIcon(rightIconSrc, 'Right')}
      {rightIcon !== 'none' && iconPosition === 'left' && renderIcon(rightIconSrc, 'Right')}
    </button>
  );
}
