import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An avatar component for displaying user profile images with fallback support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['image', 'initials'],
      description: 'The shape variant of the avatar',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the avatar',
    },
    src: {
      control: { type: 'text' },
      description: 'The image source URL',
    },
    fallback: {
      control: { type: 'text' },
      description: 'Fallback text when image is not available',
    },
    alt: {
      control: { type: 'text' },
      description: 'Alt text for the image',
    },
  },
  args: {
    variant: 'image',
    size: 'medium',
    src: 'https://via.placeholder.com/150',
    fallback: 'JD',
    alt: 'Avatar',
    onClick: () => console.log('Avatar clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultImage: Story = {
  render: (args) => (
    <Avatar {...args} variant={args.variant} fallback={args.fallback} alt={args.alt} src={args.src} onClick={() => {}} size="medium" />
  ),
  args: {
    variant: "initials",
    size: "large",
    src: "https://cdn-icons-png.freepik.com/256/9165/9165802.png?semt=ais_white_label",
    fallback: 'JD',
    alt: 'User Avatar',
  },
};

export const DefaultInitials: Story = {
  render: (args) => (
    <Avatar {...args} variant={args.variant} fallback={args.fallback} alt={args.alt} src={args.src} onClick={() => {}} size="medium" />
  ),
  args: {
    variant: "initials",
    size: "large",
    fallback: 'LI',
    alt: 'User Avatar',
    onClick: () => console.log('Avatar clicked'),
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Avatar {...args} src={args.src} size="small" variant={args.variant} onClick={() => {}} />
      <Avatar {...args} src={args.src} size="medium" variant={args.variant} onClick={() => {}} />
      <Avatar {...args} src={args.src} size="large" variant={args.variant} onClick={() => {}} />
    </div>
  ),
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Avatar {...args} variant="image" src={args.src} onClick={() => {}} size="medium" />
      <Avatar {...args} variant="initials" src={args.src} onClick={() => {}} size="medium" />
    </div>
  ),
  args: {
    size: 'medium',
    src: 'https://cdn-icons-png.freepik.com/256/9165/9165802.png?semt=ais_white_label',
    fallback: 'JD',
    alt: 'User Avatar',
  },
};