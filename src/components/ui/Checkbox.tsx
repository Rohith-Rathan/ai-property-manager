import React from 'react';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
}

export default function Checkbox({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  required = false
}: CheckboxProps) {
  return (
    <div className="h-5 relative shrink-0 w-[119.602px]" data-name="Container" data-node-id="189:9792">
      <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-5 items-center relative w-[119.602px]">
        
        {/* Checkbox Input - EXACT FIGMA STRUCTURE */}
        <div className="border border-overlays-black-10 border-solid relative rounded-md shrink-0 size-4" data-name="Primitive.button" data-node-id="189:9793">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
            required={required}
            className="bg-clip-padding border-0 border-transparent border-solid box-border size-4 appearance-none cursor-pointer checked:bg-primary-1 checked:border-primary-1 disabled:cursor-not-allowed"
          />
          
          {/* Check Icon - EXACT FIGMA STRUCTURE */}
          {checked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        {/* Label - EXACT FIGMA STRUCTURE */}
        <div className="basis-0 grow h-5 min-h-px min-w-px relative shrink-0" data-name="Primitive.label" data-node-id="189:9794">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-5 items-center relative w-full">
            <label
              htmlFor={id}
              className="font-medium leading-5 not-italic relative shrink-0 text-text-primary text-14 text-nowrap tracking-[-0.1504px] whitespace-pre cursor-pointer"
              data-node-id="189:9795"
            >
              {label}
              {required && <span className="text-error-500 ml-1">*</span>}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}