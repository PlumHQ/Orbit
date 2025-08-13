import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from './index';
import { InfoIcon } from '@pluminsurance/design-system-test.icons';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A badge component for displaying status or labels with various styles and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    styleVariant: {
      control: { type: 'select' },
      options: ['positive', 'negative', 'neutral', 'information', 'notice'],
      description: 'The style variant of the badge',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'The variant of the badge',
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small'],
      description: 'The size of the badge',
    },
    value: {
      control: { type: 'text' },
      description: 'The text content of the badge',
    },
  },
  args: {
    styleVariant: 'positive',
    variant: 'primary',
    size: 'medium',
    value: 'Badge',
    icon: InfoIcon,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    styleVariant: 'positive',
    variant: 'primary',
    size: 'medium',
    value: 'Default Badge',
    icon: InfoIcon,
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} size="small" value="Small" styleVariant="positive" variant="primary" />
        <Badge {...args} size="medium" value="Medium" styleVariant="positive" variant="primary" />
        <Badge {...args} size="large" value="Large" styleVariant="positive" variant="primary" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} size="small" value="Small" styleVariant="negative" variant="primary" />
        <Badge {...args} size="medium" value="Medium" styleVariant="negative" variant="primary" />
        <Badge {...args} size="large" value="Large" styleVariant="negative" variant="primary" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} size="small" value="Small" styleVariant="neutral" variant="primary" />
        <Badge {...args} size="medium" value="Medium" styleVariant="neutral" variant="primary" />
        <Badge {...args} size="large" value="Large" styleVariant="neutral" variant="primary" />
      </div>
      <div className="flex flex-col gap-4 items-center">  
        <Badge {...args} size="small" value="Small" styleVariant="information" variant="primary" />
        <Badge {...args} size="medium" value="Medium" styleVariant="information" variant="primary" />
        <Badge {...args} size="large" value="Large" styleVariant="information" variant="primary" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} size="small" value="Small" styleVariant="notice" variant="primary" />
        <Badge {...args} size="medium" value="Medium" styleVariant="notice" variant="primary" />
        <Badge {...args} size="large" value="Large" styleVariant="notice" variant="primary" />
      </div>
    </div>
  ),
  args: {
    styleVariant: 'positive',
    variant: 'primary',
    icon: InfoIcon,
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} variant="primary" value="Primary" styleVariant="positive" size="medium" />
        <Badge {...args} variant="secondary" value="Secondary" styleVariant="positive" size="medium" />
        <Badge {...args} variant="tertiary" value="Tertiary" styleVariant="positive" size="medium" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} variant="primary" value="Primary" styleVariant="negative" size="medium" />
        <Badge {...args} variant="secondary" value="Secondary" styleVariant="negative" size="medium" />
        <Badge {...args} variant="tertiary" value="Tertiary" styleVariant="negative" size="medium" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} variant="primary" value="Primary" styleVariant="neutral" size="medium" />
        <Badge {...args} variant="secondary" value="Secondary" styleVariant="neutral" size="medium" />
        <Badge {...args} variant="tertiary" value="Tertiary" styleVariant="neutral" size="medium" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} variant="primary" value="Primary" styleVariant="information" size="medium" />
        <Badge {...args} variant="secondary" value="Secondary" styleVariant="information" size="medium" />
        <Badge {...args} variant="tertiary" value="Tertiary" styleVariant="information" size="medium" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} variant="primary" value="Primary" styleVariant="notice" size="medium" />
        <Badge {...args} variant="secondary" value="Secondary" styleVariant="notice" size="medium" />
        <Badge {...args} variant="tertiary" value="Tertiary" styleVariant="notice" size="medium" />
      </div>
    </div>
  ),
  args: {
    styleVariant: 'positive',
    size: 'medium',
    icon: InfoIcon,
  },
};