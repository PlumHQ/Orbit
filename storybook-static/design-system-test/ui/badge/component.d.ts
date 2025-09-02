import { TBadgeSizeVariants, TBadgeStyleVariants, TBadgeVariants } from './types';
import * as React from 'react';
interface IconProps {
    size?: string;
    className?: string;
    color?: string;
}
export interface IBadge {
    styleVariant: TBadgeStyleVariants;
    size: TBadgeSizeVariants;
    variant: TBadgeVariants;
    value: string;
    icon?: React.FC<IconProps>;
}
export declare const Badge: ({ styleVariant, variant, size, value, icon, }: IBadge) => import("react/jsx-runtime").JSX.Element;
export {};
