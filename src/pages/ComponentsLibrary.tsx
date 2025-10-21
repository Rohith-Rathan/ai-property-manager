import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from '../components/layout/Header';
import LeftNavigation from '../components/layout/LeftNavigation';
import PageHeader from '../components/layout/PageHeader';
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
import { Tabs } from '../components/ui/Tabs';
import { Table } from '../components/ui/Table';
import { MoreActions } from '../components/ui/MoreActions';
import { MoreActionsButton } from '../components/ui/MoreActionsButton';
import { QuickActionsButton } from '../components/ui/QuickActionsButton';
import TenantCard from '../components/ui/TenantCard';
import AssetCard from '../components/ui/AssetCard';
import InvoiceCard from '../components/ui/InvoiceCard';
import MaintenanceTicketCard from '../components/ui/MaintenanceTicketCard';
import TemplateCard from '../components/ui/TemplateCard';
import Avatar from '../components/ui/Avatar';
import Chip from '../components/ui/Chip';
import PropertyBadge from '../components/ui/PropertyBadge';
import ResponsiveContainer from '../components/ui/ResponsiveContainer';
import { KeyValuePair } from '../components/ui/KeyValuePair';
import BotConversation from '../components/ui/BotConversation';
import { Card } from '../components/ui/Card';
import TopNavigation from '../components/layout/TopNavigation';
import Layout from '../components/layout/Layout';
import AppLayout from '../components/layout/AppLayout';
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

  const sections = [
    // Layout Components
    { id: 'header', label: 'Header', icon: '📋' },
    { id: 'left-navigation', label: 'Left Navigation', icon: '🧭' },
    { id: 'top-navigation', label: 'Top Navigation', icon: '🔝' },
    { id: 'page-header', label: 'Page Header', icon: '📄' },
    { id: 'app-layout', label: 'App Layout', icon: '🏗️' },
    { id: 'layout', label: 'Layout', icon: '📐' },
    
    // Form Components
    { id: 'buttons', label: 'Buttons', icon: '🔘' },
    { id: 'form-fields', label: 'Form Fields', icon: '📝' },
    { id: 'checkboxes', label: 'Checkboxes', icon: '☑️' },
    
    // Navigation & Search
    { id: 'page-search', label: 'Page Search', icon: '🔍' },
    { id: 'search-input', label: 'Search Input', icon: '🔎' },
    { id: 'tabs', label: 'Tabs', icon: '📑' },
    { id: 'quick-actions', label: 'Quick Actions', icon: '⚡' },
    { id: 'more-actions', label: 'More Actions', icon: '⋯' },
    
    // Card Components
    { id: 'cards', label: 'Basic Cards', icon: '🃏' },
    { id: 'stat-cards', label: 'Stat Cards', icon: '📊' },
    { id: 'property-cards', label: 'Property Cards', icon: '🏠' },
    { id: 'dashboard-cards', label: 'Dashboard Cards', icon: '📈' },
    { id: 'tenant-cards', label: 'Tenant Cards', icon: '👥' },
    { id: 'asset-cards', label: 'Asset Cards', icon: '🔧' },
    { id: 'invoice-cards', label: 'Invoice Cards', icon: '🧾' },
    { id: 'maintenance-cards', label: 'Maintenance Cards', icon: '🔨' },
    { id: 'template-cards', label: 'Template Cards', icon: '📋' },
    { id: 'user-cards', label: 'User Cards', icon: '👤' },
    
    // UI Elements
    { id: 'avatars', label: 'Avatars', icon: '👤' },
    { id: 'chips', label: 'Chips', icon: '🏷️' },
    { id: 'badges', label: 'Property Badges', icon: '🎯' },
    { id: 'icons', label: 'Theme Icons', icon: '🎨' },
    { id: 'tables', label: 'Tables', icon: '📊' },
    { id: 'list-view', label: 'List View', icon: '📋' },
    { id: 'responsive-container', label: 'Responsive Container', icon: '📱' },
    
    // Feedback & Progress
    { id: 'progress-bar', label: 'Progress Bar', icon: '📊' },
    { id: 'step-wizard', label: 'Step Wizard', icon: '🧙‍♂️' },
    { id: 'alerts', label: 'Alerts', icon: '🚨' },
    { id: 'popup', label: 'Popup', icon: '🪟' },
    
    // Content & Data
    { id: 'activity-feed', label: 'Activity Feed', icon: '📝' },
    { id: 'documents', label: 'Documents', icon: '📄' },
    { id: 'key-value-pairs', label: 'Key Value Pairs', icon: '🔑' },
    { id: 'bot-conversation', label: 'Bot Conversation', icon: '🤖' },
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
            description="Manage your property portfolio with detailed unit tracking"
            actions={[
              {
                id: "add-property",
                label: "Add Property",
                onClick: () => console.log("Add Property clicked"),
                icon: "add",
                variant: "primary"
              },
              {
                id: "import",
                label: "Import",
                onClick: () => console.log("Import clicked"),
                icon: "search",
                variant: "outline"
              }
            ]}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Page Header with Back Icon</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg p-6">
          <PageHeader
            title="Property Details"
            description="Sunset Apartments - 123 Sunset Blvd, Los Angeles, CA"
            showBackButton={true}
            onBack={() => console.log("Back clicked")}
            backButtonLabel="Back to Properties"
            actions={[
              {
                id: "edit-property",
                label: "Edit Property",
                onClick: () => console.log("Edit Property clicked"),
                icon: "edit",
                variant: "outline"
              }
            ]}
          />
        </div>
      </div>

      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Page Header with Back Icon - Unit View</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg p-6">
          <PageHeader
            title="Unit Management"
            description="Oak Villa Complex - Unit 2A Details"
            showBackButton={true}
            onBack={() => console.log("Back to property clicked")}
            backButtonLabel="Back to Oak Villa Complex"
            actions={[
              {
                id: "add-tenant",
                label: "Add Tenant",
                onClick: () => console.log("Add Tenant clicked"),
                icon: "add",
                variant: "primary"
              },
              {
                id: "edit-unit",
                label: "Edit Unit",
                onClick: () => console.log("Edit Unit clicked"),
                icon: "edit",
                variant: "outline"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );

  const renderStatCardExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Stat Cards Grid</h3>
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
            userName="System"
            action="Sent rent reminder to Tenant John Doe"
            description="Automated rent reminder sent via email"
            timestamp="2 hours ago"
            badges={[{ label: "communication", variant: "info" }]}
            priority="medium"
          />
          
          <ActivityFeedItem
            userName="AI Assistant"
            action="Auto-scheduled maintenance for HVAC repair"
            description="HVAC system maintenance scheduled for next week"
            timestamp="4 hours ago"
            badges={[{ label: "maintenance", variant: "warning" }]}
            priority="high"
          />
          
          <ActivityFeedItem
            userName="System"
            action="Generated lease renewal letter"
            description="Lease renewal document created and sent"
            timestamp="6 hours ago"
            badges={[{ label: "lease", variant: "success" }]}
            priority="low"
          />
          
          <ActivityFeedItem
            userName="Payment System"
            action="Processed rental payment for Unit 4B"
            description="Monthly rent payment processed successfully"
            timestamp="1 day ago"
            badges={[{ label: "financial", variant: "success" }]}
            priority="medium"
          />
          
          <ActivityFeedItem
            userName="AI Analytics"
            action="AI analyzed property performance metrics"
            description="Property performance analysis completed"
            timestamp="2 days ago"
            badges={[{ label: "system", variant: "primary" }]}
            priority="low"
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
              userName="System"
              action="Sent rent reminder to Tenant John Doe"
              description="Automated rent reminder sent via email"
              timestamp="2 hours ago"
              badges={[{ label: "communication", variant: "info" }]}
              priority="medium"
            />
            <ActivityFeedItem
              userName="AI Assistant"
              action="Auto-scheduled maintenance for HVAC repair"
              description="HVAC system maintenance scheduled for next week"
              timestamp="4 hours ago"
              badges={[{ label: "maintenance", variant: "warning" }]}
              priority="high"
            />
            <ActivityFeedItem
              userName="System"
              action="Generated lease renewal letter"
              description="Lease renewal document created and sent"
              timestamp="6 hours ago"
              badges={[{ label: "lease", variant: "success" }]}
              priority="low"
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

  const renderCheckboxExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Checkbox Variants</h3>
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

  // Missing render functions - Basic implementations
  const renderLeftNavigationExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Left Navigation</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden">
          <LeftNavigation />
        </div>
      </div>
    </div>
  );

  const renderTopNavigationExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Top Navigation</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden">
          <TopNavigation />
        </div>
      </div>
    </div>
  );

  const renderAppLayoutExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">App Layout</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden h-96">
          <AppLayout activePage="components-library">
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-4">App Layout Content</h4>
              <p className="text-gray-600">This shows how the AppLayout component wraps content.</p>
            </div>
          </AppLayout>
        </div>
      </div>
    </div>
  );

  const renderLayoutExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Layout Component</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg overflow-hidden h-96">
          <Layout>
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-4">Layout Content</h4>
              <p className="text-gray-600">This shows how the Layout component wraps content.</p>
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );

  const renderSearchInputExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Search Input</h3>
        <div className="space-y-4">
          <SearchInput
            placeholder="Search properties..."
            value={searchValue}
            onChange={setSearchValue}
            onSearch={(query) => alert(`Searching for: ${query}`)}
          />
        </div>
      </div>
    </div>
  );

  const renderTabsExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Tabs</h3>
        <div className="space-y-4">
          <Tabs
            tabs={[
              { id: 'tab1', label: 'Overview' },
              { id: 'tab2', label: 'Details' },
              { id: 'tab3', label: 'Settings' }
            ]}
            activeTab="tab1"
            onTabChange={() => {}}
          />
        </div>
      </div>
    </div>
  );

  const renderQuickActionsExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <QuickActionsButton
            triggerIcon={getAssetPath('add-icon')}
            triggerLabel="Add Property"
          />
          <QuickActionsButton
            triggerIcon={getAssetPath('tenant-icon')}
            triggerLabel="Add Tenant"
          />
        </div>
      </div>
    </div>
  );

  const renderMoreActionsExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">More Actions</h3>
        <div className="flex flex-wrap gap-3">
          <MoreActionsButton
            items={[
              { id: 'edit', label: 'Edit', onClick: () => {}, icon: getAssetPath('edit-icon') },
              { id: 'delete', label: 'Delete', onClick: () => {}, icon: getAssetPath('delete-icon'), variant: 'danger' }
            ]}
            triggerIcon={getAssetPath('more-options-icon')}
          />
        </div>
      </div>
    </div>
  );

  const renderCardsExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Basic Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4">
            <h3 className="font-medium mb-2">Card with padding</h3>
            <p className="text-sm text-gray-600">This is a card with default padding</p>
          </Card>
          <Card className="p-0" padding="none">
            <div className="p-4">
              <h3 className="font-medium mb-2">Card without padding</h3>
              <p className="text-sm text-gray-600">This is a card with no padding</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderAvatarsExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Avatars</h3>
        <div className="flex flex-wrap gap-4">
          <Avatar size="sm" initials="JD" />
          <Avatar size="md" initials="SM" />
          <Avatar size="lg" initials="AB" />
          <Avatar src={getAssetPath('tenant-avatar-1')} alt="User" size="md" />
        </div>
      </div>
    </div>
  );

  const renderChipsExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Chips</h3>
        <div className="flex flex-wrap gap-2">
          <Chip variant="primary" label="Primary" />
          <Chip variant="success" label="Success" />
          <Chip variant="warning" label="Warning" />
          <Chip variant="error" label="Error" />
          <Chip variant="info" label="Info" />
        </div>
      </div>
    </div>
  );

  const renderBadgesExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Property Badges</h3>
        <div className="flex flex-wrap gap-2">
          <PropertyBadge type="apartment" label="Apartment" />
          <PropertyBadge type="individual" label="Individual" />
          <PropertyBadge type="commercial" label="Commercial" />
          <PropertyBadge type="residential" label="Residential" />
          <PropertyBadge type="custom" label="Custom" customColor="#ff6b6b" />
        </div>
      </div>
    </div>
  );

  const renderTablesExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Tables</h3>
        <Table
          columns={[
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'unit', label: 'Unit' },
            { key: 'status', label: 'Status' }
          ]}
          rows={[
            {
              id: '1',
              cells: {
                name: { type: 'text', value: 'Sarah Johnson' },
                email: { type: 'text', value: 'sarah@email.com' },
                unit: { type: 'text', value: '2A' },
                status: { type: 'badge', value: 'Active', variant: 'success' }
              }
            },
            {
              id: '2',
              cells: {
                name: { type: 'text', value: 'Mike Smith' },
                email: { type: 'text', value: 'mike@email.com' },
                unit: { type: 'text', value: '2B' },
                status: { type: 'badge', value: 'Active', variant: 'success' }
              }
            }
          ]}
        />
      </div>
    </div>
  );

  const renderResponsiveContainerExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Responsive Container</h3>
        <ResponsiveContainer>
          <div className="p-6 bg-gray-100 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Responsive Content</h4>
            <p className="text-gray-600">This content adapts to different screen sizes.</p>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderKeyValuePairsExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Key Value Pairs</h3>
        <div className="space-y-2">
          <KeyValuePair label="Property Name" value="Sunset Apartments" />
          <KeyValuePair label="Address" value="123 Main St, San Francisco, CA" />
          <KeyValuePair label="Units" value="24" />
          <KeyValuePair label="Occupancy" value="85%" />
        </div>
      </div>
    </div>
  );

  const renderBotConversationExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Bot Conversation</h3>
        <BotConversation
          messages={[
            { id: '1', type: 'bot', content: 'Hello! How can I help you today?' },
            { id: '2', type: 'user', content: 'I need help with my property management', userInitials: 'JD' }
          ]}
        />
      </div>
    </div>
  );

  // Card Components Examples
  const renderTenantCardsExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Tenant Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TenantCard
            userInitials="JD"
            userName="John Doe"
            propertyName="Sunset Apartments"
            unitName="Unit 2A"
            badges={[
              { label: "Active", variant: "success" },
              { label: "On Time", variant: "info" }
            ]}
            document={{
              title: "Lease Agreement",
              subtitle: "Signed 2024-01-15"
            }}
            additionalInfo={{
              text: "Rent: $2,500/month"
            }}
            onMoreActions={() => console.log("More actions clicked")}
            onDocumentClick={() => console.log("Document clicked")}
          />
          <TenantCard
            userInitials="SM"
            userName="Sarah Miller"
            propertyName="Oak Villa Complex"
            unitName="Unit 3B"
            badges={[
              { label: "Pending", variant: "warning" }
            ]}
            onMoreActions={() => console.log("More actions clicked")}
          />
        </div>
      </div>
    </div>
  );

  const renderAssetCardsExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Asset Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AssetCard
            assetName="HVAC System"
            category="HVAC"
            propertyName="Sunset Apartments"
            date="2024-01-15"
            details={[
              { label: "Model", value: "Carrier 24ABC" },
              { label: "Last Service", value: "Jan 15, 2024" }
            ]}
            maintenanceInfo={{
              text: "Next service due: July 15, 2024",
              vendor: "ABC HVAC Services"
            }}
            onMoreActions={() => console.log("More actions clicked")}
          />
          <AssetCard
            assetName="Water Heater"
            category="Plumbing"
            propertyName="Oak Villa Complex"
            date="2024-01-10"
            details={[
              { label: "Capacity", value: "50 Gallons" },
              { label: "Last Service", value: "Jan 10, 2024" }
            ]}
            maintenanceInfo={{
              text: "Next service due: April 10, 2024",
              vendor: "PlumbPro Services"
            }}
            onMoreActions={() => console.log("More actions clicked")}
          />
        </div>
      </div>
    </div>
  );

  const renderInvoiceCardsExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Invoice Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InvoiceCard
            invoiceId="INV-2024-001"
            status={{ label: "Paid", variant: "success" }}
            tenantName="John Doe"
            propertyName="Sunset Apartments"
            unitName="Unit 2A"
            dueDate="2024-02-01"
            totalAmount="$2,500.00"
            paidAmount="$2,500.00"
            balance="$0.00"
            onView={() => console.log("View invoice")}
            onRecordPayment={() => console.log("Record payment")}
            onSendReminder={() => console.log("Send reminder")}
            onMoreActions={() => console.log("More actions")}
          />
          <InvoiceCard
            invoiceId="INV-2024-002"
            status={{ label: "Pending", variant: "warning" }}
            tenantName="Sarah Miller"
            propertyName="Oak Villa Complex"
            unitName="Unit 3B"
            dueDate="2024-02-15"
            totalAmount="$2,200.00"
            paidAmount="$0.00"
            balance="$2,200.00"
            onView={() => console.log("View invoice")}
            onRecordPayment={() => console.log("Record payment")}
            onSendReminder={() => console.log("Send reminder")}
            onMoreActions={() => console.log("More actions")}
          />
        </div>
      </div>
    </div>
  );

  const renderMaintenanceCardsExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Maintenance Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MaintenanceTicketCard
            ticketId="MT-2024-001"
            propertyName="Sunset Apartments"
            equipmentType="Kitchen Faucet"
            description="Kitchen faucet is dripping continuously and needs repair"
            badges={[
              { label: "Open", variant: "warning" },
              { label: "Medium Priority", variant: "info" }
            ]}
            onMoreActions={() => console.log("More actions clicked")}
            onViewDetails={() => console.log("View details clicked")}
          />
          <MaintenanceTicketCard
            ticketId="MT-2024-002"
            propertyName="Oak Villa Complex"
            equipmentType="Door Lock"
            description="Front door lock is not working properly and needs replacement"
            badges={[
              { label: "In Progress", variant: "info" },
              { label: "High Priority", variant: "error" }
            ]}
            onMoreActions={() => console.log("More actions clicked")}
            onViewDetails={() => console.log("View details clicked")}
          />
        </div>
      </div>
    </div>
  );

  const renderTemplateCardsExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Template Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TemplateCard
            title="Lease Agreement Template"
            category="Legal Documents"
            templateName="Standard Residential Lease"
            details={[
              { label: "Type", value: "Residential Lease" },
              { label: "Last Updated", value: "Jan 15, 2024" },
              { label: "Usage", value: "High" }
            ]}
            channels={[
              { src: getAssetPath('email-icon'), alt: "Email" },
              { src: getAssetPath('print-icon'), alt: "Print" }
            ]}
            onUseTemplate={() => console.log("Use template")}
            onViewDetails={() => console.log("View details")}
            onMoreActions={() => console.log("More actions")}
          />
          <TemplateCard
            title="Maintenance Request Form"
            category="Maintenance"
            templateName="Standard Maintenance Request"
            details={[
              { label: "Type", value: "Maintenance Form" },
              { label: "Last Updated", value: "Jan 10, 2024" },
              { label: "Usage", value: "Medium" }
            ]}
            channels={[
              { src: getAssetPath('email-icon'), alt: "Email" },
              { src: getAssetPath('sms-icon'), alt: "SMS" }
            ]}
            onUseTemplate={() => console.log("Use template")}
            onViewDetails={() => console.log("View details")}
            onMoreActions={() => console.log("More actions")}
          />
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      // Layout Components
      case 'header': return renderHeaderExamples();
      case 'left-navigation': return renderLeftNavigationExamples();
      case 'top-navigation': return renderTopNavigationExamples();
      case 'page-header': return renderPageHeaderExamples();
      case 'app-layout': return renderAppLayoutExamples();
      case 'layout': return renderLayoutExamples();
      
      // Form Components
      case 'buttons': return renderButtonExamples();
      case 'form-fields': return renderFormFieldExamples();
      case 'checkboxes': return renderCheckboxExamples();
      
      // Navigation & Search
      case 'page-search': return renderPageSearchExamples();
      case 'search-input': return renderSearchInputExamples();
      case 'tabs': return renderTabsExamples();
      case 'quick-actions': return renderQuickActionsExamples();
      case 'more-actions': return renderMoreActionsExamples();
      
      // Card Components
      case 'cards': return renderCardsExamples();
      case 'stat-cards': return renderStatCardExamples();
      case 'property-cards': return renderPropertyCardExamples();
      case 'dashboard-cards': return renderDashboardCardExamples();
      case 'tenant-cards': return renderTenantCardsExamples();
      case 'asset-cards': return renderAssetCardsExamples();
      case 'invoice-cards': return renderInvoiceCardsExamples();
      case 'maintenance-cards': return renderMaintenanceCardsExamples();
      case 'template-cards': return renderTemplateCardsExamples();
      case 'user-cards': return renderUserCardExamples();
      
      // UI Elements
      case 'avatars': return renderAvatarsExamples();
      case 'chips': return renderChipsExamples();
      case 'badges': return renderBadgesExamples();
      case 'icons': return renderIconExamples();
      case 'tables': return renderTablesExamples();
      case 'list-view': return renderListViewExamples();
      case 'responsive-container': return renderResponsiveContainerExamples();
      
      // Feedback & Progress
      case 'progress-bar': return renderProgressBarExamples();
      case 'step-wizard': return renderStepWizardExamples();
      case 'alerts': return renderAlertExamples();
      case 'popup': return renderPopupExamples();
      
      // Content & Data
      case 'activity-feed': return renderActivityFeedExamples();
      case 'documents': return renderDocumentExamples();
      case 'key-value-pairs': return renderKeyValuePairsExamples();
      case 'bot-conversation': return renderBotConversationExamples();
      
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
