import React from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';
import ThemeIcon from '../ui/ThemeIcon';

// Asset constants
const propertyActionsIcon = getAssetPath('property-actions-icon');
const trendingUpIcon = getAssetPath('bdfb842fd34b514bce485e4a545244e6ae290405');

interface StatCardProps {
  title: string;
  subtitle: string;
  value: string;
  icon: string;
  gradient: 'aqua-2' | 'brand-aurora' | 'info-flow' | 'ai-violet-2' | 'magenta-pop' | 'emerald-glow';
  badge?: {
    text: string;
    color: 'primary' | 'error' | 'success' | 'warning' | 'info';
    trend?: 'up' | 'down';
  };
  showActions?: boolean;
}

export default function StatCard({ 
  title,
  subtitle,
  value,
  icon,
  gradient,
  badge,
  showActions = true
}: StatCardProps) {
  const getGradientClass = (gradient: string) => {
    switch (gradient) {
      case 'brand-aurora': return 'bg-gradient-brand-aurora';
      case 'info-flow': return 'bg-gradient-info-flow';
      case 'ai-violet-2': return 'bg-gradient-ai-violet-2';
      case 'magenta-pop': return 'bg-gradient-magenta-pop';
      case 'emerald-glow': return 'bg-gradient-emerald-glow';
      default: return 'bg-gradient-aqua-2';
    }
  };

  const getBadgeColorClass = (color: string) => {
    switch (color) {
      case 'error': return 'bg-overlays-error-20';
      case 'success': return 'bg-overlays-success-20';
      case 'warning': return 'bg-overlays-warning-20';
      case 'info': return 'bg-overlays-info-20';
      default: return 'bg-overlays-primary-20';
    }
  };

  const getBadgeTextColorClass = (color: string) => {
    switch (color) {
      case 'error': return 'text-error-900';
      case 'success': return 'text-success-900';
      case 'warning': return 'text-warning-900';
      case 'info': return 'text-info-900';
      default: return 'text-primary-900';
    }
  };

  const getBadgeIconFilter = (color: string) => {
    switch (color) {
      case 'error': return 'brightness(0) saturate(100%) invert(9%) sepia(94%) saturate(1352%) hue-rotate(316deg) brightness(96%) contrast(95%)'; // #921016
      case 'success': return 'brightness(0) saturate(100%) invert(20%) sepia(98%) saturate(1352%) hue-rotate(87deg) brightness(95%) contrast(95%)'; // #006631
      case 'warning': return 'brightness(0) saturate(100%) invert(40%) sepia(98%) saturate(1352%) hue-rotate(15deg) brightness(95%) contrast(95%)'; // #996800
      case 'info': return 'brightness(0) saturate(100%) invert(30%) sepia(98%) saturate(1352%) hue-rotate(180deg) brightness(95%) contrast(95%)'; // #0076ad
      default: return 'brightness(0) saturate(100%) invert(6%) sepia(98%) saturate(1352%) hue-rotate(200deg) brightness(95%) contrast(95%)'; // #101828
    }
  };

  return (
    <div className="bg-paper-paper-elevation-1 border border-overlays-white-inverse-10 border-solid box-border content-stretch flex flex-col gap-4 items-start p-6 relative rounded-xxl shrink-0 w-full max-w-56 sm:w-56 md:w-64 lg:w-72 h-auto min-h-48 sm:h-60 shadow-card-small" data-name="Stat Card">
      {/* Header with Icon and Actions */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Header">
        <div className={`${getGradientClass(gradient)} box-border content-stretch flex items-center justify-center relative rounded-xxl shadow-brand-purple-glow shrink-0 w-12 h-12`} data-name="Icon Container">
          <img 
            src={icon} 
            alt="Stat Icon" 
            className="w-icon-lg h-icon-lg" 
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)',
              display: 'block',
              maxWidth: 'none'
            }}
          />
        </div>
        {showActions && (
          <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-6 h-6" data-name="Actions Button">
            <ThemeIcon src={propertyActionsIcon} alt="Actions" size="sm" variant="default" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Card Content">
        <p className="font-sans font-medium leading-h4 relative shrink-0 text-primary text-h4 w-full" data-name="Value">
          {value}
        </p>
        <p className="font-sans font-normal leading-small relative shrink-0 text-tertiary text-small w-full" data-name="Subtitle">
          {subtitle}
        </p>
      </div>

      {/* Badge */}
      {badge && (
        <div className={`${getBadgeColorClass(badge.color)} box-border content-stretch flex gap-1 items-center px-2 py-1 relative rounded-full shrink-0`} data-name="Badge">
          {badge.trend && (
            <div className="flex items-center justify-center relative shrink-0">
              <div className={`flex-none ${badge.trend === 'down' ? 'rotate-180' : ''}`}>
                <div className="w-icon-sm h-icon-sm">
                  <img 
                    src={trendingUpIcon} 
                    alt="Trend" 
                    className="w-full h-full" 
                    style={{ filter: getBadgeIconFilter(badge.color) }}
                  />
                </div>
              </div>
            </div>
          )}
          <p className={`font-sans font-normal leading-normal not-italic relative shrink-0 text-label-small text-nowrap whitespace-pre ${getBadgeTextColorClass(badge.color)}`} data-name="Badge Text">
            {badge.text}
          </p>
        </div>
      )}
    </div>
  );
}
