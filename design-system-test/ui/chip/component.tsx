import React from 'react';
import { TChipSizeVariant, TChipStyleVariant } from './types';
import { cva } from 'class-variance-authority';
import '@fontsource/inter';
import { Counter } from '../counter';
import { cn } from '../utilities';

export interface IChip {
  styleVariant: TChipStyleVariant;
  size: TChipSizeVariant;
  isSelected: boolean;
  value: string;
  onClick: (value: string) => void;
  iconOnly?: boolean;
  leadingIcon?: React.FC;
  trailingIcon?: React.FC;
  leadingCounter?: number;
  trailingCounter?: number;
  disabled?: boolean;
}

export const Chip = ({
  styleVariant,
  size,
  isSelected,
  value,
  onClick,
  iconOnly = false,
  leadingIcon,
  trailingIcon,
  leadingCounter,
  trailingCounter,
  disabled,
}: IChip) => {
  const [selected, setSelected] = React.useState(isSelected);
  const chipVariants = cva(
    `flex items-center w-fit rounded-25 px-2 py-${iconOnly ? 2 : 15} focus-visible:plum-focus
     font-primary font-medium text-interactive-text-${styleVariant}-${
      disabled ? 'disabled' : 'normal'
    }`,
    {
      variants: {
        styleVariant: {
          gray: `bg-interactive-background-${
            selected
              ? `${styleVariant}-${disabled ? 'disabled' : 'normal'}`
              : disabled
              ? 'white-disabled'
              : 'white-transparent'
          } 
          border border-interactive-border-gray-${
            disabled ? 'disabled' : selected ? 'highlighted' : 'normal'
          } ${
            disabled
              ? ``
              : `hover:bg-interactive-background-gray-muted 
            focus-visible:bg-interactive-background-gray-muted`
          }`,
          beige: `bg-interactive-background-${
            selected
              ? `${styleVariant}-${disabled ? 'disabled' : 'normal'}`
              : 'white-transparent'
          } 
          border border-interactive-border-beige-${
            disabled ? 'disabled' : selected ? 'normal' : 'subtle'
          } ${
            disabled
              ? ``
              : `hover:bg-interactive-background-beige-muted 
            focus-visible:bg-interactive-background-beige-muted`
          }`,
        },
        size: {
          small: `text-sm`,
          medium: `text-base`,
        },
      },
    }
  );
  const handleClick = () => {
    setSelected(!selected);
    onClick(value);
  };
  return (
    <button
      onClick={handleClick}
      className={cn(chipVariants({ styleVariant, size }))}
      disabled={disabled}
    >
      <div>
        {leadingIcon &&
          leadingIcon({
            size: size === 'medium' ? 'large' : 'medium',
            className: `fill-interactive-icon-${styleVariant}-${
              disabled ? 'disabled' : 'subtle'
            } mr-${iconOnly ? '0' : '1'}`,
          })}
      </div>
      {!iconOnly && (
        <>
          {selected && leadingCounter && (
            <div className="mr-15">
              <Counter
                value={leadingCounter}
                size={size === 'medium' ? 'large' : 'medium'}
                styleVariant={
                  styleVariant === 'gray' ? 'neutral' : 'information'
                }
              />
            </div>
          )}
          <div>{value}</div>
          {selected && trailingCounter && (
            <div className="ml-15">
              <Counter
                value={trailingCounter}
                size={size === 'medium' ? 'large' : 'medium'}
                styleVariant={
                  styleVariant === 'gray' ? 'neutral' : 'information'
                }
              />
            </div>
          )}
        </>
      )}
      <div>
        {trailingIcon &&
          trailingIcon({
            size: size === 'medium' ? 'large' : 'medium',
            className: `fill-interactive-icon-${styleVariant}-${
              disabled ? 'disabled' : 'subtle'
            } ml-15`,
          })}
      </div>
    </button>
  );
};
