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
const addUnitIcon = getAssetPath('add-unit-icon');                   // Add unit

export default function PropertyUnitsList() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative h-screen w-screen" data-name="Properties & Units" data-node-id="261:6755">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="261:6756">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-full">
          {/* Header */}
          <div className="bg-[rgba(255,255,255,0.8)] border-[0px_0px_1px] border-[rgba(10,18,32,0.1)] border-solid h-[72px] relative shrink-0 w-full" data-name="Header" data-node-id="261:6757">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-center relative w-full">
              <div className="border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.2)] border-solid box-border content-stretch flex flex-col h-[72px] items-center justify-center pl-[16px] pr-[19px] py-[16px] relative shrink-0 w-[64px]" data-name="Container" data-node-id="I261:6757;189:15783">
                <div className="bg-gradient-to-b content-stretch flex from-[#7c86ff] items-center justify-center relative rounded-[12px] shrink-0 size-[32px] to-[#2b7fff]" data-name="Container" data-node-id="I261:6757;189:15784">
                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6757;189:15785">
                    <img alt="" className="block max-w-none size-full" src={loginLogoIcon} />
                  </div>
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex grow h-full items-center justify-between min-h-px min-w-px px-[24px] py-[8px] relative shrink-0" data-name="Container" data-node-id="I261:6757;189:15793">
                <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[10px] relative shrink-0 w-[320px]" data-name="Container" data-node-id="I261:6757;189:15794">
                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6757;189:15795">
                    <img alt="" className="block max-w-none size-full" src={searchIcon} />
                  </div>
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="I261:6757;189:15798">
                    Search properties, tenants, tickets...
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="I261:6757;189:15799">
                  <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="I261:6757;189:15800">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6757;189:15801">
                      <img alt="" className="block max-w-none size-full" src={notificationIcon} />
                    </div>
                    <div className="absolute bg-[#fb2c36] left-[17px] rounded-[10px] size-[20px] top-[-4px]" data-name="Badge" data-node-id="I261:6757;189:15804">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip relative rounded-[inherit] size-[20px]">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="I261:6757;189:15805">
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="I261:6757;189:15806">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6757;189:15807">
                      <img alt="" className="block max-w-none size-full" src={settingsIcon} />
                    </div>
                  </div>
                  <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-[10px] shrink-0 size-[32px]" data-name="Theme Switch Mode" data-node-id="I261:6757;256:4134">
                    <div className="relative shrink-0 size-[16px]" data-name="Moon--Streamline-Tabler" data-node-id="I261:6757;256:4134;255:6041">
                      <img alt="" className="block max-w-none size-full" src={themeSwitchIcon} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Main Content" data-node-id="261:6758">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative size-full">
              {/* Left Navigation */}
              <div className="bg-[rgba(255,255,255,0.8)] border-[0px_1px_0px_0px] border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col h-full items-start relative shrink-0 w-[64px]" data-name="Left Navigation" data-node-id="261:6759">
                <div className="basis-0 box-border content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px pb-0 pt-[16px] px-[16px] relative shrink-0 w-[63px]" data-name="Navigation" data-node-id="I261:6759;189:15625">
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I261:6759;189:15626">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6759;189:15627">
                      <img alt="" className="block max-w-none size-full" src={dashboardNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0.2)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0.2)] w-full" data-name="Button" data-node-id="I261:6759;189:15632">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6759;189:15633">
                      <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I261:6759;189:15641">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6759;189:15642">
                      <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I261:6759;189:15647">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6759;189:15648">
                      <img alt="" className="block max-w-none size-full" src={maintenanceNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I261:6759;189:15651">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6759;189:15652">
                      <img alt="" className="block max-w-none size-full" src={reportsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I261:6759;189:15654">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6759;189:15655">
                      <img alt="" className="block max-w-none size-full" src={analyticsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I261:6759;189:15673">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6759;189:15674">
                      <img alt="" className="block max-w-none size-full" src={settingsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I261:6759;189:15669">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6759;189:15670">
                      <img alt="" className="block max-w-none size-full" src={helpNavIcon} />
                    </div>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col h-[61px] items-center pb-px pl-[16px] pr-[19px] pt-[16px] relative shrink-0 w-[63px]" data-name="Container" data-node-id="I261:6759;189:15677">
                  <div className="content-stretch flex gap-[8px] items-center relative rounded-[1.67772e+07px] shrink-0" data-name="Button" data-node-id="I261:6759;189:15678">
                    <div className="content-stretch flex items-start overflow-clip relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Primitive.span" data-node-id="I261:6759;189:15679">
                      <div className="basis-0 bg-gradient-to-b from-[#00d3f2] grow h-[32px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 to-[#2b7fff]" data-name="Text" data-node-id="I261:6759;189:15680">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center relative w-full">
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="I261:6759;189:15681">
                            JD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto pb-[24px] pt-[32px] px-[72px] relative shrink-0" data-name="NewDashboardScreen" data-node-id="261:6760">
                {/* Breadcrumb */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="261:6761">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="261:6762">
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="261:6763">{`Properties & Units / Sunset Apartments`}</p>
                  </div>
                  
                  {/* Property Header */}
                  <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-center flex flex-wrap gap-[16px] items-center justify-between p-[24px] relative rounded-[24px] shrink-0 w-full" data-name="Container" data-node-id="261:6764">
                    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] relative shrink-0" data-name="Container" data-node-id="261:6765">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6766">
                        <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                      </div>
                      <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="261:6769">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start relative w-full">
                          <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[38px] not-italic relative shrink-0 text-[#101828] text-[30px] w-full" data-node-id="261:6770">
                            Sunset Apartments
                          </p>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Paragraph" data-node-id="261:6771">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6772">
                              <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                            </div>
                            <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-gray-500" data-node-id="261:6775">
                              123 Sunset Blvd, Los Angeles, CA
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0" data-node-id="282:16034">
                      <div className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="282:16035">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:16036">
                          <img alt="" className="block max-w-none size-full" src={editPropertyButtonIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center text-nowrap whitespace-pre" data-node-id="282:16039">
                          Edit Property
                        </p>
                      </div>
                      <button className="bg-gradient-to-b box-border content-stretch cursor-pointer flex from-[#7c86ff] gap-[8px] items-center justify-center overflow-visible px-[16px] py-[8px] relative rounded-[10px] shrink-0 to-[#2b7fff]" data-name="Button" data-node-id="282:16040">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="282:16041">
                          <img alt="" className="block max-w-none size-full" src={addUnitIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" data-node-id="282:16044">
                          Add Unit
                        </p>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-node-id="261:6776">
                  <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] p-[24px] relative rounded-[24px] shrink-0" data-name="Card" data-node-id="261:6777">
                    <div className="bg-gradient-to-l content-stretch flex from-[#ff6900] items-center justify-center relative rounded-[16px] shrink-0 size-[40px] to-[#fb2c36]" data-name="Container" data-node-id="261:6779">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="261:6780">
                        <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[184px]" data-node-id="261:6793">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="261:6795">
                        Total Units
                      </p>
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="261:6794">
                        3
                      </p>
                    </div>
                  </div>
                  <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] p-[24px] relative rounded-[24px] shrink-0" data-name="Card" data-node-id="261:6802">
                    <div className="bg-gradient-to-l content-stretch flex from-[#2b7fff] items-center justify-center relative rounded-[16px] shrink-0 size-[40px] to-[#05df72]" data-name="Container" data-node-id="261:6803">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="261:6804">
                        <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[184px]" data-node-id="261:6812">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="261:6813">
                        Occupied
                      </p>
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="261:6814">
                        2
                      </p>
                    </div>
                  </div>
                  <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] p-[24px] relative rounded-[24px] shrink-0" data-name="Card" data-node-id="261:6821">
                    <div className="bg-gradient-to-r content-stretch flex from-[#ad46ff] items-center justify-center relative rounded-[16px] shrink-0 size-[40px] to-[#c27aff]" data-name="Container" data-node-id="261:6822">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="261:6831">
                        <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[184px]" data-node-id="261:6828">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="261:6829">
                        Monthly Revenue
                      </p>
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="261:6830">
                        $18,400
                      </p>
                    </div>
                  </div>
                  <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] p-[24px] relative rounded-[24px] shrink-0" data-name="Card" data-node-id="261:6835">
                    <div className="bg-gradient-to-r box-border content-stretch flex from-[#2b7fff] items-center justify-center relative rounded-[16px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)] shrink-0 size-[40px] to-[#7c86ff]" data-name="Container" data-node-id="261:6836">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="261:6837">
                        <img alt="" className="block max-w-none size-full" src={maintenanceNavIcon} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[184px]" data-node-id="261:6840">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="261:6841">
                        Maintenance Tickets
                      </p>
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="261:6842">
                        2
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main Content Layout */}
                <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid grow min-h-px min-w-px relative rounded-[24px] shrink-0 w-full" data-node-id="261:6843">
                  <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
                    {/* Left Sidebar - Overview */}
                    <div className="bg-[rgba(255,255,255,0.95)] border-[0px_1px_0px_0px] border-[rgba(10,18,32,0.1)] border-solid h-full min-w-[288px] relative shrink-0 w-[320px]" data-name="Card" data-node-id="261:6844">
                      <div className="box-border content-stretch flex flex-col gap-[24px] h-full items-start min-w-inherit overflow-x-clip overflow-y-auto px-[32px] py-[24px] relative w-[320px]">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="261:6845">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="261:6846">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6847">
                              <img alt="" className="block max-w-none size-full" src={analyticsNavIcon} />
                            </div>
                            <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre" data-node-id="261:6855">
                              Overview
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="261:6856">
                          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#101828] text-[18px] w-full" data-node-id="261:6857">
                            Sunset Apartments
                          </p>
                          <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-px relative shrink-0 w-full" data-name="Paragraph" data-node-id="261:6858">
                            <div className="relative shrink-0 size-[12px]" data-name="Icon" data-node-id="261:6859">
                              <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                            </div>
                            <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px]" data-node-id="261:6862">
                              123 Sunset Blvd, Los Angeles, CA
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="261:6863">
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="261:6864">
                            <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container" data-node-id="261:6865">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6866">
                                <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                              </div>
                              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6874">
                                Total Units
                              </p>
                            </div>
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6867">
                              16 units
                            </p>
                          </div>
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="261:6875">
                            <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container" data-node-id="261:6876">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6887">
                                <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                              </div>
                              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6885">
                                Monthly Revenue
                              </p>
                            </div>
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6886">
                              $12,800
                            </p>
                          </div>
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="261:6891">
                            <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container" data-node-id="261:6892">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6898">
                                <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                              </div>
                              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6896">
                                Year Built
                              </p>
                            </div>
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6897">
                              01-15-2025
                            </p>
                          </div>
                        </div>
                        <div className="border-[1px_0px_0px] border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-0 relative shrink-0 w-full" data-node-id="261:6899">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="261:6900">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="261:6901">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6902">
                                <img alt="" className="block max-w-none size-full" src={settingsNavIcon} />
                              </div>
                              <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre" data-node-id="261:6905">
                                Assigned Manager
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="261:6906">
                            <div className="bg-gradient-to-r content-stretch flex from-[#ad46ff] items-center justify-center relative rounded-[16px] shrink-0 size-[40px] to-[#c27aff]" data-name="Text" data-node-id="274:9884">
                              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="274:9885">
                                WC
                              </p>
                            </div>
                            <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="261:6911">
                              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#101828] text-[18px] w-full" data-node-id="261:6912">
                                Walter Carter
                              </p>
                              <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-node-id="261:6913">
                                <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-px relative shrink-0" data-name="Paragraph" data-node-id="261:6914">
                                  <div className="relative shrink-0 size-[12px]" data-name="Icon" data-node-id="261:6915">
                                    <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre" data-node-id="261:6918">
                                    Walter90@hotmail.com
                                  </p>
                                </div>
                                <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-px relative shrink-0" data-name="Paragraph" data-node-id="261:6919">
                                  <div className="relative shrink-0 size-[12px]" data-name="Icon" data-node-id="261:6920">
                                    <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre" data-node-id="261:6922">
                                    1-772-280-7340
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content - Units List */}
                    <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto px-[40px] py-[24px] relative shrink-0" data-node-id="261:6923">
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="261:6924">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="261:6925">
                          <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="261:6926">
                            <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                          </div>
                          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre" data-node-id="261:6927">
                            Total Units
                          </p>
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex items-center justify-between p-[17px] relative rounded-[16px] shrink-0 w-full" data-name="search" data-node-id="261:6928">
                        <div className="h-[36px] relative shrink-0" data-name="Container" data-node-id="I261:6928;240:6523">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[10px] relative">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6928;240:6524">
                              <img alt="" className="block max-w-none size-full" src={searchPropertiesIcon} />
                            </div>
                            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="I261:6928;240:6527">
                              Search properties...
                            </p>
                          </div>
                        </div>
                        <div className="relative shrink-0" data-node-id="I261:6928;240:6528">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] items-center relative">
                            <div className="bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center pl-[12px] pr-[12.008px] py-0 relative rounded-[10px] shrink-0" data-name="Primitive.button" data-node-id="I261:6928;240:6529">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6928;240:6530">
                                <img alt="" className="block max-w-none size-full" src={filterDropdownIcon} />
                              </div>
                              <div className="h-[20px] relative shrink-0" data-name="Primitive.span" data-node-id="I261:6928;240:6532">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit]">
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="I261:6928;240:6533">
                                    All
                                  </p>
                                </div>
                              </div>
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6928;240:6534">
                                <img alt="" className="block max-w-none size-full" src={dropdownArrowIcon} />
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container" data-node-id="I261:6928;240:6536">
                              <div className="border border-[rgba(10,18,32,0.1)] border-solid relative rounded-[8px] shrink-0 size-[32px]" data-name="Button" data-node-id="I261:6928;240:6537">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6928;240:6538">
                                    <img alt="" className="block max-w-none size-full" src={gridViewIcon} />
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gradient-to-b from-[#7c86ff] relative rounded-[10px] shrink-0 size-[32px] to-[#2b7fff]" data-name="Button" data-node-id="I261:6928;240:6594">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6928;240:6595">
                                    <img alt="" className="block max-w-none size-full" src={listViewIcon} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Units List Table */}
                      <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="Table" data-node-id="261:6929">
                        {/* Table Header */}
                        <div className="bg-[rgba(10,18,32,0.02)] border-[0px_0px_1px] border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex h-[48px] items-center px-[24px] py-[12px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="TableHeader" data-node-id="261:6930">
                          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="261:6931">
                            <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6932">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6933">
                                <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                              </div>
                              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6934">
                                Unit
                              </p>
                            </div>
                            <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6935">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6936">
                                <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                              </div>
                              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6937">
                                Tenant
                              </p>
                            </div>
                            <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6938">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6939">
                                <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                              </div>
                              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6940">
                                Rent
                              </p>
                            </div>
                            <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6941">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6942">
                                <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                              </div>
                              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6943">
                                Lease End
                              </p>
                            </div>
                            <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6944">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6945">
                                <img alt="" className="block max-w-none size-full" src={maintenanceNavIcon} />
                              </div>
                              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6946">
                                Status
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Table Rows */}
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TableBody" data-node-id="261:6947">
                          {/* Row 1 */}
                          <div className="border-[0px_0px_1px] border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex h-[72px] items-center px-[24px] py-[12px] relative shrink-0 w-full" data-name="TableRow" data-node-id="261:6948">
                            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="261:6949">
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6950">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6951">
                                  <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6952">
                                  Unit 001
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6953">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6954">
                                  <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6955">
                                  John Doe
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6956">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6957">
                                  <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6958">
                                  $1,200
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6959">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6960">
                                  <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6961">
                                  12/31/2024
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6962">
                                <div className="bg-[#fb2c36] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="261:6963">
                                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="261:6964">
                                    Occupied
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Row 2 */}
                          <div className="border-[0px_0px_1px] border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex h-[72px] items-center px-[24px] py-[12px] relative shrink-0 w-full" data-name="TableRow" data-node-id="261:6965">
                            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="261:6966">
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6967">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6968">
                                  <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6969">
                                  Unit 002
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6970">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6971">
                                  <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6972">
                                  -
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6973">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6974">
                                  <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6975">
                                  $1,500
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6976">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6977">
                                  <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6978">
                                  -
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6979">
                                <div className="bg-[#00c950] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="261:6980">
                                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="261:6981">
                                    Available
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Row 3 */}
                          <div className="border-[0px_0px_1px] border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex h-[72px] items-center px-[24px] py-[12px] relative shrink-0 w-full" data-name="TableRow" data-node-id="261:6982">
                            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="261:6983">
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6984">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6985">
                                  <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6986">
                                  Unit 003
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6987">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6988">
                                  <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6989">
                                  -
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6990">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6991">
                                  <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6992">
                                  $1,800
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6993">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6994">
                                  <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:6995">
                                  -
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:6996">
                                <div className="bg-[#00c950] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="261:6997">
                                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="261:6998">
                                    Available
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Row 4 */}
                          <div className="border-[0px_0px_1px] border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex h-[72px] items-center px-[24px] py-[12px] relative shrink-0 w-full" data-name="TableRow" data-node-id="261:6999">
                            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="261:7000">
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:7001">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:7002">
                                  <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:7003">
                                  Unit 004
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:7004">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:7005">
                                  <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:7006">
                                  Jane Smith
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:7007">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:7008">
                                  <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:7009">
                                  $2,100
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:7010">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:7011">
                                  <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:7012">
                                  06/30/2025
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:7013">
                                <div className="bg-[#f0b100] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="261:7014">
                                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="261:7015">
                                    Vacant Soon
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Row 5 */}
                          <div className="box-border content-stretch flex h-[72px] items-center px-[24px] py-[12px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="TableRow" data-node-id="261:7016">
                            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="261:7017">
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:7018">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:7019">
                                  <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:7020">
                                  Unit 005
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:7021">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:7022">
                                  <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:7023">
                                  -
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:7024">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:7025">
                                  <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:7026">
                                  $1,600
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:7027">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:7028">
                                  <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                                </div>
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:7029">
                                  -
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container" data-node-id="261:7030">
                                <div className="bg-[#00c950] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="261:7031">
                                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="261:7032">
                                    Available
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
          </div>
        </div>
      </div>
    </div>
  );
}
