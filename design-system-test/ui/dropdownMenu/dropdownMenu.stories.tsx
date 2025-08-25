import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
} from './index';
import { Button } from '../button';
import { UserIcon, SettingsIcon, TrashIcon, RoundedAddIcon, DownloadIcon, EllipsisIcon, FileText, HeartIcon } from '../icons';

// We'll use the working composition as our primary story
const meta: Meta = {
  title: 'Design System/DropdownMenu',
  component: DropdownMenu,
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


export const FullExample: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary" styleVariant="primary" size="medium" label="Full Example" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem {...({ name: "Profile", leadingIcon: UserIcon } as any)} trailingIcon={HeartIcon} shortcutKey="⇧⌘P">
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem {...({ name: "Settings", leadingIcon: SettingsIcon } as any)}>
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuItem {...({ name: "New File", leadingIcon: RoundedAddIcon } as any)}>
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger {...({ name: "Share", leadingIcon: EllipsisIcon } as any)} />
            <DropdownMenuSubContent>
              <DropdownMenuItem {...({ name: "Email", leadingIcon: FileText } as any)} />
              <DropdownMenuItem {...({ name: "Message", leadingIcon: FileText } as any)} />
              <DropdownMenuSeparator />
              <DropdownMenuItem {...({ name: "More...", leadingIcon: EllipsisIcon } as any)} />
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem {...({ name: "Download", leadingIcon: DownloadIcon } as any)}>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Preferences</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked={true} name="Show Status Bar">
          Show Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={false} disabled name="Show Activity Bar (Disabled)">
          Show Activity Bar (Disabled)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={true} name="Show Panel">
          Show Panel
        </DropdownMenuCheckboxItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="light">
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator />
        
        <DropdownMenuItem {...({ name: "Disabled Item", disabled: true } as any)} />
        <DropdownMenuItem {...({ name: "Log out", variant: "destructive" } as any)}>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
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