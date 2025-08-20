import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FloatingButton } from './index';
import { RoundedAddIcon, DownloadIcon, CrossCloseIcon, SearchIcon } from '../icons';

const meta: Meta<typeof FloatingButton> = {
  title: 'Design System/FloatingButton',
  component: FloatingButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A floating action button component with customizable size, style, and icon options. Perfect for primary actions that need to stand out on the interface.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['medium', 'large'],
      description: 'The size of the floating button',
    },
    styleVariant: {
      control: { type: 'select' },
      options: ['white', 'gray'],
      description: 'The style variant of the floating button',
    },
    iconOnly: {
      control: { type: 'boolean' },
      description: 'Whether to show only the icon without label',
    },
    label: {
      control: { type: 'text' },
      description: 'The text label of the button (ignored when iconOnly is true)',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in loading state',
    },
  },
  args: {
    size: 'large',
    styleVariant: 'white',
    iconOnly: false,
    label: 'Add Item',
    loading: false,
    leadingIcon: RoundedAddIcon,
    onClick: () => console.log('Floating button clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'large',
    styleVariant: 'white',
    iconOnly: false,
    label: 'Add Item',
    leadingIcon: RoundedAddIcon,
  },
};

export const IconOnly: Story = {
  args: {
    size: 'large',
    styleVariant: 'white',
    iconOnly: true,
    leadingIcon: RoundedAddIcon,
  },
};

export const GrayVariant: Story = {
  args: {
    size: 'large',
    styleVariant: 'gray',
    iconOnly: false,
    label: 'Download',
    leadingIcon: DownloadIcon,
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex gap-6 items-center">
      <div className="flex flex-col items-center gap-2">
        <FloatingButton 
          {...args} 
          size="medium" 
          styleVariant="white" 
          label="Medium" 
          leadingIcon={RoundedAddIcon}
        />
        <span className="text-sm text-gray-600">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FloatingButton 
          {...args} 
          size="large" 
          styleVariant="white" 
          label="Large" 
          leadingIcon={RoundedAddIcon}
        />
        <span className="text-sm text-gray-600">Large</span>
      </div>
    </div>
  ),
  args: {
    styleVariant: 'white',
    iconOnly: false,
  },
};

export const AllStyleVariants: Story = {
  render: (args) => (
    <div className="flex gap-6 items-center">
      <div className="flex flex-col items-center gap-2">
        <FloatingButton 
          {...args} 
          styleVariant="white" 
          size="large" 
          label="White" 
          leadingIcon={RoundedAddIcon}
        />
        <span className="text-sm text-gray-600">White</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FloatingButton 
          {...args} 
          styleVariant="gray" 
          size="large" 
          label="Gray" 
          leadingIcon={RoundedAddIcon}
        />
        <span className="text-sm text-gray-600">Gray</span>
      </div>
    </div>
  ),
  args: {
    size: 'large',
    iconOnly: false,
  },
};

export const IconOnlyVariants: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div className="flex gap-6 items-center">
        <div className="flex flex-col items-center gap-2">
          <FloatingButton 
            {...args} 
            size="medium" 
            styleVariant="white" 
            iconOnly={true}
            leadingIcon={RoundedAddIcon}
          />
          <span className="text-sm text-gray-600">Medium White</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FloatingButton 
            {...args} 
            size="large" 
            styleVariant="white" 
            iconOnly={true}
            leadingIcon={RoundedAddIcon}
          />
          <span className="text-sm text-gray-600">Large White</span>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex flex-col items-center gap-2">
          <FloatingButton 
            {...args} 
            size="medium" 
            styleVariant="gray" 
            iconOnly={true}
            leadingIcon={RoundedAddIcon}
          />
          <span className="text-sm text-gray-600">Medium Gray</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FloatingButton 
            {...args} 
            size="large" 
            styleVariant="gray" 
            iconOnly={true}
            leadingIcon={RoundedAddIcon}
          />
          <span className="text-sm text-gray-600">Large Gray</span>
        </div>
      </div>
    </div>
  ),
  args: {
    iconOnly: true,
  },
};

export const DifferentIcons: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center flex-wrap">
      <FloatingButton 
        {...args} 
        size="large" 
        styleVariant="white" 
        label="Add" 
        leadingIcon={RoundedAddIcon}
      />
      <FloatingButton 
        {...args} 
        size="large" 
        styleVariant="white" 
        label="Download" 
        leadingIcon={DownloadIcon}
      />
      <FloatingButton 
        {...args} 
        size="large" 
        styleVariant="white" 
        label="Search" 
        leadingIcon={SearchIcon}
      />
      <FloatingButton 
        {...args} 
        size="large" 
        styleVariant="gray" 
        iconOnly={true}
        leadingIcon={CrossCloseIcon}
      />
    </div>
  ),
  args: {
    iconOnly: false,
  },
};

export const Playground: Story = {
  args: {
    size: 'large',
    styleVariant: 'white',
    iconOnly: false,
    label: 'Interactive Button',
    leadingIcon: RoundedAddIcon,
    loading: false,
  },
};
