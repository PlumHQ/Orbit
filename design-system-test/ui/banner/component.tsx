import { cva } from 'class-variance-authority';
import React from 'react';
import { IBannerLayoutVariant, IBannerStyleVariant } from './types';
import {
  InfoIcon,
  SuccessIndicationFilledIcon,
  ErrorIndicationFilledIcon,
  InfoIconFilled,
  CrossCloseIcon,
} from '../icons';
import '@fontsource/inter';
import { Badge } from '../badge';
import { Button } from '../button';
import { IconButton } from '../iconButton';
import { LinkButton } from '../linkButton';
import { IIconButtonColors } from '../iconButton';
import { ILinkButtonStates } from '../linkButton';

export interface IBanner {
  styleVariant: IBannerStyleVariant;
  layout: IBannerLayoutVariant;
  badgeText?: string;
  leadingAsset?: React.FC;
  trailingAsset?: React.FC;
  title?: string;
  body?: string;
  leadingButtonText?: string;
  buttonTrailingIcon?: React.FC;
  buttonLeadingIcon?: React.FC;
  trailingButtonText?: string;
  onButtonClick?: () => void;
  onBannerClose?: () => void;
  showCloseButton?: boolean;
}

export function Banner({
  styleVariant,
  layout,
  badgeText,
  leadingAsset,
  title,
  body,
  leadingButtonText,
  buttonTrailingIcon,
  buttonLeadingIcon,
  trailingButtonText,
  trailingAsset,
  onButtonClick,
  onBannerClose,
  showCloseButton = true,
}: IBanner) {
  const bannerVariants = cva(
    `font-primary text-feedback-text-${
      styleVariant === 'notice' ? 'information-intense' : 'neutral-normal'
    }  border border-feedback-border-${styleVariant}-normal w-full`,
    {
      variants: {
        styleVariant: {
          neutral:
            'bg-feedback-background-information-normal text-feedback-text-neutral-minimal',
          negative:
            'bg-feedback-background-negative-subtle text-feedback-text-neutral-normal',
          positive:
            'bg-feedback-background-positive-normal text-feedback-text-neutral-normal',
          information:
            'bg-feedback-background-neutral-subtle border border-solid border-surface-border-gray-normal',
          notice:
            'bg-feedback-background-notice-subtle border border-solid border-surface-border-information-normal',
        },
        layout: {
          compact: `px-6 py-3 rounded-3 w-188`,
          expanded: 'px-8 py-4 rounded-4 w-fit',
        },
      },
      defaultVariants: {
        styleVariant: 'information',
        layout: 'expanded',
      },
    }
  );

  const variantUtilityMap = {
    positive: [
      () =>
        SuccessIndicationFilledIcon({
          size: 'large',
          className: 'fill-feedback-icon-positive-intense',
        }),
      'positive',
      'gray',
    ],
    negative: [
      () =>
        ErrorIndicationFilledIcon({
          size: 'large',
          className: 'fill-feedback-icon-negative-intense',
        }),
      'negative',
      'gray',
    ],
    notice: [
      () =>
        InfoIconFilled({
          size: 'large',
          className: 'fill-feedback-icon-information-normal',
        }),
      'information',
      'beige',
    ],
    neutral: [
      () =>
        InfoIconFilled({
          size: 'large',
          className: 'fill-feedback-icon-information-normal',
        }),
      'information',
      'beige',
    ],
    information: [
      () =>
        InfoIconFilled({
          size: 'large',
          className: 'fill-feedback-icon-neutral-normal',
        }),
      'neutral',
      'gray',
    ],
  };

  return (
    <div className={bannerVariants({ styleVariant, layout })}>
      {badgeText && layout === 'expanded' && (
        <div className={`flex justify-between items-center mb-2`}>
          <Badge
            styleVariant={variantUtilityMap[styleVariant][1] as IBannerStyleVariant}
            variant={'primary'}
            size={'small'}
            value={badgeText}
            icon={InfoIcon}
          />
          <IconButton
            size={'large'}
            color={variantUtilityMap[styleVariant][2] as IIconButtonColors}
          />
        </div>
      )}
      <div
        className={`flex h-fit ${
          layout === 'compact' ? 'justify-between' : ''
        }`}
      >
        <div className={`flex items-${layout === "compact" ? 'center' :  "start"} mr-5`}>
          <div
            className={`mr-${
              layout === 'expanded' ? (leadingAsset ? 3 : 0) : 2
            }`}
          >
            {layout === 'compact'
              ? typeof variantUtilityMap[styleVariant][0] === 'function'
                ? React.createElement(variantUtilityMap[styleVariant][0])
                : null
              : leadingAsset && (
                  <div
                    className={`flex w-16 h-14`}
                  >
                    {React.createElement(leadingAsset)}
                  </div>
                )}
          </div>
          <div className={`max-w-160`}>
            {title && (
              <div
                className={`${
                  layout === 'expanded'
                    ? `text-lg font-semibold mb-05`
                    : `text-base font-medium`
                }`}
              >
                {title}
              </div>
            )}
            {layout === 'expanded' && (
              <div
                className={`text-sm font-normal ${
                  leadingButtonText ? `mb-15` : ``
                }`}
              >
                {body}
              </div>
            )}
            {leadingButtonText && layout === 'expanded' && (
              <div>
                <LinkButton
                  label={leadingButtonText}
                  state={variantUtilityMap[styleVariant][2] as ILinkButtonStates}
                  {...(buttonLeadingIcon && {
                    leadingIcon: () =>
                      buttonLeadingIcon({
                        size: 'large',
                        className: `fill-interactive-icon-${variantUtilityMap[styleVariant][2]}-normal`,
                      }),
                  })}
                  {...(buttonTrailingIcon && {
                    trailingIcon: () =>
                      buttonTrailingIcon({
                        size: 'large',
                        className: `fill-interactive-icon-${variantUtilityMap[styleVariant][2]}-normal`,
                      }),
                  })}
                  size="large"
                  {...(onButtonClick && { onClick: onButtonClick })}
                />
              </div>
            )}
          </div>
        </div>
        {layout === 'expanded' && (trailingButtonText || trailingAsset) ? (
          <div
            className={`flex mr-${ !badgeText ? '5' : '0'
            }`}
          >
            {trailingButtonText && layout === 'expanded' && (
              <div className={`flex items-center mr-4`}>
                <LinkButton
                  label={trailingButtonText}
                  state={variantUtilityMap[styleVariant][2] as ILinkButtonStates}
                  {...(buttonLeadingIcon && {
                    leadingIcon: () =>
                      buttonLeadingIcon({
                        size: 'large',
                        className: `fill-interactive-icon-${variantUtilityMap[styleVariant][2]}-normal`,
                      }),
                  })}
                  {...(buttonTrailingIcon && {
                    trailingIcon: () =>
                      buttonTrailingIcon({
                        size: 'large',
                        className: `fill-interactive-icon-${variantUtilityMap[styleVariant][2]}-normal`,
                      }),
                  })}
                  size="large"
                  onClick={onButtonClick}
                  {...(onButtonClick && { onClick: onButtonClick })}
                />
              </div>
            )}
            {trailingAsset && layout === 'expanded' && (
              <div className={`flex items-start w-16 h-14`}>
                {React.createElement(trailingAsset)}
              </div>
            )}
          </div>
        ) : (
          ''
        )}
        {(layout === 'compact' || !badgeText) && (
          <div className={`flex`}>
            {trailingButtonText && layout === 'compact' ? (
              <div className={`flex items-center`}>
                <LinkButton
                  label={trailingButtonText}
                  state={variantUtilityMap[styleVariant][2] as ILinkButtonStates}
                  {...(buttonLeadingIcon && {
                    leadingIcon: () =>
                      buttonLeadingIcon({
                        size: 'large',
                        className: `fill-interactive-icon-${variantUtilityMap[styleVariant][2]}-normal`,
                      }),
                  })}
                  {...(buttonTrailingIcon && {
                    trailingIcon: () =>
                      buttonTrailingIcon({
                        size: 'large',
                        className: `fill-interactive-icon-${variantUtilityMap[styleVariant][2]}-normal`,
                      }),
                  })}
                  size="large"
                  onClick={onButtonClick}
                  {...(onButtonClick && { onClick: onButtonClick })}
                />
              </div>
            ) : (
              <div className={`flex h-fit items-${layout==="compact" ? 'center' : 'start'}`}>
                {showCloseButton && <IconButton
                  size={'large'}
                  icon={CrossCloseIcon}
                  color={variantUtilityMap[styleVariant][2] as IIconButtonColors}
                  {...(onBannerClose && { onClick: onBannerClose })}
                />}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
