import React from 'react';
import ThemeIcon from './ThemeIcon';
import ProgressBar from './ProgressBar';

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
    <div className={`bg-white-95 border border-overlays-white-inverse-5 border-solid box-border content-stretch flex flex-col gap-2 items-start p-8 relative rounded-xxxl size-full ${className}`}>
      {/* Header Section */}
      <div className="content-center flex flex-wrap gap-4 items-center justify-between relative shrink-0 w-full">
        <div className="relative shrink-0">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex flex-col items-start not-italic relative">
            <p className="font-sans font-bold leading-h3 relative shrink-0 text-primary text-h3 w-full max-w-md">
              {title}
            </p>
            <p className="font-sans font-normal leading-base relative shrink-0 text-tertiary text-base text-nowrap whitespace-pre">
              {subtitle}
            </p>
          </div>
        </div>
        
        {/* Cancel Button */}
        {onCancel && (
          <button
            onClick={onCancel}
            className="border border-overlays-white-inverse-10 border-solid relative rounded-md shrink-0 bg-transparent hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative">
              <div className="relative shrink-0 w-4 h-4">
                <ThemeIcon 
                  src="/assets/ac9732330b75b9384b8055726c64f106eeb45b64.svg" 
                  alt="Cancel" 
                  size="sm" 
                  color="tertiary" 
                />
              </div>
              <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-primary text-small text-center text-nowrap whitespace-pre">
                Cancel
              </p>
            </div>
          </button>
        )}
      </div>

      {/* Progress Section */}
      <ProgressBar
        variant="step"
        current={currentStep}
        total={totalSteps}
      />

      {/* Steps Section */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        {steps.map((step, index) => {
          const state = getStepState(index);
          
          return (
            <div 
              key={step.id}
              className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-center min-h-px min-w-px p-4 relative shrink-0"
            >
              {/* Step Circle */}
              <div className={`box-border content-stretch flex items-center justify-center relative rounded-full shadow-card-small shrink-0 w-10 h-10 ${getStepBackground(state)}`}>
                <div className="relative shrink-0 w-4 h-4">
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
                <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-primary text-small text-center w-full">
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
