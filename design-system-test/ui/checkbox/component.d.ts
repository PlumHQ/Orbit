import { default as React } from '../../../node_modules/react';
import { TCheckboxSizes, TCheckboxStyleVariants } from './types';
export interface ICheckbox {
    checked: boolean;
    isIntermediate?: boolean;
    styleVariant: TCheckboxStyleVariants;
    size: TCheckboxSizes;
    error?: boolean;
    errorText?: string;
    disabled?: boolean;
    label: string;
    onClick?: (checked: boolean) => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    tabIndex?: number;
    role?: string;
    ariaChecked?: boolean;
    ariaDisabled?: boolean;
    ariaLabel?: string;
}
export declare const Checkbox: ({ checked, isIntermediate, styleVariant, size, error, errorText, disabled, label, onClick, onKeyDown, tabIndex, role, ariaChecked, ariaDisabled, ariaLabel, }: ICheckbox) => import("react/jsx-runtime").JSX.Element;
