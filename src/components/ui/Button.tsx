import React from 'react';
import ThemeIcon from './ThemeIcon';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'link' | 'social';
  provider?: 'google' | 'microsoft'; // For social variant
  icon?: string; // For custom icons
  iconPosition?: 'left' | 'right';
  className?: string; // For additional CSS classes
}

export default function Button({
  children,
  onClick,
  disabled = false,
  loading = false,
  size = 'md',
  fullWidth = false,
  variant = 'primary',
  provider,
  icon,
  iconPosition = 'left',
  className = ''
}: ButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-2 text-12',
    md: 'px-4 py-3 text-14',
    lg: 'px-6 py-4 text-16'
  };

  // Variant classes
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-brand-aurora text-white hover:opacity-90';
      case 'secondary':
        return 'border border-overlays-white-inverse-10 bg-overlays-white-10 text-primary hover:bg-surface-secondary';
      case 'link':
        return 'bg-transparent text-primary-1 hover:opacity-80';
      case 'social':
        return 'border border-overlays-black-10 bg-surface-primary text-text-primary hover:bg-surface-secondary';
      default:
        return 'bg-gradient-brand-aurora text-white hover:opacity-90';
    }
  };

  // Get social icon path
  const getSocialIconPath = () => {
    if (provider === 'google') return '/assets/google-login-icon.svg';
    if (provider === 'microsoft') return '/assets/microsoft-login-icon.svg';
    return icon;
  };

  // Get icon size based on button size
  const getIconSize = () => {
    switch (size) {
      case 'sm': return 'xs';
      case 'lg': return 'md';
      default: return 'sm';
    }
  };

  const baseClasses = `box-border content-stretch cursor-pointer flex gap-2 items-center justify-center overflow-visible relative rounded-lg shrink-0 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${getVariantClasses()} ${fullWidth ? 'w-full' : ''} ${className}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      data-name="Button"
    >
      {/* Loading Spinner */}
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
      )}

      {/* Left Icon */}
      {!loading && iconPosition === 'left' && (
        <>
          {variant === 'social' && provider && (
            <div className="relative shrink-0 size-4" data-name="SocialIcon">
              <ThemeIcon 
                src={getSocialIconPath()!} 
                alt={`${provider} login`} 
                size={getIconSize()} 
                color="primary" 
              />
            </div>
          )}
          {icon && variant !== 'social' && (
            <div className="relative shrink-0 size-4" data-name="Icon">
              <ThemeIcon 
                src={icon} 
                alt="Button icon" 
                size={getIconSize()} 
                color={variant === 'primary' ? 'inverse' : 'primary'} 
              />
            </div>
          )}
        </>
      )}

      {/* Button Text */}
      <span className={`font-normal leading-4 not-italic relative shrink-0 text-nowrap whitespace-pre ${
        variant === 'link' ? 'font-medium' : 'font-normal'
      }`}>
        {children}
      </span>

      {/* Right Icon */}
      {!loading && iconPosition === 'right' && (
        <>
          {variant === 'social' && provider && (
            <div className="relative shrink-0 size-4" data-name="SocialIcon">
              <ThemeIcon 
                src={getSocialIconPath()!} 
                alt={`${provider} login`} 
                size={getIconSize()} 
                color="primary" 
              />
            </div>
          )}
          {icon && variant !== 'social' && (
            <div className="relative shrink-0 size-4" data-name="Icon">
              <ThemeIcon 
                src={icon} 
                alt="Button icon" 
                size={getIconSize()} 
                color={variant === 'primary' ? 'inverse' : 'primary'} 
              />
            </div>
          )}
        </>
      )}
    </button>
  );
}