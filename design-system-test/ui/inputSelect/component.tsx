import React, { useState, useEffect, useRef } from 'react';
import { LinkButton } from '../linkButton';
import { TInputSelectSizes, ISelectOption } from './types';
import {
  ChevronDownIcon,
  ErrorIndicationIcon,
  InfoIcon,
  SearchIcon,
  SuccessIndicationIcon,
} from '../icons';
import '@fontsource/inter';

export interface IInputSelect {
  label?: string;
  helperLink?: string;
  disabled?: boolean;
  size: TInputSelectSizes;
  helperText?: string;
  placeholder?: string;
  isRequired?: boolean;
  isOptional?: boolean;
  helpTextIcon?: React.FC;
  prefixIcon?: React.FC;
  prefixValue?: string;
  isValidated?: boolean;
  defaultValue?: string;
  showValidation?: boolean;
  isValid?: (value: any) => boolean;
  errorText?: string;
  successText?: string;
  onChange?: (value: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  id?: string;
  options?: ISelectOption[];
  searchable?: boolean;
  onSelect?: (option: ISelectOption) => void;
}

export const InputSelect = ({
  label,
  helperLink,
  helperText,
  disabled = false,
  placeholder,
  isRequired,
  isOptional,
  helpTextIcon = InfoIcon,
  defaultValue = '',
  prefixIcon,
  showValidation,
  prefixValue = '',
  isValid = (value: string) => true,
  errorText,
  successText,
  onChange = (value: string) => {},
  onFocus = () => {},
  onBlur = () => {},
  size,
  id,
  options = [],
  searchable = false,
  onSelect = () => {},
}: IInputSelect) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isInputValid, setIsInputValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState<ISelectOption | null>(null);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue, onChange]);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  useEffect(() => {
    if (searchable && isDropdownOpen) {
      const filtered = options.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(options);
    }
  }, [inputValue, options, searchable, isDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setFocusedOptionIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFocus = () => {
    onFocus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsInputValid(isValid(value));
    setIsTouched(true);
    
    if (searchable && options.length > 0) {
      setIsDropdownOpen(true);
    }
  };

  const handleBlur = () => {
    setIsInputValid(isValid(inputValue));
    if (!isTouched) setIsTouched(true);
    onBlur();
  };

  const handleDropdownToggle = () => {
    if (disabled || options.length === 0) return;
    setIsDropdownOpen(!isDropdownOpen);
    setFocusedOptionIndex(-1);
  };

  const handleOptionSelect = (option: ISelectOption) => {
    setSelectedOption(option);
    setInputValue(option.label);
    setIsDropdownOpen(false);
    setFocusedOptionIndex(-1);
    onSelect(option);
    onChange(option.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (options.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isDropdownOpen) {
          setIsDropdownOpen(true);
        } else {
          setFocusedOptionIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isDropdownOpen) {
          setFocusedOptionIndex(prev => 
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (isDropdownOpen && focusedOptionIndex >= 0) {
          handleOptionSelect(filteredOptions[focusedOptionIndex]);
        } else if (!isDropdownOpen) {
          setIsDropdownOpen(true);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsDropdownOpen(false);
        setFocusedOptionIndex(-1);
        inputRef.current?.blur();
        break;
      case 'Tab':
        setIsDropdownOpen(false);
        setFocusedOptionIndex(-1);
        break;
    }
  };

  const displayValue = selectedOption ? selectedOption.label : inputValue;

  const showValidationState =
    isTouched && showValidation && (inputValue || isRequired);

  const infoText = showValidationState
    ? isInputValid
      ? successText
      : errorText
    : helperText;

  const computedClassName = `
    w-full border border-solid py-2 px-3 rounded-25 mb-1 flex justify-between items-center focus-within:plum-focus cursor-pointer relative
    ${
      disabled
        ? 'bg-surface-background-gray-muted cursor-not-allowed'
        : 'bg-surface-background-white-normal'
    }
    ${
      showValidationState
        ? isInputValid
          ? 'border-feedback-border-positive-intense'
          : 'border-feedback-border-negative-intense'
        : isDropdownOpen
        ? 'border-surface-border-gray-highlighted ring-2 ring-blue-100'
        : 'border-surface-border-gray-highlighted'
    }
    hover:bg-surface-background-gray-subtle hover:children:bg-surface-background-gray-subtle
  `;

  return (
    <div className="w-full font-primary relative" ref={dropdownRef}>
      {/* Label and Helper Link */}
      <div className="flex justify-between mb-1 px-1">
        {label && (
          <div className={`flex text-${size === 'medium' ? 'xs' : 'sm'}`}>
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
      <div className={computedClassName} onClick={handleDropdownToggle}>
        {prefixIcon &&
          React.createElement(prefixIcon as any, {
            size: size,
            className: `fill-interactive-icon-gray-subtle`,
          })}
        {prefixValue && (
          <span
            className={`font-primary text-sm font-normal text-surface-text-gray-subtle ml-${
              prefixIcon ? 15 : 0
            }`}
          >
            {prefixValue}
          </span>
        )}
        <input
          ref={inputRef}
          className={`ml-15 focus-visible:outline-none placeholder-gray-400 text-surface-text-gray-normal bg-inherit font-normal font-primary text-sm w-full ${
            !searchable ? 'cursor-pointer' : ''
          }`}
          id={id || "input-field-main"}
          disabled={disabled}
          placeholder={placeholder}
          value={searchable ? inputValue : displayValue}
          onFocus={handleFocus}
          onChange={searchable ? handleInputChange : undefined}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          readOnly={!searchable}
        />
        <div className={`${inputValue ? 'mx-2' : 'ml-2'}`}>
          <ChevronDownIcon 
            className={`fill-interactive-icon-gray-muted transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`} 
            size={size} 
          />
        </div>
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

       {/* Dropdown Menu */}
       {isDropdownOpen && filteredOptions.length > 0 && (
        <div className="absolute dropdown-shadow z-50 w-full rounded-3 mt-2 bg-surface-background-white-normal rounded-lg max-h-60 overflow-y-auto p-2">
          {filteredOptions.map((option, index) => (
            <div
              key={option.value}
              className={`flex items-center px-15 py-2 cursor-pointer hover:bg-surface-background-gray-subtle transition-colors ${
                index === focusedOptionIndex ? 'bg-surface-background-gray-subtle' : ''
              } ${
                selectedOption?.value === option.value ? 'bg-blue-50 text-blue-700' : 'text-surface-text-gray-normal'
              }`}
              onClick={() => handleOptionSelect(option)}
              onMouseEnter={() => setFocusedOptionIndex(index)}
            >
              {option.icon && (
                <div className="mr-1">
                  {React.createElement(option.icon as any, {
                    size: 'medium',
                    className: 'fill-interactive-icon-gray-subtle',
                  })}
                </div>
              )}
              <span className="font-primary text-sm font-medium text-interactive-text-gray-normal">
                {option.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
