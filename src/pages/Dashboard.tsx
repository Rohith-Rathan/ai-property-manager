import React from 'react';
import { getAssetPath } from '../utils/completeAssetMapping';

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
const trendingUpIcon = getAssetPath('570562bdab185d048f5ac2c0767b4b5fb79062af');                // chevron-up-icon

export default function Dashboard() {
  return (
    <div className="bg-static-white content-stretch flex items-center justify-center relative h-screen w-screen" data-name="Dashboard" data-node-id="225:5071">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="225:5072">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex flex-col items-start relative size-full">
          {/* Header */}
          <div className="bg-paper-paper-elevation-1 border-b border-overlays-white-inverse-10 border-solid box-border content-stretch flex items-center relative size-full h-18 relative shrink-0 w-full" data-name="Header" data-node-id="225:5073">
            <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex h-18 items-center relative w-full">
              <div className="border-r border-overlays-black-20 border-solid box-border content-stretch flex flex-col h-18 items-center justify-center pl-4 pr-5 py-4 relative shrink-0 w-16" data-name="Container" data-node-id="I225:5073;189:15783">
                <div className="bg-gradient-brand-aurora content-stretch flex items-center justify-center relative rounded-xl shrink-0 w-8 h-8" data-name="Container" data-node-id="I225:5073;189:15784">
                  <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I225:5073;189:15785">
                    <img alt="" className="block max-w-none size-full" src={loginLogoIcon} />
                  </div>
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex grow h-full items-center justify-between min-h-px min-w-px px-6 py-2 relative shrink-0" data-name="Container" data-node-id="I225:5073;189:15793">
                <div className="box-border content-stretch flex gap-2 h-9 items-center px-3 py-3 relative shrink-0 w-full max-w-sm" data-name="Container" data-node-id="I225:5073;189:15794">
                  <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I225:5073;189:15795">
                    <img alt="" className="block max-w-none size-full" src={searchIcon} />
                  </div>
                  <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-text-secondary text-small text-nowrap tracking-normal whitespace-pre" data-node-id="I225:5073;189:15798">
                    Search properties, tenants, tickets...
                  </p>
                </div>
                <div className="content-stretch flex gap-4 items-center relative shrink-0" data-name="Container" data-node-id="I225:5073;189:15799">
                  <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-8 h-8" data-name="Button" data-node-id="I225:5073;189:15800">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I225:5073;189:15801">
                      <img alt="" className="block max-w-none size-full" src={notificationIcon} />
                    </div>
                    <div className="absolute bg-error-500 left-4 rounded-lg w-5 h-5 -top-1" data-name="Badge" data-node-id="I225:5073;189:15804">
                      <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-1 items-center justify-center overflow-clip relative rounded-inherit w-5 h-5">
                        <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-label-small text-nowrap text-static-white whitespace-pre" data-node-id="I225:5073;189:15805">
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-8 h-8" data-name="Button" data-node-id="I225:5073;189:15806">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I225:5073;189:15807">
                      <img alt="" className="block max-w-none size-full" src={settingsIcon} />
                    </div>
                  </div>
                  <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-lg shrink-0 w-8 h-8" data-name="Theme Switch Mode" data-node-id="I225:5073;256:4134">
                    <div className="relative shrink-0 w-4 h-4" data-name="Moon--Streamline-Tabler" data-node-id="I225:5073;256:4134;255:6041">
                      <img alt="" className="block max-w-none size-full" src={themeSwitchIcon} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Main Content" data-node-id="225:5074">
            <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex items-start relative size-full">
              {/* Left Navigation */}
              <div className="bg-paper-paper-elevation-1 border-r border-overlays-white-inverse-10 box-border content-stretch flex flex-col h-full items-start relative shrink-0 w-16" data-name="Left Navigation" data-node-id="225:5075">
                <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-center min-h-px min-w-px pb-0 pt-4 px-4 relative shrink-0 w-16" data-name="Navigation" data-node-id="I225:5075;189:15625">
                  <div className="bg-gradient-to-b box-border content-stretch flex from-overlays-primary-20 gap-2 h-8 items-center justify-center px-3 py-0 relative rounded-xl shrink-0 to-overlays-info-20 w-full" data-name="Button" data-node-id="I225:5075;189:15626">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I225:5075;189:15627">
                      <img alt="" className="block max-w-none size-full" src={dashboardNavIcon} />
                    </div>
                  </div>
                  <div className="bg-transparent box-border content-stretch flex gap-2 h-8 items-center justify-center px-3 py-0 relative rounded-xl shrink-0 w-full" data-name="Button" data-node-id="I225:5075;189:15632">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I225:5075;189:15633">
                      <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                    </div>
                  </div>
                  <div className="bg-transparent box-border content-stretch flex gap-2 h-8 items-center justify-center px-3 py-0 relative rounded-xl shrink-0 w-full" data-name="Button" data-node-id="I225:5075;189:15641">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I225:5075;189:15642">
                      <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-transparent box-border content-stretch flex gap-2 h-8 items-center justify-center px-3 py-0 relative rounded-xl shrink-0 w-full" data-name="Button" data-node-id="I225:5075;189:15647">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I225:5075;189:15648">
                      <img alt="" className="block max-w-none size-full" src={maintenanceNavIcon} />
                    </div>
                  </div>
                  <div className="bg-transparent box-border content-stretch flex gap-2 h-8 items-center justify-center px-3 py-0 relative rounded-xl shrink-0 w-full" data-name="Button" data-node-id="I225:5075;189:15651">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I225:5075;189:15652">
                      <img alt="" className="block max-w-none size-full" src={reportsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-transparent box-border content-stretch flex gap-2 h-8 items-center justify-center px-3 py-0 relative rounded-xl shrink-0 w-full" data-name="Button" data-node-id="I225:5075;189:15654">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I225:5075;189:15655">
                      <img alt="" className="block max-w-none size-full" src={analyticsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-transparent box-border content-stretch flex gap-2 h-8 items-center justify-center px-3 py-0 relative rounded-xl shrink-0 w-full" data-name="Button" data-node-id="I225:5075;189:15673">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I225:5075;189:15674">
                      <img alt="" className="block max-w-none size-full" src={settingsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-transparent box-border content-stretch flex gap-2 h-8 items-center justify-center px-3 py-0 relative rounded-xl shrink-0 w-full" data-name="Button" data-node-id="I225:5075;189:15669">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I225:5075;189:15670">
                      <img alt="" className="block max-w-none size-full" src={helpNavIcon} />
                    </div>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col h-16 items-center pb-px pl-4 pr-5 pt-4 relative shrink-0 w-16" data-name="Container" data-node-id="I225:5075;189:15677">
                  <div className="content-stretch flex gap-2 items-center relative rounded-full shrink-0" data-name="Button" data-node-id="I225:5075;189:15678">
                    <div className="content-stretch flex items-start overflow-clip relative rounded-full shrink-0 w-8 h-8" data-name="Primitive.span" data-node-id="I225:5075;189:15679">
                      <div className="basis-0 bg-gradient-aqua-2 grow h-8 min-h-px min-w-px relative rounded-full shrink-0" data-name="Text" data-node-id="I225:5075;189:15680">
                        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex h-8 items-center justify-center relative w-full">
                          <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-small text-nowrap text-static-white tracking-normal whitespace-pre" data-node-id="I225:5075;189:15681">
                            JD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                    <button className="border border-overlays-white-inverse-10 border-solid box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative rounded-lg shrink-0 cursor-pointer" data-name="Button" data-node-id="225:5089">
                      <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="225:5090">
                        <img alt="" className="block max-w-none size-full" src={addPropertyActionIcon} />
                      </div>
                      <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-small text-nowrap whitespace-pre" data-node-id="225:5093">
                        Quick Action
                      </p>
                      <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="289:20140">
                        <img alt="" className="block max-w-none size-full" src={dropdownArrowIcon} />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="content-stretch flex gap-6 items-start relative shrink-0 w-full" data-name="Frame 178" data-node-id="225:5599">
                  {/* Vacancy Card */}
                  <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] shrink-0 w-[227.1999969482422px] h-[238px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)]" data-name="Card" data-node-id="225:5600">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 157" data-node-id="225:5601">
                      <div className="bg-gradient-to-l box-border content-stretch flex from-[#00d3f2] items-center justify-center relative rounded-[16px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)] shrink-0 size-[48px] to-[#2b7fff]" data-name="Container" data-node-id="225:5602">
                        <div className="relative shrink-0 size-[24px]" data-name="Icon" data-node-id="225:5603">
                          <img alt="" className="block max-w-none size-full" src={vacancyCardIcon} />
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[24px]" data-name="Button" data-node-id="225:5611">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="225:5612">
                          <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Frame 173" data-node-id="225:5616">
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="225:5617">
                        3/10 Vacant Units
                      </p>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal h-[22px] leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="225:5618">
                        Vacancy
                      </p>
                    </div>
                    <div className="bg-[rgba(97,95,255,0.2)] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Text" data-node-id="225:5619">
                      <div className="flex items-center justify-center relative shrink-0">
                        <div className="flex-none rotate-[180deg]">
                          <div className="relative size-[16px]" data-name="Trending-Up--Streamline-Tabler" data-node-id="225:5620">
                            <img alt="" className="block max-w-none size-full" src={trendingUpIcon} />
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1f1eb3] text-[12px] text-nowrap whitespace-pre" data-node-id="225:5623">
                        70% Occupancy
                      </p>
                    </div>
                  </div>

                  {/* Rent Collection Card */}
                  <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] shrink-0 w-[227.1999969482422px] h-[238px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)]" data-name="Card" data-node-id="225:5624">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 157" data-node-id="225:5625">
                      <div className="bg-gradient-to-r box-border content-stretch flex from-[#ad46ff] items-center justify-center relative rounded-[16px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)] shrink-0 size-[48px] to-[#c27aff]" data-name="Container" data-node-id="225:5626">
                        <div className="relative shrink-0 size-[24px]" data-name="Icon" data-node-id="225:5627">
                          <img alt="" className="block max-w-none size-full" src={rentCollectionCardIcon} />
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[24px]" data-name="Button" data-node-id="225:5630">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="225:5631">
                          <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Frame 173" data-node-id="225:5635">
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="225:5636">
                        $7,050 / $14,000
                      </p>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal h-[22px] leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="225:5637">
                        Rent Collection
                      </p>
                    </div>
                    <div className="bg-[rgba(251,44,54,0.2)] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Text" data-node-id="225:5638">
                      <div className="flex items-center justify-center relative shrink-0">
                        <div className="flex-none rotate-[180deg]">
                          <div className="relative size-[16px]" data-name="Trending-Up--Streamline-Tabler" data-node-id="225:5639">
                            <img alt="" className="block max-w-none size-full" src={trendingUpIcon} />
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#921016] text-[12px] text-nowrap whitespace-pre" data-node-id="225:5642">
                        50% Pending
                      </p>
                    </div>
                  </div>

                  {/* Maintenance Card */}
                  <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] shrink-0 w-[227.1999969482422px] h-[238px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)]" data-name="Card" data-node-id="225:5643">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 157" data-node-id="225:5644">
                      <div className="bg-gradient-to-r box-border content-stretch flex from-[#2b7fff] items-center justify-center relative rounded-[16px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)] shrink-0 size-[48px] to-[#7c86ff]" data-name="Container" data-node-id="225:5645">
                        <div className="relative shrink-0 size-[24px]" data-name="Icon" data-node-id="225:5646">
                          <img alt="" className="block max-w-none size-full" src={maintenanceCardIcon} />
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[24px]" data-name="Button" data-node-id="225:5648">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="225:5649">
                          <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Frame 173" data-node-id="225:5653">
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="225:5654">
                        2/5 Open Tickets
                      </p>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal h-[22px] leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="225:5655">
                        Maintenance
                      </p>
                    </div>
                    <div className="bg-[rgba(0,201,80,0.2)] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Text" data-node-id="225:5656">
                      <div className="relative shrink-0 size-[16px]" data-name="Trending-Up--Streamline-Tabler" data-node-id="225:5657">
                        <img alt="" className="block max-w-none size-full" src={trendingUpIcon} />
                      </div>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#006631] text-[12px] text-nowrap whitespace-pre" data-node-id="225:5660">
                        3 Completed
                      </p>
                    </div>
                  </div>

                  {/* Leases Card */}
                  <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] shrink-0 w-[227.19998168945312px] h-[238px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)]" data-name="Card" data-node-id="225:5661">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 157" data-node-id="225:5662">
                      <div className="bg-gradient-to-r box-border content-stretch flex from-[#e60076] items-center justify-center relative rounded-[16px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)] shrink-0 size-[48px] to-[#ff9a9e]" data-name="Container" data-node-id="225:5663">
                        <div className="relative shrink-0 size-[24px]" data-name="Icon" data-node-id="225:5664">
                          <img alt="" className="block max-w-none size-full" src={leasesCardIcon} />
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[24px]" data-name="Button" data-node-id="225:5670">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="225:5671">
                          <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Frame 173" data-node-id="225:5675">
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="225:5676">
                        In next 2 months
                      </p>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal h-[22px] leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="225:5677">
                        Leases
                      </p>
                    </div>
                    <div className="bg-[rgba(240,177,0,0.2)] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Text" data-node-id="225:5678">
                      <div className="relative shrink-0 size-[16px]" data-name="Trending-Up--Streamline-Tabler" data-node-id="225:5679">
                        <img alt="" className="block max-w-none size-full" src={trendingUpIcon} />
                      </div>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#996800] text-[12px] text-nowrap whitespace-pre" data-node-id="225:5682">
                        2 Expiring Soon
                      </p>
                    </div>
                  </div>

                  {/* AI Efficiency Card */}
                  <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] shrink-0 w-[227.19998168945312px] h-[238px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)]" data-name="Card" data-node-id="225:5683">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 157" data-node-id="225:5684">
                      <div className="bg-gradient-to-r box-border content-stretch flex from-[#008236] items-center justify-center relative rounded-[16px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)] shrink-0 size-[48px] to-[#05df72]" data-name="Container" data-node-id="225:5685">
                        <div className="relative shrink-0 size-[24px]" data-name="Icon" data-node-id="225:5686">
                          <img alt="" className="block max-w-none size-full" src={aiEfficiencyCardIcon} />
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[24px]" data-name="Button" data-node-id="225:5693">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="225:5694">
                          <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Frame 173" data-node-id="225:5698">
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full whitespace-pre-wrap" data-node-id="225:5699">
                        500 hours saved month
                      </p>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal h-[22px] leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="225:5700">
                        AI Efficiency
                      </p>
                    </div>
                    <div className="bg-[rgba(0,211,242,0.2)] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Text" data-node-id="225:5701">
                      <div className="relative shrink-0 size-[16px]" data-name="Trending-Up--Streamline-Tabler" data-node-id="225:5702">
                        <img alt="" className="block max-w-none size-full" src={trendingUpIcon} />
                      </div>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0076ad] text-[12px] text-nowrap whitespace-pre" data-node-id="225:5705">
                        +12.5%
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top Performing Properties Section */}
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 174" data-node-id="288:19169">
                  <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Frame 176" data-node-id="288:19170">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="288:19171">
                      <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                    </div>
                    <p className="font-sans font-semibold leading-base not-italic relative shrink-0 text-text-primary text-base" data-node-id="288:19179">
                      Top Performing Properties
                    </p>
                  </div>
                  <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Frame 245" data-node-id="288:19877">
                    <button className="border border-overlays-white-inverse-10 border-solid box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative rounded-lg shrink-0 cursor-pointer" data-name="Button" data-node-id="288:19869">
                      <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="288:19870">
                        <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                      </div>
                      <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-small text-nowrap whitespace-pre" data-node-id="288:19875">
                        Last 3 months
                      </p>
                      <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="288:19878">
                        <img alt="" className="block max-w-none size-full" src={dropdownArrowIcon} />
                      </div>
                    </button>
                    <button className="bg-gradient-brand-aurora box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative rounded-lg shrink-0 cursor-pointer" data-name="Button" data-node-id="288:19180">
                      <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="288:19181">
                        <img alt="" className="block max-w-none size-full" src={addPropertyButtonIcon} />
                      </div>
                      <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-small text-nowrap text-static-white whitespace-pre" data-node-id="288:19184">
                        Add Property
                      </p>
                    </button>
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
                        <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="288:19262">
                          <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                        </div>
                      </button>
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 202" data-node-id="288:19266">
                      <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="288:19913">
                        <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="288:19914">
                          <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                        </div>
                        <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-label-small" data-node-id="288:19917">
                          Revenue
                        </p>
                      </div>
                      <p className="font-sans font-bold leading-small not-italic relative shrink-0 text-text-primary text-base" data-node-id="288:19918">
                        $24,580
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="PropertyCard" data-node-id="288:19290">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="288:19291">
                        <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-label-small" data-node-id="288:19292">
                          Occupancy
                        </p>
                        <p className="font-sans font-bold leading-small not-italic relative shrink-0 text-success-500 text-label-small" data-node-id="288:19293">
                          92%
                        </p>
                      </div>
                      <div className="bg-gradient-to-r content-stretch flex from-overlays-primary-20 h-2 items-start relative rounded-full shrink-0 to-overlays-info-20 w-full" data-name="Primitive.div" data-node-id="288:19294">
                        <div className="absolute bg-gradient-to-b from-accent-purple h-2 left-0 to-accent-blue top-0 w-[92%]" data-name="Container" data-node-id="288:19295" />
                      </div>
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="288:19296">
                        <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-text-tertiary text-label-small" data-node-id="288:19297">
                          22 of 24 units occupied
                        </p>
                        <p className="font-sans font-bold leading-small not-italic relative shrink-0 text-success-500 text-label-small" data-node-id="288:19298">
                          92%
                        </p>
                      </div>
                    </div>
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
                        <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="288:19952">
                          <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                        </div>
                      </button>
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 202" data-node-id="288:19956">
                      <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="288:19959">
                        <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="288:19960">
                          <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                        </div>
                        <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-label-small" data-node-id="288:19963">
                          Revenue
                        </p>
                      </div>
                      <p className="font-sans font-bold leading-small not-italic relative shrink-0 text-text-primary text-base" data-node-id="288:19964">
                        $18,240
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="PropertyCard" data-node-id="288:19965">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="288:19966">
                        <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-label-small" data-node-id="288:19967">
                          Occupancy
                        </p>
                        <p className="font-sans font-bold leading-small not-italic relative shrink-0 text-warning-500 text-label-small" data-node-id="288:19968">
                          80%
                        </p>
                      </div>
                      <div className="bg-gradient-to-r content-stretch flex from-overlays-primary-20 h-2 items-start relative rounded-full shrink-0 to-overlays-info-20 w-full" data-name="Primitive.div" data-node-id="288:19969">
                        <div className="absolute bg-gradient-to-b from-accent-purple h-2 left-0 to-accent-blue top-0 w-[80%]" data-name="Container" data-node-id="288:19970" />
                      </div>
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="288:19971">
                        <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-text-tertiary text-label-small" data-node-id="288:19972">
                          22 of 24 units occupied
                        </p>
                        <p className="font-sans font-bold leading-small not-italic relative shrink-0 text-warning-500 text-label-small" data-node-id="288:19973">
                          80%
                        </p>
                      </div>
                    </div>
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
                        <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="288:20031">
                          <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                        </div>
                      </button>
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame 202" data-node-id="288:20035">
                      <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="288:20038">
                        <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="288:20039">
                          <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                        </div>
                        <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-label-small" data-node-id="288:20042">
                          Revenue
                        </p>
                      </div>
                      <p className="font-sans font-bold leading-small not-italic relative shrink-0 text-text-primary text-base" data-node-id="288:20043">
                        $16,720
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="PropertyCard" data-node-id="288:20044">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="288:20045">
                        <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-text-primary text-label-small" data-node-id="288:20046">
                          Occupancy
                        </p>
                        <p className="font-sans font-bold leading-small not-italic relative shrink-0 text-error-500 text-label-small" data-node-id="288:20047">
                          76%
                        </p>
                      </div>
                      <div className="bg-gradient-to-r content-stretch flex from-overlays-primary-20 h-2 items-start relative rounded-full shrink-0 to-overlays-info-20 w-full" data-name="Primitive.div" data-node-id="288:20048">
                        <div className="absolute bg-gradient-to-b from-accent-purple h-2 left-0 to-accent-blue top-0 w-[76%]" data-name="Container" data-node-id="288:20049" />
                      </div>
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="288:20050">
                        <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-text-tertiary text-label-small" data-node-id="288:20051">
                          22 of 24 units occupied
                        </p>
                        <p className="font-sans font-bold leading-small not-italic relative shrink-0 text-error-500 text-label-small" data-node-id="288:20052">
                          76%
                        </p>
                      </div>
                    </div>
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