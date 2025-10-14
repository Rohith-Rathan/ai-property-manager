import React from 'react';
import { getOptimizedAsset } from '../utils/optimizedAssetMapping';
import '../styles/icon-variants.css';

interface OptimizedIconProps {
  hash: string;
  className?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large' | 'xl';
  hover?: boolean;
}

/**
 * OptimizedIcon Component
 * 
 * Uses the optimized asset mapping system where:
 * - One master file per unique icon pattern
 * - CSS classes for color/size variants
 * - Automatic fallback for unknown icons
 * 
 * @param hash - The Figma hash of the icon
 * @param className - Additional CSS classes
 * @param alt - Alt text for accessibility
 * @param size - Icon size variant
 * @param hover - Enable hover effects
 */
export const OptimizedIcon: React.FC<OptimizedIconProps> = ({
  hash,
  className = '',
  alt = 'Icon',
  size = 'medium',
  hover = false
}) => {
  const asset = getOptimizedAsset(hash);
  
  // Build CSS classes
  const cssClasses = [
    asset.cssClass,
    `icon-${size}`,
    hover ? 'icon-hover' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <img
      src={asset.path}
      alt={alt}
      className={cssClasses}
      style={{ display: 'block', maxWidth: 'none' }}
    />
  );
};

/**
 * Helper function to get icon info without rendering
 */
export const getIconInfo = (hash: string) => {
  return getOptimizedAsset(hash);
};

/**
 * Predefined icon components for common patterns
 */
export const DollarIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="0f44f729311136017322fe20df2f07dfb5735258" className={className} {...props} />
);

export const EditIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="52319417a31bbfed779edb880cba1406e3cb2a88" className={className} {...props} />
);

export const BuildingIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="878cd835ab10ca42796d3d46ca1955b32ffb2ff2" className={className} {...props} />
);

export const UserIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="de8bf0318d24a35a22cb634ec71e1d3edd3cd21c" className={className} {...props} />
);

export const CalendarIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="1d2f2cc176f13c65dcaf35f4f1987dbc5eb1c753" className={className} {...props} />
);

export const ArrowLeftIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="db2d219bf7ca866a4c7cc3d084b3fd4619321bf0" className={className} {...props} />
);

export const ChevronDownIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="93eee61b1cc5711cc9e7f65ddffa4d2717488f10" className={className} {...props} />
);

export const MenuIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="6200186fe861f6a07472dfa080ec4f5542fd8c6a" className={className} {...props} />
);

export const ThreeDotsIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="1f1cfc25eb2eae5af3fa71139b714c255a241a43" className={className} {...props} />
);

export const TrashIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="324a62ec993f392b21c21e51c78a1d26a4bbb251" className={className} {...props} />
);

export const ShieldIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="3f3368fca74f43a3cfe4319c0a749805f5305f89" className={className} {...props} />
);

export const HomeIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="397449768111b648a778ff00f7f7adc0f33db310" className={className} {...props} />
);

export const CheckmarkIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="eb47a6ed39528ab0e753c7e4a8b5e516b69002b2" className={className} {...props} />
);

export const XIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="8e9f7f806084d3de113365a0759470c812c2864e" className={className} {...props} />
);

export const GridIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="80b75202df0baa408a9d13376ff37162cae3f6a6" className={className} {...props} />
);

export const UploadIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="a6af28070bbfe7ed933370be257107a72dbc80a4" className={className} {...props} />
);

export const AlertIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="8d0956d262164339b550eadca78b246c8aca00bf" className={className} {...props} />
);

export const FilterIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="8f8e005454b9b46963f5efd7a358be9e494c7c42" className={className} {...props} />
);

export const PhoneIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="30ca31f42edc86fbd200d6c6af5214fb28adca7e" className={className} {...props} />
);

export const EmailIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="3fa9b13ab8ace0e15e059c64cfe847f6ab65db15" className={className} {...props} />
);

export const LocationIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="7ddb383b6724b3a3ae0a839da312c2c40c90e868" className={className} {...props} />
);

export const EyeIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="73084855d8c161a9911f10b1712f5a4e5563369e" className={className} {...props} />
);

export const PlusIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="3e63957ecd6b5a0c3c6f740e63899c1b59879d29" className={className} {...props} />
);

export const MessageIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="5d5c2949b263b20567a63f78f8cf256f3598ab4b" className={className} {...props} />
);

export const DocumentIcon = ({ className, ...props }: Omit<OptimizedIconProps, 'hash'>) => (
  <OptimizedIcon hash="0e57698f12072b290e200c386b094e0ea7b62ad7" className={className} {...props} />
);

export default OptimizedIcon;
