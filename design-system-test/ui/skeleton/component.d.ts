import { TSkeletonShape } from './types';
import * as React from "react";
export interface ISkeleton {
    shape?: TSkeletonShape;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export declare const Skeleton: ({ shape, className, children, style, onClick, ...props }: ISkeleton) => import("react/jsx-runtime").JSX.Element;
export default Skeleton;
