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
const closeCampaignIcon = getAssetPath('close-campaign-icon');
const emailChannelSelectedIcon = getAssetPath('email-channel-selected-icon');
const smsChannelUnselectedIcon = getAssetPath('sms-channel-unselected-icon');
const whatsappChannelIcon = getAssetPath('whatsapp-channel-icon');

export default function CreateNewCommunicationCampaign() {
  const navigate = useNavigate();
  const [campaignName, setCampaignName] = useState('');
  const [template, setTemplate] = useState('');
  const [sendOption, setSendOption] = useState('Send Now');
  const [priority, setPriority] = useState('Normal');
  const [selectedChannel, setSelectedChannel] = useState('email');
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  const handleSendCampaign = () => {
    console.log('Send Campaign clicked');
    // Implement logic to send campaign
    navigate('/communications-hub-campaigns');
  };

  const handleSaveAsDraft = () => {
    console.log('Save as Draft clicked');
    // Implement logic to save as draft
    navigate('/communications-hub-campaigns');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
    navigate('/communications-hub-campaigns');
  };

  const handleRecipientToggle = (recipientId: string) => {
    setSelectedRecipients(prev => 
      prev.includes(recipientId) 
        ? prev.filter(id => id !== recipientId)
        : [...prev, recipientId]
    );
  };

  const handleChannelSelect = (channel: string) => {
    setSelectedChannel(channel);
  };

  const recipients = [
    {
      id: 'recipient-1',
      name: 'John Smith',
      initials: 'JD',
      property: 'Sunset Apartments - 4B',
      type: 'Tenant',
      language: 'EN',
    },
    {
      id: 'recipient-2',
      name: 'Maria Garcia',
      initials: 'MG',
      property: 'Oak Villa - 12A',
      type: 'Tenant',
      language: 'EN',
    },
    {
      id: 'recipient-3',
      name: 'Mike Chen',
      initials: 'MC',
      property: 'Pine Heights - 8C',
      type: 'Tenant',
      language: 'EN',
    },
  ];

  const channels = [
    { id: 'email', name: 'Email', icon: emailChannelSelectedIcon },
    { id: 'sms', name: 'SMS', icon: smsChannelUnselectedIcon },
    { id: 'whatsapp', name: 'Whatsapp', icon: whatsappChannelIcon },
    { id: 'video', name: 'Video Call', icon: smsChannelUnselectedIcon },
  ];

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
      <Card className="rounded-xxxl shadow-card-large p-8" padding="none" variant="outlined">
        {/* Header */}
        <div className="border-b border-overlays-white-inverse-20 border-solid flex items-center justify-between pb-4 pt-8 px-8 w-full">
          <h2 className="font-bold text-lg text-text-primary">Create New Communication Campaign</h2>
          <Button variant="ghost" onClick={handleClose} className="p-2">
            <ThemeIcon src={closeCampaignIcon} alt="Close" className="w-6 h-6" />
          </Button>
        </div>

        {/* Form Content */}
        <div className="flex flex-col gap-6 px-8 py-6 w-full">
          {/* Campaign Name and Template */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Campaign Name"
              placeholder="Enter campaign name"
              value={campaignName}
              onChange={setCampaignName}
              className="flex-1"
            />
            <FormField
              label="Template"
              placeholder="Select template"
              value={template}
              onChange={setTemplate}
              className="flex-1"
            />
          </div>

          {/* Select Recipients */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-base text-text-primary">Select Recipients</h3>
              <p className="text-sm text-gray-500">{selectedRecipients.length} recipients selected</p>
            </div>
            
            <div className="border border-overlays-white-inverse-20 rounded-lg overflow-hidden">
              {/* Table Header */}
              <div className="border-b border-overlays-white-inverse-20 bg-gray-50">
                <div className="grid grid-cols-12 gap-4 p-6">
                  <div className="col-span-1"></div>
                  <div className="col-span-3 font-medium text-sm text-text-primary">Name</div>
                  <div className="col-span-4 font-medium text-sm text-text-primary">Property</div>
                  <div className="col-span-2 font-medium text-sm text-text-primary">Type</div>
                  <div className="col-span-2 font-medium text-sm text-text-primary">Language</div>
                </div>
              </div>
              
              {/* Table Rows */}
              {recipients.map((recipient) => (
                <div key={recipient.id} className="border-b border-overlays-white-inverse-20 last:border-b-0">
                  <div className="grid grid-cols-12 gap-4 p-6 items-center">
                    <div className="col-span-1">
                      <input
                        type="checkbox"
                        checked={selectedRecipients.includes(recipient.id)}
                        onChange={() => handleRecipientToggle(recipient.id)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                    </div>
                    <div className="col-span-3 flex items-center gap-2">
                      <div className="bg-gradient-to-b from-aqua-2-color1 to-aqua-2-color2 rounded-full w-8 h-8 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">{recipient.initials}</span>
                      </div>
                      <span className="font-medium text-sm text-text-tertiary">{recipient.name}</span>
                    </div>
                    <div className="col-span-4">
                      <span className="font-medium text-sm text-text-tertiary">{recipient.property}</span>
                    </div>
                    <div className="col-span-2">
                      <Chip variant="neutral" label={recipient.type} />
                    </div>
                    <div className="col-span-2">
                      <Chip variant="info" label={recipient.language} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Channels */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-base text-text-primary">Communication Channels</h3>
              <p className="text-sm text-gray-500">{selectedRecipients.length} recipients selected</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => handleChannelSelect(channel.id)}
                  className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-colors ${
                    selectedChannel === channel.id
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-700 hover:border-gray-500'
                  }`}
                >
                  <ThemeIcon 
                    src={channel.icon} 
                    alt={channel.name} 
                    className={`w-6 h-6 ${
                      selectedChannel === channel.id ? 'text-primary-600' : 'text-gray-700'
                    }`} 
                  />
                  <span className={`font-semibold text-base ${
                    selectedChannel === channel.id ? 'text-primary-600' : 'text-gray-700'
                  }`}>
                    {channel.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Send Option and Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Send Option"
              placeholder="Select option"
              value={sendOption}
              onChange={setSendOption}
              className="flex-1"
            />
            <FormField
              label="Priority"
              placeholder="Select priority"
              value={priority}
              onChange={setPriority}
              className="flex-1"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-overlays-white-inverse-20 border-solid flex flex-wrap gap-4 items-center justify-center pb-8 pt-8 px-8 w-full">
          <Button variant="primary" onClick={handleSendCampaign} className="flex-1 max-w-xs">
            Send Campaign
          </Button>
          <Button variant="secondary" onClick={handleSaveAsDraft} className="flex-1 max-w-xs">
            Save as Draft
          </Button>
          <Button variant="secondary" onClick={handleCancel} className="flex-1 max-w-xs">
            Cancel
          </Button>
        </div>
      </Card>
    </AppLayout>
  );
}
