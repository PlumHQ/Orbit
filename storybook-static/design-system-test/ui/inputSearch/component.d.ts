import { TInputSearchStyleVariants, TInputSearchVariant } from './types';
export interface IInputSearch {
    styleVariant: TInputSearchStyleVariants;
    variant: TInputSearchVariant;
    placeholder: string;
    children?: unknown;
    searchSuggestions?: unknown;
    onClearSuggestions?: () => void;
    isLoading?: boolean;
    onInputChange?: (value: string) => void;
    defaultSearchText?: string;
    disabled?: boolean;
}
export declare const InputSearch: ({ styleVariant, placeholder, variant, children, searchSuggestions, isLoading, onClearSuggestions, defaultSearchText, disabled, onInputChange, }: IInputSearch) => import("react/jsx-runtime").JSX.Element;
