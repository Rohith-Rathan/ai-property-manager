import React from 'react';
import ThemeIcon from './ThemeIcon';

interface SocialButtonProps {
  provider: 'google' | 'microsoft';
  onClick?: () => void;
  disabled?: boolean;
}

export default function SocialButton({
  provider,
  onClick,
  disabled = false
}: SocialButtonProps) {
  // EXACT FIGMA ICON MAPPING
  const iconPath = provider === 'google' ? '/assets/google-login-icon.svg' : '/assets/microsoft-login-icon.svg'; // imgLoginScreen/imgLoginScreen1 from Figma
  const label = provider === 'google' ? 'Google' : 'Microsoft';

  return (
    <div className="basis-0 border border-overlays-black-10 border-solid box-border content-stretch flex gap-2 grow items-center justify-center min-h-px min-w-px px-4 py-3 relative rounded-lg shrink-0 transition-opacity hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed" data-name="Button" data-node-id="766:9012">
      <div className="relative shrink-0 size-4" data-name="LoginScreen" data-node-id="766:9018">
        <ThemeIcon src={iconPath} alt={`${label} login`} size="sm" color="primary" />
      </div>
      <p className="font-medium leading-5.5 not-italic relative shrink-0 text-text-primary text-14 text-center text-nowrap whitespace-pre" data-node-id="766:9016">
        {label}
      </p>
    </div>
  );
}