import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import StepWizard from '../components/ui/StepWizard';
import Button from '../components/forms/Button';
import { Card } from '../components/ui/Card';
import ThemeIcon from '../components/ui/ThemeIcon';

// Asset constants for form icons - using existing mapped icons
const leaseAgreementSectionIcon = getAssetPath('document-pdf-icon'); // Lease agreement section
const dropdownIcon = getAssetPath('dropdown-arrow-down-icon'); // Dropdown arrow
const calendarIcon = getAssetPath('calendar-date-icon'); // Calendar icon
const dollarIcon = getAssetPath('dollar-icon'); // Dollar icon
const generateAgreementIcon = getAssetPath('generate-agreement-icon'); // Generate agreement button
const documentIcon = getAssetPath('document-files-icon'); // Document icon
const downloadIcon = getAssetPath('download-icon'); // Download icon
const editIcon = getAssetPath('edit-icon'); // Edit icon
const deleteIcon = getAssetPath('delete-icon'); // Delete icon
const previousIcon = getAssetPath('previous-arrow-icon'); // Previous button icon
const nextIcon = getAssetPath('next-arrow-icon'); // Next arrow icon

export default function AddNewTenantStep2() {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    propertyName: '',
    unitName: '',
    leaseStartDate: '',
    leaseEndDate: '',
    duration: '',
    renewalOption: '',
    noticePeriod: '',
    rentAmount: '',
    securityDeposit: '',
    rentPayGracePeriod: '',
    termsAndConditions: ''
  });

  // Step wizard configuration
  const steps = [
    {
      id: 'basic-details',
      title: 'Basic Details',
      icon: getAssetPath('checkmark-check-icon'),
      iconAlt: 'Basic Details'
    },
    {
      id: 'lease-agreement',
      title: 'Lease Agreement',
      icon: getAssetPath('document-file-icon'),
      iconAlt: 'Lease Agreement'
    },
    {
      id: 'id-proofs',
      title: 'ID Proofs',
      icon: getAssetPath('tenant-id-proofs-icon'),
      iconAlt: 'ID Proofs'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  const handlePrevious = () => {
    navigate('/add-new-tenant-step-1');
  };

  const handleNext = () => {
    navigate('/add-new-tenant-step-3');
  };

  const handleGenerateAgreement = () => {
    // Handle AI agreement generation
    console.log('Generating lease agreement...');
  };

  return (
    <AppLayout
      activePage="tenants"
      searchPlaceholder="Search properties, tenants, tickets..."
      notificationCount={3}
      showThemeToggle={true}
      userName="John Doe"
      userInitials="JD"
      userGradient="aqua-2"
    >
      <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
        {/* Step Wizard */}
        <Card className="p-8">
          <StepWizard
            steps={steps}
            currentStep={1}
            title="Add New Tenant"
            subtitle="Follow these steps to add a new tenant"
            onCancel={handleCancel}
          />
        </Card>

        {/* Lease Agreement Form */}
        <Card className="p-8">
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-2">
              <ThemeIcon
                src={leaseAgreementSectionIcon}
                alt="Lease Agreement"
                className="w-6 h-6"
              />
              <h2 className="text-lg font-semibold text-gray-900">Lease Agreement</h2>
            </div>
            <p className="text-sm text-gray-600">
              Enter the essential information about the lease agreement
            </p>
          </div>

          <div className="space-y-6">
            {/* Property and Unit Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Property Name *</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.propertyName}
                    onChange={(e) => handleInputChange('propertyName', e.target.value)}
                  />
                  <ThemeIcon
                    src={dropdownIcon}
                    alt="Dropdown"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Unit Name *</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.unitName}
                    onChange={(e) => handleInputChange('unitName', e.target.value)}
                  />
                  <ThemeIcon
                    src={dropdownIcon}
                    alt="Dropdown"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>
            </div>

            {/* Lease Dates and Duration */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Lease Start Date *</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.leaseStartDate}
                    onChange={(e) => handleInputChange('leaseStartDate', e.target.value)}
                  />
                  <ThemeIcon
                    src={calendarIcon}
                    alt="Calendar"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Lease End Date *</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.leaseEndDate}
                    onChange={(e) => handleInputChange('leaseEndDate', e.target.value)}
                  />
                  <ThemeIcon
                    src={calendarIcon}
                    alt="Calendar"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Duration *</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                  />
                  <ThemeIcon
                    src={dropdownIcon}
                    alt="Dropdown"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>
            </div>

            {/* Renewal and Notice Period */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Renewal Option *</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.renewalOption}
                    onChange={(e) => handleInputChange('renewalOption', e.target.value)}
                  />
                  <ThemeIcon
                    src={dropdownIcon}
                    alt="Dropdown"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Notice Period *</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.noticePeriod}
                    onChange={(e) => handleInputChange('noticePeriod', e.target.value)}
                  />
                  <ThemeIcon
                    src={dropdownIcon}
                    alt="Dropdown"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>
            </div>

            {/* Financial Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Rent Amount *</label>
                <div className="relative">
                  <ThemeIcon
                    src={dollarIcon}
                    alt="Dollar"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.rentAmount}
                    onChange={(e) => handleInputChange('rentAmount', e.target.value)}
                  />
                  <ThemeIcon
                    src={dropdownIcon}
                    alt="Dropdown"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Security Deposit *</label>
                <div className="relative">
                  <ThemeIcon
                    src={dollarIcon}
                    alt="Dollar"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.securityDeposit}
                    onChange={(e) => handleInputChange('securityDeposit', e.target.value)}
                  />
                  <ThemeIcon
                    src={dropdownIcon}
                    alt="Dropdown"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Rent Pay Grace Period *</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.rentPayGracePeriod}
                    onChange={(e) => handleInputChange('rentPayGracePeriod', e.target.value)}
                  />
                  <ThemeIcon
                    src={dropdownIcon}
                    alt="Dropdown"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Terms & Conditions *</label>
              <textarea
                placeholder="Unit description"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.termsAndConditions}
                onChange={(e) => handleInputChange('termsAndConditions', e.target.value)}
              />
            </div>

            {/* Generate Agreement Button */}
            <div className="flex justify-center">
              <Button
                onClick={handleGenerateAgreement}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <ThemeIcon
                  src={generateAgreementIcon}
                  alt="Generate"
                  className="w-4 h-4"
                />
                Generate Agreement
              </Button>
            </div>
          </div>
        </Card>

        {/* Lease Agreement Documents */}
        <Card className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Lease Agreement Documents</h2>
          </div>

          <div className="space-y-4">
            {/* AI Generated Document */}
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ThemeIcon
                    src={documentIcon}
                    alt="Document"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Lease Agreement (AI Generated)</h3>
                  <p className="text-sm text-gray-600">
                    Download this document and send to Tenant for E-signature
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <ThemeIcon
                    src={downloadIcon}
                    alt="Download"
                    className="w-4 h-4"
                  />
                </button>
                <button className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <ThemeIcon
                    src={editIcon}
                    alt="Edit"
                    className="w-4 h-4"
                  />
                </button>
                <button className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <ThemeIcon
                    src={deleteIcon}
                    alt="Delete"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>

            {/* Signed Document */}
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ThemeIcon
                    src={documentIcon}
                    alt="Document"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Lease Agreement (Signed)</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <ThemeIcon
                    src={downloadIcon}
                    alt="Download"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <Card className="p-8">
          <div className="flex justify-between">
            <Button
              onClick={handlePrevious}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <ThemeIcon
                src={previousIcon}
                alt="Previous"
                className="w-4 h-4"
              />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Next
              <ThemeIcon
                src={nextIcon}
                alt="Next"
                className="w-4 h-4"
              />
            </Button>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
