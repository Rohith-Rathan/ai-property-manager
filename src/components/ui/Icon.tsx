import React from 'react';

interface IconProps {
  src: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  xs: 'size-3',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-8'
};

export const Icon: React.FC<IconProps> = ({ 
  src, 
  alt, 
  size = 'sm', 
  className = '' 
}) => {
  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img 
        alt={alt} 
        className="w-full h-full" 
        src={src} 
      />
    </div>
  );
};

export default Icon;
