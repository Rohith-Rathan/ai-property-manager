import React from 'react';
import { ThemeIcon } from './ThemeIcon';

export interface PopupField {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'number' | 'select' | 'readonly';
  icon?: string;
  disabled?: boolean;
  required?: boolean;
}

export interface PopupFieldGroup {
  id: string;
  fields: PopupField[];
  layout?: 'single' | 'double';
}

export interface PopupButton {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
}

export interface PopupProps {
  title: string;
  subtitle?: string;
  isOpen: boolean;
  onClose: () => void;
  fieldGroups?: PopupFieldGroup[];
  children?: React.ReactNode;
  primaryButton?: PopupButton;
  secondaryButton?: PopupButton;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Popup: React.FC<PopupProps> = ({
  title,
  subtitle,
  isOpen,
  onClose,
  fieldGroups = [],
  children,
  primaryButton,
  secondaryButton,
  size = 'md',
  className = ''
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'w-full max-w-md h-auto max-h-[80vh]',
    md: 'w-full max-w-lg h-auto max-h-[80vh]',
    lg: 'w-full max-w-2xl h-auto max-h-[85vh]',
    xl: 'w-full max-w-4xl h-auto max-h-[90vh]'
  };

  const renderField = (field: PopupField) => {
    const inputClasses = field.type === 'readonly' 
      ? 'bg-overlays-white-inverse-5 border-overlays-white-inverse-10'
      : 'bg-default border-overlays-white-inverse-10';

    return (
      <div key={field.id} className="basis-0 content-stretch flex flex-col gap-2 grow items-start min-h-px min-w-px relative shrink-0">
        <div className="content-stretch flex gap-2 h-3.5 items-center relative shrink-0 w-full">
          <p className="font-medium leading-5.5 not-italic relative shrink-0 text-primary text-sm text-nowrap whitespace-pre">
            {field.label}
            {field.required && <span className="text-error-500 ml-1">*</span>}
          </p>
        </div>
        <div className={`border border-solid box-border content-stretch flex items-center justify-between p-3 relative rounded-lg shrink-0 w-full ${inputClasses}`}>
          <div className="content-stretch flex gap-2 items-center relative shrink-0">
            <p className={`font-normal leading-normal not-italic relative shrink-0 text-sm text-nowrap whitespace-pre ${
              field.value ? 'text-primary' : 'text-tertiary'
            }`}>
              {field.value || field.placeholder}
            </p>
          </div>
          {field.icon && (
            <div className="relative shrink-0 w-4 h-4">
              <ThemeIcon src={field.icon} alt="Field icon" size="sm" color="tertiary" />
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderFieldGroup = (group: PopupFieldGroup) => {
    const layoutClass = group.layout === 'double' ? 'flex gap-6' : 'flex flex-col gap-6';
    
    return (
      <div key={group.id} className={`content-stretch ${layoutClass} items-center relative shrink-0 w-full`}>
        {group.fields.map(renderField)}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-2 sm:p-4">
      <div className={`bg-paper-paper-elevation-2 border border-overlays-white-inverse-5 border-solid box-border content-stretch flex flex-col items-start relative rounded-xxxl shadow-card-large ${sizeClasses[size]} ${className}`}>
        
        {/* Header Section */}
        <div className="border-b border-overlays-white-inverse-20 border-solid box-border content-stretch flex items-center justify-between pb-4 pt-6 sm:pt-8 px-4 sm:px-8 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0">
            <p className="font-bold leading-6.5 not-italic relative shrink-0 text-primary text-lg text-nowrap whitespace-pre">
              {title}
            </p>
            {subtitle && (
              <p className="font-normal leading-6 not-italic relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-8 h-8 hover:bg-overlays-white-inverse-5 transition-colors duration-200"
          >
            <div className="relative shrink-0 w-6 h-6">
              <ThemeIcon src="/assets/cancel-button-icon.svg" alt="Close" size="lg" variant="primary" />
            </div>
          </button>
        </div>

        {/* Content Section */}
        <div className="box-border content-stretch flex flex-col gap-4 sm:gap-6 items-start overflow-x-clip overflow-y-auto px-4 sm:px-8 py-4 sm:py-6 relative shrink-0 w-full">
          {fieldGroups.length > 0 && fieldGroups.map(renderFieldGroup)}
          {children}
        </div>

        {/* Footer Section */}
        {(primaryButton || secondaryButton) && (
          <div className="border-t border-overlays-white-inverse-20 border-solid box-border content-center cursor-pointer flex flex-wrap gap-4 items-center justify-center pb-6 sm:pb-8 pt-6 sm:pt-8.5 px-4 sm:px-8 relative shrink-0 w-full">
            {secondaryButton && (
              <button
                onClick={secondaryButton.onClick}
                disabled={secondaryButton.disabled}
                className="border border-overlays-white-inverse-10 border-solid relative rounded-lg shrink-0 w-full sm:w-40 hover:bg-overlays-white-inverse-5 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative w-full sm:w-40">
                  <p className="font-medium leading-5.5 not-italic relative shrink-0 text-primary text-sm text-center text-nowrap whitespace-pre">
                    {secondaryButton.label}
                  </p>
                </div>
              </button>
            )}
            {primaryButton && (
              <button
                onClick={primaryButton.onClick}
                disabled={primaryButton.disabled}
                className="bg-gradient-brand-aurora relative rounded-lg shrink-0 w-full sm:w-40 hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative w-full sm:w-40">
                  <p className="font-medium leading-5.5 not-italic relative shrink-0 text-sm text-center text-nowrap text-white whitespace-pre">
                    {primaryButton.label}
                  </p>
                </div>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
