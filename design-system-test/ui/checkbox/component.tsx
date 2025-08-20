  import React from 'react';
  import { TCheckboxSizes, TCheckboxStyleVariants } from './types';
  import {
    ErrorIndicationIcon,
    SquareCheckIcon,
    SquareIcon,
    SquareMinusIcon,
  } from '../icons';
  import '@fontsource/inter';


  interface ICheckboxBase {
    checked: boolean;
    isIntermediate?: boolean;
    styleVariant: TCheckboxStyleVariants;
    size: TCheckboxSizes;
    error?: boolean;
    disabled?: boolean;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    tabIndex?: number;
    role?: string;
    ariaChecked?: boolean;
    ariaDisabled?: boolean;
    ariaLabel?: string;
  }

  const CheckboxBase = ({
    checked = false,
    isIntermediate = false,
    styleVariant = 'gray',
    size = 'large',
    error = false,
    disabled = false,
    onKeyDown,
    tabIndex,
    role,
    ariaChecked,
    ariaDisabled,
    ariaLabel,
  }: ICheckboxBase) => {
    const checkBoxIcon = checked
      ? SquareCheckIcon
      : isIntermediate
      ? SquareMinusIcon
      : SquareIcon;

    const sizeMap = {
      large: 'extraLarge',
      medium: 'large',
      small: 'medium',
    };

    const iconBasecolor = error
      ? `negative-intense`
      : checked
      ? `primary-${disabled ? `disabled` : `normal`}`
      : `${styleVariant}-${disabled ? `disabled` : `subtle`}`;
    return (
      <div className='flex items-center'>
        {React.createElement(checkBoxIcon as any, {
          size: sizeMap[size],
          className: `fill-${error ? 'feedback' : 'interactive'}-icon-${iconBasecolor} mr-1 mt-05 rounded-${size==="large" ? 15 : 1}`,
          onKeyDown: onKeyDown,
          tabIndex: tabIndex,
          role: role,
          'aria-checked': ariaChecked,
          'aria-disabled': ariaDisabled,
          'aria-label': ariaLabel,
        })}
      </div>
    );
  };

  export interface ICheckbox {
    checked: boolean;
    isIntermediate?: boolean;
    styleVariant: TCheckboxStyleVariants;
    size: TCheckboxSizes;
    error?: boolean;
    errorText?: string;
    disabled?: boolean;
    label: string;
    onClick?:()=>void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    tabIndex?: number;
    role?: string;
    ariaChecked?: boolean;
    ariaDisabled?: boolean;
    ariaLabel?: string;
  }

  export const Checkbox = ({
    checked = false,
    isIntermediate = false,
    styleVariant = 'gray',
    size = 'large',
    error = false,
    errorText = '',
    disabled,
    label = '',
    onClick=()=>{},
    onKeyDown,
    tabIndex,
    role,
    ariaChecked,
    ariaDisabled,
    ariaLabel,
  }: ICheckbox) => {
    const labelTextSizeMap = {
      large: 'lg',
      medium: 'base',
      small: 'sm',
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return;
      
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClick();
      }
    };

    return (
      <div 
        className={`flex font-primary ${disabled ? '' : 'cursor-pointer'}`} 
        onClick={!disabled ? onClick : undefined}
      >
        <CheckboxBase
          checked={checked}
          isIntermediate={isIntermediate}
          styleVariant={styleVariant}
          size={size}
          error={error}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          role={role}
          ariaChecked={ariaChecked}
          ariaDisabled={ariaDisabled}
          ariaLabel={ariaLabel}
        />
        <div>
          <div
            className={`text-interactive-text-${styleVariant}-${
              disabled ? 'disabled' : 'normal'
            } font-normal text-${labelTextSizeMap[size]}`}
          >
            {label}
          </div>
          {error && errorText && (
            <div className={`flex items-center`}>
                <ErrorIndicationIcon
                  size={'small'}
                  className={`fill-feedback-icon-negative-intense mr-1`}
                />
              <div
                className={`text-feedback-text-negative-intense font-medium text-xs`}
              >
                {errorText}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
