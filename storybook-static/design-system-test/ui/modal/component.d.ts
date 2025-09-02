import { ButtonGroupAlignment, ButtonGroupOrientation, ButtonGroupStyle, TModalSizes } from './types';
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
declare function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
declare function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>): import("react/jsx-runtime").JSX.Element;
declare function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>): import("react/jsx-runtime").JSX.Element;
declare function DialogOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>): import("react/jsx-runtime").JSX.Element;
declare function DialogContent({ className, children, showCloseButton, size, showHeaderOverFlowGradient, showFooterOverFlowGradient, ...props }: React.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
    size?: TModalSizes;
    showHeaderOverFlowGradient?: boolean;
    showFooterOverFlowGradient?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function DialogHeader({ headerText, anchorAsset, onCloseClick, showHeaderOverFlowGradient: propShowHeaderOverFlowGradient, centerAlignHeader, showBackButton, onBackArrowClick }: {
    headerText: string;
    anchorAsset?: React.FC;
    onCloseClick: () => void;
    showHeaderOverFlowGradient?: boolean;
    centerAlignHeader?: boolean;
    showBackButton?: boolean;
    onBackArrowClick?: () => void;
}): import("react/jsx-runtime").JSX.Element;
declare function DialogFooter({ buttonGroupStyle, buttonGroupOrientation, buttonGroupOnFirstButtonClick, buttonGroupOnSecondButtonClick, buttonGroupFirstButtonLabel, buttonGroupSecondButtonLabel, buttonGroupLinkButtonLabel, buttonGroupLinkButtonClick, showConfirmationCheckbox, showFooterOverFlowGradient: propShowFooterOverFlowGradient, buttonGroupIllustration, }: {
    buttonGroupStyle?: ButtonGroupStyle;
    buttonGroupOrientation?: ButtonGroupOrientation;
    buttonGroupOnFirstButtonClick?: () => void;
    buttonGroupOnSecondButtonClick?: () => void;
    buttonGroupFirstButtonLabel?: string;
    buttonGroupSecondButtonLabel?: string;
    buttonGroupLinkButtonLabel?: string;
    buttonGroupLinkButtonClick?: () => void;
    buttonGroupAlignment?: ButtonGroupAlignment;
    showConfirmationCheckbox: boolean;
    showFooterOverFlowGradient?: boolean;
    buttonGroupIllustration?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>): import("react/jsx-runtime").JSX.Element;
declare function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>): import("react/jsx-runtime").JSX.Element;
declare function DialogBody({ bodyText, bodySlot, }: {
    bodyText: string;
    bodySlot: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DialogBody, };
