import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'md sm:lg';
  className?: string;
  style?: React.CSSProperties;
}

const variantClasses = {
  default: 'bg-overlays-black-inverse-95 border border-overlays-white-inverse-5',
  elevated: 'bg-overlays-black-inverse-95 shadow-card-large',
  outlined: 'bg-overlays-black-inverse-95 border border-overlays-white-inverse-5'
};

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-4 sm:p-6',
  lg: 'p-6 sm:p-8',
  'md sm:lg': 'p-4 sm:p-6 lg:p-8'
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  style
}) => {
  return (
    <div 
      className={`
        relative w-full rounded-xxxl
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
