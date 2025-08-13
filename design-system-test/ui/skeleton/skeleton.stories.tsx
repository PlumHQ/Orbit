import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Skeleton } from './index';

const meta: Meta<typeof Skeleton> = {
  title: 'Design System/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A skeleton loader component with animated pulse effect for loading states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['circle', 'quadrilaterals'],
      description: 'The shape of the skeleton',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for custom styling',
    },
  },
  args: {
    shape: 'quadrilaterals',
    className: 'h-4 w-48',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    shape: 'quadrilaterals',
    className: 'w-12 h-12',
  },
};

export const Circle: Story = {
  args: {
    shape: 'circle',
    className: 'w-12 h-12',
  },
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="p-6 border border-surface-border-gray-subtle rounded-4 space-y-4 max-w-sm">
      <div className="flex items-center space-x-3">
        <Skeleton shape="circle" className="w-10 h-10" />
        <div className="space-y-2">
          <Skeleton shape="quadrilaterals" className="h-4 w-24" />
          <Skeleton shape="quadrilaterals" className="h-3 w-16" />
        </div>
      </div>
      <Skeleton shape="quadrilaterals" className="h-32 w-full" />
      <div className="space-y-2">
        <Skeleton shape="quadrilaterals" className="h-4 w-full" />
        <Skeleton shape="quadrilaterals" className="h-4 w-3/4" />
      </div>
    </div>
  ),
};

export const TextLines: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Skeleton shape="quadrilaterals" className="h-12 w-full" />
      <Skeleton shape="quadrilaterals" className="h-4 w-full" />
      <Skeleton shape="quadrilaterals" className="h-4 w-3/4" />
      <Skeleton shape="quadrilaterals" className="h-4 w-1/2" />
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div className="space-y-3 w-96">
      <div className="flex space-x-4">
        <Skeleton shape="quadrilaterals" className="h-4 w-24" />
        <Skeleton shape="quadrilaterals" className="h-4 w-32" />
        <Skeleton shape="quadrilaterals" className="h-4 w-20" />
        <Skeleton shape="quadrilaterals" className="h-4 w-16" />
      </div>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex space-x-4">
          <Skeleton shape="quadrilaterals" className="h-4 w-24" />
          <Skeleton shape="quadrilaterals" className="h-4 w-32" />
          <Skeleton shape="quadrilaterals" className="h-4 w-20" />
          <Skeleton shape="quadrilaterals" className="h-4 w-16" />
        </div>
      ))}
    </div>
  ),
};