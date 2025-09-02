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
      options: ['positive', 'information', 'notice', 'neutral', 'negative'],
      description: 'The style of the leaflet',
    },
    size: {
      control: { type: 'select' },
      options: ['medium', 'large'],
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
    trailingIcon: {
      control: { type: 'select' },
      options: [RightArrowIcon, InfoIcon],
      description: 'The trailing icon of the leaflet',
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
  },
};

export const WithIcon: Story = {
  args: {
    style: 'information',
    size: 'medium',
    leadingText: 'With Icon',
    trailingText: 'Icon included',
    leadingIcon: InfoIcon,
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="space-y-4 w-full max-w-md">
      <Leaflet style="information" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Medium" trailingText="Medium size" />
      <Leaflet style="information" size="large" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Large" trailingText="Large size" />
    </div>
  ),
  args: {},
};

export const AllStyles: Story = {
  render: (args) => (
    <div className="space-y-4 w-full max-w-md">
      <Leaflet style="positive" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Positive" trailingText="Success message" />
      <Leaflet style="information" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Information" trailingText="Info message" />
      <Leaflet style="notice" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Notice" trailingText="Important notice" />
      <Leaflet style="neutral" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Neutral" trailingText="Neutral message" />
      <Leaflet style="negative" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Negative" trailingText="Negative message" />
    </div>
  ),
  args: {},
};