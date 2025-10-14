import React, { useState } from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';
import ThemeIcon from './ThemeIcon';

// Asset constants
const searchIcon = getAssetPath('search-icon');
const clearIcon = getAssetPath('x-close-icon');

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSearch?: (query: string) => void;
  onClear?: () => void;
  disabled?: boolean;
  className?: string;
  showClearButton?: boolean;
  autoFocus?: boolean;
}

export default function SearchInput({
  placeholder = "Search properties, tenants, tickets...",
  value,
  onChange,
  onSearch,
  onClear,
  disabled = false,
  className = '',
  showClearButton = true,
  autoFocus = false
}: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    onChange('');
    onClear?.();
  };

  const containerClasses = `
    box-border content-stretch flex gap-2 h-9 items-center px-3 py-3 relative shrink-0 w-full max-w-sm
    ${isFocused ? 'bg-paper-paper-elevation-2' : 'bg-transparent'}
    transition-colors duration-200
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'}
    ${className}
  `.trim();

  return (
    <div className={containerClasses} data-name="Search Input Container">
      {/* Search Icon */}
      <ThemeIcon 
        src={searchIcon} 
        alt="Search" 
        size="sm" 
        variant={isFocused ? "primary" : "secondary"} 
      />

      {/* Input Field */}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        autoFocus={autoFocus}
        className={`
          font-sans font-normal leading-normal not-italic relative shrink-0 
          ${isFocused ? 'text-primary' : 'text-secondary'} 
          text-small text-nowrap tracking-normal whitespace-pre flex-1 outline-none bg-transparent
          placeholder:text-secondary
          ${disabled ? 'cursor-not-allowed' : ''}
        `.trim()}
        data-name="Search Input"
      />

      {/* Clear Button */}
      {showClearButton && value && (
        <button
          type="button"
          onClick={handleClear}
          className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-6 h-6 hover:bg-paper-paper-elevation-1 transition-colors duration-200"
          data-name="Clear Button"
        >
          <ThemeIcon 
            src={clearIcon} 
            alt="Clear" 
            size="xs" 
            variant="secondary" 
          />
        </button>
      )}
    </div>
  );
}
