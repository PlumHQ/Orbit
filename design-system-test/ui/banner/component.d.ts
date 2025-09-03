import { default as React } from '../../../node_modules/react';
import { IBannerLayoutVariant, IBannerStyleVariant } from './types';
export interface IBanner {
    styleVariant: IBannerStyleVariant;
    layout: IBannerLayoutVariant;
    badgeText?: string;
    leadingAsset?: React.FC;
    trailingAsset?: React.FC;
    title?: string;
    body?: string;
    leadingButtonText?: string;
    buttonTrailingIcon?: React.FC;
    buttonLeadingIcon?: React.FC;
    trailingButtonText?: string;
    onButtonClick?: () => void;
    onBannerClose?: () => void;
    showCloseButton?: boolean;
}
export declare function Banner({ styleVariant, layout, badgeText, leadingAsset, title, body, leadingButtonText, buttonTrailingIcon, buttonLeadingIcon, trailingButtonText, trailingAsset, onButtonClick, onBannerClose, showCloseButton, }: IBanner): import("react/jsx-runtime").JSX.Element;
