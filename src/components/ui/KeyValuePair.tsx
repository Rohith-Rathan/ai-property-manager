import React from 'react';
import { ThemeIcon } from './ThemeIcon';

export interface KeyValuePairProps {
  label: string;
  value: string;
  icon?: string;
  layout?: 'horizontal' | 'vertical';
  labelColor?: 'primary' | 'tertiary';
  valueColor?: 'primary' | 'tertiary';
  className?: string;
}

export const KeyValuePair: React.FC<KeyValuePairProps> = ({
  label,
  value,
  icon,
  layout = 'horizontal',
  labelColor = 'tertiary',
  valueColor = 'primary',
  className = ''
}) => {
  const getLabelColorClass = () => {
    return labelColor === 'primary' ? 'text-primary' : 'text-tertiary';
  };

  const getValueColorClass = () => {
    return valueColor === 'primary' ? 'text-primary' : 'text-tertiary';
  };

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col gap-1 items-start relative w-full ${className}`}>
        <div className="flex gap-2 h-4 items-center relative shrink-0">
          {icon && (
            <div className="relative shrink-0 w-4 h-4">
              <ThemeIcon 
                src={icon} 
                alt={label} 
                size="xs" 
                variant="default" 
              />
            </div>
          )}
          <p className={`font-normal leading-4 not-italic relative shrink-0 text-small text-nowrap whitespace-pre ${getLabelColorClass()}`}>
            {label}
          </p>
        </div>
        <p className={`font-medium leading-6 not-italic relative shrink-0 text-small text-nowrap whitespace-pre ${getValueColorClass()}`}>
          {value}
        </p>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-between relative w-full ${className}`}>
      <div className="flex gap-2 h-4 items-center relative shrink-0">
        {icon && (
          <div className="relative shrink-0 w-4 h-4">
            <ThemeIcon 
              src={icon} 
              alt={label} 
              size="xs" 
              variant="default" 
            />
          </div>
        )}
        <p className={`font-normal leading-4 not-italic relative shrink-0 text-small text-nowrap whitespace-pre ${getLabelColorClass()}`}>
          {label}
        </p>
      </div>
      <p className={`font-medium leading-6 not-italic relative shrink-0 text-small text-nowrap whitespace-pre ${getValueColorClass()}`}>
        {value}
      </p>
    </div>
  );
};
