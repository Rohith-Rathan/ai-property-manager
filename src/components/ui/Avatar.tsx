import React from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fallback?: string;
  initials?: string;
  gradient?: string;
}

export default function Avatar({ 
  src, 
  alt = 'Avatar', 
  size = 'md', 
  className = '', 
  fallback,
  initials,
  gradient
}: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
      />
    );
  }

  const gradientClasses = gradient ? `bg-gradient-to-b from-${gradient}-color1 to-${gradient}-color2` : 'bg-gray-200';

  return (
    <div className={`${sizeClasses[size]} rounded-full ${gradientClasses} flex items-center justify-center ${className}`}>
      {initials ? (
        <span className={`${textSizeClasses[size]} font-medium text-white`}>
          {initials}
        </span>
      ) : fallback ? (
        <span className={`${textSizeClasses[size]} font-medium text-gray-600`}>
          {fallback}
        </span>
      ) : (
        <img
          src={getAssetPath('user-icon')}
          alt={alt}
          className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'} text-gray-400`}
        />
      )}
    </div>
  );
}
