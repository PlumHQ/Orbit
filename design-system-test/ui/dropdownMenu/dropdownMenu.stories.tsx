import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DropdownMenuDemo } from './dropdownMenu.composition';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from './index';
import { Button } from '../button';
import { UserIcon, SettingsIcon, TrashIcon } from '../icons';

// We'll use the working composition as our primary story
const meta: Meta = {
  title: 'Design System/DropdownMenu',
  component: DropdownMenuDemo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile dropdown menu component with support for various item types, sub-menus, checkboxes, radio buttons, and destructive actions.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DropdownMenuDemo />,
};

export const FullExample: Story = {
  render: () => <DropdownMenuDemo />,
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive example showing all dropdown menu features including groups, checkboxes, radio items, sub-menus, shortcuts, and destructive actions.',
      },
    },
  },
};

export const SimpleMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary" styleVariant="primary" size="medium" label="Simple Menu" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem {...({ name: "View Profile", leadingIcon: UserIcon } as any)} />
          <DropdownMenuItem {...({ name: "Settings", leadingIcon: SettingsIcon } as any)} />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem {...({ name: "Sign Out", variant: "destructive" } as any)} />
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A simple dropdown menu with basic items and grouping.',
      },
    },
  },
};

export const WithDestructiveAction: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" styleVariant="destructive" size="medium" label="Danger Zone" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Account Actions</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem {...({ name: "Edit Profile", leadingIcon: UserIcon } as any)} />
          <DropdownMenuItem {...({ name: "Account Settings", leadingIcon: SettingsIcon } as any)} />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem {...({ name: "Delete Account", variant: "destructive", leadingIcon: TrashIcon } as any)} />
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu with destructive actions highlighted in red.',
      },
    },
  },
};

export const MinimalMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary" styleVariant="gray" size="small" label="Options" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem {...({ name: "Edit" } as any)} />
        <DropdownMenuItem {...({ name: "Duplicate" } as any)} />
        <DropdownMenuSeparator />
        <DropdownMenuItem {...({ name: "Delete", variant: "destructive" } as any)} />
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A minimal dropdown menu without icons or groups.',
      },
    },
  },
};