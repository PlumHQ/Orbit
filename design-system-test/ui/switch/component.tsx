import * as React from 'react';
import clsx from 'clsx';
import { CheckedIcon } from '@pluminsurance/design-system-test.icons';
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
}

const SwitchLabel = ({ label, description, labelPosition, styleVariant, disabled, size }: {
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
  onChange = (checked) => {},
  label,
  description,
  labelPosition = "left",
  styleVariant,
  disabled=false,
  size="medium",
}: IToggleSwitch) => {
  const changeToggleSwitch = () =>{
    if(!disabled){
      onChange(!checked);
    }
  }

  return (
    <div className={`flex font-primary ${disabled ? ``: `cursor-pointer`}`} onClick={changeToggleSwitch}>
      {labelPosition === 'left' && (
        <SwitchLabel label={label} description={description} labelPosition={labelPosition} styleVariant={styleVariant} disabled={disabled} size={size} />
      )}
      <div>
        <button
          type="button"
          // onClick={() => onChange(!checked)}
          role="switch"
          aria-checked={checked}
          className={clsx(
            `relative inline-flex p-1 py-05 w-${size === "medium" ? "9" : "7"} flex-shrink-0 cursor-pointer rounded-8 border border-interactive-border-${
              checked ? 'primary-normal' : styleVariant === "gray" ? `gray-${disabled ? 'disabled' : 'intense'}` : `beige-${disabled ? 'disabled' : 'normal'}`
            } transition-colors transition-switch`,
            checked ? `bg-interactive-background-primary-${disabled ? 'disabled' : 'normal'}` : '',
            `${disabled ? '' : checked ? `hover:bg-interactive-background-primary-highlighted` : `hover:bg-interactive-background-${styleVariant}-muted`}`,
            `focus:outline-none focus:ring-offset-2 focus:ring-interactive-border-primary-normal`
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
