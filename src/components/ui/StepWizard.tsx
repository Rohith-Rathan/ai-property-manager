import React from 'react';
import ThemeIcon from './ThemeIcon';
import ProgressBar from './ProgressBar';
import Button from '../forms/Button';

export interface Step {
  id: string;
  title: string;
  icon: string;
  iconAlt?: string;
}

export interface StepWizardProps {
  title: string;
  subtitle: string;
  steps: Step[];
  currentStep: number;
  onCancel?: () => void;
  className?: string;
}

const StepWizard: React.FC<StepWizardProps> = ({
  title,
  subtitle,
  steps,
  currentStep,
  onCancel,
  className = ''
}) => {
  const totalSteps = steps.length;

  const getStepState = (stepIndex: number) => {
    if (stepIndex < currentStep - 1) return 'completed';
    if (stepIndex === currentStep - 1) return 'current';
    return 'pending';
  };

  const getStepBackground = (state: 'completed' | 'current' | 'pending') => {
    switch (state) {
      case 'completed':
        return 'bg-gradient-emerald-glow';
      case 'current':
        return 'bg-gradient-brand-aurora';
      case 'pending':
        return 'bg-gray-100';
    }
  };

  return (
        <div className={`bg-overlays-black-inverse-95 border border-overlays-white-inverse-5 border-solid box-border content-stretch flex flex-col gap-2 items-start relative rounded-xxxl shadow-card-large size-full p-8 ${className}`}>
      {/* Header Section */}
      <div className="stepwizard-header">
        <div className="stepwizard-header-content">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex flex-col items-start not-italic relative">
            <p className="font-sans font-bold leading-h3 relative shrink-0 text-primary text-h3 w-full">
              {title}
            </p>
            <p className="font-sans font-normal leading-base relative shrink-0 text-tertiary text-base w-full">
              {subtitle}
            </p>
          </div>
        </div>
        
        {/* Cancel Button */}
        {onCancel && (
          <div className="stepwizard-header-button">
            <Button
              label="Cancel"
              onClick={onCancel}
              variant="outline"
              size="sm"
            />
          </div>
        )}
      </div>

      {/* Progress Section */}
      <ProgressBar
        variant="step"
        current={currentStep}
        total={totalSteps}
      />

      {/* Steps Section - Responsive Design */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        {steps.map((step, index) => {
          const state = getStepState(index);
          
          return (
            <div 
              key={step.id}
              className="basis-0 box-border content-stretch flex flex-col gap-2 sm:gap-4 grow items-center min-h-px min-w-px p-2 sm:p-4 relative shrink-0"
            >
              {/* Step Circle */}
              <div className={`box-border content-stretch flex items-center justify-center relative rounded-full shadow-card-small shrink-0 w-8 h-8 sm:w-10 sm:h-10 ${getStepBackground(state)}`}>
                <div className="relative shrink-0 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  <ThemeIcon 
                    src={step.icon} 
                    alt={step.iconAlt || step.title} 
                    size="sm" 
                    variant={state === 'pending' ? 'gray' : 'white'}
                  />
                </div>
              </div>
              
              {/* Step Label */}
              <div className="content-stretch flex flex-col gap-1 items-center relative shrink-0 w-full">
                <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-primary text-xs sm:text-small text-center w-full">
                  {step.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepWizard;
