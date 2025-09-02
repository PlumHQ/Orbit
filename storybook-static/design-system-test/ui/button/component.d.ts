import { IButtonSizes, IButtonStyleVariants, IButtonVariants } from './types';
import * as React from 'react';
export interface IButton {
    variant: IButtonVariants;
    styleVariant: IButtonStyleVariants;
    leadingIcon?: React.FC;
    trailingIcon?: React.FC;
    iconOnly?: boolean;
    disabled?: boolean;
    loading?: false;
    asChild?: boolean;
    label: string;
    size: IButtonSizes;
    onClick?: () => void;
}
export declare const Button: React.ForwardRefExoticComponent<IButton & React.RefAttributes<HTMLButtonElement>>;
