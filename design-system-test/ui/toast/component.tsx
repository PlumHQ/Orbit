'use client';

import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Divider } from '@pluminsurance/design-system-test.divider';
import { Button } from '@pluminsurance/design-system-test.button';
import {
  CrossCloseIcon,
  InfoIcon,
} from '@pluminsurance/design-system-test.icons';
import '@pluminsurance/design-system-test.styles';
import { IconButton } from '@pluminsurance/design-system-test.icon-button';
import { TToastStyleVariants } from './types';
import '@fontsource/inter';
import { IIconProps } from '@pluminsurance/design-system-test.icons';


const toastVariants = cva(
  'gap-4 rounded-25 py-2 px-4 shadow-md w-fit max-w-md justify-between toast-shadow',
  {
    variants: {
      styleVariant: {
        neutral:
          'bg-feedback-background-neutral-intense text-feedback-text-neutral-minimal',
        negative:
          'bg-feedback-background-negative-intense text-feedback-text-neutral-minimal',
        positive:
          'bg-feedback-background-positive-intense text-feedback-text-neutral-minimal',
        promotional:
          'bg-surface-background-white-normal border border-solid border-surface-border-gray-normal text-default',
      },
    },
    defaultVariants: {
      styleVariant: 'promotional',
    },
  }
);

export interface IToast extends VariantProps<typeof toastVariants> {
  styleVariant?: TToastStyleVariants;
  title?: string;
  message?: string;
  onClose?: () => void;
  onButtonClick?: () => void;
  LeadingIcon?: React.FC<IIconProps>;
  action?: React.ReactNode;
}

export const Toast = ({
  title,
  message,
  onClose,
  onButtonClick,
  action,
  styleVariant,
  LeadingIcon = InfoIcon,
  ...props
}: IToast) => {
  return (
    <div className={toastVariants({ styleVariant })} {...props}>
      <div className="flex">
        <div
          className={`${
            styleVariant === 'promotional' ? '' : 'flex'
          } items-center font-primary`}
        >
          {title && styleVariant === 'promotional' && (
            <div className="flex justify-between mb-1">
              <div className="flex items-center">
                <div className="mr-1">
                  <LeadingIcon className={`fill-interactive-icon-neutral-subtle`} size="medium" />
                </div>
                <div
                  className={`text-sm font-semibold text-feedback-text-neutral-normal`}
                >
                  {title}
                </div>
              </div>
            </div>
          )}
          {message && (
            <div className="flex items-center">
                <div className="mr-1">
                  <LeadingIcon color="white" size="medium" />
                </div>
              <div
                className={`text-sm font-medium text-feedback-text-${styleVariant === "promotional" ? 'neutral-subtle':'white-normal'}`}
              >
                {message}
              </div>
            </div>
          )}
        </div>
        {styleVariant != 'promotional' ? (
          <div className="flex ml-6">
            <div className="flex gap-2 items-center">
              {action}
              <div className={`rotate-90 w-4`}>
                <Divider
                  dividerStyle="gray"
                  stroke="solid"
                  variant="subtle"
                />
              </div>
              <>
                <IconButton size="medium" color="white" icon={CrossCloseIcon} />
              </>
            </div>
          </div>
        ) : (
          <div>
            <IconButton size="small" color="gray" icon={CrossCloseIcon} />
          </div>
        )}
      </div>
      {styleVariant === 'promotional' && (
        <div className="ml-5 mt-2">
          <Button
            styleVariant="gray"
            variant="secondary"
            size="small"
            label="Button"
            onClick={onButtonClick}
          />
        </div>
      )}
    </div>
  );
};
