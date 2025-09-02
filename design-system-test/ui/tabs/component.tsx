import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../utilities';
import { Counter } from '../counter';
import { ListTreeIcon } from '../icons';

interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  onValueChange?: (value: string) => void;
  selectedValue?: string;
  styleVariant?: string;
  verticalTabHeader?: string;
  orientation?: string;
  children?: React.ReactNode;
  className?: string;
}

function Tabs({
  className,
  onValueChange,
  orientation = 'horizontal',
  children,
  selectedValue,
  styleVariant = 'gray',
  verticalTabHeader='',
  ...props
}: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      {...props}
      className={cn(
        'flex',
        orientation === 'vertical' ? 'flex-row-reverse' : 'flex-col',
        className
      )}
      value={selectedValue}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as any, {
              onValueChange,
              selectedValue,
              styleVariant,
              orientation,
              verticalTabHeader,
            })
          : child
      )}
    </TabsPrimitive.Root>
  );
}

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

function TabsList({
  className,
  styleVariant,
  orientation,
  children,
  onValueChange,
  selectedValue,
  verticalTabHeader,
  showHeaderIcon,
  ...props
}: TabsListProps) {
  return (
    <div>
    {verticalTabHeader && <div className={`flex items-center justify-start text-interactive-text-${styleVariant}-muted font-primary text-base font-medium mb-2 pr-1`}>
        {showHeaderIcon && <ListTreeIcon size="large" className={`fill-surface-icon-${styleVariant}-muted mr-1`} />}
        <div>{verticalTabHeader}</div>
        </div>} 
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          `bg-muted text-muted-foreground`,
          orientation === 'vertical'
            ? `flex flex-col h-fit w-36 items-start justify-start rounded-lg border-l-2 border-interactive-border-${styleVariant}-subtle rounded-0.5`
            : `inline-flex h-9 w-fit items-center justify-center rounded-lg  border-b-2 border-interactive-border-${styleVariant}-subtle rounded-0.5`,
          ``,
          verticalTabHeader ? 'ml-2' : '',
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child as any, {
                onValueChange,
                selectedValue,
                styleVariant,
                orientation,
                isLastTab: index === React.Children.count(children) - 1,
              })
            : child
        )}
      </TabsPrimitive.List>
    </div>
  );
}

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

function TabsTrigger({
  className,
  name,
  leadingIcon,
  counter,
  value,
  selectedValue,
  styleVariant,
  onValueChange,
  orientation,
  isLastTab,
  ...props
}: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger value={value} data-slot="tabs-trigger" {...props}>
      <button
        className={`${
          orientation === 'vertical' ? `flex` : `${!isLastTab ? 'mr-4' : ''} pt-1`
        } focus-visible:plum-focus focus:none rounded-2 font-semibold`}
        onClick={() => {
          onValueChange?.(value as string);
        }}
      >
        {selectedValue === value && orientation === 'vertical' ? (
          <div
            className={`w-05 bg-interactive-icon-${styleVariant}-muted  ml-1-negative rounded-0.5`}
          ></div>
        ) : (
          ''
        )}
        <div
          className={cn(`flex items-center font-primary text-base font-primary text-interactive-text-${styleVariant}-${selectedValue === value ? 'normal' : 'muted'} 
        hover:text-interactive-text-${styleVariant}-subtle 
        focus-visible:plum-focus ${
          orientation === 'vertical'
            ? `m-1 ml-${selectedValue === value ? '45' : '4'}`
            : `mb-${selectedValue === value ? '25' : '2'}`
        } `, `${orientation === 'horizontal' ? 'mb-2' : ''}`)}
        >
          {leadingIcon &&
            React.createElement(leadingIcon as any, {
              size: 'large',
              className: `mr-1 fill-surface-icon-${styleVariant}-${
                styleVariant === 'beige' ? 'muted' : 'subtle'
              }`,
            })}
          <div>{name}</div>
          {counter && (
            <div className={`ml-1`}>
              <Counter
                size="medium"
                styleVariant={
                  styleVariant === 'beige' ? 'information' : 'neutral'
                }
                value={counter}
              />
            </div>
          )}
        </div>
        {selectedValue === value && orientation === 'horizontal' ? (
          <div
            className={`h-05 bg-interactive-icon-${styleVariant}-muted mb-1-negative rounded-0.5`}
          ></div>
        ) : (
          ''
        )}
      </button>
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
