import React from 'react';
import { Card } from './Card';
import { Chip } from './Chip';
import Button from '../forms/Button';
import { MoreActionsButton } from './MoreActionsButton';

export interface InvoiceCardProps {
  // Invoice Info
  invoiceId: string;
  status: {
    label: string;
    variant: 'success' | 'error' | 'warning' | 'info';
  };
  
  // Tenant Info
  tenantName: string;
  propertyName: string;
  unitName: string;
  
  // Financial Details
  dueDate: string;
  totalAmount: string;
  paidAmount: string;
  balance: string;
  
  // Actions
  onView?: () => void;
  onRecordPayment?: () => void;
  onSendReminder?: () => void;
  onMoreActions?: () => void;
  
  className?: string;
}

export const InvoiceCard: React.FC<InvoiceCardProps> = ({
  invoiceId,
  status,
  tenantName,
  propertyName,
  unitName,
  dueDate,
  totalAmount,
  paidAmount,
  balance,
  onView,
  onRecordPayment,
  onSendReminder,
  onMoreActions,
  className = ''
}) => {
  return (
    <Card className={`bg-gray-50 border border-overlays-white-inverse-10 p-4 rounded-xxl shadow-card-small ${className}`}>
      <div className="flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h3 className="font-normal text-lg text-primary">
            {invoiceId}
          </h3>
          <div className="flex items-center gap-2">
            <Chip
              label={status.label}
              variant={status.variant}
              type="low-hue-border"
              size="sm"
            />
            {onMoreActions && (
              <MoreActionsButton 
                items={[
                  { 
                    id: 'view-invoice',
                    label: 'View Invoice', 
                    icon: '/assets/view-details-icon.svg',
                    onClick: onMoreActions 
                  },
                  { 
                    id: 'download-invoice',
                    label: 'Download PDF', 
                    icon: '/assets/view-details-icon.svg',
                    onClick: () => console.log('Download invoice clicked') 
                  },
                  { 
                    id: 'edit-invoice',
                    label: 'Edit Invoice', 
                    icon: '/assets/edit-property-icon.svg',
                    onClick: () => console.log('Edit invoice clicked') 
                  },
                  { 
                    id: 'duplicate-invoice',
                    label: 'Duplicate Invoice', 
                    icon: '/assets/view-details-icon.svg',
                    onClick: () => console.log('Duplicate invoice clicked') 
                  }
                ]}
              />
            )}
          </div>
        </div>
        
        {/* Tenant Info */}
        <div className="flex gap-2 items-center">
          <p className="text-xs text-tertiary">
            {tenantName}
          </p>
          <div className="w-1 h-1 bg-tertiary rounded-full"></div>
          <p className="text-xs text-tertiary">
            {propertyName} - {unitName}
          </p>
        </div>
        
        {/* Financial Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-tertiary">Due Date</p>
            <p className="font-medium text-sm text-primary">{dueDate}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-tertiary">Total Amount</p>
            <p className="font-medium text-sm text-primary">{totalAmount}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-tertiary">Paid Amount</p>
            <p className="font-medium text-sm text-success-500">{paidAmount}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-tertiary">Balance</p>
            <p className="font-medium text-sm text-error-500">{balance}</p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 pt-3">
          {onView && (
            <Button
              variant="secondary"
              size="sm"
              className="flex-1"
              onClick={onView}
            >
              View
            </Button>
          )}
          {onRecordPayment && (
            <Button
              variant="secondary"
              size="sm"
              className="flex-1"
              onClick={onRecordPayment}
            >
              Record Payment
            </Button>
          )}
          {onSendReminder && (
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={onSendReminder}
            >
              Send Reminder
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default InvoiceCard;
