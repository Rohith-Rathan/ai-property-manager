import React from 'react';

export interface ProgressBarProps {
  variant?: 'step' | 'occupancy';
  current?: number;
  total?: number;
  percentage?: number;
  label?: string;
  value?: string;
  subtitle?: string;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  variant = 'step',
  current,
  total,
  percentage,
  label,
  value,
  subtitle,
  className = ''
}) => {
  // Calculate progress based on variant
  const getProgressData = () => {
    if (variant === 'step' && current && total) {
      const progressPercentage = ((current - 1) / total) * 100;
      return {
        percentage: progressPercentage,
        label: `Step ${current} of ${total}`,
        value: `${Math.round(progressPercentage)}% Complete`
      };
    } else if (variant === 'occupancy' && percentage !== undefined) {
      return {
        percentage,
        label: label || 'Occupancy',
        value: value || `${Math.round(percentage)}%`
      };
    }
    return {
      percentage: 0,
      label: 'Progress',
      value: '0%'
    };
  };

  const { percentage: progressPercentage, label: progressLabel, value: progressValue } = getProgressData();

  // Calculate progress bar width as percentage
  const progressBarWidth = `${Math.max(0, Math.min(progressPercentage, 100))}%`;

  return (
    <div className={`flex flex-col gap-2 items-start relative size-full ${className}`}>
      {/* Header Section */}
      <div className={`flex items-center justify-between not-italic relative shrink-0 text-primary text-nowrap w-full whitespace-pre ${
        variant === 'step' ? 'text-small' : 'text-label-small'
      }`}>
        <p className={`font-sans font-normal relative shrink-0 ${
          variant === 'step' ? 'leading-small' : 'leading-normal'
        }`}>
          {progressLabel}
        </p>
        <p className={`font-sans relative shrink-0 ${
          variant === 'step' ? 'font-medium leading-small' : 'font-normal leading-normal'
        }`}>
          {progressValue}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-gradient-brand-aurora-20 box-border flex flex-col h-2 items-start overflow-clip py-0 relative rounded-full shrink-0 w-full">
        <div 
          className="absolute bg-gradient-brand-aurora h-2 left-0 top-0 transition-all duration-300 ease-in-out rounded-full"
          style={{ width: progressBarWidth }}
        />
      </div>

      {/* Subtitle Section (for occupancy variant) */}
      {variant === 'occupancy' && subtitle && (
        <div className="flex font-sans font-normal items-center justify-between not-italic relative shrink-0 text-primary text-label-small text-nowrap w-full whitespace-pre">
          <p className="leading-normal relative shrink-0">
            {subtitle}
          </p>
          <p className="leading-normal opacity-0 relative shrink-0 tracking-normal">
            {progressValue}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
