import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toast } from './index';
import { InfoIcon } from '@pluminsurance/design-system-test.icons';

const meta: Meta<typeof Toast> = {
  title: 'Design System/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A toast component for displaying temporary notifications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    styleVariant: {
      control: { type: 'select' },
      options: ['neutral', 'negative', 'positive', 'promotional'],
      description: 'The style variant of the toast',
    },
    title: {
      control: { type: 'text' },
      description: 'The title of the toast',
    },
    message: {
      control: { type: 'text' },
      description: 'The message content of the toast',
    },
  },
  args: {
    styleVariant: 'promotional',
    title: 'Notification',
    message: 'This is a toast notification message.',
    onClose: () => console.log('Toast closed'),
    onButtonClick: () => console.log('Toast action clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    styleVariant: 'promotional',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    LeadingIcon: InfoIcon,
  },
};

export const Positive: Story = {
  args: {
    styleVariant: 'positive',
    title: 'Success',
    message: 'Your action was completed successfully.',
    LeadingIcon: InfoIcon,
  },
};

export const Negative: Story = {
  args: {
    styleVariant: 'negative',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    LeadingIcon: InfoIcon,
  },
};

export const Neutral: Story = {
  args: {
    styleVariant: 'neutral',
    title: 'Information',
    message: 'Here is some important information for you.',
    LeadingIcon: InfoIcon,
  },
};

export const WithAction: Story = {
  args: {
    styleVariant: 'promotional',
    title: 'Update Available',
    message: 'A new version is available. Would you like to update?',
    LeadingIcon: InfoIcon,
    action: 'Update Now',
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-col space-y-4">
      <Toast {...args} styleVariant="positive" title="Success" message="Operation completed successfully." />
      <Toast {...args} styleVariant="negative" title="Error" message="An error occurred." />
      <Toast {...args} styleVariant="neutral" title="Info" message="Here's some information." />
      <Toast {...args} styleVariant="promotional" title="Promotion" message="Check out our new feature!" />
    </div>
  ),
  args: {
    LeadingIcon: InfoIcon,
  },
};