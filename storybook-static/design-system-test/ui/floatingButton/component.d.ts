import { default as React } from '../../../node_modules/react';
import { IFloatingButtonSizes, IFloatingButtonStyles } from './types';
export interface IFloatingButton {
    size: IFloatingButtonSizes;
    styleVariant: IFloatingButtonStyles;
    iconOnly?: boolean;
    leadingIcon?: React.FC;
    label?: string;
    onClick?: () => void;
    loading?: boolean;
    trailingIcon?: React.FC;
}
export declare const FloatingButton: ({ styleVariant, size, iconOnly, leadingIcon, label, onClick, }: IFloatingButton) => import("react/jsx-runtime").JSX.Element;
