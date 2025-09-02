import { TTooltipAlignments, TTooltipPositions, TTooltipVariants } from './types';
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
declare function TooltipProvider({ delayDuration, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>): import("react/jsx-runtime").JSX.Element;
declare function Tooltip({ isTooltipOpen, ...props }: React.ComponentProps<typeof TooltipPrimitive.Root> & {
    isTooltipOpen?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
type TTooltipContentProps = React.ComponentProps<typeof TooltipPrimitive.Content> & {
    headerText?: string;
    paragraphs?: string[];
    variant?: TTooltipVariants;
    isCoachMark?: boolean;
    isDissmisable?: boolean;
    currentProgress?: number;
    totalSlides?: number;
    position?: TTooltipPositions;
    align?: TTooltipAlignments;
    buttonLabel?: string;
    onButtonClick?: () => void;
    onClose?: () => void;
};
declare function TooltipContent({ className, children, headerText, paragraphs, variant, isCoachMark, isDissmisable, currentProgress, totalSlides, position, align, buttonLabel, onButtonClick, onClose, hidden, }: TTooltipContentProps): import("react/jsx-runtime").JSX.Element;
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
