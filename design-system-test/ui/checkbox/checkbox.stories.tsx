import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox } from './index';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A checkbox component for boolean input with various states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
    isIntermediate: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is in intermediate state',
    },
    styleVariant: {
      control: { type: 'select' },
      options: ['gray', 'blue'],
      description: 'The style variant of the checkbox',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the checkbox',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is in error state',
    },
    errorText: {
      control: { type: 'text' },
      description: 'The error text of the checkbox',
    },
    label: {
      control: { type: 'text' },
      description: 'The label of the checkbox',
    },
    onClick: {
      action: 'clicked',
      description: 'The function to be called when the checkbox is clicked',
    },
    onKeyDown: {
      action: 'keydown',
      description: 'The function to be called when the checkbox is keyed down',
    },
    tabIndex: {
      control: { type: 'number' },
      description: 'The tab index of the checkbox',
    },
    role: {
      control: { type: 'text' },
      description: 'The role of the checkbox',
    },
  },
  args: {
    checked: false,
    disabled: false,
    isIntermediate: false,
    styleVariant: 'gray',
    size: 'large',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <div className="flex gap-4 items-center">
        <Checkbox error={true} styleVariant='gray' {...args} size="medium" checked={checked} onClick={setChecked} label="Checkbox" errorText="Error text" />
      </div>
    )
  },
  args: {
    checked: false,
    disabled: false,
    styleVariant: 'gray',
    size: 'large',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    styleVariant: 'gray',
    size: 'large',
  },
};

export const Intermediate: Story = {
  args: {
    checked: false,
    isIntermediate: true,
    disabled: false,
    styleVariant: 'gray',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    styleVariant: 'gray',
    size: 'large',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    styleVariant: 'gray',
    size: 'large',
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Checkbox {...args} size="small" />
      <Checkbox {...args} size="medium" />
      <Checkbox {...args} size="large" />
    </div>
  ),
  args: {
    checked: true,
    styleVariant: 'gray',
  },
};

export const AllStates: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox {...args} checked={false} />
        <span>Unchecked</span>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} checked={true} />
        <span>Checked</span>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} isIntermediate={true} />
        <span>Intermediate</span>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} checked={false} disabled={true} />
        <span>Disabled</span>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} checked={true} disabled={true} />
        <span>Disabled Checked</span>
      </div>
    </div>
  ),
  args: {
    styleVariant: 'gray',
    size: 'large',
  },
};