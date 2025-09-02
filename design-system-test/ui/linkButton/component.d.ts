import { default as React } from '../../../node_modules/react';
import { ILinkButtonSizes, ILinkButtonStates } from './types';
export interface ILinkButton {
    label: string;
    size: ILinkButtonSizes;
    state: ILinkButtonStates;
    disabled?: boolean;
    onClick?: () => void;
    leadingIcon?: React.FC;
    trailingIcon?: React.FC;
}
export declare const LinkButton: ({ label, size, state, disabled, onClick, leadingIcon, trailingIcon, }: ILinkButton) => import("react/jsx-runtime").JSX.Element;
