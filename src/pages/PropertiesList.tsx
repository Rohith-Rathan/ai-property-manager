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

export default function PropertiesList() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative h-screen w-screen" data-name="Properties & Units" data-node-id="242:6750">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="242:6751">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-full">
          {/* Header */}
          <div className="bg-[rgba(255,255,255,0.8)] border-[0px_0px_1px] border-[rgba(10,18,32,0.1)] border-solid h-[72px] relative shrink-0 w-full" data-name="Header" data-node-id="242:6752">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-center relative w-full">
              <div className="border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.2)] border-solid box-border content-stretch flex flex-col h-[72px] items-center justify-center pl-[16px] pr-[19px] py-[16px] relative shrink-0 w-[64px]" data-name="Container" data-node-id="I242:6752;189:15783">
                <div className="bg-gradient-to-b content-stretch flex from-[#7c86ff] items-center justify-center relative rounded-[12px] shrink-0 size-[32px] to-[#2b7fff]" data-name="Container" data-node-id="I242:6752;189:15784">
                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6752;189:15785">
                    <img alt="" className="block max-w-none size-full" src={loginLogoIcon} />
                  </div>
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex grow h-full items-center justify-between min-h-px min-w-px px-[24px] py-[8px] relative shrink-0" data-name="Container" data-node-id="I242:6752;189:15793">
                <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[10px] relative shrink-0 w-[320px]" data-name="Container" data-node-id="I242:6752;189:15794">
                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6752;189:15795">
                    <img alt="" className="block max-w-none size-full" src={searchIcon} />
                  </div>
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="I242:6752;189:15798">
                    Search properties, tenants, tickets...
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="I242:6752;189:15799">
                  <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="I242:6752;189:15800">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6752;189:15801">
                      <img alt="" className="block max-w-none size-full" src={notificationIcon} />
                    </div>
                    <div className="absolute bg-[#fb2c36] left-[17px] rounded-[10px] size-[20px] top-[-4px]" data-name="Badge" data-node-id="I242:6752;189:15804">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip relative rounded-[inherit] size-[20px]">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="I242:6752;189:15805">
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="I242:6752;189:15806">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6752;189:15807">
                      <img alt="" className="block max-w-none size-full" src={settingsIcon} />
                    </div>
                  </div>
                  <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-[10px] shrink-0 size-[32px]" data-name="Theme Switch Mode" data-node-id="I242:6752;256:4134">
                    <div className="relative shrink-0 size-[16px]" data-name="Moon--Streamline-Tabler" data-node-id="I242:6752;256:4134;255:6041">
                      <img alt="" className="block max-w-none size-full" src={themeSwitchIcon} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Main Content" data-node-id="242:6753">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative size-full">
              {/* Left Navigation */}
              <div className="bg-[rgba(255,255,255,0.8)] border-[0px_1px_0px_0px] border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col h-full items-start relative shrink-0 w-[64px]" data-name="Left Navigation" data-node-id="242:6754">
                <div className="basis-0 box-border content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px pb-0 pt-[16px] px-[16px] relative shrink-0 w-[63px]" data-name="Navigation" data-node-id="I242:6754;189:15625">
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:6754;189:15626">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6754;189:15627">
                      <img alt="" className="block max-w-none size-full" src={dashboardNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0.2)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0.2)] w-full" data-name="Button" data-node-id="I242:6754;189:15632">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6754;189:15633">
                      <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:6754;189:15641">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6754;189:15642">
                      <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:6754;189:15647">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6754;189:15648">
                      <img alt="" className="block max-w-none size-full" src={maintenanceNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:6754;189:15651">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6754;189:15652">
                      <img alt="" className="block max-w-none size-full" src={reportsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:6754;189:15654">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6754;189:15655">
                      <img alt="" className="block max-w-none size-full" src={analyticsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:6754;189:15673">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6754;189:15674">
                      <img alt="" className="block max-w-none size-full" src={settingsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:6754;189:15669">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6754;189:15670">
                      <img alt="" className="block max-w-none size-full" src={helpNavIcon} />
                    </div>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col h-[61px] items-center pb-px pl-[16px] pr-[19px] pt-[16px] relative shrink-0 w-[63px]" data-name="Container" data-node-id="I242:6754;189:15677">
                  <div className="content-stretch flex gap-[8px] items-center relative rounded-[1.67772e+07px] shrink-0" data-name="Button" data-node-id="I242:6754;189:15678">
                    <div className="content-stretch flex items-start overflow-clip relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Primitive.span" data-node-id="I242:6754;189:15679">
                      <div className="basis-0 bg-gradient-to-b from-[#00d3f2] grow h-[32px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 to-[#2b7fff]" data-name="Text" data-node-id="I242:6754;189:15680">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center relative w-full">
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="I242:6754;189:15681">
                            JD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="basis-0 box-border content-stretch flex flex-col gap-[32px] grow h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto pb-[72px] pt-[32px] px-[72px] relative shrink-0" data-name="NewDashboardScreen" data-node-id="242:6755">
                {/* Page Header */}
                <div className="content-center flex flex-wrap gap-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="242:6756">
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container" data-node-id="242:6757">
                    <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[36px] relative shrink-0 text-[#101828] text-[30px]" data-node-id="242:6758">
                      Properties & Units
                    </p>
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px]" data-node-id="242:6759">
                      Manage your property portfolio with detailed unit tracking
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button Container" data-node-id="242:6760">
                    <button className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer" data-name="Button" data-node-id="242:6761">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6762">
                        <img alt="" className="block max-w-none size-full" src={editPropertyButtonIcon} />
                      </div>
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="242:6765">
                        Edit Property
                      </p>
                    </button>
                    <button className="bg-gradient-to-b box-border content-stretch flex from-[#7c86ff] gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 to-[#2b7fff] cursor-pointer" data-name="Button" data-node-id="242:6766">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6767">
                        <img alt="" className="block max-w-none size-full" src={addPropertyButtonIcon} />
                      </div>
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" data-node-id="242:6770">
                        Add Property
                      </p>
                    </button>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex items-center justify-between p-[17px] relative rounded-[16px] shrink-0 w-full" data-name="search" data-node-id="242:6771">
                  <div className="h-[36px] relative shrink-0" data-name="Container" data-node-id="I242:6771;240:6523">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[10px] relative">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6771;240:6524">
                        <img alt="" className="block max-w-none size-full" src={searchPropertiesIcon} />
                      </div>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="I242:6771;240:6527">
                        Search properties...
                      </p>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Filter Container" data-node-id="I242:6771;240:6528">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] items-center relative">
                      <div className="bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center pl-[12px] pr-[12.008px] py-0 relative rounded-[10px] shrink-0" data-name="Primitive.button" data-node-id="I242:6771;240:6529">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6771;240:6530">
                          <img alt="" className="block max-w-none size-full" src={filterDropdownIcon} />
                        </div>
                        <div className="h-[20px] relative shrink-0 w-[86.523px]" data-name="Primitive.span" data-node-id="I242:6771;240:6532">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[86.523px]">
                            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="I242:6771;240:6533">
                              All Properties
                            </p>
                          </div>
                        </div>
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6771;240:6534">
                          <img alt="" className="block max-w-none size-full" src={dropdownArrowIcon} />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container" data-node-id="I242:6771;240:6536">
                        <button className="bg-gradient-to-b from-[#7c86ff] relative rounded-[10px] shrink-0 size-[32px] to-[#2b7fff] cursor-pointer" data-name="Button" data-node-id="I242:6771;240:6537">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6771;240:6538">
                              <img alt="" className="block max-w-none size-full" src={gridViewIcon} />
                            </div>
                          </div>
                        </button>
                        <button className="border border-[rgba(10,18,32,0.1)] border-solid relative rounded-[8px] shrink-0 size-[32px] cursor-pointer" data-name="Button" data-node-id="I242:6771;240:6594">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:6771;240:6595">
                              <img alt="" className="block max-w-none size-full" src={listViewIcon} />
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Properties List */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="242:6772">
                  {/* Property Row 1 */}
                  <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[16px] items-center p-[24px] relative rounded-[16px] shrink-0 w-full h-[120px]" data-name="Frame 133" data-node-id="242:6773">
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="242:6774">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="ImageWithFallback" data-node-id="242:6775">
                        <img alt="" className="block max-w-none size-[72px] object-cover rounded-[8px]" src="/assets/property-image-1.png" />
                        <div className="bg-[#00c950] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Badge" data-node-id="242:6776">
                          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="242:6777">
                            Apartment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container" data-node-id="242:6778">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[26px] not-italic relative shrink-0 text-[#101828] text-[16px]" data-node-id="242:6779">
                        Sunset Apartments
                      </p>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Paragraph" data-node-id="242:6780">
                        <div className="relative shrink-0 size-[12px]" data-name="Icon" data-node-id="242:6781">
                          <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                        </div>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[12px]" data-node-id="242:6784">
                          123 Sunset Blvd, Los Angeles, CA
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame 202" data-node-id="242:6785">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="242:6786">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6787">
                          <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="242:6790">
                          16 units
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="242:6791">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6792">
                          <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="242:6795">
                          $12,800
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="242:6796">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6797">
                          <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="242:6800">
                          01-15-2025
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="PropertyCard" data-node-id="242:6801">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="242:6802">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="242:6803">
                          Occupancy
                        </p>
                        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#00c950] text-[12px]" data-node-id="242:6804">
                          92%
                        </p>
                      </div>
                      <div className="bg-gradient-to-r content-stretch flex from-[#00c950] h-[8px] items-start relative rounded-[1.67772e+07px] shrink-0 to-[#00c950] w-[120px]" data-name="Primitive.div" data-node-id="242:6805">
                        <div className="bg-[#00c950] h-[8px] relative rounded-[1.67772e+07px] shrink-0 w-[92%]" data-name="Container" data-node-id="242:6806" />
                      </div>
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="242:6807">
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[12px]" data-node-id="242:6808">
                          22 of 24 units occupied
                        </p>
                        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#00c950] text-[12px]" data-node-id="242:6809">
                          92%
                        </p>
                      </div>
                    </div>
                    <button className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[24px] cursor-pointer" data-name="Button" data-node-id="242:6810">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6811">
                        <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                      </div>
                    </button>
                  </div>

                  {/* Property Row 2 */}
                  <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[16px] items-center p-[24px] relative rounded-[16px] shrink-0 w-full h-[120px]" data-name="Frame 145" data-node-id="242:6812">
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="242:6813">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="ImageWithFallback" data-node-id="242:6814">
                        <img alt="" className="block max-w-none size-[72px] object-cover rounded-[8px]" src="/assets/property-image-2.png" />
                        <div className="bg-[#f0b100] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Badge" data-node-id="242:6815">
                          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="242:6816">
                            Individual
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container" data-node-id="242:6817">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[26px] not-italic relative shrink-0 text-[#101828] text-[16px]" data-node-id="242:6818">
                        Oak Villa Complex
                      </p>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Paragraph" data-node-id="242:6819">
                        <div className="relative shrink-0 size-[12px]" data-name="Icon" data-node-id="242:6820">
                          <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                        </div>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[12px]" data-node-id="242:6823">
                          123 Sunset Blvd, Los Angeles, CA
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame 200" data-node-id="242:6824">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="242:6825">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6826">
                          <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="242:6829">
                          16 units
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="242:6830">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6831">
                          <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="242:6834">
                          $12,800
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="242:6835">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6836">
                          <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="242:6839">
                          01-15-2025
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="PropertyCard" data-node-id="242:6840">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="242:6841">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="242:6842">
                          Occupancy
                        </p>
                        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#f0b100] text-[12px]" data-node-id="242:6843">
                          88%
                        </p>
                      </div>
                      <div className="bg-gradient-to-r content-stretch flex from-[#f0b100] h-[8px] items-start relative rounded-[1.67772e+07px] shrink-0 to-[#f0b100] w-[120px]" data-name="Primitive.div" data-node-id="242:6844">
                        <div className="bg-[#f0b100] h-[8px] relative rounded-[1.67772e+07px] shrink-0 w-[88%]" data-name="Container" data-node-id="242:6845" />
                      </div>
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="242:6846">
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[12px]" data-node-id="242:6847">
                          17 of 18 units occupied
                        </p>
                        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#f0b100] text-[12px]" data-node-id="242:6848">
                          88%
                        </p>
                      </div>
                    </div>
                    <button className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[24px] cursor-pointer" data-name="Button" data-node-id="242:6849">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6850">
                        <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                      </div>
                    </button>
                  </div>

                  {/* Property Row 3 */}
                  <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[16px] items-center p-[24px] relative rounded-[16px] shrink-0 w-full h-[120px]" data-name="Frame 146" data-node-id="242:6851">
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="242:6852">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="ImageWithFallback" data-node-id="242:6853">
                        <img alt="" className="block max-w-none size-[72px] object-cover rounded-[8px]" src="/assets/property-image-3.png" />
                        <div className="bg-[#f0b100] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Badge" data-node-id="242:6854">
                          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="242:6855">
                            Individual
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container" data-node-id="242:6856">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[26px] not-italic relative shrink-0 text-[#101828] text-[16px]" data-node-id="242:6857">
                        Pine Heights
                      </p>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Paragraph" data-node-id="242:6858">
                        <div className="relative shrink-0 size-[12px]" data-name="Icon" data-node-id="242:6859">
                          <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                        </div>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[12px]" data-node-id="242:6862">
                          123 Sunset Blvd, Los Angeles, CA
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame 200" data-node-id="242:6863">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="242:6864">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6865">
                          <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="242:6868">
                          16 units
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="242:6869">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6870">
                          <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="242:6873">
                          $12,800
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="242:6874">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6875">
                          <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="242:6878">
                          01-15-2025
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="PropertyCard" data-node-id="242:6879">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="242:6880">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="242:6881">
                          Occupancy
                        </p>
                        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#f0b100] text-[12px]" data-node-id="242:6882">
                          88%
                        </p>
                      </div>
                      <div className="bg-gradient-to-r content-stretch flex from-[#f0b100] h-[8px] items-start relative rounded-[1.67772e+07px] shrink-0 to-[#f0b100] w-[120px]" data-name="Primitive.div" data-node-id="242:6883">
                        <div className="bg-[#f0b100] h-[8px] relative rounded-[1.67772e+07px] shrink-0 w-[88%]" data-name="Container" data-node-id="242:6884" />
                      </div>
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="242:6885">
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[12px]" data-node-id="242:6886">
                          11 of 12 units occupied
                        </p>
                        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#f0b100] text-[12px]" data-node-id="242:6887">
                          88%
                        </p>
                      </div>
                    </div>
                    <button className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[24px] cursor-pointer" data-name="Button" data-node-id="242:6888">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:6889">
                        <img alt="" className="block max-w-none size-full" src={propertyActionsIcon} />
                      </div>
                    </button>
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
