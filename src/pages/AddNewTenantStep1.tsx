import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import StepWizard from '../components/ui/StepWizard';
import Button from '../components/forms/Button';
import { Card } from '../components/ui/Card';
import ThemeIcon from '../components/ui/ThemeIcon';

// Asset constants for form icons - using correct tenant step icons
const tenantBasicDetailsIcon = getAssetPath('tenant-details-section-icon'); // User icon for tenant details
const calendarIcon = getAssetPath('dropdown-arrow-up-icon'); // Email icon for form fields
const uploadIcon = getAssetPath('upload-icon'); // Upload icon
const basicDetailsStepIcon = getAssetPath('tenant-basic-details-icon'); // User icon for step 1
const leaseAgreementStepIcon = getAssetPath('tenant-lease-agreement-icon'); // Document icon for step 2
const idProofsStepIcon = getAssetPath('tenant-id-proofs-icon'); // ID icon for step 3
const dropdownIcon = getAssetPath('dropdown-arrow-down-icon'); // Dropdown arrow
const cancelIcon = getAssetPath('cancel-button-icon'); // Cancel button icon
const nextIcon = getAssetPath('next-arrow-icon'); // Next arrow icon

export default function AddNewTenantStep1() {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    cityState: 'New York, NY',
    zipCode: '',
    preferredLanguage: 'English',
    communicationChannels: ['Email'],
    profilePicture: null as File | null
  });

  // Step wizard configuration
  const steps = [
    {
      id: 'basic-details',
      title: 'Basic Details',
      icon: basicDetailsStepIcon,
      iconAlt: 'Basic Details'
    },
    {
      id: 'lease-agreement',
      title: 'Lease Agreement',
      icon: leaseAgreementStepIcon,
      iconAlt: 'Lease Agreement'
    },
    {
      id: 'id-proofs',
      title: 'ID Proofs',
      icon: idProofsStepIcon,
      iconAlt: 'ID Proofs'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    navigate('/tenant-management-grid');
  };

  const handleNext = () => {
    // Navigate to step 2
    navigate('/add-new-tenant-step-2');
  };

  const handleSearch = (query: string) => {
    console.log('AddNewTenantStep1 search:', query);
  };

  return (
    <AppLayout
      activePage="tenants"
      searchPlaceholder="Search properties, tenants, tickets..."
      notificationCount={3}
      showThemeToggle={true}
      userName="Jhon Deo"
      userInitials="JD"
      userGradient="aqua-2"
      onSearch={handleSearch}
      onNavigationClick={(itemId) => console.log(`AddNewTenantStep1 navigation: ${itemId}`)}
    >
      <div className="flex flex-col gap-4 items-start w-full">
        {/* Step Wizard */}
        <StepWizard
          steps={steps}
          currentStep={0}
          title="Add New Tenant"
          subtitle="Follow these steps to add a new tenant"
          onCancel={handleCancel}
        />

        {/* Tenant Basic Details Card */}
        <Card className="bg-overlays-black-inverse-95 border border-subtle rounded-xxxl shadow-card-large p-8 w-full">
          <div className="flex items-center justify-between w-full mb-6">
            <div className="flex gap-2 items-center">
              <ThemeIcon src={tenantBasicDetailsIcon} alt="Tenant Basic Details" size="md" variant="default" />
              <h2 className="font-semibold leading-6 text-base text-primary">
                Tenant Basic Details
              </h2>
            </div>
            <Button
              label="View All"
              variant="ghost"
              size="sm"
              className="opacity-0"
            />
          </div>
          <p className="font-normal leading-4 text-sm text-tertiary mb-6">
            Enter the essential information about your tenant
          </p>

          {/* Form Fields */}
          <div className="flex flex-col gap-6 w-full">
            {/* Full Name */}
            <div className="form-field-item">
              <label className="flex gap-2 h-4 items-center w-full">
                <p className="font-sans font-normal leading-4 relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre">Full Name *</p>
              </label>
              <div className="bg-overlays-black-inverse-95 border border-overlays-white-inverse-5 rounded-lg p-3 flex items-center w-full">
                <input 
                  type="text" 
                  placeholder="Enter" 
                  className="bg-transparent outline-none text-primary text-base w-full"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                />
              </div>
            </div>

            {/* Email and Phone Row */}
            <div className="form-field-group">
              <div className="form-field-item">
                <label className="flex gap-2 h-4 items-center w-full">
                  <p className="font-sans font-normal leading-4 relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre">Email Address *</p>
                </label>
                <div className="bg-overlays-black-inverse-95 border border-overlays-white-inverse-5 rounded-lg p-3 flex items-center justify-between w-full">
                  <input 
                    type="email" 
                    placeholder="Enter" 
                    className="bg-transparent outline-none text-primary text-base w-full"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  <ThemeIcon src={calendarIcon} alt="Email" size="sm" variant="default" />
                </div>
              </div>
              <div className="form-field-item">
                <label className="flex gap-2 h-4 items-center w-full">
                  <p className="font-sans font-normal leading-4 relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre">Phone Number *</p>
                </label>
                <div className="bg-overlays-black-inverse-95 border border-overlays-white-inverse-5 rounded-lg p-3 flex items-center justify-between w-full">
                  <input 
                    type="tel" 
                    placeholder="Enter" 
                    className="bg-transparent outline-none text-primary text-base w-full"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                  <ThemeIcon src={calendarIcon} alt="Phone" size="sm" variant="default" />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="form-field-item">
              <label className="flex gap-2 h-4 items-center w-full">
                <p className="font-sans font-normal leading-4 relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre">Address *</p>
              </label>
              <div className="bg-overlays-black-inverse-95 border border-overlays-white-inverse-5 rounded-lg p-3 flex items-center w-full">
                <input 
                  type="text" 
                  placeholder="Enter full address" 
                  className="bg-transparent outline-none text-primary text-base w-full"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
              </div>
            </div>

            {/* City/State and Zip Code Row */}
            <div className="form-field-group">
              <div className="form-field-item">
                <label className="flex gap-2 h-4 items-center w-full">
                  <p className="font-sans font-normal leading-4 relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre">City, State *</p>
                </label>
                <div className="bg-overlays-black-inverse-95 border border-overlays-white-inverse-5 rounded-lg p-3 flex items-center justify-between w-full">
                  <input 
                    type="text" 
                    placeholder="New York, NY" 
                    className="bg-transparent outline-none text-primary text-base w-full"
                    value={formData.cityState}
                    onChange={(e) => handleInputChange('cityState', e.target.value)}
                  />
                  <ThemeIcon src={dropdownIcon} alt="Dropdown" size="sm" variant="default" />
                </div>
              </div>
              <div className="form-field-item">
                <label className="flex gap-2 h-4 items-center w-full">
                  <p className="font-sans font-normal leading-4 relative shrink-0 text-tertiary text-sm text-nowrap whitespace-pre">Zip Code *</p>
                </label>
                <div className="bg-overlays-black-inverse-95 border border-overlays-white-inverse-5 rounded-lg p-3 flex items-center justify-between w-full">
                  <input 
                    type="text" 
                    placeholder="Enter" 
                    className="bg-transparent outline-none text-primary text-base w-full"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  />
                  <ThemeIcon src={calendarIcon} alt="Zip" size="sm" variant="default" />
                </div>
              </div>
            </div>

            {/* Preferred Language */}
            <div className="form-field-item">
              <p className="font-medium leading-[22px] text-sm text-primary mb-2">Preferred Language</p>
              <div className="flex flex-wrap gap-2 items-center w-full">
                {['English', 'French', 'German', 'Spanish', 'Italian', 'Russian', 'Polish', 'Greek'].map((language) => (
                  <Button
                    key={language}
                    label={language}
                    variant={formData.preferredLanguage === language ? "primary" : "outline"}
                    size="sm"
                    onClick={() => handleInputChange('preferredLanguage', language)}
                    className="text-sm"
                  />
                ))}
              </div>
            </div>

            {/* Communication Channels */}
            <div className="form-field-item">
              <p className="font-medium leading-[22px] text-sm text-primary mb-2">Communication Channels</p>
              <div className="flex flex-wrap gap-2 items-center w-full">
                {['WhatsApp', 'SMS', 'Email'].map((channel) => (
                  <Button
                    key={channel}
                    label={channel}
                    variant={formData.communicationChannels.includes(channel) ? "primary" : "outline"}
                    size="sm"
                    onClick={() => {
                      const channels = formData.communicationChannels.includes(channel)
                        ? formData.communicationChannels.filter(c => c !== channel)
                        : [...formData.communicationChannels, channel];
                      setFormData(prev => ({ ...prev, communicationChannels: channels }));
                    }}
                    className="text-sm"
                  />
                ))}
              </div>
            </div>

            {/* Profile Picture Upload */}
            <div className="form-field-item">
              <p className="font-medium leading-[22px] text-sm text-primary mb-2">Profile Picture</p>
              <Button
                label="Upload"
                variant="outline"
                size="md"
                icon="none"
                onClick={() => console.log('File upload clicked')}
                className="w-32"
              >
                <ThemeIcon src={uploadIcon} alt="Upload" size="sm" variant="default" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Action Buttons Card */}
        <Card className="bg-overlays-black-inverse-95 border border-subtle rounded-xxxl shadow-card-large p-8 w-full">
          <div className="responsive-flex row gap-6 justify-between w-full">
            <Button
              label="Cancel"
              variant="outline"
              size="md"
              icon="none"
              onClick={handleCancel}
              className="flex-1"
            >
              <ThemeIcon src={cancelIcon} alt="Cancel" size="sm" variant="default" />
            </Button>
            <Button
              label="Next"
              variant="primary"
              size="md"
              gradient="brand-aurora"
              icon="none"
              onClick={handleNext}
              className="flex-1"
            >
              <ThemeIcon src={nextIcon} alt="Next" size="sm" variant="white" />
            </Button>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
