import { default as React } from '../../../node_modules/react';
import { TChipSizeVariant, TChipStyleVariant } from './types';
export interface IChip {
    styleVariant: TChipStyleVariant;
    size: TChipSizeVariant;
    isSelected: boolean;
    value: string;
    onClick: (value: string) => void;
    iconOnly?: boolean;
    leadingIcon?: React.FC;
    trailingIcon?: React.FC;
    leadingCounter?: number;
    trailingCounter?: number;
    disabled?: boolean;
}
export declare const Chip: ({ styleVariant, size, isSelected, value, onClick, iconOnly, leadingIcon, trailingIcon, leadingCounter, trailingCounter, disabled, }: IChip) => import("react/jsx-runtime").JSX.Element;
