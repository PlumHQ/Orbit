import { cva } from 'class-variance-authority';
import React from 'react';
import { IFloatingButtonSizes, IFloatingButtonStyles } from './types';
import { cn } from '../utilities';
import '@fontsource/inter';

export interface IFloatingButton {
  size: IFloatingButtonSizes;
  styleVariant: IFloatingButtonStyles;
  iconOnly?: boolean;
  leadingIcon?: React.FC;
  label?: string;
  onClick?: () => void;
  loading?: boolean;
  trailingIcon?: React.FC;
}

export const FloatingButton = ({
  styleVariant,
  size,
  iconOnly = false,
  leadingIcon,
  label,
  onClick = () => {},
}: IFloatingButton) => {
  const buttonVariants = cva(
    `inline-flex items-center font-primary py-2 font-semibold
        shadow h-fit w-fit
        font-primary
        focus-visible:plum-focus disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
    {
      variants: {
        size: {
          large: `text-lg py-2 px-5 text-lg rounded-3`,
            medium: `text-base py-15 px-3 text-base rounded-25`,
        },
        iconOnly: {
          true: `p-3`,
          false: ``
        },
        styleVariant: {
          white: `bg-interactive-background-white-normal text-interactive-text-gray-normal hover:bg-interactive-background-gray-normal`,
          gray: `bg-interactive-background-gray-highlighted text-interactive-text-white-normal hover:bg-interactive-background-gray-intense`,
        }
      },
      defaultVariants: {
        size: 'large',
        styleVariant: 'white',
        iconOnly: false
      },
    }
  );
  const iconSizeMap = {
    large: 'extraLarge',
    medium: 'large',
  };
  const computedClassName = cn(
    buttonVariants({ size, iconOnly, styleVariant })
  );
  const iconClassName = `size-${iconSizeMap[size]} fill-interactive-icon-${styleVariant === "white" ? "gray" : "white"}-normal !important mr-${iconOnly ? 0 : 1}`;
  return (
    <button className={computedClassName} onClick={onClick}>
      {leadingIcon && (
            <>
              {leadingIcon({
                className: iconClassName,
                size: { size },
              })}
            </>
          )}
      {!iconOnly && label && label}
    </button>
  );
}
