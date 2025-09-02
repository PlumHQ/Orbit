import { default as React } from '../../../node_modules/react';
import { TLeafletSize, TLeafletStyle } from './types';
export interface ILeaflet {
    style: TLeafletStyle;
    size: TLeafletSize;
    leadingIcon?: React.FC | null;
    leadingText: string;
    trailingIcon?: React.FC | null;
    trailingText?: string | null;
    onClick?: () => void;
    width?: string;
}
export declare const Leaflet: ({ size, style, leadingIcon, leadingText, trailingIcon, trailingText, onClick, width, }: ILeaflet) => import("react/jsx-runtime").JSX.Element;
