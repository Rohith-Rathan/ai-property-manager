import React from 'react';

interface ThemeIconProps {
  src: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary' | 'white' | 'gray';
  className?: string;
  // Legacy props for backward compatibility
  color?: 'primary' | 'secondary' | 'tertiary' | 'inverse';
  themeAware?: boolean;
}

const sizeClasses = {
  xs: 'size-3',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-8'
};

const variantClasses = {
  default: 'icon-theme-aware',
  primary: 'icon-theme-primary',
  secondary: 'icon-theme-secondary',
  white: 'icon-white',
  gray: 'icon-gray',
  'gray-700': 'icon-gray-700'
};

export const ThemeIcon: React.FC<ThemeIconProps> = ({ 
  src, 
  alt, 
  size = 'sm', 
  variant = 'default',
  className = '',
  color,
  themeAware = true
}) => {
  // Handle legacy color prop
  let finalVariant = variant;
  if (color) {
    switch (color) {
      case 'primary':
        finalVariant = 'primary';
        break;
      case 'secondary':
        finalVariant = 'secondary';
        break;
      case 'tertiary':
        finalVariant = 'default';
        break;
      case 'inverse':
        finalVariant = 'white';
        break;
      default:
        finalVariant = 'default';
    }
  }

  // Handle themeAware prop
  const iconVariant = themeAware ? finalVariant : 'default';

  const classes = [
    sizeClasses[size],
    variantClasses[iconVariant],
    className
  ].filter(Boolean).join(' ');

  return (
    <img 
      alt={alt} 
      className={classes}
      src={src}
      style={{ display: 'block', maxWidth: 'none' }}
    />
  );
};

export default ThemeIcon;