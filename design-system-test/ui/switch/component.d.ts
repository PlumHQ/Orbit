import { IToggleSwitchLabelPositions, IToggleSwitchSizes, IToggleSwitchStyleVariants } from './types';
export interface IToggleSwitch {
    checked: boolean;
    onChange: (checked: boolean) => void;
    styleVariant?: IToggleSwitchStyleVariants;
    className?: string;
    label?: string;
    description?: string;
    labelPosition?: IToggleSwitchLabelPositions;
    disabled?: boolean;
    size: IToggleSwitchSizes;
    tabIndex?: number;
}
export declare const ToggleSwitch: ({ checked, onChange, label, description, labelPosition, styleVariant, disabled, size, tabIndex, }: IToggleSwitch) => import("react/jsx-runtime").JSX.Element;
