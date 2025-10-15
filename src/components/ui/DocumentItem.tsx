import React from 'react';
import { ThemeIcon } from './ThemeIcon';
import { getAssetPath } from '../../utils/completeAssetMapping';

interface DocumentItemProps {
  /** Document title */
  title: string;
  /** Optional subtitle/description */
  subtitle?: string;
  /** Optional expiration date */
  expirationDate?: string;
  /** Whether the document is expiring soon */
  isExpiring?: boolean;
  /** Custom icon for the document */
  icon?: string;
  /** Download action handler */
  onDownload?: () => void;
  /** Edit action handler */
  onEdit?: () => void;
  /** View action handler */
  onView?: () => void;
  /** Component variant */
  variant?: 'simple' | 'detailed' | 'expiration';
  /** Additional CSS classes */
  className?: string;
}

export const DocumentItem: React.FC<DocumentItemProps> = ({
  title,
  subtitle,
  expirationDate,
  isExpiring = false,
  icon,
  onDownload,
  onEdit,
  onView,
  variant = 'simple',
  className = ''
}) => {
  // Default document icon if none provided
  const defaultIcon = icon || '/assets/dcca7775f5c79ff238a864f59355e149ffc6cac3.svg';

  // Action icons (from Figma design)
  const downloadIcon = '/assets/7001f64b0a974c8440c2f6da9af802d5329923df.svg';
  const editIcon = '/assets/52319417a31bbfed779edb880cba1406e3cb2a88.svg';
  const viewIcon = '/assets/73084855d8c161a9911f10b1712f5a4e5563369e.svg';

  return (
    <div 
      className={`bg-default border border-overlays-white-inverse-10 border-solid box-border content-center flex flex-wrap items-center justify-between p-4 relative rounded-xxl size-full hover:bg-gray-50 transition-colors duration-200 ${className}`}
      data-name="Document Item"
    >
      {/* Left Content Section */}
      <div className="relative shrink-0" data-name="Content">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex items-center relative">
          {/* Icon Container */}
          <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-10 h-10" data-name="Icon Container">
            <div className="relative shrink-0 w-6 h-6" data-name="Icon">
              <ThemeIcon 
                src={defaultIcon} 
                alt="Document icon" 
                size="lg" 
                variant="default"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="content-stretch flex flex-col gap-1 items-start justify-center not-italic relative shrink-0 ml-3" data-name="Content">
            {/* Title */}
            <p className="font-sans font-medium leading-small relative shrink-0 text-primary text-sm" data-name="Title">
              {title}
            </p>
            
            {/* Subtitle (for detailed variant only) */}
            {variant === 'detailed' && subtitle && (
              <p className="font-sans font-normal leading-normal relative shrink-0 text-tertiary text-xs text-nowrap whitespace-pre" data-name="Subtitle">
                {subtitle}
              </p>
            )}
            
            {/* Expiration Date (for detailed and expiration variants) */}
            {(variant === 'detailed' || variant === 'expiration') && expirationDate && (
              <p className="font-sans font-normal leading-normal relative shrink-0 text-tertiary text-xs text-nowrap whitespace-pre" data-name="Expiration">
                Expires on {expirationDate}
                {isExpiring && (
                  <span className="text-error-500"> (in 40 days)</span>
                )}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Right Actions Section */}
      <div className="relative shrink-0" data-name="Actions">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center relative">
          {/* Download Button */}
          <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-8 h-8 cursor-pointer hover:bg-gray-100 transition-colors duration-200" data-name="Download Button" onClick={onDownload}>
            <div className="relative shrink-0 w-4 h-4" data-name="Download Icon">
              <ThemeIcon 
                src={downloadIcon} 
                alt="Download" 
                size="sm" 
                variant="default"
              />
            </div>
          </div>
          
          {/* Edit Button */}
          <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-8 h-8 cursor-pointer hover:bg-gray-100 transition-colors duration-200" data-name="Edit Button" onClick={onEdit}>
            <div className="relative shrink-0 w-4 h-4" data-name="Edit Icon">
              <ThemeIcon 
                src={editIcon} 
                alt="Edit" 
                size="sm" 
                variant="default"
              />
            </div>
          </div>
          
          {/* View Button */}
          <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-8 h-8 cursor-pointer hover:bg-gray-100 transition-colors duration-200" data-name="View Button" onClick={onView}>
            <div className="relative shrink-0 w-4 h-4" data-name="View Icon">
              <ThemeIcon 
                src={viewIcon} 
                alt="View" 
                size="sm" 
                variant="default"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentItem;
