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
const emailTemplateIcon = getAssetPath('email-template-icon');
const smsTemplateIcon = getAssetPath('sms-template-icon');

export default function CommunicationsHubTemplates() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('templates');

  const handleNewCampaign = () => {
    console.log('New Campaign clicked');
    navigate('/create-new-communication-campaign');
  };

  const handleEditProperty = () => {
    console.log('Edit Property clicked');
    // Navigate to edit property page
  };

  const handleUseTemplate = (templateId: string) => {
    console.log(`Use template ${templateId}`);
    navigate('/create-new-communication-campaign');
  };

  const handleViewDetails = (templateId: string) => {
    console.log(`View details for template ${templateId}`);
    // Navigate to template details page
  };

  const handleTranslate = (templateId: string) => {
    console.log(`Translate template ${templateId}`);
    // Navigate to translation page
  };

  const templates = [
    {
      id: 'template-1',
      name: 'Rent Reminder - Friendly',
      category: 'Rent Reminder',
      subject: 'Friendly Rent Reminder - {{property_name}}',
      content: 'Hi {{tenant_name}}, this is a friendly reminder that your rent payment of ${{ rent_amount }} for {{property_name}} Unit {{unit_number}} is due on {{due_date}}. You can pay online at {{payment_link}} or contact us if you need assistance.',
      channels: ['email', 'sms'],
    },
    {
      id: 'template-2',
      name: 'Lease Renewal Offer',
      category: 'Lease Renewal',
      subject: 'Your Lease Renewal Options - {{property_name}}',
      content: 'Dear {{tenant_name}}, your lease for {{property_name}} Unit {{unit_number}} expires on {{lease_end_date}}. We would love to have you renew! New rent: ${{ new_rent_amount }}. Please reply by {{response_deadline}} to secure your renewal.',
      channels: ['email', 'sms'],
    },
    {
      id: 'template-3',
      name: 'Maintenance Update',
      category: 'Maintenance',
      subject: 'Maintenance Update - {{property_name}}',
      content: 'Hi {{tenant_name}}, we wanted to update you on the maintenance request for {{property_name}} Unit {{unit_number}}. Status: {{maintenance_status}}. Expected completion: {{completion_date}}. Contact us if you have any questions.',
      channels: ['email', 'sms'],
    },
    {
      id: 'template-4',
      name: 'Welcome Message',
      category: 'Welcome',
      subject: 'Welcome to {{property_name}}!',
      content: 'Welcome {{tenant_name}}! We\'re excited to have you as our new tenant at {{property_name}} Unit {{unit_number}}. Your move-in date is {{move_in_date}}. Please contact us if you need any assistance.',
      channels: ['email', 'sms'],
    },
  ];

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'email':
        return <ThemeIcon src={emailTemplateIcon} alt="Email" className="w-4 h-4" />;
      case 'sms':
        return <ThemeIcon src={smsTemplateIcon} alt="SMS" className="w-4 h-4" />;
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

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="p-0 overflow-hidden bg-gray-50">
              {/* Template Header */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex flex-col gap-1 flex-1">
                    <h3 className="font-semibold text-base text-gray-900">{template.name}</h3>
                    <Chip variant="info" label={template.category} />
                  </div>
                  <Button 
                    variant="primary" 
                    onClick={() => handleUseTemplate(template.id)}
                    className="text-sm px-4 py-2"
                  >
                    Use Template
                  </Button>
                </div>
                <p className="text-xs text-gray-500">Template: {template.name}</p>
              </div>

              {/* Template Content */}
              <div className="px-4 pb-4">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Subject</p>
                    <p className="text-sm text-gray-900">{template.subject}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Content:</p>
                    <p className="text-sm text-gray-900">{template.content}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Channel:</p>
                    <div className="flex gap-2">
                      {template.channels.map((channel) => (
                        <div key={channel} className="flex items-center gap-1">
                          {getChannelIcon(channel)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Template Actions */}
              <div className="px-4 pb-4 flex gap-2">
                <Button 
                  variant="secondary" 
                  onClick={() => handleViewDetails(template.id)}
                  className="flex-1 text-sm"
                >
                  View Details
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => handleTranslate(template.id)}
                  className="flex-1 text-sm"
                >
                  Translate
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
