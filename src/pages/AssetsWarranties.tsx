import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import Button from '../components/forms/Button';
import { Card } from '../components/ui/Card';
import ThemeIcon from '../components/ui/ThemeIcon';
import FormField from '../components/forms/FormField';
import Chip from '../components/ui/Chip';

// Asset constants
const editPropertyIcon = getAssetPath('edit-property-icon');
const addAssetIcon = getAssetPath('add-asset-icon');
const searchAssetsIcon = getAssetPath('search-assets-icon');
const filterAssetsIcon = getAssetPath('filter-assets-icon');
const refrigeratorAssetIcon = getAssetPath('refrigerator-asset-icon');
const dotSeparatorIcon = getAssetPath('dot-separator-icon');
const threeDotsAssetIcon = getAssetPath('three-dots-asset-icon');
const maintenanceTicketAssetIcon = getAssetPath('maintenance-ticket-asset-icon');
const arrowRightAssetIcon = getAssetPath('arrow-right-asset-icon');

export default function AssetsWarranties() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const handleEditProperty = () => {
    console.log('Edit Property clicked');
    // Navigate to edit property page
  };

  const handleAddAsset = () => {
    console.log('Add Asset clicked');
    navigate('/add-asset');
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleCategoryFilterChange = (category: string) => {
    setCategoryFilter(category);
  };

  const handleStatusFilterChange = (status: string) => {
    setStatusFilter(status);
  };

  const handleAssetMoreOptions = (assetId: string) => {
    console.log(`More options for asset ${assetId}`);
    // Implement more options logic
  };

  const assets = [
    {
      id: 'AST-001',
      name: 'Refrigerator',
      category: 'Appliance',
      location: 'Sunset Apartments - 4B',
      installDate: '10-10-2023',
      manufacturer: 'Whirlpool',
      model: 'WRT518SZFG',
      installDateDetail: '2022-03-15',
      purchasePrice: '$899',
      maintenanceTickets: 1,
      vendorAssigned: 'Jhon Smith',
      status: 'Active'
    },
    {
      id: 'AST-002',
      name: 'Water Heater',
      category: 'Plumbing',
      location: 'Sunset Apartments - 4B',
      installDate: '08-15-2023',
      manufacturer: 'Rheem',
      model: 'HTS3242635',
      installDateDetail: '2021-08-15',
      purchasePrice: '$1,200',
      maintenanceTickets: 0,
      vendorAssigned: '',
      status: 'Active'
    },
    {
      id: 'AST-003',
      name: 'HVAC System',
      category: 'HVAC',
      location: 'Sunset Apartments - 4B',
      installDate: '06-20-2023',
      manufacturer: 'Carrier',
      model: '24ABC636A003',
      installDateDetail: '2020-06-20',
      purchasePrice: '$3,500',
      maintenanceTickets: 2,
      vendorAssigned: 'Mike Johnson',
      status: 'Maintenance'
    },
    {
      id: 'AST-004',
      name: 'Dishwasher',
      category: 'Appliance',
      location: 'Sunset Apartments - 4B',
      installDate: '09-12-2023',
      manufacturer: 'Bosch',
      model: 'SHEM63W55N',
      installDateDetail: '2022-09-12',
      purchasePrice: '$750',
      maintenanceTickets: 0,
      vendorAssigned: '',
      status: 'Active'
    },
    {
      id: 'AST-005',
      name: 'Washing Machine',
      category: 'Appliance',
      location: 'Sunset Apartments - 4B',
      installDate: '07-08-2023',
      manufacturer: 'LG',
      model: 'WM3900HWA',
      installDateDetail: '2021-07-08',
      purchasePrice: '$1,100',
      maintenanceTickets: 1,
      vendorAssigned: 'Sarah Wilson',
      status: 'Active'
    },
    {
      id: 'AST-006',
      name: 'Dryer',
      category: 'Appliance',
      location: 'Sunset Apartments - 4B',
      installDate: '07-08-2023',
      manufacturer: 'LG',
      model: 'DLEX3900W',
      installDateDetail: '2021-07-08',
      purchasePrice: '$1,000',
      maintenanceTickets: 0,
      vendorAssigned: '',
      status: 'Active'
    },
    {
      id: 'AST-007',
      name: 'Garbage Disposal',
      category: 'Plumbing',
      location: 'Sunset Apartments - 4B',
      installDate: '05-25-2023',
      manufacturer: 'InSinkErator',
      model: 'EVOLUTION EXCEL',
      installDateDetail: '2022-05-25',
      purchasePrice: '$200',
      maintenanceTickets: 0,
      vendorAssigned: '',
      status: 'Active'
    },
    {
      id: 'AST-008',
      name: 'Microwave',
      category: 'Appliance',
      location: 'Sunset Apartments - 4B',
      installDate: '04-18-2023',
      manufacturer: 'Panasonic',
      model: 'NN-SN966S',
      installDateDetail: '2021-04-18',
      purchasePrice: '$300',
      maintenanceTickets: 0,
      vendorAssigned: '',
      status: 'Active'
    },
    {
      id: 'AST-009',
      name: 'Range Hood',
      category: 'Appliance',
      location: 'Sunset Apartments - 4B',
      installDate: '03-30-2023',
      manufacturer: 'Broan',
      model: 'QSI130',
      installDateDetail: '2022-03-30',
      purchasePrice: '$150',
      maintenanceTickets: 0,
      vendorAssigned: '',
      status: 'Active'
    }
  ];

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.id.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(asset =>
    categoryFilter === 'All Categories' || asset.category === categoryFilter
  ).filter(asset =>
    statusFilter === 'All Status' || asset.status === statusFilter
  );

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
      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto py-8">
        {/* Page Header */}
        <Card className="p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Assets & Warranties</h1>
              <p className="text-base text-gray-600">Manage property assets and track warranties</p>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" onClick={handleEditProperty} className="flex items-center gap-2">
                <ThemeIcon src={editPropertyIcon} alt="Edit Property Icon" className="w-4 h-4" />
                Edit Property
              </Button>
              <Button variant="primary" onClick={handleAddAsset} className="flex items-center gap-2">
                <ThemeIcon src={addAssetIcon} alt="Add Asset Icon" className="w-4 h-4" />
                Add Asset
              </Button>
            </div>
          </div>
        </Card>

        {/* Search and Filter */}
        <Card className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <FormField
              label=""
              placeholder="Search assets..."
              value={searchTerm}
              onChange={handleSearchChange}
              icon="search"
              className="flex-1 w-full"
            />
            <div className="flex gap-2">
              <Button variant="secondary" className="flex items-center gap-2">
                <ThemeIcon src={filterAssetsIcon} alt="Filter Icon" className="w-4 h-4" />
                {categoryFilter}
                <ThemeIcon src={getAssetPath('dropdown-arrow-down-icon')} alt="Dropdown Arrow" className="w-4 h-4" />
              </Button>
              <Button variant="secondary" className="flex items-center gap-2">
                <ThemeIcon src={filterAssetsIcon} alt="Filter Icon" className="w-4 h-4" />
                {statusFilter}
                <ThemeIcon src={getAssetPath('dropdown-arrow-down-icon')} alt="Dropdown Arrow" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Asset Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map((asset) => (
            <Card key={asset.id} className="p-6">
              {/* Asset Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
                    <img 
                      src={refrigeratorAssetIcon} 
                      alt={asset.name} 
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">{asset.name}</h3>
                      <Chip variant="primary" label={asset.category} />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{asset.location}</span>
                      <ThemeIcon src={dotSeparatorIcon} alt="Separator" className="w-1 h-1" />
                      <span>{asset.installDate}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" onClick={() => handleAssetMoreOptions(asset.id)} className="p-2">
                  <ThemeIcon src={threeDotsAssetIcon} alt="More Options" className="w-4 h-4" />
                </Button>
              </div>

              {/* Asset Details */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Manufacturer</p>
                  <p className="font-medium text-gray-900">{asset.manufacturer}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Model</p>
                  <p className="font-medium text-gray-900">{asset.model}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Install Date</p>
                  <p className="font-medium text-gray-900">{asset.installDateDetail}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Purchase Price</p>
                  <p className="font-medium text-gray-900">{asset.purchasePrice}</p>
                </div>
              </div>

              {/* Asset Footer */}
              {asset.maintenanceTickets > 0 && (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ThemeIcon src={maintenanceTicketAssetIcon} alt="Maintenance" className="w-5 h-5" />
                      <div>
                        <p className="text-sm font-medium text-red-600">
                          {asset.maintenanceTickets} Ongoing maintenance ticket{asset.maintenanceTickets > 1 ? 's' : ''}
                        </p>
                        {asset.vendorAssigned && (
                          <p className="text-xs text-gray-600">
                            Assigned Vendor: {asset.vendorAssigned}
                          </p>
                        )}
                      </div>
                    </div>
                    <ThemeIcon src={arrowRightAssetIcon} alt="Arrow" className="w-4 h-4 rotate-180" />
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
