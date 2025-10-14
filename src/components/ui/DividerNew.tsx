import React from 'react';

interface DividerProps {
  text?: string;
  className?: string;
}

export default function Divider({
  text,
  className = ''
}: DividerProps) {
  
  return (
    <div className={`content-stretch flex flex-col items-center relative shrink-0 w-full ${className}`}>
      <div className="absolute border-t border-overlays-black-10 border-solid h-px left-0 top-2 w-[382px]"></div>
      <div className="bg-surface-primary box-border content-stretch flex gap-2 items-center justify-center px-2 py-0 relative shrink-0">
        <span className="font-normal leading-4 not-italic relative shrink-0 text-text-tertiary text-12 text-nowrap uppercase whitespace-pre">
          {text || 'Or continue with'}
        </span>
      </div>
    </div>
  );
}
