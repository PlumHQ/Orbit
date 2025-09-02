import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
    onValueChange?: (value: string) => void;
    selectedValue?: string;
    styleVariant?: string;
    verticalTabHeader?: string;
    orientation?: string;
    children?: React.ReactNode;
    className?: string;
}
declare function Tabs({ className, onValueChange, orientation, children, selectedValue, styleVariant, verticalTabHeader, ...props }: TabsProps): import("react/jsx-runtime").JSX.Element;
interface TabsListProps extends React.ComponentProps<typeof TabsPrimitive.List> {
    styleVariant?: string;
    orientation?: string;
    onValueChange?: (value: string) => void;
    selectedValue?: string;
    verticalTabHeader?: string;
    className?: string;
    children?: React.ReactNode;
    showHeaderIcon?: boolean;
}
declare function TabsList({ className, styleVariant, orientation, children, onValueChange, selectedValue, verticalTabHeader, showHeaderIcon, ...props }: TabsListProps): import("react/jsx-runtime").JSX.Element;
interface TabsTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
    name?: string;
    leadingIcon?: React.FC;
    counter?: number;
    selectedValue?: string;
    styleVariant?: string;
    onValueChange?: (value: string) => void;
    orientation?: string;
    value: string;
    className?: string;
    isLastTab?: boolean;
}
declare function TabsTrigger({ className, name, leadingIcon, counter, value, selectedValue, styleVariant, onValueChange, orientation, isLastTab, ...props }: TabsTriggerProps): import("react/jsx-runtime").JSX.Element;
declare function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
export { Tabs, TabsList, TabsTrigger, TabsContent };
