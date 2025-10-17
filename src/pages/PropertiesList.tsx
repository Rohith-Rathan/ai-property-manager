import React, { useState } from 'react';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import PageHeader from '../components/layout/PageHeader';
import PageSearch from '../components/ui/PageSearch';
import Button from '../components/forms/Button';
import { MoreActionsButton } from '../components/ui/MoreActionsButton';
import ThemeIcon from '../components/ui/ThemeIcon';
import ProgressBar from '../components/ui/ProgressBar';

// Asset constants
const locationIcon = getAssetPath('location-icon');
const unitsIcon = getAssetPath('units-icon');
const dollarIcon = getAssetPath('dollar-icon');
const calendarIcon = getAssetPath('calendar-icon');
const moreOptionsIcon = getAssetPath('more-options-icon');
const viewDetailsIcon = getAssetPath('view-details-icon');
const editIcon = getAssetPath('edit-property-icon');
const addUnitIcon = getAssetPath('add-unit-icon');
const deletePropertyIcon = getAssetPath('delete-property-icon');

export default function PropertiesList() {
  const handleSearch = (query: string) => {
    console.log('PropertiesList search:', query);
    // Implement search functionality here
  };

  // Property data - same as PropertiesGrid but adapted for list view
  const properties = [
    {
      id: 'sunset-apartments',
      name: 'Sunset Apartments',
      address: '123 Sunset Blvd, Los Angeles, CA',
      image: '/assets/property-image-1.png',
      badge: 'Apartment',
      badgeColor: 'success' as const,
      units: 24,
      monthlyRevenue: '$12,800',
      date: '01-15-2025',
      manager: 'John Manager',
      occupancy: {
        percentage: 92,
        description: '22 of 24 units occupied'
      }
    },
    {
      id: 'oak-villa-complex',
      name: 'Oak Villa Complex',
      address: '456 Oak Ave, San Diego, CA',
      image: '/assets/property-image-2.png',
      badge: 'Individual',
      badgeColor: 'warning' as const,
      units: 18,
      monthlyRevenue: '$10,500',
      date: '01-15-2025',
      manager: 'John Manager',
      occupancy: {
        percentage: 88,
        description: '17 of 18 units occupied'
      }
    },
    {
      id: 'pine-heights',
      name: 'Pine Heights',
      address: '789 Pine St, San Francisco, CA',
      image: '/assets/property-image-3.png',
      badge: 'Individual',
      badgeColor: 'warning' as const,
      units: 12,
      monthlyRevenue: '$9,200',
      date: '01-15-2025',
      manager: 'John Manager',
      occupancy: {
        percentage: 88,
        description: '11 of 12 units occupied'
      }
    }
  ];

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
      onNavigationClick={(itemId) => console.log(`PropertiesList navigation: ${itemId}`)}
    >
      {/* Page Header */}
      <PageHeader
        title="Properties & Units"
        description="Manage your property portfolio with detailed unit tracking"
        actions={[
          {
            id: "add-property",
            label: "Add Property",
            icon: 'add',
            variant: 'primary',
            gradient: 'aqua-2'
          }
        ]}
      />

      {/* Search Bar */}
      <PageSearch
        variant="list"
        title="Properties & Units"
        subtitle="Welcome back, John. Here's what's happening with your properties today."
        placeholder="Search properties..."
        onSearch={handleSearch}
        onFilter={(filter) => console.log('Filter changed:', filter)}
        onViewChange={(view) => console.log('View changed:', view)}
        filters={[
          { label: 'All Properties', value: 'all' }
        ]}
      />

      {/* Properties List */}
      <div className="flex flex-col gap-4 w-full">
        {properties.map((property) => (
          <PropertyListRow
            key={property.id}
            property={property}
            onEdit={(id) => console.log('Edit property:', id)}
            onView={(id) => console.log('View property:', id)}
          />
        ))}
      </div>
    </AppLayout>
  );
}

// PropertyListRow Component - Reusable list row component
interface PropertyListRowProps {
  property: {
    id: string;
    name: string;
    address: string;
    image: string;
    badge?: string;
    badgeColor?: 'success' | 'warning' | 'error';
    units: number;
    monthlyRevenue: string;
    date: string;
    manager: string;
    occupancy: {
      percentage: number;
      description: string;
    };
  };
  onEdit?: (id: string) => void;
  onView?: (id: string) => void;
}

function PropertyListRow({ property, onEdit, onView }: PropertyListRowProps) {
  const getBadgeColorClass = (color?: string) => {
    switch (color) {
      case 'error': return 'bg-error-500';
      case 'warning': return 'bg-warning-500';
      default: return 'bg-success-500';
    }
  };

  return (
    <div className="bg-paper-paper-elevation-1 border border-overlays-white-inverse-10 border-solid box-border flex gap-4 items-center p-6 relative rounded-xxl w-full h-[120px]">
      {/* Property Image & Badge */}
      <div className="flex flex-col gap-4 items-start relative shrink-0">
        <img 
          alt={property.name} 
          className="size-[72px] object-cover rounded-lg" 
          src={property.image} 
        />
        {property.badge && (
          <div className={`${getBadgeColorClass(property.badgeColor)} box-border flex gap-1 items-center justify-center overflow-clip px-2 py-1 relative rounded-full shrink-0`}>
            <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-label-small text-nowrap text-white whitespace-pre">
              {property.badge}
            </p>
          </div>
        )}
      </div>

      {/* Property Info */}
      <div className="flex flex-col gap-2 items-start relative shrink-0">
        <p className="font-sans font-semibold leading-h6 not-italic relative shrink-0 text-primary text-h6">
          {property.name}
        </p>
        <div className="flex gap-2 items-center relative shrink-0 w-full">
          <ThemeIcon src={locationIcon} alt="Location" size="xs" variant="default" />
          <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-label-small">
            {property.address}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-4 items-center relative shrink-0">
        <div className="flex gap-2 items-center relative shrink-0">
          <ThemeIcon src={unitsIcon} alt="Units" size="sm" variant="default" />
          <p className="font-sans font-medium leading-normal not-italic relative shrink-0 text-primary text-label-small">
            {property.units} units
          </p>
        </div>
        <div className="flex gap-2 items-center relative shrink-0">
          <ThemeIcon src={dollarIcon} alt="Revenue" size="sm" variant="default" />
          <p className="font-sans font-medium leading-normal not-italic relative shrink-0 text-primary text-label-small">
            {property.monthlyRevenue}
          </p>
        </div>
        <div className="flex gap-2 items-center relative shrink-0">
          <ThemeIcon src={calendarIcon} alt="Date" size="sm" variant="default" />
          <p className="font-sans font-medium leading-normal not-italic relative shrink-0 text-primary text-label-small text-nowrap whitespace-pre">
            {property.date}
          </p>
        </div>
      </div>

      {/* Occupancy */}
      <div className="flex flex-col gap-2 items-start relative shrink-0">
        <ProgressBar
          variant="occupancy"
          percentage={property.occupancy.percentage}
          label="Occupancy"
          value={`${property.occupancy.percentage}%`}
          subtitle={property.occupancy.description}
        />
      </div>

      {/* More Actions */}
      <MoreActionsButton
        items={[
          { 
            id: 'view-details',
            label: 'View Details', 
            onClick: () => onView?.(property.id),
            icon: viewDetailsIcon,
            variant: 'default'
          },
          { 
            id: 'edit-property',
            label: 'Edit Property', 
            onClick: () => onEdit?.(property.id),
            icon: editIcon,
            variant: 'default'
          },
          { 
            id: 'add-unit',
            label: 'Add Unit', 
            onClick: () => console.log('Add unit to property', property.id),
            icon: addUnitIcon,
            variant: 'default'
          },
          { 
            id: 'delete-property',
            label: 'Delete Property', 
            onClick: () => console.log('Delete property', property.id),
            icon: deletePropertyIcon,
            variant: 'danger'
          }
        ]}
        triggerIcon={moreOptionsIcon}
        position="bottom-right"
      />
    </div>
  );
}