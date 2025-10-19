import React from 'react';
import { Card } from '../components/ui/Card';
import Button from '../components/forms/Button';
import FormField from '../components/forms/FormField';
import ThemeIcon from '../components/ui/ThemeIcon';
import Chip from '../components/ui/Chip';
import StatCard from '../components/cards/StatCard';
import { getAssetPath } from '../utils/completeAssetMapping';

export default function ComponentsLibrary() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Components Library</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Buttons */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Buttons</h2>
            <div className="space-y-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </Card>

          {/* Form Fields */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Form Fields</h2>
            <div className="space-y-4">
              <FormField
                label="Text Input"
                placeholder="Enter text"
                value=""
                onChange={() => {}}
              />
              <FormField
                label="Email Input"
                type="email"
                placeholder="Enter email"
                value=""
                onChange={() => {}}
              />
            </div>
          </Card>

          {/* Icons */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Icons</h2>
            <div className="flex flex-wrap gap-4">
              <ThemeIcon src={getAssetPath('user-icon')} alt="User" className="w-6 h-6" />
              <ThemeIcon src={getAssetPath('search-icon')} alt="Search" className="w-6 h-6" />
              <ThemeIcon src={getAssetPath('edit-icon')} alt="Edit" className="w-6 h-6" />
            </div>
          </Card>

          {/* Chips */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Chips</h2>
            <div className="flex flex-wrap gap-2">
              <Chip variant="primary" label="Primary" />
              <Chip variant="success" label="Success" />
              <Chip variant="warning" label="Warning" />
              <Chip variant="error" label="Error" />
            </div>
          </Card>

          {/* Stat Cards */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Stat Cards</h2>
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                title="Total Properties"
                value="12"
                icon={getAssetPath('property-icon')}
              />
              <StatCard
                title="Active Tenants"
                value="45"
                icon={getAssetPath('tenant-icon')}
              />
            </div>
          </Card>

          {/* Cards */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Cards</h2>
            <div className="space-y-4">
              <Card className="p-4">
                <h3 className="font-medium">Card with padding</h3>
                <p className="text-sm text-gray-600">This is a card with default padding</p>
              </Card>
              <Card className="p-0" padding="none">
                <div className="p-4">
                  <h3 className="font-medium">Card without padding</h3>
                  <p className="text-sm text-gray-600">This is a card with no padding</p>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}