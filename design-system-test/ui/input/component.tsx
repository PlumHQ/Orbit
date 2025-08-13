import React, { useState, useEffect } from 'react';
import { LinkButton } from '@pluminsurance/design-system-test.link-button';
import { TInputSizes } from './types';
import {
  ErrorIndicationIcon,
  InfoIcon,
  SuccessIndicationIcon,
} from '@pluminsurance/design-system-test.icons';
import { IconButton } from '@pluminsurance/design-system-test.icon-button';
import { CommandKeyIcon } from '@pluminsurance/design-system-test.icons';
import '@fontsource/inter';

export interface IInput {
  label?: string;
  helperLink?: string;
  disabled?: boolean;
  size: TInputSizes;
  helperText?: string;
  placeholder?: string;
  isRequired?: boolean;
  isOptional?: boolean;
  helpTextIcon?: React.FC;
  showPrefixIcon?: boolean;
  prefixIcon?: React.FC;
  prefixValue?: string;
  isValidated?: boolean;
  defaultValue?: string;
  shortcutKey?: string;
  suffixIcon?: React.FC;
  bankLogoIcon?: string;
  showSuffixButton?: boolean;
  showValidation?: boolean;
  isValid?: (value: any) => boolean;
  errorText?: string;
  successText?: string;
  onChange?: (value: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  id?: string;
}

export const Input = ({
  label,
  helperLink,
  helperText,
  disabled = false,
  placeholder,
  isRequired,
  isOptional,
  helpTextIcon = InfoIcon,
  showPrefixIcon = false,
  prefixIcon,
  prefixValue,
  defaultValue = '',
  shortcutKey,
  suffixIcon,
  bankLogoIcon,
  showSuffixButton,
  showValidation,
  isValid = (value) => true,
  errorText,
  successText,
  onChange = (value) => {},
  onFocus = () => {},
  onBlur = () => {},
  size,
  id
}: IInput) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isInputValid, setIsInputValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue, onChange]);

  const handleFocus = () => {
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsInputValid(isValid(value));
    setIsTouched(true);
  };

  const handleBlur = () => {
    setIsInputValid(isValid(inputValue));
    if (!isTouched) setIsTouched(true);
  }

  const showValidationState =
    isTouched && showValidation && (inputValue || isRequired);

  const infoText = showValidationState
    ? isInputValid
      ? successText
      : errorText
    : helperText;

  const computedClassName = `
    w-full border border-solid py-2 px-3 rounded-25 mb-1 flex justify-between items-center focus-within:plum-focus
    ${
      disabled
        ? 'bg-surface-background-gray-muted'
        : 'bg-surface-background-white-normal'
    }
    ${
      showValidationState
        ? isInputValid
          ? 'border-feedback-border-positive-intense'
          : 'border-feedback-border-negative-intense'
        : 'border-surface-border-gray-highlighted'
    }
    hover:bg-surface-background-gray-subtle hover:children:bg-surface-background-gray-subtle
  `;

  return (
    <div className="w-full font-primary" onBlur={onBlur} onFocus={onFocus}>
      {/* Label and Helper Link */}
      <div className="flex justify-between mb-1 px-1">
        {label && (
          <div className="flex text-sm">
            <div className="text-surface-text-gray-subtle font-semibold">
              {label}
            </div>
            {isRequired ? (
              <div className="text-feedback-text-negative-intense ml-05">*</div>
            ) : isOptional ? (
              <div className="text-feedback-text-neutral-muted ml-05">
                (Optional)
              </div>
            ) : null}
          </div>
        )}
        {helperLink && (
          <LinkButton
            state="primary"
            label="Link"
            size={size === 'medium' ? 'small' : 'medium'}
          />
        )}
      </div>

      {/* Input Field */}
      <div className={computedClassName}>
        {showPrefixIcon &&
          React.createElement(prefixIcon as any, {
            size: size,
            className: `fill-interactive-icon-gray-subtle`,
          })}
        {prefixValue && (
          <span
            className={`font-primary text-sm font-normal text-surface-text-gray-subtle ml-${
              showPrefixIcon ? 3 : 0
            }`}
          >
            {prefixValue}
          </span>
        )}
        <input
          className={`ml-${
            prefixValue || prefixIcon ? 15 : 0
          } focus-visible:outline-none placeholder-gray-400 text-surface-text-gray-normal bg-inherit font-normal font-primary text-sm ${
            showSuffixButton && inputValue ? 'w-[calc(100%-24px)]' : 'w-full'
          }`}
          id={id || "input-field-main"}
          disabled={disabled}
          placeholder={placeholder}
          value={inputValue}
          onFocus={handleFocus}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />

        {/* <div className="suffix flex items-center w-fit"> */}
        {bankLogoIcon && (
          <div className="mr-2">
            <img src={bankLogoIcon} className='w-4 h-4' alt="Bank Logo" />
          </div>
        )}
        {shortcutKey && (
          <div className="flex items-center">
            <CommandKeyIcon
              size={size === 'medium' ? 'extraSmall' : 'medium'}
            />
            <div className="text-surface-text-gray-muted text-xs font-medium overflow-ellipsis ml-05">
              {shortcutKey}
            </div>
          </div>
        )}
        {suffixIcon && (
          <div className={`${inputValue ? 'mx-2' : 'ml-2'}`}>
            {React.createElement(suffixIcon as any, { size, className: 'fill-interactive-icon-gray-muted' })}
          </div>
        )}
        {showSuffixButton && inputValue && (
          <IconButton
            size={size}
            color="gray"
            onClick={() => setInputValue('')}
          />
        )}
      </div>

      {/* Info Text */}
      <div className="flex justify-between mb-1 px-1">
        {infoText && (
          <div className="flex items-center">
            {showValidationState ? (
              isInputValid ? (
                <SuccessIndicationIcon
                  size="small"
                  className="fill-feedback-icon-positive-intense mr-1"
                />
              ) : (
                <ErrorIndicationIcon
                  size="small"
                  className="fill-feedback-icon-negative-intense mr-1"
                />
              )
            ) : (
              helpTextIcon &&
              React.createElement(helpTextIcon as any, {
                size: size === 'large' ? 'medium' : 'small',
                className: 'fill-feedback-icon-neutral-muted mr-1',
              })
            )}
            <div
              className={`text-xs font-medium ${
                showValidationState
                  ? isInputValid
                    ? 'text-feedback-text-positive-intense'
                    : 'text-feedback-text-negative-intense'
                  : 'text-feedback-text-neutral-muted'
              }`}
            >
              {infoText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
