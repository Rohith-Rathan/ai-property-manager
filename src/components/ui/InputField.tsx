import React, { useState } from 'react';
import ThemeIcon from './ThemeIcon';

interface InputFieldProps {
  label: string;
  type: 'email' | 'password' | 'text' | 'tel' | 'number' | 'search';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  showToggle?: boolean; // For password type
  onToggle?: () => void;
  toggleState?: boolean;
}

export default function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  error,
  showToggle = false,
  onToggle,
  toggleState = false
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleToggle = () => {
    if (type === 'password') {
      setShowPassword(!showPassword);
    }
    onToggle?.();
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;
  
  // Icon mapping based on input type - EXACT FIGMA MAPPING
  const getIconPath = () => {
    switch (type) {
      case 'email': return '/assets/email-input-icon.svg'; // imgIcon1 from Figma
      case 'password': return '/assets/password-input-icon.svg'; // imgIcon2 from Figma
      case 'search': return '/assets/search-properties-icon.svg';
      default: return '/assets/email-input-icon.svg';
    }
  };

  const getToggleIconPath = () => {
    return showPassword ? '/assets/hide-password-icon.svg' : '/assets/show-password-icon.svg'; // imgEye/imgEyeOff from Figma
  };

  return (
    <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full" data-name="Container" data-node-id="189:9770">
      {/* Label - EXACT FIGMA STRUCTURE */}
      <div className="content-stretch flex gap-2 h-3.5 items-center relative shrink-0 w-full" data-name="Primitive.label" data-node-id="189:9771">
        <p className="font-medium leading-3.5 not-italic relative shrink-0 text-text-primary text-14 text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="189:9772">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </p>
      </div>

      {/* Input Container - EXACT FIGMA STRUCTURE */}
      <div className={`border border-overlays-black-10 border-solid box-border content-stretch flex gap-2 items-center p-3 relative rounded-lg shrink-0 w-full transition-colors ${
        isFocused ? 'border-accent-blue-1' : ''
      } ${error ? 'border-error-500' : ''}`} data-name="Container" data-node-id="189:9773">
        
        {/* Input Icon - EXACT FIGMA STRUCTURE */}
        <div className="content-stretch flex gap-2 items-center relative shrink-0" data-node-id="240:5751">
          <div className="relative shrink-0 size-4" data-name="Icon" data-node-id="189:9774">
            <ThemeIcon src={getIconPath()} alt={label} size="sm" color="tertiary" />
          </div>
          
          {/* Input Field - EXACT FIGMA STRUCTURE */}
          <input
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="font-normal leading-normal not-italic relative shrink-0 text-text-tertiary text-14 text-nowrap tracking-[-0.1504px] whitespace-pre flex-1 outline-none bg-transparent placeholder:text-text-tertiary"
          />
        </div>

        {/* Password Toggle - EXACT FIGMA STRUCTURE */}
        {showToggle && type === 'password' && (
          <div className="content-stretch flex h-4 items-start relative shrink-0" data-name="Button" data-node-id="189:9787">
            <button
              type="button"
              onClick={handleToggle}
              className="relative shrink-0 size-4 hover:opacity-80 transition-opacity" 
              data-name="eye" 
              data-node-id="690:5111"
            >
              <ThemeIcon src={getToggleIconPath()} alt={showPassword ? 'Hide password' : 'Show password'} size="sm" color="tertiary" />
            </button>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-error-500 text-12 mt-1">{error}</p>
      )}
    </div>
  );
}