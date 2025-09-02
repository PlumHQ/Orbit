import { default as React } from '../../../node_modules/react';
import { TActionableListItemBehaviours, TActionableListItemSizes, TActionableListItemVariants } from './types';
import { TBadgeSizeVariants, TBadgeStyleVariants, TBadgeVariants } from '../badge';
import { TLeafletStyle } from '../leaflet';
export interface IActionableListItem {
    variant: TActionableListItemVariants;
    size: TActionableListItemSizes;
    behaviour: TActionableListItemBehaviours;
    leadingAsset: React.FC;
    primaryText: string;
    secondaryTexts?: string[];
    tertiaryText: string;
    badgeText?: string;
    badgeSize?: TBadgeSizeVariants;
    badgeVariant?: TBadgeVariants;
    badgeStyle?: TBadgeStyleVariants;
    callToAction?: string;
    leafletLeadingIcon?: React.FC;
    leafletLeadingText?: string;
    leafletTrailingIcon?: React.FC;
    leafletTrailingText?: string;
    leafletStyle?: TLeafletStyle;
    onItemClick?: () => void;
    onNotificationClick?: () => void;
    showRightArrowIcon?: boolean;
    showNotification?: boolean;
}
export declare const ActionableListItem: ({ variant, size, behaviour, leadingAsset, primaryText, secondaryTexts, tertiaryText, callToAction, badgeText, badgeSize, badgeVariant, badgeStyle, leafletLeadingIcon, leafletLeadingText, leafletTrailingIcon, leafletTrailingText, leafletStyle, showRightArrowIcon, showNotification, onNotificationClick, onItemClick, }: IActionableListItem) => import("react/jsx-runtime").JSX.Element;
