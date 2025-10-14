import React from 'react';

interface LinkButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function LinkButton({
  children,
  onClick,
  disabled = false
}: LinkButtonProps) {
  return (
    <div className="h-5 relative rounded-[10px] shrink-0 w-[117.961px]" data-name="Button" data-node-id="189:9796">
      <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-5 items-center justify-center relative w-[117.961px]">
        <button
          onClick={onClick}
          disabled={disabled}
          className="font-medium leading-5 not-italic relative shrink-0 text-primary-1 text-14 text-nowrap tracking-[-0.1504px] whitespace-pre transition-opacity hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
          data-node-id="189:9797"
        >
          {children}
        </button>
      </div>
    </div>
  );
}