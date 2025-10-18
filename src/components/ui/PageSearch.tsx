import React, { useState, useEffect } from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';
import ThemeIcon from './ThemeIcon';

// Asset constants
const searchIcon = getAssetPath('search-icon');
const filterIcon = getAssetPath('filter-icon');
const gridViewIcon = getAssetPath('grid-view-icon');
const listViewIcon = getAssetPath('list-view-icon');
const dropdownArrowIcon = getAssetPath('dropdown-arrow-down-icon');

interface PageSearchProps {
  variant?: 'grid' | 'list' | 'mobile' | 'filters';
  title?: string;
  subtitle?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
  onFilter?: (filter: string) => void;
  onViewChange?: (view: 'grid' | 'list') => void;
  // Filter variant props
  filters?: Array<{
    label: string;
    value: string;
    icon?: string;
  }>;
  onFilterChange?: (filterType: string, value: string) => void;
}

export default function PageSearch({
  variant = 'grid',
  title = 'Properties & Units',
  subtitle = 'Manage your property portfolio with detailed unit tracking',
  placeholder = 'Search properties...',
  onSearch,
  onFilter,
  onViewChange,
  filters = [],
  onFilterChange
}: PageSearchProps) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All Properties');
  const [currentView, setCurrentView] = useState<'grid' | 'list'>(
    variant === 'mobile' || variant === 'filters' ? 'grid' : variant
  );
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size and switch to mobile variant automatically
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Determine effective variant - auto-switch to mobile on small screens
  const effectiveVariant = isMobile ? 'mobile' : variant;

  const handleSearch = (query: string) => {
    setSearchValue(query);
    onSearch?.(query);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    onFilter?.(filter);
  };

  const handleViewChange = (view: 'grid' | 'list') => {
    setCurrentView(view);
    onViewChange?.(view);
  };

  // Filters variant - search with multiple filter buttons
  if (effectiveVariant === 'filters') {
    return (
      <div className="bg-white border border-overlays-white-inverse-10 border-solid box-border content-stretch flex items-center justify-between p-4 relative rounded-xxl size-full shadow-card-large" data-name="search">
        {/* Search Input */}
        <div className="h-9 relative shrink-0" data-name="Search Container">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-9 items-center px-3 py-2.5 relative">
            <ThemeIcon src={searchIcon} alt="Search" size="sm" variant="default" />
            <input
              type="text"
              placeholder={placeholder}
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              className="font-sans font-normal leading-4 not-italic relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre bg-transparent border-none outline-none w-full"
              data-name="Search Input"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="relative shrink-0" data-name="Filter Container">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-4 items-center relative">
            {filters.map((filter, index) => (
              <button
                key={index}
                className="bg-white box-border content-stretch flex gap-2 h-9 items-center pl-3 pr-3 py-0 relative rounded-lg shrink-0 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => onFilterChange?.(filter.value, filter.label)}
                data-name="Filter Button"
              >
                {filter.icon && (
                  <ThemeIcon src={filter.icon} alt={filter.label} size="sm" variant="default" />
                )}
                <span className="font-sans font-normal leading-4 not-italic relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre">
                  {filter.label}
                </span>
                <ThemeIcon src={dropdownArrowIcon} alt="Dropdown" size="sm" variant="default" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Mobile variant - simplified search bar
  if (effectiveVariant === 'mobile') {
    return (
      <div className="bg-paper-paper-elevation-1 border border-overlays-white-inverse-10 border-solid box-border content-stretch flex items-center justify-between p-3 relative rounded-xl shrink-0 w-full shadow-card-large" data-name="Mobile Search Bar">
        {/* Search Input - Full Width */}
        <div className="flex-1 relative" data-name="Search Container">
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center px-3 py-2 relative">
            <ThemeIcon src={searchIcon} alt="Search" size="sm" variant="default" />
            <input
              type="text"
              placeholder={placeholder}
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              className="font-sans font-normal leading-small not-italic relative shrink-0 text-tertiary text-small text-nowrap whitespace-pre bg-transparent border-none outline-none flex-1"
              data-name="Search Input"
            />
          </div>
        </div>

        {/* Filter and View Controls */}
        <div className="relative shrink-0 ml-2 flex gap-2" data-name="Controls Container">
          {/* Filter Button - Compact */}
          <button 
            className="bg-paper-paper-elevation-0 border border-overlays-white-inverse-10 border-solid box-border content-stretch flex gap-1 h-9 items-center pl-2 pr-2 py-0 relative rounded-lg shrink-0 cursor-pointer hover:bg-paper-paper-elevation-2 transition-colors duration-200" 
            onClick={() => handleFilterChange('All Properties')} 
            data-name="Filter Button"
          >
            <ThemeIcon src={filterIcon} alt="Filter" size="sm" variant="default" />
            <ThemeIcon src={dropdownArrowIcon} alt="Dropdown" size="sm" variant="default" />
          </button>
          
          {/* View Toggle Buttons */}
          <div className="content-stretch flex gap-1 items-start relative shrink-0" data-name="View Toggle">
            <button 
              className={`relative rounded-lg shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-200 ${currentView === 'grid' ? 'bg-gradient-brand-aurora' : 'bg-paper-paper-elevation-0 border border-overlays-white-inverse-10 border-solid hover:bg-paper-paper-elevation-2'}`}
              data-name="Grid View Button"
              onClick={() => handleViewChange('grid')}
            >
              <ThemeIcon src={gridViewIcon} alt="Grid View" size="sm" variant={currentView === 'grid' ? 'white' : 'default'} />
            </button>
            <button 
              className={`relative rounded-lg shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-200 ${currentView === 'list' ? 'bg-gradient-brand-aurora' : 'bg-paper-paper-elevation-0 border border-overlays-white-inverse-10 border-solid hover:bg-paper-paper-elevation-2'}`}
              data-name="List View Button"
              onClick={() => handleViewChange('list')}
            >
              <ThemeIcon src={listViewIcon} alt="List View" size="sm" variant={currentView === 'list' ? 'white' : 'default'} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop variant - full search bar with view toggle
  return (
    <div className="bg-paper-paper-elevation-1 border border-overlays-white-inverse-10 border-solid box-border content-stretch flex items-center justify-between p-4 relative rounded-xxl shrink-0 w-full shadow-card-large" data-name="Search Filter Bar">
      {/* Search Input */}
      <div className="h-9 relative shrink-0" data-name="Search Container">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-9 items-center px-3 py-2.5 relative">
          <ThemeIcon src={searchIcon} alt="Search" size="sm" variant="default" />
          <input
            type="text"
            placeholder={placeholder}
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            className="font-sans font-normal leading-small not-italic relative shrink-0 text-tertiary text-small text-nowrap whitespace-pre bg-transparent border-none outline-none w-full"
            data-name="Search Input"
          />
        </div>
      </div>

      {/* Filter and View Controls */}
      <div className="relative shrink-0" data-name="Filter Container">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-4 items-center relative">
          {/* Filter Dropdown */}
          <div className="bg-paper-paper-elevation-0 border border-overlays-white-inverse-10 border-solid box-border content-stretch flex gap-2 h-9 items-center pl-3 pr-3 py-0 relative rounded-lg shrink-0 cursor-pointer hover:bg-paper-paper-elevation-2 transition-colors duration-200" onClick={() => handleFilterChange('All Properties')} data-name="Filter Dropdown">
            <ThemeIcon src={filterIcon} alt="Filter" size="sm" variant="default" />
            <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-tertiary text-small text-nowrap whitespace-pre" data-name="Filter Label">
              {selectedFilter}
            </p>
            <ThemeIcon src={dropdownArrowIcon} alt="Dropdown" size="sm" variant="default" />
          </div>
          
          {/* View Toggle Buttons */}
          <div className="content-stretch flex gap-2 items-start relative shrink-0" data-name="View Toggle">
            <button 
              className={`relative rounded-lg shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-200 ${currentView === 'grid' ? 'bg-gradient-brand-aurora' : 'bg-paper-paper-elevation-0 border border-overlays-white-inverse-10 border-solid hover:bg-paper-paper-elevation-2'}`}
              data-name="Grid View Button"
              onClick={() => handleViewChange('grid')}
            >
              <ThemeIcon src={gridViewIcon} alt="Grid View" size="sm" variant={currentView === 'grid' ? 'white' : 'default'} />
            </button>
            <button 
              className={`relative rounded-lg shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-200 ${currentView === 'list' ? 'bg-gradient-brand-aurora' : 'bg-paper-paper-elevation-0 border border-overlays-white-inverse-10 border-solid hover:bg-paper-paper-elevation-2'}`}
              data-name="List View Button"
              onClick={() => handleViewChange('list')}
            >
              <ThemeIcon src={listViewIcon} alt="List View" size="sm" variant={currentView === 'list' ? 'white' : 'default'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
