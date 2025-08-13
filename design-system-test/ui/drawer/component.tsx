"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@pluminsurance/design-system-test.utilities"
import { Button } from "@pluminsurance/design-system-test.button"
import { DrawerType, SideDrawerStyle } from "./types"
import { Dialog } from "@radix-ui/react-dialog"
import { CrossCloseIcon, LeftChevronIcon, ChevronRight, InfoIcon, AlertFilledIcon, RightArrowIcon, CircleCheckFilledIcon, AlertIcon } from "@pluminsurance/design-system-test.icons"
import { Divider } from "@pluminsurance/design-system-test.divider"
import { ILinkButtonStates, LinkButton } from "@pluminsurance/design-system-test.link-button"
import { PersonalAccidentIllustration } from "@pluminsurance/design-system-test.illustrations"
import { IconButton } from "@pluminsurance/design-system-test.icon-button"

function Drawer({
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
    return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
    return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
    return <DrawerPrimitive.Portal data-slot="drawer-portal" container={document.body} {...props} />
}

function DrawerClose({
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
    return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
    className,
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
    return (
        <DrawerPrimitive.Overlay
            data-slot="drawer-overlay"
            className={cn(
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
                className
            )}
            {...props}
        />
    )
}

function DrawerContent({
    className,
    children,
    title,
    buttonLabel,
    sideDrawerStyle,
    type,
    bodyContent,
    sideDrawerHeading,
    sideDrawerDescription,
    showCloseButton,
    currentRecord,
    totalRecords,
    recordType,
    leadingContent,
    trailingContent,
    tertiaryButtonLabel,
    tertiaryButtonOnClick,
    primaryButtonLabel,
    primaryButtonOnClick,
    sideDrawerHeadingButtonClick,
    onSideDrawerLinkButtonClick,
    getPreviousRecord,
    getNextRecord,
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content> & { type?: DrawerType, title?: string, buttonLabel?: string, sideDrawerStyle: SideDrawerStyle, bodyContent: React.ReactNode, sideDrawerHeading: string, sideDrawerDescription: string, showCloseButton: boolean, currentRecord: number, totalRecords: number, recordType: string, leadingContent: React.ReactNode, trailingContent: React.ReactNode, tertiaryButtonLabel?: string, tertiaryButtonOnClick?: () => void, primaryButtonLabel?: string, primaryButtonOnClick?: () => void, sideDrawerHeadingButtonClick?: () => void, onSideDrawerLinkButtonClick?: () => void, getPreviousRecord?: () => void, getNextRecord?: () => void }) {
    return (
        <DrawerPortal data-slot="drawer-portal">
            <DrawerOverlay />
            <DrawerPrimitive.Content
                data-slot="drawer-content"
                className={cn(
                    "group/drawer-content rounded-6 bg-background flex flex-col h-screen fixed inset-y-0 right-0 w-96 z-[9999]", className
                )}
                style={{
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    height: '100vh',
                    zIndex: 9999
                }}
                {...props}
            >
                {/* <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" /> */}
                {type === 'full' ? <FullPageDrawerHeader showCloseButton={showCloseButton} currentRecord={currentRecord} totalRecords={totalRecords} recordType={recordType} leadingContent={leadingContent} trailingContent={trailingContent} tertiaryButtonLabel={tertiaryButtonLabel} tertiaryButtonOnClick={tertiaryButtonOnClick} primaryButtonLabel={primaryButtonLabel} primaryButtonOnClick={primaryButtonOnClick} getPreviousRecord={getPreviousRecord} getNextRecord={getNextRecord} /> :
                    <SideDrawerHeader style={sideDrawerStyle ?? "neutral"} buttonLabel={buttonLabel ?? "Button"} sideDrawerHeadingButtonClick={sideDrawerHeadingButtonClick ?? (() => { })} title={title ?? "Title"} />}
                <div className="flex h-full p-6 rounded-b-6 flex-col bg-interactive-background-white-normal">
                    <div className="w-full h-fit mb-4">
                        {type === 'side' &&
                            <div className="flex justify-between gap-4">
                                <div className="flex gap-2">
                                    <div className="w-12 h-12"><PersonalAccidentIllustration /></div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-surface-text-gray-normal font-primary text-xl font-semibold">{sideDrawerHeading}</div>
                                        <div className="text-surface-text-gray-subtle font-primary text-base font-normal">{sideDrawerDescription}</div>
                                        <div className="text-interactive-text-white-normal font-primary text-sm font-medium"><LinkButton state="primary" size="medium" label="Button" onClick={onSideDrawerLinkButtonClick} /></div>
                                    </div>
                                </div>
                                <div>
                                    <DrawerClose asChild>
                                        <IconButton icon={CrossCloseIcon} size="large" color="gray" onClick={() => { }} />
                                    </DrawerClose>
                                </div>
                            </div>}
                    </div>
                    <div className="w-full h-1 mb-4"><Divider dividerStyle="gray" variant="normal" stroke="solid" /></div>
                    <div className="w-full h-10 relative">
                        <div className="w-full bg-gradient-to-b h-10 absolute top-0 left-0" />
                    </div>
                    <div className="overflow-scroll mt-45-negative h-full">
                        {bodyContent}
                        <div className="w-full h-10 relative mt-6-negative">
                            <div className="w-full bg-gradient-to-t h-10 absolute top-0 left-0" />
                        </div>
                    </div>

                </div>
            </DrawerPrimitive.Content>
        </DrawerPortal>
    )
}

function SideDrawerHeader({ style, buttonLabel, sideDrawerHeadingButtonClick, title }: { style: SideDrawerStyle, buttonLabel: string, sideDrawerHeadingButtonClick: () => void, title: string }) {
    const styleMap = {
        negative: "beige",
        positive: "white",
        notice: "beige",
        information: "beige",
        neutral: "beige",
    }
    const iconMap = {
        negative: AlertIcon,
        positive: CircleCheckFilledIcon,
        notice: InfoIcon,
        information: InfoIcon,
        neutral: InfoIcon,
    }
    const LeadingIcon = iconMap[style];
    return (
        <div className={`w-106 rounded-t-6 py-3 px-6 bg-feedback-background-${style}-intense flex justify-between items-center`}>
            <div className="flex gap-1 items-center">
                <LeadingIcon size="large" className={style === 'notice' ? `fill-feedback-icon-notice-normal` : `fill-popup-background-subtle`} />
                <div className={`text-${style === "notice" ? "feedback-text-notice-intense" : "interactive-text-white-normal"} font-primary text-base font-medium`}>
                    {title}
                </div>
            </div>
            <div>
                <LinkButton
                    state={style === "notice" ? "beige" : "white"}
                    size="medium"
                    label={buttonLabel}
                    onClick={sideDrawerHeadingButtonClick}
                    trailingIcon={RightArrowIcon}
                />
            </div>
        </div>
    )
}

function FullPageDrawerHeader({ showCloseButton, leadingContent, trailingContent, currentRecord, totalRecords, recordType, tertiaryButtonLabel, tertiaryButtonOnClick, primaryButtonLabel, primaryButtonOnClick, getPreviousRecord, getNextRecord }: { showCloseButton: boolean, leadingContent?: React.ReactNode, trailingContent?: React.ReactNode, currentRecord?: number, totalRecords?: number, recordType?: string, tertiaryButtonLabel?: string, tertiaryButtonOnClick?: () => void, primaryButtonLabel?: string, primaryButtonOnClick?: () => void, getPreviousRecord?: () => void, getNextRecord?: () => void }) {
    return (
        <DrawerHeader className="flex justify-between w-full items-center w-screen py-4 px-12 bg-surface-background-beige-subtle">
            <div className="flex gap-3 w-full justify-between">
                <div className="flex gap-3 h-full">
                    {showCloseButton && <DrawerClose asChild><Button
                        variant="tertiary"
                        styleVariant="beige"
                        size="medium"
                        label="Press ESC to close"
                        leadingIcon={CrossCloseIcon}
                        onClick={() => { }}
                    /></DrawerClose>}
                    {leadingContent && <div className="w-8">{leadingContent}</div>}
                </div>
                <div className="flex gap-3">
                    {trailingContent && <div className="w-8">{trailingContent}</div>}
                    {currentRecord && totalRecords &&
                        <div className="flex gap-1">
                            <div className="w-3 rotate-90 ml-6">
                                <Divider
                                    dividerStyle="beige"
                                    variant="subtle"
                                    stroke="solid"
                                />
                            </div>
                            <div className="text-sm text-feedback-text-information-intense py-3 font-primary font-medium text-sm">
                                {currentRecord} of {totalRecords} {recordType}
                            </div>

                            <div>
                                <Button
                                    variant="tertiary"
                                    styleVariant="beige"
                                    size="large"
                                    iconOnly
                                    label="Left"
                                    leadingIcon={LeftChevronIcon}
                                    disabled={currentRecord === 1}
                                    onClick={getPreviousRecord}
                                />
                                <Button
                                    variant="tertiary"
                                    styleVariant="beige"
                                    size="large"
                                    label="Right"
                                    iconOnly
                                    leadingIcon={ChevronRight}
                                    disabled={currentRecord === totalRecords}
                                    onClick={getNextRecord}
                                />
                            </div>
                            <div className="w-3 rotate-90 ml-6">
                                <Divider
                                    dividerStyle="beige"
                                    variant="subtle"
                                    stroke="solid"
                                />
                            </div>
                        </div>}
                    <div className="flex gap-15">
                        {tertiaryButtonLabel && <Button
                            variant="tertiary"
                            styleVariant="beige"
                            size="large"
                            label={tertiaryButtonLabel}
                            onClick={tertiaryButtonOnClick}
                        />}
                        {primaryButtonLabel && <Button
                            variant="primary"
                            styleVariant="primary"
                            size="large"
                            label={primaryButtonLabel}
                            onClick={primaryButtonOnClick}
                        />}

                    </div>

                </div>
            </div>
        </DrawerHeader>
    )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="drawer-header"
            className={cn(
                "flex flex-col gap-0.5 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
                className
            )}
            {...props}
        />
    )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="drawer-footer"
            className={cn("mt-auto flex flex-col gap-2 p-4", className)}
            {...props}
        />
    )
}

function DrawerTitle({
    className,
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
    return (
        <DrawerPrimitive.Title
            data-slot="drawer-title"
            className={cn("text-foreground font-semibold", className)}
            {...props}
        />
    )
}

function DrawerDescription({
    className,
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
    return (
        <DrawerPrimitive.Description
            data-slot="drawer-description"
            className={cn("text-muted-foreground text-sm", className)}
            {...props}
        />
    )
}

export {
    Drawer,
    DrawerTrigger,
    DrawerContent,
}
