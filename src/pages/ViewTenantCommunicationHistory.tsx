import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import Card from '../components/ui/Card';
import Button from '../components/forms/Button';
import Chip from '../components/ui/Chip';
import ThemeIcon from '../components/ui/ThemeIcon';
import Tabs from '../components/ui/Tabs';
import { BotConversation } from '../components/ui/BotConversation';
import { getAssetPath } from '../utils/completeAssetMapping';

// Asset constants using proper offline mapping
const backIcon = getAssetPath('db2d219bf7ca866a4c7cc3d084b3fd4619321bf0'); // back-arrow-icon
const userIcon = getAssetPath('2b53e7c4e32d556b446b6896541b4a59f7a8bc99'); // user-icon
const locationIcon = getAssetPath('7ddb383b6724b3a3ae0a839da312c2c40c90e868'); // location-pin-icon
const editIcon = getAssetPath('52319417a31bbfed779edb880cba1406e3cb2a88'); // edit-pencil-icon
const requestIcon = getAssetPath('f0936e44104717cb519ea7157ad2013e53f3963f'); // dollar-request-rent-icon
const calendarIcon = getAssetPath('1c120c6c7dee64b387f06c815d8c1ae059eb2b07'); // calendar-expiry-icon
const dollarIcon = getAssetPath('427b6999285a8baf78a416747f93c849977edb28'); // dollar-paid-icon
const usersIcon = getAssetPath('2a57308041b3d6f98dfd9c06504690d8a2358f17'); // users-group-icon
const communicationIcon = getAssetPath('54c7b8211a203137315d2431d93e367da5008886'); // ai-icon (using as communication icon)
const propertyIcon = getAssetPath('878cd835ab10ca42796d3d46ca1955b32ffb2ff2'); // properties-icon
const unitIcon = getAssetPath('397449768111b648a778ff00f7f7adc0f33db310'); // home-unit-icon
const rentIcon = getAssetPath('c508e0e9e06502acafd54f2124771cfa94ecbcc6'); // dollar-rent-icon
const documentIcon = getAssetPath('1d2f2cc176f13c65dcaf35f4f1987dbc5eb1c753'); // calendar-date-icon

export default function ViewTenantCommunicationHistory() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleEditTenant = () => {
    console.log('Edit Tenant clicked');
    // Implement edit tenant logic here
  };

  const handleRequestRent = () => {
    console.log('Request Rent clicked');
    // Implement request rent logic here
  };

  const tabs = [
    { id: 'lease-details', label: 'Lease Details' },
    { id: 'rent-history', label: 'Rent History' },
    { id: 'co-tenants', label: 'Co-Tenants (3)' },
    { id: 'maintenance', label: 'Maintenance Tickets' },
    { id: 'communication', label: 'Communication History', active: true }
  ];

  // Sample communication messages
  const communicationMessages = [
    {
      id: '1',
      type: 'bot' as const,
      content: 'Hello Walter! I\'ve received your maintenance request for the water heater. I\'ll schedule a technician to visit tomorrow between 9 AM - 12 PM. Is this time convenient for you?',
      timestamp: '2025-01-15 10:30 AM'
    },
    {
      id: '2',
      type: 'user' as const,
      content: 'Yes, that works perfectly! Thank you for the quick response.',
      timestamp: '2025-01-15 10:35 AM',
      userInitials: 'WC'
    },
    {
      id: '3',
      type: 'bot' as const,
      content: 'Great! I\'ve confirmed the appointment. The technician will bring replacement parts for the Rheem 50 Gal water heater. You\'ll receive a confirmation email shortly.',
      timestamp: '2025-01-15 10:36 AM'
    },
    {
      id: '4',
      type: 'user' as const,
      content: 'Perfect! Also, I wanted to ask about the rent increase notice I received. When does that take effect?',
      timestamp: '2025-01-15 10:40 AM',
      userInitials: 'WC'
    },
    {
      id: '5',
      type: 'bot' as const,
      content: 'The rent increase of $50/month will take effect on your next lease renewal date, which is January 15, 2026. This gives you plenty of time to plan accordingly.',
      timestamp: '2025-01-15 10:42 AM'
    }
  ];

  return (
    <AppLayout activePage="tenants">
      <div className="flex flex-col gap-4 w-full">
        {/* Breadcrumb */}
        <div className="flex gap-2 items-center w-full">
          <Button variant="ghost" size="sm" icon="none" onClick={handleBack}>
            <ThemeIcon src={backIcon} alt="Back" size="md" variant="default" />
          </Button>
          <p className="font-normal leading-5 text-sm text-tertiary">
            Tenant Management / Walter Carter
          </p>
        </div>

        {/* Header Card */}
        <Card className="bg-overlays-black-inverse-95 border border-subtle rounded-xxxl shadow-card-large p-6">
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-gradient-brand-aurora flex items-center justify-center rounded-xxl w-10 h-10">
                <ThemeIcon src={userIcon} alt="User" size="md" variant="white" />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="flex gap-2 items-center w-full">
                  <p className="font-bold leading-[38px] text-[30px] text-primary">
                    Walter Carter
                  </p>
                  <Chip label="Active" variant="success" size="sm" />
                </div>
                <div className="flex gap-1 items-center w-full">
                  <ThemeIcon src={locationIcon} alt="Location" size="sm" variant="default" />
                  <p className="font-normal leading-6 text-base text-tertiary">
                    Sunset Apartments - Unit 001
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Button
                label="Edit Tenant"
                variant="outline"
                size="md"
                icon="edit"
                onClick={handleEditTenant}
              />
              <Button
                label="Request Rent"
                variant="primary"
                size="md"
                gradient="brand-aurora"
                icon="add"
                onClick={handleRequestRent}
              />
            </div>
          </div>
        </Card>

        {/* Summary Cards */}
        <div className="responsive-grid cols-4 gap-6 w-full">
          <Card className="bg-overlays-black-inverse-95 border border-subtle rounded-xxxl shadow-card-large p-6">
            <div className="flex gap-4 items-center">
              <div className="bg-gradient-sunset-2 flex items-center justify-center rounded-xxl w-10 h-10">
                <ThemeIcon src={calendarIcon} alt="Calendar" size="md" variant="white" />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-normal leading-4 text-sm text-tertiary">Lease Expiry</p>
                <p className="font-bold leading-8 text-2xl text-primary">346 days</p>
              </div>
            </div>
          </Card>

          <Card className="bg-overlays-black-inverse-95 border border-subtle rounded-xxxl shadow-card-large p-6">
            <div className="flex gap-4 items-center">
              <div className="bg-gradient-ai-violet-2 flex items-center justify-center rounded-xxl w-10 h-10">
                <ThemeIcon src={dollarIcon} alt="Dollar" size="md" variant="white" />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-normal leading-4 text-sm text-tertiary">Rent Paid</p>
                <p className="font-bold leading-8 text-2xl text-primary">$18,400</p>
              </div>
            </div>
          </Card>

          <Card className="bg-overlays-black-inverse-95 border border-subtle rounded-xxxl shadow-card-large p-6">
            <div className="flex gap-4 items-center">
              <div className="bg-gradient-aqua-1 flex items-center justify-center rounded-xxl w-10 h-10">
                <ThemeIcon src={usersIcon} alt="Users" size="md" variant="white" />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-normal leading-4 text-sm text-tertiary">Co-tenants</p>
                <p className="font-bold leading-8 text-2xl text-primary">3</p>
              </div>
            </div>
          </Card>

          <Card className="bg-overlays-black-inverse-95 border border-subtle rounded-xxxl shadow-card-large p-6">
            <div className="flex gap-4 items-center">
              <div className="bg-gradient-brand-aurora flex items-center justify-center rounded-xxl w-10 h-10 shadow-card-small">
                <ThemeIcon src={communicationIcon} alt="Communication" size="md" variant="white" />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-normal leading-4 text-sm text-tertiary">Communication History</p>
                <p className="font-bold leading-8 text-2xl text-primary">5</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex gap-4 items-start w-full">
          {/* Overview Card */}
          <Card className="bg-overlays-black-inverse-95 border border-subtle rounded-xxxl shadow-card-large p-8 w-80">
            <p className="font-semibold leading-6 text-base text-primary mb-4">Overview</p>
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center">
                  <ThemeIcon src={propertyIcon} alt="Property" size="sm" variant="default" />
                  <p className="font-normal leading-4 text-sm text-primary">Property</p>
                </div>
                <p className="font-medium leading-[22px] text-sm text-primary">Sunset Apartments</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center">
                  <ThemeIcon src={unitIcon} alt="Unit" size="sm" variant="default" />
                  <p className="font-normal leading-4 text-sm text-primary">Unit</p>
                </div>
                <p className="font-medium leading-[22px] text-sm text-primary">Unit 001</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center">
                  <ThemeIcon src={rentIcon} alt="Rent" size="sm" variant="default" />
                  <p className="font-normal leading-4 text-sm text-primary">Rent</p>
                </div>
                <p className="font-medium leading-[22px] text-sm text-primary">$800/mo</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center">
                  <ThemeIcon src={calendarIcon} alt="Calendar" size="sm" variant="default" />
                  <p className="font-normal leading-4 text-sm text-primary">Lease Start</p>
                </div>
                <p className="font-medium leading-[22px] text-sm text-primary">01-15-2025</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center">
                  <ThemeIcon src={calendarIcon} alt="Calendar" size="sm" variant="default" />
                  <p className="font-normal leading-4 text-sm text-primary">Lease End</p>
                </div>
                <p className="font-medium leading-[22px] text-sm text-primary">01-15-2026</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center">
                  <ThemeIcon src={documentIcon} alt="Document" size="sm" variant="default" />
                  <p className="font-normal leading-4 text-sm text-primary">Documents</p>
                </div>
                <p className="font-medium leading-[22px] text-sm text-primary">2 Docs</p>
              </div>
            </div>
          </Card>

          {/* Communication History Section */}
          <Card className="bg-overlays-black-inverse-95 border border-subtle rounded-xxxl shadow-card-large p-8 flex-1">
            <Tabs tabs={tabs} className="mb-6" />

            {/* Communication Content */}
            <div className="flex flex-col gap-4 items-center justify-center w-full h-96">
              <BotConversation
                title="Communication History"
                messages={communicationMessages}
                className="w-full h-full"
              />
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
