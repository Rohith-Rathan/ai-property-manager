import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import Button from '../components/forms/Button';
import { Card } from '../components/ui/Card';
import ThemeIcon from '../components/ui/ThemeIcon';
import Chip from '../components/ui/Chip';

// Asset constants
const refrigeratorAssetIcon = getAssetPath('refrigerator-asset-icon');
const searchAssetsIcon = getAssetPath('search-assets-icon');
const refrigeratorKitchenIcon = getAssetPath('refrigerator-kitchen-icon');
const downloadManualIcon = getAssetPath('download-manual-icon');
const createMaintenanceTicketIcon = getAssetPath('create-maintenance-ticket-icon');
const aiBadgeIcon = getAssetPath('ai-badge-icon');

export default function ViewAssetsWarranties() {
  const navigate = useNavigate();
  const [assetDetails] = useState({
    assetName: 'Refrigerator - Kitchen',
    manufacturer: 'Whirlpool',
    category: 'Appliance',
    model: 'WRT518SZFG',
    location: 'Sunset Apartments - 4B',
    purchasePrice: 'WH22031501',
    status: 'Warranty Expired',
    serialNumber: '$899',
    installDate: '2022-03-15',
    warrantyExpiry: '2024-03-15',
    warrantyStatus: 'Expired',
    warrantyProgress: 100, // 100% expired
  });

  const handleDownloadManual = () => {
    console.log('Download Manual clicked');
    // Implement download manual functionality
  };

  const handleCreateMaintenanceTicket = () => {
    console.log('Create Maintenance Ticket clicked');
    navigate('/ai-powered-maintenance-management');
  };

  const handleViewTicket = (ticketId: string) => {
    console.log(`View ticket ${ticketId}`);
    navigate('/view-ai-powered-maintenance-ticket');
  };

  const maintenanceTickets = [
    {
      id: 'MNT-005',
      status: 'In-Progress',
      vendor: 'Jhon Smith',
      description: 'Inconsistent water temperature; lukewarm at best',
      isAI: true,
    },
    {
      id: 'MNT-005',
      status: 'In-Progress',
      vendor: 'Jhon Smith (Requested)',
      description: 'No hot water; potential heating element failure',
      isAI: true,
    },
    {
      id: 'MNT-004',
      status: 'Completed',
      vendor: 'Jhon Smith',
      description: 'Persistent dripping from the cold water side',
      isAI: true,
    },
    {
      id: 'MNT-003',
      status: 'Completed',
      vendor: 'Jhon Smith',
      description: 'Erratic heating cycles; not maintaining set temperature',
      isAI: true,
    },
    {
      id: 'MNT-002',
      status: 'Pending',
      vendor: 'Sarah Lee',
      description: 'Thermostat malfunction',
      isAI: true,
    },
  ];

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
        {/* Breadcrumb */}
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">Assets & Warranties / Refrigerator - Kitchen</p>
        </div>

        {/* Asset Header */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-brand-aurora-color1 to-brand-aurora-color2 flex items-center justify-center rounded-xl size-16">
                <ThemeIcon src={refrigeratorKitchenIcon} alt="Refrigerator Icon" className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold text-gray-900">{assetDetails.assetName}</h1>
                  <Chip variant="error" label={assetDetails.status} />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={handleDownloadManual} className="flex items-center gap-2">
                <ThemeIcon src={downloadManualIcon} alt="Download Manual Icon" className="w-4 h-4" />
                Download Manual
              </Button>
              <Button variant="primary" onClick={handleCreateMaintenanceTicket} className="flex items-center gap-2">
                <ThemeIcon src={createMaintenanceTicketIcon} alt="Create Maintenance Ticket Icon" className="w-4 h-4" />
                Create Maintenance Ticket
              </Button>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Asset Summary Card */}
          <Card className="p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Asset Summary</h2>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Asset Name</span>
                <span className="text-sm font-medium text-gray-900">{assetDetails.assetName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Manufacturer</span>
                <span className="text-sm font-medium text-gray-900">{assetDetails.manufacturer}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Category</span>
                <span className="text-sm font-medium text-gray-900">{assetDetails.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Model</span>
                <span className="text-sm font-medium text-gray-900">{assetDetails.model}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Location</span>
                <span className="text-sm font-medium text-gray-900">{assetDetails.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Purchase Price</span>
                <span className="text-sm font-medium text-gray-900">{assetDetails.purchasePrice}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <Chip variant="error" label={assetDetails.status} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Serial Number</span>
                <span className="text-sm font-medium text-gray-900">{assetDetails.serialNumber}</span>
              </div>
            </div>

            {/* Warranty Information */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Warranty Information</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Install Date</span>
                  <span className="text-sm font-medium text-gray-900">{assetDetails.installDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Warranty Expiry</span>
                  <span className="text-sm font-medium text-gray-900">{assetDetails.warrantyExpiry}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Warranty Status</span>
                    <span className="text-sm font-medium text-red-600">{assetDetails.warrantyStatus}</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-brand-aurora-color1 to-brand-aurora-color2 h-2 rounded-full" 
                      style={{ width: `${assetDetails.warrantyProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Linked Maintenance Tickets Card */}
          <Card className="p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Linked Maintenance Tickets</h2>
            
            <div className="flex flex-col gap-4 max-h-96 overflow-y-auto">
              {maintenanceTickets.map((ticket, index) => (
                <div key={`${ticket.id}-${index}`} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">{ticket.id}</span>
                        <Chip 
                          variant={ticket.status === 'Completed' ? 'success' : ticket.status === 'In-Progress' ? 'warning' : 'info'} 
                          label={ticket.status} 
                        />
                      </div>
                      <p className="text-xs text-gray-500">Assigned Vendor: {ticket.vendor}</p>
                    </div>
                    <Button variant="secondary" onClick={() => handleViewTicket(ticket.id)} className="text-sm">
                      View Ticket
                    </Button>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-3 mb-2">
                    <p className="text-sm text-gray-900">{ticket.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {ticket.isAI && (
                      <Chip variant="primary" label="AI" className="flex items-center gap-1" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
