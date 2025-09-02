import { TDividerStroke, TDividerStyle, TDividerVariant } from './types';
export interface IDivider {
    stroke: TDividerStroke;
    dividerStyle: TDividerStyle;
    variant: TDividerVariant;
}
export declare const Divider: ({ stroke, dividerStyle, variant }: IDivider) => import("react/jsx-runtime").JSX.Element;
