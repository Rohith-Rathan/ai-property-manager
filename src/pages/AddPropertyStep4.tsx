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
const addManagerStepIcon = getAssetPath('add-manager-step-icon'); // Add manager step
const addManagerIcon = getAssetPath('add-manager-icon');         // Add manager action
const addUnitsStepIcon = getAssetPath('add-units-step-icon');    // Add units step
const cancelButtonIcon = getAssetPath('cancel-button-icon');     // Cancel button
const deleteItemIcon = getAssetPath('delete-item-icon');         // Delete item
const dollarIcon = getAssetPath('dollar-icon');                  // Dollar icon
const editItemIcon = getAssetPath('edit-item-icon');             // Edit item
const nextArrowIcon = getAssetPath('next-arrow-icon');           // Next arrow
const previousArrowIcon = getAssetPath('previous-arrow-icon');   // Previous arrow
const propertyDetailsStepIcon = getAssetPath('property-details-step-icon'); // Property details step
const saveIcon = getAssetPath('save-icon');                      // Save action

export default function AddPropertyStep4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative h-screen w-screen" data-name="Add Property" data-node-id="250:5130">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container" data-node-id="250:5131">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-full">
          {/* Header */}
          <div className="bg-[rgba(255,255,255,0.8)] border-[0px_0px_1px] border-[rgba(10,18,32,0.1)] border-solid h-[72px] relative shrink-0 w-full" data-name="Header" data-node-id="250:5132">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-center relative w-full">
              <div className="border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.2)] border-solid box-border content-stretch flex flex-col h-[72px] items-center justify-center pl-[16px] pr-[19px] py-[16px] relative shrink-0 w-[64px]" data-name="Container" data-node-id="I250:5132;189:15783">
                <div className="bg-gradient-to-b content-stretch flex from-[#7c86ff] items-center justify-center relative rounded-[12px] shrink-0 size-[32px] to-[#2b7fff]" data-name="Container" data-node-id="I250:5132;189:15784">
                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I250:5132;189:15785">
                    <img alt="" className="block max-w-none size-full" src={loginLogoIcon} />
                  </div>
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex grow h-full items-center justify-between min-h-px min-w-px px-[24px] py-[8px] relative shrink-0" data-name="Container" data-node-id="I250:5132;189:15793">
                <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[10px] relative shrink-0 w-[320px]" data-name="Container" data-node-id="I250:5132;189:15794">
                  <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I250:5132;189:15795">
                    <img alt="" className="block max-w-none size-full" src={searchIcon} />
                  </div>
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre" data-node-id="I250:5132;189:15798">
                    Search properties, tenants, tickets...
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="I250:5132;189:15799">
                  <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="I250:5132;189:15800">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I250:5132;189:15801">
                      <img alt="" className="block max-w-none size-full" src={notificationIcon} />
                    </div>
                    <div className="absolute bg-[#fb2c36] left-[17px] rounded-[10px] size-[20px] top-[-4px]" data-name="Badge" data-node-id="I250:5132;189:15804">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip relative rounded-[inherit] size-[20px]">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="I250:5132;189:15805">
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" data-name="Button" data-node-id="I250:5132;189:15806">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I250:5132;189:15807">
                      <img alt="" className="block max-w-none size-full" src={settingsIcon} />
                    </div>
                  </div>
                  <button className="box-border content-stretch cursor-pointer flex items-center justify-center overflow-visible p-0 relative rounded-[10px] shrink-0 size-[32px]" data-name="Theme Switch Mode" data-node-id="I250:5132;256:4134">
                    <div className="relative shrink-0 size-[16px]" data-name="Moon--Streamline-Tabler" data-node-id="I250:5132;256:4134;255:6041">
                      <img alt="" className="block max-w-none size-full" src={themeSwitchIcon} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Main Content" data-node-id="250:5133">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative size-full">
              {/* Left Navigation */}
              <div className="bg-[rgba(255,255,255,0.8)] border-[0px_1px_0px_0px] border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col h-full items-start relative shrink-0 w-[64px]" data-name="Left Navigation" data-node-id="250:5134">
                <div className="basis-0 box-border content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px pb-0 pt-[16px] px-[16px] relative shrink-0 w-[63px]" data-name="Navigation" data-node-id="I250:5134;189:15625">
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I250:5134;189:15626">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I250:5134;189:15627">
                      <img alt="" className="block max-w-none size-full" src={dashboardNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0.2)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0.2)] w-full" data-name="Button" data-node-id="I250:5134;189:15632">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I250:5134;189:15633">
                      <img alt="" className="block max-w-none size-full" src={propertiesNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I250:5134;189:15641">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I250:5134;189:15642">
                      <img alt="" className="block max-w-none size-full" src={tenantsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I250:5134;189:15647">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I250:5134;189:15648">
                      <img alt="" className="block max-w-none size-full" src={maintenanceNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I250:5134;189:15651">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I250:5134;189:15652">
                      <img alt="" className="block max-w-none size-full" src={reportsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I250:5134;189:15654">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I250:5134;189:15655">
                      <img alt="" className="block max-w-none size-full" src={analyticsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I250:5134;189:15673">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I250:5134;189:15674">
                      <img alt="" className="block max-w-none size-full" src={settingsNavIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(124,134,255,0)] gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 to-[rgba(43,127,255,0)] w-full" data-name="Button" data-node-id="I250:5134;189:15669">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="I250:5134;189:15670">
                      <img alt="" className="block max-w-none size-full" src={helpNavIcon} />
                    </div>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col h-[61px] items-center pb-px pl-[16px] pr-[19px] pt-[16px] relative shrink-0 w-[63px]" data-name="Container" data-node-id="I250:5134;189:15677">
                  <div className="content-stretch flex gap-[8px] items-center relative rounded-[1.67772e+07px] shrink-0" data-name="Button" data-node-id="I250:5134;189:15678">
                    <div className="content-stretch flex items-start overflow-clip relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Primitive.span" data-node-id="I250:5134;189:15679">
                      <div className="basis-0 bg-gradient-to-b from-[#00d3f2] grow h-[32px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 to-[#2b7fff]" data-name="Text" data-node-id="I250:5134;189:15680">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center relative w-full">
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="I250:5134;189:15681">
                            JD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="basis-0 box-border content-stretch flex flex-col gap-[32px] grow h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto pb-[72px] pt-[32px] px-[72px] relative shrink-0" data-name="NewDashboardScreen" data-node-id="250:5135">
                {/* Page Header */}
                <div className="content-center flex flex-wrap gap-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="250:5136">
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container" data-node-id="250:5137">
                    <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[36px] relative shrink-0 text-[#101828] text-[30px]" data-node-id="250:5138">
                      Add Property
                    </p>
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px]" data-node-id="250:5139">
                      Step 4 of 4: Add Manager
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button Container" data-node-id="250:5140">
                    <button className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer" data-name="Button" data-node-id="250:5141">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="250:5142">
                        <img alt="" className="block max-w-none size-full" src={cancelButtonIcon} />
                      </div>
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="250:5145">
                        Cancel
                      </p>
                    </button>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container" data-node-id="250:5146">
                  <div className="bg-[#00c950] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Container" data-node-id="250:5147">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="250:5148">
                      <img alt="" className="block max-w-none size-full" src={propertyDetailsStepIcon} />
                    </div>
                  </div>
                  <div className="bg-[#00c950] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Container" data-node-id="250:5149">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="250:5150">
                      <img alt="" className="block max-w-none size-full" src={addUnitsStepIcon} />
                    </div>
                  </div>
                  <div className="bg-[#00c950] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Container" data-node-id="250:5151">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="250:5152">
                      <img alt="" className="block max-w-none size-full" src={addAssetsStepIcon} />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b content-stretch flex from-[#7c86ff] items-center justify-center relative rounded-[12px] shrink-0 size-[40px] to-[#2b7fff]" data-name="Container" data-node-id="250:5153">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="250:5154">
                      <img alt="" className="block max-w-none size-full" src={addManagerStepIcon} />
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col gap-[24px] items-start p-[32px] relative rounded-[16px] shrink-0 w-full" data-name="Card" data-node-id="250:5155">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="250:5156">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container" data-node-id="250:5157">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px]" data-node-id="250:5158">
                        Property Manager
                      </p>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px]" data-node-id="250:5159">
                        Assign a manager to your property
                      </p>
                    </div>
                    <button className="bg-gradient-to-b box-border content-stretch flex from-[#7c86ff] gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 to-[#2b7fff] cursor-pointer" data-name="Button" data-node-id="250:5160">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="250:5161">
                        <img alt="" className="block max-w-none size-full" src={addManagerIcon} />
                      </div>
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" data-node-id="250:5164">
                        Add Manager
                      </p>
                    </button>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="250:5165">
                    {/* Manager 1 */}
                    <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[16px] items-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Frame 133" data-node-id="250:5166">
                      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="250:5167">
                        <div className="content-stretch flex items-start overflow-clip relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Primitive.span" data-node-id="250:5168">
                          <div className="basis-0 bg-gradient-to-b from-[#00d3f2] grow h-[48px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 to-[#2b7fff]" data-name="Text" data-node-id="250:5169">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[48px] items-center justify-center relative w-full">
                              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="250:5170">
                                JD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container" data-node-id="250:5171">
                        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]" data-node-id="250:5172">
                          John Doe
                        </p>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]" data-node-id="250:5173">
                          john.doe@email.com
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="250:5174">
                        <div className="bg-[#00c950] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Badge" data-node-id="250:5175">
                          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="250:5176">
                            Active
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="250:5177">
                        <button className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[24px] cursor-pointer" data-name="Button" data-node-id="250:5178">
                          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="250:5179">
                            <img alt="" className="block max-w-none size-full" src={editItemIcon} />
                          </div>
                        </button>
                        <button className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[24px] cursor-pointer" data-name="Button" data-node-id="250:5180">
                          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="250:5181">
                            <img alt="" className="block max-w-none size-full" src={deleteItemIcon} />
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Manager 2 */}
                    <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[16px] items-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Frame 145" data-node-id="250:5182">
                      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container" data-node-id="250:5183">
                        <div className="content-stretch flex items-start overflow-clip relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Primitive.span" data-node-id="250:5184">
                          <div className="basis-0 bg-gradient-to-b from-[#e60076] grow h-[48px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 to-[#ff9a9e]" data-name="Text" data-node-id="250:5185">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[48px] items-center justify-center relative w-full">
                              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" data-node-id="250:5186">
                                JS
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container" data-node-id="250:5187">
                        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]" data-node-id="250:5188">
                          Jane Smith
                        </p>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]" data-node-id="250:5189">
                          jane.smith@email.com
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="250:5190">
                        <div className="bg-[#f0b100] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Badge" data-node-id="250:5191">
                          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="250:5192">
                            Pending
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container" data-node-id="250:5193">
                        <button className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[24px] cursor-pointer" data-name="Button" data-node-id="250:5194">
                          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="250:5195">
                            <img alt="" className="block max-w-none size-full" src={editItemIcon} />
                          </div>
                        </button>
                        <button className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[24px] cursor-pointer" data-name="Button" data-node-id="250:5196">
                          <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="250:5197">
                            <img alt="" className="block max-w-none size-full" src={deleteItemIcon} />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="Container" data-node-id="250:5198">
                    <button className="border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer" data-name="Button" data-node-id="250:5199">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="250:5200">
                        <img alt="" className="block max-w-none size-full" src={previousArrowIcon} />
                      </div>
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="250:5203">
                        Previous
                      </p>
                    </button>
                    <button className="bg-gradient-to-b box-border content-stretch flex from-[#7c86ff] gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 to-[#2b7fff] cursor-pointer" data-name="Button" data-node-id="250:5204">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon" data-node-id="250:5205">
                        <img alt="" className="block max-w-none size-full" src={saveIcon} />
                      </div>
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" data-node-id="250:5206">
                        Save Property
                      </p>
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
