import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import Button from '../components/forms/Button';
import { Card } from '../components/ui/Card';
import ThemeIcon from '../components/ui/ThemeIcon';
import Chip from '../components/ui/Chip';

// Asset constants
const editPropertyIcon = getAssetPath('edit-property-icon');
const addAssetIcon = getAssetPath('add-asset-icon');
const emailChannelIcon = getAssetPath('email-channel-icon');
const smsChannelIcon = getAssetPath('sms-channel-icon');
const whatsappChannelIcon = getAssetPath('whatsapp-channel-icon');
const smsChannelAltIcon = getAssetPath('sms-channel-alt-icon');
const whatsappChannelAltIcon = getAssetPath('whatsapp-channel-alt-icon');
const threeDotsMoreOptionsIcon = getAssetPath('three-dots-more-options-icon');

export default function CommunicationsHubCampaigns() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('campaigns');

  const handleNewCampaign = () => {
    console.log('New Campaign clicked');
    // Navigate to create new campaign page
  };

  const handleEditProperty = () => {
    console.log('Edit Property clicked');
    // Navigate to edit property page
  };

  const handleViewCampaign = (campaignId: string) => {
    console.log(`View campaign ${campaignId}`);
    // Navigate to campaign details page
  };

  const campaigns = [
    {
      id: 'campaign-1',
      name: 'February Rent Reminders',
      template: 'Rent Reminder - Friendly',
      channels: ['email', 'sms'],
      status: 'Active',
      recipients: 87,
      sent: 87,
      delivered: 85,
      opened: 72,
      replied: 12,
    },
    {
      id: 'campaign-2',
      name: 'Q1 Lease Renewals',
      template: 'Lease Renewal Offer',
      channels: ['email'],
      status: 'Sending',
      recipients: 87,
      sent: 87,
      delivered: 85,
      opened: 72,
      replied: 12,
    },
    {
      id: 'campaign-3',
      name: 'Q1 Lease Renewals',
      template: 'Lease Renewal Offer',
      channels: ['sms', 'whatsapp'],
      status: 'Sending',
      recipients: 87,
      sent: 87,
      delivered: 85,
      opened: 72,
      replied: 12,
    },
    {
      id: 'campaign-4',
      name: 'Q1 Lease Renewals',
      template: 'Lease Renewal Offer',
      channels: ['sms', 'whatsapp'],
      status: 'Scheduled',
      recipients: 87,
      sent: 87,
      delivered: 85,
      opened: 72,
      replied: 12,
    },
  ];

  const getStatusChip = (status: string) => {
    switch (status) {
      case 'Active':
        return <Chip variant="success" label={status} />;
      case 'Sending':
        return <Chip variant="info" label={status} />;
      case 'Scheduled':
        return <Chip variant="warning" label={status} />;
      default:
        return <Chip variant="neutral" label={status} />;
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'email':
        return <ThemeIcon src={emailChannelIcon} alt="Email" className="w-3 h-3" />;
      case 'sms':
        return <ThemeIcon src={smsChannelIcon} alt="SMS" className="w-3 h-3" />;
      case 'whatsapp':
        return <ThemeIcon src={whatsappChannelIcon} alt="WhatsApp" className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <AppLayout
      activePage="communications"
      searchPlaceholder="Search properties, tenants, tickets..."
      notificationCount={3}
      showThemeToggle={true}
      userName="John Doe"
      userInitials="JD"
      userGradient="aqua-2"
    >
      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto py-8">
        {/* Page Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Communications Hub</h1>
            <p className="text-base text-gray-500">Send multi-channel AI-assisted messages</p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={handleEditProperty} className="flex items-center gap-2 opacity-0">
              <ThemeIcon src={editPropertyIcon} alt="Edit Property Icon" className="w-4 h-4" />
              Edit Property
            </Button>
            <Button variant="primary" onClick={handleNewCampaign} className="flex items-center gap-2">
              <ThemeIcon src={addAssetIcon} alt="New Campaign Icon" className="w-4 h-4" />
              New Campaign
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-600">Messages Sent Today</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-600">Delivery Rate</p>
              <p className="text-2xl font-bold text-green-600">92.5%</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-600">Open Rate</p>
              <p className="text-2xl font-bold text-blue-600">68%</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-600">Responses</p>
              <p className="text-2xl font-bold text-purple-600">24</p>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="bg-gradient-to-r from-brand-aurora-color1/10 to-brand-aurora-color2/10 rounded-full p-1 flex gap-1">
          <Button
            variant={activeTab === 'campaigns' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('campaigns')}
            className="rounded-full"
          >
            Campaigns
          </Button>
          <Button
            variant={activeTab === 'templates' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('templates')}
            className="rounded-full"
          >
            Templates
          </Button>
          <Button
            variant={activeTab === 'recipients' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('recipients')}
            className="rounded-full"
          >
            Recipients
          </Button>
          <Button
            variant={activeTab === 'analytics' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('analytics')}
            className="rounded-full"
          >
            Analytics
          </Button>
        </div>

        {/* Campaigns Table */}
        <Card className="p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="text-left p-6 font-medium text-gray-900 w-72">Name</th>
                  <th className="text-center p-6 font-medium text-gray-900">Status</th>
                  <th className="text-center p-6 font-medium text-gray-900">Recipients</th>
                  <th className="text-center p-6 font-medium text-gray-900">Sent</th>
                  <th className="text-center p-6 font-medium text-gray-900">Delivered</th>
                  <th className="text-center p-6 font-medium text-gray-900">Opened</th>
                  <th className="text-center p-6 font-medium text-gray-900">Replied</th>
                  <th className="text-center p-6 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <tr key={campaign.id} className="border-b border-gray-200 last:border-b-0">
                    <td className="p-6">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                          <p className="font-medium text-gray-900">{campaign.name}</p>
                          <p className="text-xs text-gray-500">Template: {campaign.template}</p>
                        </div>
                        <div className="flex gap-2">
                          {campaign.channels.map((channel) => (
                            <Chip key={channel} variant="neutral" label={channel.charAt(0).toUpperCase() + channel.slice(1)} className="flex items-center gap-1" />
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      {getStatusChip(campaign.status)}
                    </td>
                    <td className="p-6 text-center">
                      <p className="font-medium text-gray-600">{campaign.recipients}</p>
                    </td>
                    <td className="p-6 text-center">
                      <p className="font-medium text-gray-600">{campaign.sent}</p>
                    </td>
                    <td className="p-6 text-center">
                      <p className="font-medium text-gray-600">{campaign.delivered}</p>
                    </td>
                    <td className="p-6 text-center">
                      <p className="font-medium text-gray-600">{campaign.opened}</p>
                    </td>
                    <td className="p-6 text-center">
                      <p className="font-medium text-gray-600">{campaign.replied}</p>
                    </td>
                    <td className="p-6 text-center">
                      <Button variant="ghost" onClick={() => handleViewCampaign(campaign.id)} className="p-2">
                        <ThemeIcon src={threeDotsMoreOptionsIcon} alt="More Options" className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
