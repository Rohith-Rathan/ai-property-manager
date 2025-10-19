import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import Card from '../components/ui/Card';
import Button from '../components/forms/Button';
import Chip from '../components/ui/Chip';
import ThemeIcon from '../components/ui/ThemeIcon';

// Asset constants - using complete asset mapping
const invoiceIcon = getAssetPath('dollar-paid-icon');
const closeIcon = getAssetPath('close-invoice-icon');
const downloadIcon = getAssetPath('download-pdf-icon');

export default function ViewInvoice() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  const handleDownloadPDF = () => {
    console.log('Download PDF clicked');
    // Implement PDF download functionality
  };

  return (
    <AppLayout
      activePage="properties"
      userName="John Doe"
      userInitials="JD"
      userGradient="aqua-2"
      onSearch={(query) => console.log('ViewInvoice search:', query)}
      onNavigationClick={(itemId) => console.log(`ViewInvoice navigation: ${itemId}`)}
    >
      {/* Main Invoice Card */}
      <Card className="rounded-xxxl shadow-card-large p-8" padding="none" variant="outlined">
        {/* Header Section */}
        <div className="border-b border-overlays-white-inverse-20 border-solid box-border content-stretch flex items-center justify-between pb-4 pt-8 px-8 relative shrink-0 w-full">
          <div className="content-stretch flex gap-2 items-center relative shrink-0">
            {/* Invoice Icon */}
            <div className="bg-gradient-ai-violet-2 content-stretch flex items-center justify-center relative rounded-xxl shrink-0 size-10">
              <div className="relative shrink-0 size-5">
                <ThemeIcon src={invoiceIcon} alt="Invoice" size="sm" variant="white" />
              </div>
            </div>
            
            {/* Title and Badge */}
            <div className="content-stretch flex flex-col gap-0.5 items-start relative shrink-0">
              <div className="content-stretch flex gap-1 items-center relative shrink-0 w-full">
                <p className="basis-0 font-bold grow leading-base min-h-px min-w-px not-italic relative shrink-0 text-subtitle text-primary">
                  Monthly Invoice
                </p>
                <Chip
                  label="Paid"
                  variant="success"
                  size="sm"
                />
              </div>
              <p className="font-normal leading-4 not-italic relative shrink-0 text-tertiary text-sm w-full">
                Invoice date October 6, 2025
              </p>
            </div>
          </div>
          
          {/* Close Button */}
          <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 size-8 cursor-pointer">
            <div className="relative shrink-0 size-6">
              <ThemeIcon src={closeIcon} alt="Close" size="sm" variant="default" />
            </div>
          </div>
        </div>

        {/* Invoice Details Section */}
        <div className="box-border content-stretch flex flex-col gap-6 items-start px-8 py-6 relative shrink-0 w-full">
          {/* Invoice Details Grid */}
          <div className="border-b border-overlays-white-inverse-10 border-solid box-border content-stretch flex flex-col gap-4 items-start pb-6 pt-0 px-0 relative shrink-0 w-full">
            {/* Row 1: Due Date & Status */}
            <div className="content-stretch flex gap-4 items-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex gap-2 h-4 items-center relative shrink-0">
                  <p className="font-normal leading-4 not-italic relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre">
                    Due Date
                  </p>
                </div>
                <p className="font-medium leading-[22px] not-italic relative shrink-0 text-primary text-sm text-nowrap whitespace-pre">
                  October 6, 2025
                </p>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex gap-2 h-4 items-center relative shrink-0">
                  <p className="font-normal leading-4 not-italic relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre">
                    Status
                  </p>
                </div>
                <p className="font-medium leading-[22px] not-italic relative shrink-0 text-primary text-sm text-nowrap whitespace-pre">
                  Paid
                </p>
              </div>
            </div>

            {/* Row 2: Invoice Number & Reason */}
            <div className="content-stretch flex gap-4 items-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex gap-2 h-4 items-center relative shrink-0">
                  <p className="font-normal leading-4 not-italic relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre">
                    Invoice Number
                  </p>
                </div>
                <p className="font-medium leading-[22px] not-italic relative shrink-0 text-info text-sm text-nowrap whitespace-pre">
                  DF80690B-0042
                </p>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex gap-2 h-4 items-center relative shrink-0">
                  <p className="font-normal leading-4 not-italic relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre">
                    Invoice Reason
                  </p>
                </div>
                <p className="font-medium leading-[22px] not-italic relative shrink-0 text-primary text-sm text-nowrap whitespace-pre">
                  Monthly Rent
                </p>
              </div>
            </div>

            {/* Row 3: Payment Method */}
            <div className="content-stretch flex gap-4 items-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex gap-2 h-4 items-center relative shrink-0">
                  <p className="font-normal leading-4 not-italic relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre">
                    Payment Method
                  </p>
                </div>
                <p className="font-medium leading-[22px] not-italic relative shrink-0 text-primary text-sm text-nowrap whitespace-pre">
                  VISA 5071
                </p>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start min-h-px min-w-px opacity-0 relative shrink-0">
                {/* Hidden placeholder for layout consistency */}
              </div>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-primary text-sm text-nowrap w-full whitespace-pre">
                <p className="font-normal leading-4 relative shrink-0">
                  Subtotal
                </p>
                <p className="font-medium leading-[22px] relative shrink-0">
                  $180.00
                </p>
              </div>
              <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-primary text-sm text-nowrap w-full whitespace-pre">
                <p className="font-normal leading-4 relative shrink-0">
                  Taxes
                </p>
                <p className="font-medium leading-[22px] relative shrink-0">
                  $00.00
                </p>
              </div>
              <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-primary text-nowrap w-full whitespace-pre">
                <p className="font-normal leading-4 relative shrink-0 text-sm">
                  Total
                </p>
                <p className="font-semibold leading-6 relative shrink-0 text-base">
                  $180.00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-overlays-white-inverse-20 border-solid box-border content-center cursor-pointer flex flex-wrap gap-4 items-center justify-center pb-8 pt-8 px-8 relative shrink-0 w-full">
          <Button
            label="Cancel"
            variant="outline"
            size="md"
            onClick={handleCancel}
            icon="none"
            className="w-40"
          />
          <Button
            label="Download PDF"
            variant="primary"
            size="md"
            gradient="brand-aurora"
            onClick={handleDownloadPDF}
            icon="none"
            rightIcon="arrow"
            className="w-40"
          />
        </div>
      </Card>
    </AppLayout>
  );
}
