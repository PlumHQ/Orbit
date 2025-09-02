import { TCounterSizes, TCounterStyleVariants } from './types';
export interface ICounter {
    size: TCounterSizes;
    styleVariant: TCounterStyleVariants;
    value?: number;
}
export declare const Counter: ({ size, styleVariant, value, }: ICounter) => import("react/jsx-runtime").JSX.Element;
