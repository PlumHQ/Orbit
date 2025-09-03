import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  HealthInsuraceIllustration,
  WalletIllustration,
  PersonalAccidentIllustration,
  ExpandedSidedLogo,
  CollapsedSidedLogo,
  ScanIllustration,
  TelehealthFreeIllustration,
  FamilyCareIllustration,
} from './index';

const meta: Meta = {
  title: 'Design System/Illustrations',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A collection of SVG illustrations and logos used throughout the application. These illustrations maintain consistent styling and are optimized for various use cases.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIllustrations: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8">
      <div className="flex flex-col items-center gap-3 p-4 border rounded-lg">
        <HealthInsuraceIllustration />
        <span className="text-sm font-medium text-gray-700">Health Insurance</span>
        <span className="text-xs text-gray-500">56x56px</span>
      </div>
      
      <div className="flex flex-col items-center gap-3 p-4 border rounded-lg">
        <WalletIllustration />
        <span className="text-sm font-medium text-gray-700">Wallet</span>
        <span className="text-xs text-gray-500">56x56px</span>
      </div>
      
      <div className="flex flex-col items-center gap-3 p-4 border rounded-lg">
        <PersonalAccidentIllustration />
        <span className="text-sm font-medium text-gray-700">Personal Accident</span>
        <span className="text-xs text-gray-500">56x56px</span>
      </div>
      
      <div className="flex flex-col items-center gap-3 p-4 border rounded-lg">
        <ExpandedSidedLogo />
        <span className="text-sm font-medium text-gray-700">Expanded Logo</span>
        <span className="text-xs text-gray-500">80x48px</span>
      </div>
      
      <div className="flex flex-col items-center gap-3 p-4 border rounded-lg">
        <CollapsedSidedLogo />
        <span className="text-sm font-medium text-gray-700">Collapsed Logo</span>
        <span className="text-xs text-gray-500">48x48px</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all available illustrations with their names and dimensions.',
      },
    },
  },
};

export const HealthInsurance: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4 p-8">
      <HealthInsuraceIllustration />
      <div className="text-center">
        <h3 className="text-lg font-semibold">Health Insurance</h3>
        <p className="text-sm text-gray-600">Illustration for health insurance related features</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Health insurance illustration featuring a medical cross and protection theme.',
      },
    },
  },
};

export const Wallet: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4 p-8">
      <WalletIllustration />
      <div className="text-center">
        <h3 className="text-lg font-semibold">Wallet</h3>
        <p className="text-sm text-gray-600">Illustration for financial and payment features</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Wallet illustration for financial services and payment-related features.',
      },
    },
  },
};

export const PersonalAccident: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4 p-8">
      <PersonalAccidentIllustration />
      <div className="text-center">
        <h3 className="text-lg font-semibold">Personal Accident</h3>
        <p className="text-sm text-gray-600">Illustration for personal accident insurance</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Personal accident insurance illustration showing protection and safety themes.',
      },
    },
  },
};

export const LogoVariants: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-lg">
        <ExpandedSidedLogo />
        <div className="text-center">
          <h3 className="text-lg font-semibold">Expanded Logo</h3>
          <p className="text-sm text-gray-600">Full brand logo with text (80x48px)</p>
          <p className="text-xs text-gray-500">Use in headers, large spaces, or when brand visibility is important</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-lg">
        <CollapsedSidedLogo />
        <div className="text-center">
          <h3 className="text-lg font-semibold">Collapsed Logo</h3>
          <p className="text-sm text-gray-600">Compact brand logo (48x48px)</p>
          <p className="text-xs text-gray-500">Use in small spaces, mobile navigation, or favicons</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Brand logo variations for different use cases and space constraints.',
      },
    },
  },
};

export const InsuranceIllustrations: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      <div className="flex flex-col items-center gap-3 p-6 bg-blue-50 rounded-lg">
        <HealthInsuraceIllustration />
        <span className="text-sm font-semibold">Health Insurance</span>
        <span className="text-xs text-center text-gray-600">Medical coverage and health protection services</span>
      </div>
      
      <div className="flex flex-col items-center gap-3 p-6 bg-green-50 rounded-lg">
        <WalletIllustration />
        <span className="text-sm font-semibold">Financial Services</span>
        <span className="text-xs text-center text-gray-600">Payment processing and wallet management</span>
      </div>
      
      <div className="flex flex-col items-center gap-3 p-6 bg-purple-50 rounded-lg">
        <PersonalAccidentIllustration />
        <span className="text-sm font-semibold">Personal Accident</span>
        <span className="text-xs text-center text-gray-600">Accident insurance and safety coverage</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Insurance-related illustrations grouped by category with contextual backgrounds.',
      },
    },
  },
};

export const ResponsiveDisplay: Story = {
  render: () => (
    <div className="space-y-6 p-8">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">Responsive Illustration Sizes</h3>
        <p className="text-sm text-gray-600">Illustrations scale appropriately across different screen sizes</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center gap-2 p-4 border rounded">
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="scale-50">
              <HealthInsuraceIllustration />
            </div>
          </div>
          <span className="text-xs">Small (28px)</span>
        </div>
        
        <div className="flex flex-col items-center gap-2 p-4 border rounded">
          <div className="w-12 h-12 flex items-center justify-center">
            <div className="scale-75">
              <HealthInsuraceIllustration />
            </div>
          </div>
          <span className="text-xs">Medium (42px)</span>
        </div>
        
        <div className="flex flex-col items-center gap-2 p-4 border rounded">
          <HealthInsuraceIllustration />
          <span className="text-xs">Default (56px)</span>
        </div>
        
        <div className="flex flex-col items-center gap-2 p-4 border rounded">
          <div className="w-20 h-20 flex items-center justify-center">
            <div className="scale-125">
              <HealthInsuraceIllustration />
            </div>
          </div>
          <span className="text-xs">Large (70px)</span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how illustrations can be scaled for different contexts while maintaining visual quality.',
      },
    },
  },
};

export const UsageExamples: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      {/* Card Example */}
      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <HealthInsuraceIllustration />
          <div>
            <h3 className="text-lg font-semibold mb-2">Health Insurance Plan</h3>
            <p className="text-gray-600 text-sm mb-3">
              Comprehensive health coverage for you and your family with extensive network coverage.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation Example */}
      <div className="bg-gray-900 text-white p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CollapsedSidedLogo />
            <span className="font-semibold">Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <WalletIllustration />
            <span className="text-sm">$2,450.00</span>
          </div>
        </div>
      </div>
      
      {/* Feature Grid Example */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 border rounded-lg">
          <HealthInsuraceIllustration />
          <h4 className="font-medium mt-2">Health Coverage</h4>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <PersonalAccidentIllustration />
          <h4 className="font-medium mt-2">Accident Protection</h4>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <WalletIllustration />
          <h4 className="font-medium mt-2">Financial Security</h4>
        </div>
      </div>

      {/* Telehealth Free Example */}
      <div className="text-center p-4 border rounded-lg">
        <TelehealthFreeIllustration />
        <h4 className="font-medium mt-2">Telehealth Free</h4>
      </div>

      {/* Scan Example */}
      <div className="text-center p-4 border rounded-lg">
        <ScanIllustration />
        <h4 className="font-medium mt-2">Scan</h4>
      </div>

      {/* Family Care Example */}
      <div className="text-center p-4 border rounded-lg">
        <FamilyCareIllustration />
        <h4 className="font-medium mt-2">Family Care</h4>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples showing how illustrations integrate with UI components and layouts.',
      },
    },
  },
};
