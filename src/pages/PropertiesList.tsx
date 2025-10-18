import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log('PropertiesList search:', query);
    // Implement search functionality here
  };

  const handleEdit = (id: string) => console.log('Edit property:', id);
  const handleView = (id: string) => console.log('View property:', id);

  const handleViewChange = (view: 'grid' | 'list') => {
    if (view === 'grid') {
      navigate('/properties-grid');
    }
    // If view is 'list', we're already on the list page, so no navigation needed
  };

  // Table columns definition
  const columns: TableColumn[] = [
    { key: 'property', label: 'Property', width: '300px', align: 'left' },
    { key: 'units', label: 'Units', width: '100px', align: 'left' },
    { key: 'revenue', label: 'Monthly Revenue', width: '150px', align: 'right' },
    { key: 'occupancy', label: 'Occupancy', width: '120px', align: 'left' },
    { key: 'actions', label: 'Actions', width: '100px', align: 'left' }
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
      units: 22,
      monthlyRevenue: '$16,500',
      date: '01-18-2025',
      manager: 'Alex Thompson',
      occupancy: {
        percentage: 82,
        description: '18 of 22 units occupied'
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
        image: property.image,
        badge: property.badge,
        badgeColor: property.badgeColor,
        address: property.address
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
        type: 'progress',
        percentage: property.occupancy.percentage,
        value: `${property.occupancy.percentage}%`
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
        onViewChange={handleViewChange}
        filters={[
          { label: 'All Properties', value: 'all' }
        ]}
      />

      {/* Properties Table */}
      <Table
        columns={columns}
        rows={tableRows}
        selectable={false}
      />
    </AppLayout>
  );
}