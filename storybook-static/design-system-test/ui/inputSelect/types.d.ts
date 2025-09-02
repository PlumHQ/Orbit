import { default as React } from '../../../node_modules/react';
export type TInputSelectSizes = 'medium' | 'large';
export interface ISelectOption {
    value: string;
    label: string;
    icon?: React.FC<any>;
}
