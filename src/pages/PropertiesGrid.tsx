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
const settingsNavIcon = getAssetPath('settings-nav-icon');       // Settings navigation
const addPropertyActionIcon = getAssetPath('add-property-action-icon'); // Add property action
const addPropertyButtonIcon = getAssetPath('add-property-button-icon'); // Add property button
const propertyActionsIcon = getAssetPath('property-actions-icon'); // Property actions
const calendarIcon = getAssetPath('calendar-icon');              // Calendar icon
const checkmarkIcon = getAssetPath('checkmark-icon');            // Checkmark icon
const dollarIcon = getAssetPath('dollar-icon');                  // Dollar icon
const dotSeparatorIcon = getAssetPath('dot-separator-icon');     // Dot separator
const dropdownArrowIcon = getAssetPath('dropdown-arrow-icon');   // Dropdown arrow
const editPropertyButtonIcon = getAssetPath('edit-property-button-icon'); // Edit property button
const searchPropertiesIcon = getAssetPath('search-properties-icon');     // Search properties
const filterDropdownIcon = getAssetPath('filter-dropdown-icon');        // Filter dropdown
const gridViewIcon = getAssetPath('grid-view-icon');                    // Grid view
const listViewIcon = getAssetPath('list-view-icon');                    // List view

export default function PropertiesGrid() {
  return (
    <div className="bg-static-white content-stretch flex items-center justify-center relative h-screen w-screen" data-name="Properties & Units" data-node-id="189:7541">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="189:7542">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex flex-col items-start relative size-full">
          {/* Header */}
          <div className="bg-paper-paper-elevation-1 border-b border-overlays-white-inverse-10 border-solid h-20 relative shrink-0 w-full" data-name="Header" data-node-id="189:7543">
            <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex h-20 items-center relative w-full">
              <div className="border-r border-overlays-black-20 border-solid box-border content-stretch flex flex-col h-20 items-center justify-center pl-4 pr-4 py-4 relative shrink-0 w-16" data-name="Container" data-node-id="I189:7543;189:15783">
                <div className="bg-gradient-aqua-2 content-stretch flex items-center justify-center relative rounded-xl shrink-0 w-8 h-8" data-name="Container" data-node-id="I189:7543;189:15784">
                  <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I189:7543;189:15785">
                    <img alt="" className="block max-w-none size-full" src={loginLogoIcon} />
                  </div>
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex grow h-full items-center justify-between min-h-px min-w-px px-6 py-2 relative shrink-0" data-name="Container" data-node-id="I189:7543;189:15793">
                <div className="box-border content-stretch flex gap-2 h-9 items-center px-3 py-3 relative shrink-0 w-full max-w-sm" data-name="Container" data-node-id="I189:7543;189:15794">
                  <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I189:7543;189:15795">
                    <img alt="" className="block max-w-none size-full" src={searchIcon} />
                  </div>
                  <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-secondary text-small text-nowrap tracking-normal whitespace-pre" data-node-id="I189:7543;189:15798">
                    Search properties, tenants, tickets...
                  </p>
                </div>
                <div className="content-stretch flex gap-4 items-center relative shrink-0" data-name="Container" data-node-id="I189:7543;189:15799">
                  <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-8 h-8" data-name="Button" data-node-id="I189:7543;189:15800">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I189:7543;189:15801">
                      <img alt="" className="block max-w-none size-full" src={notificationIcon} />
                    </div>
                    <div className="absolute bg-error-500 left-4 rounded-lg w-5 h-5 -top-1" data-name="Badge" data-node-id="I189:7543;189:15804">
                      <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-1 items-center justify-center overflow-clip relative rounded-[inherit] w-5 h-5">
                        <p className="font-sans font-medium font-medium leading-[16px] not-italic relative shrink-0 text-label-small text-nowrap text-white whitespace-pre" data-node-id="I189:7543;189:15805">
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-8 h-8" data-name="Button" data-node-id="I189:7543;189:15806">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I189:7543;189:15807">
                      <img alt="" className="block max-w-none size-full" src={settingsIcon} />
                    </div>
                  </div>
                  <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-lg shrink-0 w-8 h-8" data-name="Theme Switch Mode" data-node-id="I189:7543;256:4134">
                    <div className="relative shrink-0 w-4 h-4" data-name="Moon--Streamline-Tabler" data-node-id="I189:7543;256:4134;255:6041">
                      <img alt="" className="block max-w-none size-full" src={themeSwitchIcon} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Main Content" data-node-id="189:7544">
            <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex items-start relative size-full">
              {/* Left Navigation */}
              <div className="bg-[rgba(255,255,255,0.8)] border-[0px_1px_0px_0px] border-overlays-white-inverse-10 border-solid box-border content-stretch flex flex-col h-full items-start relative shrink-0 w-16" data-name="Left Navigation" data-node-id="189:7545">
                <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-center min-h-px min-w-px pb-0 pt-[16px] px-4 relative shrink-0 w-[63px]" data-name="Navigation" data-node-id="I189:7545;189:15625">
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-2 h-[32px] items-center justify-center px-3 py-0 relative rounded-xl shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I189:7545;189:15626">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I189:7545;189:15627">
                      <img alt="" className="block max-w-none size-full" src={dashboardNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0.2)] gap-2 h-[32px] items-center justify-center px-3 py-0 relative rounded-xl shrink-0 to-[rgba(43,127,255,0.2)] w-full" data-name="Button" data-node-id="I189:7545;189:15632">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I189:7545;189:15633">
                      <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-2 h-[32px] items-center justify-center px-3 py-0 relative rounded-xl shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I189:7545;189:15641">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I189:7545;189:15642">
                      <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-2 h-[32px] items-center justify-center px-3 py-0 relative rounded-xl shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I189:7545;189:15647">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I189:7545;189:15648">
                      <img alt="" className="block max-w-none size-full" src={maintenanceNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-2 h-[32px] items-center justify-center px-3 py-0 relative rounded-xl shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I189:7545;189:15651">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I189:7545;189:15652">
                      <img alt="" className="block max-w-none size-full" src={reportsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-2 h-[32px] items-center justify-center px-3 py-0 relative rounded-xl shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I189:7545;189:15654">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I189:7545;189:15655">
                      <img alt="" className="block max-w-none size-full" src={analyticsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-2 h-[32px] items-center justify-center px-3 py-0 relative rounded-xl shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I189:7545;189:15673">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I189:7545;189:15674">
                      <img alt="" className="block max-w-none size-full" src={settingsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-2 h-[32px] items-center justify-center px-3 py-0 relative rounded-xl shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I189:7545;189:15669">
                    <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I189:7545;189:15670">
                      <img alt="" className="block max-w-none size-full" src={helpNavIcon} />
                    </div>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col h-[61px] items-center pb-px pl-[16px] pr-[19px] pt-[16px] relative shrink-0 w-[63px]" data-name="Container" data-node-id="I189:7545;189:15677">
                  <div className="content-stretch flex gap-2 items-center relative rounded-[1.67772e+07px] shrink-0" data-name="Button" data-node-id="I189:7545;189:15678">
                    <div className="content-stretch flex items-start overflow-clip relative rounded-[1.67772e+07px] shrink-0 w-8 h-8" data-name="Primitive.span" data-node-id="I189:7545;189:15679">
                      <div className="basis-0 bg-gradient-to-b from-[#00d3f2] grow h-[32px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 to-[#2b7fff]" data-name="Text" data-node-id="I189:7545;189:15680">
                        <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex h-[32px] items-center justify-center relative w-full">
                          <p className="font-sans font-medium font-medium leading-[20px] not-italic relative shrink-0 text-small text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="I189:7545;189:15681">
                            JD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="basis-0 box-border content-stretch flex flex-col gap-[32px] grow h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto pb-[72px] pt-[32px] px-[72px] relative shrink-0" data-name="NewDashboardScreen" data-node-id="189:7546">
                {/* Page Header */}
                <div className="content-center flex flex-wrap gap-4 items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="242:9243">
                  <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0" data-name="Container" data-node-id="242:9244">
                    <p className="font-sans font-bold font-bold leading-[36px] relative shrink-0 text-primary text-h3" data-node-id="242:9245">
                      Properties & Units
                    </p>
                    <p className="font-sans font-normal font-normal leading-[24px] relative shrink-0 text-secondary text-base" data-node-id="242:9246">
                      Welcome back, John. Here's what's happening with your properties today.
                    </p>
                  </div>
                  <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Button Container" data-node-id="242:14211">
                    <button className="border border-overlays-white-inverse-10 border-solid box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative rounded-md shrink-0 cursor-pointer" data-name="Button" data-node-id="242:14212">
                      <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="242:14213">
                        <img alt="" className="block max-w-none size-full" src={editPropertyButtonIcon} />
                      </div>
                      <p className="font-sans font-medium font-medium leading-[22px] not-italic relative shrink-0 text-primary text-small text-nowrap whitespace-pre" data-node-id="242:14216">
                        Edit Property
                      </p>
                    </button>
                    <button className="bg-gradient-to-b box-border content-stretch flex from-[#7c86ff] gap-2 items-center justify-center px-4 py-2 relative rounded-md shrink-0 to-[#2b7fff] cursor-pointer" data-name="Button" data-node-id="242:14217">
                      <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="242:14218">
                        <img alt="" className="block max-w-none size-full" src={addPropertyButtonIcon} />
                      </div>
                      <p className="font-sans font-medium font-medium leading-[22px] not-italic relative shrink-0 text-small text-nowrap text-white whitespace-pre" data-node-id="242:14221">
                        Add Property
                      </p>
                    </button>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="bg-static-white border border-overlays-white-inverse-10 border-solid box-border content-stretch flex items-center justify-between p-[17px] relative rounded-xxl shrink-0 w-full" data-name="search" data-node-id="242:7776">
                  <div className="h-9 relative shrink-0" data-name="Container" data-node-id="I242:7776;240:6523">
                    <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-9 items-center px-3 py-[10px] relative">
                      <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I242:7776;240:6524">
                        <img alt="" className="block max-w-none size-full" src={searchPropertiesIcon} />
                      </div>
                      <p className="font-sans font-normal font-normal leading-[16px] not-italic relative shrink-0 text-tertiary text-small text-nowrap whitespace-pre" data-node-id="I242:7776;240:6527">
                        Search properties...
                      </p>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Filter Container" data-node-id="I242:7776;240:6528">
                    <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-4 items-center relative">
                      <div className="bg-static-white box-border content-stretch flex gap-2 h-9 items-center pl-[12px] pr-[12.008px] py-0 relative rounded-lg shrink-0" data-name="Primitive.button" data-node-id="I242:7776;240:6529">
                        <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I242:7776;240:6530">
                          <img alt="" className="block max-w-none size-full" src={filterDropdownIcon} />
                        </div>
                        <div className="h-5 relative shrink-0 w-[86.523px]" data-name="Primitive.span" data-node-id="I242:7776;240:6532">
                          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-5 items-center overflow-clip relative rounded-[inherit] w-[86.523px]">
                            <p className="font-sans font-normal font-normal leading-[16px] not-italic relative shrink-0 text-tertiary text-small text-nowrap whitespace-pre" data-node-id="I242:7776;240:6533">
                              All Properties
                            </p>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I242:7776;240:6534">
                          <img alt="" className="block max-w-none size-full" src={dropdownArrowIcon} />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-2 items-start relative shrink-0" data-name="Container" data-node-id="I242:7776;240:6536">
                        <button className="border border-overlays-white-inverse-10 border-solid relative rounded-md shrink-0 w-8 h-8 cursor-pointer" data-name="Button" data-node-id="I242:7776;240:6537">
                          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex items-center justify-center relative w-8 h-8">
                            <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I242:7776;240:6538">
                              <img alt="" className="block max-w-none size-full" src={gridViewIcon} />
                            </div>
                          </div>
                        </button>
                        <button className="bg-gradient-to-b from-[#7c86ff] relative rounded-lg shrink-0 w-8 h-8 to-[#2b7fff] cursor-pointer" data-name="Button" data-node-id="I242:7776;240:6594">
                          <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex items-center justify-center relative w-8 h-8">
                            <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="I242:7776;240:6595">
                              <img alt="" className="block max-w-none size-full" src={listViewIcon} />
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Properties Grid */}
                <div className="content-stretch flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="189:7587">
                  {/* Property Card 1 */}
                  <div className="bg-static-white border border-overlays-white-inverse-10 border-solid box-border content-stretch flex flex-col gap-4 items-start p-[24px] relative rounded-xxl shrink-0 w-[394.6666564941406px] h-[362px]" data-name="Frame 133" data-node-id="189:7588">
                    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="Card" data-node-id="189:7589">
                      <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="ImageWithFallback" data-node-id="189:7590">
                        <img alt="" className="block max-w-none size-full object-cover rounded-md" src="/assets/property-image-1.png" />
                        <div className="bg-success-500 box-border content-stretch flex gap-1 items-center justify-center overflow-clip px-[8px] py-1 relative rounded-[9999px] shrink-0" data-name="Badge" data-node-id="189:7591">
                          <p className="font-sans font-normal font-normal leading-[normal] not-italic relative shrink-0 text-label-small text-nowrap text-white whitespace-pre" data-node-id="189:7592">
                            Apartment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="Card" data-node-id="189:7593">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="PropertyCard" data-node-id="189:7594">
                        <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0" data-name="Container" data-node-id="189:7595">
                          <p className="font-sans font-semibold font-semibold leading-[26px] not-italic relative shrink-0 text-primary text-base" data-node-id="189:7596">
                            Sunset Apartments
                          </p>
                          <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full" data-name="Paragraph" data-node-id="189:7597">
                            <div className="relative shrink-0 w-3 h-3" data-name="Icon" data-node-id="189:7598">
                              <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                            </div>
                            <p className="font-sans font-normal font-normal leading-[15px] not-italic relative shrink-0 text-tertiary text-label-small" data-node-id="189:7601">
                              123 Sunset Blvd, Los Angeles, CA
                            </p>
                          </div>
                        </div>
                        <button className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-6 h-6 cursor-pointer" data-name="Button" data-node-id="189:7602">
                          <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="189:7603">
                            <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                          </div>
                        </button>
                      </div>
                      <div className="content-stretch flex gap-4 items-center relative shrink-0 w-full" data-name="Frame 202" data-node-id="240:5785">
                        <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="240:5753">
                          <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="240:5754">
                            <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                          </div>
                          <p className="font-sans font-medium font-medium leading-[15px] not-italic relative shrink-0 text-primary text-label-small" data-node-id="240:5762">
                            16 units
                          </p>
                        </div>
                        <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="240:5763">
                          <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="240:5764">
                            <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                          </div>
                          <p className="font-sans font-medium font-medium leading-[15px] not-italic relative shrink-0 text-primary text-label-small" data-node-id="240:5767">
                            $12,800
                          </p>
                        </div>
                        <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="261:4578">
                          <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="261:4579">
                            <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                          </div>
                          <p className="font-sans font-medium font-medium leading-[15px] not-italic relative shrink-0 text-primary text-label-small" data-node-id="261:4584">
                            01-15-2025
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="PropertyCard" data-node-id="189:7632">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="189:7633">
                          <p className="font-sans font-medium font-medium leading-[15px] not-italic relative shrink-0 text-primary text-label-small" data-node-id="189:7634">
                            Occupancy
                          </p>
                          <p className="font-sans font-bold font-bold leading-[15px] not-italic relative shrink-0 text-success-500 text-label-small" data-node-id="189:7635">
                            92%
                          </p>
                        </div>
                        <div className="bg-gradient-to-r content-stretch flex from-[#00c950] h-[8px] items-start relative rounded-[1.67772e+07px] shrink-0 to-[#00c950] w-full" data-name="Primitive.div" data-node-id="240:5799">
                          <div className="bg-success-500 h-[8px] relative rounded-[1.67772e+07px] shrink-0 w-[92%]" data-name="Container" data-node-id="240:5800" />
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="189:7638">
                          <p className="font-sans font-normal font-normal leading-[15px] not-italic relative shrink-0 text-tertiary text-label-small" data-node-id="189:7639">
                            22 of 24 units occupied
                          </p>
                          <p className="font-sans font-bold font-bold leading-[20px] not-italic relative shrink-0 text-success-500 text-label-small" data-node-id="189:7640">
                            92%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Property Card 2 */}
                  <div className="bg-static-white border border-overlays-white-inverse-10 border-solid box-border content-stretch flex flex-col gap-4 items-start p-[24px] relative rounded-xxl shrink-0 w-[394.66668701171875px] h-[362px]" data-name="Frame 145" data-node-id="240:5802">
                    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="Card" data-node-id="240:5803">
                      <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="ImageWithFallback" data-node-id="240:5804">
                        <img alt="" className="block max-w-none size-full object-cover rounded-md" src="/assets/property-image-2.png" />
                        <div className="bg-warning-500 box-border content-stretch flex gap-1 items-center justify-center overflow-clip px-[8px] py-1 relative rounded-[9999px] shrink-0" data-name="Badge" data-node-id="240:5805">
                          <p className="font-sans font-normal font-normal leading-[normal] not-italic relative shrink-0 text-label-small text-nowrap text-white whitespace-pre" data-node-id="240:5806">
                            Individual
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="Card" data-node-id="240:5807">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="PropertyCard" data-node-id="240:5808">
                        <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0" data-name="Container" data-node-id="240:5809">
                          <p className="font-sans font-semibold font-semibold leading-[26px] not-italic relative shrink-0 text-primary text-base" data-node-id="240:5810">
                            Oak Villa Complex
                          </p>
                          <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full" data-name="Paragraph" data-node-id="240:5811">
                            <div className="relative shrink-0 w-3 h-3" data-name="Icon" data-node-id="240:5812">
                              <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                            </div>
                            <p className="font-sans font-normal font-normal leading-[15px] not-italic relative shrink-0 text-tertiary text-label-small" data-node-id="240:5815">
                              123 Sunset Blvd, Los Angeles, CA
                            </p>
                          </div>
                        </div>
                        <button className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-6 h-6 cursor-pointer" data-name="Button" data-node-id="240:5816">
                          <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="240:5817">
                            <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                          </div>
                        </button>
                      </div>
                      <div className="content-stretch flex gap-4 items-center relative shrink-0 w-full" data-name="Frame 200" data-node-id="261:4586">
                        <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="261:4587">
                          <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="261:4588">
                            <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                          </div>
                          <p className="font-sans font-medium font-medium leading-[15px] not-italic relative shrink-0 text-primary text-label-small" data-node-id="261:4596">
                            16 units
                          </p>
                        </div>
                        <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="261:4597">
                          <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="261:4598">
                            <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                          </div>
                          <p className="font-sans font-medium font-medium leading-[15px] not-italic relative shrink-0 text-primary text-label-small" data-node-id="261:4601">
                            $12,800
                          </p>
                        </div>
                        <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="261:4602">
                          <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="261:4603">
                            <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                          </div>
                          <p className="font-sans font-medium font-medium leading-[15px] not-italic relative shrink-0 text-primary text-label-small" data-node-id="261:4608">
                            01-15-2025
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="PropertyCard" data-node-id="240:5853">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="240:5854">
                          <p className="font-sans font-medium font-medium leading-[15px] not-italic relative shrink-0 text-primary text-label-small" data-node-id="240:5855">
                            Occupancy
                          </p>
                          <p className="font-sans font-bold font-bold leading-[15px] not-italic relative shrink-0 text-warning-500 text-label-small" data-node-id="240:5856">
                            88%
                          </p>
                        </div>
                        <div className="bg-gradient-to-r content-stretch flex from-[#f0b100] h-[8px] items-start relative rounded-[1.67772e+07px] shrink-0 to-[#f0b100] w-full" data-name="Primitive.div" data-node-id="240:5857">
                          <div className="bg-warning-500 h-[8px] relative rounded-[1.67772e+07px] shrink-0 w-[88%]" data-name="Container" data-node-id="240:5858" />
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="240:5859">
                          <p className="font-sans font-normal font-normal leading-[15px] not-italic relative shrink-0 text-tertiary text-label-small" data-node-id="240:5860">
                            17 of 18 units occupied
                          </p>
                          <p className="font-sans font-bold font-bold leading-[20px] not-italic relative shrink-0 text-warning-500 text-label-small" data-node-id="240:5861">
                            88%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Property Card 3 */}
                  <div className="bg-static-white border border-overlays-white-inverse-10 border-solid box-border content-stretch flex flex-col gap-4 items-start p-[24px] relative rounded-xxl shrink-0 w-[394.66668701171875px] h-[362px]" data-name="Frame 146" data-node-id="240:5862">
                    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="Card" data-node-id="240:5863">
                      <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="ImageWithFallback" data-node-id="240:5864">
                        <img alt="" className="block max-w-none size-full object-cover rounded-md" src="/assets/property-image-3.png" />
                        <div className="bg-warning-500 box-border content-stretch flex gap-1 items-center justify-center overflow-clip px-[8px] py-1 relative rounded-[9999px] shrink-0" data-name="Badge" data-node-id="240:5865">
                          <p className="font-sans font-normal font-normal leading-[normal] not-italic relative shrink-0 text-label-small text-nowrap text-white whitespace-pre" data-node-id="240:5866">
                            Individual
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="Card" data-node-id="240:5867">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="PropertyCard" data-node-id="240:5868">
                        <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0" data-name="Container" data-node-id="240:5869">
                          <p className="font-sans font-semibold font-semibold leading-[26px] not-italic relative shrink-0 text-primary text-base" data-node-id="240:5870">
                            Pine Heights
                          </p>
                          <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full" data-name="Paragraph" data-node-id="240:5871">
                            <div className="relative shrink-0 w-3 h-3" data-name="Icon" data-node-id="240:5872">
                              <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                            </div>
                            <p className="font-sans font-normal font-normal leading-[15px] not-italic relative shrink-0 text-tertiary text-label-small" data-node-id="240:5875">
                              123 Sunset Blvd, Los Angeles, CA
                            </p>
                          </div>
                        </div>
                        <button className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-6 h-6 cursor-pointer" data-name="Button" data-node-id="240:5876">
                          <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="240:5877">
                            <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                          </div>
                        </button>
                      </div>
                      <div className="content-stretch flex gap-4 items-center relative shrink-0 w-full" data-name="Frame 200" data-node-id="261:4610">
                        <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="261:4611">
                          <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="261:4612">
                            <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                          </div>
                          <p className="font-sans font-medium font-medium leading-[15px] not-italic relative shrink-0 text-primary text-label-small" data-node-id="261:4620">
                            16 units
                          </p>
                        </div>
                        <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="261:4621">
                          <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="261:4622">
                            <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                          </div>
                          <p className="font-sans font-medium font-medium leading-[15px] not-italic relative shrink-0 text-primary text-label-small" data-node-id="261:4625">
                            $12,800
                          </p>
                        </div>
                        <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Container" data-node-id="261:4626">
                          <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="261:4627">
                            <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                          </div>
                          <p className="font-sans font-medium font-medium leading-[15px] not-italic relative shrink-0 text-primary text-label-small" data-node-id="261:4632">
                            01-15-2025
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="PropertyCard" data-node-id="240:5913">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="240:5914">
                          <p className="font-sans font-medium font-medium leading-[15px] not-italic relative shrink-0 text-primary text-label-small" data-node-id="240:5915">
                            Occupancy
                          </p>
                          <p className="font-sans font-bold font-bold leading-[15px] not-italic relative shrink-0 text-warning-500 text-label-small" data-node-id="240:5916">
                            88%
                          </p>
                        </div>
                        <div className="bg-gradient-to-r content-stretch flex from-[#f0b100] h-[8px] items-start relative rounded-[1.67772e+07px] shrink-0 to-[#f0b100] w-full" data-name="Primitive.div" data-node-id="240:5917">
                          <div className="bg-warning-500 h-[8px] relative rounded-[1.67772e+07px] shrink-0 w-[88%]" data-name="Container" data-node-id="240:5918" />
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="240:5919">
                          <p className="font-sans font-normal font-normal leading-[15px] not-italic relative shrink-0 text-tertiary text-label-small" data-node-id="240:5920">
                            11 of 12 units occupied
                          </p>
                          <p className="font-sans font-bold font-bold leading-[20px] not-italic relative shrink-0 text-warning-500 text-label-small" data-node-id="240:5921">
                            88%
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
    </div>
  );
}
