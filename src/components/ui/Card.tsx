import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'md sm:lg';
  className?: string;
  style?: React.CSSProperties;
}

const variantClasses = {
  default: 'bg-surface-primary border border-border-primary',
  elevated: 'bg-surface-primary shadow-card-large',
  outlined: 'bg-surface-primary border border-border-secondary'
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
        relative rounded-xxl w-full
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
