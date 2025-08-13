import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Switch } from './index';
import { useState } from 'react';

const meta: Meta<typeof Switch> = {
  title: 'Design System/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A switch component for toggling between two states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    styleVariant: {
      control: { type: 'select' },
      options: ['beige', 'gray'],
      description: 'The style variant of the switch',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the switch is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the switch is disabled',
    },
  },
  args: {
    styleVariant: 'beige',
    checked: false,
    disabled: false,
    onChange: (checked: boolean) => console.log('Switch toggled:', checked),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    styleVariant: 'beige',
    checked: false,
    disabled: false,
    label: 'Beige',
    labelPosition: 'left',
    description: 'Beige Description',
  },
};

export const Checked: Story = {
  args: {
    styleVariant: 'beige',
    checked: true,
    disabled: false,
    label: 'Beige',
    labelPosition: 'left',
    description: 'Beige Description',
  },
};

export const Disabled: Story = {
  args: {
    styleVariant: 'beige',
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    styleVariant: 'beige',
    checked: true,
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 items-center">
      <Switch {...args} styleVariant="beige" checked={false} onChange={() => {}} size="medium" label="Beige" labelPosition="left" description="Beige Description" />
      <Switch {...args} styleVariant="beige" checked={false} onChange={() => {}} size="medium" label="Beige" labelPosition="right" description="Beige Description" />
      <Switch {...args} styleVariant="gray" checked={false} onChange={() => {}} size="medium" label="Gray" labelPosition="left" description="Gray Description" />
      <Switch {...args} styleVariant="gray" checked={false} onChange={() => {}} size="medium" label="Gray" labelPosition="right" description="Gray Description" />
    </div>
  ),
  args: {
    checked: false,
    disabled: false,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div className="space-y-4">
        <Switch 
          {...args} 
          checked={checked} 
          onChange={() => setChecked(!checked)}
          size="medium"
          label="Beige"
          labelPosition="left"
          description="Beige Description"
        />
      </div>
    );
  },
  args: {
    styleVariant: 'beige',
    disabled: false,
  },
};