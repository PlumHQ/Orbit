import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Progress } from './index';

const meta: Meta<typeof Progress> = {
  title: 'Design System/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A progress bar component with customizable sizes and variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the progress bar',
    },
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'positive', 'negative'],
      description: 'The color variant of the progress bar',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value from 0 to 100',
    },
  },
  args: {
    progress: 50,
    size: 'medium',
    variant: 'positive',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Default</h3>
        <Progress {...args} label="Progress" size="medium" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
    </div>
  ),
};

export const Small: Story = {
  render: (args) => (
    <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Small</h3>
        <Progress {...args} label="Progress" size="small" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>  
    </div>
  ),
};

export const Large: Story = {
  render: (args) => (
    <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Large</h3>
        <Progress {...args} label="Progress" size="large" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Positive</h3>
        <Progress {...args} label="Progress" variant="positive" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Neutral</h3>
        <Progress {...args} label="Progress" variant="neutral" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Negative</h3>
        <Progress {...args} label="Progress" variant="negative" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
    </div>
  ),
  args: {
    progress: 65,
    size: 'medium',
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Small</h3>
        <Progress {...args} label="Progress" size="small" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Medium</h3>
        <Progress {...args} label="Progress" size="medium" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Large</h3>
        <Progress {...args} label="Progress" size="large" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
    </div>
  ),
  args: {
    progress: 80,
    variant: 'positive',
  },
};