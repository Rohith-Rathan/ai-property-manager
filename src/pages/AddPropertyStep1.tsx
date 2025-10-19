import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import StepWizard from '../components/ui/StepWizard';
import Button from '../components/forms/Button';
import { Card } from '../components/ui/Card';
import ThemeIcon from '../components/ui/ThemeIcon';

// Asset constants for form icons
const propertyBasicDetailsIcon = getAssetPath('property-basic-details-icon');
const calendarIcon = getAssetPath('calendar-icon');
const dollarIcon = getAssetPath('dollar-icon');
const uploadIcon = getAssetPath('upload-icon');
const propertyDetailsStepIcon = getAssetPath('property-details-step-icon');
const addUnitsStepIcon = getAssetPath('add-units-step-icon');
const addAssetsStepIcon = getAssetPath('add-assets-step-icon');
const addManagerStepIcon = getAssetPath('add-manager-step-icon');

export default function AddPropertyStep1() {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: 'Residential',
    totalUnits: '2',
    address: '',
    cityState: 'New York, NY',
    zipCode: '',
    yearBuilt: '',
    totalSqFt: '',
    description: '',
    amenities: [] as string[],
    propertyImages: [] as File[]
  });

  // Step wizard configuration
  const steps = [
    {
      id: 'property-details',
      title: 'Property Details',
      icon: propertyDetailsStepIcon,
      iconAlt: 'Property Details'
    },
    {
      id: 'add-units',
      title: 'Add Units',
      icon: addUnitsStepIcon,
      iconAlt: 'Add Units'
    },
    {
      id: 'add-assets',
      title: 'Add Assets',
      icon: addAssetsStepIcon,
      iconAlt: 'Add Assets'
    },
    {
      id: 'add-manager',
      title: 'Add Manager',
      icon: addManagerStepIcon,
      iconAlt: 'Add Manager'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    navigate('/properties-grid');
  };

  const handlePrevious = () => {
    // This is step 1, so previous would go back to properties grid
    navigate('/properties-grid');
  };

  const handleNext = () => {
    // Navigate to step 2
    navigate('/add-property-2');
  };

  const handleSearch = (query: string) => {
    console.log('AddPropertyStep1 search:', query);
  };

  return (
    <AppLayout
      activePage="properties"
      searchPlaceholder="Search properties, tenants, tickets..."
      notificationCount={3}
      showThemeToggle={true}
      userName="Jhon Deo"
      userInitials="JD"
      userGradient="aqua-2"
      onSearch={handleSearch}
      onNavigationClick={(itemId) => console.log(`AddPropertyStep1 navigation: ${itemId}`)}
    >
      <div className="flex flex-col gap-4 items-start w-full">
        {/* Step Wizard */}
        <StepWizard
          title="Add New Property"
          subtitle="Follow these steps to add a new property to your portfolio"
          steps={steps}
          currentStep={1}
          onCancel={handleCancel}
        />

        {/* Form Card */}
      <Card className="rounded-xxxl shadow-card-large p-8" padding="none" variant="outlined">
        {/* Form Header */}
        <div className="flex flex-col gap-2 items-start">
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2 items-center">
                <ThemeIcon src={propertyBasicDetailsIcon} alt="Property Details" size="md" variant="default" />
                <h3 className="font-sans font-semibold leading-base not-italic text-primary text-base">
                  Property Basic Details
                </h3>
              </div>
              <div className="border border-overlays-white-inverse-5 border-solid box-border content-stretch flex gap-2 items-center justify-center opacity-0 px-4 py-2 relative rounded-lg shrink-0">
                <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-primary text-label-small text-center text-nowrap whitespace-pre">
                  View All
                        </p>
                      </div>
                    </div>
            <p className="font-sans font-normal leading-normal not-italic text-tertiary text-label-small">
              Enter the essential information about your property
            </p>
                  </div>

          <div className="flex flex-col gap-6 mt-6 w-full">
            {/* Property Name - Full Width */}
            <div className="flex gap-6 items-center w-full">
              <div className="basis-0 flex flex-col gap-2 grow items-start min-h-px min-w-px">
                <div className="flex gap-2 h-4 items-center w-full">
                  <label className="font-sans font-medium leading-small not-italic text-primary text-small">
                    Property Name *
                  </label>
                    </div>
                <div className="border border-overlays-white-inverse-10 border-solid box-border flex gap-2 items-center p-3 relative rounded-lg w-full">
                  <input
                    type="text"
                    placeholder="Enter property name"
                    value={formData.propertyName}
                    onChange={(e) => handleInputChange('propertyName', e.target.value)}
                    className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-small text-nowrap tracking-normal whitespace-pre flex-1 outline-none bg-transparent"
                  />
              </div>
            </div>
          </div>

            {/* Property Type and Total Units - Two Column */}
            <div className="form-field-group">
              <div className="form-field-item">
                <div className="flex gap-2 h-4 items-center w-full">
                  <label className="font-sans font-medium leading-small not-italic text-primary text-small">
                    Property Type *
                  </label>
                    </div>
                <div className="border border-overlays-white-inverse-10 border-solid box-border flex items-center justify-between p-3 relative rounded-lg w-full cursor-pointer hover:border-overlays-white-inverse-20 transition-colors">
                  <div className="flex gap-2 items-center">
                    <span className="font-sans font-medium leading-small not-italic text-primary text-small">
                      {formData.propertyType}
                    </span>
                  </div>
                  <ThemeIcon src="/assets/dropdown-arrow-down-icon.svg" alt="Dropdown" size="sm" variant="default" />
                    </div>
                  </div>
              <div className="form-field-item">
                <div className="flex gap-2 h-4 items-center w-full">
                  <label className="font-sans font-medium leading-small not-italic text-primary text-small">
                    Total Units *
                  </label>
                    </div>
                <div className="border border-overlays-white-inverse-10 border-solid box-border flex items-center justify-between p-3 relative rounded-lg w-full cursor-pointer hover:border-overlays-white-inverse-20 transition-colors">
                  <div className="flex gap-2 items-center">
                    <span className="font-sans font-medium leading-small not-italic text-primary text-small">
                      {formData.totalUnits}
                    </span>
                  </div>
                  <ThemeIcon src="/assets/dropdown-arrow-down-icon.svg" alt="Dropdown" size="sm" variant="default" />
                    </div>
                  </div>
                    </div>

            {/* Address - Full Width */}
            <div className="form-field-container">
              <div className="form-field-single">
                <div className="flex gap-2 h-4 items-center w-full">
                  <label className="font-sans font-medium leading-small not-italic text-primary text-small">
                    Address *
                  </label>
                </div>
                <div className="border border-overlays-white-inverse-10 border-solid box-border flex gap-2 items-center p-3 relative rounded-lg w-full">
                  <input
                    type="text"
                    placeholder="Enter full address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-small text-nowrap tracking-normal whitespace-pre flex-1 outline-none bg-transparent"
                  />
                        </div>
                      </div>
                    </div>

            {/* City, State and Zip Code - Two Column */}
            <div className="form-field-group">
              <div className="form-field-item">
                <div className="flex gap-2 h-4 items-center w-full">
                  <label className="font-sans font-medium leading-small not-italic text-primary text-small">
                    City, State *
                  </label>
                </div>
                <div className="border border-overlays-white-inverse-10 border-solid box-border flex items-center justify-between p-3 relative rounded-lg w-full cursor-pointer hover:border-overlays-white-inverse-20 transition-colors">
                  <div className="flex gap-2 items-center">
                    <span className="font-sans font-medium leading-small not-italic text-primary text-small">
                      {formData.cityState}
                    </span>
                  </div>
                  <ThemeIcon src="/assets/dropdown-arrow-down-icon.svg" alt="Dropdown" size="sm" variant="default" />
                </div>
              </div>
              <div className="form-field-item">
                <div className="flex gap-2 h-4 items-center w-full">
                  <label className="font-sans font-medium leading-small not-italic text-primary text-small">
                    Zip Code *
                  </label>
                  </div>
                <div className="border border-overlays-white-inverse-10 border-solid box-border flex items-center justify-between p-3 relative rounded-lg w-full cursor-pointer hover:border-overlays-white-inverse-20 transition-colors">
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Enter"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-small text-nowrap tracking-normal whitespace-pre flex-1 outline-none bg-transparent"
                    />
                  </div>
                  <ThemeIcon src="/assets/dropdown-arrow-down-icon.svg" alt="Dropdown" size="sm" variant="default" />
                </div>
                    </div>
                  </div>

            {/* Year Built and Total Sq Ft - Two Column */}
            <div className="form-field-group">
              <div className="form-field-item">
                <div className="flex gap-2 h-4 items-center w-full">
                  <label className="font-sans font-medium leading-small not-italic text-primary text-small">
                    Year Built
                  </label>
                    </div>
                <div className="border border-overlays-white-inverse-10 border-solid box-border flex items-center justify-between p-3 relative rounded-lg w-full cursor-pointer hover:border-overlays-white-inverse-20 transition-colors">
                  <div className="flex gap-2 items-center">
                    <span className="font-sans font-normal leading-normal not-italic text-tertiary text-small">
                      Select
                    </span>
                  </div>
                  <ThemeIcon src="/assets/dropdown-arrow-down-icon.svg" alt="Dropdown" size="sm" variant="default" />
                    </div>
                  </div>
              <div className="form-field-item">
                <div className="flex gap-2 h-4 items-center w-full">
                  <label className="font-sans font-medium leading-small not-italic text-primary text-small">
                    Total Sq Ft
                  </label>
                </div>
                <div className="border border-overlays-white-inverse-10 border-solid box-border flex gap-2 items-center p-3 relative rounded-lg w-full">
                        <input
                          type="text"
                    placeholder="e.g., 5000"
                    value={formData.totalSqFt}
                    onChange={(e) => handleInputChange('totalSqFt', e.target.value)}
                    className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-small text-nowrap tracking-normal whitespace-pre flex-1 outline-none bg-transparent"
                        />
                      </div>
                    </div>
                      </div>

            {/* Description - Full Width */}
            <div className="form-field-container">
              <div className="form-field-single">
                <div className="flex gap-2 h-4 items-center w-full">
                  <label className="font-sans font-medium leading-small not-italic text-primary text-small">
                    Description
                  </label>
                        </div>
                <div className="border border-overlays-white-inverse-10 border-solid box-border flex gap-2 items-start p-3 relative rounded-lg w-full h-20">
                  <textarea
                    placeholder="Property description, amenities, etc."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-small text-nowrap tracking-normal whitespace-pre flex-1 outline-none bg-transparent resize-none"
                    rows={3}
                        />
                      </div>
                    </div>
                      </div>

            {/* Property Amenities */}
            <div className="flex flex-col gap-2">
              <label className="font-sans font-medium leading-small not-italic text-primary text-small">
                Property Amenities
              </label>
              <div className="flex flex-wrap gap-2 items-center w-full">
                {['Swimming Pool', 'Gym', 'Parking', 'Laundry', 'Security', 'Garden', 'Balcony', 'Air Conditioning', 'Heating', 'Internet', 'Pet Friendly', 'Elevator', 'Concierge'].map((amenity) => (
                  <button
                    key={amenity}
                    className={`border border-overlays-white-inverse-10 border-solid box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative rounded-lg shrink-0 cursor-pointer transition-colors ${
                      formData.amenities.includes(amenity) 
                        ? 'bg-gradient-brand-aurora text-white border-transparent' 
                        : 'hover:border-overlays-white-inverse-20'
                    }`}
                    onClick={() => {
                      setFormData(prev => ({
                        ...prev,
                        amenities: prev.amenities.includes(amenity)
                          ? prev.amenities.filter(a => a !== amenity)
                          : [...prev.amenities, amenity]
                      }));
                    }}
                  >
                    <span className={`font-sans font-medium leading-small not-italic text-small text-center text-nowrap whitespace-pre ${
                      formData.amenities.includes(amenity) ? 'text-white' : 'text-tertiary'
                    }`}>
                      {amenity}
                    </span>
                  </button>
                ))}
                        </div>
                      </div>

            {/* Property Images */}
            <div className="form-field-container">
              <div className="form-field-single">
                <div className="flex gap-2 h-4 items-center w-full">
                  <label className="font-sans font-medium leading-small not-italic text-primary text-small">
                    Property Images
                  </label>
                    </div>
                <div className="flex gap-2 items-center w-full">
                  <button className="border border-overlays-white-inverse-10 border-solid box-border flex gap-2 items-center justify-center px-4 py-2 relative rounded-lg shrink-0 w-32 cursor-pointer hover:border-overlays-white-inverse-20 transition-colors">
                    <ThemeIcon src={uploadIcon} alt="Upload" size="sm" variant="default" />
                    <span className="font-sans font-medium leading-small not-italic text-primary text-small text-center text-nowrap whitespace-pre">
                      Upload
                    </span>
                    </button>
                </div>
              </div>
            </div>
          </div>
      </Card>

      {/* Action Buttons Card */}
      <Card className="rounded-xxxl shadow-card-large p-8" padding="none" variant="outlined">
        <div className="responsive-flex row gap-6 justify-between w-full">
            <Button
              label="Cancel"
              variant="outline"
              size="md"
              onClick={handleCancel}
              icon="none"
              className="flex-1"
            />
            <Button
              label="Next"
              variant="primary"
              size="md"
              gradient="brand-aurora"
              onClick={handleNext}
              icon="none"
              rightIcon="arrow"
              className="flex-1"
            />
        </div>
      </Card>
      </div>
    </AppLayout>
  );
}
