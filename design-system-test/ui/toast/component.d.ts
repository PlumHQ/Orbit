import { VariantProps } from 'class-variance-authority';
import { TToastStyleVariants } from './types';
import { IIconProps } from '../icons';
import * as React from 'react';
declare const toastVariants: (props?: ({
    styleVariant?: "positive" | "negative" | "neutral" | "promotional" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface IToast extends VariantProps<typeof toastVariants> {
    styleVariant?: TToastStyleVariants;
    title?: string;
    message?: string;
    onClose?: () => void;
    onButtonClick?: () => void;
    LeadingIcon?: React.FC<IIconProps>;
    action?: React.ReactNode;
}
export declare const Toast: ({ title, message, onClose, onButtonClick, action, styleVariant, LeadingIcon, ...props }: IToast) => import("react/jsx-runtime").JSX.Element;
export {};
