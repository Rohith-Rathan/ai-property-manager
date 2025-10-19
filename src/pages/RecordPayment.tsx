import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import Button from '../components/forms/Button';
import { Card } from '../components/ui/Card';
import ThemeIcon from '../components/ui/ThemeIcon';
import FormField from '../components/forms/FormField';

// Asset constants for icons
const closeIcon = getAssetPath('close-invoice-icon');
const dollarAmountIcon = getAssetPath('dollar-amount-icon');
const dropdownIcon = getAssetPath('dropdown-arrow-down-icon');

export default function RecordPayment() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    outstandingBalance: '$1950',
    paymentAmount: '0.00',
    paymentMethod: '',
    referenceNumber: '',
    waiveAmount: '',
    reason: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  const handleRecordPayment = () => {
    console.log('Recording payment:', formData);
    // Implement payment recording logic here
    navigate('/rent-invoices-payments'); // Navigate back to invoices page
  };

  return (
    <AppLayout
      activePage="invoices"
      searchPlaceholder="Search invoices, tenants, amounts..."
      notificationCount={3}
      showThemeToggle={true}
      userName="John Doe"
      userInitials="JD"
      userGradient="aqua-2"
    >
      <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
        {/* Header */}
        <Card className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-gray-900">Record Payment - INV-2024-003</h1>
            <Button variant="ghost" onClick={handleCancel} className="p-2">
              <ThemeIcon src={closeIcon} alt="Close" className="w-6 h-6" />
            </Button>
          </div>

          {/* Outstanding Balance */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Outstanding Balance:
            </label>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center justify-between">
              <span className="font-medium text-gray-900">{formData.outstandingBalance}</span>
              <ThemeIcon src={dollarAmountIcon} alt="Dollar" className="w-4 h-4" />
            </div>
          </div>

          {/* Payment Amount and Method */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Amount
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="paymentAmount"
                  value={formData.paymentAmount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ThemeIcon src={dollarAmountIcon} alt="Dollar" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method
              </label>
              <div className="relative">
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white pr-10"
                >
                  <option value="">Select method</option>
                  <option value="cash">Cash</option>
                  <option value="check">Check</option>
                  <option value="bank-transfer">Bank Transfer</option>
                  <option value="credit-card">Credit Card</option>
                  <option value="debit-card">Debit Card</option>
                </select>
                <ThemeIcon src={dropdownIcon} alt="Dropdown" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Reference Number */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reference Number (Optional)
            </label>
            <div className="relative">
              <input
                type="text"
                name="referenceNumber"
                value={formData.referenceNumber}
                onChange={handleInputChange}
                placeholder="Transaction ID, Check number, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ThemeIcon src={dollarAmountIcon} alt="Reference" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
            </div>
          </div>

          {/* Waive Amount and Reason */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Waive Amount
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="waiveAmount"
                  value={formData.waiveAmount}
                  onChange={handleInputChange}
                  placeholder="Enter"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ThemeIcon src={dollarAmountIcon} alt="Dollar" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason
              </label>
              <div className="relative">
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white pr-10"
                >
                  <option value="">Select reason</option>
                  <option value="late-fee-waiver">Late Fee Waiver</option>
                  <option value="maintenance-credit">Maintenance Credit</option>
                  <option value="promotional-discount">Promotional Discount</option>
                  <option value="other">Other</option>
                </select>
                <ThemeIcon src={dropdownIcon} alt="Dropdown" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end">
            <Button variant="secondary" onClick={handleCancel} className="px-6 py-3">
              Cancel
            </Button>
            <Button 
              variant="primary" 
              onClick={handleRecordPayment}
              className="px-6 py-3 bg-gradient-to-r from-brand-aurora-color1 to-brand-aurora-color2 text-white"
            >
              Record Payment
            </Button>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
