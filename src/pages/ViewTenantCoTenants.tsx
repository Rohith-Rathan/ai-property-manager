import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import Card from '../components/ui/Card';
import Button from '../components/forms/Button';
import Chip from '../components/ui/Chip';
import ThemeIcon from '../components/ui/ThemeIcon';
import Tabs from '../components/ui/Tabs';
import UserCard from '../components/ui/UserCard';
import { getAssetPath } from '../utils/completeAssetMapping';

// Asset constants using proper offline mapping - only using mapped icons
const backIcon = getAssetPath('db2d219bf7ca866a4c7cc3d084b3fd4619321bf0'); // back-arrow-icon
const searchIcon = getAssetPath('883cd501fc86c09a6ac9236f472c914dc97e72de'); // search-icon
const bellIcon = getAssetPath('380d7c57c8da998602c27a8540fb92067223abc1'); // notification-bell-icon
const settingsIcon = getAssetPath('387e1fdaba032cec9987ecb3f179369ebc062863'); // globe-icon
const moonIcon = getAssetPath('c5897153a63e051430d72b0e62512742a6db262d'); // moon-theme-icon
const dashboardIcon = getAssetPath('80b75202df0baa408a9d13376ff37162cae3f6a6'); // dashboard-grid-icon
const propertiesIcon = getAssetPath('d5f50011d879f7eeb838444199ed6cc8992be7ce'); // properties-building-icon
const tenantsIcon = getAssetPath('de8bf0318d24a35a22cb634ec71e1d3edd3cd21c'); // tenants-person-icon
const maintenanceIcon = getAssetPath('bd7230e7a66d09f8f2922c1dbe464bf845edafdb'); // maintenance-icon
const analyticsIcon = getAssetPath('bd7230e7a66d09f8f2922c1dbe464bf845edafdb'); // maintenance-icon (reusing)
const reportsIcon = getAssetPath('850367b3d5bcc6795460767cc6f8c3748e42d0c6'); // assets-box-icon
const settingsNavIcon = getAssetPath('31bcd2bd8a20f979bbaf0dd99cf7a04a8abd86f3'); // history-clock-icon
const helpIcon = getAssetPath('0f0383cf06f4eb1085b119a44e1d85a57f62ffa0'); // settings-gear-icon
const userIcon = getAssetPath('2b53e7c4e32d556b446b6896541b4a59f7a8bc99'); // user-icon
const locationIcon = getAssetPath('7ddb383b6724b3a3ae0a839da312c2c40c90e868'); // location-pin-icon
const editIcon = getAssetPath('52319417a31bbfed779edb880cba1406e3cb2a88'); // edit-pencil-icon
const requestIcon = getAssetPath('f0936e44104717cb519ea7157ad2013e53f3963f'); // dollar-request-rent-icon
const calendarIcon = getAssetPath('1c120c6c7dee64b387f06c815d8c1ae059eb2b07'); // calendar-expiry-icon
const dollarIcon = getAssetPath('427b6999285a8baf78a416747f93c849977edb28'); // dollar-paid-icon
const usersIcon = getAssetPath('2a57308041b3d6f98dfd9c06504690d8a2358f17'); // users-group-icon
const wrenchIcon = getAssetPath('bd7230e7a66d09f8f2922c1dbe464bf845edafdb'); // maintenance-icon (reusing)
const propertyIcon = getAssetPath('878cd835ab10ca42796d3d46ca1955b32ffb2ff2'); // properties-icon
const unitIcon = getAssetPath('397449768111b648a778ff00f7f7adc0f33db310'); // home-unit-icon
const rentIcon = getAssetPath('c508e0e9e06502acafd54f2124771cfa94ecbcc6'); // dollar-rent-icon
const documentIcon = getAssetPath('1d2f2cc176f13c65dcaf35f4f1987dbc5eb1c753'); // calendar-date-icon
const emailIcon = getAssetPath('9699f89e2634301c749350e57739d76aca9fa04d'); // envelope-email-icon
const phoneIcon = getAssetPath('498e262ab2dbc300a43b7fda916b58f88d6eead5'); // phone-icon
const moreIcon = getAssetPath('fdfdceca98cfd520a588137d6a2887f6da7734d1'); // three-dots-more-options-icon

export default function ViewTenantCoTenants() {
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

  const handleMoreActions = (tenantId: string) => {
    console.log(`More actions for tenant ${tenantId}`);
    // Implement more actions logic here
  };

  const tabs = [
    { id: 'lease-details', label: 'Lease Details' },
    { id: 'rent-history', label: 'Rent History' },
    { id: 'co-tenants', label: 'Co-Tenants (3)', active: true },
    { id: 'maintenance', label: 'Maintenance Tickets' },
    { id: 'communication', label: 'Communication History' }
  ];

  const coTenants = [
    {
      id: '1',
      name: 'Walter Carter',
      email: 'Walter90@hotmail.com',
      phone: '1-772-280-7340',
      initials: 'WC'
    },
    {
      id: '2', 
      name: 'Walter Carter',
      email: 'Walter90@hotmail.com',
      phone: '1-772-280-7340',
      initials: 'WC'
    },
    {
      id: '3',
      name: 'Walter Carter', 
      email: 'Walter90@hotmail.com',
      phone: '1-772-280-7340',
      initials: 'WC'
    }
  ];

  return (
    <AppLayout activePage="tenants">
      <div className="flex flex-col gap-4 w-full">
        {/* Breadcrumb */}
        <div className="flex gap-2 items-center w-full">
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
                <ThemeIcon src={wrenchIcon} alt="Wrench" size="md" variant="white" />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-normal leading-4 text-sm text-tertiary">Maintenance Tickets</p>
                <p className="font-bold leading-8 text-2xl text-primary">2</p>
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

          {/* Co-Tenants Section */}
          <Card className="bg-overlays-black-inverse-95 border border-subtle rounded-xxxl shadow-card-large p-8 flex-1">
            <Tabs tabs={tabs} className="mb-6" />
            
            <div className="flex flex-col gap-4 items-start w-full">
              {coTenants.map((tenant) => (
                <Card key={tenant.id} className="bg-gray-50 border border-subtle rounded-2xl p-4 w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex gap-2 items-start w-full">
                      <div className="bg-gradient-info-flow flex items-center justify-center rounded-xxl w-10 h-10">
                        <p className="font-medium leading-5 text-sm text-white">
                          {tenant.initials}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1 items-start flex-1">
                        <p className="font-normal leading-[26px] text-lg text-primary w-full">
                          {tenant.name}
                        </p>
                        <div className="flex gap-2 items-center w-full">
                          <div className="flex gap-2 items-center">
                            <ThemeIcon src={emailIcon} alt="Email" size="xs" variant="default" />
                            <p className="font-normal leading-normal text-xs text-tertiary">
                              {tenant.email}
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <ThemeIcon src={phoneIcon} alt="Phone" size="xs" variant="default" />
                            <p className="font-normal leading-normal text-xs text-tertiary">
                              {tenant.phone}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center rounded-lg w-6 h-6">
                      <ThemeIcon src={moreIcon} alt="More" size="sm" variant="default" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
