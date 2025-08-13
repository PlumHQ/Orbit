import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './index';
import { DownloadIcon, RightArrowIcon } from '@pluminsurance/design-system-test.icons';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and styles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'The variant of the button',
    },
    styleVariant: {
      control: { type: 'select' },
      options: ['primary', 'white', 'beige', 'gray', 'destructive'],
      description: 'The style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    label: {
      control: { type: 'text' },
      description: 'The text label of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in loading state',
    },
    iconOnly: {
      control: { type: 'boolean' },
      description: 'Whether to show only the icon',
    },
  },
  args: {
    variant: 'primary',
    styleVariant: 'primary',
    size: 'medium',
    label: 'Button',
    disabled: false,
    loading: false,
    iconOnly: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    styleVariant: 'primary',
    size: 'medium',
    label: 'Primary Button',
    leadingIcon: DownloadIcon,
    trailingIcon: RightArrowIcon,
    iconOnly: false,
    disabled: false,
    loading: false,
    asChild: false,
    onClick: () => {
      console.log('Button clicked');
    },   
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button variant="primary" styleVariant="primary" size="small" label="Small" />
      <Button variant="primary" styleVariant="primary" size="medium" label="Medium" />
      <Button variant="primary" styleVariant="primary" size="large" label="Large" />
    </div>
  ),
  args: {
    variant: 'primary',
    styleVariant: 'primary',
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="space-y-4 p-4 rounded-25">
      <div className="flex gap-4">
        <div className="flex p-4 rounded-4 flex-col gap-2">
        <Button {...args} variant="primary" styleVariant="primary" size="medium" label="Primary" />
        {/* <Button {...args} variant="secondary" styleVariant="primary" size="medium" label="Secondary" /> */}
        {/* <Button {...args} variant="tertiary" styleVariant="primary" size="medium" label="Tertiary" /> */}
        </div>
        <div className="flex p-4 rounded-4 bg-feedback-background-neutral-intense flex-col gap-2">
        <Button {...args} variant="primary" styleVariant="white" size="medium" label="Primary" />
        <Button {...args} variant="secondary" styleVariant="white" size="medium" label="Secondary" />
        {/* <Button {...args} variant="tertiary" styleVariant="white" size="medium" label="Tertiary" /> */}
        </div>
        <div className="flex p-4 rounded-4 flex-col gap-2">
        {/* <Button {...args} variant="primary" styleVariant="gray" size="medium" label="Primary" /> */}
        <Button {...args} variant="secondary" styleVariant="gray" size="medium" label="Secondary" />
        <Button {...args} variant="tertiary" styleVariant="gray" size="medium" label="Tertiary" />
        </div>
        <div className="flex p-4 rounded-4 flex-col gap-2">
        {/* <Button {...args} variant="primary" styleVariant="beige" size="medium" label="Primary" /> */}
        <Button {...args} variant="secondary" styleVariant="beige" size="medium" label="Secondary" />
        <Button {...args} variant="tertiary" styleVariant="beige" size="medium" label="Tertiary" />
        </div>
        <div className="flex p-4 rounded-4 flex-col gap-2">
        <Button {...args} variant="primary" styleVariant="destructive" size="medium" label="Primary" />
        <Button {...args} variant="secondary" styleVariant="destructive" size="medium" label="Secondary" />
        <Button {...args} variant="tertiary" styleVariant="destructive" size="medium" label="Tertiary" />
        </div>
      </div>
    </div>
  ),
  args: {
    styleVariant: 'primary',
    size: 'medium',
  },
};

export const StyleVariants: Story = {
  render: (args) => (
    <div className="space-y-4 bg-feedback-background-information-normal p-4 rounded-25">
      <div className="flex gap-4 flex-wrap">
        <div className="flex flex-col gap-2">
          <Button {...args} styleVariant="primary" variant='primary' size="medium" label="Primary" />
          <Button {...args} styleVariant="gray" variant='primary' size="medium" label="Gray" />
          <Button {...args} styleVariant="beige" variant='primary' size="medium" label="Beige" />
          <Button {...args} styleVariant="destructive" variant='primary' size="medium" label="Destructive" />
          <Button {...args} styleVariant="white" variant='primary' size="medium" label="White" />
        </div>
        <div className="flex flex-col gap-2">
          <Button {...args} styleVariant="primary" variant='secondary' size="medium" label="Primary" />
          <Button {...args} styleVariant="gray" variant='secondary' size="medium" label="Gray" />
          <Button {...args} styleVariant="beige" variant='secondary' size="medium" label="Beige" />
          <Button {...args} styleVariant="destructive" variant='secondary' size="medium" label="Destructive" />
          <Button {...args} styleVariant="white" variant='secondary' size="medium" label="White" />
        </div>
        <div className="flex flex-col gap-2">
          <Button {...args} styleVariant="primary" variant='tertiary' size="medium" label="Primary" />
          <Button {...args} styleVariant="gray" variant='tertiary' size="medium" label="Gray" />
          <Button {...args} styleVariant="beige" variant='tertiary' size="medium" label="Beige" />
          <Button {...args} styleVariant="destructive" variant='tertiary' size="medium" label="Destructive" />
          <Button {...args} styleVariant="white" variant='tertiary' size="medium" label="White" />
        </div>
      </div>
    </div>
      ),
      args: {
        variant: 'primary',
      size: 'medium',
  },
};