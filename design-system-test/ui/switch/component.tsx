import * as React from 'react';
import clsx from 'clsx';
import { CheckedIcon } from '../icons';
import { IToggleSwitchLabelPositions, IToggleSwitchSizes, IToggleSwitchStyleVariants } from './types';
import '@fontsource/inter';

export interface IToggleSwitch {
  checked: boolean;
  onChange: (checked: boolean) => void;
  styleVariant?:IToggleSwitchStyleVariants;
  className?: string;
  label?: string;
  description?: string;
  labelPosition?: IToggleSwitchLabelPositions;
  disabled?:boolean;
  size: IToggleSwitchSizes;
  tabIndex?: number;
}

const SwitchLabel = ({ label, description, labelPosition = "left", styleVariant, disabled, size }: {
  label?: string;
  description?: string;
  labelPosition?: IToggleSwitchLabelPositions;
  styleVariant?: IToggleSwitchStyleVariants;
  disabled?: boolean;
  size?: IToggleSwitchSizes;
}) => {
  return (
    <div className={`${labelPosition  === "left" ? 'mr-2' : 'ml-2'}`}>
      {label && <div className={`text-interactive-text-${styleVariant}-${disabled ? "disabled" : "normal"} text-${size=== "small" ? "sm" : "base"} font-medium`}>{label}</div>}
      {description && <div  className={`text-interactive-text-${styleVariant}-${disabled ? "disabled" : "subtle"} text-${size=== "small" ? "xs" : "sm"} font-normal`}>{description}</div>}
    </div>
  );
};

export const ToggleSwitch = ({
  checked = false,
  onChange = (checked: boolean) => {},
  label,
  description,
  labelPosition = "left",
  styleVariant,
  disabled=false,
  size="medium",
  tabIndex = 0,
}: IToggleSwitch) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className={`flex font-primary`}>
      {labelPosition === 'left' && (
        <SwitchLabel label={label} description={description} labelPosition={labelPosition} styleVariant={styleVariant} disabled={disabled} size={size} />
      )}
      <div>
        <button
          type="button"
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          role="switch"
          aria-checked={checked}
          tabIndex={disabled ? -1 : tabIndex}
          className={clsx(
            `relative inline-flex p-1 py-05 w-${size === "medium" ? "9" : "7"} flex-shrink-0 cursor-pointer rounded-8 border border-interactive-border-${
              checked ? 'primary-normal' : styleVariant === "gray" ? `gray-${disabled ? 'disabled' : 'intense'}` : `beige-${disabled ? 'disabled' : 'normal'}`
            } transition-colors transition-switch`,
            checked ? `bg-interactive-background-primary-${disabled ? 'disabled' : 'normal'}` : '',
            `${disabled ? '' : checked ? `hover:bg-interactive-background-primary-highlighted` : `hover:bg-interactive-background-${styleVariant}-muted`}`,
            disabled ? '' : 'focus-visible:plum-focus'
          )}
          disabled={disabled}
        >
          <div
            className={clsx(
              `pointer-events-none inline-block h-${size === "small" ? "25" : "3"} w-${size === "small" ? "25" : "3"} transform rounded-8 shadow ring-0 transition duration-200 ease-in-out`,
              checked
            ? `transform-switch-checked-${size} bg-surface-background-white-normal`
            : styleVariant === "gray"  ? `transform-switch-unchecked bg-interactive-icon-gray-${disabled ? 'disabled' : 'subtle'}` : `transform-switch-unchecked bg-interactive-icon-beige-${disabled ? 'disabled' : 'muted'}`
            )}
          >
            {checked ? (
              <CheckedIcon
            size={size === "medium" ? "extraSmall" : "doubleExtraSmall"}
            className={`fill-interactive-icon-primary-${disabled ? 'disabled' : 'normal'}`}
              />
            ) : (
              ''
            )}
          </div>
        </button>
      </div>
      {labelPosition === 'right' && (
        <SwitchLabel label={label} description={description} labelPosition={labelPosition} styleVariant={styleVariant} disabled={disabled} size={size} />
      )}
    </div>
  );
};
