import { default as React } from '../../../node_modules/react';
import { TInputSelectSizes, ISelectOption } from './types';
export interface IInputSelect {
    label?: string;
    helperLink?: string;
    disabled?: boolean;
    size: TInputSelectSizes;
    helperText?: string;
    placeholder?: string;
    isRequired?: boolean;
    isOptional?: boolean;
    helpTextIcon?: React.FC;
    prefixIcon?: React.FC;
    prefixValue?: string;
    isValidated?: boolean;
    defaultValue?: string;
    showValidation?: boolean;
    isValid?: (value: any) => boolean;
    errorText?: string;
    successText?: string;
    onChange?: (value: any) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    id?: string;
    options?: ISelectOption[];
    searchable?: boolean;
    onSelect?: (option: ISelectOption) => void;
}
export declare const InputSelect: ({ label, helperLink, helperText, disabled, placeholder, isRequired, isOptional, helpTextIcon, defaultValue, prefixIcon, showValidation, prefixValue, isValid, errorText, successText, onChange, onFocus, onBlur, size, id, options, searchable, onSelect, }: IInputSelect) => import("react/jsx-runtime").JSX.Element;
