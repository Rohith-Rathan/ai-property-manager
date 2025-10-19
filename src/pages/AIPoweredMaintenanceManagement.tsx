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
const addMaintenanceTicketIcon = getAssetPath('add-maintenance-ticket-icon');
const searchIcon = getAssetPath('search-icon');
const filterFunnelIcon = getAssetPath('filter-funnel-icon');
const dropdownArrowIcon = getAssetPath('dropdown-arrow-down-icon');
const maintenanceTicketIcon = getAssetPath('maintenance-ticket-icon');
const aiBadgeIcon = getAssetPath('ai-badge-icon');
const threeDotsIcon = getAssetPath('three-dots-more-options-icon');

export default function AIPoweredMaintenanceManagement() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [createdByFilter, setCreatedByFilter] = useState('All');
  const [vendorFilter, setVendorFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');

  const handleEditProperty = () => {
    console.log('Edit Property clicked');
    // Navigate to edit property page
  };

  const handleAddMaintenanceTicket = () => {
    console.log('Add Maintenance Ticket clicked');
    navigate('/add-maintenance-ticket');
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case 'createdBy':
        setCreatedByFilter(value);
        break;
      case 'vendor':
        setVendorFilter(value);
        break;
      case 'priority':
        setPriorityFilter(value);
        break;
    }
  };

  const handleViewFullDetails = (ticketId: string) => {
    console.log(`View full details for ticket ${ticketId}`);
    navigate('/maintenance-ticket-details');
  };

  const maintenanceTickets = [
    {
      id: 'MNT-001',
      property: 'Sunset Apartments - Unit 001',
      asset: 'Water heater',
      description: 'Water heater not heating properly',
      type: 'AI',
      vendorStatus: 'Vendor Assigned',
      priority: 'Urgent',
      priorityColor: 'error' as const,
    },
    {
      id: 'MNT-002',
      property: 'Sunset Apartments - Unit 001',
      asset: 'Water heater',
      description: 'Water heater not heating properly',
      type: 'Manual',
      vendorStatus: 'Vendor Not Assigned',
      priority: 'Normal',
      priorityColor: 'warning' as const,
    },
    {
      id: 'MNT-003',
      property: 'Sunset Apartments - Unit 001',
      asset: 'Water heater',
      description: 'Water heater not heating properly',
      type: 'AI',
      vendorStatus: 'Vendor Assigned',
      priority: 'Low',
      priorityColor: 'success' as const,
    },
  ];

  const filteredTickets = maintenanceTickets.filter(ticket =>
    ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.asset.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout
      activePage="maintenance"
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
              <h1 className="text-3xl font-bold text-gray-900">AI-Powered Maintenance Management</h1>
              <p className="text-base text-gray-600">Intelligent maintenance request processing with automated vendor assignment</p>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" onClick={handleEditProperty} className="flex items-center gap-2">
                <ThemeIcon src={editPropertyIcon} alt="Edit Property Icon" className="w-4 h-4" />
                Edit Property
              </Button>
              <Button variant="primary" onClick={handleAddMaintenanceTicket} className="flex items-center gap-2">
                <ThemeIcon src={addMaintenanceTicketIcon} alt="Add Maintenance Ticket Icon" className="w-4 h-4" />
                Add Maintenance Ticket
              </Button>
            </div>
          </div>
        </Card>

        {/* Search and Filter */}
        <Card className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <FormField
              label=""
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={handleSearchChange}
              icon="search"
              className="flex-1 w-full"
            />
            <div className="flex gap-2">
              <Button variant="secondary" className="flex items-center gap-2">
                <ThemeIcon src={filterFunnelIcon} alt="Filter Icon" className="w-4 h-4" />
                Created By: {createdByFilter}
                <ThemeIcon src={dropdownArrowIcon} alt="Dropdown Arrow" className="w-4 h-4" />
              </Button>
              <Button variant="secondary" className="flex items-center gap-2">
                <ThemeIcon src={filterFunnelIcon} alt="Filter Icon" className="w-4 h-4" />
                Vendor: {vendorFilter}
                <ThemeIcon src={dropdownArrowIcon} alt="Dropdown Arrow" className="w-4 h-4" />
              </Button>
              <Button variant="secondary" className="flex items-center gap-2">
                <ThemeIcon src={filterFunnelIcon} alt="Filter Icon" className="w-4 h-4" />
                Priority: {priorityFilter}
                <ThemeIcon src={dropdownArrowIcon} alt="Dropdown Arrow" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Maintenance Tickets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTickets.map((ticket) => (
            <Card key={ticket.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-pink-500 to-pink-400 rounded-2xl p-3">
                    <ThemeIcon src={maintenanceTicketIcon} alt="Maintenance Ticket" className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{ticket.id}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <span>{ticket.property}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>{ticket.asset}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Chip variant="primary" label={ticket.type} className="flex items-center gap-1" />
                      <Chip variant="info" label={ticket.vendorStatus} />
                      <Chip variant={ticket.priorityColor} label={ticket.priority} />
                    </div>
                  </div>
                </div>
                <Button variant="ghost" className="p-2">
                  <ThemeIcon src={threeDotsIcon} alt="More Options" className="w-4 h-4" />
                </Button>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-900">{ticket.description}</p>
              </div>

              <Button 
                variant="secondary" 
                onClick={() => handleViewFullDetails(ticket.id)}
                className="w-full"
              >
                View Full Details
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
