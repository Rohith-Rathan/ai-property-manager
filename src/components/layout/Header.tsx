import React, { useState } from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';
import ThemeIcon from '../ui/ThemeIcon';
import SearchInput from '../ui/SearchInput';
import { useTheme } from '../../contexts/ThemeContext';

// Asset constants
const loginLogoIcon = getAssetPath('login-logo-icon');
const searchIcon = getAssetPath('search-icon');
const notificationIcon = getAssetPath('notification-icon');
const settingsIcon = getAssetPath('settings-icon');
const themeSwitchIcon = getAssetPath('theme-switch-icon');

interface HeaderProps {
  searchPlaceholder?: string;
  notificationCount?: number;
  showThemeToggle?: boolean;
  logoGradient?: 'aqua-2' | 'brand-aurora' | 'info-flow';
  onSearch?: (query: string) => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onLogoClick?: () => void;
  variant?: 'desktop' | 'mobile';
}

export default function Header({ 
  searchPlaceholder = "Search properties, tenants, tickets...",
  notificationCount = 3,
  showThemeToggle = true,
  logoGradient = 'aqua-2',
  onSearch,
  searchValue = '',
  onSearchChange,
  onLogoClick,
  variant = 'desktop'
}: HeaderProps) {
  const [internalSearchValue, setInternalSearchValue] = useState('');
  const { toggleTheme } = useTheme();

  // Use external search value if provided, otherwise use internal state
  const currentSearchValue = searchValue !== undefined ? searchValue : internalSearchValue;
  const handleSearchChange = (value: string) => {
    if (onSearchChange) {
      onSearchChange(value);
    } else {
      setInternalSearchValue(value);
    }
  };
  const getGradientClass = (gradient: string) => {
    switch (gradient) {
      case 'brand-aurora': return 'bg-gradient-brand-aurora';
      case 'info-flow': return 'bg-gradient-info-flow';
      default: return 'bg-gradient-aqua-2';
    }
  };

  // Mobile variant - compact header without search
  if (variant === 'mobile') {
    return (
      <div className="bg-paper-paper-elevation-1 border-b border-overlays-white-inverse-10 border-solid h-20 relative shrink-0 w-full shadow-card-large" data-name="Header Mobile">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex h-20 items-center relative w-full">
          {/* Logo Section */}
          <div className="border-r border-overlays-black-20 border-solid box-border content-stretch flex flex-col h-20 items-center justify-center p-4 relative shrink-0 w-16" data-name="Logo Container">
            <button 
              className={`${getGradientClass(logoGradient)} content-stretch flex items-center justify-center relative rounded-xl shrink-0 w-8 h-8 cursor-pointer hover:opacity-90 transition-opacity duration-200`} 
              data-name="Logo"
              onClick={onLogoClick}
              type="button"
            >
              <ThemeIcon src={loginLogoIcon} alt="Logo" size="sm" variant="white" />
            </button>
          </div>

          {/* Right Side Actions - Mobile */}
          <div className="basis-0 box-border content-stretch flex grow h-full items-center justify-end min-h-px min-w-px px-1 py-2 relative shrink-0" data-name="Actions Container">
            <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Actions">
              {/* Search */}
              <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-8 h-8" data-name="Search Button">
                <ThemeIcon src={searchIcon} alt="Search" size="sm" variant="default" />
              </div>

              {/* Notifications */}
              <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-8 h-8" data-name="Notification Button">
                <ThemeIcon src={notificationIcon} alt="Notifications" size="sm" variant="default" />
                {notificationCount > 0 && (
                  <div className="absolute bg-error-500 left-4 rounded-lg w-5 h-5 -top-1" data-name="Notification Badge">
                    <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-1 items-center justify-center overflow-clip relative rounded-none w-5 h-5">
                      <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-label-small text-nowrap text-white whitespace-pre" data-name="Badge Count">
                        {notificationCount}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Settings */}
              <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-8 h-8" data-name="Settings Button">
                <ThemeIcon src={settingsIcon} alt="Settings" size="sm" variant="default" />
              </div>

              {/* Theme Toggle */}
              {showThemeToggle && (
                <button 
                  className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-lg shrink-0 w-8 h-8 hover:bg-paper-paper-elevation-2 transition-colors duration-200" 
                  data-name="Theme Toggle"
                  onClick={toggleTheme}
                  type="button"
                >
                  <ThemeIcon src={themeSwitchIcon} alt="Theme Toggle" size="sm" variant="default" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop variant - full header with search
  return (
    <div className="bg-paper-paper-elevation-1 border-b border-overlays-white-inverse-10 border-solid h-20 relative shrink-0 w-full shadow-card-large" data-name="Header Desktop">
      <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex h-20 items-center relative w-full">
        {/* Logo Section */}
        <div className="border-r border-overlays-black-20 border-solid box-border content-stretch flex flex-col h-20 items-center justify-center pl-4 pr-4 py-4 relative shrink-0 w-16" data-name="Logo Container">
          <button 
            className={`${getGradientClass(logoGradient)} content-stretch flex items-center justify-center relative rounded-xl shrink-0 w-8 h-8 cursor-pointer hover:opacity-90 transition-opacity duration-200`} 
            data-name="Logo"
            onClick={onLogoClick}
            type="button"
          >
            <ThemeIcon src={loginLogoIcon} alt="Logo" size="sm" variant="white" />
          </button>
        </div>

        {/* Main Header Content */}
        <div className="basis-0 box-border content-stretch flex grow h-full items-center justify-between min-h-px min-w-px px-6 py-2 relative shrink-0" data-name="Header Content">
          {/* Search Bar */}
          <SearchInput
            placeholder={searchPlaceholder}
            value={currentSearchValue}
            onChange={handleSearchChange}
            onSearch={onSearch}
            showClearButton={false}
            className="max-w-sm"
          />

          {/* Right Side Actions */}
          <div className="content-stretch flex gap-4 items-center relative shrink-0" data-name="Actions Container">
            {/* Notifications */}
            <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-8 h-8" data-name="Notification Button">
              <ThemeIcon src={notificationIcon} alt="Notifications" size="sm" variant="default" />
              {notificationCount > 0 && (
                <div className="absolute bg-error-500 left-4 rounded-lg w-5 h-5 -top-1" data-name="Notification Badge">
                  <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-1 items-center justify-center overflow-clip relative rounded-none w-5 h-5">
                    <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-label-small text-nowrap text-white whitespace-pre" data-name="Badge Count">
                      {notificationCount}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Settings */}
            <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-8 h-8" data-name="Settings Button">
              <ThemeIcon src={settingsIcon} alt="Settings" size="sm" variant="default" />
            </div>

            {/* Theme Toggle */}
            {showThemeToggle && (
              <button 
                className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-lg shrink-0 w-8 h-8 hover:bg-paper-paper-elevation-2 transition-colors duration-200" 
                data-name="Theme Toggle"
                onClick={toggleTheme}
                type="button"
              >
                <ThemeIcon src={themeSwitchIcon} alt="Theme Toggle" size="sm" variant="default" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
