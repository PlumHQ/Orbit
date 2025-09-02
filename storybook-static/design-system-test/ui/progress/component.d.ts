import { TProgressSize } from './types';
export interface IProgress {
    size?: TProgressSize;
    progress: number;
    className?: string;
    variant?: "neutral" | "positive" | "negative";
    label?: string;
    primaryText?: string;
    secondaryText?: string;
}
export declare const Progress: ({ size, progress, className, variant, primaryText, secondaryText, label }: IProgress) => import("react/jsx-runtime").JSX.Element;
export default Progress;
