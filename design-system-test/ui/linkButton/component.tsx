import React, { useState } from 'react';
import { ILinkButtonSizes, ILinkButtonStates } from './types';
import { cva } from 'class-variance-authority';
import { cn } from '../utilities';
import '../../styles'
import '@fontsource/inter';

export interface ILinkButton {
  label: string;
  size: ILinkButtonSizes;
  state: ILinkButtonStates;
  disabled?: boolean;
  onClick?: () => void;
  leadingIcon?: React.FC;
  trailingIcon?: React.FC;
}

export const LinkButton = ({
  label,
  size,
  state,
  disabled = false,
  onClick = () => {},
  leadingIcon,
  trailingIcon,
}: ILinkButton) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const linkButtonVariants = cva(
    `flex items-center font-primary rounded-1 font-semibold ${
      disabled
        ? ''
        : ` focus-visible:plum-focus focus:ring-offset-2 focus:ring-interactive-border-${state}-highlighted focus:ring-offset-background focus:outline-none focus:rounded-md`
    }`,

    {
      variants: {
        size: {
          large: 'text-base h-6',
          medium: 'text-sm h-5',
          small: 'text-xs h-4',
        },
      },
    }
  );

  const iconSizeMap = {
    large: 'extraLarge',
    medium: 'large',
    small: 'medium',
  };

  const iconClassName = `size-${
    iconSizeMap[size]
  } fill-interactive-icon-${state}-${
    disabled ? 'disabled' : isFocused || isHovered ? state === "white" ? `subtle` : `highlighted` : 'normal'
  }`;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleElementFocused = () => {
    setIsFocused(true);
  };

  const handleElementBlurred = () => {
    setIsFocused(false);
  };

  return (
    <>
      <button
        onClick={onClick}
        className={cn(linkButtonVariants({ size }))}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleElementFocused}
        onBlur={handleElementBlurred}
      >
        {leadingIcon && (
          <div className={`mr-1`}>
            {React.createElement(leadingIcon, {
              className: iconClassName,
              size: size,
            })}
          </div>
        )}
        <div
          className={`${
            (isHovered || isFocused && !disabled)
              ? `underline`
              : ``
          } text-interactive-text-${state}-${
            disabled
              ? 'disabled'
              : isFocused || isHovered
              ? state==="white" ? 'subtle' : 'highlighted'
              : 'normal'
          }
          `}
        >
          {label}
        </div>
        {trailingIcon && (
          <div className={`ml-1`}>
            {React.createElement(trailingIcon, {
              className: iconClassName,
              size: size,
            })}
          </div>
        )}
      </button>
    </>
  );
};
