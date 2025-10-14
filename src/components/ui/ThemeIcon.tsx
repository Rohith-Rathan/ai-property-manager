import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ThemeIconProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  themeAware?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'accent' | 'success' | 'warning' | 'error';
}

const sizeClasses = {
  xs: 'w-3 h-3',  // 12px - matches --icon-size-xs
  sm: 'w-4 h-4',  // 16px - matches --icon-size-sm  
  md: 'w-5 h-5',  // 20px - matches --icon-size-md
  lg: 'w-6 h-6',  // 24px - matches --icon-size-lg
  xl: 'w-8 h-8'   // 32px - matches --icon-size-xl
};

const colorClasses = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  tertiary: 'text-text-tertiary',
  inverse: 'text-text-inverse',
  accent: 'text-accent-blue',
  success: 'text-status-success',
  warning: 'text-status-warning',
  error: 'text-status-error'
};

export default function ThemeIcon({ 
  src, 
  alt, 
  className = '', 
  size = 'md',
  themeAware = true,
  color
}: ThemeIconProps) {
  const { theme } = useTheme();
  
  const baseClasses = sizeClasses[size];
  const colorClass = color ? colorClasses[color] : '';
  const themeClasses = themeAware && !color
    ? theme === 'dark' 
      ? 'filter brightness-0 invert' // Makes icons white in dark mode
      : '' 
    : '';
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${baseClasses} ${colorClass} ${themeClasses} ${className}`}
    />
  );
}
