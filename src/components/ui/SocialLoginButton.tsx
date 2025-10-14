import React from 'react';
import { Icon } from './Icon';

interface SocialLoginButtonProps {
  provider: 'google' | 'microsoft' | 'apple' | 'facebook';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const providerConfig = {
  google: {
    icon: '/assets/google-icon.svg',
    label: 'Google',
    alt: 'Google'
  },
  microsoft: {
    icon: '/assets/microsoft-icon.svg',
    label: 'Microsoft',
    alt: 'Microsoft'
  },
  apple: {
    icon: '/assets/apple-icon.svg',
    label: 'Apple',
    alt: 'Apple'
  },
  facebook: {
    icon: '/assets/facebook-icon.svg',
    label: 'Facebook',
    alt: 'Facebook'
  }
};

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  onClick,
  disabled = false,
  className = ''
}) => {
  const config = providerConfig[provider];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        border border-border-default flex gap-2 items-center justify-center px-4 py-3 rounded-lg flex-1
        hover:bg-surface-secondary transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-border-focus
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      <Icon 
        src={config.icon} 
        alt={config.alt} 
        size="sm" 
      />
      <span className="font-medium text-label-medium text-navy-1">
        {config.label}
      </span>
    </button>
  );
};

export default SocialLoginButton;
