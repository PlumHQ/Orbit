import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './index';

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A card component for grouping content with different sizes and styles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small', 'extraSmall'],
      description: 'The size of the card',
    },
    cardStyle: {
      control: { type: 'select' },
      options: ['primary', 'positive', 'negative', 'secondary'],
      description: 'The style variant of the card',
    },
    children: {
      control: { type: 'text' },
      description: 'The content inside the card',
    },
  },
  args: {
    size: 'medium',
    cardStyle: 'primary',
    children: 'Card content goes here',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    cardStyle: 'primary',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">This is some example content inside the card component.</p>
      </div>
    ),
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Card {...args} size="small" cardStyle={args.cardStyle}>
        <h4 className="font-medium">Small Card</h4>
        <p className="text-sm">Small card content</p>
      </Card>
      <Card {...args} size="medium" cardStyle={args.cardStyle}>
        <h4 className="font-medium">Medium Card</h4>
        <p className="text-sm">Medium card content</p>
      </Card>
      <Card {...args} size="large" cardStyle={args.cardStyle}>
        <h4 className="font-medium">Large Card</h4>
        <p className="text-sm">Large card content with more padding</p>
      </Card>
      <Card {...args} size="extraSmall" cardStyle={args.cardStyle}>
        <h4 className="font-medium">Extra Small Card</h4>
        <p className="text-sm">Extra small card content</p>
      </Card>
    </div>
  ),
  args: {
    cardStyle: 'primary',
  },
};

export const AllStyles: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-4">
      <Card {...args} cardStyle="primary" size="medium">
        <h4 className="font-medium">Primary Card</h4>
        <p className="text-sm">Primary style card</p>
      </Card>
      <Card {...args} cardStyle="secondary" size="medium">
        <h4 className="font-medium">Secondary Card</h4>
        <p className="text-sm">Secondary style card</p>
      </Card>
      <Card {...args} cardStyle="positive" size="medium">
        <h4 className="font-medium">Positive Card</h4>
        <p className="text-sm">Positive style card</p>
      </Card>
      <Card {...args} cardStyle="negative" size="medium">
        <h4 className="font-medium">Negative Card</h4>
        <p className="text-sm">Negative style card</p>
      </Card>
    </div>
  ),
  args: {
    size: 'medium',
  },
};