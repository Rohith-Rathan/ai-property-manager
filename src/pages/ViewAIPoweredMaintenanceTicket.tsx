import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import Button from '../components/forms/Button';
import { Card } from '../components/ui/Card';
import ThemeIcon from '../components/ui/ThemeIcon';
import Chip from '../components/ui/Chip';
import BotConversation from '../components/ui/BotConversation';

// Asset constants
const backArrowIcon = getAssetPath('back-arrow-icon');
const calendarDateIcon = getAssetPath('calendar-date-icon');
const checkmarkResolvedIcon = getAssetPath('checkmark-resolved-icon');
const assignVendorIcon = getAssetPath('assign-vendor-icon');
const propertyBuildingIcon = getAssetPath('location-pin-icon');
const unitApartmentIcon = getAssetPath('unit-apartment-icon');
const tenantUserIcon = getAssetPath('tenant-user-icon');
const categoryTagIcon = getAssetPath('category-tag-icon');
const aiGeneratedIcon = getAssetPath('ai-generated-icon');
const alertPriorityIcon = getAssetPath('alert-priority-icon');
const assetDetailsIcon = getAssetPath('asset-details-icon');
const warrantyCheckIcon = getAssetPath('warranty-check-icon');
const vendorUserIcon = getAssetPath('vendor-user-icon');
const feedbackMessageIcon = getAssetPath('removed-duplicate');
const aiConversationIcon = getAssetPath('ai-conversation-icon');
const aiChatIcon = getAssetPath('ai-chat-icon');

export default function ViewAIPoweredMaintenanceTicket() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/ai-powered-maintenance-management');
  };

  const handleMarkAsResolved = () => {
    console.log('Mark as Resolved clicked');
    // Implement mark as resolved logic
  };

  const handleAssignVendor = () => {
    console.log('Assign Vendor clicked');
    // Implement assign vendor logic
  };

  const ticketDetails = {
    id: 'MNT-001',
    priority: 'Urgent',
    description: 'Water heater not heating properly',
    createdDate: 'Oct 6, 2025',
    lastUpdated: 'Oct 6, 2025',
    property: 'Sunset Apartments',
    unit: 'Unit 001',
    tenant: 'Walter Carter',
    category: 'Plumbing',
    createdType: 'Ai Generated',
    assetName: 'Rheem 50 Gal Water Heater',
    brand: 'Samsung',
    model: 'HTS3242635',
    serialNo: '3625472374234K',
    warranty: 'Expired',
    vendorAssigned: false,
    tenantFeedback: 'Pending',
    vendorFeedback: 'Pending',
  };

  const conversationMessages = [
    {
      id: '1',
      type: 'user' as const,
      content: 'Water heater not heating properly',
      timestamp: '10:30 AM',
    },
    {
      id: '2',
      type: 'bot' as const,
      content: 'Got it, Thomas. You\'re referring to your unit at Lakeside Villas, Villa 7B, right?\n\nJust confirming — is this about your water heater not providing hot water?',
      timestamp: '10:31 AM',
    },
    {
      id: '3',
      type: 'user' as const,
      content: 'Yes, no hot water since morning.',
      timestamp: '10:32 AM',
    },
    {
      id: '4',
      type: 'bot' as const,
      content: 'Thanks for confirming. Could you please tell me — is any water leaking from it, or is it just not heating?\n\nYou can also send a quick photo of the unit or the control panel if possible. 📸',
      timestamp: '10:33 AM',
    },
    {
      id: '5',
      type: 'user' as const,
      content: 'No leaks. Here\'s a photo.\n\n(📷 5 images)',
      timestamp: '10:35 AM',
    },
    {
      id: '6',
      type: 'bot' as const,
      content: 'Thank you, Thomas.\n\nI\'ve created a maintenance ticket for this issue:\n\n"Water heater not heating properly."\n\nTicket ID: MNT-001\nPriority: Urgent (24h SLA) 🔴\n\nI\'ll check your appliance warranty and find an available technician.',
      timestamp: '10:36 AM',
    },
    {
      id: '7',
      type: 'user' as const,
      content: 'Thank you!',
      timestamp: '10:37 AM',
    },
    {
      id: '8',
      type: 'bot' as const,
      content: 'Perfect 👍\n\nI\'ve scheduled AquaPro Plumbing Services to visit tomorrow (Oct 7) between 9:00–11:00 AM.\n\nYou\'ll receive a reminder 1 hour before the technician arrives.',
      timestamp: '10:38 AM',
    },
    {
      id: '9',
      type: 'user' as const,
      content: 'Perfect!',
      timestamp: '10:39 AM',
    },
    {
      id: '10',
      type: 'bot' as const,
      content: '🔔 Reminder: The technician from AquaPro Plumbing Services will arrive between 9–11 AM today for your water heater repair.\n\nPlease make sure someone is home to provide access.',
      timestamp: '9:00 AM',
    },
  ];

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
      <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>AI-Powered Maintenance Management / {ticketDetails.id}</span>
        </div>

        {/* Ticket Header */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <ThemeIcon src={backArrowIcon} alt="Back" className="w-4 h-4" />
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{ticketDetails.id}</h1>
                  <Chip variant="error" label={ticketDetails.priority} />
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <ThemeIcon src={calendarDateIcon} alt="Calendar" className="w-4 h-4" />
                    <span>Created: {ticketDetails.createdDate}</span>
                  </div>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <div className="flex items-center gap-2">
                    <ThemeIcon src={calendarDateIcon} alt="Calendar" className="w-4 h-4" />
                    <span>Last Updated: {ticketDetails.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" onClick={handleMarkAsResolved} className="flex items-center gap-2">
                <ThemeIcon src={checkmarkResolvedIcon} alt="Resolved" className="w-4 h-4" />
                Mark as Resolved
              </Button>
              <Button variant="primary" onClick={handleAssignVendor} className="flex items-center gap-2">
                <ThemeIcon src={assignVendorIcon} alt="Assign Vendor" className="w-4 h-4" />
                Assign Vendor
              </Button>
            </div>
          </div>
        </Card>

        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <Card className="p-8">
              {/* Description */}
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="font-medium text-gray-900">{ticketDetails.description}</p>
              </div>

              {/* Ticket Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ThemeIcon src={propertyBuildingIcon} alt="Property" className="w-4 h-4" />
                    <span>Property</span>
                  </div>
                  <p className="font-medium text-gray-900">{ticketDetails.property}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ThemeIcon src={unitApartmentIcon} alt="Unit" className="w-4 h-4" />
                    <span>Unit</span>
                  </div>
                  <p className="font-medium text-gray-900">{ticketDetails.unit}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ThemeIcon src={tenantUserIcon} alt="Tenant" className="w-4 h-4" />
                    <span>Tenant</span>
                  </div>
                  <p className="font-medium text-gray-900">{ticketDetails.tenant}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ThemeIcon src={categoryTagIcon} alt="Category" className="w-4 h-4" />
                    <span>Category</span>
                  </div>
                  <p className="font-medium text-gray-900">{ticketDetails.category}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ThemeIcon src={aiGeneratedIcon} alt="Created Type" className="w-4 h-4" />
                    <span>Created Type</span>
                  </div>
                  <p className="font-medium text-gray-900">{ticketDetails.createdType}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ThemeIcon src={alertPriorityIcon} alt="Priority" className="w-4 h-4" />
                    <span>Priority</span>
                  </div>
                  <p className="font-medium text-red-600">{ticketDetails.priority}</p>
                </div>
              </div>

              {/* Asset Details */}
              <div className="border-t border-gray-200 pt-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Asset Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ThemeIcon src={assetDetailsIcon} alt="Asset Name" className="w-4 h-4" />
                      <span>Asset Name</span>
                    </div>
                    <p className="font-medium text-gray-900">{ticketDetails.assetName}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ThemeIcon src={assetDetailsIcon} alt="Brand" className="w-4 h-4" />
                      <span>Brand</span>
                    </div>
                    <p className="font-medium text-gray-900">{ticketDetails.brand}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ThemeIcon src={assetDetailsIcon} alt="Model" className="w-4 h-4" />
                      <span>Model</span>
                    </div>
                    <p className="font-medium text-gray-900">{ticketDetails.model}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ThemeIcon src={assetDetailsIcon} alt="Serial No" className="w-4 h-4" />
                      <span>Serial No</span>
                    </div>
                    <p className="font-medium text-gray-900">{ticketDetails.serialNo}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ThemeIcon src={warrantyCheckIcon} alt="Asset Warranty" className="w-4 h-4" />
                      <span>Asset Warranty</span>
                    </div>
                    <p className="font-medium text-red-600">{ticketDetails.warranty}</p>
                  </div>
                </div>
              </div>

              {/* Assigned Vendor */}
              <div className="border-t border-gray-200 pt-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Assigned Vendor</h3>
                {!ticketDetails.vendorAssigned ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <ThemeIcon src={vendorUserIcon} alt="No Vendor" className="w-8 h-8 mb-4" />
                    <p className="font-medium text-gray-900 mb-4">No Vendor Assigned!</p>
                    <Button variant="primary" onClick={handleAssignVendor} className="flex items-center gap-2">
                      <ThemeIcon src={assignVendorIcon} alt="Assign Vendor" className="w-4 h-4" />
                      Assign Vendor
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <ThemeIcon src={vendorUserIcon} alt="Vendor" className="w-8 h-8" />
                    <div>
                      <p className="font-medium text-gray-900">AquaPro Plumbing Services</p>
                      <p className="text-sm text-gray-600">Scheduled: Tomorrow 9:00-11:00 AM</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Attachments */}
              <div className="border-t border-gray-200 pt-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Attachments (5)</h3>
                <div className="flex gap-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-500">Image {i}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feedback */}
              <div className="border-t border-gray-200 pt-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Feedback</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <ThemeIcon src={feedbackMessageIcon} alt="Tenant Feedback" className="w-4 h-4" />
                      <span>Tenant Feedback</span>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="font-medium text-gray-900">{ticketDetails.tenantFeedback}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <ThemeIcon src={feedbackMessageIcon} alt="Vendor Feedback" className="w-4 h-4" />
                      <span>Vendor Feedback</span>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="font-medium text-gray-900">{ticketDetails.vendorFeedback}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Conversation */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Conversation</h3>
                <BotConversation messages={conversationMessages} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
