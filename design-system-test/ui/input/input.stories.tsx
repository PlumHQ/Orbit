import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from './index';
import { SearchIcon, CrossCloseIcon, InfoIcon } from '@pluminsurance/design-system-test.icons';

const meta: Meta<typeof Input> = {
  title: 'Design System/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile input component with validation states, helper text, and various configurations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the input',
    },
    label: {
      control: { type: 'text' },
      description: 'The label for the input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text below the input',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    isRequired: {
      control: { type: 'boolean' },
      description: 'Whether the input is required',
    },
    showValidation: {
      control: { type: 'boolean' },
      description: 'Whether to show validation state',
    },
  },
  args: {
    size: 'medium',
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We will never share your email',
    disabled: false,
    isRequired: false,
    showValidation: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    label: 'Email',
    placeholder: 'Enter your amount',
    helperText: 'We will never share your bank balance',
    onChange: (value: string) => {
      console.log(value);
    },
    prefixIcon: SearchIcon,
    showPrefixIcon: true,
    prefixValue: '$',  
    suffixIcon: InfoIcon,
    showSuffixIcon: true,
    suffixValue: '/-',
    showSuffixButton: true,
    shortcutKey: 'K',
    width: '100%',
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="space-y-4 w-80">
      <Input {...args} size="medium" label="Medium Input (no validation)" placeholder="Enter text..." helperText="Helper text" disabled={false} isRequired={false} showValidation={false} errorText="Error Text" successText="Success Text" onChange={() => {}} onBlur={() => {}} onFocus={() => {}} />
      <Input {...args} size="medium" label="Medium Input (valid)" placeholder="Enter text..." helperText="Helper text" disabled={false} isRequired={false} showValidation={true} errorText="Error Text" successText="Success Text" onChange={() => {}} onBlur={() => {}} onFocus={() => {}} isValid={() => true} />
      <Input {...args} size="large" label="Large Input (invalid)" placeholder="Enter text..." helperText="Helper text" disabled={false} isRequired={false} showValidation={true} errorText="Error Text" successText="Success Text" onChange={() => {}} onBlur={() => {}} onFocus={() => {}} isValid={() => false} />
    </div>
  ),
  args: {
    placeholder: 'Enter text...',
    onChange: (value: string) => {
      console.log(value);
    } 
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    helperText: 'This input cannot be edited',
  },
};