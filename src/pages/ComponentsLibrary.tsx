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

  const sections = [
    { id: 'header', label: 'Header', icon: '📋' },
    { id: 'navigation', label: 'Navigation', icon: '🧭' },
    { id: 'page-header', label: 'Page Header', icon: '📄' },
    { id: 'page-search', label: 'Page Search', icon: '🔍' },
    { id: 'list-view', label: 'List View', icon: '📋' },
    { id: 'form-fields', label: 'Form Fields', icon: '📝' },
    { id: 'checkboxes', label: 'Checkboxes', icon: '☑️' },
    { id: 'buttons', label: 'Buttons', icon: '🔘' },
    { id: 'icons', label: 'Theme Icons', icon: '🎨' },
    { id: 'stat-cards', label: 'Stat Cards', icon: '📊' },
    { id: 'property-cards', label: 'Property Cards', icon: '🏠' },
    { id: 'dashboard-cards', label: 'Dashboard Cards', icon: '📈' },
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
        <h3 className="text-h4 font-bold text-primary mb-4">Simple Page Header</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg p-6">
          <PageHeader 
            title="Properties & Units"
            description="Welcome back, John. Here's what's happening with your properties today."
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Page Header with Actions</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg p-6">
          <PageHeader 
            title="Dashboard"
            description="Overview of your property management performance"
            actions={[
              { id: 'edit', label: 'Edit Property', icon: 'edit', variant: 'outline' },
              { id: 'add', label: 'Add Property', icon: 'add', variant: 'primary', gradient: 'aqua-2' }
            ]}
          />
        </div>
      </div>

      <div>
        <h3 className="text-h4 font-bold text-primary mb-4">Page Header with Multiple Actions</h3>
        <div className="border border-overlays-white-inverse-10 rounded-lg p-6">
          <PageHeader 
            title="Top Performing Properties"
            actions={[
              { id: 'filter', label: 'Last 3 months', icon: 'calendar', variant: 'outline', rightIcon: 'dropdown' },
              { id: 'add', label: 'Add Property', icon: 'add', variant: 'primary', gradient: 'brand-aurora' }
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

  const renderContent = () => {
    switch (activeSection) {
      case 'header': return renderHeaderExamples();
      case 'navigation': return renderNavigationExamples();
      case 'page-header': return renderPageHeaderExamples();
      case 'page-search': return renderPageSearchExamples();
      case 'list-view': return renderListViewExamples();
      case 'form-fields': return renderFormFieldExamples();
      case 'checkboxes': return renderCheckboxExamples();
      case 'buttons': return renderButtonExamples();
      case 'icons': return renderIconExamples();
      case 'stat-cards': return renderStatCardExamples();
      case 'property-cards': return renderPropertyCardExamples();
      case 'dashboard-cards': return renderDashboardCardExamples();
      default: return renderHeaderExamples();
    }
  };

  return (
    <div className="bg-paper-paper-elevation-0 min-h-screen">
      {/* Library Header */}
      <div className="bg-paper-paper-elevation-1 border-b border-overlays-white-inverse-10 p-6 relative">
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

      <div className="max-w-7xl mx-auto p-6 bg-paper-paper-elevation-1 rounded-lg">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 shrink-0">
            <div className="bg-paper-paper-elevation-1 border border-overlays-white-inverse-10 rounded-lg p-4">
              <h2 className="text-h4 font-semibold text-primary mb-4">Components</h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeSection === section.id
                        ? 'bg-gradient-aqua-2 text-white'
                        : 'text-secondary hover:bg-paper-paper-elevation-1'
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
