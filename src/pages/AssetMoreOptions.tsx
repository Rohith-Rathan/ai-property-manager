import React from 'react';
import { getAssetPath } from '../utils/completeAssetMapping';
import ThemeIcon from '../components/ui/ThemeIcon';

// Asset constants
const viewDetailsAssetIcon = getAssetPath('view-details-asset-icon');
const editAssetIcon = getAssetPath('edit-asset-icon');
const scheduleMaintenanceAssetIcon = getAssetPath('schedule-maintenance-asset-icon');
const removeAssetIcon = getAssetPath('remove-asset-icon');

interface AssetMoreOptionsProps {
  onViewDetails?: () => void;
  onEditAsset?: () => void;
  onScheduleMaintenance?: () => void;
  onRemoveAsset?: () => void;
  className?: string;
}

export default function AssetMoreOptions({
  onViewDetails,
  onEditAsset,
  onScheduleMaintenance,
  onRemoveAsset,
  className = ''
}: AssetMoreOptionsProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-xl shadow-lg ${className}`}>
      {/* View Details */}
      <div className="flex items-center gap-2 p-4 hover:bg-gray-50 cursor-pointer" onClick={onViewDetails}>
        <ThemeIcon src={viewDetailsAssetIcon} alt="View Details" className="w-4 h-4" />
        <span className="text-sm font-medium text-gray-900">View Details</span>
      </div>

      {/* Edit Asset */}
      <div className="flex items-center gap-2 p-4 hover:bg-gray-50 cursor-pointer" onClick={onEditAsset}>
        <ThemeIcon src={editAssetIcon} alt="Edit Asset" className="w-4 h-4" />
        <span className="text-sm font-medium text-gray-900">Edit Asset</span>
      </div>

      {/* Schedule Maintenance */}
      <div className="flex items-center gap-2 p-4 hover:bg-gray-50 cursor-pointer" onClick={onScheduleMaintenance}>
        <ThemeIcon src={scheduleMaintenanceAssetIcon} alt="Schedule Maintenance" className="w-4 h-4" />
        <span className="text-sm font-medium text-gray-900">Schedule Maintenance</span>
      </div>

      {/* Remove Asset */}
      <div className="flex items-center gap-2 p-4 hover:bg-gray-50 cursor-pointer" onClick={onRemoveAsset}>
        <ThemeIcon src={removeAssetIcon} alt="Remove Asset" className="w-4 h-4" />
        <span className="text-sm font-medium text-red-600">Remove Asset</span>
      </div>
    </div>
  );
}