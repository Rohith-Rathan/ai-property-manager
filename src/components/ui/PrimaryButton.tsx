import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export default function PrimaryButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  className = ''
}: PrimaryButtonProps) {
  return (
    <button 
      className={`bg-gradient-brand-aurora box-border content-stretch cursor-pointer flex gap-2 items-center justify-center overflow-visible px-4 py-3 relative rounded-lg shrink-0 transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed ${className}`} 
      data-name="Button" 
      data-node-id="766:9004"
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
      ) : (
        <p className="font-normal leading-4 not-italic relative shrink-0 text-14 text-nowrap text-white whitespace-pre" data-node-id="766:9008">
          {children}
        </p>
      )}
    </button>
  );
}