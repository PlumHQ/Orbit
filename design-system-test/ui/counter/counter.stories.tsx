import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Counter } from './index';

const meta: Meta<typeof Counter> = {
  title: 'Design System/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A counter component for displaying numerical values with different styles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['medium', 'large'],
      description: 'The size of the counter',
    },
    styleVariant: {
      control: { type: 'select' },
      options: ['positive', 'negative', 'neutral', 'notice', 'information'],
      description: 'The style variant of the counter',
    },
    value: {
      control: { type: 'number' },
      description: 'The numerical value to display',
    },
  },
  args: {
    size: 'medium',
    styleVariant: 'neutral',
    value: 5,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    styleVariant: 'neutral',
    value: 5,
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Counter {...args} size="medium" styleVariant={args.styleVariant} />
      <Counter {...args} size="large" styleVariant={args.styleVariant} />
    </div>
  ),
  args: {
    styleVariant: 'neutral',
    value: 42,
  },
};

export const AllStyleVariants: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center flex-wrap">
      <Counter {...args} styleVariant="positive" value={5} size={args.size} />
      <Counter {...args} styleVariant="negative" value={3} size={args.size} />
      <Counter {...args} styleVariant="neutral" value={10} size={args.size} />
      <Counter {...args} styleVariant="notice" value={7} size={args.size} />
      <Counter {...args} styleVariant="information" value={12} size={args.size} />
    </div>
  ),
  args: {
    size: 'medium',
  },
};

export const LargeNumbers: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Counter {...args} value={99} size="medium" styleVariant="neutral" />
      <Counter {...args} value={999} size="medium" styleVariant="neutral" />
      <Counter {...args} value={1000} size="medium" styleVariant="neutral" />
    </div>
  ),
  args: {
    size: 'medium',
    styleVariant: 'neutral',
  },
};