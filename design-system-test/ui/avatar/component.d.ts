import { TAvatarSizes, TAvatarVariants } from './types';
import * as React from 'react';
export interface IAvatar {
    variant: TAvatarVariants;
    size: TAvatarSizes;
    src?: string;
    fallback?: string;
    alt?: string;
    onClick: () => void;
}
export declare const Avatar: React.FC<IAvatar>;
