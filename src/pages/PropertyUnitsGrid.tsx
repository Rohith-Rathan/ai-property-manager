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

export default function PropertyUnitsGrid() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative h-screen w-screen" data-name="Properties & Units" data-node-id="242:8582">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="242:8583">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-full">
          {/* Header */}
          <div className="bg-[rgba(255,255,255,0.8)] border-[0px_0px_1px] border-[rgba(10,18,32,0.1)] border-solid h-[72px] relative shrink-0 w-full" data-name="Header" data-node-id="242:8584">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-center relative w-full">
              <div className="border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.2)] border-solid box-border content-stretch flex flex-col h-[72px] items-center justify-center pl-[16px] pr-[19px] py-[16px] relative shrink-0 w-[64px]" data-name="Container" data-node-id="I242:8584;189:15783">
                <div className="bg-gradient-to-b content-stretch flex from-[#7c86ff] items-center justify-center relative rounded-[12px] shrink-0 size-[32px] to-[#2b7fff]" data-name="Container" data-node-id="I242:8584;189:15784">
                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:8584;189:15785">
                    <img alt="" className="block max-w-none size-full" src={loginLogoIcon} />
                  </div>
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex grow h-full items-center justify-between min-h-px min-w-px px-[24px] py-[8px] relative shrink-0" data-name="Container" data-node-id="I242:8584;189:15793">
                <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[10px] relative shrink-0 w-[320px]" data-name="Container" data-node-id="I242:8584;189:15794">
                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:8584;189:15795">
                    <img alt="" className="block max-w-none size-full" src={searchIcon} />
                  </div>
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="I242:8584;189:15798">
                    Search properties, tenants, tickets...
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="I242:8584;189:15799">
                  <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="I242:8584;189:15800">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:8584;189:15801">
                      <img alt="" className="block max-w-none size-full" src={notificationIcon} />
                    </div>
                    <div className="absolute bg-[#fb2c36] left-[17px] rounded-[10px] size-[20px] top-[-4px]" data-name="Badge" data-node-id="I242:8584;189:15804">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip relative rounded-[inherit] size-[20px]">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="I242:8584;189:15805">
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="I242:8584;189:15806">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:8584;189:15807">
                      <img alt="" className="block max-w-none size-full" src={settingsIcon} />
                    </div>
                  </div>
                  <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-[10px] shrink-0 size-[32px]" data-name="Theme Switch Mode" data-node-id="I242:8584;256:4134">
                    <div className="relative shrink-0 size-[16px]" data-name="Moon--Streamline-Tabler" data-node-id="I242:8584;256:4134;255:6041">
                      <img alt="" className="block max-w-none size-full" src={themeSwitchIcon} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Main Content" data-node-id="242:8585">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative size-full">
              {/* Left Navigation */}
              <div className="bg-[rgba(255,255,255,0.8)] border-[0px_1px_0px_0px] border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col h-full items-start relative shrink-0 w-[64px]" data-name="Left Navigation" data-node-id="242:8586">
                <div className="basis-0 box-border content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px pb-0 pt-[16px] px-[16px] relative shrink-0 w-[63px]" data-name="Navigation" data-node-id="I242:8586;189:15625">
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:8586;189:15626">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:8586;189:15627">
                      <img alt="" className="block max-w-none size-full" src={dashboardNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0.2)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0.2)] w-full" data-name="Button" data-node-id="I242:8586;189:15632">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:8586;189:15633">
                      <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:8586;189:15641">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:8586;189:15642">
                      <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:8586;189:15647">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:8586;189:15648">
                      <img alt="" className="block max-w-none size-full" src={maintenanceNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:8586;189:15651">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:8586;189:15652">
                      <img alt="" className="block max-w-none size-full" src={reportsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:8586;189:15654">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:8586;189:15655">
                      <img alt="" className="block max-w-none size-full" src={analyticsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:8586;189:15673">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:8586;189:15674">
                      <img alt="" className="block max-w-none size-full" src={settingsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I242:8586;189:15669">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I242:8586;189:15670">
                      <img alt="" className="block max-w-none size-full" src={helpNavIcon} />
                    </div>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col h-[61px] items-center pb-px pl-[16px] pr-[19px] pt-[16px] relative shrink-0 w-[63px]" data-name="Container" data-node-id="I242:8586;189:15677">
                  <div className="content-stretch flex gap-[8px] items-center relative rounded-[1.67772e+07px] shrink-0" data-name="Button" data-node-id="I242:8586;189:15678">
                    <div className="content-stretch flex items-start overflow-clip relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Primitive.span" data-node-id="I242:8586;189:15679">
                      <div className="basis-0 bg-gradient-to-b from-[#00d3f2] grow h-[32px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 to-[#2b7fff]" data-name="Text" data-node-id="I242:8586;189:15680">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center relative w-full">
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="I242:8586;189:15681">
                            JD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto pb-[24px] pt-[32px] px-[72px] relative shrink-0" data-name="NewDashboardScreen" data-node-id="242:9022">
                {/* Breadcrumb */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="242:9023">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="242:9024">
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="242:9025">{`Properties & Units / Sunset Apartments`}</p>
                  </div>
                  
                  {/* Property Header */}
                  <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-center flex flex-wrap gap-[16px] items-center justify-between p-[24px] relative rounded-[24px] shrink-0 w-full" data-name="Container" data-node-id="242:9026">
                    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] relative shrink-0" data-name="Container" data-node-id="242:9027">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:9028">
                        <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                      </div>
                      <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="242:9031">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start relative w-full">
                          <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[38px] not-italic relative shrink-0 text-[#101828] text-[30px] w-full" data-node-id="242:9032">
                            Sunset Apartments
                          </p>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Paragraph" data-node-id="242:9033">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="242:9034">
                              <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                            </div>
                            <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-gray-500" data-node-id="242:9037">
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
                <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-node-id="242:9453">
                  <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] p-[24px] relative rounded-[24px] shrink-0" data-name="Card" data-node-id="242:9454">
                    <div className="bg-gradient-to-l content-stretch flex from-[#ff6900] items-center justify-center relative rounded-[16px] shrink-0 size-[40px] to-[#fb2c36]" data-name="Container" data-node-id="242:9456">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="242:9457">
                        <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[184px]" data-node-id="242:9470">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="242:9472">
                        Total Units
                      </p>
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="242:9471">
                        3
                      </p>
                    </div>
                  </div>
                  <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] p-[24px] relative rounded-[24px] shrink-0" data-name="Card" data-node-id="242:9561">
                    <div className="bg-gradient-to-l content-stretch flex from-[#2b7fff] items-center justify-center relative rounded-[16px] shrink-0 size-[40px] to-[#05df72]" data-name="Container" data-node-id="242:9562">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="261:4249">
                        <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[184px]" data-node-id="242:9571">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="242:9572">
                        Occupied
                      </p>
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="242:9573">
                        2
                      </p>
                    </div>
                  </div>
                  <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] p-[24px] relative rounded-[24px] shrink-0" data-name="Card" data-node-id="242:9580">
                    <div className="bg-gradient-to-r content-stretch flex from-[#ad46ff] items-center justify-center relative rounded-[16px] shrink-0 size-[40px] to-[#c27aff]" data-name="Container" data-node-id="242:9581">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="242:9590">
                        <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[184px]" data-node-id="242:9587">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="242:9588">
                        Monthly Revenue
                      </p>
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="242:9589">
                        $18,400
                      </p>
                    </div>
                  </div>
                  <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-[280px] p-[24px] relative rounded-[24px] shrink-0" data-name="Card" data-node-id="242:9594">
                    <div className="bg-gradient-to-r box-border content-stretch flex from-[#2b7fff] items-center justify-center relative rounded-[16px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)] shrink-0 size-[40px] to-[#7c86ff]" data-name="Container" data-node-id="242:9595">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="261:4254">
                        <img alt="" className="block max-w-none size-full" src={maintenanceNavIcon} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[184px]" data-node-id="242:9599">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] w-full" data-node-id="242:9600">
                        Maintenance Tickets
                      </p>
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full" data-node-id="242:9601">
                        2
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main Content Layout */}
                <div className="basis-0 bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid grow min-h-px min-w-px relative rounded-[24px] shrink-0 w-full" data-node-id="261:4257">
                  <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
                    {/* Left Sidebar - Overview */}
                    <div className="bg-[rgba(255,255,255,0.95)] border-[0px_1px_0px_0px] border-[rgba(10,18,32,0.1)] border-solid h-full min-w-[288px] relative shrink-0 w-[320px]" data-name="Card" data-node-id="261:4333">
                      <div className="box-border content-stretch flex flex-col gap-[24px] h-full items-start min-w-inherit overflow-x-clip overflow-y-auto px-[32px] py-[24px] relative w-[320px]">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="261:4444">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="261:4445">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:4446">
                              <img alt="" className="block max-w-none size-full" src={analyticsNavIcon} />
                            </div>
                            <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre" data-node-id="261:4454">
                              Overview
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="261:4516">
                          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#101828] text-[18px] w-full" data-node-id="261:4517">
                            Sunset Apartments
                          </p>
                          <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-px relative shrink-0 w-full" data-name="Paragraph" data-node-id="261:4518">
                            <div className="relative shrink-0 size-[12px]" data-name="Icon" data-node-id="261:4519">
                              <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                            </div>
                            <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px]" data-node-id="261:4522">
                              123 Sunset Blvd, Los Angeles, CA
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="261:4899">
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="261:4355">
                            <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container" data-node-id="261:4850">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:4851">
                                <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                              </div>
                              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:4859">
                                Total Units
                              </p>
                            </div>
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:4357">
                              16 units
                            </p>
                          </div>
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="261:4861">
                            <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container" data-node-id="261:4862">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:4873">
                                <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                              </div>
                              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:4871">
                                Monthly Revenue
                              </p>
                            </div>
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:4872">
                              $12,800
                            </p>
                          </div>
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="261:4877">
                            <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container" data-node-id="261:4878">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:4884">
                                <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                              </div>
                              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:4882">
                                Year Built
                              </p>
                            </div>
                            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="261:4883">
                              01-15-2025
                            </p>
                          </div>
                        </div>
                        <div className="border-[1px_0px_0px] border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-0 relative shrink-0 w-full" data-node-id="261:6326">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="261:6327">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="261:6328">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6329">
                                <img alt="" className="block max-w-none size-full" src={settingsNavIcon} />
                              </div>
                              <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre" data-node-id="261:6332">
                                Assigned Manager
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="261:6333">
                            <div className="bg-gradient-to-r content-stretch flex from-[#ad46ff] items-center justify-center relative rounded-[16px] shrink-0 size-[40px] to-[#c27aff]" data-name="Text" data-node-id="274:9884">
                              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="274:9885">
                                WC
                              </p>
                            </div>
                            <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="261:6338">
                              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#101828] text-[18px] w-full" data-node-id="261:6339">
                                Walter Carter
                              </p>
                              <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-node-id="261:6340">
                                <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-px relative shrink-0" data-name="Paragraph" data-node-id="261:6341">
                                  <div className="relative shrink-0 size-[12px]" data-name="Icon" data-node-id="261:6342">
                                    <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre" data-node-id="261:6345">
                                    Walter90@hotmail.com
                                  </p>
                                </div>
                                <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-px relative shrink-0" data-name="Paragraph" data-node-id="261:6346">
                                  <div className="relative shrink-0 size-[12px]" data-name="Icon" data-node-id="261:6347">
                                    <img alt="" className="block max-w-none size-full" src={dotSeparatorIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre" data-node-id="261:6349">
                                    1-772-280-7340
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content - Units Grid */}
                    <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto px-[40px] py-[24px] relative shrink-0" data-node-id="261:5085">
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="261:5075">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="261:5076">
                          <div className="relative shrink-0 size-[20px]" data-name="Icon" data-node-id="261:5086">
                            <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                          </div>
                          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre" data-node-id="261:5081">
                            Total Units
                          </p>
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex items-center justify-between p-[17px] relative rounded-[16px] shrink-0 w-full" data-name="search" data-node-id="261:6721">
                        <div className="h-[36px] relative shrink-0" data-name="Container" data-node-id="I261:6721;240:6523">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[10px] relative">
                            <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6721;240:6524">
                              <img alt="" className="block max-w-none size-full" src={searchPropertiesIcon} />
                            </div>
                            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="I261:6721;240:6527">
                              Search properties...
                            </p>
                          </div>
                        </div>
                        <div className="relative shrink-0" data-node-id="I261:6721;240:6528">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] items-center relative">
                            <div className="bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center pl-[12px] pr-[12.008px] py-0 relative rounded-[10px] shrink-0" data-name="Primitive.button" data-node-id="I261:6721;240:6529">
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6721;240:6530">
                                <img alt="" className="block max-w-none size-full" src={filterDropdownIcon} />
                              </div>
                              <div className="h-[20px] relative shrink-0" data-name="Primitive.span" data-node-id="I261:6721;240:6532">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit]">
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre" data-node-id="I261:6721;240:6533">
                                    All
                                  </p>
                                </div>
                              </div>
                              <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6721;240:6534">
                                <img alt="" className="block max-w-none size-full" src={dropdownArrowIcon} />
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container" data-node-id="I261:6721;240:6536">
                              <div className="bg-gradient-to-b from-[#7c86ff] relative rounded-[10px] shrink-0 size-[32px] to-[#2b7fff]" data-name="Button" data-node-id="I261:6721;240:6537">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6721;240:6538">
                                    <img alt="" className="block max-w-none size-full" src={gridViewIcon} />
                                  </div>
                                </div>
                              </div>
                              <div className="border border-[rgba(10,18,32,0.1)] border-solid relative rounded-[8px] shrink-0 size-[32px]" data-name="Button" data-node-id="I261:6721;240:6594">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I261:6721;240:6595">
                                    <img alt="" className="block max-w-none size-full" src={listViewIcon} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Units Grid */}
                      <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-node-id="261:6754">
                        {/* Unit Card 1 */}
                        <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex flex-col items-start min-w-[288px] relative rounded-[24px] shrink-0 w-[392px]" data-node-id="261:5096">
                          <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Card" data-node-id="261:5097">
                            <div className="h-[128px] relative shrink-0 w-full" data-name="ImageWithFallback" data-node-id="261:5098">
                              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/assets/unit-image-1.png" />
                            </div>
                          </div>
                          <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[24px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Card" data-node-id="261:5101">
                            <div className="content-stretch flex flex-col gap-[4px] h-[46px] items-start relative shrink-0 w-[344px]" data-name="Container" data-node-id="261:5103">
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="261:6689">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#101828] text-[18px] text-nowrap whitespace-pre" data-node-id="261:5104">
                                  Unit 001
                                </p>
                                <div className="bg-[#fb2c36] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="261:6686">
                                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="261:6687">
                                    Occupied
                                  </p>
                                </div>
                              </div>
                              <p className="font-['Inter:Regular',_sans-serif] font-normal h-[16px] leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full" data-node-id="261:5109">
                                Studio
                              </p>
                            </div>
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="261:5115">
                              <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-node-id="261:5116">
                                <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="261:5127">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:5128">
                                    <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] w-[54px]" data-node-id="261:5131">
                                    $145.00
                                  </p>
                                </div>
                                <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="261:5132">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:5133">
                                    <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre" data-node-id="261:5138">
                                    120 Sq Ft
                                  </p>
                                </div>
                                <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="261:5117">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6480">
                                    <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] w-[53px]" data-node-id="261:5126">
                                    3 Assets
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Unit Card 2 */}
                        <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex flex-col items-start min-w-[288px] relative rounded-[24px] shrink-0 w-[392px]" data-node-id="261:6646">
                          <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Card" data-node-id="261:6647">
                            <div className="h-[128px] relative shrink-0 w-full" data-name="ImageWithFallback" data-node-id="261:6648">
                              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/assets/unit-image-2.png" />
                            </div>
                          </div>
                          <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[24px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Card" data-node-id="261:6651">
                            <div className="content-stretch flex flex-col gap-[4px] h-[46px] items-start relative shrink-0 w-[344px]" data-name="Container" data-node-id="261:6691">
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="261:6692">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#101828] text-[18px] text-nowrap whitespace-pre" data-node-id="261:6693">
                                  Unit 002
                                </p>
                                <div className="bg-[#00c950] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="261:6694">
                                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="261:6695">
                                    Available
                                  </p>
                                </div>
                              </div>
                              <p className="font-['Inter:Regular',_sans-serif] font-normal h-[16px] leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full" data-node-id="261:6696">
                                Townhome 2BR
                              </p>
                            </div>
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="261:6665">
                              <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-node-id="261:6666">
                                <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="261:6667">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6668">
                                    <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] w-[54px]" data-node-id="261:6671">
                                    $145.00
                                  </p>
                                </div>
                                <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="261:6672">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6673">
                                    <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre" data-node-id="261:6678">
                                    120 Sq Ft
                                  </p>
                                </div>
                                <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="261:6679">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6680">
                                    <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] w-[53px]" data-node-id="261:6685">
                                    3 Assets
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Unit Card 3 */}
                        <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex flex-col items-start min-w-[288px] relative rounded-[24px] shrink-0 w-[392px]" data-node-id="261:6486">
                          <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Card" data-node-id="261:6487">
                            <div className="h-[128px] relative shrink-0 w-full" data-name="ImageWithFallback" data-node-id="261:6488">
                              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/assets/unit-image-3.png" />
                            </div>
                          </div>
                          <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[24px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Card" data-node-id="261:6491">
                            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="261:6705">
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="261:6706">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#101828] text-[18px] text-nowrap whitespace-pre" data-node-id="261:6707">
                                  Unit 003
                                </p>
                                <div className="bg-[#00c950] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="261:6708">
                                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="261:6709">
                                    Available
                                  </p>
                                </div>
                              </div>
                              <p className="font-['Inter:Regular',_sans-serif] font-normal h-[16px] leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full" data-node-id="261:6710">
                                Executive Suite
                              </p>
                            </div>
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="261:6505">
                              <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-node-id="261:6506">
                                <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="261:6507">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6508">
                                    <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] w-[54px]" data-node-id="261:6511">
                                    $145.00
                                  </p>
                                </div>
                                <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="261:6512">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6513">
                                    <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre" data-node-id="261:6518">
                                    120 Sq Ft
                                  </p>
                                </div>
                                <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="261:6519">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="261:6520">
                                    <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] w-[53px]" data-node-id="261:6525">
                                    3 Assets
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Unit Card 4 */}
                        <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex flex-col items-start min-w-[288px] relative rounded-[24px] shrink-0 w-[392px]" data-node-id="269:7478">
                          <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Card" data-node-id="269:7479">
                            <div className="h-[128px] relative shrink-0 w-full" data-name="ImageWithFallback" data-node-id="269:7480">
                              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/assets/unit-image-3.png" />
                            </div>
                          </div>
                          <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[24px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Card" data-node-id="269:7481">
                            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="269:7482">
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="269:7483">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#101828] text-[18px] text-nowrap whitespace-pre" data-node-id="269:7484">
                                  Unit 003
                                </p>
                                <div className="bg-[#00c950] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="269:7485">
                                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="269:7486">
                                    Available
                                  </p>
                                </div>
                              </div>
                              <p className="font-['Inter:Regular',_sans-serif] font-normal h-[16px] leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full" data-node-id="269:7487">
                                Executive Suite
                              </p>
                            </div>
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="269:7488">
                              <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-node-id="269:7489">
                                <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="269:7490">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="269:7491">
                                    <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] w-[54px]" data-node-id="269:7494">
                                    $145.00
                                  </p>
                                </div>
                                <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="269:7495">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="269:7496">
                                    <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre" data-node-id="269:7501">
                                    120 Sq Ft
                                  </p>
                                </div>
                                <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="269:7502">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="269:7503">
                                    <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] w-[53px]" data-node-id="269:7508">
                                    3 Assets
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Unit Card 5 */}
                        <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex flex-col items-start min-w-[288px] relative rounded-[24px] shrink-0 w-[392px]" data-node-id="269:7416">
                          <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Card" data-node-id="269:7417">
                            <div className="h-[128px] relative shrink-0 w-full" data-name="ImageWithFallback" data-node-id="269:7418">
                              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/assets/unit-image-1.png" />
                            </div>
                          </div>
                          <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[24px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Card" data-node-id="269:7419">
                            <div className="content-stretch flex flex-col gap-[4px] h-[46px] items-start relative shrink-0 w-[344px]" data-name="Container" data-node-id="269:7420">
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="269:7421">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#101828] text-[18px] text-nowrap whitespace-pre" data-node-id="269:7422">
                                  Unit 001
                                </p>
                                <div className="bg-[#fb2c36] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="269:7423">
                                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="269:7424">
                                    Occupied
                                  </p>
                                </div>
                              </div>
                              <p className="font-['Inter:Regular',_sans-serif] font-normal h-[16px] leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full" data-node-id="269:7425">
                                Studio
                              </p>
                            </div>
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="269:7426">
                              <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-node-id="269:7427">
                                <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="269:7428">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="269:7429">
                                    <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] w-[54px]" data-node-id="269:7432">
                                    $145.00
                                  </p>
                                </div>
                                <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="269:7433">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="269:7434">
                                    <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre" data-node-id="269:7439">
                                    120 Sq Ft
                                  </p>
                                </div>
                                <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="269:7440">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="269:7441">
                                    <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] w-[53px]" data-node-id="269:7446">
                                    3 Assets
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Unit Card 6 */}
                        <div className="bg-[rgba(255,255,255,0.95)] border border-[rgba(10,18,32,0.05)] border-solid box-border content-stretch flex flex-col items-start min-w-[288px] relative rounded-[24px] shrink-0 w-[392px]" data-node-id="269:7509">
                          <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Card" data-node-id="269:7510">
                            <div className="h-[128px] relative shrink-0 w-full" data-name="ImageWithFallback" data-node-id="269:7511">
                              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/assets/unit-image-2.png" />
                            </div>
                          </div>
                          <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[24px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Card" data-node-id="269:7512">
                            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="269:7513">
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="269:7514">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#101828] text-[18px] text-nowrap whitespace-pre" data-node-id="269:7515">
                                  Unit 004
                                </p>
                                <div className="bg-[#f0b100] box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[10px] shrink-0" data-name="Badge" data-node-id="269:7516">
                                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="269:7517">
                                    Vacant Soon
                                  </p>
                                </div>
                              </div>
                              <p className="font-['Inter:Regular',_sans-serif] font-normal h-[16px] leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full" data-node-id="269:7518">
                                Executive Suite
                              </p>
                            </div>
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="269:7519">
                              <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-node-id="269:7520">
                                <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="269:7521">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="269:7522">
                                    <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] w-[54px]" data-node-id="269:7525">
                                    $145.00
                                  </p>
                                </div>
                                <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="269:7526">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="269:7527">
                                    <img alt="" className="block max-w-none size-full" src={calendarIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre" data-node-id="269:7532">
                                    120 Sq Ft
                                  </p>
                                </div>
                                <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="269:7533">
                                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="269:7534">
                                    <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                                  </div>
                                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#101828] text-[12px] w-[53px]" data-node-id="269:7539">
                                    3 Assets
                                  </p>
                                </div>
                              </div>
                            </div>
                            <p className="font-['Inter:Regular',_sans-serif] font-normal h-[16px] leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full" data-node-id="269:7540">
                              Lease will expire in 45 days
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
  );
}
