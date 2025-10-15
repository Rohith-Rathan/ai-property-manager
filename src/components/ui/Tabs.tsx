import React, { useState } from 'react';

export interface TabItem {
  id: string;
  label: string;
  count?: number; // Optional count for tabs like "Co-Tenants (3)"
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
  scrollable?: boolean; // Enable horizontal scrolling on mobile
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = '',
  scrollable = false
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id || '');
  
  const currentActiveTab = activeTab || internalActiveTab;
  
  const handleTabClick = (tabId: string) => {
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      setInternalActiveTab(tabId);
    }
  };

  const tabsContent = (
    <div className={`bg-gradient-brand-aurora-10 box-border flex gap-2 items-center p-2 relative rounded-full w-fit ${className}`}>
      {tabs.map((tab) => {
        const isActive = tab.id === currentActiveTab;
        
        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              box-border flex gap-2 items-center justify-center px-4 py-2 relative rounded-full shrink-0 transition-all duration-200 cursor-pointer whitespace-nowrap
              ${isActive 
                ? 'bg-gradient-brand-aurora' 
                : 'bg-gradient-to-b from-transparent to-transparent hover:bg-overlays-primary-5'
              }
            `}
          >
            <p className={`
              font-medium leading-[22px] not-italic relative shrink-0 text-sm text-nowrap whitespace-pre
              ${isActive ? 'text-white' : 'text-primary'}
            `}>
              {tab.label}
              {tab.count !== undefined && ` (${tab.count})`}
            </p>
          </button>
        );
      })}
    </div>
  );

  // If scrollable is enabled, wrap in a horizontal scroll container
  if (scrollable) {
    return (
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex justify-start min-w-fit">
          {tabsContent}
        </div>
      </div>
    );
  }

  return tabsContent;
};

export default Tabs;
