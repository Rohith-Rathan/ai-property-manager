import React from 'react';

interface DividerProps {
  text?: string;
}

export default function Divider({
  text
}: DividerProps) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container" data-node-id="189:9801">
      {/* Divider Line - EXACT FIGMA STRUCTURE */}
      <div className="absolute border-t border-overlays-black-10 border-solid h-px left-0 top-2 w-[382px]" data-name="Container" data-node-id="189:9802" />
      
      {/* Text Overlay - EXACT FIGMA STRUCTURE */}
      {text && (
        <div className="bg-surface-primary box-border content-stretch flex gap-2 items-center justify-center px-2 py-0 relative shrink-0" data-name="Text" data-node-id="189:9803">
          <p className="font-normal leading-4 not-italic relative shrink-0 text-text-tertiary text-12 text-nowrap uppercase whitespace-pre" data-node-id="189:9804">
            {text}
          </p>
        </div>
      )}
    </div>
  );
}