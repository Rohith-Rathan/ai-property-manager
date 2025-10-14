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
const viewDetailsIcon = getAssetPath('view-details-icon');            // View details
const editPropertyIcon = getAssetPath('edit-property-icon');         // Edit property
const addUnitIcon = getAssetPath('add-unit-icon');                   // Add unit
const deletePropertyIcon = getAssetPath('delete-property-icon');     // Delete property

export default function PropertyMenu() {
  return (
    <div className="bg-white border border-[rgba(10,18,32,0.1)] border-solid box-border content-stretch flex flex-col items-start p-px relative rounded-[16px] size-full" data-node-id="189:19511">
      <div className="relative shrink-0 w-full" data-name="View Details" data-node-id="189:19512">
        <button className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full cursor-pointer" data-name="Button" data-node-id="189:19513">
          <div className="bg-gradient-to-l box-border content-stretch flex from-[#00d3f2] items-center justify-center relative rounded-[9999px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)] shrink-0 size-[28px] to-[#2b7fff]" data-name="Container" data-node-id="189:19513">
            <div className="relative shrink-0 size-[12px]" data-name="Icon" data-node-id="189:19514">
              <img alt="" className="block max-w-none size-full" src={viewDetailsIcon} />
            </div>
          </div>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="189:19515">
            View Details
          </p>
        </button>
      </div>
      <div className="relative shrink-0 w-full" data-name="Edit Asset" data-node-id="189:19516">
        <button className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full cursor-pointer" data-name="Button" data-node-id="189:19517">
          <div className="bg-gradient-to-r content-stretch flex from-[#e60076] items-center justify-center relative rounded-[9999px] shrink-0 size-[28px] to-[#ff9a9e]" data-name="Container" data-node-id="189:19517">
            <div className="relative shrink-0 size-[12px]" data-name="Icon" data-node-id="189:19518">
              <img alt="" className="block max-w-none size-full" src={editPropertyIcon} />
            </div>
          </div>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="189:19519">
            Edit Property
          </p>
        </button>
      </div>
      <div className="relative shrink-0 w-full" data-name="Schedule Maintenance" data-node-id="189:19520">
        <button className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full cursor-pointer" data-name="Button" data-node-id="189:19521">
          <div className="bg-gradient-to-r box-border content-stretch flex from-[#2b7fff] items-center justify-center relative rounded-[9999px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)] shrink-0 size-[28px] to-[#7c86ff]" data-name="Container" data-node-id="189:19521">
            <div className="relative shrink-0 size-[12px]" data-name="Icon" data-node-id="189:19522">
              <img alt="" className="block max-w-none size-full" src={addUnitIcon} />
            </div>
          </div>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="189:19523">
            Add Unit
          </p>
        </button>
      </div>
      <div className="relative shrink-0 w-full" data-name="Remove Asset" data-node-id="189:19524">
        <button className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full cursor-pointer" data-name="Button" data-node-id="189:19525">
          <div className="bg-gradient-to-r box-border content-stretch flex from-[#ad46ff] items-center justify-center relative rounded-[9999px] shadow-[0px_8px_25px_0px_rgba(102,126,234,0.4)] shrink-0 size-[28px] to-[#c27aff]" data-name="Container" data-node-id="189:19525">
            <div className="relative shrink-0 size-[12px]" data-name="Icon" data-node-id="189:19526">
              <img alt="" className="block max-w-none size-full" src={deletePropertyIcon} />
            </div>
          </div>
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre" data-node-id="189:19527">
            Delete Property
          </p>
        </button>
      </div>
    </div>
  );
}
