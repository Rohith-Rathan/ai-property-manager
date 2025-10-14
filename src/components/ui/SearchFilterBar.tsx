import React, { useState } from 'react';
import ThemeIcon from './ThemeIcon';

interface SearchFilterBarProps {
  searchPlaceholder?: string;
  filterOptions?: Array<{ value: string; label: string }>;
  defaultFilter?: string;
  onSearch?: (query: string) => void;
  onFilterChange?: (filter: string) => void;
  onViewToggle?: (view: 'grid' | 'list') => void;
  defaultView?: 'grid' | 'list';
}

export default function SearchFilterBar({
  searchPlaceholder = "Search properties...",
  filterOptions = [
    { value: 'all', label: 'All Properties' },
    { value: 'apartment', label: 'Apartments' },
    { value: 'individual', label: 'Individual' }
  ],
  defaultFilter = 'all',
  onSearch,
  onFilterChange,
  onViewToggle,
  defaultView = 'list'
}: SearchFilterBarProps) {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(defaultFilter);
  const [currentView, setCurrentView] = useState(defaultView);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch?.(value);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setShowFilterDropdown(false);
    onFilterChange?.(filter);
  };

  const handleViewToggle = (view: 'grid' | 'list') => {
    setCurrentView(view);
    onViewToggle?.(view);
  };

  const selectedFilterLabel = filterOptions.find(option => option.value === selectedFilter)?.label || 'All Properties';

  return (
    <div 
      className="bg-surface-primary border border-overlays-black-10 border-solid box-border content-stretch flex items-center justify-between p-[17px] relative rounded-2xl shrink-0 w-full shadow-card-large" 
      data-name="search" 
      data-node-id="242:7776"
    >
      
      {/* Search Input Section - EXACT FIGMA STRUCTURE WITH DESIGN SYSTEM */}
      <div className="h-9 relative shrink-0" data-name="Container" data-node-id="I242:7776;240:6523">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-9 items-center px-3 py-[10px] relative">
          <div className="relative shrink-0 size-4" data-name="Icon" data-node-id="I242:7776;240:6524">
            <ThemeIcon src="/assets/search-properties-icon.svg" alt="Search" size="sm" color="tertiary" />
          </div>
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="font-normal leading-4 not-italic relative shrink-0 text-text-tertiary text-14 text-nowrap whitespace-pre flex-1 outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Filter and View Toggle Section - EXACT FIGMA STRUCTURE WITH DESIGN SYSTEM */}
      <div className="relative shrink-0" data-name="Filter Container" data-node-id="I242:7776;240:6528">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-4 items-center relative">
          
          {/* Filter Dropdown - EXACT FIGMA STRUCTURE WITH DESIGN SYSTEM */}
          <div className="bg-surface-primary box-border content-stretch flex gap-2 h-9 items-center pl-3 pr-[12.008px] py-0 relative rounded-[10px] shrink-0" data-name="Primitive.button" data-node-id="I242:7776;240:6529">
            <div className="relative shrink-0 size-4" data-name="Icon" data-node-id="I242:7776;240:6530">
              <ThemeIcon src="/assets/filter-icon.svg" alt="Filter" size="sm" color="tertiary" />
            </div>
            <div className="h-5 relative shrink-0 w-[86.523px]" data-name="Primitive.span" data-node-id="I242:7776;240:6532">
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-5 items-center overflow-clip relative rounded-inherit w-[86.523px]">
                <button
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="font-normal leading-4 not-italic relative shrink-0 text-text-tertiary text-14 text-nowrap whitespace-pre"
                >
                  {selectedFilterLabel}
                </button>
              </div>
            </div>
            <div className="relative shrink-0 size-4" data-name="Icon" data-node-id="I242:7776;240:6534">
              <ThemeIcon src="/assets/dropdown-icon.svg" alt="Dropdown" size="sm" color="tertiary" />
            </div>
          </div>

          {/* View Toggle Buttons - EXACT FIGMA STRUCTURE WITH DESIGN SYSTEM */}
          <div className="content-stretch flex gap-2 items-start relative shrink-0" data-name="Container" data-node-id="I242:7776;240:6536">
            {/* Grid View Button - EXACT FIGMA STRUCTURE */}
            <button 
              onClick={() => handleViewToggle('grid')}
              className={`border border-overlays-black-10 border-solid relative rounded-lg shrink-0 size-8 cursor-pointer hover:opacity-80 transition-opacity ${currentView === 'grid' ? 'bg-gradient-to-b from-accent-purple-1 to-accent-blue-1' : 'bg-surface-primary'}`} 
              data-name="Button" 
              data-node-id="I242:7776;240:6537"
            >
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex items-center justify-center relative size-8">
                <div className="relative shrink-0 size-4" data-name="Icon" data-node-id="I242:7776;240:6538">
                  <ThemeIcon 
                    src="/assets/grid-view-icon.svg" 
                    alt="Grid View" 
                    size="sm" 
                    color={currentView === 'grid' ? 'inverse' : 'tertiary'} 
                  />
                </div>
              </div>
            </button>

            {/* List View Button - EXACT FIGMA STRUCTURE */}
            <button 
              onClick={() => handleViewToggle('list')}
              className={`border border-overlays-black-10 border-solid relative rounded-lg shrink-0 size-8 cursor-pointer hover:opacity-80 transition-opacity ${currentView === 'list' ? 'bg-gradient-to-b from-accent-purple-1 to-accent-blue-1' : 'bg-surface-primary'}`} 
              data-name="Button" 
              data-node-id="I242:7776;240:6594"
            >
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex items-center justify-center relative size-8">
                <div className="relative shrink-0 size-4" data-name="Icon" data-node-id="I242:7776;240:6595">
                  <ThemeIcon 
                    src="/assets/list-view-icon.svg" 
                    alt="List View" 
                    size="sm" 
                    color={currentView === 'list' ? 'inverse' : 'tertiary'} 
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Dropdown Menu */}
      {showFilterDropdown && (
        <div className="absolute top-full right-0 mt-2 bg-surface-primary border border-overlays-black-10 rounded-lg shadow-lg z-10 min-w-[200px]">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleFilterChange(option.value)}
              className={`w-full text-left px-4 py-2 text-14 hover:bg-surface-secondary transition-colors ${
                selectedFilter === option.value ? 'bg-surface-secondary text-text-primary' : 'text-text-tertiary'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}