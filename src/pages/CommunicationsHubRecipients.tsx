import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import Button from '../components/forms/Button';
import { Card } from '../components/ui/Card';
import ThemeIcon from '../components/ui/ThemeIcon';
import StatCard from '../components/cards/StatCard';
import Chip from '../components/ui/Chip';
import Avatar from '../components/ui/Avatar';

// Asset constants
const newCampaignIcon = getAssetPath('new-campaign-icon');
const editPropertyIcon = getAssetPath('edit-property-icon');
const threeDotsMoreOptionsIcon = getAssetPath('three-dots-more-options-icon');

export default function CommunicationsHubRecipients() {
  const navigate = useNavigate();

  const handleNewCampaign = () => {
    console.log('New Campaign clicked');
    navigate('/create-new-communication-campaign');
  };

  const handleEditProperty = () => {
    console.log('Edit Property clicked');
    // Navigate to edit property page
  };

  const handleViewDetails = (recipientId: string) => {
    console.log(`View details for recipient ${recipientId}`);
    // Navigate to recipient details page
  };

  const recipients = [
    {
      id: '1',
      name: 'John Smith',
      initials: 'JS',
      email: 'john.smith@email.com',
      phone: '(555) 123-4567',
      property: 'Sunset Apartments - 4B',
      type: 'Tenant',
      language: 'EN',
      gradient: 'aqua-2',
    },
    {
      id: '2',
      name: 'Maria Garcia',
      initials: 'MG',
      email: 'maria.garcia@email.com',
      phone: '(555) 123-4567',
      property: 'Sunset Apartments - 4B',
      type: 'Tenant',
      language: 'EN',
      gradient: 'aqua-2',
    },
    {
      id: '3',
      name: 'Mike Chen',
      initials: 'MC',
      email: 'mike.chen@email.com',
      phone: '(555) 123-4567',
      property: 'Sunset Apartments - 4B',
      type: 'Tenant',
      language: 'EN',
      gradient: 'aqua-2',
    },
  ];

  return (
    <AppLayout
      activePage="communications"
      searchPlaceholder="Search campaigns, templates, recipients..."
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
            <p className="text-base text-gray-600">Send multi-channel AI-assisted messages</p>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary" onClick={handleEditProperty} className="flex items-center gap-2">
              <ThemeIcon src={editPropertyIcon} alt="Edit Property Icon" className="w-4 h-4" />
              Edit Property
            </Button>
            <Button variant="primary" onClick={handleNewCampaign} className="flex items-center gap-2">
              <ThemeIcon src={newCampaignIcon} alt="New Campaign Icon" className="w-4 h-4" />
              New Campaign
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Messages Sent Today"
            value="156"
            icon={getAssetPath('message-sent-icon')} // Assuming a message-sent-icon exists
          />
          <StatCard
            title="Delivery Rate"
            value="92.5%"
            valueColor="success"
            icon={getAssetPath('delivery-rate-icon')} // Assuming a delivery-rate-icon exists
          />
          <StatCard
            title="Open Rate"
            value="68%"
            valueColor="info"
            icon={getAssetPath('open-rate-icon')} // Assuming an open-rate-icon exists
          />
          <StatCard
            title="Responses"
            value="24"
            valueColor="primary"
            icon={getAssetPath('responses-icon')} // Assuming a responses-icon exists
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-2 bg-gray-100 rounded-full w-fit">
          <Button variant="ghost" className="rounded-full" onClick={() => navigate('/communications-hub-campaigns')}>
            Campaigns
          </Button>
          <Button variant="ghost" className="rounded-full" onClick={() => navigate('/communications-hub-templates')}>
            Templates
          </Button>
          <Button variant="primary" className="rounded-full" onClick={() => navigate('/communications-hub-recipients')}>
            Recipients
          </Button>
          <Button variant="ghost" className="rounded-full">
            Analytics
          </Button>
        </div>

        {/* Recipients Table */}
        <Card className="p-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[200px]">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recipients.map((recipient) => (
                  <tr key={recipient.id}>
                    <td className="px-6 py-4 whitespace-nowrap w-[200px]">
                      <div className="flex items-center gap-2">
                        <Avatar initials={recipient.initials} gradient={recipient.gradient} size="sm" />
                        <p className="text-sm font-medium text-gray-700">{recipient.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recipient.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recipient.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recipient.property}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Chip variant="neutral" label={recipient.type} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Chip variant="info" label={recipient.language} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Button variant="ghost" onClick={() => handleViewDetails(recipient.id)} className="p-2">
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
