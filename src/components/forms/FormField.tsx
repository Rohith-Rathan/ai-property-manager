import React, { useState } from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';

// Asset constants
const emailInputIcon = getAssetPath('email-input-icon');
const passwordInputIcon = getAssetPath('password-input-icon');
const showPasswordIcon = getAssetPath('show-password-icon');
const hidePasswordIcon = getAssetPath('hide-password-icon');
const searchIcon = getAssetPath('search-icon');
const lockIcon = getAssetPath('lock-input-icon');

interface FormFieldProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  icon?: 'email' | 'password' | 'search' | 'lock' | 'none';
  variant?: 'default' | 'outlined' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  showPasswordToggle?: boolean;
  className?: string;
}

export default function FormField({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  helperText,
  disabled = false,
  required = false,
  icon = 'none',
  variant = 'default',
  size = 'md',
  showPasswordToggle = false,
  className = ''
}: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const getIconSrc = (iconType: string) => {
    switch (iconType) {
      case 'email': return emailInputIcon;
      case 'password': return passwordInputIcon;
      case 'search': return searchIcon;
      case 'lock': return lockIcon;
      default: return null;
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'sm':
        return {
          container: 'h-8',
          input: 'text-label-small',
          icon: 'w-3 h-3'
        };
      case 'lg':
        return {
          container: 'h-12',
          input: 'text-base',
          icon: 'w-5 h-5'
        };
      default:
        return {
          container: 'h-10',
          input: 'text-small',
          icon: 'w-4 h-4'
        };
    }
  };

  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case 'outlined':
        return 'border-2 border-overlays-white-inverse-10 bg-transparent';
      case 'filled':
        return 'border-0 bg-paper-paper-elevation-1';
      default:
        return 'border border-overlays-white-inverse-10 bg-transparent';
    }
  };

  const sizeClasses = getSizeClasses(size);
  const variantClasses = getVariantClasses(variant);
  const iconSrc = getIconSrc(icon);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  const containerClasses = `
    ${variantClasses}
    ${sizeClasses.container}
    border-solid box-border content-stretch flex items-center gap-2 p-3 relative rounded-lg shrink-0 w-full
    ${error ? 'border-error-500' : ''}
    ${isFocused ? 'border-primary-500 ring-2 ring-primary-500/20' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'}
    ${className}
  `.trim();

  return (
    <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full" data-name="Form Field">
      {/* Label */}
      {label && (
        <div className="content-stretch flex gap-2 h-4 items-center relative shrink-0 w-full" data-name="Label">
          <p className="font-sans font-medium leading-normal not-italic relative shrink-0 text-primary text-small text-nowrap tracking-normal whitespace-pre" data-name="Label Text">
            {label}
            {required && <span className="text-error-500 ml-1">*</span>}
          </p>
        </div>
      )}

      {/* Input Container */}
      <div className={containerClasses} data-name="Input Container">
        {/* Left Icon */}
        {iconSrc && (
          <div className="relative shrink-0" data-name="Left Icon">
            <img alt="" className={`block max-w-none ${sizeClasses.icon}`} src={iconSrc} />
          </div>
        )}

        {/* Input Field */}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          className={`
            font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary ${sizeClasses.input} text-nowrap tracking-normal whitespace-pre flex-1 outline-none bg-transparent
            ${disabled ? 'cursor-not-allowed' : ''}
          `.trim()}
          data-name="Input"
        />

        {/* Password Toggle or Right Icon */}
        {isPassword && showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="content-stretch flex h-4 items-start relative shrink-0 cursor-pointer"
            data-name="Password Toggle"
          >
            <div className={`relative shrink-0 ${sizeClasses.icon}`} data-name="Toggle Icon">
              <img alt="" className="block max-w-none size-full" src={showPassword ? hidePasswordIcon : showPasswordIcon} />
            </div>
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-error-500 text-label-small text-nowrap tracking-normal whitespace-pre" data-name="Error Message">
          {error}
        </p>
      )}

      {/* Helper Text */}
      {helperText && !error && (
        <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-tertiary text-label-small text-nowrap tracking-normal whitespace-pre" data-name="Helper Text">
          {helperText}
        </p>
      )}
    </div>
  );
}
