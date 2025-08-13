import React, { useState, useEffect } from 'react';
import { Input } from '@pluminsurance/design-system-test.input';
import { SearchIcon } from '@pluminsurance/design-system-test.icons';
import { TInputSearchStyleVariants, TInputSearchVariant } from './types';
import { LinkButton } from '@pluminsurance/design-system-test.link-button';
import { IconButton } from '@pluminsurance/design-system-test.icon-button';
import '@fontsource/inter';

export interface IInputSearch {
  styleVariant: TInputSearchStyleVariants;
  variant: TInputSearchVariant;
  placeholder: string;
  children?: unknown;
  searchSuggestions?: unknown;
  onClearSuggestions?: () => void;
  isLoading?: boolean;
  onInputChange?: (value: string) => void;
  defaultSearchText?: string;
  disabled?: boolean;
}

interface ISearchInputField { 
  searchText: string;
  isLoading: boolean;
  styleVariant: TInputSearchStyleVariants;
  placeholder: string;
  handleFocus: () => void;
  handleInputChange: (value: string) => void;
  clearSearchText: () => void;
  disabled: boolean;
  variant: TInputSearchVariant;
  id?: string;
}

const SearchInputField = ({
  searchText,
  isLoading,
  styleVariant,
  placeholder,
  handleFocus,
  handleInputChange,
  clearSearchText,
  disabled,
  variant,
  id = 'input',
}: ISearchInputField) => {
  const computedClassName = `
    w-full border border-solid px-6 py-2 rounded-3 mb-1 flex justify-between items-center focus-visible:plum-focus
       ${
         styleVariant === 'beige'
           ? 'bg-surface-background-beige-subtle'
           : 'bg-surface-background-white-normal'
       }
      ${
        styleVariant === 'beige'
          ? 'border-surface-border-beige-normal'
          : 'border-surface-border-gray-highlighted'
      }
    hover:bg-surface-background-${
      styleVariant === 'beige' ? 'beige-normal' : 'gray-subtle'
    } hover:children:bg-surface-background-${
    styleVariant === 'beige' ? 'beige-normal' : 'gray-subtle'
  }
  `;
  return (
    <div className={computedClassName}>
      {searchText && isLoading ? (
        <div 
          className="animate-spin w-5 h-5 rounded-8"
          style={{
            background: 'conic-gradient(from 0deg, #F88E7A1A 0deg, #925448 90deg, #F88E7A1A 90deg, #925448 180deg, #F88E7A1A 180deg, #925448 270deg, #F88E7A1A 270deg, #925448 360deg)'
          }}
        ></div>
      ) : (
        <SearchIcon size="large" className="fill-surface-icon-gray-subtle" />
      )}
      <input
        className={`ml-15 w-full ${
          styleVariant === 'beige'
            ? 'bg-surface-background-beige-subtle'
            : 'bg-surface-background-white-normal'
        } focus-visible:outline-none placeholder-gray-400 text-surface-text-gray-normal bg-inherit font-normal font-primary text-sm`}
        placeholder={placeholder}
        value={searchText}
        {...(variant === 'table' ? {} : {onFocus: handleFocus})}
        onChange={(e) => handleInputChange(e.target.value)}
        id={id}
        disabled={disabled}
      />
      {searchText && (
        <IconButton size={'medium'} color="gray" onClick={clearSearchText} />
      )}
    </div>
  );
};

export const InputSearch = ({
  styleVariant,
  placeholder,
  variant,
  children,
  searchSuggestions,
  isLoading = false,
  onClearSuggestions,
  defaultSearchText,
  disabled = false,
  onInputChange = (value) => {},
}: IInputSearch) => {
  const [searchText, setSearchText] = useState(defaultSearchText || '');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [showSearchSuggestion, setShowSearchSuggestions] = useState(true);

  const handleFocus = () => {
    setIsDropdownVisible(true);
  };

  useEffect(() => {
    if (isDropdownVisible) {
      document.getElementById('modal-input')?.focus();
    }
  }, [isDropdownVisible]);

  const handleBlur = (event: React.FocusEvent) => {
    if (!event.currentTarget.contains(event.relatedTarget) && variant === 'global') {
      setIsDropdownVisible(false);
      setSearchText('');
    }
  };

  const handleGlobalBlur = (event: React.FocusEvent) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsDropdownVisible(false);
      setSearchText('');
    }
  };

  const handleInputChange = (value: string) => {
    setSearchText(value);
    setShowSearchSuggestions(!value);
    onInputChange(value);
  };

  const clearSuggestions = () => {
    setShowSearchSuggestions(false);
    onClearSuggestions && onClearSuggestions();
  };

  const clearSearchText = () => {
    handleInputChange('');
  };

  return (
    <div
      style={{
        width: '600px',
      }}
      onBlur={handleBlur}
    >
      {/* Input Field */}
      <SearchInputField
        searchText={variant === 'global' ? '' : searchText}
        isLoading={isLoading}
        styleVariant={styleVariant}
        placeholder={placeholder}
        handleFocus={handleFocus}
        handleInputChange={handleInputChange}
        clearSearchText={clearSearchText}
        disabled={variant === 'global' ? isDropdownVisible : disabled}
        variant={variant}
      />
      {variant === 'global' && isDropdownVisible && (
        <>
          <div
            className=""
            style={{
              zIndex: 1000,
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'inherit'
            }}
            tabIndex={-1}
          >
            <SearchInputField
              searchText={searchText}
              isLoading={isLoading}
              styleVariant={"gray"}
              placeholder={placeholder}
              handleFocus={() => {}}
              handleInputChange={handleInputChange}
              clearSearchText={clearSearchText}
              id='modal-input'
              disabled={false}
              variant={variant}
            />
            <div
              className={`bg-interactive-background-white-normal p-6 h-max-320 w-full rounded-3`}
            >
              {showSearchSuggestion && (
                <div className={`flex items-center px-2 justify-between`}>
                  <div
                    className={`text-base font-primary font-normal text-surface-text-gray-subtle`}
                  >
                    Recent Searches
                  </div>
                  <LinkButton
                    label="Clear"
                    size="large"
                    state="primary"
                    onClick={clearSuggestions}
                  />
                </div>
              )}
              <div className={`mt-2 rounded-4`}>
                {!(searchText && children) ? showSearchSuggestion ? (searchSuggestions as React.ReactNode) : '' : (children as React.ReactNode)}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
