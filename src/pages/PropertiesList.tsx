import React, { useState } from 'react';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import PageHeader from '../components/layout/PageHeader';
import PageSearch from '../components/ui/PageSearch';
import { Table, TableColumn, TableRow } from '../components/ui/Table';
import { MoreActionsButton } from '../components/ui/MoreActionsButton';

// Asset constants for actions
const viewDetailsIcon = getAssetPath('view-details-icon');
const editPropertyIcon = getAssetPath('edit-property-icon');
const addUnitIcon = getAssetPath('add-unit-icon');
const deletePropertyIcon = getAssetPath('delete-property-icon');
const moreOptionsIcon = getAssetPath('more-options-icon');

export default function PropertiesList() {
  const handleSearch = (query: string) => {
    console.log('PropertiesList search:', query);
    // Implement search functionality here
  };

  const handleEdit = (id: string) => console.log('Edit property:', id);
  const handleView = (id: string) => console.log('View property:', id);

  // Table columns definition
  const columns: TableColumn[] = [
    { key: 'property', label: 'Property', width: '30%' },
    { key: 'units', label: 'Units', width: '15%', align: 'center' },
    { key: 'revenue', label: 'Monthly Revenue', width: '20%', align: 'right' },
    { key: 'occupancy', label: 'Occupancy', width: '20%', align: 'center' },
    { key: 'actions', label: 'Actions', width: '15%', align: 'center' }
  ];

  // Property data - same as PropertiesGrid but adapted for table view
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

  // Convert properties to table rows
  const tableRows: TableRow[] = properties.map((property) => ({
    id: property.id,
    onClick: () => handleView(property.id),
    cells: {
      property: {
        type: 'avatar',
        value: property.name,
        initials: property.name.charAt(0)
      },
      units: {
        type: 'number',
        value: property.units
      },
      revenue: {
        type: 'currency',
        value: property.monthlyRevenue.replace('$', '').replace(',', '')
      },
      occupancy: {
        type: 'badge',
        value: `${property.occupancy.percentage}%`,
        variant: property.occupancy.percentage >= 90 ? 'success' : 
                 property.occupancy.percentage >= 80 ? 'warning' : 'error'
      },
      actions: {
        type: 'moreActions',
        moreActionsItems: [
          {
            id: 'view-details',
            label: 'View Details',
            icon: viewDetailsIcon,
            onClick: () => handleView(property.id),
            variant: 'default'
          },
          {
            id: 'edit-property',
            label: 'Edit Property',
            icon: editPropertyIcon,
            onClick: () => handleEdit(property.id),
            variant: 'default'
          },
          {
            id: 'add-unit',
            label: 'Add Unit',
            icon: addUnitIcon,
            onClick: () => console.log('Add unit to property', property.id),
            variant: 'default'
          },
          {
            id: 'delete-property',
            label: 'Delete Property',
            icon: deletePropertyIcon,
            onClick: () => console.log('Delete property', property.id),
            variant: 'danger'
          }
        ],
        triggerIcon: moreOptionsIcon
      }
    }
  }));

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

      {/* Properties Table */}
      <Table
        columns={columns}
        rows={tableRows}
        title="Properties & Units"
        subtitle="Manage your property portfolio with detailed unit tracking"
        selectable={false}
      />
    </AppLayout>
  );
}