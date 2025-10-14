import React from 'react';
import { getAssetPath } from '../../utils/completeAssetMapping';
import ThemeIcon from './ThemeIcon';

// Asset constants
const locationIcon = getAssetPath('location-icon');
const propertyActionsIcon = getAssetPath('property-actions-icon');
const moreOptionsIcon = getAssetPath('more-options-icon');

interface PropertyItem {
  id: string;
  name: string;
  address: string;
  image: string;
  badge?: string;
  badgeColor?: 'success' | 'warning' | 'error' | 'secondary';
  units: number;
  monthlyRevenue: string;
  occupancy: {
    percentage: number;
    description: string;
  };
}

interface TenantItem {
  id: string;
  name: string;
  initials: string;
  property: string;
  unit: string;
  status: 'active' | 'inactive';
  leaseId: string;
  leaseExpiry: string;
  rentStatus: 'paid' | 'due';
}

interface ListViewProps {
  variant?: 'properties' | 'tenants';
  title?: string;
  subtitle?: string;
  properties?: PropertyItem[];
  tenants?: TenantItem[];
  onItemClick?: (id: string) => void;
  onItemEdit?: (id: string) => void;
}

export default function ListView({
  variant = 'properties',
  title = 'Properties & Units',
  subtitle = 'Manage your property portfolio with detailed unit tracking',
  properties = [],
  tenants = [],
  onItemClick,
  onItemEdit
}: ListViewProps) {

  // Default data for demonstration
  const defaultProperties: PropertyItem[] = [
    {
      id: '1',
      name: 'Sunset Apartments',
      address: '123 Sunset Blvd, Los Angeles, CA',
      image: '/assets/property-image-1.png',
      badge: 'Apartment',
      badgeColor: 'success',
      units: 24,
      monthlyRevenue: '$48,000',
      occupancy: {
        percentage: 60.7,
        description: '22 of 24 units occupied'
      }
    },
    {
      id: '2',
      name: 'Garden Villas',
      address: '123 Sunset Blvd, Los Angeles, CA',
      image: '/assets/property-image-2.png',
      badge: 'Apartment',
      badgeColor: 'secondary',
      units: 24,
      monthlyRevenue: '$48,000',
      occupancy: {
        percentage: 24.3,
        description: '18 of 24 units occupied'
      }
    },
    {
      id: '3',
      name: 'Metro Business Center',
      address: '123 Sunset Blvd, Los Angeles, CA',
      image: '/assets/property-image-3.png',
      badge: 'Individual',
      badgeColor: 'warning',
      units: 24,
      monthlyRevenue: '$48,000',
      occupancy: {
        percentage: 98.1,
        description: '24 of 24 units occupied'
      }
    }
  ];

  const defaultTenants: TenantItem[] = [
    {
      id: '1',
      name: 'Walter Carter',
      initials: 'WC',
      property: 'Sunset Apartments',
      unit: 'Unit 001',
      status: 'active',
      leaseId: '21365465',
      leaseExpiry: '01-10-2026',
      rentStatus: 'due'
    },
    {
      id: '2',
      name: 'Walter Carter',
      initials: 'WC',
      property: 'Sunset Apartments',
      unit: 'Unit 001',
      status: 'inactive',
      leaseId: '21365465',
      leaseExpiry: '01-10-2022 (expired)',
      rentStatus: 'paid'
    },
    {
      id: '3',
      name: 'Walter Carter',
      initials: 'WC',
      property: 'Sunset Apartments',
      unit: 'Unit 001',
      status: 'active',
      leaseId: '21365465',
      leaseExpiry: '01-10-2026',
      rentStatus: 'paid'
    }
  ];

  const getBadgeColorClass = (color?: string) => {
    switch (color) {
      case 'error': return 'bg-error-500';
      case 'warning': return 'bg-warning-500';
      case 'secondary': return 'bg-secondary-500';
      default: return 'bg-success-500';
    }
  };

  const getStatusColorClass = (status: string) => {
    switch (status) {
      case 'active': return 'bg-overlays-success-10 text-success-900';
      case 'inactive': return 'bg-overlays-gray-10 text-gray-900';
      default: return 'bg-overlays-success-10 text-success-900';
    }
  };

  const getRentStatusColorClass = (status: string) => {
    switch (status) {
      case 'due': return 'text-error-500';
      case 'paid': return 'text-success-500';
      default: return 'text-success-500';
    }
  };

  const displayProperties = properties.length > 0 ? properties : defaultProperties;
  const displayTenants = tenants.length > 0 ? tenants : defaultTenants;

  return (
    <div className="bg-paper-paper-elevation-1 border border-overlays-white-inverse-5 border-solid box-border content-stretch flex flex-col gap-4 items-start p-6 relative rounded-xxl shrink-0 w-full h-auto min-h-96 sm:h-auto md:h-auto lg:h-auto shadow-card-small" data-name="List View Container">
      
      {/* Properties List */}
      {variant === 'properties' && displayProperties.map((property) => (
        <div key={property.id} className="bg-paper-paper-elevation-2 border border-overlays-white-inverse-10 border-solid box-border content-stretch flex items-center justify-between p-px relative rounded-xxl shrink-0 w-full h-auto min-h-20 sm:h-auto md:h-auto lg:h-auto" data-name="Property List Item">
          {/* Property Info Section */}
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full relative shrink-0 w-full sm:w-80 md:w-96 lg:w-96" data-name="Property Info">
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-full items-center p-4 relative w-full sm:w-80 md:w-96 lg:w-96">
                {/* Property Image */}
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-lg shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10" data-name="Property Image">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Image Container">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                      <img alt={property.name} className="absolute max-w-none object-50%-50% object-cover size-full" src={property.image} />
                      <div className="absolute bg-overlays-black-20 inset-0" />
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Property Details">
                  <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Title Section">
                    <p className="font-sans font-semibold leading-base not-italic relative shrink-0 text-primary text-base text-nowrap whitespace-pre" data-name="Property Title">
                      {property.name}
                    </p>
                    {property.badge && (
                      <div className={`${getBadgeColorClass(property.badgeColor)} box-border content-stretch flex gap-1 items-center justify-center overflow-clip px-2 py-1 relative rounded-full shrink-0`} data-name="Property Badge">
                        <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-label-small text-nowrap text-white whitespace-pre" data-name="Badge Text">
                          {property.badge}
                        </p>
                      </div>
                    )}
                  </div>
                  <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-label-small w-full sm:w-40 md:w-48 lg:w-48" data-name="Property Address">
                    {property.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Sections */}
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Units Stats">
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center justify-center p-4 relative size-full">
                <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="Units Container">
                  <p className="font-sans font-semibold leading-base relative shrink-0 text-primary text-base" data-name="Units Count">
                    {property.units}
                  </p>
                  <p className="font-sans font-normal leading-normal relative shrink-0 text-tertiary text-label-small" data-name="Units Label">
                    Units
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Revenue Stats">
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center justify-center p-4 relative size-full">
                <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="Revenue Container">
                  <p className="font-sans font-semibold leading-base relative shrink-0 text-primary text-base" data-name="Revenue Amount">
                    {property.monthlyRevenue}
                  </p>
                  <p className="font-sans font-normal leading-normal relative shrink-0 text-tertiary text-label-small" data-name="Revenue Label">
                    Monthly Revenue
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Occupancy Stats">
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center justify-center p-4 relative size-full">
                <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="Occupancy Container">
                  <p className={`font-sans font-semibold leading-base relative shrink-0 text-base ${property.occupancy.percentage >= 80 ? 'text-success-500' : property.occupancy.percentage >= 50 ? 'text-warning-500' : 'text-error-500'}`} data-name="Occupancy Percentage">
                    {property.occupancy.percentage}%
                  </p>
                  <p className="font-sans font-normal leading-normal relative shrink-0 text-tertiary text-label-small" data-name="Occupancy Label">
                    Occupied
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full relative shrink-0 w-16 sm:w-20 md:w-22 lg:w-22" data-name="Actions">
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-full items-center justify-center p-4 relative w-16 sm:w-20 md:w-22 lg:w-22">
                <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-6 h-6" data-name="Actions Button">
                  <button 
                    className="block cursor-pointer relative shrink-0 w-4 h-4" 
                    data-name="Actions Icon"
                    onClick={() => onItemEdit?.(property.id)}
                  >
                    <ThemeIcon src={moreOptionsIcon} alt="Actions" size="sm" variant="default" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Tenants List */}
      {variant === 'tenants' && displayTenants.map((tenant) => (
        <div key={tenant.id} className="bg-gray-100 content-stretch flex gap-2 items-center justify-center relative rounded-xxl shrink-0 w-full h-auto min-h-20 sm:h-auto md:h-auto lg:h-auto" data-name="Tenant List Item">
          {/* Tenant Info Section */}
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full relative shrink-0 w-full sm:w-80 md:w-96 lg:w-96" data-name="Tenant Info">
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-full items-center p-4 relative w-full sm:w-80 md:w-96 lg:w-96">
                {/* User Avatar */}
                <div className="content-stretch flex gap-2 items-start relative shrink-0" data-name="User Details">
                  <div className="bg-gradient-aqua-2 content-stretch flex items-center justify-center relative rounded-xxl shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10" data-name="User Avatar">
                    <p className="font-sans font-medium leading-small not-italic relative shrink-0 text-small text-nowrap text-white tracking-tight whitespace-pre" data-name="User Initials">
                      {tenant.initials}
                    </p>
                  </div>
                  
                  {/* Tenant Details */}
                  <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0" data-name="Tenant Details">
                    <div className="content-stretch flex gap-2 items-center relative shrink-0" data-name="Name Section">
                      <p className="font-sans font-normal leading-h5 not-italic relative shrink-0 text-primary text-h5 text-nowrap whitespace-pre" data-name="Tenant Name">
                        {tenant.name}
                      </p>
                      <div className={`${getStatusColorClass(tenant.status)} box-border content-stretch flex gap-1 h-6 items-center justify-center overflow-clip px-2 py-1 relative rounded-lg shrink-0`} data-name="Status Badge">
                        <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-label-small text-nowrap whitespace-pre" data-name="Status Text">
                          {tenant.status === 'active' ? 'Active' : 'Inactive'}
                        </p>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex gap-2 items-center px-0 py-px relative shrink-0" data-name="Property Info">
                      <ThemeIcon src={locationIcon} alt="Location" size="xs" variant="default" />
                      <p className="font-sans font-normal leading-normal not-italic relative shrink-0 text-tertiary text-label-small text-nowrap whitespace-pre" data-name="Property Text">
                        <span>{`${tenant.property} - `}</span>
                        <span className="font-medium">{tenant.unit}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lease ID Section */}
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Lease ID Stats">
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center justify-center p-4 relative size-full">
                <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="Lease ID Container">
                  <p className="font-sans font-semibold leading-base relative shrink-0 text-primary text-base" data-name="Lease ID">
                    {tenant.leaseId}
                  </p>
                  <p className="font-sans font-normal leading-normal relative shrink-0 text-tertiary text-label-small" data-name="Lease ID Label">
                    Lease ID
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lease Expiry Section */}
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Lease Expiry Stats">
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center justify-center p-4 relative size-full">
                <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="Lease Expiry Container">
                  <p className="font-sans font-semibold leading-base relative shrink-0 text-primary text-base" data-name="Lease Expiry">
                    {tenant.leaseExpiry}
                  </p>
                  <p className="font-sans font-normal leading-normal relative shrink-0 text-tertiary text-label-small" data-name="Lease Expiry Label">
                    Lease Expiry
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rent Status Section */}
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Rent Status Stats">
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 items-center justify-center p-4 relative size-full">
                <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="Rent Status Container">
                  <p className={`font-sans font-semibold leading-base relative shrink-0 text-base ${getRentStatusColorClass(tenant.rentStatus)}`} data-name="Rent Status">
                    {tenant.rentStatus === 'paid' ? 'Paid' : 'Due'}
                  </p>
                  <p className="font-sans font-normal leading-normal relative shrink-0 text-tertiary text-label-small" data-name="Rent Status Label">
                    Rent Status
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full relative shrink-0 w-16 sm:w-20 md:w-22 lg:w-22" data-name="Actions">
              <div className="bg-clip-padding border-0 border-transparent border-solid box-border content-stretch flex gap-2 h-full items-center justify-center p-4 relative w-16 sm:w-20 md:w-22 lg:w-22">
                <div className="content-stretch flex items-center justify-center relative rounded-lg shrink-0 w-6 h-6" data-name="Actions Button">
                  <button 
                    className="block cursor-pointer relative shrink-0 w-4 h-4" 
                    data-name="Actions Icon"
                    onClick={() => onItemEdit?.(tenant.id)}
                  >
                    <ThemeIcon src={moreOptionsIcon} alt="Actions" size="sm" variant="default" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
