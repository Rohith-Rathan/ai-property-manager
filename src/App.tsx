import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import QuickActions from './pages/QuickActions';
import PropertiesGrid from './pages/PropertiesGrid';
import PropertyMenu from './pages/PropertyMenu';
import PropertiesList from './pages/PropertiesList';
import AddPropertyStep1 from './pages/AddPropertyStep1';
import AddPropertyStep2 from './pages/AddPropertyStep2';
import AddPropertyStep3 from './pages/AddPropertyStep3';
import AddPropertyStep4 from './pages/AddPropertyStep4';
import PropertyUnitsGrid from './pages/PropertyUnitsGrid';
import PropertyUnitsList from './pages/PropertyUnitsList';
import AddUnit from './pages/AddUnit';
import TenantMoreOptions from './pages/TenantMoreOptions';
import AssetMoreOptions from './pages/AssetMoreOptions';
import ViewUnitTenants from './pages/ViewUnitTenants';
import ViewUnitAssets from './pages/ViewUnitAssets';
import AddAsset from './pages/AddAsset';
import ViewUnitMaintenanceTickets from './pages/ViewUnitMaintenanceTickets';
import ViewMaintenanceTicket from './pages/ViewMaintenanceTicket';
import TenantManagementGrid from './pages/TenantManagementGrid';
import TenantOptions from './pages/TenantOptions';
import TenantManagementList from './pages/TenantManagementList';
import ViewTenantLeaseDetails from './pages/ViewTenantLeaseDetails';
import ViewTenantRentHistory from './pages/ViewTenantRentHistory';
import ComponentsLibrary from './pages/ComponentsLibrary';
import './App.css';
import './styles/styles.css';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Welcome to AI Property Manager
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Your intelligent property management solution
          </p>
        
        {/* Navigation */}
        <div className="mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {/* Components Library - First Button */}
          <Link to="/components-library" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center shadow-lg">
            🎨 Components Library
          </Link>
          
          {/* Core Pages */}
          <Link to="/login" className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center">
            Login Screen
          </Link>
          <Link to="/dashboard" className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Dashboard
          </Link>
          <Link to="/quick-actions" className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Quick Actions
          </Link>
          
          {/* Properties & Units */}
          <Link to="/properties-grid" className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Properties Grid
          </Link>
          <Link to="/properties-list" className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Properties List
          </Link>
          <Link to="/property-menu" className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Property Menu
          </Link>
          <Link to="/property-units-grid" className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Property Units Grid
          </Link>
          <Link to="/property-units-list" className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Property Units List
          </Link>
          
          {/* Add Property Flow */}
          <Link to="/add-property-1" className="bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Add Property Step 1
          </Link>
          <Link to="/add-property-2" className="bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Add Property Step 2
          </Link>
          <Link to="/add-property-3" className="bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Add Property Step 3
          </Link>
          <Link to="/add-property-4" className="bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Add Property Step 4
          </Link>
          <Link to="/add-unit" className="bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Add Unit
          </Link>
          
          {/* Unit Management */}
          <Link to="/view-unit-tenants" className="bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            View Unit Tenants
          </Link>
          <Link to="/tenant-more-options" className="bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Tenant More Options
          </Link>
          <Link to="/asset-more-options" className="bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Asset More Options
          </Link>
          <Link to="/view-unit-assets" className="bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            View Unit Assets
          </Link>
          <Link to="/add-asset" className="bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            Add Asset
          </Link>
          <Link to="/view-unit-maintenance-tickets" className="bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            View Unit Maintenance Tickets
          </Link>
          <Link to="/view-maintenance-ticket" className="bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
            View Maintenance Ticket
          </Link>
              <Link to="/tenant-management-grid" className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
                Tenant Management Grid
              </Link>
              <Link to="/tenant-options" className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
                Tenant Options
              </Link>
              <Link to="/tenant-management-list" className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
                Tenant Management List
              </Link>
              <Link to="/view-tenant-lease-details" className="bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
                View Tenant Lease Details
              </Link>
              <Link to="/view-tenant-rent-history" className="bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center">
                View Tenant Rent History
              </Link>
        </div>
        
        {/* Status Message */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white border border-gray-200 rounded-lg max-w-2xl mx-auto">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Framework Status: 25 Pages Built
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                ✅ React app running<br/>
                ✅ Routing functional<br/>
                ✅ 25 pages with real Figma code<br/>
                ✅ All assets downloaded locally<br/>
                ✅ Pixel-perfect implementation
              </p>
        </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/quick-actions" element={<QuickActions />} />
              <Route path="/properties-grid" element={<PropertiesGrid />} />
              <Route path="/property-menu" element={<PropertyMenu />} />
              <Route path="/properties-list" element={<PropertiesList />} />
              <Route path="/add-property-1" element={<AddPropertyStep1 />} />
              <Route path="/add-property-2" element={<AddPropertyStep2 />} />
              <Route path="/add-property-3" element={<AddPropertyStep3 />} />
              <Route path="/add-property-4" element={<AddPropertyStep4 />} />
              <Route path="/property-units-grid" element={<PropertyUnitsGrid />} />
              <Route path="/property-units-list" element={<PropertyUnitsList />} />
              <Route path="/add-unit" element={<AddUnit />} />
              <Route path="/view-unit-tenants" element={<ViewUnitTenants />} />
              <Route path="/tenant-more-options" element={<TenantMoreOptions />} />
              <Route path="/asset-more-options" element={<AssetMoreOptions />} />
              <Route path="/view-unit-assets" element={<ViewUnitAssets />} />
              <Route path="/add-asset" element={<AddAsset />} />
              <Route path="/view-unit-maintenance-tickets" element={<ViewUnitMaintenanceTickets />} />
              <Route path="/view-maintenance-ticket" element={<ViewMaintenanceTicket />} />
                  <Route path="/tenant-management-grid" element={<TenantManagementGrid />} />
                  <Route path="/tenant-options" element={<TenantOptions />} />
                  <Route path="/tenant-management-list" element={<TenantManagementList />} />
                  <Route path="/view-tenant-lease-details" element={<ViewTenantLeaseDetails />} />
                  <Route path="/view-tenant-rent-history" element={<ViewTenantRentHistory />} />
                  <Route path="/components-library" element={<ComponentsLibrary />} />
            </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;