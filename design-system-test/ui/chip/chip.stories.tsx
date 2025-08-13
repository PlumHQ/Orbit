import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Chip } from './index';
import { InfoIcon } from '@pluminsurance/design-system-test.icons';
import { useState } from 'react';

const meta: Meta<typeof Chip> = {
  title: 'Design System/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A chip component for displaying selectable tags or filters.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    styleVariant: {
      control: { type: 'select' },
      options: ['gray', 'secondary', 'success', 'warning', 'error'],
      description: 'The style variant of the chip',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the chip',
    },
    value: {
      control: { type: 'text' },
      description: 'The text content of the chip',
    },
    isSelected: {
      control: { type: 'boolean' },
      description: 'Whether the chip is selected',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the chip is disabled',
    },
  },
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'Chip',
    isSelected: false,
    disabled: false,
    onClick: (value: string) => console.log('Clicked:', value),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'Default Chip',
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'Selected Chip',
    isSelected: true,
  },
};

export const WithIcon: Story = {
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'With Icon',
    isSelected: false,
    leadingIcon: InfoIcon,
  },
};

export const WithCounter: Story = {
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'Messages',
    isSelected: false,
    trailingCounter: 5,
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Chip {...args} size="small" value="Small" />
      <Chip {...args} size="medium" value="Medium" />
      <Chip {...args} size="medium" value="Large" />
    </div>
  ),
  args: {
    styleVariant: 'gray',
    isSelected: false,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [selectedChips, setSelectedChips] = useState<string[]>([]);
    
    const handleChipClick = (value: string) => {
      setSelectedChips(prev => 
        prev.includes(value) 
          ? prev.filter(chip => chip !== value)
          : [...prev, value]
      );
    };

    const chips = ['React', 'TypeScript', 'Storybook', 'Tailwind'];

    return (
      <div className="flex gap-2 flex-wrap">
        {chips.map(chip => (
          <Chip 
            key={chip}
            {...args}
            value={chip}
            isSelected={selectedChips.includes(chip)}
            onClick={handleChipClick}
          />
        ))}
      </div>
    );
  },
  args: {
    styleVariant: 'gray',
    size: 'medium',
  },
};