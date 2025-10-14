import React from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';
import ThemeIcon from '../ui/ThemeIcon';

// Asset constants
const dashboardNavIcon = getAssetPath('dashboard-nav-icon');
const propertiesNavIcon = getAssetPath('properties-nav-icon');
const tenantsNavIcon = getAssetPath('tenants-nav-icon');
const maintenanceNavIcon = getAssetPath('maintenance-nav-icon');
const reportsNavIcon = getAssetPath('reports-nav-icon');
const analyticsNavIcon = getAssetPath('analytics-nav-icon');
const settingsNavIcon = getAssetPath('settings-nav-icon');
const helpNavIcon = getAssetPath('help-nav-icon');

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

interface LeftNavigationProps {
  activeItem?: string;
  userInitials?: string;
  userName?: string;
  userGradient?: 'aqua-2' | 'brand-aurora' | 'info-flow';
  showUserProfile?: boolean;
  expanded?: boolean;
  onItemClick?: (itemId: string) => void;
}

export default function LeftNavigation({ 
  activeItem = 'dashboard',
  userInitials = 'JD',
  userName = 'Jhon Deo',
  userGradient = 'aqua-2',
  showUserProfile = true,
  expanded = false,
  onItemClick
}: LeftNavigationProps) {
  const navigationItems: NavigationItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: dashboardNavIcon },
    { id: 'properties', label: 'Properties', icon: propertiesNavIcon },
    { id: 'tenants', label: 'Tenants & Leases', icon: tenantsNavIcon },
    { id: 'invoices', label: 'Invoices & Payments', icon: reportsNavIcon },
    { id: 'maintenance', label: 'Maintenance', icon: maintenanceNavIcon },
    { id: 'assets', label: 'Assets & Warranties', icon: analyticsNavIcon },
    { id: 'audit', label: 'Audit Log', icon: helpNavIcon },
    { id: 'settings', label: 'Settings', icon: settingsNavIcon },
  ];

  const getGradientClass = (gradient: string) => {
    switch (gradient) {
      case 'brand-aurora': return 'bg-gradient-brand-aurora';
      case 'info-flow': return 'bg-gradient-info-flow';
      default: return 'bg-gradient-aqua-2';
    }
  };

  const getButtonClass = (item: NavigationItem) => {
    const baseClass = expanded 
      ? "box-border content-stretch flex gap-2 h-8 items-center px-3 py-0 relative rounded-xl shrink-0 w-full transition-all duration-200 cursor-pointer"
      : "box-border content-stretch flex gap-2 h-8 items-center justify-center px-3 py-0 relative rounded-xl shrink-0 w-full transition-all duration-200 cursor-pointer";
    
    if (item.active || activeItem === item.id) {
      // Always use Brand Aurora for active navigation items
      return `${baseClass} bg-gradient-brand-aurora`;
    }
    
    return `${baseClass} bg-transparent`;
  };

  return (
    <div className={`bg-paper-paper-elevation-1 border-r border-overlays-white-inverse-10 border-solid box-border content-stretch flex flex-col h-full items-start relative shrink-0 shadow-card-large-right transition-all duration-300 ease-in-out ${expanded ? 'w-64' : 'w-16'}`} data-name="Left Navigation">
      {/* Navigation Items */}
      <div className={`basis-0 box-border content-stretch flex flex-col gap-2 grow items-start min-h-px min-w-px pb-0 pt-4 px-4 relative shrink-0 transition-all duration-300 ease-in-out ${expanded ? 'w-64' : 'w-16'}`} data-name="Navigation">
        {navigationItems.map((item) => (
          <div 
            key={item.id} 
            className={getButtonClass(item)} 
            data-name={`${item.label} Button`}
            onClick={() => onItemClick?.(item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onItemClick?.(item.id);
              }
            }}
          >
            <ThemeIcon src={item.icon} alt={item.label} size="sm" variant={(item.active || activeItem === item.id) ? "white" : "default"} />
            {expanded && (
              <p className={`font-sans font-normal leading-small not-italic relative shrink-0 text-small text-nowrap tracking-normal whitespace-pre ${(item.active || activeItem === item.id) ? 'text-white' : 'text-primary'}`} data-name="Navigation Label">
                {item.label}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* User Profile Section */}
      {showUserProfile && (
        <div className={`box-border content-stretch flex gap-2 h-16 items-center pb-px pl-4 pr-4 pt-4 relative shrink-0 transition-all duration-300 ease-in-out ${expanded ? 'w-64' : 'w-16'}`} data-name="User Profile">
          <div className="content-stretch flex gap-2 items-center relative rounded-full shrink-0" data-name="Profile Button">
            <div className="content-stretch flex items-start overflow-clip relative rounded-full shrink-0 w-8 h-8" data-name="Profile Container">
              <div className={`basis-0 ${getGradientClass(userGradient)} grow h-8 min-h-px min-w-px relative rounded-full shrink-0`} data-name="Profile Avatar">
                <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex h-8 items-center justify-center relative w-full">
                  <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-small text-nowrap text-white tracking-normal whitespace-pre" data-name="User Initials">
                    {userInitials}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {expanded && (
            <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-small text-nowrap text-primary tracking-normal whitespace-pre" data-name="User Name">
              {userName}
            </p>
          )}
        </div>
      )}
    </div>
  );
}