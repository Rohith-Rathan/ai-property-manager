import React from 'react';
import { getAssetPath } from '../utils/completeAssetMapping';

// Asset constants with descriptive names - using complete asset mapping
const addPropertyActionIcon = getAssetPath('add-property-action-icon');     // Add property action
const addTenantActionIcon = getAssetPath('add-tenant-action-icon');         // Add tenant action
const requestRentActionIcon = getAssetPath('request-rent-action-icon');     // Request rent action
const scheduleMaintenanceActionIcon = getAssetPath('schedule-maintenance-action-icon'); // Schedule maintenance action

export default function QuickActions() {
  return (
    <div className="bg-static-white border border-overlays-white-inverse-10 border-solid box-border content-stretch flex flex-col items-start p-px relative rounded-xxl shadow-card-small size-full" data-node-id="288:20055">
      <div className="relative shrink-0 w-full" data-name="View Details" data-node-id="288:20056">
        <button className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center px-4 py-3 relative w-full cursor-pointer" data-name="Button" data-node-id="288:20057">
          <div className="bg-gradient-info-flow box-border content-stretch flex items-center justify-center relative rounded-full shadow-brand-blue-glow shrink-0 w-7 h-7" data-name="Container" data-node-id="288:20081">
            <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="288:20121">
              <img alt="" className="block max-w-none size-full" src={addPropertyActionIcon} />
            </div>
          </div>
          <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-primary text-small text-nowrap whitespace-pre" data-node-id="288:20060">
            Add Property
          </p>
        </button>
      </div>
      <div className="relative shrink-0 w-full" data-name="Edit Asset" data-node-id="288:20094">
        <button className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center px-4 py-3 relative w-full cursor-pointer" data-name="Button" data-node-id="288:20095">
          <div className="bg-gradient-magenta-pop content-stretch flex items-center justify-center relative rounded-full shadow-neon-pink-glow shrink-0 w-7 h-7" data-name="Container" data-node-id="288:20095">
            <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="289:20130">
              <img alt="" className="block max-w-none size-full" src={addTenantActionIcon} />
            </div>
          </div>
          <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-primary text-small text-nowrap whitespace-pre" data-node-id="288:20102">
            Add Tenant
          </p>
        </button>
      </div>
      <div className="relative shrink-0 w-full" data-name="Schedule Maintenance" data-node-id="288:20112">
        <button className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center px-4 py-3 relative w-full cursor-pointer" data-name="Button" data-node-id="288:20113">
          <div className="bg-gradient-brand-aurora box-border content-stretch flex items-center justify-center relative rounded-full shadow-brand-purple-glow shrink-0 w-7 h-7" data-name="Container" data-node-id="288:20113">
            <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="288:20114">
              <img alt="" className="block max-w-none size-full" src={scheduleMaintenanceActionIcon} />
            </div>
          </div>
          <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-primary text-small text-nowrap whitespace-pre" data-node-id="288:20120">
            Schedule Maintenance
          </p>
        </button>
      </div>
      <div className="relative shrink-0 w-full" data-name="Remove Asset" data-node-id="288:20103">
        <button className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center px-4 py-3 relative w-full cursor-pointer" data-name="Button" data-node-id="288:20104">
          <div className="bg-gradient-ai-violet-2 box-border content-stretch flex items-center justify-center relative rounded-full shadow-brand-purple-glow shrink-0 w-7 h-7" data-name="Container" data-node-id="288:20104">
            <div className="relative shrink-0 w-4 h-4" data-name="Icon" data-node-id="289:20136">
              <img alt="" className="block max-w-none size-full" src={requestRentActionIcon} />
            </div>
          </div>
          <p className="font-sans font-normal leading-small not-italic relative shrink-0 text-primary text-small text-nowrap whitespace-pre" data-node-id="288:20111">
            Request Rent
          </p>
        </button>
      </div>
    </div>
  );
}
