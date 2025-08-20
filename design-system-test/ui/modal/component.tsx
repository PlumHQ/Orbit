"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

import { cn } from '../utilities';
import { CrossCloseIcon } from '../icons';
import '../../styles/output.css';
import '@fontsource/inter';
import { Button } from "../button";
import { ButtonGroupAlignment, ButtonGroupOrientation, ButtonGroupStyle } from "./types";
import { Checkbox } from "../checkbox";
import { IconButton } from "../iconButton";
import '@fontsource/inter';

// Context for modal props
const ModalContext = React.createContext<{
  showHeaderOverFlowGradient?: boolean;
  showFooterOverFlowGradient?: boolean;
  size?: "small" | "medium" | "large";
}>({});

// Hook to use modal context
const useModalContext = () => React.useContext(ModalContext);



function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-overlay-background-subtle",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  size = "medium",
  showHeaderOverFlowGradient = false,
  showFooterOverFlowGradient = false,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
  size?: "small" | "medium" | "large";
  showHeaderOverFlowGradient?: boolean;
  showFooterOverFlowGradient?: boolean;
}) {
  const sizeClasses = {
    small: "max-w-120 max-h-120",
    medium: "max-w-140 max-h-140",
    large: "max-w-160 max-h-160"
  };

  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "font-primary bg-surface-background-white-normal rounded-6 fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 shadow-lg transition-all duration-200 flex flex-col",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <ModalContext.Provider value={{
          showHeaderOverFlowGradient,
          showFooterOverFlowGradient,
          size,
        }}>
          {children}
        </ModalContext.Provider>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({
  headerText,
  anchorAsset,
  onCloseClick,
  showHeaderOverFlowGradient: propShowHeaderOverFlowGradient,
}: {
  headerText: string
  anchorAsset?: React.FC
  onCloseClick: () => void
  showHeaderOverFlowGradient?: boolean
}) {
  const { showHeaderOverFlowGradient: contextShowHeaderOverFlowGradient } = useModalContext();
  const showHeaderOverFlowGradient = propShowHeaderOverFlowGradient ?? contextShowHeaderOverFlowGradient;
  return (
    <div data-slot="dialog-header" className="flex flex-col font-primary text-2xl font-semibold space-y-1.5 text-left pt-8 px-9 flex-shrink-0">
      <div
        className="flex justify-between"
      >
        <div className="flex items-center text-surface-text-gray-normal">
          {anchorAsset ? React.createElement(anchorAsset as React.FC<{ size: string, className: string }>, {
            size: "quadrupleExtraLarge",
            className: "fill-surface-icon-gray-subtle",
          }) : headerText}
        </div>
        <div>
          <IconButton
            icon={CrossCloseIcon}
            size="large"
            color="gray"
            onClick={onCloseClick}
          />
        </div>
      </div>
      {showHeaderOverFlowGradient && <div className="flex flex-col bg-gradient-to-b from-transparent via-white/60 to-white h-10 relative" />}
    </div>
  )
}

function DialogFooter({
  buttonGroupStyle = "simple",
  buttonGroupOrientation = "horizontal",
  buttonGroupOnFirstButtonClick,
  buttonGroupOnSecondButtonClick,
  buttonGroupFirstButtonLabel,
  buttonGroupSecondButtonLabel,
  buttonGroupLinkButtonLabel,
  buttonGroupLinkButtonClick,
  showConfirmationCheckbox = false,
  showFooterOverFlowGradient: propShowFooterOverFlowGradient,
  buttonGroupIllustration,
}: {
  buttonGroupStyle?: ButtonGroupStyle
  buttonGroupOrientation?: ButtonGroupOrientation
  buttonGroupOnFirstButtonClick?: () => void
  buttonGroupOnSecondButtonClick?: () => void
  buttonGroupFirstButtonLabel?: string
  buttonGroupSecondButtonLabel?: string
  buttonGroupLinkButtonLabel?: string
  buttonGroupLinkButtonClick?: () => void
  buttonGroupAlignment?: ButtonGroupAlignment
  showConfirmationCheckbox: boolean
  showFooterOverFlowGradient?: boolean
  buttonGroupIllustration?: React.ReactNode
}) {
  const { showFooterOverFlowGradient: contextShowFooterOverFlowGradient } = useModalContext();
  const showFooterOverFlowGradient = propShowFooterOverFlowGradient ?? contextShowFooterOverFlowGradient;
  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  };

  return (
    <div
      data-slot="dialog-footer"
      className="px-9 pb-8 flex-shrink-0"
    >
      {showFooterOverFlowGradient && <div className="flex flex-col bg-gradient-to-b from-transparent via-white/60 to-white h-10 relative" />}
      <div className="bg-surface-background-white-normal">
        {showConfirmationCheckbox && (
          <div className="flex items-center mb-2">
            <Checkbox
              label="I have understood this information and I accept it"
              checked={true}
              onClick={() => { }}
              styleVariant="gray"
              size="medium"
              error={false}

            />
          </div>
        )}
        <ButtonGroup
          style={buttonGroupStyle}
          orientation={buttonGroupOrientation}
          onFirstButtonClick={buttonGroupOnFirstButtonClick}
          onSecondButtonClick={buttonGroupOnSecondButtonClick}
          firstButtonLabel={buttonGroupFirstButtonLabel}
          secondButtonLabel={buttonGroupSecondButtonLabel}
          linkButtonLabel={buttonGroupLinkButtonLabel}
          linkButtonClick={buttonGroupLinkButtonClick}
          buttonGroupIllustration={buttonGroupIllustration}
        />
      </div>
    </div>
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-xl font-semibold font-primary text-surface-text-gray-normal leading-none", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-base font-primary text-surface-text-gray-subtle leading-normal", className)}
      {...props}
    />
  )
}

// Additional helper component for modal body content
function DialogBody({
  bodyText,
  bodySlot,
}: {
  bodyText: string
  bodySlot: React.ReactNode
}) {
  const { 
    size: contextSize, 
    showHeaderOverFlowGradient: contextShowHeaderOverFlowGradient,
    showFooterOverFlowGradient: contextShowFooterOverFlowGradient 
  } = useModalContext();
  
  const size = contextSize ?? "medium";
  const showHeaderOverFlowGradient = contextShowHeaderOverFlowGradient ?? false;
  const showFooterOverFlowGradient = contextShowFooterOverFlowGradient ?? false;
  const sizeMap = {
    small: "18",
    medium: "32",
    large: "37"
  }
  return (
    <div
      data-slot="dialog-body"
      className={`font-primary text-base text-surface-text-gray-normal px-9 overflow-scroll flex-1 ${showFooterOverFlowGradient ? "mb-6-negative" : ""} ${showHeaderOverFlowGradient ? "mt-6-negative" : ""}`}
    >
      <div>{bodyText}</div>
      <div>{bodySlot}</div>
    </div>
    
  )
}

function ButtonGroup({ style = "simple", orientation = "horizontal", onFirstButtonClick, onSecondButtonClick, firstButtonLabel, secondButtonLabel, linkButtonLabel, linkButtonClick, buttonGroupIllustration }: {
  style?: ButtonGroupStyle
  orientation?: ButtonGroupOrientation
  onFirstButtonClick?: () => void
  onSecondButtonClick?: () => void
  firstButtonLabel?: string
  secondButtonLabel?: string
  linkButtonLabel?: string
  linkButtonClick?: () => void
  buttonGroupIllustration?: React.ReactNode
}) {
  return (
    <div className={`flex flex-${orientation === "horizontal" ? "row" : "col"} justify-between w-full`}>
      {style === "modular" && (
        <div className="flex flex-1 w-[75%]">
          {buttonGroupIllustration && <div className="h-12 w-12 bg-surface-background-gray-subtle rounded-2">
            {buttonGroupIllustration}
          </div>}
          {linkButtonLabel && <Button
            variant="tertiary"
            styleVariant="gray"
            size="large"
            label={linkButtonLabel}
            onClick={() => linkButtonClick()}
          />} 
        </div>
      )}
      <div className={`flex flex-${orientation === "horizontal" ? "row" : "col"} ${style === "simple" ? "justify-between" : "justify-end"} w-full gap-1 flex-1`}>
        {onFirstButtonClick && firstButtonLabel && <Button
          variant="secondary"
          styleVariant="gray"
          size="large"
          label={firstButtonLabel}
          onClick={() => onFirstButtonClick()}
        />}
        {onSecondButtonClick && secondButtonLabel && <Button
          variant="primary"
          styleVariant="primary"
          size="large"
          label={secondButtonLabel}
          onClick={() => onSecondButtonClick()}
        />}
      </div>
    </div>
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogBody,
}
