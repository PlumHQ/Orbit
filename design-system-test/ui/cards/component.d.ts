import { default as React } from '../../../node_modules/react';
import { TCardSizes, TCardStyles } from './types';
export interface ICard {
    size: TCardSizes;
    cardStyle: TCardStyles;
    children?: React.ReactNode;
}
export declare const Card: ({ size, cardStyle, children }: ICard) => import("react/jsx-runtime").JSX.Element;
