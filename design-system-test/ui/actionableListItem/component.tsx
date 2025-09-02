import React from 'react';
import {
  TActionableListItemBehaviours,
  TActionableListItemSizes,
  TActionableListItemVariants,
} from './types';
import {
  DotIcon,
  InfoIcon,
  RightArrowIcon,
  CircleDotIcon,
  CircleIcon,
  ChevronRight,
} from '../icons';
import { cva } from 'class-variance-authority';
import { cn } from '../utilities';
import { Badge } from '../badge';
import { Leaflet } from '../leaflet';
import {
  TBadgeSizeVariants,
  TBadgeStyleVariants,
  TBadgeVariants,
} from '../badge';
import '@fontsource/inter';
import { TLeafletStyle } from '../leaflet';

export interface IActionableListItem {
  variant: TActionableListItemVariants;
  size: TActionableListItemSizes;
  behaviour: TActionableListItemBehaviours;
  leadingAsset: React.FC;
  primaryText: string;
  secondaryTexts?: string[];
  tertiaryText: string;
  badgeText?: string;
  badgeSize?: TBadgeSizeVariants;
  badgeVariant?: TBadgeVariants;
  badgeStyle?: TBadgeStyleVariants;
  callToAction?: string;
  leafletLeadingIcon?: React.FC;
  leafletLeadingText?: string;
  leafletTrailingIcon?: React.FC;
  leafletTrailingText?: string;
  leafletStyle?: TLeafletStyle;
  onItemClick?: () => void;
  onNotificationClick?: () => void;
  showRightArrowIcon?: boolean;
  showNotification?: boolean;
}

export const ActionableListItem = ({
  variant,
  size,
  behaviour,
  leadingAsset,
  primaryText,
  secondaryTexts,
  tertiaryText,
  callToAction,
  badgeText,
  badgeSize,
  badgeVariant,
  badgeStyle,
  leafletLeadingIcon,
  leafletLeadingText = '',
  leafletTrailingIcon,
  leafletTrailingText = '',
  leafletStyle = 'positive',
  showRightArrowIcon = true,
  showNotification = false,
  onNotificationClick = () => { },
  onItemClick = () => { },
}: IActionableListItem) => {
  const LeadingAsset = leadingAsset;
  const [isSelected, setIsSelected] = React.useState(false);
  const actionableListVariants = cva(
    `flex cursor-pointer relative z-1 font-primary justify-between w-1405 ${variant === 'secondary'
      ? 'bg-surface-background-peach-subtle'
      : 'bg-interactive-background-white-normal'
    } hover:bg-interactive-background-${variant === "secondary" ? "peach" : "gray"}-normal border border-interactive-border-${behaviour === 'select' && isSelected ? 'primary' : 'gray'
    }-normal rounded-4 items-center`,
    {
      variants: {
        size: {
          medium: `px-5 py-4`,
          large: `px-8 py-6`,
        },
      },
      defaultVariants: {
        size: 'medium',
      },
    }
  );

  const selectItem = () => {
    if (behaviour === 'select') {
      setIsSelected((prev) => !prev);
    }
    onItemClick();
  };
  return (
    <div>
      <div
        className={cn(actionableListVariants({ size }))}
        onClick={selectItem}
      >
        <div className={`flex`}>
          <div className={`flex h-${size === "large" ? 14 : 12} w-${size === "large" ? 14 : 12} mr-3`}><LeadingAsset /></div>
          <div>
            <div
              className={`text-interactive-text-${isSelected ? '' : 'gray'
                }-normal font-semibold text-${size === 'large' ? 'lg' : 'base'
                } mb-05`}
            >
              {primaryText}
            </div>
            <div className={`flex items-center mb-05`}>
              {secondaryTexts &&
                secondaryTexts.map((text, index) => (
                  <>
                    <div
                      key={index}
                      className={`text-interactive-text-gray-subtle font-normal text-base mr-05`}
                    >
                      {text}
                    </div>
                    {index < secondaryTexts.length - 1 && (
                      <DotIcon
                        size="medium"
                        className="fill-surface-icon-gray-muted mr-05"
                      />
                    )}
                  </>
                ))}
            </div>
            {size === 'large' && tertiaryText && (
              <div
                className={`text-interactive-text-gray-subtle font-normal text-sm`}
              >
                {tertiaryText}
              </div>
            )}
          </div>
        </div>
        <div className={`flex items-center cursor-pointer`}>
          {behaviour === 'select' && variant === 'primary' ? (
            isSelected ? (
              <CircleDotIcon
                size="extraLarge"
                className="fill-interactive-icon-destructive-normal"
              />
            ) : (
              <CircleIcon
                size="extraLarge"
                className="fill-interactive-icon-gray-subtle"
              />
            )
          ) : (
            <div className={`flex items-center gap-2`}>
              {badgeText ? (
                <Badge
                  value={badgeText}
                  size={badgeSize || 'medium'}
                  variant={badgeVariant || 'primary'}
                  styleVariant={badgeStyle || 'neutral'}
                />
              ) : callToAction ? (
                <div
                  className={`text-interactive-text-beige-subtle text-sm font-medium`}
                >
                  {callToAction}
                </div>
              ) : (
                ''
              )}
              {showRightArrowIcon && <ChevronRight
                size={'extraLarge'}
                className={`fill-interactive-icon-gray-subtle`}
              />}
            </div>
          )}
        </div>
      </div>
      {variant === 'primary' && showNotification && (
        <div className={`mt-negative-${size === 'large' ? 6 : 35}`}>
          <Leaflet
            size={size}
            style={leafletStyle}
            leadingIcon={leafletLeadingIcon}
            leadingText={leafletLeadingText}
            trailingIcon={leafletTrailingIcon}
            trailingText={leafletTrailingText}
            onClick={onNotificationClick}
          />
        </div>
      )}
    </div>
  );
};
