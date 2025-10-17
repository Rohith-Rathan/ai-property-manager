import React, { useState } from 'react';
import Header from './Header';
import LeftNavigation from './LeftNavigation';

interface AppLayoutProps {
  children: React.ReactNode;
  activePage: string;
  searchPlaceholder?: string;
  notificationCount?: number;
  showThemeToggle?: boolean;
  userName?: string;
  userInitials?: string;
  userGradient?: 'aqua-2' | 'brand-aurora' | 'info-flow';
  onSearch?: (query: string) => void;
  onNavigationClick?: (itemId: string) => void;
}

export default function AppLayout({
  children,
  activePage,
  searchPlaceholder = "Search properties, tenants, tickets...",
  notificationCount = 3,
  showThemeToggle = true,
  userName = "Jhon Deo",
  userInitials = "JD",
  userGradient = "aqua-2",
  onSearch,
  onNavigationClick
}: AppLayoutProps) {
  const [searchValue, setSearchValue] = useState('');
  const [isNavigationExpanded, setIsNavigationExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (query: string) => {
    console.log('AppLayout search:', query);
    onSearch?.(query);
  };

  const handleLogoClick = () => {
    // On mobile: open mobile menu overlay
    // On desktop: toggle navigation expansion
    if (window.innerWidth < 640) {
      setIsMobileMenuOpen(true);
    } else {
      setIsNavigationExpanded(!isNavigationExpanded);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigationClick = (itemId: string) => {
    console.log(`AppLayout navigation: ${itemId}`);
    onNavigationClick?.(itemId);
  };

  return (
    <div className="bg-background-default min-h-screen w-full">
      <div className="flex flex-col h-screen">
        {/* Header */}
        <Header 
          variant="responsive"
          searchPlaceholder={searchPlaceholder}
          notificationCount={notificationCount}
          showThemeToggle={showThemeToggle}
          logoGradient="brand-aurora"
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onSearch={handleSearch}
          onLogoClick={handleLogoClick}
        />

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Navigation - Hidden on mobile, visible on larger screens */}
          <div className="mobile-hidden">
            <LeftNavigation 
              activeItem={activePage}
              expanded={isNavigationExpanded}
              userName={userName}
              userInitials={userInitials}
              userGradient={userGradient}
              onItemClick={handleNavigationClick}
            />
          </div>

          {/* Main Content Container with 72px padding on desktop+ */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8 overflow-y-auto pb-18 pt-8 px-18">
            {children}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          />
          <div className="absolute left-0 top-0 h-full w-64 bg-paper-paper-elevation-1 shadow-card-large">
            <LeftNavigation 
              activeItem={activePage}
              expanded={true}
              userName={userName}
              userInitials={userInitials}
              userGradient={userGradient}
              onItemClick={(itemId) => {
                console.log(`Mobile navigation: ${itemId}`);
                closeMobileMenu();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
