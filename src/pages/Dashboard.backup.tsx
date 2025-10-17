import React, { useState } from 'react';
import { getAssetPath } from '../utils/completeAssetMapping';
import Header from '../components/layout/Header';
import LeftNavigation from '../components/layout/LeftNavigation';
import StatCard from '../components/cards/StatCard';
import Button from '../components/forms/Button';
import ProgressBar from '../components/ui/ProgressBar';
import ThemeIcon from '../components/ui/ThemeIcon';

// Asset constants with descriptive names - using complete asset mapping
const loginLogoIcon = getAssetPath('login-logo-icon');           // Header logo
const searchIcon = getAssetPath('search-icon');                  // Search icon
const notificationIcon = getAssetPath('notification-icon');      // Notification bell
const settingsIcon = getAssetPath('settings-icon');              // Settings gear
const themeSwitchIcon = getAssetPath('theme-switch-icon');       // Theme toggle
const dashboardNavIcon = getAssetPath('dashboard-nav-icon');     // Dashboard navigation
const propertiesNavIcon = getAssetPath('properties-nav-icon');   // Properties navigation
const tenantsNavIcon = getAssetPath('tenants-nav-icon');         // Tenants navigation
const maintenanceNavIcon = getAssetPath('maintenance-nav-icon'); // Maintenance navigation
const reportsNavIcon = getAssetPath('reports-nav-icon');         // Reports navigation
const helpNavIcon = getAssetPath('help-nav-icon');               // Help navigation
const analyticsNavIcon = getAssetPath('analytics-nav-icon');     // Analytics navigation
const addPropertyActionIcon = getAssetPath('add-property-action-icon'); // Add property action
const addPropertyButtonIcon = getAssetPath('add-property-button-icon'); // Add property button
const propertyActionsIcon = getAssetPath('property-actions-icon'); // Property actions
const calendarIcon = getAssetPath('calendar-icon');              // Calendar icon
const checkmarkIcon = getAssetPath('checkmark-icon');            // Checkmark icon
const dollarIcon = getAssetPath('dollar-icon');                  // Dollar icon
const dotSeparatorIcon = getAssetPath('dot-separator-icon');     // Dot separator
const dropdownArrowIcon = getAssetPath('dropdown-arrow-icon');   // Dropdown arrow
const settingsNavIcon = getAssetPath('settings-nav-icon');       // Settings navigation

// Correct icon mappings for stat cards using actual hash values
const vacancyCardIcon = getAssetPath('878cd835ab10ca42796d3d46ca1955b32ffb2ff2');        // building-property-icon
const rentCollectionCardIcon = getAssetPath('0f44f729311136017322fe20df2f07dfb5735258');       // dollar-sign-icon
const maintenanceCardIcon = getAssetPath('bd7230e7a66d09f8f2922c1dbe464bf845edafdb');   // maintenance-wrench-icon
const leasesCardIcon = getAssetPath('6d3c0204ac37f038cd091108592cad5b0022f2e9');           // leases-document-icon
const aiEfficiencyCardIcon = getAssetPath('financial-icon');         // chart-graph-icon (using descriptive name)
const trendingUpIcon = getAssetPath('bdfb842fd34b514bce485e4a545244e6ae290405');                // trending-up-streamline-tabler-icon

export default function Dashboard() {
  const [searchValue, setSearchValue] = useState('');
  const [isNavigationExpanded, setIsNavigationExpanded] = useState(false);

  const handleSearch = (query: string) => {
    console.log('Dashboard search:', query);
    // Implement search functionality here
  };

  const handleLogoClick = () => {
    setIsNavigationExpanded(!isNavigationExpanded);
  };

  return (
    <div className="bg-static-white content-stretch flex items-center justify-center relative h-screen w-screen" data-name="Dashboard" data-node-id="225:5071">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="225:5072">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex flex-col items-start relative size-full">
          {/* Header */}
          <Header 
            searchPlaceholder="Search properties, tenants, tickets..."
            notificationCount={3}
            showThemeToggle={true}
            logoGradient="brand-aurora"
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            onSearch={handleSearch}
            onLogoClick={handleLogoClick}
          />

          {/* Main Content */}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Main Content" data-node-id="225:5074">
            <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex items-start relative size-full">
              {/* Left Navigation */}
              <LeftNavigation 
                activeItem="dashboard"
                expanded={isNavigationExpanded}
                userName="Jhon Deo"
                userInitials="JD"
                userGradient="aqua-2"
                onItemClick={(itemId) => console.log(`Dashboard navigation: ${itemId}`)}
              />

              {/* Dashboard Content */}
              <div className="basis-0 box-border content-stretch flex flex-col gap-8 grow h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto pb-18 pt-8 px-18 relative shrink-0" data-name="NewDashboardScreen" data-node-id="225:5076">
                {/* Welcome Section */}
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 246" data-node-id="288:20053">
                  <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0" data-name="Container" data-node-id="225:5078">
                    <p className="font-sans font-bold leading-h2 relative shrink-0 text-text-primary text-h2" data-node-id="225:5079">
                      Welcome back, John
                    </p>
                    <p className="font-sans font-normal leading-base relative shrink-0 text-text-secondary text-base" data-node-id="225:5080">
                      Welcome back, John. Here's what's happening with your properties today.
                    </p>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container" data-node-id="225:5081">
                    <Button
                      variant="secondary"
                      size="sm"
                      icon="add"
                      iconPosition="left"
                      onClick={() => console.log('Quick action clicked')}
                    >
                        Quick Action
                    </Button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="flex gap-4 sm:gap-6 w-full overflow-x-auto" data-name="Stats Cards Grid">
                  {/* Vacancy Card */}
                  <div className="min-w-0 flex-1">
                    <StatCard
                      title="3/10 Vacant Units"
                      subtitle="Vacancy"
                      value="3/10 Vacant Units"
                      icon={vacancyCardIcon}
                      gradient="info-flow"
                      badge={{ text: "70% Occupancy", color: "primary", trend: "up" }}
                    />
                  </div>

                  {/* Rent Collection Card */}
                  <div className="min-w-0 flex-1">
                    <StatCard
                      title="$7,050 / $14,000"
                      subtitle="Rent Collection"
                      value="$7,050 / $14,000"
                      icon={rentCollectionCardIcon}
                      gradient="ai-violet-2"
                      badge={{ text: "50% Pending", color: "error", trend: "down" }}
                    />
                  </div>

                  {/* Maintenance Card */}
                  <div className="min-w-0 flex-1">
                    <StatCard
                      title="2/5 Open Tickets"
                      subtitle="Maintenance"
                      value="2/5 Open Tickets"
                      icon={maintenanceCardIcon}
                      gradient="brand-aurora"
                      badge={{ text: "3 Completed", color: "success", trend: "up" }}
                    />
                  </div>

                  {/* Leases Card */}
                  <div className="min-w-0 flex-1">
                    <StatCard
                      title="In next 2 months"
                      subtitle="Leases"
                      value="In next 2 months"
                      icon={leasesCardIcon}
                      gradient="magenta-pop"
                      badge={{ text: "2 Expiring Soon", color: "warning", trend: "up" }}
                    />
                  </div>

                  {/* AI Efficiency Card */}
                  <div className="min-w-0 flex-1">
                    <StatCard
                      title="500 hours saved month"
                      subtitle="AI Efficiency"
                      value="500 hours saved month"
                      icon={aiEfficiencyCardIcon}
                      gradient="emerald-glow"
                      badge={{ text: "+12.5%", color: "info", trend: "up" }}
                    />
                  </div>
                </div>

                {/* Top Performing Properties Section */}
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 174" data-node-id="288:19169">
                  <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Frame 176" data-node-id="288:19170">
                    <ThemeIcon src={propertiesNavIcon} alt="Properties nav" size="sm" variant="default" />
                    <p className="font-sans font-semibold leading-base not-italic relative shrink-0 text-text-primary text-base" data-node-id="288:19179">
                      Top Performing Properties
                    </p>
                  </div>
                  <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Frame 245" data-node-id="288:19877">
                    <Button
                      variant="secondary"
                      size="sm"
                      icon="calendar"
                      iconPosition="left"
                      onClick={() => console.log('Time filter clicked')}
                    >
                        Last 3 months
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      icon="add"
                      iconPosition="left"
                      onClick={() => console.log('Add property clicked')}
                    >
                        Add Property
                    </Button>
                  </div>
                </div>

                {/* Property Cards Grid */}
                <div className="content-stretch flex gap-6 items-start relative shrink-0 w-full" data-name="Container" data-node-id="288:19246">
                  {/* Property Card 1 */}
                  <div className="bg-static-white border border-overlays-white-inverse-10 border-solid box-border content-stretch flex flex-col gap-4 items-start p-6 relative rounded-xxl shrink-0 w-96 h-66 shadow-card-small" data-name="Card" data-node-id="288:19247">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 157" data-node-id="288:19881">
                      <div className="bg-gradient-brand-aurora content-stretch flex items-center justify-center relative rounded-xl shrink-0 w-10 h-10 shadow-brand-purple-glow" data-name="Container" data-node-id="288:19882">
                        <p className="font-sans font-bold leading-base not-italic relative shrink-0 text-small text-nowrap text-static-white whitespace-pre" data-node-id="288:19897">
                          1
                        </p>
                      </div>
                      <div className="content-stretch flex gap-1 items-center relative shrink-0" data-name="Button" data-node-id="288:19891">
                        <div className="relative shrink-0 w-4 h-4" data-name="Star--Streamline-Tabler-Filled" data-node-id="288:19929">
                          <img alt="" className="block max-w-none size-full" src={checkmarkIcon} />
                        </div>
                        <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-label-small" data-node-id="288:19932">
                          4.8
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="PropertyCard" data-node-id="288:19253">
                      <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full" data-name="Container" data-node-id="288:19254">
                        <p className="font-sans font-semibold leading-base not-italic relative shrink-0 text-text-primary text-base" data-node-id="288:19255">
                          Sunset Apartments
                        </p>
                        <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full" data-name="Paragraph" data-node-id="288:19256">
                          <div className="relative shrink-0 w-3 h-3" data-name="Icon" data-node-id="288:19257">
                            <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                          </div>
                          <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-text-tertiary text-label-small" data-node-id="288:19260">
                            123 Sunset Blvd, Los Angeles, CA
                          </p>
                        </div>
                      </div>
                      <button className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-6 h-6 cursor-pointer" data-name="Button" data-node-id="288:19261">
                        <ThemeIcon src={propertyActionsIcon} alt="Property actions" size="sm" variant="default" />
                      </button>
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 202" data-node-id="288:19266">
                      <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="288:19913">
                        <ThemeIcon src={dollarIcon} alt="Dollar" size="sm" variant="default" />
                        <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-label-small" data-node-id="288:19917">
                          Revenue
                        </p>
                      </div>
                      <p className="font-sans font-bold leading-small not-italic relative shrink-0 text-text-primary text-base" data-node-id="288:19918">
                        $24,580
                      </p>
                    </div>
                    <ProgressBar
                      variant="occupancy"
                      percentage={92}
                      label="Occupancy"
                      value="92%"
                      subtitle="22 of 24 units occupied"
                    />
                  </div>

                  {/* Property Card 2 */}
                  <div className="bg-static-white border border-overlays-white-inverse-10 border-solid box-border content-stretch flex flex-col gap-4 items-start p-6 relative rounded-xxl shrink-0 w-96 h-66 shadow-card-small" data-name="Card" data-node-id="288:19934">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 157" data-node-id="288:19936">
                      <div className="bg-gradient-brand-aurora content-stretch flex items-center justify-center relative rounded-xl shrink-0 w-10 h-10 shadow-brand-purple-glow" data-name="Container" data-node-id="288:19937">
                        <p className="font-sans font-bold leading-base not-italic relative shrink-0 text-small text-nowrap text-static-white whitespace-pre" data-node-id="288:19938">
                          2
                        </p>
                      </div>
                      <div className="content-stretch flex gap-1 items-center relative shrink-0" data-name="Button" data-node-id="288:19939">
                        <div className="relative shrink-0 w-4 h-4" data-name="Star--Streamline-Tabler-Filled" data-node-id="288:19940">
                          <img alt="" className="block max-w-none size-full" src={checkmarkIcon} />
                        </div>
                        <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-label-small" data-node-id="288:19942">
                          4.5
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="PropertyCard" data-node-id="288:19943">
                      <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full" data-name="Container" data-node-id="288:19944">
                        <p className="font-sans font-semibold leading-base not-italic relative shrink-0 text-text-primary text-base" data-node-id="288:19945">
                          Oak Villa Complex
                        </p>
                        <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full" data-name="Paragraph" data-node-id="288:19946">
                          <div className="relative shrink-0 w-3 h-3" data-name="Icon" data-node-id="288:19947">
                            <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                          </div>
                          <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-text-tertiary text-label-small" data-node-id="288:19950">
                            123 Sunset Blvd, Los Angeles, CA
                          </p>
                        </div>
                      </div>
                      <button className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-6 h-6 cursor-pointer" data-name="Button" data-node-id="288:19951">
                        <ThemeIcon src={propertyActionsIcon} alt="Property actions" size="sm" variant="default" />
                      </button>
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 202" data-node-id="288:19956">
                      <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="288:19959">
                        <ThemeIcon src={dollarIcon} alt="Dollar" size="sm" variant="default" />
                        <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-label-small" data-node-id="288:19963">
                          Revenue
                        </p>
                      </div>
                      <p className="font-sans font-bold leading-small not-italic relative shrink-0 text-text-primary text-base" data-node-id="288:19964">
                        $18,240
                      </p>
                    </div>
                    <ProgressBar
                      variant="occupancy"
                      percentage={80}
                      label="Occupancy"
                      value="80%"
                      subtitle="22 of 24 units occupied"
                    />
                  </div>

                  {/* Property Card 3 */}
                  <div className="bg-static-white border border-overlays-white-inverse-10 border-solid box-border content-stretch flex flex-col gap-4 items-start p-6 relative rounded-xxl shrink-0 w-96 h-66 shadow-card-small" data-name="Card" data-node-id="288:20013">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 157" data-node-id="288:20015">
                      <div className="bg-gradient-brand-aurora content-stretch flex items-center justify-center relative rounded-xl shrink-0 w-10 h-10 shadow-brand-purple-glow" data-name="Container" data-node-id="288:20016">
                        <p className="font-sans font-bold leading-base not-italic relative shrink-0 text-small text-nowrap text-static-white whitespace-pre" data-node-id="288:20017">
                          3
                        </p>
                      </div>
                      <div className="content-stretch flex gap-1 items-center relative shrink-0" data-name="Button" data-node-id="288:20018">
                        <div className="relative shrink-0 w-4 h-4" data-name="Star--Streamline-Tabler-Filled" data-node-id="288:20019">
                          <img alt="" className="block max-w-none size-full" src={checkmarkIcon} />
                        </div>
                        <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-label-small" data-node-id="288:20021">
                          4.0
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="PropertyCard" data-node-id="288:20022">
                      <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full" data-name="Container" data-node-id="288:20023">
                        <p className="font-sans font-semibold leading-base not-italic relative shrink-0 text-text-primary text-base" data-node-id="288:20024">
                          Pine Heights
                        </p>
                        <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full" data-name="Paragraph" data-node-id="288:20025">
                          <div className="relative shrink-0 w-3 h-3" data-name="Icon" data-node-id="288:20026">
                            <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                          </div>
                          <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-text-tertiary text-label-small" data-node-id="288:20029">
                            123 Sunset Blvd, Los Angeles, CA
                          </p>
                        </div>
                      </div>
                      <button className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-6 h-6 cursor-pointer" data-name="Button" data-node-id="288:20030">
                        <ThemeIcon src={propertyActionsIcon} alt="Property actions" size="sm" variant="default" />
                      </button>
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 202" data-node-id="288:20035">
                      <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="288:20038">
                        <ThemeIcon src={dollarIcon} alt="Dollar" size="sm" variant="default" />
                        <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-label-small" data-node-id="288:20042">
                          Revenue
                        </p>
                      </div>
                      <p className="font-sans font-bold leading-small not-italic relative shrink-0 text-text-primary text-base" data-node-id="288:20043">
                        $16,720
                      </p>
                    </div>
                    <ProgressBar
                      variant="occupancy"
                      percentage={76}
                      label="Occupancy"
                      value="76%"
                      subtitle="22 of 24 units occupied"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}