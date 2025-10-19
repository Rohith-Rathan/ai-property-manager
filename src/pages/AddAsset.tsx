import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import Button from '../components/forms/Button';
import { Card } from '../components/ui/Card';
import ThemeIcon from '../components/ui/ThemeIcon';
import FormField from '../components/forms/FormField';

// Asset constants for form icons
const closeAddAssetIcon = getAssetPath('close-add-asset-icon');
const inputFieldIcon = getAssetPath('input-field-icon');
const dropdownSelectIcon = getAssetPath('dropdown-select-icon');
const dollarInputIcon = getAssetPath('dollar-input-icon');
const calendarDatePickerIcon = getAssetPath('calendar-date-picker-icon');
const uploadAssetImageIcon = getAssetPath('upload-asset-image-icon');
const saveAssetIcon = getAssetPath('save-asset-icon');

export default function AddAsset() {
  const navigate = useNavigate();
  const [assetDetails, setAssetDetails] = useState({
    assetName: '',
    category: '',
    propertyName: '',
    unitName: '',
    installDate: '',
    warrantyExpiry: '',
    manufacturer: '',
    model: '',
    serialNo: '',
    purchasePrice: '',
    description: '',
    images: [] as File[],
  });

  const handleInputChange = (field: string, value: string) => {
    setAssetDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
    navigate(-1); // Go back to previous page
  };

  const handleSaveAsset = () => {
    console.log('Save Asset clicked', assetDetails);
    // Implement logic to save the asset
    navigate('/assets-warranties'); // Navigate back to assets page
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAssetDetails(prev => ({ 
        ...prev, 
        images: [...prev.images, ...Array.from(event.target.files!)] 
      }));
    }
  };

  return (
    <AppLayout
      activePage="properties"
      searchPlaceholder="Search properties, tenants, tickets..."
      notificationCount={3}
      showThemeToggle={true}
      userName="John Doe"
      userInitials="JD"
      userGradient="aqua-2"
    >
      <Card className="rounded-xxxl shadow-card-large p-8" padding="none" variant="outlined">
        {/* Header Section */}
        <div className="border-b border-overlays-white-inverse-20 border-solid flex items-center justify-between pb-4 pt-8 px-8 w-full">
          <h2 className="font-bold text-lg text-text-primary">Add Asset</h2>
          <Button variant="ghost" onClick={handleCancel} className="p-2">
            <ThemeIcon src={closeAddAssetIcon} alt="Close" className="w-6 h-6" />
          </Button>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-6 px-8 py-6 w-full">
          {/* Asset Name and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Asset Name *"
              placeholder="Enter unit name"
              value={assetDetails.assetName}
              onChange={(value) => handleInputChange('assetName', value)}
              icon="search"
              className="flex-1"
            />
            <FormField
              label="Category *"
              placeholder="Select category"
              value={assetDetails.category}
              onChange={(value) => handleInputChange('category', value)}
              icon="search"
              className="flex-1"
            />
          </div>

          {/* Property Name and Unit Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Property Name *"
              placeholder="Select property"
              value={assetDetails.propertyName}
              onChange={(value) => handleInputChange('propertyName', value)}
              icon="search"
              className="flex-1"
            />
            <FormField
              label="Unit Name *"
              placeholder="Enter unit name"
              value={assetDetails.unitName}
              onChange={(value) => handleInputChange('unitName', value)}
              icon="search"
              className="flex-1"
            />
          </div>

          {/* Install Date and Warranty Expiry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Install Date"
              placeholder="Select date"
              value={assetDetails.installDate}
              onChange={(value) => handleInputChange('installDate', value)}
              icon="search"
              className="flex-1"
            />
            <FormField
              label="Warranty Expiry"
              placeholder="Select date"
              value={assetDetails.warrantyExpiry}
              onChange={(value) => handleInputChange('warrantyExpiry', value)}
              icon="search"
              className="flex-1"
            />
          </div>

          {/* Manufacturer and Model */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Manufacturer"
              placeholder="Enter manufacturer"
              value={assetDetails.manufacturer}
              onChange={(value) => handleInputChange('manufacturer', value)}
              icon="search"
              className="flex-1"
            />
            <FormField
              label="Model"
              placeholder="Enter model"
              value={assetDetails.model}
              onChange={(value) => handleInputChange('model', value)}
              icon="search"
              className="flex-1"
            />
          </div>

          {/* Serial No and Purchase Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Serial No"
              placeholder="Enter serial number"
              value={assetDetails.serialNo}
              onChange={(value) => handleInputChange('serialNo', value)}
              icon="search"
              className="flex-1"
            />
            <FormField
              label="Purchase Price"
              placeholder="Enter price"
              value={assetDetails.purchasePrice}
              onChange={(value) => handleInputChange('purchasePrice', value)}
              icon="search"
              className="flex-1"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-primary">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Asset description"
              value={assetDetails.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="border border-overlays-white-inverse-10 border-solid rounded-lg p-3 h-20 resize-none"
            />
          </div>

          {/* Asset Images */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-primary">Asset Images</label>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="secondary" 
                onClick={() => document.getElementById('image-upload')?.click()}
                className="flex items-center gap-2 px-4 py-2 w-32"
              >
                <ThemeIcon src={uploadAssetImageIcon} alt="Upload Icon" className="w-4 h-4" />
                Upload
                <input 
                  id="image-upload" 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageUpload} 
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-overlays-white-inverse-20 border-solid flex flex-wrap gap-4 items-center justify-center pb-8 pt-8 px-8 w-full">
          <Button variant="secondary" onClick={handleCancel} className="w-40">
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveAsset} className="w-40 flex items-center justify-center gap-2">
            <ThemeIcon src={saveAssetIcon} alt="Save Asset" className="w-4 h-4" />
            Save Asset
          </Button>
        </div>
      </Card>
    </AppLayout>
  );
}