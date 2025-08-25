import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ActionableListItem } from './index';
import { InfoIcon } from '../icons';
import { HealthInsuraceIllustration } from '../illustrations';

const meta: Meta<typeof ActionableListItem> = {
    title: 'Design System/ActionableListItem',
    component: ActionableListItem,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'An actionable list item component for interactive list elements.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary'],
            description: 'The variant of the list item',
        },
        size: {
            control: { type: 'select' },
            options: ['medium', 'large'],
            description: 'The size of the list item',
        },
        behaviour: {
            control: { type: 'select' },
            options: ['click', 'select'],
            description: 'The behavior of the list item',
        },
        primaryText: {
            control: { type: 'text' },
            description: 'The primary text content',
        },
        secondaryTexts: {
            control: { type: 'object' },
            description: 'Array of secondary text strings',
        },
        tertiaryText: {
            control: { type: 'text' },
            description: 'The tertiary text content',
        },
        badgeText: {
            control: { type: 'text' },
            description: 'Optional badge text',
        },
        badgeSize: {
            control: { type: 'select' },
            options: ['large', 'medium'],
            description: 'Size of the badge',
        },
        badgeVariant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'tertiary'],
            description: 'Variant of the badge',
        },
        badgeStyle: {
            control: { type: 'select' },
            options: ['positive', 'negative', 'neutral', 'information', 'notice'],
            description: 'Style of the badge',
        },
        callToAction: {
            control: { type: 'text' },
            description: 'Call to action text',
        },
        leafletLeadingText: {
            control: { type: 'text' },
            description: 'Leading text for leaflet',
        },
        leafletTrailingText: {
            control: { type: 'text' },
            description: 'Trailing text for leaflet',
        },
        leafletStyle: {
            control: { type: 'select' },
            options: ['positive', 'neutral', 'negative', 'information', 'notice'],
            description: 'Style of the leaflet',
        },
        onItemClick: {
            action: 'item clicked',
            description: 'Callback fired when item is clicked',
        },
        onNotificationClick: {
            action: 'notification clicked',
            description: 'Callback fired when notification is clicked',
        },
    },
    args: {
        variant: 'primary',
        size: 'medium',
        behaviour: 'click',
        leadingAsset: InfoIcon,
        primaryText: 'List Item',
        secondaryTexts: ['Description text'],
        tertiaryText: 'Tertiary text',
        callToAction: 'Action',
        leafletLeadingText: 'Leading',
        leafletTrailingText: 'Trailing',
        leafletStyle: 'positive',
        onItemClick: () => console.log('Item clicked'),
        onNotificationClick: () => console.log('Notification clicked'),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultWithBadge: Story = {
    render: (args) => (
        <div>
            <ActionableListItem {...args} size={args.size} primaryText={args.primaryText} secondaryTexts={args.secondaryTexts} leadingAsset={args.leadingAsset} tertiaryText={args.tertiaryText} variant={args.variant} behaviour={args.behaviour} badgeText={args.badgeText} badgeSize={args.badgeSize} badgeVariant={args.badgeVariant} badgeStyle={args.badgeStyle} />
        </div>
    ),
    args: {
        variant: 'primary',
        size: 'medium',
        behaviour: 'click',
        primaryText: 'List Item',
        secondaryTexts: ['Description text'],
        leadingAsset: HealthInsuraceIllustration,
        tertiaryText: 'Tertiary text',
        badgeText: 'Badge',
        badgeSize: 'medium',
        badgeVariant: 'primary',
        badgeStyle: 'positive',
        showRightArrowIcon: true,
    },
};

export const DefaultWithCallToAction: Story = {
    render: (args) => (
        <div>
            <ActionableListItem {...args} size={args.size} primaryText={args.primaryText} secondaryTexts={args.secondaryTexts} leadingAsset={args.leadingAsset} tertiaryText={args.tertiaryText} variant={args.variant} behaviour={args.behaviour} />
        </div>
    ),
    args: {
        variant: 'primary',
        size: 'medium',
        behaviour: 'click',
        primaryText: 'List Item',
        secondaryTexts: ['Description text'],
        leadingAsset: HealthInsuraceIllustration,
        tertiaryText: 'Tertiary text',
        callToAction: 'Read more',
        leafletLeadingText: 'Leading',
        leafletTrailingText: 'Trailing',
        leafletStyle: 'positive',
        showRightArrowIcon: true,
    },
};

export const DefaultWithSelectable: Story = {
    render: (args) => (
        <div>
            <ActionableListItem {...args} size={args.size} primaryText={args.primaryText} secondaryTexts={args.secondaryTexts} leadingAsset={args.leadingAsset} tertiaryText={args.tertiaryText} variant={args.variant} behaviour={args.behaviour} />
        </div>
    ),
    args: {
        variant: 'primary',
        size: 'medium',
        behaviour: 'select',
        primaryText: 'Selectable Item',
        secondaryTexts: ['Click to select'],
        leadingAsset: HealthInsuraceIllustration,
        tertiaryText: 'Tertiary text',
        showRightArrowIcon: true,
    },
};

export const AllSizes: Story = {
    render: (args) => (
        <div className="space-y-2 w-150 max-w-md">
            <ActionableListItem  {...args} size="medium" primaryText="Medium Item" secondaryTexts={["Medium size"]} leadingAsset={HealthInsuraceIllustration} tertiaryText="Medium tertiary" variant="primary" behaviour="click" />
            <ActionableListItem {...args} size="medium" primaryText="Medium Item 2" secondaryTexts={["Medium size"]} leadingAsset={HealthInsuraceIllustration} tertiaryText="Medium tertiary" variant="primary" behaviour="click" />
            <ActionableListItem {...args} size="large" primaryText="Large Item" secondaryTexts={["Large size"]} leadingAsset={HealthInsuraceIllustration} tertiaryText="Large tertiary" variant="primary" behaviour="click" />
        </div>
    ),
    args: {
        variant: 'primary',
        behaviour: 'click',
        leadingAsset: InfoIcon,
        tertiaryText: 'Tertiary text',
    },
};

export const AllVariants: Story = {
    render: (args) => (
        <div className="space-y-2 w-150 max-w-md">
            <ActionableListItem variant="primary" callToAction='Read more' size="medium" behaviour="click" primaryText="Primary" secondaryTexts={["Primary variant"]} leadingAsset={HealthInsuraceIllustration} leafletLeadingText='Leading' leafletTrailingText='Trailing'  tertiaryText="Primary tertiary" />
            <ActionableListItem variant="secondary" callToAction='Read more' size="medium" behaviour="click" primaryText="Secondary" secondaryTexts={["Secondary variant"]} leadingAsset={HealthInsuraceIllustration} leafletLeadingText='Leading'  tertiaryText="Secondary tertiary" />
            <ActionableListItem variant="primary" badgeText='Badge' size="medium" behaviour="click" primaryText="Primary Alt" secondaryTexts={["Primary alt variant"]} leadingAsset={HealthInsuraceIllustration} leafletLeadingText='Leading' leafletTrailingText='Trailing'  tertiaryText="Primary alt tertiary" />
            <ActionableListItem variant="primary" badgeText='Badge' size="medium" behaviour="select" primaryText="Primary Alt" secondaryTexts={["Primary alt variant"]} leadingAsset={HealthInsuraceIllustration} leafletLeadingText='Leading' leafletTrailingText='Trailing'  tertiaryText="Primary alt tertiary" />
        </div>
    ),
    args: {
        leadingAsset: InfoIcon,
        tertiaryText: 'Tertiary text',
        showRightArrowIcon: true,
    },
};