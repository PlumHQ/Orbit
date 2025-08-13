import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconButton } from './index';
import { InfoIcon, CrossCloseIcon } from '@pluminsurance/design-system-test.icons';

const meta: Meta<typeof IconButton> = {
  title: 'Design System/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An icon button component for actions represented by icons only.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['beige', 'gray', 'white'],
      description: 'The color of the icon button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the icon button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
  },
  args: {
    color: 'gray',
    size: 'medium',
    disabled: false,
    icon: CrossCloseIcon,
    onClick: () => console.log('Icon button clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'gray',
    size: 'medium',
    icon: CrossCloseIcon,
  },
};

export const White: Story = {
  args: {
    color: 'white',
    size: 'medium',
    icon: CrossCloseIcon,
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <IconButton icon={CrossCloseIcon} {...args} size="small" color={args.color} />
      <IconButton icon={CrossCloseIcon} {...args} size="medium" color={args.color} />
      <IconButton icon={CrossCloseIcon} {...args} size="large" color={args.color} />
    </div>
  ),
  args: {
    color: 'gray',
    icon: CrossCloseIcon,
  },
};

export const AllColors: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <IconButton icon={CrossCloseIcon} {...args} color="gray" size={args.size} />
      <IconButton icon={CrossCloseIcon} {...args} color="white" size={args.size} />
      <IconButton icon={CrossCloseIcon} {...args} color="beige" size={args.size} />
    </div>
  ),
  args: {
    size: 'medium',
    icon: CrossCloseIcon,
  },
};

export const Disabled: Story = {
  args: {
    color: 'gray',
    size: 'medium',
    icon: CrossCloseIcon,
    disabled: true,
  },
};