import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import StepWizard from '../components/ui/StepWizard';
import Button from '../components/forms/Button';
import { Card } from '../components/ui/Card';
import ThemeIcon from '../components/ui/ThemeIcon';

// Asset constants for form icons - using correct tenant step 3 icons
const idProofsSectionIcon = getAssetPath('id-proofs-section-icon'); // ID proofs section
const uploadDocumentIcon = getAssetPath('upload-document-icon'); // Upload document icon
const downloadDocumentIcon = getAssetPath('download-document-icon'); // Download document icon
const editDocumentIcon = getAssetPath('edit-document-icon'); // Edit document icon
const deleteDocumentIcon = getAssetPath('delete-document-icon'); // Delete document icon
const previousStepIcon = getAssetPath('previous-step-icon'); // Previous step icon
const saveTenantIcon = getAssetPath('save-tenant-icon'); // Save tenant icon
const cancelIcon = getAssetPath('cancel-button-icon'); // Cancel button icon

export default function AddNewTenantStep3() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2); // Step 3 is index 2 (0-indexed)
  
  // Form state for uploaded documents
  const [uploadedDocuments, setUploadedDocuments] = useState([
    { id: 1, name: 'Driving License', type: 'driving-license', uploaded: true },
    { id: 2, name: 'Social Security Copy', type: 'social-security', uploaded: true }
  ]);

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
      icon: getAssetPath('checkmark-check-icon'),
      iconAlt: 'Lease Agreement'
    },
    {
      id: 'id-proofs',
      title: 'ID Proofs',
      icon: getAssetPath('tenant-id-proofs-active-icon'),
      iconAlt: 'ID Proofs'
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('File uploaded:', file.name);
      // Handle file upload logic here
    }
  };

  const handleDocumentAction = (documentId: number, action: 'download' | 'edit' | 'delete') => {
    console.log(`Document ${documentId} - ${action} clicked`);
    // Handle document actions here
  };

  const handlePrevious = () => {
    navigate('/add-new-tenant-step-2'); // Navigate to previous step
  };

  const handleSaveTenant = () => {
    console.log('Saving tenant...');
    // Handle save tenant logic here
    navigate('/dashboard'); // Navigate to dashboard after saving
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
    navigate('/dashboard'); // Navigate to dashboard
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
            currentStep={currentStep}
            title="Add New Tenant"
            subtitle="Follow these steps to add a new tenant"
            onCancel={handleCancel}
          />
        </Card>

        {/* ID Proofs Section */}
        <Card className="p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ThemeIcon src={idProofsSectionIcon} alt="ID Proofs Icon" className="w-6 h-6" />
              <h2 className="text-lg font-semibold text-gray-900">ID Proofs</h2>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-6">Add supporting documents of the tenant</p>

          {/* Upload Area */}
          <div className="bg-gray-50 p-8 rounded-lg mb-6">
            <div className="flex flex-col items-center justify-center">
              <ThemeIcon src={uploadDocumentIcon} alt="Upload Icon" className="w-6 h-6 mb-2" />
              <p className="text-sm text-gray-500 mb-4">Upload lease agreement</p>
              <input
                type="file"
                id="file-upload"
                onChange={handleFileUpload}
                className="hidden"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              <label
                htmlFor="file-upload"
                className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                Choose File
              </label>
            </div>
          </div>
        </Card>

        {/* Lease Agreement Documents */}
        <Card className="p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Lease Agreement Documents</h2>
          </div>

          {/* Document List */}
          <div className="space-y-4">
            {uploadedDocuments.map((doc) => (
              <div key={doc.id} className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <ThemeIcon src={idProofsSectionIcon} alt="Document Icon" className="w-10 h-10" />
                  <p className="font-medium text-gray-900">{doc.name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    className="p-2"
                    onClick={() => handleDocumentAction(doc.id, 'download')}
                  >
                    <ThemeIcon src={downloadDocumentIcon} alt="Download Icon" className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="p-2"
                    onClick={() => handleDocumentAction(doc.id, 'edit')}
                  >
                    <ThemeIcon src={editDocumentIcon} alt="Edit Icon" className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="p-2"
                    onClick={() => handleDocumentAction(doc.id, 'delete')}
                  >
                    <ThemeIcon src={deleteDocumentIcon} alt="Delete Icon" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <Card className="p-8">
          <div className="flex justify-between">
            <Button variant="secondary" onClick={handlePrevious} className="flex items-center gap-2">
              <ThemeIcon src={previousStepIcon} alt="Previous Icon" className="w-4 h-4 rotate-180" />
              Previous
            </Button>
            <Button 
              variant="primary" 
              onClick={handleSaveTenant} 
              className="flex items-center gap-2 bg-gradient-to-r from-brand-aurora-color1 to-brand-aurora-color2 text-white"
            >
              <ThemeIcon src={saveTenantIcon} alt="Save Icon" className="w-4 h-4" />
              Save Tenant
            </Button>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
