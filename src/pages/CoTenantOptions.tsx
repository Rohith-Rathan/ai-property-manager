import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import Card from '../components/ui/Card';
import ThemeIcon from '../components/ui/ThemeIcon';
import { getAssetPath } from '../utils/completeAssetMapping';

// Asset constants using verified SVG files with correct content
const editIcon = getAssetPath('edit-property-icon'); // Contains edit/pencil content
const deleteIcon = getAssetPath('delete-property-icon'); // Contains delete content (red color)

export default function CoTenantOptions() {
  const navigate = useNavigate();

  const handleEditCoTenant = () => {
    console.log('Edit Co-tenant clicked');
    // Implement edit co-tenant logic here
  };

  const handleInactiveCoTenant = () => {
    console.log('Inactive Co-tenant clicked');
    // Implement inactive co-tenant logic here
  };

  return (
    <AppLayout activePage="tenants">
      <div className="flex justify-center items-center min-h-screen p-4 sm:p-6">
        <Card className="bg-background-default border border-subtle rounded-xxl shadow-card-large w-full max-w-sm">
          {/* Edit Co-tenant Option */}
          <div className="flex gap-2 items-center p-4 w-full cursor-pointer hover:bg-paper-paper-elevation-2 transition-colors" onClick={handleEditCoTenant}>
            <ThemeIcon src={editIcon} alt="Edit" size="sm" variant="default" />
            <p className="font-medium leading-[14px] text-sm text-primary">
              Edit Co-tenant
            </p>
          </div>

          {/* Inactive Co-tenant Option */}
          <div className="flex gap-2 items-center p-4 w-full cursor-pointer hover:bg-paper-paper-elevation-2 transition-colors" onClick={handleInactiveCoTenant}>
            <ThemeIcon src={deleteIcon} alt="Delete" size="sm" variant="default" />
            <p className="font-medium leading-[14px] text-sm text-error-500">
              Inactive Co-tenant
            </p>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
