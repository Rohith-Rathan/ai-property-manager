import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from '../components/layout/Header';
import LeftNavigation from '../components/layout/LeftNavigation';
import PageHeader from '../components/ui/PageHeader';
import StatCard from '../components/cards/StatCard';
import PropertyCard from '../components/ui/PropertyCard';
import DashboardPropertyCard from '../components/cards/DashboardPropertyCard';
import FormField from '../components/forms/FormField';
import Checkbox from '../components/forms/Checkbox';
import Button from '../components/forms/Button';
import SearchInput from '../components/ui/SearchInput';
import ThemeIcon from '../components/ui/ThemeIcon';
import PageSearch from '../components/ui/PageSearch';
import ListView from '../components/ui/ListView';
import ActivityFeedItem from '../components/ui/ActivityFeedItem';
import AlertItem from '../components/ui/AlertItem';
import DocumentItem from '../components/ui/DocumentItem';
import UserCard from '../components/ui/UserCard';
import StepWizard from '../components/ui/StepWizard';
import ProgressBar from '../components/ui/ProgressBar';
import { Popup } from '../components/ui/Popup';
import { MoreActions } from '../components/ui/MoreActions';
import { MoreActionsButton } from '../components/ui/MoreActionsButton';
import { AssetCard } from '../components/ui/AssetCard';
import { MaintenanceTicketCard } from '../components/ui/MaintenanceTicketCard';
import { KeyValuePair } from '../components/ui/KeyValuePair';
import { BotConversation } from '../components/ui/BotConversation';
import { Chip } from '../components/ui/Chip';
import { Tabs } from '../components/ui/Tabs';
import { TenantCard } from '../components/ui/TenantCard';
import { InvoiceCard } from '../components/ui/InvoiceCard';
import { TemplateCard } from '../components/ui/TemplateCard';
import { Table } from '../components/ui/Table';
import { getAssetPath } from '../utils/completeAssetMapping';

// Asset constants for examples
const vacancyCardIcon = getAssetPath('878cd835ab10ca42796d3d46ca1955b32ffb2ff2');
const rentCollectionCardIcon = getAssetPath('0f44f729311136017322fe20df2f07dfb5735258');
const maintenanceCardIcon = getAssetPath('bd7230e7a66d09f8f2922c1dbe464bf845edafdb');
const leasesCardIcon = getAssetPath('6d3c0204ac37f038cd091108592cad5b0022f2e9');
const aiEfficiencyCardIcon = getAssetPath('ai-efficiency-icon');

export default function ComponentsLibrary() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('header');
  const [searchValue, setSearchValue] = useState('');
  const [formSearchValue, setFormSearchValue] = useState('');
  
  // Popup state variables
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isRecordPaymentOpen, setIsRecordPaymentOpen] = useState(false);
  const [isAddPropertyOpen, setIsAddPropertyOpen] = useState(false);
  
  // MoreActions state variables
  const [isSimpleActionsOpen, setIsSimpleActionsOpen] = useState(false);
  const [isGradientActionsOpen, setIsGradientActionsOpen] = useState(false);
  const [isPropertyActionsOpen, setIsPropertyActionsOpen] = useState(false);
  const [selectedCheckboxOptions, setSelectedCheckboxOptions] = useState<string[]>(['swimming-pool']);
  
  // Tabs state variables
  const [activeTab, setActiveTab] = useState('rent-history');

  const sections = [
    { id: 'header', label: 'Header', icon: '📋' },
    { id: 'navigation', label: 'Navigation', icon: '🧭' },
    { id: 'page-header', label: 'Page Header', icon: '📄' },
    { id: 'page-search', label: 'Page Search', icon: '🔍' },
    { id: 'list-view', label: 'List View', icon: '📋' },
    { id: 'form-fields', label: 'Form Fields', icon: '📝' },
    { id: 'buttons', label: 'Buttons', icon: '🔘' },
    { id: 'icons', label: 'Theme Icons', icon: '🎨' },
    { id: 'stat-cards', label: 'Stat Cards', icon: '📊' },
    { id: 'property-cards', label: 'Property Cards', icon: '🏠' },
    { id: 'dashboard-cards', label: 'Dashboard Cards', icon: '📈' },
    { id: 'activity-feed', label: 'Activity Feed', icon: '📝' },
    { id: 'alerts', label: 'Alerts', icon: '🚨' },
    { id: 'documents', label: 'Documents', icon: '📄' },
    { id: 'user-card', label: 'User Card', icon: '👤' },
    { id: 'step-wizard', label: 'Step Wizard', icon: '🧙‍♂️' },
    { id: 'progress-bar', label: 'Progress Bar', icon: '📊' },
    { id: 'popup', label: 'Popup', icon: '🪟' },
    { id: 'more-actions', label: 'More Actions', icon: '⚡' },
    { id: 'asset-card', label: 'Asset Card', icon: '🏠' },
    { id: 'maintenance-ticket-card', label: 'Maintenance Ticket Card', icon: '🎫' },
    { id: 'checkbox', label: 'Checkbox', icon: '☑️' },
    { id: 'key-value-pair', label: 'Key Value Pair', icon: '🔑' },
    { id: 'bot-conversation', label: 'Bot Conversation', icon: '🤖' },
    { id: 'chips', label: 'Chips', icon: '🏷️' },
    { id: 'tabs', label: 'Tabs', icon: '📑' },
    { id: 'tenant-card', label: 'Tenant Card', icon: '👤' },
    { id: 'invoice-card', label: 'Invoice Card', icon: '🧾' },
    { id: 'template-card', label: 'Template Card', icon: '📄' },
    { id: 'table', label: 'Table', icon: '📊' }
  ];

  const renderHeaderExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Desktop Header with Functional Search</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden">
          <Header 
            searchPlaceholder="Search tenants, properties, maintenance..."
            notificationCount={3}
            showThemeToggle={true}
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            onSearch={(query) => alert(`Searching for: ${query}`)}
          />
        </div>
        {searchValue && (
          <p className="text-small text-secondary mt-2">
            Current search: "{searchValue}"
          </p>
        )}
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Header with Custom Search Placeholder</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden">
          <Header 
            searchPlaceholder="Search anything..."
            notificationCount={5}
            showThemeToggle={true}
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            onSearch={(query) => alert(`Searching for: ${query}`)}
          />
        </div>
      </div>

      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Header with Brand Aurora Logo</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden">
          <Header 
            logoGradient="brand-aurora"
            notificationCount={0}
            showThemeToggle={true}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Mobile Header (Compact)</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden">
          <Header 
            variant="mobile"
            logoGradient="brand-aurora"
            notificationCount={3}
            showThemeToggle={true}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Mobile Header with Aqua-2 Logo</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden">
          <Header 
            variant="mobile"
            logoGradient="aqua-2"
            notificationCount={0}
            showThemeToggle={true}
          />
        </div>
      </div>
    </div>
  );

  const renderNavigationExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Expanded Navigation (Default)</h3>
        <p className="text-small text-secondary mb-4">
          Active tab uses static white text and Brand Aurora gradient background. Toggle theme to test color consistency.
        </p>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden h-96">
          <LeftNavigation 
            activeItem="dashboard" 
            expanded={true}
            userName="Jhon Deo"
            userGradient="aqua-2"
            onItemClick={(itemId) => alert(`Clicked: ${itemId}`)}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Collapsed Navigation (Icon Only)</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden h-96">
          <LeftNavigation 
            activeItem="properties" 
            expanded={false}
            userInitials="AB"
            userGradient="aqua-2"
            onItemClick={(itemId) => alert(`Clicked: ${itemId}`)}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Expanded Navigation (Settings Active)</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden h-96">
          <LeftNavigation 
            activeItem="settings" 
            expanded={true}
            userName="Sarah Wilson"
            userInitials="SW"
            userGradient="aqua-2"
            onItemClick={(itemId) => alert(`Clicked: ${itemId}`)}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Tenants Active with Brand Aurora</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden h-96">
          <LeftNavigation 
            activeItem="tenants" 
            userInitials="CD"
            userGradient="aqua-2"
            onItemClick={(itemId) => alert(`Clicked: ${itemId}`)}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Maintenance Active (No User Profile)</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden h-96">
          <LeftNavigation 
            activeItem="maintenance" 
            showUserProfile={false}
            onItemClick={(itemId) => alert(`Clicked: ${itemId}`)}
          />
        </div>
      </div>
    </div>
  );

  const renderPageHeaderExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Default Page Header</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg p-6">
          <PageHeader 
            title="Properties & Units"
            subtitle="Manage your property portfolio with detailed unit tracking"
            primaryAction={{
              label: "Add Property",
              onClick: () => console.log("Add Property clicked"),
              icon: "/assets/add-property-button-icon.svg"
            }}
            secondaryAction={{
              label: "Import",
              onClick: () => console.log("Import clicked"),
              icon: "/assets/edit-property-button-icon.svg"
            }}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Property Page Header Variant</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg p-6">
          <PageHeader
            variant="property"
            title="Sunset Apartments"
            address="123 Sunset Blvd, Los Angeles, CA"
            onBack={() => console.log("Back clicked")}
            primaryAction={{
              label: "Add Unit",
              onClick: () => console.log("Add Unit clicked"),
              icon: "/assets/add-unit-icon.svg"
            }}
            secondaryAction={{
              label: "Edit Property",
              onClick: () => console.log("Edit Property clicked"),
              icon: "/assets/edit-property-button-icon.svg"
            }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Property Header - Different Property</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg p-6">
          <PageHeader
            variant="property"
            title="Oak Villa Complex"
            address="456 Oak Street, San Francisco, CA"
            onBack={() => console.log("Back clicked")}
            primaryAction={{
              label: "Add Unit",
              onClick: () => console.log("Add Unit clicked"),
              icon: "/assets/add-unit-icon.svg"
            }}
            secondaryAction={{
              label: "Edit Property",
              onClick: () => console.log("Edit Property clicked"),
              icon: "/assets/edit-property-button-icon.svg"
            }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Maintenance Header - Ticket Details</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg p-6">
          <PageHeader
            variant="maintenance"
            title="Maintenance Ticket"
            ticketId="MNT-001"
            priority="urgent"
            createdDate="Oct 6, 2025"
            lastUpdatedDate="Oct 6, 2025"
            onBack={() => console.log("Back clicked")}
            secondaryAction={{
              label: "Mark as Resolved",
              onClick: () => console.log("Mark as Resolved clicked"),
              icon: "/assets/checkmark-icon.svg"
            }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Maintenance Header - Different Priority</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg p-6">
          <PageHeader
            variant="maintenance"
            title="Maintenance Ticket"
            ticketId="MNT-002"
            priority="medium"
            createdDate="Oct 5, 2025"
            lastUpdatedDate="Oct 6, 2025"
            onBack={() => console.log("Back clicked")}
            secondaryAction={{
              label: "Update Status",
              onClick: () => console.log("Update Status clicked"),
              icon: "/assets/edit-property-icon.svg"
            }}
          />
        </div>
      </div>
    </div>
  );

  const renderStatCardExamples = () => (
    <div className="space-y-8">
      {/* New Variants Section */}
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">New Stat Card Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Simple Variant */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-3">Simple Variant</h4>
            <StatCard
              title="Rent Paid"
              value="$18,400"
              icon="/assets/dollar-icon.svg"
              gradient="ai-violet-2"
              variant="simple"
            />
          </div>
          
          {/* Complex Variant */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-3">Complex Variant</h4>
            <StatCard
              title="Rent Collected vs Expected"
              value="$7,050 / $14,000"
              subtitle="50% received (MTD)"
              icon="/assets/dollar-icon.svg"
              gradient="info-flow"
              variant="complex"
              actionButton={{
                text: "View Collection Report",
                onClick: () => console.log('View collection report clicked')
              }}
            />
          </div>
          
          {/* Minimal Variant */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-3">Minimal Variant</h4>
            <StatCard
              title="Collected"
              value="$3,950"
              variant="minimal"
              valueColor="success"
            />
          </div>
        </div>
      </div>

      {/* Original Variants Section */}
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Original Stat Cards Grid</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <StatCard
            title="3/10 Vacant Units"
            subtitle="Vacancy"
            value="3/10 Vacant Units"
            icon={vacancyCardIcon}
            gradient="info-flow"
            badge={{ text: "70% Occupancy", color: "primary", trend: "up" }}
          />
          <StatCard
            title="$7,050 / $14,000"
            subtitle="Rent Collection"
            value="$7,050 / $14,000"
            icon={rentCollectionCardIcon}
            gradient="ai-violet-2"
            badge={{ text: "50% Pending", color: "error", trend: "down" }}
          />
          <StatCard
            title="2/5 Open Tickets"
            subtitle="Maintenance"
            value="2/5 Open Tickets"
            icon={maintenanceCardIcon}
            gradient="brand-aurora"
            badge={{ text: "3 Completed", color: "success", trend: "up" }}
          />
          <StatCard
            title="In next 2 months"
            subtitle="Leases"
            value="In next 2 months"
            icon={leasesCardIcon}
            gradient="magenta-pop"
            badge={{ text: "2 Expiring Soon", color: "warning", trend: "up" }}
          />
          <StatCard
            title="500 hours saved month"
            subtitle="AI Efficiency"
            value="500 hours saved month"
            icon={aiEfficiencyCardIcon}
            gradient="emerald-glow"
            badge={{ text: "+12.5%", color: "info", trend: "up" }}
          />
        </div>
      </div>

      {/* Variant Comparison */}
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Variant Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4 className="text-sm font-medium text-tertiary mb-2">Default</h4>
            <StatCard
              title="Total Revenue"
              subtitle="This month"
              value="$12,450"
              icon="/assets/dollar-icon.svg"
              gradient="brand-aurora"
              badge={{ text: "+5.2%", color: "success", trend: "up" }}
              variant="default"
            />
          </div>
          <div>
            <h4 className="text-sm font-medium text-tertiary mb-2">Simple</h4>
            <StatCard
              title="Total Revenue"
              value="$12,450"
              icon="/assets/dollar-icon.svg"
              gradient="brand-aurora"
              variant="simple"
            />
          </div>
          <div>
            <h4 className="text-sm font-medium text-tertiary mb-2">Complex</h4>
            <StatCard
              title="Total Revenue"
              value="$12,450"
              subtitle="This month"
              icon="/assets/dollar-icon.svg"
              gradient="brand-aurora"
              variant="complex"
              actionButton={{
                text: "View Details",
                onClick: () => console.log('View details clicked')
              }}
            />
          </div>
          <div>
            <h4 className="text-sm font-medium text-tertiary mb-2">Minimal</h4>
            <StatCard
              title="Total Revenue"
              value="$12,450"
              variant="minimal"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderPropertyCardExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Property Cards Grid</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PropertyCard
            property={{
              id: "1",
              name: "Sunset Apartments",
              address: "123 Sunset Blvd, Los Angeles, CA",
              image: "/assets/property-image-1.png",
              badge: "Excellent",
              badgeColor: "success",
              units: 16,
              monthlyRevenue: "$12,800",
              date: "01-15-2025",
              manager: "Mike Chen",
              occupancy: {
                percentage: 92,
                description: "22 of 24 units occupied"
              }
            }}
            onEdit={(id) => alert(`Edit property ${id}`)}
          />
          <PropertyCard
            property={{
              id: "2",
              name: "Oak Villa Complex",
              address: "456 Oak Street, San Francisco, CA",
              image: "/assets/property-image-2.png",
              badge: "Good",
              badgeColor: "warning",
              units: 8,
              monthlyRevenue: "$8,400",
              date: "02-01-2025",
              manager: "Sarah Wilson",
              occupancy: {
                percentage: 80,
                description: "16 of 20 units occupied"
              }
            }}
            onEdit={(id) => alert(`Edit property ${id}`)}
          />
          <PropertyCard
            property={{
              id: "3",
              name: "Pine Heights",
              address: "789 Pine Avenue, Seattle, WA",
              image: "/assets/property-image-3.png",
              badge: "Needs Attention",
              badgeColor: "error",
              units: 12,
              monthlyRevenue: "$6,200",
              date: "01-30-2025",
              manager: "John Doe",
              occupancy: {
                percentage: 76,
                description: "18 of 24 units occupied"
              }
            }}
            onEdit={(id) => alert(`Edit property ${id}`)}
          />
        </div>
      </div>
    </div>
  );

  const renderPageSearchExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Desktop Search Filter Bar</h3>
        <div className="max-w-4xl">
          <PageSearch
            variant="grid"
            placeholder="Search properties..."
            onSearch={(query) => console.log('Search:', query)}
            onFilter={(filter) => console.log('Filter:', filter)}
            onViewChange={(view) => console.log('View:', view)}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Mobile Search Bar</h3>
        <div className="max-w-sm">
          <PageSearch
            variant="mobile"
            placeholder="Search properties..."
            onSearch={(query) => console.log('Search:', query)}
            onFilter={(filter) => console.log('Filter:', filter)}
            onViewChange={(view) => console.log('View:', view)}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Search with Multiple Filters</h3>
        <div className="max-w-4xl">
          <PageSearch
            variant="filters"
            placeholder="Search assets..."
            filters={[
              { label: "All Categories", value: "categories" },
              { label: "All Actors", value: "actors" },
              { label: "All Risk Levels", value: "risk-levels", icon: "/assets/filter-icon.svg" }
            ]}
            onSearch={(query) => console.log('Search:', query)}
            onFilterChange={(filterType, value) => console.log('Filter changed:', filterType, value)}
          />
        </div>
      </div>
    </div>
  );

  const renderListViewExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Properties List View</h3>
        <div className="max-w-6xl">
          <ListView
            variant="properties"
            title="Properties & Units"
            subtitle="Manage your property portfolio with detailed unit tracking"
            onItemClick={(id) => console.log('Property clicked:', id)}
            onItemEdit={(id) => console.log('Property edit:', id)}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Tenants List View</h3>
        <div className="max-w-6xl">
          <ListView
            variant="tenants"
            title="Tenant Management"
            subtitle="Manage tenants, leases, and documentation"
            onItemClick={(id) => console.log('Tenant clicked:', id)}
            onItemEdit={(id) => console.log('Tenant edit:', id)}
          />
        </div>
      </div>
    </div>
  );

  const renderActivityFeedExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Activity Feed Items</h3>
        <div className="space-y-4 max-w-2xl">
          <ActivityFeedItem
            userName="Sarah Johnson"
            userIcon="/assets/user-icon.svg"
            action="Sent rent reminder"
            description="Sent rent reminder to Tenant John Doe"
            timestamp="2 hours ago"
            badges={[
              { label: "user action", variant: "neutral" },
              { label: "tenant", variant: "neutral", icon: "/assets/user-icon.svg" }
            ]}
            priority="low"
            metadata={[
              { label: "Action", value: "SEND_REMINDER" },
              { label: "Entity", value: "tenant" },
              { label: "Time", value: "2024-02-05 14:30:25" }
            ]}
            onMoreActions={() => console.log('Communication activity clicked')}
          />
          
          <ActivityFeedItem
            userName="System AI"
            userIcon="/assets/ai-efficiency-icon.svg"
            action="Auto-scheduled maintenance"
            description="Auto-scheduled maintenance for HVAC repair"
            timestamp="4 hours ago"
            badges={[
              { label: "system action", variant: "info" },
              { label: "maintenance", variant: "warning" }
            ]}
            priority="medium"
            metadata={[
              { label: "Action", value: "SCHEDULE_MAINTENANCE" },
              { label: "Entity", value: "maintenance" },
              { label: "Time", value: "2024-02-05 12:15:30" }
            ]}
            onMoreActions={() => console.log('Maintenance activity clicked')}
          />
          
          <ActivityFeedItem
            userName="Property Manager"
            userIcon="/assets/property-manager-icon.svg"
            action="Generated lease renewal"
            description="Generated lease renewal letter"
            timestamp="6 hours ago"
            badges={[
              { label: "user action", variant: "neutral" },
              { label: "lease", variant: "primary" }
            ]}
            priority="low"
            metadata={[
              { label: "Action", value: "GENERATE_LEASE" },
              { label: "Entity", value: "lease" },
              { label: "Time", value: "2024-02-05 10:45:15" }
            ]}
            onMoreActions={() => console.log('Lease activity clicked')}
          />
          
          <ActivityFeedItem
            userName="Financial System"
            userIcon="/assets/financial-icon.svg"
            action="Processed payment"
            description="Processed rental payment for Unit 4B"
            timestamp="1 day ago"
            badges={[
              { label: "system action", variant: "success" },
              { label: "payment", variant: "success" }
            ]}
            priority="low"
            metadata={[
              { label: "Action", value: "PROCESS_PAYMENT" },
              { label: "Entity", value: "payment" },
              { label: "Time", value: "2024-02-04 16:20:45" }
            ]}
            onMoreActions={() => console.log('Financial activity clicked')}
          />
          
          <ActivityFeedItem
            userName="AI Analytics"
            userIcon="/assets/ai-efficiency-icon.svg"
            action="Analyzed metrics"
            description="AI analyzed property performance metrics"
            timestamp="2 days ago"
            badges={[
              { label: "ai action", variant: "info" },
              { label: "analytics", variant: "secondary" }
            ]}
            priority="low"
            metadata={[
              { label: "Action", value: "ANALYZE_METRICS" },
              { label: "Entity", value: "analytics" },
              { label: "Time", value: "2024-02-03 09:30:00" }
            ]}
            onMoreActions={() => console.log('System activity clicked')}
            isLastItem={true}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Activity Feed in Card Container</h3>
        <div className="bg-paper-paper-elevation-1 border border-overlays-white-inverse-10 rounded-xxl p-6 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <ThemeIcon src={getAssetPath('ai-efficiency-icon')} alt="Activity" size="sm" variant="primary" />
            <h4 className="text-h5 font-semibold text-primary">Recent AI Actions</h4>
          </div>
          <div className="space-y-3">
            <ActivityFeedItem
              userName="AI Assistant"
              userIcon="/assets/ai-efficiency-icon.svg"
              action="Sent rent reminder"
              description="Sent rent reminder to Tenant John Doe"
              timestamp="2 hours ago"
              badges={[
                { label: "ai action", variant: "info" },
                { label: "communication", variant: "primary" }
              ]}
              priority="low"
            />
            <ActivityFeedItem
              userName="AI System"
              userIcon="/assets/ai-efficiency-icon.svg"
              action="Auto-scheduled maintenance"
              description="Auto-scheduled maintenance for HVAC repair"
              timestamp="4 hours ago"
              badges={[
                { label: "ai action", variant: "info" },
                { label: "maintenance", variant: "warning" }
              ]}
              priority="medium"
            />
            <ActivityFeedItem
              userName="AI Assistant"
              userIcon="/assets/ai-efficiency-icon.svg"
              action="Generated lease renewal"
              description="Generated lease renewal letter"
              timestamp="6 hours ago"
              badges={[
                { label: "ai action", variant: "info" },
                { label: "lease", variant: "primary" }
              ]}
              priority="low"
              isLastItem={true}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderAlertExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Alert Items</h3>
        <div className="space-y-4 max-w-2xl">
          <AlertItem
            priority="high"
            category="Rent Collection"
            message="Unit 4B - Rent overdue by 15 days"
            timestamp="30 min"
            onClick={() => console.log('High priority alert clicked')}
          />
          
          <AlertItem
            priority="medium"
            category="Maintenance Ticket"
            message="Unit 3A - HVAC system needs repair"
            timestamp="2 hours ago"
            onClick={() => console.log('Medium priority alert clicked')}
          />
          
          <AlertItem
            priority="low"
            category="Lease"
            message="Unit 2C - Lease renewal reminder"
            timestamp="1 day ago"
            onClick={() => console.log('Low priority alert clicked')}
          />
          
          <AlertItem
            priority="high"
            category="Vacancy"
            message="Unit 1A - Tenant moved out, needs cleaning"
            timestamp="45 min"
            onClick={() => console.log('Vacancy alert clicked')}
          />
          
          <AlertItem
            priority="medium"
            category="Inspection Request"
            message="Unit 3A - Scheduled for next week"
            timestamp="3 hours ago"
            onClick={() => console.log('Inspection alert clicked')}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Alerts in Card Container</h3>
        <div className="bg-paper-paper-elevation-1 border border-overlays-white-inverse-10 rounded-xxl p-6 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <ThemeIcon src={getAssetPath('ai-efficiency-icon')} alt="Alerts" size="sm" variant="primary" />
            <h4 className="text-h5 font-semibold text-primary">Urgent Alerts</h4>
          </div>
          <div className="space-y-3">
            <AlertItem
              priority="high"
              category="Rent Collection"
              message="Unit 4B - Rent overdue by 15 days"
              timestamp="30 min"
            />
            <AlertItem
              priority="medium"
              category="Maintenance Ticket"
              message="Unit 3A - HVAC system needs repair"
              timestamp="2 hours ago"
            />
            <AlertItem
              priority="high"
              category="Lease"
              message="Unit 2C - Lease expires in 5 days"
              timestamp="1 hour ago"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocumentExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Document Items</h3>
        <div className="space-y-4 max-w-2xl">
          <DocumentItem
            title="Lease-21365465"
            subtitle="Lease Agreement"
            expirationDate="01-10-2026"
            isExpiring={true}
            variant="detailed"
            onDownload={() => console.log('Download lease document')}
            onEdit={() => console.log('Edit lease document')}
            onView={() => console.log('View lease document')}
          />
          
          <DocumentItem
            title="Driving Licence"
            variant="simple"
            onDownload={() => console.log('Download driving licence')}
            onEdit={() => console.log('Edit driving licence')}
            onView={() => console.log('View driving licence')}
          />
          
          <DocumentItem
            title="Social Security Card"
            variant="simple"
            onDownload={() => console.log('Download social security card')}
            onEdit={() => console.log('Edit social security card')}
            onView={() => console.log('View social security card')}
          />
          
          <DocumentItem
            title="Pet Care Agreement"
            variant="simple"
            onDownload={() => console.log('Download pet care agreement')}
            onEdit={() => console.log('Edit pet care agreement')}
            onView={() => console.log('View pet care agreement')}
          />
          
          <DocumentItem
            title="Insurance Policy-789123"
            subtitle="Property Insurance"
            expirationDate="12-31-2025"
            isExpiring={false}
            variant="detailed"
            onDownload={() => console.log('Download insurance policy')}
            onEdit={() => console.log('Edit insurance policy')}
            onView={() => console.log('View insurance policy')}
          />
          
          <DocumentItem
            title="Lease Agreement-987654"
            expirationDate="06-15-2025"
            isExpiring={true}
            variant="expiration"
            onDownload={() => console.log('Download lease agreement')}
            onEdit={() => console.log('Edit lease agreement')}
            onView={() => console.log('View lease agreement')}
          />
          
          <DocumentItem
            title="Insurance Certificate-456789"
            expirationDate="03-20-2026"
            isExpiring={false}
            variant="expiration"
            onDownload={() => console.log('Download insurance certificate')}
            onEdit={() => console.log('Edit insurance certificate')}
            onView={() => console.log('View insurance certificate')}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Documents in Card Container</h3>
        <div className="bg-paper-paper-elevation-1 border border-overlays-white-inverse-10 rounded-xxl p-6 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <ThemeIcon src="/assets/dcca7775f5c79ff238a864f59355e149ffc6cac3.svg" alt="Documents" size="sm" variant="primary" />
            <h4 className="text-h5 font-semibold text-primary">Tenant Documents</h4>
          </div>
          <div className="space-y-3">
            <DocumentItem
              title="Lease-21365465"
              subtitle="Lease Agreement"
              expirationDate="01-10-2026"
              isExpiring={true}
              variant="detailed"
            />
            <DocumentItem
              title="Driving Licence"
              variant="simple"
            />
            <DocumentItem
              title="Social Security Card"
              variant="simple"
            />
            <DocumentItem
              title="Pet Care Agreement"
              variant="simple"
            />
            <DocumentItem
              title="Insurance Certificate-456789"
              expirationDate="03-20-2026"
              isExpiring={false}
              variant="expiration"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderUserCardExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">User Cards</h3>
        <div className="space-y-4 max-w-md">
          <UserCard
            name="Walter Carter"
            email="Walter90@hotmail.com"
            phone="1-772-280-7340"
            initials="WC"
            onMenuClick={() => console.log('Menu clicked for Walter Carter')}
          />
          
          <UserCard
            name="Sarah Johnson"
            email="sarah.johnson@email.com"
            phone="1-555-123-4567"
            initials="SJ"
            onMenuClick={() => console.log('Menu clicked for Sarah Johnson')}
          />
          
          <UserCard
            name="Michael Chen"
            email="m.chen@company.com"
            phone="1-555-987-6543"
            initials="MC"
            onMenuClick={() => console.log('Menu clicked for Michael Chen')}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">User Cards in Grid Layout</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
          <UserCard
            name="Emily Rodriguez"
            email="emily.rodriguez@email.com"
            phone="1-555-111-2222"
            initials="ER"
            onMenuClick={() => console.log('Menu clicked for Emily Rodriguez')}
          />
          
          <UserCard
            name="David Kim"
            email="david.kim@email.com"
            phone="1-555-333-4444"
            initials="DK"
            onMenuClick={() => console.log('Menu clicked for David Kim')}
          />
          
          <UserCard
            name="Lisa Thompson"
            email="lisa.thompson@email.com"
            phone="1-555-555-6666"
            initials="LT"
            onMenuClick={() => console.log('Menu clicked for Lisa Thompson')}
          />
          
          <UserCard
            name="James Wilson"
            email="james.wilson@email.com"
            phone="1-555-777-8888"
            initials="JW"
            onMenuClick={() => console.log('Menu clicked for James Wilson')}
          />
          
          <UserCard
            name="Maria Garcia"
            email="maria.garcia@email.com"
            phone="1-555-999-0000"
            initials="MG"
            onMenuClick={() => console.log('Menu clicked for Maria Garcia')}
          />
          
          <UserCard
            name="Robert Brown"
            email="robert.brown@email.com"
            phone="1-555-123-7890"
            initials="RB"
            onMenuClick={() => console.log('Menu clicked for Robert Brown')}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">User Cards in Card Container</h3>
        <div className="bg-paper-paper-elevation-1 border border-overlays-white-inverse-10 rounded-xxl p-6 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <ThemeIcon src="/assets/2a57308041b3d6f98dfd9c06504690d8a2358f17.svg" alt="Users" size="sm" variant="primary" />
            <h4 className="text-h5 font-semibold text-primary">Tenant Management</h4>
          </div>
          <div className="space-y-3">
            <UserCard
              name="Walter Carter"
              email="Walter90@hotmail.com"
              phone="1-772-280-7340"
              initials="WC"
              onMenuClick={() => console.log('Menu clicked for Walter Carter')}
            />
            <UserCard
              name="Sarah Johnson"
              email="sarah.johnson@email.com"
              phone="1-555-123-4567"
              initials="SJ"
              onMenuClick={() => console.log('Menu clicked for Sarah Johnson')}
            />
            <UserCard
              name="Michael Chen"
              email="m.chen@company.com"
              phone="1-555-987-6543"
              initials="MC"
              onMenuClick={() => console.log('Menu clicked for Michael Chen')}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStepWizardExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Step Wizard - Add Property (4 Steps)</h3>
        <div className="max-w-4xl">
          <StepWizard
            title="Add New Property"
            subtitle="Follow these steps to add a new property to your portfolio"
            currentStep={1}
            onCancel={() => console.log('Cancel clicked')}
            steps={[
              {
                id: 'property-details',
                title: 'Property Details',
                icon: '/assets/property-basic-details-icon.svg',
                iconAlt: 'Property Details'
              },
              {
                id: 'add-units',
                title: 'Add Units',
                icon: '/assets/units-icon.svg',
                iconAlt: 'Add Units'
              },
              {
                id: 'add-assets',
                title: 'Add Assets',
                icon: '/assets/add-assets-icon.svg',
                iconAlt: 'Add Assets'
              },
              {
                id: 'add-manager',
                title: 'Add Manager',
                icon: '/assets/user-icon.svg',
                iconAlt: 'Add Manager'
              }
            ]}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Step Wizard - Add Tenant (3 Steps)</h3>
        <div className="max-w-4xl">
          <StepWizard
            title="Add New Tenant"
            subtitle="Follow these steps to add a new tenant"
            currentStep={2}
            onCancel={() => console.log('Cancel clicked')}
            steps={[
              {
                id: 'basic-details',
                title: 'Basic Details',
                icon: '/assets/user-icon.svg',
                iconAlt: 'Basic Details'
              },
              {
                id: 'lease-agreement',
                title: 'Lease Agreement',
                icon: '/assets/leases-document-icon.svg',
                iconAlt: 'Lease Agreement'
              },
              {
                id: 'id-proofs',
                title: 'ID Proofs',
                icon: '/assets/document-files-icon.svg',
                iconAlt: 'ID Proofs'
              }
            ]}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Step Wizard - Different Progress States</h3>
        <div className="space-y-6 max-w-4xl">
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">Step 1 of 4 (0% Complete)</h4>
            <StepWizard
              title="Add New Property"
              subtitle="Follow these steps to add a new property to your portfolio"
              currentStep={1}
              steps={[
                { id: 'step1', title: 'Step 1', icon: '/assets/property-basic-details-icon.svg' },
                { id: 'step2', title: 'Step 2', icon: '/assets/units-icon.svg' },
                { id: 'step3', title: 'Step 3', icon: '/assets/add-assets-icon.svg' },
                { id: 'step4', title: 'Step 4', icon: '/assets/user-icon.svg' }
              ]}
            />
          </div>
          
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">Step 2 of 4 (25% Complete)</h4>
            <StepWizard
              title="Add New Property"
              subtitle="Follow these steps to add a new property to your portfolio"
              currentStep={2}
              steps={[
                { id: 'step1', title: 'Step 1', icon: '/assets/property-basic-details-icon.svg' },
                { id: 'step2', title: 'Step 2', icon: '/assets/units-icon.svg' },
                { id: 'step3', title: 'Step 3', icon: '/assets/add-assets-icon.svg' },
                { id: 'step4', title: 'Step 4', icon: '/assets/user-icon.svg' }
              ]}
            />
          </div>
          
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">Step 3 of 4 (50% Complete)</h4>
            <StepWizard
              title="Add New Property"
              subtitle="Follow these steps to add a new property to your portfolio"
              currentStep={3}
              steps={[
                { id: 'step1', title: 'Step 1', icon: '/assets/property-basic-details-icon.svg' },
                { id: 'step2', title: 'Step 2', icon: '/assets/units-icon.svg' },
                { id: 'step3', title: 'Step 3', icon: '/assets/add-assets-icon.svg' },
                { id: 'step4', title: 'Step 4', icon: '/assets/user-icon.svg' }
              ]}
            />
          </div>
          
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">Step 4 of 4 (75% Complete)</h4>
            <StepWizard
              title="Add New Property"
              subtitle="Follow these steps to add a new property to your portfolio"
              currentStep={4}
              steps={[
                { id: 'step1', title: 'Step 1', icon: '/assets/property-basic-details-icon.svg' },
                { id: 'step2', title: 'Step 2', icon: '/assets/units-icon.svg' },
                { id: 'step3', title: 'Step 3', icon: '/assets/add-assets-icon.svg' },
                { id: 'step4', title: 'Step 4', icon: '/assets/user-icon.svg' }
              ]}
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Step Wizard - Custom Steps (5 Steps)</h3>
        <div className="max-w-4xl">
          <StepWizard
            title="Custom Process"
            subtitle="A custom process with 5 steps"
            currentStep={3}
            onCancel={() => console.log('Cancel clicked')}
            steps={[
              { id: 'step1', title: 'Planning', icon: '/assets/property-basic-details-icon.svg' },
              { id: 'step2', title: 'Design', icon: '/assets/units-icon.svg' },
              { id: 'step3', title: 'Development', icon: '/assets/add-assets-icon.svg' },
              { id: 'step4', title: 'Testing', icon: '/assets/user-icon.svg' },
              { id: 'step5', title: 'Deployment', icon: '/assets/leases-document-icon.svg' }
            ]}
          />
        </div>
      </div>
    </div>
  );

  const renderProgressBarExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Progress Bar - Step Variant</h3>
        <div className="space-y-6 max-w-2xl">
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">Step 1 of 4 (0% Complete)</h4>
            <ProgressBar
              variant="step"
              current={1}
              total={4}
            />
          </div>
          
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">Step 2 of 4 (25% Complete)</h4>
            <ProgressBar
              variant="step"
              current={2}
              total={4}
            />
          </div>
          
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">Step 3 of 4 (50% Complete)</h4>
            <ProgressBar
              variant="step"
              current={3}
              total={4}
            />
          </div>
          
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">Step 4 of 4 (75% Complete)</h4>
            <ProgressBar
              variant="step"
              current={4}
              total={4}
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Progress Bar - Occupancy Variant</h3>
        <div className="space-y-6 max-w-2xl">
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">High Occupancy (92%)</h4>
            <ProgressBar
              variant="occupancy"
              percentage={92}
              label="Occupancy"
              value="92%"
              subtitle="22 of 24 units occupied"
            />
          </div>
          
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">Medium Occupancy (65%)</h4>
            <ProgressBar
              variant="occupancy"
              percentage={65}
              label="Occupancy"
              value="65%"
              subtitle="13 of 20 units occupied"
            />
          </div>
          
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">Low Occupancy (30%)</h4>
            <ProgressBar
              variant="occupancy"
              percentage={30}
              label="Occupancy"
              value="30%"
              subtitle="6 of 20 units occupied"
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Progress Bar - Different Sizes</h3>
        <div className="space-y-6 max-w-4xl">
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">Step Progress (3 steps)</h4>
            <ProgressBar
              variant="step"
              current={2}
              total={3}
            />
          </div>
          
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">Step Progress (5 steps)</h4>
            <ProgressBar
              variant="step"
              current={3}
              total={5}
            />
          </div>
          
          <div>
            <h4 className="text-h5 font-semibold text-primary mb-2">Custom Occupancy</h4>
            <ProgressBar
              variant="occupancy"
              percentage={78}
              label="Rent Collection"
              value="78%"
              subtitle="$15,600 of $20,000 collected"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboardCardExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Dashboard Property Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardPropertyCard
            rank={1}
            title="Sunset Apartments"
            address="123 Sunset Blvd, Los Angeles, CA"
            rating={4.8}
            revenue="$24,580"
            occupancy={{
              percentage: 92,
              color: "success",
              description: "22 of 24 units occupied"
            }}
          />
          <DashboardPropertyCard
            rank={2}
            title="Oak Villa Complex"
            address="456 Oak Street, San Francisco, CA"
            rating={4.5}
            revenue="$18,240"
            occupancy={{
              percentage: 80,
              color: "warning",
              description: "16 of 20 units occupied"
            }}
          />
          <DashboardPropertyCard
            rank={3}
            title="Pine Heights"
            address="789 Pine Avenue, Seattle, WA"
            rating={4.0}
            revenue="$16,720"
            occupancy={{
              percentage: 76,
              color: "error",
              description: "18 of 24 units occupied"
            }}
          />
        </div>
      </div>
    </div>
  );

  const renderFormFieldExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Form Field Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-primary">Basic Fields</h4>
            <FormField
              label="Email"
              type="email"
              placeholder="Enter your email"
              value=""
              onChange={() => {}}
              icon="email"
            />
            <FormField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value=""
              onChange={() => {}}
              icon="password"
              showPasswordToggle
            />
            <FormField
              label="Search"
              type="search"
              placeholder="Search properties..."
              value=""
              onChange={() => {}}
              icon="search"
            />
          </div>
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-primary">Field States</h4>
            <FormField
              label="With Error"
              placeholder="This field has an error"
              value=""
              onChange={() => {}}
              error="This field is required"
            />
            <FormField
              label="With Helper Text"
              placeholder="This field has helper text"
              value=""
              onChange={() => {}}
              helperText="This is helpful information"
            />
            <FormField
              label="Disabled Field"
              placeholder="This field is disabled"
              value="Disabled value"
              onChange={() => {}}
              disabled
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Field Sizes & Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-primary">Sizes</h4>
            <FormField
              label="Small"
              placeholder="Small field"
              value=""
              onChange={() => {}}
              size="sm"
            />
            <FormField
              label="Medium"
              placeholder="Medium field"
              value=""
              onChange={() => {}}
              size="md"
            />
            <FormField
              label="Large"
              placeholder="Large field"
              value=""
              onChange={() => {}}
              size="lg"
            />
          </div>
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-primary">Variants</h4>
            <FormField
              label="Default"
              placeholder="Default variant"
              value=""
              onChange={() => {}}
              variant="default"
            />
            <FormField
              label="Outlined"
              placeholder="Outlined variant"
              value=""
              onChange={() => {}}
              variant="outlined"
            />
            <FormField
              label="Filled"
              placeholder="Filled variant"
              value=""
              onChange={() => {}}
              variant="filled"
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Search Input Component</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-base font-semibold text-primary mb-2">Borderless Search Input</h4>
            <div className="bg-paper-paper-elevation-1 p-4 rounded-lg">
              <SearchInput
                placeholder="Search properties, tenants, tickets..."
                value={formSearchValue}
                onChange={setFormSearchValue}
                onSearch={(query) => alert(`Searching for: ${query}`)}
              />
            </div>
            {formSearchValue && (
              <p className="text-small text-secondary mt-2">
                Current search: "{formSearchValue}"
              </p>
            )}
          </div>
          
          <div>
            <h4 className="text-base font-semibold text-primary mb-2">Search Input with Clear Button</h4>
            <div className="bg-paper-paper-elevation-1 p-4 rounded-lg">
              <SearchInput
                placeholder="Type to search..."
                value={formSearchValue}
                onChange={setFormSearchValue}
                onSearch={(query) => alert(`Searching for: ${query}`)}
                showClearButton={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );


  const renderButtonExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Button Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-primary">Primary Buttons</h4>
            <Button
              label="Primary Button"
              variant="primary"
              gradient="brand-aurora"
            />
            <Button
              label="Aqua Gradient"
              variant="primary"
              gradient="aqua-2"
            />
            <Button
              label="Info Flow"
              variant="primary"
              gradient="info-flow"
            />
            <Button
              label="Magenta Pop"
              variant="primary"
              gradient="magenta-pop"
            />
          </div>
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-primary">Other Variants</h4>
            <Button
              label="Secondary"
              variant="secondary"
            />
            <Button
              label="Outline"
              variant="outline"
            />
            <Button
              label="Ghost"
              variant="ghost"
            />
            <Button
              label="Disabled"
              variant="primary"
              disabled
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Button with Icons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-primary">Icon Positions</h4>
            <Button
              label="Add Property"
              variant="primary"
              icon="add"
              iconPosition="left"
            />
            <Button
              label="Edit Property"
              variant="outline"
              icon="edit"
              iconPosition="left"
            />
            <Button
              label="Calendar"
              variant="primary"
              icon="calendar"
              iconPosition="right"
            />
            <Button
              label="Dropdown"
              variant="outline"
              icon="calendar"
              iconPosition="left"
              rightIcon="dropdown"
            />
          </div>
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-primary">Social Buttons</h4>
            <Button
              label="Google"
              variant="social"
              icon="google"
              iconPosition="left"
              fullWidth
            />
            <Button
              label="Microsoft"
              variant="social"
              icon="microsoft"
              iconPosition="left"
              fullWidth
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Button Sizes</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            label="Small"
            variant="primary"
            size="sm"
          />
          <Button
            label="Medium"
            variant="primary"
            size="md"
          />
          <Button
            label="Large"
            variant="primary"
            size="lg"
          />
          <Button
            label="Full Width"
            variant="primary"
            fullWidth
            className="max-w-xs"
          />
        </div>
      </div>
    </div>
  );

  const renderIconExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Theme-Aware Icons</h3>
        <p className="text-secondary mb-6">Icons that automatically adapt to light/dark themes</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <h4 className="text-small font-medium text-primary mb-3">Default Variant</h4>
            <div className="flex justify-center mb-2">
              <ThemeIcon src={vacancyCardIcon} alt="Building" size="lg" variant="default" />
            </div>
            <p className="text-label-small text-tertiary">Uses text-primary color</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-small font-medium text-primary mb-3">Primary Variant</h4>
            <div className="flex justify-center mb-2">
              <ThemeIcon src={rentCollectionCardIcon} alt="Dollar" size="lg" variant="primary" />
            </div>
            <p className="text-label-small text-tertiary">Uses text-secondary color</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-small font-medium text-primary mb-3">Secondary Variant</h4>
            <div className="flex justify-center mb-2">
              <ThemeIcon src={maintenanceCardIcon} alt="Maintenance" size="lg" variant="secondary" />
            </div>
            <p className="text-label-small text-tertiary">Uses text-tertiary color</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-small font-medium text-primary mb-3">White Variant</h4>
            <div className="flex justify-center mb-2 bg-primary p-2 rounded-lg">
              <ThemeIcon src={leasesCardIcon} alt="Document" size="lg" variant="white" />
            </div>
            <p className="text-label-small text-tertiary">Always white</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Icon Sizes</h3>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <ThemeIcon src={aiEfficiencyCardIcon} alt="Chart" size="xs" variant="default" />
            <p className="text-label-small text-tertiary mt-2">XS (12px)</p>
          </div>
          <div className="text-center">
            <ThemeIcon src={aiEfficiencyCardIcon} alt="Chart" size="sm" variant="default" />
            <p className="text-label-small text-tertiary mt-2">SM (16px)</p>
          </div>
          <div className="text-center">
            <ThemeIcon src={aiEfficiencyCardIcon} alt="Chart" size="md" variant="default" />
            <p className="text-label-small text-tertiary mt-2">MD (20px)</p>
          </div>
          <div className="text-center">
            <ThemeIcon src={aiEfficiencyCardIcon} alt="Chart" size="lg" variant="default" />
            <p className="text-label-small text-tertiary mt-2">LG (24px)</p>
          </div>
          <div className="text-center">
            <ThemeIcon src={aiEfficiencyCardIcon} alt="Chart" size="xl" variant="default" />
            <p className="text-label-small text-tertiary mt-2">XL (32px)</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Theme Comparison</h3>
        <p className="text-secondary mb-4">Toggle the theme to see how icons adapt automatically</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-paper-paper-elevation-1 p-6 rounded-lg">
            <h4 className="text-base font-semibold text-primary mb-4">Light Theme Icons</h4>
            <div className="flex gap-4">
              <ThemeIcon src={vacancyCardIcon} alt="Building" size="md" variant="default" />
              <ThemeIcon src={rentCollectionCardIcon} alt="Dollar" size="md" variant="primary" />
              <ThemeIcon src={maintenanceCardIcon} alt="Maintenance" size="md" variant="secondary" />
            </div>
          </div>
          <div className="bg-paper-paper-elevation-1 p-6 rounded-lg">
            <h4 className="text-base font-semibold text-primary mb-4">Dark Theme Icons</h4>
            <div className="flex gap-4">
              <ThemeIcon src={vacancyCardIcon} alt="Building" size="md" variant="default" />
              <ThemeIcon src={rentCollectionCardIcon} alt="Dollar" size="md" variant="primary" />
              <ThemeIcon src={maintenanceCardIcon} alt="Maintenance" size="md" variant="secondary" />
            </div>
            <p className="text-label-small text-tertiary mt-2">Same icons, different colors in dark mode</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPopupExamples = () => {

    const recordPaymentFields = [
      {
        id: 'outstanding-balance',
        fields: [
          {
            id: 'balance',
            label: 'Outstanding Balance:',
            value: '$1950',
            type: 'readonly' as const,
            icon: '/assets/dollar-icon.svg'
          }
        ],
        layout: 'single' as const
      },
      {
        id: 'payment-details',
        fields: [
          {
            id: 'amount',
            label: 'Payment Amount',
            placeholder: '0.00',
            icon: '/assets/dollar-icon.svg'
          },
          {
            id: 'method',
            label: 'Payment Method',
            placeholder: 'Select method',
            type: 'select' as const,
            icon: '/assets/dropdown-arrow-down-icon.svg'
          }
        ],
        layout: 'double' as const
      },
      {
        id: 'reference',
        fields: [
          {
            id: 'reference-number',
            label: 'Reference Number (Optional)',
            placeholder: 'Transaction ID, Check number, etc.',
            icon: '/assets/edit-item-icon.svg'
          }
        ],
        layout: 'single' as const
      },
      {
        id: 'waive-details',
        fields: [
          {
            id: 'waive-amount',
            label: 'Waive Amount',
            placeholder: 'Enter',
            icon: '/assets/edit-item-icon.svg'
          },
          {
            id: 'reason',
            label: 'Reason',
            placeholder: 'Select reason',
            type: 'select' as const,
            icon: '/assets/dropdown-arrow-down-icon.svg'
          }
        ],
        layout: 'double' as const
      }
    ];

    const addPropertyFields = [
      {
        id: 'basic-info',
        fields: [
          {
            id: 'property-name',
            label: 'Property Name',
            placeholder: 'Enter property name',
            required: true
          },
          {
            id: 'property-type',
            label: 'Property Type',
            placeholder: 'Select type',
            type: 'select' as const,
            icon: '/assets/dropdown-arrow-down-icon.svg',
            required: true
          }
        ],
        layout: 'double' as const
      },
      {
        id: 'address',
        fields: [
          {
            id: 'address',
            label: 'Address',
            placeholder: 'Enter full address',
            required: true
          }
        ],
        layout: 'single' as const
      }
    ];

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Popup Component - Record Payment</h3>
          <div className="space-y-4">
            <button
              onClick={() => setIsRecordPaymentOpen(true)}
              className="bg-gradient-brand-aurora text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Open Record Payment Popup
            </button>
            
            <Popup
              title="Record Payment - INV-2024-003"
              isOpen={isRecordPaymentOpen}
              onClose={() => setIsRecordPaymentOpen(false)}
              fieldGroups={recordPaymentFields}
              primaryButton={{
                label: 'Record Payment',
                onClick: () => {
                  console.log('Record Payment clicked');
                  setIsRecordPaymentOpen(false);
                }
              }}
              secondaryButton={{
                label: 'Cancel',
                onClick: () => setIsRecordPaymentOpen(false)
              }}
              size="lg"
            />
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Popup Component - Add Property</h3>
          <div className="space-y-4">
            <button
              onClick={() => setIsAddPropertyOpen(true)}
              className="bg-gradient-brand-aurora text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Open Add Property Popup
            </button>
            
            <Popup
              title="Add New Property"
              subtitle="Create a new property in your portfolio"
              isOpen={isAddPropertyOpen}
              onClose={() => setIsAddPropertyOpen(false)}
              fieldGroups={addPropertyFields}
              primaryButton={{
                label: 'Create Property',
                onClick: () => {
                  console.log('Create Property clicked');
                  setIsAddPropertyOpen(false);
                }
              }}
              secondaryButton={{
                label: 'Cancel',
                onClick: () => setIsAddPropertyOpen(false)
              }}
              size="md"
            />
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Popup Component - Custom Content</h3>
          <div className="space-y-4">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-gradient-brand-aurora text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Open Custom Content Popup
            </button>
            
            <Popup
              title="Custom Content Example"
              subtitle="This popup contains custom React content"
              isOpen={isPopupOpen}
              onClose={() => setIsPopupOpen(false)}
              size="lg"
            >
              <div className="space-y-4">
                <div className="bg-overlays-primary-10 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Custom Content Section</h4>
                  <p className="text-tertiary text-sm">
                    This popup demonstrates how you can include custom React content 
                    alongside or instead of form fields.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-primary mb-2">Feature 1</h5>
                    <p className="text-tertiary text-sm">Custom content can include any React components.</p>
                  </div>
                  <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-primary mb-2">Feature 2</h5>
                    <p className="text-tertiary text-sm">Perfect for complex forms or information displays.</p>
                  </div>
                </div>
              </div>
            </Popup>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Popup Sizes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-gray-100 text-primary px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Small (sm)
            </button>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-gray-100 text-primary px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Medium (md)
            </button>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-gray-100 text-primary px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Large (lg)
            </button>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-gray-100 text-primary px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Extra Large (xl)
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderMoreActionsExamples = () => {

    const simpleActions = [
      {
        id: 'view-details',
        label: 'View Details',
        icon: '/assets/view-details-icon.svg',
        onClick: () => console.log('View Details clicked')
      },
      {
        id: 'edit-property',
        label: 'Edit Property',
        icon: '/assets/edit-property-button-icon.svg',
        onClick: () => console.log('Edit Property clicked')
      },
      {
        id: 'add-unit',
        label: 'Add Unit',
        icon: '/assets/add-unit-icon.svg',
        onClick: () => console.log('Add Unit clicked')
      },
      {
        id: 'delete-property',
        label: 'Delete Property',
        icon: '/assets/delete-property-icon.svg',
        onClick: () => console.log('Delete Property clicked'),
        variant: 'danger' as const
      }
    ];

    const gradientActions = [
      {
        id: 'add-property',
        label: 'Add Property',
        icon: '/assets/add-property-action-icon.svg',
        onClick: () => console.log('Add Property clicked'),
        gradient: 'info-flow' as const
      },
      {
        id: 'add-tenant',
        label: 'Add Tenant',
        icon: '/assets/add-tenant-action-icon.svg',
        onClick: () => console.log('Add Tenant clicked'),
        gradient: 'magenta-pop' as const
      },
      {
        id: 'schedule-maintenance',
        label: 'Schedule Maintenance',
        icon: '/assets/schedule-maintenance-action-icon.svg',
        onClick: () => console.log('Schedule Maintenance clicked'),
        gradient: 'brand-aurora' as const
      },
      {
        id: 'request-rent',
        label: 'Request Rent',
        icon: '/assets/request-rent-action-icon.svg',
        onClick: () => console.log('Request Rent clicked'),
        gradient: 'ai-violet-2' as const
      }
    ];

    const propertyActions = [
      {
        id: 'view-details',
        label: 'View Details',
        icon: '/assets/view-details-icon.svg',
        onClick: () => console.log('View Details clicked')
      },
      {
        id: 'edit-property',
        label: 'Edit Property',
        icon: '/assets/edit-property-button-icon.svg',
        onClick: () => console.log('Edit Property clicked')
      },
      {
        id: 'add-unit',
        label: 'Add Unit',
        icon: '/assets/add-unit-icon.svg',
        onClick: () => console.log('Add Unit clicked')
      },
      {
        id: 'delete-property',
        label: 'Delete Property',
        icon: '/assets/delete-property-icon.svg',
        onClick: () => console.log('Delete Property clicked'),
        variant: 'danger' as const
      }
    ];

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">More Actions - Simple Variant</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSimpleActionsOpen(true)}
                className="bg-gradient-brand-aurora text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <span>⚡</span>
                Open Simple Actions
              </button>
              <p className="text-tertiary text-sm">
                Click to open simple actions dropdown with regular icons
              </p>
            </div>
            
            <MoreActions
              items={simpleActions}
              isOpen={isSimpleActionsOpen}
              onClose={() => setIsSimpleActionsOpen(false)}
              variant="simple"
            />
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">More Actions - Gradient Variant</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsGradientActionsOpen(true)}
                className="bg-gradient-brand-aurora text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <span>⚡</span>
                Open Gradient Actions
              </button>
              <p className="text-tertiary text-sm">
                Click to open gradient actions dropdown with colored icon backgrounds
              </p>
            </div>
            
            <MoreActions
              items={gradientActions}
              isOpen={isGradientActionsOpen}
              onClose={() => setIsGradientActionsOpen(false)}
              variant="gradient"
            />
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">More Actions - Property Card Context</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPropertyActionsOpen(true)}
                className="bg-gradient-brand-aurora text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <span>⚡</span>
                Open Property Actions
              </button>
              <p className="text-tertiary text-sm">
                Property-specific actions with danger variant for delete
              </p>
            </div>
            
            <MoreActions
              items={propertyActions}
              isOpen={isPropertyActionsOpen}
              onClose={() => setIsPropertyActionsOpen(false)}
              variant="simple"
            />
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">More Actions Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Simple Variant</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• Regular icons with text labels</li>
                <li>• Hover effects and transitions</li>
                <li>• Support for danger variant (red text)</li>
                <li>• Disabled state support</li>
              </ul>
            </div>
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Gradient Variant</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• Colored gradient icon backgrounds</li>
                <li>• Multiple gradient options</li>
                <li>• Shadow effects on icons</li>
                <li>• White icons on colored backgrounds</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Reusable MoreActionsButton Component</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Property Card Actions</h4>
                <MoreActionsButton
                  items={propertyActions}
                  variant="simple"
                  position="bottom-right"
                  triggerIcon="/assets/more-options-icon.svg"
                />
              </div>
              <p className="text-tertiary text-sm">
                Ready-to-use button with property actions
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Dashboard Actions</h4>
                <MoreActionsButton
                  items={gradientActions}
                  variant="gradient"
                  position="bottom-right"
                  triggerIcon="/assets/more-options-icon.svg"
                />
              </div>
              <p className="text-tertiary text-sm">
                Ready-to-use button with gradient actions
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Available Gradients</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-info-flow rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-xs">IF</span>
              </div>
              <p className="text-sm text-tertiary">Info Flow</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-magenta-pop rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-xs">MP</span>
              </div>
              <p className="text-sm text-tertiary">Magenta Pop</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-brand-aurora rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-xs">BA</span>
              </div>
              <p className="text-sm text-tertiary">Brand Aurora</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-ai-violet-2 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-xs">AV</span>
              </div>
              <p className="text-sm text-tertiary">AI Violet 2</p>
            </div>
          </div>
        </div>
      </div>
    );
  };



  const renderCheckboxExamples = () => {
    const handleOptionChange = (option: string, checked: boolean) => {
      if (checked) {
        setSelectedCheckboxOptions(prev => [...prev, option]);
      } else {
        setSelectedCheckboxOptions(prev => prev.filter(item => item !== option));
      }
    };

    return (
      <div className="space-y-8">
        {/* Traditional Checkboxes */}
        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Traditional Checkboxes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-primary">Basic Checkboxes</h4>
              <Checkbox
                label="Default Checkbox"
                checked={true}
                onChange={() => {}}
              />
              <Checkbox
                label="Unchecked"
                checked={false}
                onChange={() => {}}
              />
              <Checkbox
                label="Disabled Checked"
                checked={true}
                onChange={() => {}}
                disabled
              />
              <Checkbox
                label="Disabled Unchecked"
                checked={false}
                onChange={() => {}}
                disabled
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-primary">Color Variants</h4>
              <Checkbox
                label="Primary (Default)"
                checked={true}
                onChange={() => {}}
                color="primary"
              />
              <Checkbox
                label="Success"
                checked={true}
                onChange={() => {}}
                color="success"
              />
              <Checkbox
                label="Warning"
                checked={true}
                onChange={() => {}}
                color="warning"
              />
              <Checkbox
                label="Error"
                checked={true}
                onChange={() => {}}
                color="error"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Checkbox Sizes & Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-primary">Sizes</h4>
              <Checkbox
                label="Small"
                checked={true}
                onChange={() => {}}
                size="sm"
              />
              <Checkbox
                label="Medium"
                checked={true}
                onChange={() => {}}
                size="md"
              />
              <Checkbox
                label="Large"
                checked={true}
                onChange={() => {}}
                size="lg"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-primary">Variants</h4>
              <Checkbox
                label="Default"
                checked={true}
                onChange={() => {}}
                variant="default"
              />
              <Checkbox
                label="Filled"
                checked={true}
                onChange={() => {}}
                variant="filled"
              />
              <Checkbox
                label="Outlined"
                checked={true}
                onChange={() => {}}
                variant="outlined"
              />
            </div>
          </div>
        </div>

        {/* Button Variant Checkboxes */}
        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Button Variant Checkboxes</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-base font-semibold text-primary mb-4">Button Variant States</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
                <Checkbox
                  label="Swimming Pool"
                  checked={false}
                  variant="button"
                  onChange={(checked) => console.log('Swimming Pool:', checked)}
                />
                <Checkbox
                  label="Swimming Pool"
                  checked={true}
                  variant="button"
                  onChange={(checked) => console.log('Swimming Pool:', checked)}
                />
                <Checkbox
                  label="Swimming Pool"
                  checked={false}
                  variant="button"
                  disabled={true}
                  onChange={(checked) => console.log('Swimming Pool:', checked)}
                />
              </div>
            </div>

            <div>
              <h4 className="text-base font-semibold text-primary mb-4">Multiple Button Options</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
                <Checkbox
                  label="Swimming Pool"
                  checked={selectedCheckboxOptions.includes('swimming-pool')}
                  variant="button"
                  onChange={(checked) => handleOptionChange('swimming-pool', checked)}
                />
                <Checkbox
                  label="Gym"
                  checked={selectedCheckboxOptions.includes('gym')}
                  variant="button"
                  onChange={(checked) => handleOptionChange('gym', checked)}
                />
                <Checkbox
                  label="Parking"
                  checked={selectedCheckboxOptions.includes('parking')}
                  variant="button"
                  onChange={(checked) => handleOptionChange('parking', checked)}
                />
                <Checkbox
                  label="Security"
                  checked={selectedCheckboxOptions.includes('security')}
                  variant="button"
                  onChange={(checked) => handleOptionChange('security', checked)}
                />
                <Checkbox
                  label="Elevator"
                  checked={selectedCheckboxOptions.includes('elevator')}
                  variant="button"
                  onChange={(checked) => handleOptionChange('elevator', checked)}
                />
                <Checkbox
                  label="WiFi"
                  checked={selectedCheckboxOptions.includes('wifi')}
                  variant="button"
                  onChange={(checked) => handleOptionChange('wifi', checked)}
                />
              </div>
              <div className="mt-4 p-4 bg-paper-paper-elevation-2 rounded-lg">
                <p className="text-sm text-tertiary">
                  Selected options: {selectedCheckboxOptions.length > 0 ? selectedCheckboxOptions.join(', ') : 'None'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Checkbox Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Traditional Checkboxes</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• Checkmark icon when selected</li>
                <li>• Multiple sizes (sm, md, lg)</li>
                <li>• Color variants (primary, success, warning, error)</li>
                <li>• Visual variants (default, filled, outlined)</li>
                <li>• Disabled state support</li>
              </ul>
            </div>
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Button Variant</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• Button-style appearance</li>
                <li>• Click to toggle selection state</li>
                <li>• Keyboard navigation (Enter/Space)</li>
                <li>• Accessibility support (ARIA attributes)</li>
                <li>• Hover effects and theme support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderKeyValuePairExamples = () => {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Key Value Pair - Horizontal Layout</h3>
          <div className="space-y-4">
            <div className="w-full max-w-md">
              <KeyValuePair
                label="Property"
                value="Sunset Apartments"
                icon="/assets/878cd835ab10ca42796d3d46ca1955b32ffb2ff2.svg"
                layout="horizontal"
                labelColor="primary"
                valueColor="primary"
              />
            </div>
            <div className="w-full max-w-md">
              <KeyValuePair
                label="Asset Name"
                value="Refrigerator - Kitchen"
                layout="horizontal"
                labelColor="primary"
                valueColor="primary"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Key Value Pair - Vertical Layout</h3>
          <div className="space-y-4">
            <div className="w-full max-w-md">
              <KeyValuePair
                label="Property"
                value="Sunset Apartments"
                icon="/assets/add-property-icon.svg"
                layout="vertical"
                labelColor="tertiary"
                valueColor="primary"
              />
            </div>
            <div className="w-full max-w-md">
              <KeyValuePair
                label="Manufacturer"
                value="Carrier"
                layout="vertical"
                labelColor="tertiary"
                valueColor="primary"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Key Value Pair - Different Color Combinations</h3>
          <div className="space-y-4">
            <div className="w-full max-w-md">
              <KeyValuePair
                label="Status"
                value="Active"
                layout="horizontal"
                labelColor="tertiary"
                valueColor="primary"
              />
            </div>
            <div className="w-full max-w-md">
              <KeyValuePair
                label="Last Updated"
                value="2 hours ago"
                layout="horizontal"
                labelColor="tertiary"
                valueColor="tertiary"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Key Value Pair - Multiple Items</h3>
          <div className="space-y-4">
            <div className="w-full max-w-md space-y-3">
              <KeyValuePair
                label="Property"
                value="Sunset Apartments"
                icon="/assets/878cd835ab10ca42796d3d46ca1955b32ffb2ff2.svg"
                layout="horizontal"
                labelColor="primary"
                valueColor="primary"
              />
              <KeyValuePair
                label="Unit"
                value="Apt 201"
                layout="horizontal"
                labelColor="tertiary"
                valueColor="primary"
              />
              <KeyValuePair
                label="Tenant"
                value="John Smith"
                layout="horizontal"
                labelColor="tertiary"
                valueColor="primary"
              />
              <KeyValuePair
                label="Lease End"
                value="Dec 31, 2024"
                layout="horizontal"
                labelColor="tertiary"
                valueColor="tertiary"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Key Value Pair Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Layout Options</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• Horizontal: Label and value side by side</li>
                <li>• Vertical: Label above value</li>
                <li>• Optional icon support</li>
                <li>• Flexible width and spacing</li>
                <li>• Responsive design</li>
              </ul>
            </div>
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Styling Options</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• Label color variants (primary/tertiary)</li>
                <li>• Value color variants (primary/tertiary)</li>
                <li>• Theme-aware colors</li>
                <li>• Consistent typography</li>
                <li>• Icon integration with ThemeIcon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderBotConversationExamples = () => {
    const sampleMessages = [
      {
        id: '1',
        type: 'user' as const,
        content: 'Water heater not heating properly',
        userInitials: 'JD'
      },
      {
        id: '2',
        type: 'bot' as const,
        content: 'Got it, Thomas. You\'re referring to your unit at Lakeside Villas, Villa 7B, right?\n\nJust confirming — is this about your water heater not providing hot water?'
      },
      {
        id: '3',
        type: 'user' as const,
        content: 'Yes, no hot water since morning.',
        userInitials: 'JD'
      },
      {
        id: '4',
        type: 'bot' as const,
        content: 'Thanks for confirming. Could you please tell me — is any water leaking from it, or is it just not heating?\n\nYou can also send a quick photo of the unit or the control panel if possible. 📸'
      },
      {
        id: '5',
        type: 'user' as const,
        content: 'No leaks. Here\'s a photo.\n\n(📷 5 images)',
        userInitials: 'JD',
        attachments: [
          { type: 'image' as const, count: 5, label: '📷 5 images' }
        ]
      },
      {
        id: '6',
        type: 'bot' as const,
        content: 'Thank you, Thomas.\n\nI\'ve created a maintenance ticket for this issue:\n\n"Water heater not heating properly."\n\n**Ticket ID:** MNT-001\n**Priority:** Urgent (24h SLA) 🔴\n\nI\'ll check your appliance warranty and find an available technician.'
      },
      {
        id: '7',
        type: 'user' as const,
        content: 'Thank you!',
        userInitials: 'JD'
      },
      {
        id: '8',
        type: 'bot' as const,
        content: 'Your water heater\'s warranty has expired, so we\'ll send one of our partner vendors (AquaPro Plumbing Services).\n\nThe next available slots are:\n\n1. **Today, 5–7 PM**\n2. **Tomorrow, 9–11 AM**\n3. **Tomorrow, 1–3 PM**\n\nWhich time works best for you?'
      },
      {
        id: '9',
        type: 'user' as const,
        content: 'Option 2 please — tomorrow 9–11 AM.',
        userInitials: 'JD'
      },
      {
        id: '10',
        type: 'bot' as const,
        content: 'Perfect 👍\n\nI\'ve scheduled AquaPro Plumbing Services to visit **tomorrow (Oct 7) between 9:00–11:00 AM**.\n\nYou\'ll receive a reminder 1 hour before the technician arrives.'
      },
      {
        id: '11',
        type: 'user' as const,
        content: 'Perfect!',
        userInitials: 'JD'
      },
      {
        id: '12',
        type: 'bot' as const,
        content: '🔔 Reminder: The technician from **AquaPro Plumbing Services** will arrive between **9–11 AM today** for your water heater repair.\n\nPlease make sure someone is home to provide access.'
      }
    ];

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Bot Conversation - Maintenance Support</h3>
          <div className="w-full max-w-4xl">
            <BotConversation
              title="AI Conversation"
              messages={sampleMessages}
            />
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Bot Conversation Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Message Types</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• User messages: Right-aligned with gray background</li>
                <li>• Bot messages: Left-aligned with gradient background</li>
                <li>• User avatars: Gradient background with initials</li>
                <li>• Bot avatars: AI icon with brand gradient</li>
                <li>• Rich text formatting support</li>
              </ul>
            </div>
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Features</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• Scrollable conversation area</li>
                <li>• Message attachments (images, files)</li>
                <li>• Bold text formatting (**text**)</li>
                <li>• Line breaks and spacing</li>
                <li>• Emoji support</li>
                <li>• Responsive design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderChipExamples = () => {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Chip Types - Filled, Low-Hue, Low-Hue with Border</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Filled Chips (Solid Background)</h4>
              <div className="flex flex-wrap gap-3">
                <Chip label="Error" variant="error" type="filled" />
                <Chip label="Success" variant="success" type="filled" />
                <Chip label="Warning" variant="warning" type="filled" />
                <Chip label="Info" variant="info" type="filled" />
                <Chip label="Primary" variant="primary" type="filled" />
                <Chip label="Secondary" variant="secondary" type="filled" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Low-Hue Chips (Light Background)</h4>
              <div className="flex flex-wrap gap-3">
                <Chip label="Warranty Expired" variant="error" type="low-hue" />
                <Chip label="Paid" variant="success" type="low-hue" />
                <Chip label="Pending" variant="warning" type="low-hue" />
                <Chip label="Draft" variant="info" type="low-hue" />
                <Chip label="Featured" variant="primary" type="low-hue" />
                <Chip label="Fixture" variant="secondary" type="low-hue" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Low-Hue with Border Chips</h4>
              <div className="flex flex-wrap gap-3">
                <Chip label="Payment Failed" variant="error" type="low-hue-border" />
                <Chip label="Completed" variant="success" type="low-hue-border" />
                <Chip label="Overdue" variant="warning" type="low-hue-border" />
                <Chip label="In Review" variant="info" type="low-hue-border" />
                <Chip label="Premium" variant="primary" type="low-hue-border" />
                <Chip label="Appliance" variant="secondary" type="low-hue-border" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Icon + Text Chips (When Icons Are Needed)</h4>
              <div className="flex flex-wrap gap-3">
                <Chip 
                  label="AI" 
                  variant="neutral" 
                  type="low-hue-border" 
                  icon="/assets/ai-efficiency-icon.svg"
                />
                <Chip 
                  label="Maintenance" 
                  variant="error" 
                  type="low-hue-border" 
                  icon="/assets/maintenance-icon.svg"
                />
                <Chip 
                  label="Completed" 
                  variant="success" 
                  type="low-hue-border" 
                  icon="/assets/save-icon.svg"
                />
                <Chip 
                  label="In Progress" 
                  variant="info" 
                  type="low-hue-border" 
                  icon="/assets/property-actions-icon.svg"
                />
                <Chip 
                  label="Pending" 
                  variant="warning" 
                  type="low-hue-border" 
                  icon="/assets/schedule-maintenance-action-icon.svg"
                />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Neutral Chips (New Variant)</h4>
              <div className="flex flex-wrap gap-3">
                <Chip label="Neutral" variant="neutral" type="filled" />
                <Chip label="Default" variant="neutral" type="low-hue" />
                <Chip label="Standard" variant="neutral" type="low-hue-border" />
                <Chip 
                  label="AI" 
                  variant="neutral" 
                  type="low-hue-border" 
                  icon="/assets/ai-efficiency-icon.svg"
                />
                <Chip 
                  label="General" 
                  variant="neutral" 
                  type="low-hue" 
                  icon="/assets/properties-icon.svg"
                />
                <Chip 
                  label="Default" 
                  variant="neutral" 
                  type="filled" 
                  icon="/assets/document-files-icon.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Chip Sizes</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Small Chips (Default)</h4>
              <div className="flex flex-wrap gap-3">
                <Chip label="Small Error" variant="error" type="filled" size="sm" />
                <Chip label="Small Success" variant="success" type="low-hue" size="sm" />
                <Chip label="Small Warning" variant="warning" type="low-hue-border" size="sm" />
                <Chip label="Small Info" variant="info" type="filled" size="sm" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Medium Chips</h4>
              <div className="flex flex-wrap gap-3">
                <Chip label="Medium Error" variant="error" type="filled" size="md" />
                <Chip label="Medium Success" variant="success" type="low-hue" size="md" />
                <Chip label="Medium Warning" variant="warning" type="low-hue-border" size="md" />
                <Chip label="Medium Info" variant="info" type="filled" size="md" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Interactive Chips</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Clickable Chips</h4>
              <div className="flex flex-wrap gap-3">
                <Chip 
                  label="Clickable Error" 
                  variant="error" 
                  type="filled"
                  onClick={() => console.log("Error chip clicked")} 
                />
                <Chip 
                  label="Clickable Success" 
                  variant="success" 
                  type="low-hue"
                  onClick={() => console.log("Success chip clicked")} 
                />
                <Chip 
                  label="Clickable Warning" 
                  variant="warning" 
                  type="low-hue-border"
                  onClick={() => console.log("Warning chip clicked")} 
                />
                <Chip 
                  label="Clickable Info" 
                  variant="info" 
                  type="filled"
                  onClick={() => console.log("Info chip clicked")} 
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Chip Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Types</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• <strong>Filled:</strong> Solid background with white text</li>
                <li>• <strong>Low-Hue:</strong> Light background with dark text</li>
                <li>• <strong>Low-Hue-Border:</strong> Light background with border and dark text</li>
              </ul>
              <h4 className="font-semibold text-primary mb-3 mt-4">Variants</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• Error, Success, Warning, Info</li>
                <li>• Primary, Secondary, Tertiary, Gray</li>
                <li>• <strong>Neutral:</strong> Text-primary color for general use</li>
                <li>• All variants work with all types</li>
              </ul>
              <h4 className="font-semibold text-primary mb-3 mt-4">Icon Support</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• <strong>Icon + Text:</strong> Optional icon with text label</li>
                <li>• <strong>Icon Size:</strong> 12px (w-3 h-3) for proper scaling</li>
                <li>• <strong>Icon Variants:</strong> AI, Vendor, Urgent, Completed, etc.</li>
              </ul>
            </div>
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Features</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• <strong>Full radius:</strong> All chips use rounded-full</li>
                <li>• Two sizes: Small (default) and Medium</li>
                <li>• Optional click handler for interactive chips</li>
                <li>• Hover effects for clickable chips</li>
                <li>• Theme-aware colors and typography</li>
                <li>• Flexible content and responsive design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTabsExamples = () => {
    const tenantTabs = [
      { id: 'lease-details', label: 'Lease Details' },
      { id: 'rent-history', label: 'Rent History' },
      { id: 'co-tenants', label: 'Co-Tenants', count: 3 },
      { id: 'maintenance-tickets', label: 'Maintenance Tickets' },
      { id: 'communication-history', label: 'Communication History' },
    ];

    const propertyTabs = [
      { id: 'overview', label: 'Overview' },
      { id: 'units', label: 'Units', count: 12 },
      { id: 'tenants', label: 'Tenants', count: 8 },
      { id: 'maintenance', label: 'Maintenance' },
      { id: 'financials', label: 'Financials' },
      { id: 'documents', label: 'Documents' },
    ];

    const simpleTabs = [
      { id: 'tab1', label: 'Tab 1' },
      { id: 'tab2', label: 'Tab 2' },
      { id: 'tab3', label: 'Tab 3' },
    ];

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Tabs Component - Flexible & Responsive</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Tenant Management Tabs (5 tabs)</h4>
              <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
                <Tabs 
                  tabs={tenantTabs} 
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                />
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-tertiary">
                    Active Tab: <strong>{activeTab}</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Property Management Tabs (6 tabs)</h4>
              <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
                <Tabs 
                  tabs={propertyTabs} 
                  activeTab="units"
                />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Simple Tabs (3 tabs)</h4>
              <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
                <Tabs 
                  tabs={simpleTabs} 
                  activeTab="tab2"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Responsive Behavior</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Content-Based Width (Default)</h4>
              <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                <p className="text-sm text-tertiary mb-3">Container adapts to content, not full width</p>
                <Tabs 
                  tabs={tenantTabs} 
                  activeTab="rent-history"
                />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Mobile View with Horizontal Scrolling</h4>
              <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                <p className="text-sm text-tertiary mb-3">Scrollable tabs for mobile - industry standard</p>
                <div className="max-w-xs border border-gray-200 rounded-lg p-2">
                  <Tabs 
                    tabs={propertyTabs} 
                    activeTab="units"
                    scrollable={true}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Many Tabs with Scrolling</h4>
              <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                <p className="text-sm text-tertiary mb-3">When tabs exceed container width, enable scrolling</p>
                <div className="max-w-sm border border-gray-200 rounded-lg p-2">
                  <Tabs 
                    tabs={[
                      { id: 'tab1', label: 'Very Long Tab Name' },
                      { id: 'tab2', label: 'Another Long Tab' },
                      { id: 'tab3', label: 'Short' },
                      { id: 'tab4', label: 'Medium Length Tab' },
                      { id: 'tab5', label: 'Extra Long Tab Name Here' },
                      { id: 'tab6', label: 'Final Tab' },
                    ]} 
                    activeTab="tab2"
                    scrollable={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Tab Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Design</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• <strong>Full radius:</strong> Rounded-full container and tabs</li>
                <li>• <strong>Gradient background:</strong> Light brand gradient container</li>
                <li>• <strong>Active state:</strong> Brand gradient with white text</li>
                <li>• <strong>Inactive state:</strong> Transparent with primary text</li>
                <li>• <strong>Hover effects:</strong> Subtle background on hover</li>
              </ul>
            </div>
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Functionality</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• <strong>Content-based width:</strong> Container adapts to tab content</li>
                <li>• <strong>Horizontal scrolling:</strong> Mobile-friendly scrollable tabs</li>
                <li>• <strong>Count support:</strong> Optional count display (e.g., "Co-Tenants (3)")</li>
                <li>• <strong>Controlled/Uncontrolled:</strong> Support both modes</li>
                <li>• <strong>Industry standard:</strong> Mobile tabs with adopted sizes</li>
                <li>• <strong>Accessible:</strong> Proper button semantics</li>
                <li>• <strong>Theme-aware:</strong> Uses design system colors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTenantCardExamples = () => {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Tenant Card Component - Comprehensive Tenant Information</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Complete Tenant Card (Figma Design)</h4>
              <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
                <div className="max-w-md">
                  <TenantCard
                    userInitials="WC"
                    userName="Walter Carter"
                    propertyName="Sunset Apartments"
                    unitName="Unit 001"
                    badges={[
                      { label: 'Active', variant: 'success' },
                      { label: 'Rent due', variant: 'error' }
                    ]}
                    document={{
                      title: 'Lease-21365465',
                      subtitle: 'Expires on 01-10-2026 (800 days)'
                    }}
                    additionalInfo={{
                      text: '1 active maintenance request'
                    }}
                    onMoreActions={() => console.log('More actions clicked')}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Tenant Card Variations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">Basic Tenant Info</h5>
                  <TenantCard
                    userInitials="JD"
                    userName="John Doe"
                    propertyName="Riverside Complex"
                    unitName="Apt 205"
                    badges={[
                      { label: 'Active', variant: 'success' }
                    ]}
                    onMoreActions={() => console.log('More actions clicked')}
                  />
                </div>
                
                <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">With Document Info</h5>
                  <TenantCard
                    userInitials="SM"
                    userName="Sarah Miller"
                    propertyName="Garden View"
                    unitName="Unit 12B"
                    badges={[
                      { label: 'Active', variant: 'success' },
                      { label: 'Payment pending', variant: 'warning' }
                    ]}
                    document={{
                      title: 'Lease-98765432',
                      subtitle: 'Expires on 15-03-2025 (150 days)'
                    }}
                    onMoreActions={() => console.log('More actions clicked')}
                  />
                </div>
                
                <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">With Additional Info</h5>
                  <TenantCard
                    userInitials="AB"
                    userName="Alice Brown"
                    propertyName="Downtown Lofts"
                    unitName="Loft 301"
                    badges={[
                      { label: 'Active', variant: 'success' }
                    ]}
                    additionalInfo={{
                      text: '3 maintenance requests completed this month'
                    }}
                    onMoreActions={() => console.log('More actions clicked')}
                  />
                </div>
                
                <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">Multiple Status Badges</h5>
                  <TenantCard
                    userInitials="MJ"
                    userName="Michael Johnson"
                    propertyName="Hillside Manor"
                    unitName="Villa 5"
                    badges={[
                      { label: 'Active', variant: 'success' },
                      { label: 'Rent overdue', variant: 'error' },
                      { label: 'Maintenance', variant: 'warning' }
                    ]}
                    document={{
                      title: 'Lease-45678901',
                      subtitle: 'Expires on 30-12-2024 (45 days)'
                    }}
                    additionalInfo={{
                      text: '2 pending maintenance requests'
                    }}
                    onMoreActions={() => console.log('More actions clicked')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Tenant Card Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Design</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• <strong>User Avatar:</strong> Gradient background with initials</li>
                <li>• <strong>Property Info:</strong> Icon with property and unit details</li>
                <li>• <strong>Status Badges:</strong> Color-coded status indicators</li>
                <li>• <strong>Document Section:</strong> Optional lease/document info</li>
                <li>• <strong>Additional Info:</strong> Optional maintenance/other details</li>
                <li>• <strong>Actions:</strong> More actions button for additional options</li>
              </ul>
            </div>
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Functionality</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• <strong>Flexible Content:</strong> All sections are optional</li>
                <li>• <strong>Badge Variants:</strong> Success, Error, Warning, Info</li>
                <li>• <strong>Interactive Elements:</strong> More actions and document clicks</li>
                <li>• <strong>Responsive Design:</strong> Adapts to container width</li>
                <li>• <strong>Theme-aware:</strong> Uses design system colors</li>
                <li>• <strong>Accessible:</strong> Proper alt texts and button semantics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderInvoiceCardExamples = () => {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Invoice Card Component - Financial Management</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Complete Invoice Card (Figma Design)</h4>
              <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
                <div className="max-w-md">
                  <InvoiceCard
                    invoiceId="INV-2024-001"
                    status={{ label: 'Partial', variant: 'warning' }}
                    tenantName="John Smith"
                    propertyName="Sunset Apartments"
                    unitName="4B"
                    dueDate="2024-02-01"
                    totalAmount="$1950"
                    paidAmount="$1850"
                    balance="$100"
                    onView={() => console.log('View clicked')}
                    onRecordPayment={() => console.log('Record Payment clicked')}
                    onSendReminder={() => console.log('Send Reminder clicked')}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Invoice Card Variations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">Paid Invoice</h5>
                  <InvoiceCard
                    invoiceId="INV-2024-002"
                    status={{ label: 'Paid', variant: 'success' }}
                    tenantName="Sarah Johnson"
                    propertyName="Riverside Complex"
                    unitName="Apt 205"
                    dueDate="2024-01-15"
                    totalAmount="$1200"
                    paidAmount="$1200"
                    balance="$0"
                    onView={() => console.log('View clicked')}
                  />
                </div>
                
                <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">Overdue Invoice</h5>
                  <InvoiceCard
                    invoiceId="INV-2024-003"
                    status={{ label: 'Overdue', variant: 'error' }}
                    tenantName="Michael Brown"
                    propertyName="Garden View"
                    unitName="Unit 12B"
                    dueDate="2023-12-01"
                    totalAmount="$800"
                    paidAmount="$0"
                    balance="$800"
                    onView={() => console.log('View clicked')}
                    onRecordPayment={() => console.log('Record Payment clicked')}
                    onSendReminder={() => console.log('Send Reminder clicked')}
                  />
                </div>
                
                <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">Pending Invoice</h5>
                  <InvoiceCard
                    invoiceId="INV-2024-004"
                    status={{ label: 'Pending', variant: 'info' }}
                    tenantName="Alice Wilson"
                    propertyName="Downtown Lofts"
                    unitName="Loft 301"
                    dueDate="2024-03-01"
                    totalAmount="$1500"
                    paidAmount="$0"
                    balance="$1500"
                    onView={() => console.log('View clicked')}
                    onRecordPayment={() => console.log('Record Payment clicked')}
                  />
                </div>
                
                <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">Large Amount Invoice</h5>
                  <InvoiceCard
                    invoiceId="INV-2024-005"
                    status={{ label: 'Partial', variant: 'warning' }}
                    tenantName="David Miller"
                    propertyName="Hillside Manor"
                    unitName="Villa 5"
                    dueDate="2024-02-15"
                    totalAmount="$5000"
                    paidAmount="$3000"
                    balance="$2000"
                    onView={() => console.log('View clicked')}
                    onRecordPayment={() => console.log('Record Payment clicked')}
                    onSendReminder={() => console.log('Send Reminder clicked')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Invoice Card Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Design</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• <strong>Invoice Header:</strong> ID with status badge</li>
                <li>• <strong>Tenant Info:</strong> Name and property/unit details</li>
                <li>• <strong>Financial Grid:</strong> Due date, total, paid, balance</li>
                <li>• <strong>Action Buttons:</strong> View, Record Payment, Send Reminder</li>
                <li>• <strong>Color Coding:</strong> Green for paid, red for balance</li>
                <li>• <strong>Status Badges:</strong> Paid, Partial, Overdue, Pending</li>
              </ul>
            </div>
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Functionality</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• <strong>Flexible Actions:</strong> All buttons are optional</li>
                <li>• <strong>Status Variants:</strong> Success, Error, Warning, Info</li>
                <li>• <strong>Financial Display:</strong> Clear amount breakdown</li>
                <li>• <strong>Responsive Design:</strong> Adapts to container width</li>
                <li>• <strong>Theme-aware:</strong> Uses design system colors</li>
                <li>• <strong>Built with existing components:</strong> Card, Chip, Buttons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMaintenanceTicketCardExamples = () => {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Maintenance Ticket Card Component - Maintenance Management</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Complete Maintenance Ticket Card (Figma Design)</h4>
              <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
                <div className="max-w-md">
                  <MaintenanceTicketCard
                    ticketId="MNT-001"
                    propertyName="Sunset Apartments - Unit 001"
                    equipmentType="Water heater"
                    badges={[
                      { label: 'AI', variant: 'secondary', icon: '/assets/ai-efficiency-icon.svg' },
                      { label: 'Vendor Assigned', variant: 'primary' },
                      { label: 'Urgent', variant: 'error' }
                    ]}
                    description="Water heater not heating properly"
                    onMoreActions={() => console.log('More actions clicked')}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Maintenance Ticket Card Variations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">Basic Maintenance Ticket</h5>
                  <MaintenanceTicketCard
                    ticketId="MNT-002"
                    propertyName="Riverside Complex - Apt 205"
                    equipmentType="HVAC System"
                    badges={[
                      { label: 'Pending', variant: 'warning' }
                    ]}
                    description="Air conditioning not working properly"
                    onMoreActions={() => console.log('More actions clicked')}
                  />
                </div>
                
                <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">Completed Ticket</h5>
                  <MaintenanceTicketCard
                    ticketId="MNT-003"
                    propertyName="Garden View - Unit 12B"
                    equipmentType="Plumbing"
                    badges={[
                      { label: 'Completed', variant: 'success' },
                      { label: 'Vendor Assigned', variant: 'primary' }
                    ]}
                    description="Leaky faucet in kitchen sink"
                    onMoreActions={() => console.log('More actions clicked')}
                  />
                </div>
                
                <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">AI-Generated Ticket</h5>
                  <MaintenanceTicketCard
                    ticketId="MNT-004"
                    propertyName="Downtown Lofts - Loft 301"
                    equipmentType="Electrical"
                    badges={[
                      { label: 'AI', variant: 'secondary', icon: '/assets/ai-efficiency-icon.svg' },
                      { label: 'In Progress', variant: 'info' }
                    ]}
                    description="Electrical outlet not working in bedroom"
                    onMoreActions={() => console.log('More actions clicked')}
                  />
                </div>
                
                <div className="bg-paper-paper-elevation-2 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">Multiple Status Badges</h5>
                  <MaintenanceTicketCard
                    ticketId="MNT-005"
                    propertyName="Hillside Manor - Villa 5"
                    equipmentType="Appliance"
                    badges={[
                      { label: 'AI', variant: 'secondary', icon: '/assets/ai-efficiency-icon.svg' },
                      { label: 'Vendor Assigned', variant: 'primary' },
                      { label: 'Urgent', variant: 'error' },
                      { label: 'In Progress', variant: 'info' }
                    ]}
                    description="Dishwasher not draining properly"
                    onMoreActions={() => console.log('More actions clicked')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Maintenance Ticket Card Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Design</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• <strong>Maintenance Avatar:</strong> Gradient background with maintenance icon</li>
                <li>• <strong>Ticket ID:</strong> Prominent ticket identifier</li>
                <li>• <strong>Property Info:</strong> Property and equipment details</li>
                <li>• <strong>Status Badges:</strong> AI, Vendor Assigned, Urgent, etc.</li>
                <li>• <strong>Description Section:</strong> Issue description in gray background</li>
                <li>• <strong>Actions:</strong> More actions button for additional options</li>
              </ul>
            </div>
            <div className="bg-paper-paper-elevation-2 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Functionality</h4>
              <ul className="space-y-2 text-sm text-tertiary">
                <li>• <strong>Flexible Badges:</strong> Support for multiple status indicators</li>
                <li>• <strong>Badge Variants:</strong> Success, Error, Warning, Info, Primary, Secondary</li>
                <li>• <strong>Interactive Elements:</strong> More actions and ticket management</li>
                <li>• <strong>Responsive Design:</strong> Adapts to container width</li>
                <li>• <strong>Theme-aware:</strong> Uses design system colors</li>
                <li>• <strong>Built with existing components:</strong> Card, Chip, MoreActionsButton</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-h4 font-bold text-primary mb-4">Maintenance Ticket Card - Compact Variant</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example 1: Basic Compact Ticket */}
            <MaintenanceTicketCard
              ticketId="MNT-001"
              assetInfo="Asset: Water Heater (Rheem 50 Gal)"
              variant="compact"
              badges={[
                { label: 'AI', variant: 'neutral', type: 'low-hue-border', icon: '/assets/ai-efficiency-icon.svg' },
                { label: 'Vendor Assigned', variant: 'primary', type: 'low-hue-border' }
              ]}
              description="Water heater not heating properly"
              onViewDetails={() => console.log('View details clicked')}
            />
            
            {/* Example 2: Different Asset */}
            <MaintenanceTicketCard
              ticketId="MNT-002"
              assetInfo="Asset: HVAC System (Carrier Infinity)"
              variant="compact"
              badges={[
                { label: 'Urgent', variant: 'error', type: 'filled' },
                { label: 'In Progress', variant: 'info', type: 'low-hue' }
              ]}
              description="Air conditioning not cooling properly"
              onViewDetails={() => console.log('View details clicked')}
            />
            
            {/* Example 3: Simple Ticket */}
            <MaintenanceTicketCard
              ticketId="MNT-003"
              assetInfo="Asset: Dishwasher (Whirlpool WDF520PADM)"
              variant="compact"
              badges={[
                { label: 'Scheduled', variant: 'success', type: 'low-hue' }
              ]}
              description="Dishwasher not draining properly"
              onViewDetails={() => console.log('View details clicked')}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderAssetCardExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Asset Card - Detailed Variant</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example 1: Refrigerator Asset */}
          <AssetCard
            assetName="Refrigerator"
            category="Appliance"
            propertyName="Sunset Apartments - 4B"
            date="10-10-2023"
            imageUrl="/assets/unit-image-1.png"
            variant="detailed"
            details={[
              { label: 'Manufacturer', value: 'Whirlpool' },
              { label: 'Model', value: 'WRT518SZFG' },
              { label: 'Install Date', value: '2022-03-15' },
              { label: 'Purchase Price', value: '$899' }
            ]}
            maintenanceInfo={{
              text: '1 Ongoing maintenance ticket',
              vendor: 'John Smith'
            }}
            onMoreActions={() => console.log('More actions clicked')}
            onExpand={() => console.log('Expand clicked')}
          />
          
          {/* Example 2: HVAC System */}
          <AssetCard
            assetName="HVAC System"
            category="HVAC"
            propertyName="Lakeside Villas - 7B"
            date="15-08-2023"
            imageUrl="/assets/unit-image-2.png"
            variant="detailed"
            details={[
              { label: 'Manufacturer', value: 'Carrier' },
              { label: 'Model', value: 'Infinity 19VS' },
              { label: 'Install Date', value: '2021-06-20' },
              { label: 'Purchase Price', value: '$2,450' }
            ]}
            maintenanceInfo={{
              text: '2 Scheduled maintenance tickets',
              vendor: 'AquaPro Services'
            }}
            onMoreActions={() => console.log('More actions clicked')}
            onExpand={() => console.log('Expand clicked')}
          />
          
          {/* Example 3: Water Heater */}
          <AssetCard
            assetName="Water Heater"
            category="Plumbing"
            propertyName="Garden View - 2A"
            date="22-11-2023"
            imageUrl="/assets/unit-image-3.png"
            variant="detailed"
            details={[
              { label: 'Manufacturer', value: 'Rheem' },
              { label: 'Model', value: 'PROTECH-50' },
              { label: 'Install Date', value: '2020-09-10' },
              { label: 'Purchase Price', value: '$650' }
            ]}
            onMoreActions={() => console.log('More actions clicked')}
            onExpand={() => console.log('Expand clicked')}
          />
        </div>
      </div>

      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Asset Card - Compact Variant</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example 1: Refrigerator Asset - Compact */}
          <AssetCard
            assetName="Refrigerator"
            category="Appliance"
            date="10-10-2028"
            imageUrl="/assets/unit-image-1.png"
            variant="compact"
            maintenanceInfo={{
              text: '1 Ongoing maintenance ticket',
              vendor: 'John Smith'
            }}
            onMoreActions={() => console.log('More actions clicked')}
            onExpand={() => console.log('Expand clicked')}
          />
          
          {/* Example 2: HVAC System - Compact */}
          <AssetCard
            assetName="HVAC System"
            category="HVAC"
            date="15-08-2023"
            imageUrl="/assets/unit-image-2.png"
            variant="compact"
            maintenanceInfo={{
              text: '2 Scheduled maintenance tickets',
              vendor: 'AquaPro Services'
            }}
            onMoreActions={() => console.log('More actions clicked')}
            onExpand={() => console.log('Expand clicked')}
          />
          
          {/* Example 3: Water Heater - Compact */}
          <AssetCard
            assetName="Water Heater"
            category="Plumbing"
            date="22-11-2023"
            imageUrl="/assets/unit-image-3.png"
            variant="compact"
            onMoreActions={() => console.log('More actions clicked')}
            onExpand={() => console.log('Expand clicked')}
          />
        </div>
      </div>
    </div>
  );

  const renderTableExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Communication Campaigns Table</h3>
        <div className="max-w-6xl">
          <Table
            title="Campaign Performance"
            subtitle="Track your communication campaign metrics"
            columns={[
              { key: 'name', label: 'Name', width: '290px' },
              { key: 'status', label: 'Status', align: 'center' },
              { key: 'recipients', label: 'Recipients', align: 'center' },
              { key: 'sent', label: 'Sent', align: 'center' },
              { key: 'delivered', label: 'Delivered', align: 'center' },
              { key: 'opened', label: 'Opened', align: 'center' },
              { key: 'replied', label: 'Replied', align: 'center' },
              { key: 'actions', label: 'Actions', width: '99px' }
            ]}
            rows={[
              {
                id: '1',
                cells: {
                  name: {
                    type: 'text',
                    value: 'February Rent Reminders'
                  },
                  status: {
                    type: 'badge',
                    value: 'Active',
                    variant: 'success'
                  },
                  recipients: { type: 'number', value: '87' },
                  sent: { type: 'number', value: '87' },
                  delivered: { type: 'number', value: '85' },
                  opened: { type: 'number', value: '72' },
                  replied: { type: 'number', value: '12' },
                  actions: {
                    type: 'actions',
                    value: '',
                    actions: [
                      {
                        id: 'view',
                        label: 'View Details',
                        icon: '/assets/eye-icon.svg',
                        onClick: () => console.log('View campaign details')
                      }
                    ]
                  }
                }
              },
              {
                id: '2',
                cells: {
                  name: {
                    type: 'text',
                    value: 'Q1 Lease Renewals'
                  },
                  status: {
                    type: 'badge',
                    value: 'Sending',
                    variant: 'info'
                  },
                  recipients: { type: 'number', value: '87' },
                  sent: { type: 'number', value: '87' },
                  delivered: { type: 'number', value: '85' },
                  opened: { type: 'number', value: '72' },
                  replied: { type: 'number', value: '12' },
                  actions: {
                    type: 'actions',
                    value: '',
                    actions: [
                      {
                        id: 'view',
                        label: 'View Details',
                        icon: '/assets/eye-icon.svg',
                        onClick: () => console.log('View campaign details')
                      }
                    ]
                  }
                }
              }
            ]}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Tenant Selection Table</h3>
        <div className="max-w-4xl">
          <Table
            title="Select Recipients"
            subtitle="0 recipients selected"
            selectable={true}
            columns={[
              { key: 'name', label: 'Name', width: '200px' },
              { key: 'property', label: 'Property' },
              { key: 'type', label: 'Type', width: '120px' },
              { key: 'language', label: 'Language', width: '115px' }
            ]}
            rows={[
              {
                id: '1',
                cells: {
                  name: {
                    type: 'avatar',
                    value: 'John Smith',
                    initials: 'JS'
                  },
                  property: {
                    type: 'text',
                    value: 'Sunset Apartments - 4B'
                  },
                  type: {
                    type: 'badge',
                    value: 'Tenant',
                    variant: 'neutral'
                  },
                  language: {
                    type: 'badge',
                    value: 'EN',
                    variant: 'info'
                  }
                }
              },
              {
                id: '2',
                cells: {
                  name: {
                    type: 'avatar',
                    value: 'Maria Garcia',
                    initials: 'MG'
                  },
                  property: {
                    type: 'text',
                    value: 'Oak Villa - 12A'
                  },
                  type: {
                    type: 'badge',
                    value: 'Tenant',
                    variant: 'neutral'
                  },
                  language: {
                    type: 'badge',
                    value: 'EN',
                    variant: 'info'
                  }
                }
              }
            ]}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Payment History Table</h3>
        <div className="max-w-2xl">
          <Table
            columns={[
              { key: 'dueDate', label: 'Due Date' },
              { key: 'status', label: 'Status', align: 'center' },
              { key: 'amount', label: 'Rent Total', align: 'right' },
              { key: 'actions', label: 'Actions', width: '120px' }
            ]}
            rows={[
              {
                id: '1',
                cells: {
                  dueDate: {
                    type: 'date',
                    value: '2025-10-10'
                  },
                  status: {
                    type: 'badge',
                    value: 'Upcoming',
                    variant: 'neutral'
                  },
                  amount: {
                    type: 'currency',
                    value: '180.00'
                  },
                  actions: {
                    type: 'text',
                    value: '-'
                  }
                }
              },
              {
                id: '2',
                cells: {
                  dueDate: {
                    type: 'date',
                    value: '2025-09-10'
                  },
                  status: {
                    type: 'badge',
                    value: 'Paid',
                    variant: 'success'
                  },
                  amount: {
                    type: 'currency',
                    value: '180.00'
                  },
                  actions: {
                    type: 'actions',
                    value: '',
                    actions: [
                      {
                        id: 'view',
                        label: 'View Receipt',
                        icon: '/assets/view-details-icon.svg',
                        onClick: () => console.log('View receipt')
                      },
                      {
                        id: 'download',
                        label: 'Download',
                        icon: '/assets/view-details-icon.svg',
                        onClick: () => console.log('Download receipt')
                      }
                    ]
                  }
                }
              }
            ]}
          />
        </div>
      </div>
    </div>
  );

  const renderTemplateCardExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Template Card Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example 1: Rent Reminder Template */}
          <TemplateCard
            title="Rent Reminder - Friendly"
            category="Rent Reminder"
            templateName="Rent Reminder - Friendly"
            details={[
              { 
                label: 'Subject', 
                value: 'Friendly Rent Reminder - {{property_name}}' 
              },
              { 
                label: 'Content:', 
                value: 'Hi {{tenant_name}}, this is a friendly reminder that your rent payment of ${{ rent_amount }} for {{property_name}} Unit {{unit_number}} is due on {{due_date}}. You can pay online at {{payment_link}} or contact us if you need assistance.' 
              }
            ]}
            channels={[
              { src: '/assets/email-icon.svg', alt: 'Email' },
              { src: '/assets/notification-icon.svg', alt: 'SMS' }
            ]}
            onUseTemplate={() => console.log('Use template clicked')}
            onViewDetails={() => console.log('View details clicked')}
            onTranslate={() => console.log('Translate clicked')}
          />
          
          {/* Example 2: Maintenance Notice Template */}
          <TemplateCard
            title="Maintenance Notice - Scheduled"
            category="Maintenance"
            templateName="Maintenance Notice - Scheduled"
            details={[
              { 
                label: 'Subject', 
                value: 'Scheduled Maintenance - {{property_name}}' 
              },
              { 
                label: 'Content:', 
                value: 'Dear {{tenant_name}}, we will be performing scheduled maintenance on {{equipment_type}} in your unit {{unit_number}} on {{maintenance_date}} from {{start_time}} to {{end_time}}. Please ensure access is available.' 
              }
            ]}
            channels={[
              { src: '/assets/email-icon.svg', alt: 'Email' },
              { src: '/assets/notification-icon.svg', alt: 'SMS' }
            ]}
            onUseTemplate={() => console.log('Use template clicked')}
            onViewDetails={() => console.log('View details clicked')}
            onTranslate={() => console.log('Translate clicked')}
          />
          
          {/* Example 3: Welcome Message Template */}
          <TemplateCard
            title="Welcome Message - New Tenant"
            category="Welcome"
            templateName="Welcome Message - New Tenant"
            details={[
              { 
                label: 'Subject', 
                value: 'Welcome to {{property_name}} - {{tenant_name}}' 
              },
              { 
                label: 'Content:', 
                value: 'Welcome {{tenant_name}}! We are excited to have you as our new tenant at {{property_name}} Unit {{unit_number}}. Your lease starts on {{lease_start_date}}. Please find attached your welcome package and important contact information.' 
              }
            ]}
            channels={[
              { src: '/assets/email-icon.svg', alt: 'Email' },
              { src: '/assets/notification-icon.svg', alt: 'SMS' }
            ]}
            onUseTemplate={() => console.log('Use template clicked')}
            onViewDetails={() => console.log('View details clicked')}
            onTranslate={() => console.log('Translate clicked')}
          />
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'header': return renderHeaderExamples();
      case 'navigation': return renderNavigationExamples();
      case 'page-header': return renderPageHeaderExamples();
      case 'page-search': return renderPageSearchExamples();
      case 'list-view': return renderListViewExamples();
      case 'form-fields': return renderFormFieldExamples();
      case 'checkbox': return renderCheckboxExamples();
      case 'buttons': return renderButtonExamples();
      case 'icons': return renderIconExamples();
      case 'stat-cards': return renderStatCardExamples();
      case 'property-cards': return renderPropertyCardExamples();
      case 'dashboard-cards': return renderDashboardCardExamples();
      case 'activity-feed': return renderActivityFeedExamples();
      case 'alerts': return renderAlertExamples();
      case 'documents': return renderDocumentExamples();
      case 'user-card': return renderUserCardExamples();
      case 'step-wizard': return renderStepWizardExamples();
      case 'progress-bar': return renderProgressBarExamples();
      case 'popup': return renderPopupExamples();
      case 'more-actions': return renderMoreActionsExamples();
      case 'asset-card': return renderAssetCardExamples();
      case 'checkbox': return renderCheckboxExamples();
      case 'key-value-pair': return renderKeyValuePairExamples();
      case 'bot-conversation': return renderBotConversationExamples();
      case 'chips': return renderChipExamples();
      case 'tabs': return renderTabsExamples();
      case 'tenant-card': return renderTenantCardExamples();
      case 'invoice-card': return renderInvoiceCardExamples();
      case 'maintenance-ticket-card': return renderMaintenanceTicketCardExamples();
      case 'template-card': return renderTemplateCardExamples();
      case 'table': return renderTableExamples();
      default: return renderHeaderExamples();
    }
  };

  return (
    <div className="bg-paper-paper-elevation-0 h-screen flex flex-col overflow-hidden">
      {/* Library Header */}
      <div className="bg-paper-paper-elevation-1 border-b border-overlays-white-inverse-10 p-6 relative shrink-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-h2 font-bold text-primary mb-2">Components Library</h1>
              <p className="text-secondary text-base">
                Interactive showcase of all reusable components with theme variations and responsive behavior
              </p>
            </div>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-lg bg-paper-paper-elevation-2 border border-overlays-white-inverse-10 shadow-card-small hover:shadow-card-large transition-all duration-200 flex items-center justify-center"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <div className="w-6 h-6 text-primary flex items-center justify-center">
                {theme === 'light' ? '🌙' : '☀️'}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area with Two Scrollable Sections */}
      <div className="flex-1 flex min-h-0">
        {/* Sidebar Navigation - Fixed Width with Independent Scrolling */}
        <div className="w-80 shrink-0 bg-paper-paper-elevation-1 border-r border-overlays-white-inverse-10 flex flex-col">
          <div className="p-6 flex-1 overflow-y-auto">
            <div className="mb-6">
              <h2 className="text-h4 font-semibold text-primary mb-2">Components</h2>
              <p className="text-sm text-tertiary">
                {sections.length} components available
              </p>
            </div>
            
            {/* Search/Filter */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search components..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full px-3 py-2 border border-overlays-white-inverse-10 rounded-lg bg-paper-paper-elevation-2 text-primary placeholder-tertiary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Component List */}
            <nav className="space-y-1">
              {sections
                .filter(section => 
                  section.label.toLowerCase().includes(searchValue.toLowerCase()) ||
                  section.icon.includes(searchValue)
                )
                .map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                      activeSection === section.id
                        ? 'bg-gradient-brand-aurora text-white shadow-card-small'
                        : 'text-secondary hover:bg-paper-paper-elevation-2 hover:text-primary'
                    }`}
                  >
                    <span className="mr-3 text-lg">{section.icon}</span>
                    <div className="flex-1">
                      <div className="font-medium">{section.label}</div>
                      <div className={`text-xs mt-1 ${
                        activeSection === section.id ? 'text-white-80' : 'text-tertiary'
                      }`}>
                        {section.id.replace('-', ' ')}
                      </div>
                    </div>
                    {activeSection === section.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                ))}
            </nav>
          </div>
        </div>

        {/* Main Content - Flexible Width with Independent Scrolling */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 overflow-y-auto">
            <div className="p-8 max-w-none">
              {/* Component Preview Header */}
              <div className="mb-8 pb-6 border-b border-overlays-white-inverse-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-h3 font-bold text-primary mb-2">
                      {sections.find(s => s.id === activeSection)?.icon} {sections.find(s => s.id === activeSection)?.label}
                    </h2>
                    <p className="text-tertiary">
                      Interactive examples and variations of the {sections.find(s => s.id === activeSection)?.label.toLowerCase()} component
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-tertiary">
                    <span>Theme:</span>
                    <span className="px-2 py-1 bg-paper-paper-elevation-2 rounded text-primary">
                      {theme === 'light' ? 'Light' : 'Dark'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Component Examples */}
              <div className="space-y-8">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
