import { IIconProps } from '../icons';
import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
declare function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function DropdownMenuPortal({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>): import("react/jsx-runtime").JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
declare function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>): import("react/jsx-runtime").JSX.Element;
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
};
declare function DropdownMenuItem({ className, inset, variant, name, leadingIcon, trailingIcon, trailingText, shortcutKey, onClick, disabled, }: DropdownMenuItemProps): import("react/jsx-runtime").JSX.Element;
type DropdownMenuCheckboxItemProps = React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
    name?: string;
    checked?: boolean;
    trailingIcon?: React.ComponentType<IIconProps>;
    trailingText?: string;
    onSelect?: () => void;
    disabled?: boolean;
};
declare function DropdownMenuCheckboxItem({ className, name, checked, trailingIcon, trailingText, onSelect, disabled, ...props }: DropdownMenuCheckboxItemProps): import("react/jsx-runtime").JSX.Element;
type DropdownMenuRadioGroupProps = React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup> & {
    value?: string;
    onSelectionChange?: (value: string) => void;
};
declare function DropdownMenuRadioGroup({ children, value, onSelectionChange, ...props }: DropdownMenuRadioGroupProps): import("react/jsx-runtime").JSX.Element;
type DropdownMenuRadioItemProps = React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & {
    name?: string;
    trailingIcon?: React.ComponentType<IIconProps>;
    trailingText?: string;
    selectedValue?: string;
    onSelectionChange?: (value: string) => void;
    disabled?: boolean;
};
declare function DropdownMenuRadioItem({ className, name, trailingIcon, trailingText, selectedValue, onSelectionChange, disabled, value, ...props }: DropdownMenuRadioItemProps): import("react/jsx-runtime").JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>): import("react/jsx-runtime").JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<'span'>): import("react/jsx-runtime").JSX.Element;
declare function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>): import("react/jsx-runtime").JSX.Element;
type DropdownMenuSubTriggerProps = React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
    leadingIcon?: React.ComponentType<IIconProps>;
    name?: string;
};
declare function DropdownMenuSubTrigger({ className, inset, children, leadingIcon, name, ...props }: DropdownMenuSubTriggerProps): import("react/jsx-runtime").JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>): import("react/jsx-runtime").JSX.Element;
export { DropdownMenu, DropdownMenuPortal, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, };
