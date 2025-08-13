import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Divider } from './index';

const meta: Meta<typeof Divider> = {
  title: 'Design System/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A divider component for separating content sections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    stroke: {
      control: { type: 'select' },
      options: ['solid', 'dashed'],
      description: 'The stroke style of the divider',
    },
    dividerStyle: {
      control: { type: 'select' },
      options: ['gray', 'neutral'],
      description: 'The style of the divider',
    },
    variant: {
      control: { type: 'select' },
      options: ['normal', 'muted'],
      description: 'The variant of the divider',
    },
  },
  args: {
    stroke: 'solid',
    dividerStyle: 'gray',
    variant: 'normal',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stroke: 'solid',
    dividerStyle: 'gray',
    variant: 'normal',
  },
};

export const Dashed: Story = {
  args: {
    stroke: 'dashed',
    dividerStyle: 'gray',
    variant: 'normal',
  },
};

export const Muted: Story = {
  args: {
    stroke: 'solid',
    dividerStyle: 'gray',
    variant: 'muted',
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="space-y-6 w-full max-w-md">
      <div>
        <p className="mb-2 text-sm">Solid Normal</p>
        <Divider stroke="solid" dividerStyle="gray" variant="normal" />
      </div>
      <div>
        <p className="mb-2 text-sm">Dashed Normal</p>
        <Divider stroke="dashed" dividerStyle="gray" variant="normal" />
      </div>
      <div>
        <p className="mb-2 text-sm">Solid Muted</p>
        <Divider stroke="solid" dividerStyle="gray" variant="subtle" />
      </div>
      <div>
        <p className="mb-2 text-sm">Dashed Muted</p>
        <Divider stroke="dashed" dividerStyle="gray" variant="highlighted" />
      </div>
    </div>
  ),
  args: {},
};