import React, { useState } from 'react';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import PageHeader from '../components/layout/PageHeader';
import PageSearch from '../components/ui/PageSearch';
import PropertyCard from '../components/ui/PropertyCard';
import Button from '../components/forms/Button';

// Asset constants with descriptive names - using complete asset mapping
const addPropertyActionIcon = getAssetPath('add-property-action-icon'); // Add property action
const addPropertyButtonIcon = getAssetPath('add-property-button-icon'); // Add property button
const propertyActionsIcon = getAssetPath('property-actions-icon'); // Property actions
const calendarIcon = getAssetPath('calendar-icon');              // Calendar icon
const checkmarkIcon = getAssetPath('checkmark-icon');            // Checkmark icon
const dollarIcon = getAssetPath('dollar-icon');                  // Dollar icon
const dotSeparatorIcon = getAssetPath('dot-separator-icon');     // Dot separator
const dropdownArrowIcon = getAssetPath('dropdown-arrow-icon');   // Dropdown arrow
const editPropertyButtonIcon = getAssetPath('edit-property-button-icon'); // Edit property button
const searchPropertiesIcon = getAssetPath('search-properties-icon');     // Search properties
const filterDropdownIcon = getAssetPath('filter-dropdown-icon');        // Filter dropdown
const gridViewIcon = getAssetPath('grid-view-icon');                    // Grid view
const listViewIcon = getAssetPath('list-view-icon');                    // List view

export default function PropertiesGrid() {
  const handleSearch = (query: string) => {
    console.log('PropertiesGrid search:', query);
    // Implement search functionality here
  };

  // Property data - exact replica of original content plus additional properties
  const properties = [
    {
      id: 'sunset-apartments',
      name: 'Sunset Apartments',
      address: '123 Sunset Blvd, Los Angeles, CA',
      image: '/assets/property-image-1.png',
      badge: 'Apartment',
      badgeColor: 'success' as const,
      units: 16,
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
    },
    {
      id: 'mountain-view-residence',
      name: 'Mountain View Residence',
      address: '321 Mountain View Dr, Denver, CO',
      image: '/assets/property-image-1.png',
      badge: 'Apartment',
      badgeColor: 'success' as const,
      units: 24,
      monthlyRevenue: '$15,600',
      date: '01-16-2025',
      manager: 'Sarah Johnson',
      occupancy: {
        percentage: 95,
        description: '23 of 24 units occupied'
      }
    },
    {
      id: 'riverside-complex',
      name: 'Riverside Complex',
      address: '654 Riverside Ave, Portland, OR',
      image: '/assets/property-image-2.png',
      badge: 'Individual',
      badgeColor: 'warning' as const,
      units: 20,
      monthlyRevenue: '$13,200',
      date: '01-16-2025',
      manager: 'Mike Wilson',
      occupancy: {
        percentage: 85,
        description: '17 of 20 units occupied'
      }
    },
    {
      id: 'garden-manor',
      name: 'Garden Manor',
      address: '987 Garden St, Seattle, WA',
      image: '/assets/property-image-3.png',
      badge: 'Apartment',
      badgeColor: 'success' as const,
      units: 30,
      monthlyRevenue: '$18,900',
      date: '01-17-2025',
      manager: 'Lisa Chen',
      occupancy: {
        percentage: 90,
        description: '27 of 30 units occupied'
      }
    },
    {
      id: 'downtown-plaza',
      name: 'Downtown Plaza',
      address: '147 Downtown Blvd, Chicago, IL',
      image: '/assets/property-image-1.png',
      badge: 'Individual',
      badgeColor: 'warning' as const,
      units: 14,
      monthlyRevenue: '$11,200',
      date: '01-17-2025',
      manager: 'David Brown',
      occupancy: {
        percentage: 78,
        description: '11 of 14 units occupied'
      }
    },
    {
      id: 'sunset-towers',
      name: 'Sunset Towers',
      address: '258 Sunset Way, Miami, FL',
      image: '/assets/property-image-2.png',
      badge: 'Apartment',
      badgeColor: 'success' as const,
      units: 36,
      monthlyRevenue: '$22,800',
      date: '01-18-2025',
      manager: 'Emma Davis',
      occupancy: {
        percentage: 94,
        description: '34 of 36 units occupied'
      }
    },
    {
      id: 'harbor-view',
      name: 'Harbor View',
      address: '369 Harbor St, Boston, MA',
      image: '/assets/property-image-3.png',
      badge: 'Individual',
      badgeColor: 'warning' as const,
      units: 16,
      monthlyRevenue: '$12,400',
      date: '01-18-2025',
      manager: 'Robert Taylor',
      occupancy: {
        percentage: 87,
        description: '14 of 16 units occupied'
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
      onNavigationClick={(itemId) => console.log(`PropertiesGrid navigation: ${itemId}`)}
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
        variant="grid"
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

                {/* Properties Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 md:gap-6 w-full" data-name="Container" data-node-id="189:7587">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onEdit={(id) => console.log('Edit property:', id)}
            onView={(id) => console.log('View property:', id)}
            className=""
          />
        ))}
      </div>
    </AppLayout>
  );
}
