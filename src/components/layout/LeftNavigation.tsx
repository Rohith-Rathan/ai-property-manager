import React from 'react';
import ThemeIcon from '../ui/ThemeIcon';

interface LeftNavigationProps {
  className?: string;
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

export default function LeftNavigation({ 
  className = '', 
  activeItem = 'dashboard',
  onItemClick 
}: LeftNavigationProps) {
  
  const navigationItems = [
    { id: 'dashboard', icon: '/assets/dashboard-icon.svg', alt: 'Dashboard' },
    { id: 'properties', icon: '/assets/properties-icon.svg', alt: 'Properties' },
    { id: 'tenants', icon: '/assets/tenants-icon.svg', alt: 'Tenants' },
    { id: 'maintenance', icon: '/assets/maintenance-icon.svg', alt: 'Maintenance' },
    { id: 'financial', icon: '/assets/financial-icon.svg', alt: 'Financial' },
    { id: 'reports', icon: '/assets/reports-icon.svg', alt: 'Reports' },
    { id: 'settings', icon: '/assets/settings-nav-icon.svg', alt: 'Settings' },
    { id: 'help', icon: '/assets/help-icon.svg', alt: 'Help' }
  ];

  const handleItemClick = (itemId: string) => {
    if (onItemClick) {
      onItemClick(itemId);
    }
  };

  return (
    <div className={`bg-white/80 dark:bg-gray-900/80 border-r border-gray-200 dark:border-gray-700 flex flex-col h-full w-16 backdrop-blur-sm ${className}`}>
      {/* Navigation items */}
      <div className="flex-1 flex flex-col gap-2 p-4 pt-4">
        {navigationItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className={`rounded-xl w-full h-8 flex items-center justify-center cursor-pointer transition-all duration-200 ${
              activeItem === item.id
                ? 'bg-gradient-to-b from-purple-200 to-blue-200 dark:from-purple-600 dark:to-blue-600 shadow-sm'
                : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <ThemeIcon 
              src={item.icon} 
              alt={item.alt} 
              size="sm"
            />
          </div>
        ))}
      </div>
      
      {/* User avatar */}
      <div className="p-4 pb-4">
        <div className="bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow">
          <span className="text-xs text-white font-medium">JD</span>
        </div>
      </div>
    </div>
  );
}
