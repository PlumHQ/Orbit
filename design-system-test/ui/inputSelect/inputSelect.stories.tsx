import type { Meta, StoryObj } from '@storybook/react';
import { InputSelect } from './component';
import { UserIcon, SearchIcon, InfoIcon } from '../icons';

const meta: Meta<typeof InputSelect> = {
    title: 'Design System/InputSelect',
    component: InputSelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['medium', 'large'],
        },
        searchable: {
            control: { type: 'boolean' },
        },
        options: {
            control: { type: 'object' },
        },
        onSelect: {
            action: 'onSelect',
        },
        onFocus: {
            action: 'onFocus',
        },
        onBlur: {
            action: 'onBlur',
        },
        onChange: {
            action: 'onChange',
        },
        label: {
            control: { type: 'text' },
        },
        placeholder: {
            control: { type: 'text' },
        },
        helperText: {
            control: { type: 'text' },
        },
        helperLink: {
            control: { type: 'text' },
        },
        isRequired: {
            control: { type: 'boolean' },
        },
        isOptional: {
            control: { type: 'boolean' },
        },
        helpTextIcon: {
            control: { type: 'object' },
        },
        prefixIcon: {
            control: { type: 'object' },
        },
        prefixValue: {
            control: { type: 'text' },
        },
        isValidated: {
            control: { type: 'boolean' },
        },
        defaultValue: {
            control: { type: 'text' },
        },
        showValidation: {
            control: { type: 'boolean' },
        },
        isValid: {
            control: { type: 'boolean' },
        },
        errorText: {
            control: { type: 'text' },
        },
        successText: {
            control: { type: 'text' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        id: {
            control: { type: 'text' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
    { value: 'option1', label: 'Dropdown Menu Item Text', icon: UserIcon },
    { value: 'option2', label: 'Dropdown Menu Item Text', icon: UserIcon },
    { value: 'option3', label: 'Dropdown Menu Item Text', icon: UserIcon },
    { value: 'option4', label: 'Dropdown Menu Item Text', icon: UserIcon },
];

export const Large: Story = {
    args: {
        size: 'large',
        placeholder: 'Select',
        label: 'Label',
        helperText: 'Help text',
        prefixIcon: SearchIcon,
        prefixValue: '₹',
        options: sampleOptions,
        searchable: false,
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        placeholder: 'Select',
        label: 'Label',
        helperText: 'Help text',
        prefixIcon: SearchIcon,
        prefixValue: '₹',
        options: sampleOptions,
        searchable: false,
    },
};

export const SearchableDropdown: Story = {
    args: {
        size: 'large',
        placeholder: 'Type to search...',
        label: 'Searchable Select',
        helperText: 'Type to filter options',
        prefixIcon: SearchIcon,
        options: sampleOptions,
        searchable: true,
    },
};

export const WithValidation: Story = {
    args: {
        size: 'large',
        placeholder: 'Select',
        label: 'Required Field',
        isRequired: true,
        showValidation: true,
        errorText: 'This field is required',
        successText: 'Selection valid',
        options: sampleOptions,
    },
};

export const WithDisabled: Story = {
    args: {
        size: 'large',
        placeholder: 'Select',
        label: 'Disabled',
        disabled: true,
        prefixIcon: SearchIcon,
        prefixValue: '₹',
        options: sampleOptions,
        searchable: false,
    },
};