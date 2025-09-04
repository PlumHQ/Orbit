'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {
  ChevronRight,
  CircleDotIcon,
  CircleIcon,
  CommandKeyIcon,
  IIconProps,
  SquareCheckIcon,
  SquareIcon,
} from '../icons';
import { cn } from '../utilities';
import '@fontsource/inter';
import { Divider } from '../divider';

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          'bg-interactive-background-white-normal text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto border p-2 shadow-md rounded-3 dropdown-shadow z-max',
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

type DropdownMenuItemProps = React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: 'default' | 'destructive';
  name?: string;
  leadingIcon?: React.ComponentType<IIconProps>;
  trailingIcon?: React.ComponentType<IIconProps>;
  trailingText?: string;
  shortcutKey?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  name = '',
  leadingIcon,
  trailingIcon,
  trailingText,
  shortcutKey,
  onClick,
  disabled=false,
}: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        disabled ? `` : `cursor-pointer focus-visible:plum-focus focus-within:none hover:bg-interactive-background-${variant === "default" ? 'gray-normal' : 'destructive-muted'} rounded-2`,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <div
        className={`py-2 px-15 flex w-full items-center justify-between text-interactive-text-${variant === "destructive" ? 'destructive' : 'gray'}-${disabled ? 'disabled' : 'normal'} font-medium text-sm font-primary`}
      >
        <div className={`flex items-center mr-2`}>
          {leadingIcon && (
            <div className={`mr-1`}>
              {React.createElement(leadingIcon as any, {
                size: 'medium',
                className: `fill-interactive-icon-${variant === "destructive" ? 'destructive' : 'gray'}-${disabled ? 'disabled' : 'subtle'}`,
              })}
            </div>
          )}

          <>{name}</>
        </div>
        {variant === "default" ? <div className={`flex items-center`}>
          {shortcutKey && (
            <div className={`flex items-center mr-05`}>
              <CommandKeyIcon
                size="small"
                className={`mr-05 fill-interactive-icon-gray-muted`}
              />
              <div
                className={`text-interactive-text-gray-muted font-normal ml-05`}
              >
                {shortcutKey}
              </div>
            </div>
          )}
          {trailingText && (
            <div
              className={`text-interactive-text-gray-muted font-normal ml-05`}
            >
              {trailingText}
            </div>
          )}
          {trailingIcon &&
            React.createElement(trailingIcon as any, {
              size: 'medium',
              className: `fill-interactive-icon-gray-muted ml-05`,
            })}
        </div> : ''}
      </div>
    </DropdownMenuPrimitive.Item>
  );
}

type DropdownMenuCheckboxItemProps = React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
  name?: string;
  checked?: boolean;
  trailingIcon?: React.ComponentType<IIconProps>;
  trailingText?: string;
  onSelect?: () => void;
  disabled?: boolean;
}

function DropdownMenuCheckboxItem({
  className,
  name,
  checked,
  trailingIcon,
  trailingText,
  onSelect,
  disabled,
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenuItem
      name={name}
      leadingIcon={
        checked
          ? () =>
              SquareCheckIcon({
                size: 'medium',
                className: `fill-interactive-icon-primary-${disabled ? 'disabled' : 'normal'}`,
              })
          : () =>
              SquareIcon({
                size: 'medium',
                className: `fill-interactive-icon-gray-${
                  disabled ? 'disabled' : 'subtle'
                }`,
              })
      }
      trailingIcon={trailingIcon}
      trailingText={trailingText}
      onClick={!disabled ? onSelect : undefined}
      disabled={disabled}
      {...props}
    />
  );
}

type DropdownMenuRadioGroupProps = React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup> & {
  value?: string;
  onSelectionChange?: (value: string) => void;
}

function DropdownMenuRadioGroup({
  children,
  value,
  onSelectionChange,
  ...props
  }: DropdownMenuRadioGroupProps) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      onValueChange={(value) => {
        if (onSelectionChange) {
          onSelectionChange(value);
        }
      }}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<DropdownMenuRadioItemProps>, {
              selectedValue: value,
              onSelectionChange: onSelectionChange,
            })
          : child
      )}
    </DropdownMenuPrimitive.RadioGroup>
  );
}

type DropdownMenuRadioItemProps = React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & {
  name?: string;
  trailingIcon?: React.ComponentType<IIconProps>;
  trailingText?: string;
  selectedValue?: string;
  onSelectionChange?: (value: string) => void;
  disabled?: boolean;
}

function DropdownMenuRadioItem({
  className,
  name,
  trailingIcon,
  trailingText,
  selectedValue,
  onSelectionChange,
  disabled = false,
  value,
  ...props
}: DropdownMenuRadioItemProps) {
  return (
    <DropdownMenuItem
      name={name}
      trailingIcon={trailingIcon}
      trailingText={trailingText}
      onClick={() => {
        if (onSelectionChange) {
          onSelectionChange(value);
        }
      }}
      disabled={disabled}
      leadingIcon={
        value === selectedValue
          ? () =>
              CircleDotIcon({
                size: 'medium',
                className: `fill-interactive-icon-primary-${
                  disabled ? 'disabled' : 'normal'
                }`,
              })
          : () =>
              CircleIcon({
                size: 'medium',
                className: `fill-interactive-icon-gray-${
                  disabled ? 'disabled' : 'subtle'
                }`,
              })
      }
    />
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        'p-2 border-b border-surface-border-gray-subtle text-sm font-primary font-semibold text-interactive-text-gray-muted',
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <div className={`px-2 py-1`}>
      <Divider stroke="dashed" dividerStyle={'gray'} variant={'subtle'} />
    </div>
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

type DropdownMenuSubTriggerProps = React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
  leadingIcon?: React.ComponentType<IIconProps>;
  name?: string;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  leadingIcon,
  name,
  ...props
}: DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        `w-full focus-within:none focus:none focus-visible:outline-none 
        data-[state=open]:bg-accent data-[state=open]:text-accent-foreground 
        flex cursor-default items-center data-[inset]:pl-8 justify-between rounded-2
        hover:bg-interactive-background-gray-normal`,
        className
      )}
      {...props}
    >
      <DropdownMenuItem name={name} leadingIcon={leadingIcon} />
      <ChevronRight
        size="small"
        className={`fill-interactive-icon-gray-muted`}
      />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        'ml-3 bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        className
      )}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
