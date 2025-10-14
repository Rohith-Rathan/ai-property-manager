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
const addAssetsStepIcon = getAssetPath('add-assets-step-icon');  // Add assets step
const addAssetsIcon = getAssetPath('add-assets-icon');           // Add assets action
const addManagerStepIcon = getAssetPath('add-manager-step-icon'); // Add manager step
const addUnitsStepIcon = getAssetPath('add-units-step-icon');    // Add units step
const cancelButtonIcon = getAssetPath('cancel-button-icon');     // Cancel button
const deleteItemIcon = getAssetPath('delete-item-icon');         // Delete item
const dollarIcon = getAssetPath('dollar-icon');                  // Dollar icon
const editItemIcon = getAssetPath('edit-item-icon');             // Edit item
const nextArrowIcon = getAssetPath('next-arrow-icon');           // Next arrow
const previousArrowIcon = getAssetPath('previous-arrow-icon');   // Previous arrow
const propertyDetailsStepIcon = getAssetPath('property-details-step-icon'); // Property details step

export default function AddPropertyStep3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative h-screen w-screen" data-name="Add Property" data-node-id="246:4613">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="246:4614">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-full">
          {/* Header */}
          <div className="bg-[rgba(255,255,255,0.8)] border-[0px_0px_1px] border-[rgba(10,18,32,0.1)] border-solid h-[72px] relative shrink-0 w-full" data-name="Header" data-node-id="246:4615">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-center relative w-full">
              <div className="border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.2)] border-solid box-border content-stretch flex flex-col h-[72px] items-center justify-center pl-[16px] pr-[19px] py-[16px] relative shrink-0 w-[64px]" data-name="Container" data-node-id="I246:4615;189:15783">
                <div className="bg-gradient-to-b content-stretch flex from-[#7c86ff] items-center justify-center relative rounded-[12px] shrink-0 size-[32px] to-[#2b7fff]" data-name="Container" data-node-id="I246:4615;189:15784">
                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I246:4615;189:15785">
                    <img alt="" className="block max-w-none size-full" src={loginLogoIcon} />
                  </div>
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex grow h-full items-center justify-between min-h-px min-w-px px-[24px] py-[8px] relative shrink-0" data-name="Container" data-node-id="I246:4615;189:15793">
                <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[10px] relative shrink-0 w-[320px]" data-name="Container" data-node-id="I246:4615;189:15794">
                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I246:4615;189:15795">
                    <img alt="" className="block max-w-none size-full" src={searchIcon} />
                  </div>
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="I246:4615;189:15798">
                    Search properties, tenants, tickets...
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="I246:4615;189:15799">
                  <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="I246:4615;189:15800">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I246:4615;189:15801">
                      <img alt="" className="block max-w-none size-full" src={notificationIcon} />
                    </div>
                    <div className="absolute bg-[#fb2c36] left-[17px] rounded-[10px] size-[20px] top-[-4px]" data-name="Badge" data-node-id="I246:4615;189:15804">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip relative rounded-[inherit] size-[20px]">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="I246:4615;189:15805">
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="I246:4615;189:15806">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I246:4615;189:15807">
                      <img alt="" className="block max-w-none size-full" src={settingsIcon} />
                    </div>
                  </div>
                  <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-[10px] shrink-0 size-[32px]" data-name="Theme Switch Mode" data-node-id="I246:4615;256:4134">
                    <div className="relative shrink-0 size-[16px]" data-name="Moon--Streamline-Tabler" data-node-id="I246:4615;256:4134;255:6041">
                      <img alt="" className="block max-w-none size-full" src={themeSwitchIcon} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Main Content" data-node-id="246:4616">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative size-full">
              {/* Left Navigation */}
              <div className="bg-[rgba(255,255,255,0.8)] border-[0px_1px_0px_0px] border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col h-full items-start relative shrink-0 w-[64px]" data-name="Left Navigation" data-node-id="246:4617">
                <div className="basis-0 box-border content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px pb-0 pt-[16px] px-[16px] relative shrink-0 w-[63px]" data-name="Navigation" data-node-id="I246:4617;189:15625">
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I246:4617;189:15626">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I246:4617;189:15627">
                      <img alt="" className="block max-w-none size-full" src={dashboardNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0.2)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0.2)] w-full" data-name="Button" data-node-id="I246:4617;189:15632">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I246:4617;189:15633">
                      <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I246:4617;189:15641">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I246:4617;189:15642">
                      <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I246:4617;189:15647">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I246:4617;189:15648">
                      <img alt="" className="block max-w-none size-full" src={maintenanceNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I246:4617;189:15651">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I246:4617;189:15652">
                      <img alt="" className="block max-w-none size-full" src={reportsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I246:4617;189:15654">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I246:4617;189:15655">
                      <img alt="" className="block max-w-none size-full" src={analyticsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I246:4617;189:15673">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I246:4617;189:15674">
                      <img alt="" className="block max-w-none size-full" src={settingsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I246:4617;189:15669">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I246:4617;189:15670">
                      <img alt="" className="block max-w-none size-full" src={helpNavIcon} />
                    </div>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col h-[61px] items-center pb-px pl-[16px] pr-[19px] pt-[16px] relative shrink-0 w-[63px]" data-name="Container" data-node-id="I246:4617;189:15677">
                  <div className="content-stretch flex gap-[8px] items-center relative rounded-[1.67772e+07px] shrink-0" data-name="Button" data-node-id="I246:4617;189:15678">
                    <div className="content-stretch flex items-start overflow-clip relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Primitive.span" data-node-id="I246:4617;189:15679">
                      <div className="basis-0 bg-gradient-to-b from-[#00d3f2] grow h-[32px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 to-[#2b7fff]" data-name="Text" data-node-id="I246:4617;189:15680">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center relative w-full">
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="I246:4617;189:15681">
                            JD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="basis-0 box-border content-stretch flex flex-col gap-[32px] grow h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto pb-[72px] pt-[32px] px-[72px] relative shrink-0" data-name="NewDashboardScreen" data-node-id="246:4618">
                {/* Page Header */}
                <div className="content-center flex flex-wrap gap-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="246:4619">
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container" data-node-id="246:4620">
                    <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[36px] relative shrink-0 text-[#101828] text-[30px]" data-node-id="246:4621">
                      Add Property
                    </p>
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px]" data-node-id="246:4622">
                      Step 3 of 4: Add Assets
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button Container" data-node-id="246:4623">
                    <button className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer" data-name="Button" data-node-id="246:4624">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4625">
                        <img alt="" className="block max-w-none size-full" src={cancelButtonIcon} />
                      </div>
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="246:4628">
                        Cancel
                      </p>
                    </button>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container" data-node-id="246:4629">
                  <div className="bg-[#00c950] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Container" data-node-id="246:4630">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4631">
                      <img alt="" className="block max-w-none size-full" src={propertyDetailsStepIcon} />
                    </div>
                  </div>
                  <div className="bg-[#00c950] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Container" data-node-id="246:4632">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4633">
                      <img alt="" className="block max-w-none size-full" src={addUnitsStepIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b content-stretch flex from-[#7c86ff] items-center justify-center relative rounded-[12px] shrink-0 size-[40px] to-[#2b7fff]" data-name="Container" data-node-id="246:4634">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4635">
                      <img alt="" className="block max-w-none size-full" src={addAssetsStepIcon} />
                    </div>
                  </div>
                  <div className="bg-[#6a7282] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Container" data-node-id="246:4636">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4637">
                      <img alt="" className="block max-w-none size-full" src={addManagerStepIcon} />
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col gap-[24px] items-start p-[32px] relative rounded-[16px] shrink-0 w-full" data-name="Card" data-node-id="246:4638">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="246:4639">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container" data-node-id="246:4640">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px]" data-node-id="246:4641">
                        Assets
                      </p>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px]" data-node-id="246:4642">
                        Add assets to your property
                      </p>
                    </div>
                    <button className="bg-gradient-to-b box-border content-stretch flex from-[#7c86ff] gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 to-[#2b7fff] cursor-pointer" data-name="Button" data-node-id="246:4643">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4644">
                        <img alt="" className="block max-w-none size-full" src={addAssetsIcon} />
                      </div>
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" data-node-id="246:4647">
                        Add Asset
                      </p>
                    </button>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="246:4648">
                    {/* Asset 1 */}
                    <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[16px] items-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Frame 133" data-node-id="246:4649">
                      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="246:4650">
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="ImageWithFallback" data-node-id="246:4651">
                          <img alt="" className="block max-w-none size-[48px] object-cover rounded-[8px]" src="/assets/asset-image-1.png" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container" data-node-id="246:4652">
                        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]" data-node-id="246:4653">
                          HVAC System
                        </p>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]" data-node-id="246:4654">
                          Central Air Conditioning
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="246:4655">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4656">
                          <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="246:4659">
                          $5,000
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="246:4660">
                        <div className="bg-[#00c950] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Badge" data-node-id="246:4661">
                          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="246:4662">
                            Working
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="246:4663">
                        <button className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[24px] cursor-pointer" data-name="Button" data-node-id="246:4664">
                          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4665">
                            <img alt="" className="block max-w-none size-full" src={editItemIcon} />
                          </div>
                        </button>
                        <button className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[24px] cursor-pointer" data-name="Button" data-node-id="246:4666">
                          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4667">
                            <img alt="" className="block max-w-none size-full" src={deleteItemIcon} />
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Asset 2 */}
                    <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[16px] items-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Frame 145" data-node-id="246:4668">
                      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="246:4669">
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="ImageWithFallback" data-node-id="246:4670">
                          <img alt="" className="block max-w-none size-[48px] object-cover rounded-[8px]" src="/assets/asset-image-2.png" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container" data-node-id="246:4671">
                        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]" data-node-id="246:4672">
                          Water Heater
                        </p>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]" data-node-id="246:4673">
                          50 Gallon Electric
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="246:4674">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4675">
                          <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="246:4678">
                          $800
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="246:4679">
                        <div className="bg-[#f0b100] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Badge" data-node-id="246:4680">
                          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="246:4681">
                            Maintenance
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="246:4682">
                        <button className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[24px] cursor-pointer" data-name="Button" data-node-id="246:4683">
                          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4684">
                            <img alt="" className="block max-w-none size-full" src={editItemIcon} />
                          </div>
                        </button>
                        <button className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[24px] cursor-pointer" data-name="Button" data-node-id="246:4685">
                          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4686">
                            <img alt="" className="block max-w-none size-full" src={deleteItemIcon} />
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Asset 3 */}
                    <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[16px] items-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Frame 146" data-node-id="246:4687">
                      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="246:4688">
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="ImageWithFallback" data-node-id="246:4689">
                          <img alt="" className="block max-w-none size-[48px] object-cover rounded-[8px]" src="/assets/asset-image-3.png" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container" data-node-id="246:4690">
                        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]" data-node-id="246:4691">
                          Security System
                        </p>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]" data-node-id="246:4692">
                          Smart Lock & Camera
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="246:4693">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4694">
                          <img alt="" className="block max-w-none size-full" src={dollarIcon} />
                        </div>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#101828] text-[12px]" data-node-id="246:4697">
                          $1,200
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="246:4698">
                        <div className="bg-[#00c950] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Badge" data-node-id="246:4699">
                          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="246:4700">
                            Working
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="246:4701">
                        <button className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[24px] cursor-pointer" data-name="Button" data-node-id="246:4702">
                          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4703">
                            <img alt="" className="block max-w-none size-full" src={editItemIcon} />
                          </div>
                        </button>
                        <button className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[24px] cursor-pointer" data-name="Button" data-node-id="246:4704">
                          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4705">
                            <img alt="" className="block max-w-none size-full" src={deleteItemIcon} />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="Container" data-node-id="246:4706">
                    <button className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer" data-name="Button" data-node-id="246:4707">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4708">
                        <img alt="" className="block max-w-none size-full" src={previousArrowIcon} />
                      </div>
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="246:4711">
                        Previous
                      </p>
                    </button>
                    <button className="bg-gradient-to-b box-border content-stretch flex from-[#7c86ff] gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 to-[#2b7fff] cursor-pointer" data-name="Button" data-node-id="246:4712">
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" data-node-id="246:4713">
                        Next
                      </p>
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="246:4714">
                        <img alt="" className="block max-w-none size-full" src={nextArrowIcon} />
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
