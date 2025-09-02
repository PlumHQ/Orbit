import { default as React } from '../../../node_modules/react';
import { IIconButtonColors, IIconButtonSizes } from './types';
export interface IIconButton {
    color: IIconButtonColors;
    size: IIconButtonSizes;
    disabled?: boolean;
    icon?: React.FC;
    onClick?: () => void;
}
export declare const IconButton: ({ color, size, disabled, icon, onClick, }: IIconButton) => import("react/jsx-runtime").JSX.Element;
