// components/ui/button.tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { LoadingIcon } from '../icons';
import '../../styles/output.css';
import { IButtonSizes, IButtonStyleVariants, IButtonVariants } from './types';
import { cn } from '../utilities';
import '@fontsource/inter';

export interface IButton {
  variant: IButtonVariants;
  styleVariant: IButtonStyleVariants;
  leadingIcon?: React.FC;
  trailingIcon?: React.FC;
  iconOnly?: boolean;
  disabled?: boolean;
  loading?: false;
  asChild?: boolean;
  label: string;
  size: IButtonSizes;
  onClick?: () => void;
}

export const Button = React.forwardRef<HTMLButtonElement, IButton>(
  (
    {
      variant,
      styleVariant,
      size,
      label,
      leadingIcon,
      trailingIcon,
      iconOnly,
      disabled = false,
      loading = false,
      asChild = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const buttonVariants = cva(
      `inline-flex w-fit items-center font-primary py-2 font-semibold justify-between
      bg-interactive-background-${styleVariant}-${
        disabled || loading
          ? `disabled`
          : variant === 'primary'
          ? `normal`
          : styleVariant === 'destructive'
          ? ''
          : `transparent`
      } 
      justify-center gap-1 whitespace-nowrap
      ${
        disabled || loading
          ? ''
          : `hover:bg-interactive-background-${styleVariant}-${
              variant === 'primary'
                ? `highlighted`
                : styleVariant === 'beige' || styleVariant === 'gray'
                ? `normal`
                : `muted`
            }`
      } 
      focus-visible:plum-focus disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0
      text-interactive-text-${
        variant === 'primary'
          ? styleVariant === 'white'
            ? `gray`
            : `white`
          : styleVariant
      }-normal`,
      {
        variants: {
          size: {
            large: `text-lg py-2 px-5 text-lg rounded-3`,
            medium: `text-base py-15 px-3 text-base rounded-25`,
            small: `text-sm py-15 px-2 tex-sm rounded-2`,
          },
          iconOnly: {
            true: `${size === 'large' ? 'p-3' : 'p-2'}`,
            false: ``,
          },
          styleVariant: {
            white:
              variant === 'secondary'
                ? `border border-interactive-border-white-normal`
                : ``,
            beige:
              variant === 'secondary'
                ? `border border-interactive-border-beige-normal`
                : ``,
            gray:
              variant === 'secondary'
                ? `border border-interactive-border-gray-intense`
                : ``,
            destructive:
              variant === 'secondary'
                ? `border border-interactive-border-destructive-highlighted`
                : ``,
          },
        },
        defaultVariants: {
          size: 'large',
          iconOnly: false,
          styleVariant: 'white',
        },
      }
    );
    const iconSizeMap = {
      large: 'extraLarge',
      medium: 'large',
      small: 'medium',
    };
    const computedClassName = cn(
      buttonVariants({ size, iconOnly, styleVariant })
    );
    const iconClassName = `size-${iconSizeMap[size]} fill-interactive-icon-${
      variant === 'primary'
        ? styleVariant === 'white'
          ? `gray`
          : `white`
        : styleVariant
    }-normal !important`;

    if (asChild) {
      return <Slot className={computedClassName} {...props} ref={ref as any} />;
    }

    return (
      <button
        className={computedClassName}
        ref={ref}
        {...props}
        disabled={disabled || loading}
        onClick={onClick}
      >
        <div className={`flex items-center ${loading ? 'invisible' : ''}`}>
          {leadingIcon && (
            <div className={!iconOnly ? `mr-1` : ''}>
              {React.createElement(leadingIcon as any, {
                className: iconClassName,
                size: iconSizeMap[size],
              })}
            </div>
          )}
          {!iconOnly && label && <div>{label}</div>}
          {!iconOnly && trailingIcon && (
            <div className={`ml-1`}>
              {React.createElement(trailingIcon as any, {
                className: iconClassName,
                size: iconSizeMap[size],
              })}
            </div>
          )}
        </div>
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center animate-spin">
            <LoadingIcon size={size} className={iconClassName} />
          </div>
        ) : (
          ''
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
