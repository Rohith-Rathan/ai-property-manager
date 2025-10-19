import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import Button from '../components/forms/Button';
import { Card } from '../components/ui/Card';
import ThemeIcon from '../components/ui/ThemeIcon';
import StatCard from '../components/cards/StatCard';

// Asset constants for icons
const editPropertyIcon = getAssetPath('edit-document-icon');
const createInvoiceIcon = getAssetPath('plus-add-icon');
const searchIcon = getAssetPath('search-magnifying-glass-icon');
const filterIcon = getAssetPath('filter-dropdown-icon');
const viewIcon = getAssetPath('eye-view-icon');
const recordPaymentIcon = getAssetPath('dollar-paid-icon');
const sendReminderIcon = getAssetPath('envelope-email-icon');

export default function RentInvoicesPayments() {
  const navigate = useNavigate();
  
  // Sample invoice data
  const [invoices] = useState([
    {
      id: 'INV-2024-001',
      tenant: 'John Smith',
      property: 'Sunset Apartments - 4B',
      dueDate: '2024-02-01',
      totalAmount: '$1950',
      paidAmount: '$1850',
      balance: '$100',
      status: 'Partial',
      promiseToPay: '$100 by 2024-02-10'
    },
    {
      id: 'INV-2024-002',
      tenant: 'Sarah Johnson',
      property: 'Oak Villa - 12A',
      dueDate: '2024-02-01',
      totalAmount: '$1950',
      paidAmount: '$2100',
      balance: '$0',
      status: 'Paid',
      promiseToPay: null
    },
    {
      id: 'INV-2024-003',
      tenant: 'Mike Chen',
      property: 'Pine Heights - 8C',
      dueDate: '2024-02-01',
      totalAmount: '$1950',
      paidAmount: '$2100',
      balance: '$0',
      status: 'Paid',
      promiseToPay: null
    }
  ]);

  const handleEditProperty = () => {
    console.log('Edit Property clicked');
    // Navigate to property edit page
  };

  const handleCreateInvoice = () => {
    console.log('Create Invoice clicked');
    // Navigate to create invoice page
  };

  const handleViewInvoice = (invoiceId: string) => {
    console.log('View invoice:', invoiceId);
    // Navigate to invoice details page
  };

  const handleRecordPayment = (invoiceId: string) => {
    console.log('Record payment for:', invoiceId);
    // Navigate to record payment page
  };

  const handleSendReminder = (invoiceId: string) => {
    console.log('Send reminder for:', invoiceId);
    // Send reminder functionality
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Partial':
        return 'bg-yellow-100 text-yellow-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AppLayout
      activePage="invoices"
      searchPlaceholder="Search invoices, tenants, amounts..."
      notificationCount={3}
      showThemeToggle={true}
      userName="John Doe"
      userInitials="JD"
      userGradient="aqua-2"
    >
      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Rent Invoices & Payments</h1>
            <p className="text-gray-600 mt-1">Welcome back, John. Here's what's happening with your invoices</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={handleEditProperty} className="flex items-center gap-2">
              <ThemeIcon src={editPropertyIcon} alt="Edit Property" className="w-4 h-4" />
              Edit Property
            </Button>
            <Button variant="primary" onClick={handleCreateInvoice} className="flex items-center gap-2">
              <ThemeIcon src={createInvoiceIcon} alt="Create Invoice" className="w-4 h-4" />
              Create Invoice
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <Card className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <ThemeIcon src={searchIcon} alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search invoices, tenants, amounts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" className="flex items-center gap-2">
                <ThemeIcon src={filterIcon} alt="Filter" className="w-4 h-4" />
                Status: All
              </Button>
            </div>
          </div>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Invoices"
            value="2"
            icon={getAssetPath('document-files-icon')}
            badge={{ text: "+12%", color: "success", trend: "up" }}
          />
          <StatCard
            title="Collected"
            value="$3,950"
            icon={getAssetPath('dollar-paid-icon')}
            badge={{ text: "+8%", color: "success", trend: "up" }}
          />
          <StatCard
            title="Outstanding"
            value="$2,050"
            icon={getAssetPath('dollar-icon')}
            badge={{ text: "-5%", color: "warning", trend: "down" }}
          />
          <StatCard
            title="Overdue"
            value="0"
            icon={getAssetPath('alert-warning-icon')}
            badge={{ text: "0%", color: "info" }}
          />
        </div>

        {/* Invoice Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {invoices.map((invoice) => (
            <Card key={invoice.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{invoice.id}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(invoice.status)}`}>
                  {invoice.status}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  {invoice.tenant} • {invoice.property}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Due Date</p>
                  <p className="text-sm font-medium text-gray-900">{invoice.dueDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Amount</p>
                  <p className="text-sm font-medium text-gray-900">{invoice.totalAmount}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Paid Amount</p>
                  <p className="text-sm font-medium text-gray-900">{invoice.paidAmount}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Balance</p>
                  <p className="text-sm font-medium text-gray-900">{invoice.balance}</p>
                </div>
              </div>

              {invoice.promiseToPay && (
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2">
                    <ThemeIcon src={getAssetPath('calendar-date-icon')} alt="Promise to Pay" className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-blue-900">Promise to Pay</p>
                      <p className="text-xs text-blue-700">{invoice.promiseToPay}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button 
                  variant="secondary" 
                  onClick={() => handleViewInvoice(invoice.id)}
                  className="flex items-center gap-1 text-xs px-3 py-2"
                >
                  <ThemeIcon src={viewIcon} alt="View" className="w-3 h-3" />
                  View
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => handleRecordPayment(invoice.id)}
                  className="flex items-center gap-1 text-xs px-3 py-2"
                >
                  <ThemeIcon src={recordPaymentIcon} alt="Record Payment" className="w-3 h-3" />
                  Record Payment
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => handleSendReminder(invoice.id)}
                  className="flex items-center gap-1 text-xs px-3 py-2"
                >
                  <ThemeIcon src={sendReminderIcon} alt="Send Reminder" className="w-3 h-3" />
                  Send Reminder
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
