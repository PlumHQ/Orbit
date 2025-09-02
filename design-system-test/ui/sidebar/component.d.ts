import { VariantProps } from 'class-variance-authority';
import { IIconProps } from '../icons';
import { Button } from '../button';
import { TooltipContent } from '../tooltip';
import * as React from "react";
type SidebarContextProps = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
interface SidebarMenuItem {
    title: string;
    icon?: () => React.FC<IIconProps> | null;
    url: string;
    children?: {
        title: string;
        icon: () => React.FC<IIconProps> | null;
        url: string;
    }[];
    expanded?: boolean;
    counter?: number;
    dropdownChildren?: boolean;
    onClick?: () => void;
}
declare function useSidebar(): SidebarContextProps;
declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): import("react/jsx-runtime").JSX.Element;
declare function Sidebar({ side, variant, collapsible, className, children, ...props }: React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarTrigger({ onClick, ...props }: React.ComponentProps<typeof Button>): import("react/jsx-runtime").JSX.Element;
declare function SidebarRail({ className, ...props }: React.ComponentProps<"button">): import("react/jsx-runtime").JSX.Element;
declare function SidebarInset({ className, ...props }: React.ComponentProps<"main">): import("react/jsx-runtime").JSX.Element;
declare function SidebarHeader({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function SidebarFooter({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function SidebarContent({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function SidebarGroup({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function SidebarGroupLabel({ expandedIllustration, collapsedIllustration, className, asChild, ...props }: React.ComponentProps<"div"> & {
    asChild?: boolean;
    expandedIllustration?: React.FC<IIconProps>;
    collapsedIllustration?: React.FC<IIconProps>;
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarGroupAction({ className, asChild, ...props }: React.ComponentProps<"button"> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarGroupContent({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">): import("react/jsx-runtime").JSX.Element;
declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "outline" | "default" | null | undefined;
    size?: "default" | "lg" | "sm" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function SidebarMenuButton({ item, asChild, isActive, variant, size, tooltip, tabIndex, className, ...props }: React.ComponentProps<"button"> & {
    item: SidebarMenuItem;
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
    tabIndex?: number;
} & VariantProps<typeof sidebarMenuButtonVariants>): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuBadge({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuSkeleton({ className, showIcon, ...props }: React.ComponentProps<"div"> & {
    showIcon?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<"li">): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuSubButton({ item, asChild, size, isActive, className, ...props }: React.ComponentProps<"a"> & {
    item: {
        title: string;
        icon: () => React.FC<IIconProps> | null;
        url: string;
        counter?: number;
    };
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}): import("react/jsx-runtime").JSX.Element | null;
export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarTrigger, useSidebar, };
