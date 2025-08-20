'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '../utilities';
import { Button } from '../button';
import { IconButton } from '../iconButton';
import {
  TTooltipAlignments,
  TTooltipPositions,
  TTooltipVariants,
} from './types';

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  isTooltipOpen,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root> & { isTooltipOpen?: boolean }) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root
      data-slot="tooltip"
      {...props}
      {...(isTooltipOpen !== undefined && { open: isTooltipOpen })}
      />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

type TTooltipContentProps = React.ComponentProps<
  typeof TooltipPrimitive.Content
> & {
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

function TooltipContent({
  className,
  children,
  headerText,
  paragraphs = [],
  variant,
  isCoachMark = false,
  isDissmisable = false,
  currentProgress,
  totalSlides,
  position = 'top',
  align = 'center',
  buttonLabel,
  onButtonClick,
  onClose,
  hidden = false,
}: TTooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      {variant === 'detailed' ? (
        <TooltipPrimitive.Content
          data-slot="tooltip-content"
          sideOffset={8}
          className={cn(
            'bg-popup-background-normal max-w-260 px-5 py-4 text-popup-text-intense rounded-4 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) font-primary ',
            className
          )}
          side={position}
          align={align}
          avoidCollisions={true}
          hidden={hidden}
        >
          <div>
            <div
              className={`mb-2 text-base font-semibold flex items-center justify-between`}
            >
              {headerText && <div>{headerText}</div>}
              {isDissmisable && (
                <div>
                  <IconButton size="medium" color="white" onClick={onClose} />{' '}
                </div>
              )}
            </div>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-sm font-normal mb-2">
                {paragraph}
              </p>
            ))}
            <div>{children}</div>
            {isCoachMark && (
              <div
                className={`flex items-center justify-between mt-2 text-popup-text-muted text-sm font-medium`}
              >
                <div>
                  {currentProgress}/{totalSlides}
                </div>
                {buttonLabel && (
                  <div>
                    <Button
                      variant="secondary"
                      styleVariant="white"
                      size="small"
                      label={buttonLabel}
                      asChild={false}
                      onClick={onButtonClick}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 h-25 w-5 translate-y-[calc(-50%_-_2px)] rotate-45 fill-popup-background-normal" />
        </TooltipPrimitive.Content>
      ) : (
        <TooltipPrimitive.Content
          data-slot="tooltip-content"
          sideOffset={4}
          className={cn(
            'bg-popup-background-normal max-w-260 px-3 py-2 text-popup-text-intense rounded-25 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) font-primary text-sm font-medium',
            className
          )}
          side={'top'}
          avoidCollisions={true}
          hidden={hidden}
        >
          <div>{headerText}</div>
        </TooltipPrimitive.Content>
      )}
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
