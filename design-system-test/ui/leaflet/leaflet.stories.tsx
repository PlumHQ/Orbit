import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Leaflet } from './index';
import { InfoIcon, RightArrowIcon } from '../icons';

const meta: Meta<typeof Leaflet> = {
  title: 'Design System/Leaflet',
  component: Leaflet,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A leaflet component for displaying informational cards or callouts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['positive', 'information', 'notice'],
      description: 'The style of the leaflet',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the leaflet',
    },
    leadingText: {
      control: { type: 'text' },
      description: 'The leading text of the leaflet',
    },
    trailingText: {
      control: { type: 'text' },
      description: 'The trailing text of the leaflet',
    },
  },
  args: {
    style: 'information',
    size: 'medium',
    leadingText: 'Leaflet Text',
    trailingText: 'Additional info',
    onClick: () => console.log('Leaflet clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: 'information',
    size: 'medium',
    leadingIcon: InfoIcon,
    trailingIcon: RightArrowIcon,
    leadingText: 'Information',
    trailingText: 'Additional details',
    width: '800',
  },
};

export const Positive: Story = {
  args: {
    style: 'positive',
    size: 'medium',
    leadingIcon: InfoIcon,
    trailingIcon: RightArrowIcon,
    leadingText: 'Success',
    trailingText: 'Operation completed',
    width: '800',
  },
};

export const Notice: Story = {
  args: {
    style: 'notice',
    size: 'medium',
    leadingIcon: InfoIcon,
    trailingIcon: RightArrowIcon,
    leadingText: 'Notice',
    trailingText: 'Please review',
    width: '800',
  },
};

export const WithIcon: Story = {
  args: {
    style: 'information',
    size: 'medium',
    leadingText: 'With Icon',
    trailingText: 'Icon included',
    leadingIcon: InfoIcon,
    width: '800',
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="space-y-4 w-full max-w-md">
      <Leaflet style="information" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Medium" trailingText="Medium size" width="800" />
      <Leaflet style="information" size="large" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Large" trailingText="Large size" width="800" />
    </div>
  ),
  args: {},
};

export const AllStyles: Story = {
  render: (args) => (
    <div className="space-y-4 w-full max-w-md">
      <Leaflet style="positive" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Positive" trailingText="Success message" width="800" />
      <Leaflet style="information" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Information" trailingText="Info message" width="800" />
      <Leaflet style="notice" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Notice" trailingText="Important notice" width="800" />
    </div>
  ),
  args: {},
};