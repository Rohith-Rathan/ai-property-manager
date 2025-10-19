import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/completeAssetMapping';
import AppLayout from '../components/layout/AppLayout';
import StatCard from '../components/cards/StatCard';
import Card from '../components/ui/Card';
import Button from '../components/forms/Button';
import ProgressBar from '../components/ui/ProgressBar';
import ThemeIcon from '../components/ui/ThemeIcon';
import Chip from '../components/ui/Chip';
import { ActivityFeedItem, AlertItem, QuickActionsButton } from '../components/ui';
import PageHeader from '../components/layout/PageHeader';
import DashboardPropertyCard from '../components/cards/DashboardPropertyCard';

// Asset constants
const addPropertyActionIcon = getAssetPath('add-property-action-icon');
const addPropertyButtonIcon = getAssetPath('add-property-button-icon');
const propertyActionsIcon = getAssetPath('property-actions-icon');
const propertiesNavIcon = getAssetPath('properties-nav-icon');
const calendarIcon = getAssetPath('calendar-icon');
const starFilledIcon = getAssetPath('star-filled-icon');
const dollarIcon = getAssetPath('dollar-icon');
const locationIcon = getAssetPath('location-icon');
const alertIcon = getAssetPath('alert-icon');
const financialIcon = getAssetPath('financial-icon');
const aiEfficiencyIcon = getAssetPath('ai-efficiency-icon');
const emailIcon = getAssetPath('email-icon');
const communicationIcon = getAssetPath('communication-icon');
const trendingUpIcon = getAssetPath('trending-up-icon');

// Stat card icons
const vacancyCardIcon = getAssetPath('878cd835ab10ca42796d3d46ca1955b32ffb2ff2');
const rentCollectionCardIcon = getAssetPath('0f44f729311136017322fe20df2f07dfb5735258');
const maintenanceCardIcon = getAssetPath('bd7230e7a66d09f8f2922c1dbe464bf845edafdb');
const leasesCardIcon = getAssetPath('6d3c0204ac37f038cd091108592cad5b0022f2e9');
const aiEfficiencyCardIcon = getAssetPath('financial-icon');

export default function Dashboard() {
  const navigate = useNavigate();
  
  const handleSearch = (query: string) => {
    console.log('Dashboard search:', query);
  };

  return (
    <AppLayout 
      activePage="dashboard"
          searchPlaceholder="Search properties, tenants, tickets..."
          notificationCount={3}
          showThemeToggle={true}
                  userName="Jhon Deo"
                  userInitials="JD"
                  userGradient="aqua-2"
      onSearch={handleSearch}
      onNavigationClick={(itemId) => console.log(`Dashboard navigation: ${itemId}`)}
    >
      {/* Page Header */}
      <div className="responsive-flex row gap-4 items-start justify-between w-full" data-name="Page Header">
        {/* Title Section */}
        <div className="flex-1 min-w-0" data-name="Title Container">
          <p className="font-sans font-bold leading-h3 relative shrink-0 text-primary text-h3" data-name="Page Title">
            Welcome back, John
          </p>
          <p className="font-sans font-normal leading-base relative shrink-0 text-secondary text-base" data-name="Page Description">
            Welcome back, John. Here's what's happening with your properties today.
          </p>
                    </div>

        {/* Quick Actions Button */}
        <div className="pageheader-buttons-mobile" data-name="Actions Container">
          <QuickActionsButton 
            triggerLabel="Quick Actions"
            className="pageheader-button-mobile"
          />
        </div>
      </div>

                {/* Stats Cards */}
      <div className="responsive-grid cols-auto gap-6 w-full">
                  <div className="w-full">
                    <StatCard
                      title="3/10 Vacant Units"
                      subtitle="Vacancy"
                      value="3/10 Vacant Units"
                      icon={vacancyCardIcon}
                      gradient="info-flow"
                      badge={{ text: "70% Occupancy", color: "primary", trend: "up" }}
                      variant="default"
                    />
                  </div>
                  <div className="w-full">
                    <StatCard
                      title="$7,050 / $14,000"
                      subtitle="Rent Collection"
                      value="$7,050 / $14,000"
                      icon={rentCollectionCardIcon}
                      gradient="ai-violet-2"
                      badge={{ text: "50% Pending", color: "error", trend: "down" }}
                      variant="default"
                    />
                  </div>
                  <div className="w-full">
                    <StatCard
                      title="2/5 Open Tickets"
                      subtitle="Maintenance"
                      value="2/5 Open Tickets"
                      icon={maintenanceCardIcon}
                      gradient="brand-aurora"
                      badge={{ text: "3 Completed", color: "success", trend: "up" }}
                      variant="default"
                    />
                  </div>
                  <div className="w-full">
                    <StatCard
                      title="In next 2 months"
                      subtitle="Leases"
                      value="In next 2 months"
                      icon={leasesCardIcon}
                      gradient="magenta-pop"
                      badge={{ text: "2 Expiring Soon", color: "warning", trend: "up" }}
                      variant="default"
                    />
                  </div>
                  <div className="w-full">
                    <StatCard
                      title="500 hours saved month"
                      subtitle="AI Efficiency"
                      value="500 hours saved month"
                      icon={aiEfficiencyCardIcon}
                      gradient="emerald-glow"
                      badge={{ text: "+12.5%", color: "info", trend: "up" }}
                      variant="default"
                    />
                  </div>
                </div>

                {/* Top Performing Properties Section */}
                <div className="responsive-flex row gap-4 items-start justify-between w-full">
                  {/* Left side - Properties icon and title */}
                  <div className="flex items-center gap-2">
                    <ThemeIcon src={propertiesNavIcon} alt="Properties" size="sm" variant="default" />
                    <h2 className="font-semibold text-base text-primary">
                      Top Performing Properties
                    </h2>
                  </div>
                  
                  {/* Right side - Action buttons */}
                  <div className="responsive-flex row gap-3 items-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      icon="calendar"
                      iconPosition="left"
                      onClick={() => console.log('Time filter clicked')}
                    >
                        Last 3 months
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      icon="add"
                      iconPosition="left"
                      onClick={() => navigate('/add-property-1')}
                    >
                        Add Property
                    </Button>
                  </div>
                </div>

                {/* Property Cards Grid */}
                <div className="responsive-grid cols-auto gap-6 w-full">
                  {/* Property Card 1 - Sunset Apartments */}
                  <div className="w-full">
                    <DashboardPropertyCard
                      rank={1}
                      title="Sunset Apartments"
                      address="123 Sunset Blvd, Los Angeles, CA"
                      rating={4.8}
                      revenue="$24,580"
                      occupancy={{
                        percentage: 92,
                        color: 'success',
                        description: '22 of 24 units occupied'
                      }}
                      onView={(title) => console.log('View property:', title)}
                      onEdit={(title) => console.log('Edit property:', title)}
                    />
                      </div>

                  {/* Property Card 2 - Oak Villa Complex */}
                  <div className="w-full">
                    <DashboardPropertyCard
                      rank={2}
                      title="Oak Villa Complex"
                      address="456 Oak Street, San Francisco, CA"
                      rating={4.5}
                      revenue="$18,240"
                      occupancy={{
                        percentage: 80,
                        color: 'warning',
                        description: '20 of 25 units occupied'
                      }}
                      onView={(title) => console.log('View property:', title)}
                      onEdit={(title) => console.log('Edit property:', title)}
                    />
                        </div>

                  {/* Property Card 3 - Pine Heights */}
                  <div className="w-full">
                    <DashboardPropertyCard
                      rank={3}
                      title="Pine Heights"
                      address="789 Pine Avenue, Seattle, WA"
                      rating={4.0}
                      revenue="$16,720"
                      occupancy={{
                        percentage: 76,
                        color: 'error',
                        description: '19 of 25 units occupied'
                      }}
                      onView={(title) => console.log('View property:', title)}
                      onEdit={(title) => console.log('Edit property:', title)}
                    />
                      </div>
                    </div>

                {/* Two Column Layout - Alerts and Financial/AI Actions */}
                <div className="responsive-grid cols-auto gap-6 w-full">
                  {/* Left Column - Urgent Alerts */}
                  <div className="w-full">
                    <Card className="shadow-card-small flex flex-col gap-4 p-6 h-[676.83px]">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex gap-2 items-center">
                        <ThemeIcon src={alertIcon} alt="Alerts" size="sm" variant="default" />
                        <h2 className="font-semibold text-base text-primary">Urgent Alerts</h2>
                      </div>
                      <Button variant="secondary" size="sm" onClick={() => console.log('View all alerts')}>
                        View All
                      </Button>
                    </div>
                    <div className="flex flex-col gap-3 overflow-y-auto" style={{ maxHeight: 'calc(676.83px - 120px)' }}>
                      <AlertItem
                        priority="high"
                        category="Rent Collection"
                        message="Unit 4B - Rent overdue by 15 days"
                        timestamp="30 min"
                        onClick={() => console.log('Alert clicked: Rent overdue')}
                      />
                      <AlertItem
                        priority="medium"
                        category="Maintenance Ticket"
                        message="Unit 2A - HVAC system needs repair"
                        timestamp="30 min"
                        onClick={() => console.log('Alert clicked: HVAC repair')}
                      />
                      <AlertItem
                        priority="medium"
                        category="Vacancy"
                        message="Unit 7C - Vacant for 45 days"
                        timestamp="30 min"
                        onClick={() => console.log('Alert clicked: Vacancy')}
                      />
                      <AlertItem
                        priority="high"
                        category="Lease"
                        message="Unit 5A - Lease expires in 7 days"
                        timestamp="30 min"
                        onClick={() => console.log('Alert clicked: Lease expiry')}
                      />
                      <AlertItem
                        priority="medium"
                        category="Inspection Request"
                        message="Unit 3A - Scheduled for next week"
                        timestamp="45 min"
                        onClick={() => console.log('Alert clicked: Inspection')}
                      />
                      <AlertItem
                        priority="high"
                        category="Feedback Collection"
                        message="Unit 2C - Request for tenant reviews"
                        timestamp="1 hr"
                        onClick={() => console.log('Alert clicked: Feedback collection')}
                      />
                      <AlertItem
                        priority="medium"
                        category="Payment Issue"
                        message="Unit 1B - Failed payment attempt"
                        timestamp="2 hrs"
                        onClick={() => console.log('Alert clicked: Payment issue')}
                      />
                      <AlertItem
                        priority="high"
                        category="Emergency"
                        message="Unit 6A - Water leak reported"
                        timestamp="3 hrs"
                        onClick={() => console.log('Alert clicked: Water leak')}
                      />
                      <AlertItem
                        priority="medium"
                        category="Document Request"
                        message="Unit 8C - Lease renewal documents needed"
                        timestamp="4 hrs"
                        onClick={() => console.log('Alert clicked: Document request')}
                      />
                      <AlertItem
                        priority="low"
                        category="Maintenance"
                        message="Unit 9A - Routine cleaning scheduled"
                        timestamp="5 hrs"
                        onClick={() => console.log('Alert clicked: Routine cleaning')}
                      />
                      <AlertItem
                        priority="high"
                        category="Complaint"
                        message="Unit 3B - Noise complaint from neighbor"
                        timestamp="6 hrs"
                        onClick={() => console.log('Alert clicked: Noise complaint')}
                      />
                      <AlertItem
                        priority="medium"
                        category="Inspection"
                        message="Unit 7A - Annual inspection completed"
                        timestamp="1 day"
                        onClick={() => console.log('Alert clicked: Inspection completed')}
                      />
                    </div>
                    </Card>
                  </div>

                  {/* Right Column - Financial Snapshot and Recent AI Actions */}
                  <div className="w-full flex flex-col gap-6 h-full">
                    {/* Financial Snapshot */}
                    <Card className="shadow-card-small flex flex-col gap-4 p-6">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex gap-2 items-center">
                          <ThemeIcon src={financialIcon} alt="Financial" size="sm" variant="default" />
                          <h2 className="font-semibold text-base text-primary">Financial Snapshot</h2>
                        </div>
                        <Button variant="secondary" size="sm" onClick={() => console.log('View all financial')}>
                          View All
                        </Button>
                      </div>
                      <div className="flex flex-col gap-4">
                        {/* Revenue Section */}
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-secondary">Expected Rent</p>
                            <p className="font-bold text-base text-primary">$295,000</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-secondary">Collected Rent</p>
                            <p className="font-bold text-base text-primary">$284,650</p>
                    </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-secondary">Collection Rate</p>
                            <p className="font-bold text-base text-primary">96.5%</p>
                          </div>
                          <ProgressBar
                            variant="occupancy"
                            percentage={96.5}
                            label=""
                            value=""
                            subtitle=""
                          />
                        </div>

                        {/* Expenses Section */}
                        <div className="flex flex-col gap-2 pt-4 border-t border-overlays-white-inverse-10">
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-secondary">Operating Expenses</p>
                            <p className="font-bold text-base text-primary">$89,250</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-secondary">Maintenance Costs</p>
                            <p className="font-bold text-base text-primary">$12,400</p>
                      </div>
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-base text-primary">Net Cash Flow</p>
                            <p className="font-bold text-lg text-success-500">$183,000</p>
                        </div>
                    </div>
                      </div>
                    </Card>

                    {/* Recent AI Actions */}
                    <Card className="shadow-card-small flex flex-col gap-4 p-6">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex gap-2 items-center">
                          <ThemeIcon src={aiEfficiencyIcon} alt="AI Actions" size="sm" variant="default" />
                          <h2 className="font-semibold text-base text-primary">Recent AI Actions</h2>
                    </div>
                        <Button variant="secondary" size="sm" onClick={() => console.log('View all AI actions')}>
                          View All
                        </Button>
                      </div>
                      <div className="flex flex-col gap-2">
                        <ActivityFeedItem
                          variant="compact"
                          userName="AI Assistant"
                          userIcon={aiEfficiencyIcon}
                          action="Sent rent reminder to Tenant John Doe"
                          description=""
                          timestamp="2 hours ago"
                          badges={[{ label: "communication", variant: "info" }]}
                          priority="medium"
                        />
                        <ActivityFeedItem
                          variant="compact"
                          userName="AI Assistant"
                          userIcon={aiEfficiencyIcon}
                          action="Auto-scheduled maintenance for HVAC repair"
                          description=""
                          timestamp="4 hours ago"
                          badges={[{ label: "maintenance", variant: "warning" }]}
                          priority="medium"
                        />
                        <ActivityFeedItem
                          variant="compact"
                          userName="AI Assistant"
                          userIcon={aiEfficiencyIcon}
                          action="Generated lease renewal letter"
                          description=""
                          timestamp="6 hours ago"
                          badges={[{ label: "lease", variant: "primary" }]}
                          priority="medium"
                        />
                      </div>
                    </Card>
                      </div>
                    </div>

                {/* Properties Portfolio Map */}
                <Card className="shadow-card-small flex flex-col gap-4 p-6">
                  <div className="flex gap-2 items-center">
                    <ThemeIcon src={propertiesNavIcon} alt="Portfolio" size="sm" variant="default" />
                    <h2 className="font-semibold text-base text-primary">Properties Portfolio</h2>
                  </div>
                  <div className="bg-overlays-black-inverse-95 rounded-xl p-8 flex items-center justify-center min-h-96">
                    <div className="flex flex-col items-center gap-4">
                      <ThemeIcon src={propertiesNavIcon} alt="Map placeholder" size="lg" variant="gray" />
                      <p className="text-sm text-tertiary text-center">
                        Interactive properties map visualization will be displayed here
                      </p>
                    </div>
                      </div>
                </Card>

                {/* Bottom Quick Stats - 4 Cards */}
                <div className="responsive-grid cols-auto gap-6 w-full">
                  {/* Rent Collected vs Expected */}
                  <div className="w-full">
                    <StatCard
                      title="Rent Collected vs Expected"
                      value="$7,050 / $14,000"
                      subtitle="50% received (MTD)"
                      icon={dollarIcon}
                      gradient="info-flow"
                      variant="complex"
                      actionButton={{
                        text: "View Collection Report",
                        onClick: () => console.log('View collection report')
                      }}
                    />
                      </div>

                  {/* Expenses */}
                  <div className="w-full">
                    <StatCard
                      title="Expenses"
                      value="$2,500"
                      subtitle="Top: Maintenance (MTD)"
                      icon={dollarIcon}
                      gradient="brand-aurora"
                      variant="complex"
                      actionButton={{
                        text: "View Expense Breakdown",
                        onClick: () => console.log('View expense breakdown')
                      }}
                    />
                      </div>

                  {/* Net Cash Flow */}
                  <div className="w-full">
                    <StatCard
                      title="Net Cash Flow"
                      value="+$4,550"
                      subtitle="Net so far (MTD)"
                      icon={trendingUpIcon}
                      gradient="emerald-glow"
                      variant="complex"
                      valueColor="success"
                      actionButton={{
                        text: "View P&L Report",
                        onClick: () => console.log('View P&L report')
                      }}
                    />
                    </div>

                  {/* ROI / Cap Rate Trend */}
                  <div className="w-full">
                    <StatCard
                      title="ROI / Cap Rate Trend"
                      value="8.4%"
                      subtitle="↑0.6% from last year"
                      icon={financialIcon}
                      gradient="magenta-pop"
                      variant="complex"
                      valueColor="success"
                      actionButton={{
                        text: "View Investment Analysis",
                        onClick: () => console.log('View investment analysis')
                      }}
                    />
              </div>
            </div>
    </AppLayout>
  );
}
