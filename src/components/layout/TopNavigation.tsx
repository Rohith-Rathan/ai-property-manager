import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeIcon from '../ui/ThemeIcon';

interface TopNavigationProps {
  className?: string;
}

export default function TopNavigation({ className = '' }: TopNavigationProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 flex items-center h-18 backdrop-blur-sm ${className}`}>
      {/* Left side with logo */}
      <div className="border-r border-gray-200 dark:border-gray-700 flex items-center justify-center w-16 h-18 px-4 py-4">
        <div className="bg-gradient-to-b from-purple-500 to-blue-600 rounded-xl w-8 h-8 flex items-center justify-center">
          <ThemeIcon 
            src="/assets/logo.svg" 
            alt="Logo" 
            size="sm"
            themeAware={false}
          />
        </div>
      </div>
      
      {/* Right side with search and actions */}
      <div className="flex-1 flex items-center justify-between px-6 py-2">
        {/* Search bar */}
        <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2 w-80">
          <ThemeIcon 
            src="/assets/search-icon.svg" 
            alt="Search" 
            size="sm"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">Search properties, tenants, tickets...</p>
        </div>
        
        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <ThemeIcon 
              src="/assets/notification-icon.svg" 
              alt="Notifications" 
              size="sm"
            />
            <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
              <span className="text-xs text-white font-medium">3</span>
            </div>
          </div>
          
          {/* Settings */}
          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <ThemeIcon 
              src="/assets/settings-icon.svg" 
              alt="Settings" 
              size="sm"
            />
          </div>
          
          {/* Theme toggle */}
          <div 
            onClick={toggleTheme}
            className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
