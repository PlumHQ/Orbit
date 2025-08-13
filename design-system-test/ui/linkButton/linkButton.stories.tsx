import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LinkButton, ILinkButton } from './index';
import { InfoIcon, RightArrowIcon } from '@pluminsurance/design-system-test.icons';

const meta: Meta<typeof LinkButton> = {
  title: 'Design System/LinkButton',
  component: LinkButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A link-styled button component for secondary actions and navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the link button',
    },
    state: {
      control: { type: 'select' },
      options: ['primary', 'gray', 'beige'],
      description: 'The state of the link button',
    },
    label: {
      control: { type: 'text' },
      description: 'The text label of the button',
    },
  },
  args: {
    size: 'medium',
    state: 'primary',
    label: 'Link Button',
    onClick: () => console.log('Link button clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    state: 'primary',
    label: 'Default Link',
  },
};

export const WithIcon: Story = {
  args: {
    size: 'medium',
    state: 'primary',
    label: 'Link with Icon',
    leadingIcon: InfoIcon,
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    state: 'disabled',
    label: 'Disabled Link',
  },
};

export const Loading: Story = {
  args: {
    size: 'medium',
    state: 'loading',
    label: 'Loading Link',
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <LinkButton {...args} size="small" label="Small Link" state="primary" />
      <LinkButton {...args} size="medium" label="Medium Link" state="primary" />
      <LinkButton {...args} size="large" label="Large Link" state="primary" />
    </div>
  ),
  args: {
    state: 'primary',
  },
};

export const AllStates: Story = {
  render: (args) => (
    <div className="space-y-4">
      <LinkButton {...args} leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} state="primary" label="Primary Link" size="medium" />
      <LinkButton {...args} leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} state="gray" label="Gray Link" size="medium" />
      <LinkButton {...args} leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} state="beige" label="Beige Link" size="medium" />
    </div>
  ),
  args: {
    size: 'medium',
  },
};