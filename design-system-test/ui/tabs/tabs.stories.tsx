import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './index';
import { InfoIcon } from '@pluminsurance/design-system-test.icons';
import { useState } from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tabs component for organizing content into multiple sections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs',
    },
    styleVariant: {
      control: { type: 'select' },
      options: ['gray', 'beige'],
      description: 'The style variant of the tabs',
    },
  },
  args: {
    orientation: 'horizontal',
    styleVariant: 'gray',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('tab1');
    
    return (
      <Tabs 
        {...args} 
        selectedValue={activeTab}
        onValueChange={setActiveTab}
        className="w-96"
      >
        <TabsList {...args}>
          <TabsTrigger selectedValue={activeTab} onValueChange={setActiveTab} value="tab1" name="First Tab" />
          <TabsTrigger selectedValue={activeTab} onValueChange={setActiveTab} value="tab2" name="Second Tab" />
          <TabsTrigger selectedValue={activeTab} onValueChange={setActiveTab} value="tab3" name="Third Tab" />
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">First Tab Content</h3>
            <p>This is the content for the first tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Second Tab Content</h3>
            <p>This is the content for the second tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Third Tab Content</h3>
            <p>This is the content for the third tab.</p>
          </div>
        </TabsContent>
      </Tabs>
    );
  },
  args: {
    orientation: 'horizontal',
    styleVariant: 'gray',
  },
};

export const WithIcons: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('settings');
    
    return (
      <Tabs 
        {...args} 
        selectedValue={activeTab}
        onValueChange={setActiveTab}
        className="w-96"
      >
        <TabsList {...args}>
          <TabsTrigger 
            value="settings" 
            name="Settings" 
            leadingIcon={InfoIcon}
          />
          <TabsTrigger 
            value="profile" 
            name="Profile" 
            leadingIcon={InfoIcon}
          />
          <TabsTrigger 
            value="billing" 
            name="Billing" 
            leadingIcon={InfoIcon}
            counter={3}
          />
        </TabsList>
        <TabsContent value="settings">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <p>Configure your application settings here.</p>
          </div>
        </TabsContent>
        <TabsContent value="profile">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Profile</h3>
            <p>Manage your profile information.</p>
          </div>
        </TabsContent>
        <TabsContent value="billing">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Billing</h3>
            <p>View your billing information and history.</p>
          </div>
        </TabsContent>
      </Tabs>
    );
  },
  args: {
    orientation: 'horizontal',
    styleVariant: 'gray',
  },
};

export const Vertical: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('dashboard');
    
    return (
      <Tabs 
        {...args} 
        selectedValue={activeTab}
        onValueChange={setActiveTab}
        orientation="vertical"
        className="w-96 h-64"
        verticalTabHeader="Navigation"
      >
        <TabsList {...args} orientation="vertical">
          <TabsTrigger value="dashboard" name="Dashboard" />
          <TabsTrigger value="analytics" name="Analytics" />
          <TabsTrigger value="reports" name="Reports" />
        </TabsList>
        <TabsContent value="dashboard">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Dashboard</h3>
            <p>Welcome to your dashboard overview.</p>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p>View your analytics data here.</p>
          </div>
        </TabsContent>
        <TabsContent value="reports">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Reports</h3>
            <p>Generate and view reports.</p>
          </div>
        </TabsContent>
      </Tabs>
    );
  },
  args: {
    styleVariant: 'gray',
  },
};