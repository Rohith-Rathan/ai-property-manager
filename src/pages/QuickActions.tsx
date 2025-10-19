import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MoreActions, MoreActionItem } from '../components/ui/MoreActions';
import { getAssetPath } from '../utils/completeAssetMapping';

// Asset constants with descriptive names - using complete asset mapping
const addPropertyActionIcon = getAssetPath('add-property-action-icon');     // Add property action
const addTenantActionIcon = getAssetPath('add-tenant-action-icon');         // Add tenant action
const requestRentActionIcon = getAssetPath('request-rent-action-icon');     // Request rent action
const scheduleMaintenanceActionIcon = getAssetPath('schedule-maintenance-action-icon'); // Schedule maintenance action

interface QuickActionsProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export default function QuickActions({ isOpen, onClose, triggerRef }: QuickActionsProps) {
  console.log('QuickActions rendered with isOpen:', isOpen);
  const navigate = useNavigate();
  
  const quickActionItems: MoreActionItem[] = [
    {
      id: 'add-property',
      label: 'Add Property',
      icon: addPropertyActionIcon,
      gradient: 'info-flow',
      onClick: () => {
        console.log('Add Property clicked');
        navigate('/add-property-1');
        onClose();
      }
    },
    {
      id: 'add-tenant',
      label: 'Add Tenant',
      icon: addTenantActionIcon,
      gradient: 'magenta-pop',
      onClick: () => {
        console.log('Add Tenant clicked');
        onClose();
      }
    },
    {
      id: 'schedule-maintenance',
      label: 'Schedule Maintenance',
      icon: scheduleMaintenanceActionIcon,
      gradient: 'brand-aurora',
      onClick: () => {
        console.log('Schedule Maintenance clicked');
        onClose();
      }
    },
    {
      id: 'request-rent',
      label: 'Request Rent',
      icon: requestRentActionIcon,
      gradient: 'ai-violet-2',
      onClick: () => {
        console.log('Request Rent clicked');
        onClose();
      }
    }
  ];

  return (
    <MoreActions
      items={quickActionItems}
      isOpen={isOpen}
      onClose={onClose}
      variant="gradient"
      position="center"
      triggerRef={triggerRef}
      className="min-w-56"
    />
  );
}