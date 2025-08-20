import React from 'react';
import { CrossCloseIcon } from '../icons';
import { IIconButtonColors, IIconButtonSizes } from './types';
import { cva } from 'class-variance-authority';
import { cn } from '../utilities';
import '../../styles/output.css';
import '@fontsource/inter';


export interface IIconButton {
  color: IIconButtonColors;
  size: IIconButtonSizes;
  disabled?: boolean;
  icon?: React.FC
  onClick?: () => void;
}

export const IconButton = ({
  color,
  size,
  disabled = false,
  icon = CrossCloseIcon,
  onClick = () => {},
}: IIconButton) => {
const iconButtonVariants = cva(
    `${disabled? '' : `hover:bg-interactive-background-${color}-${color === "white" ? "muted" : "normal"}`} focus-visible:plum-focus`, 
    {
        variants: {
            size: {
                large: 'rounded-15',
                medium: 'rounded-1',
                small: 'rounded-1',
            },
        },
    }
);

  const iconClass = `fill-interactive-icon-${color}-${disabled ? 'disabled': 'normal'}`
  return (
    <>
      <button className={cn(iconButtonVariants({size}))} disabled={disabled} onClick={onClick}>
        {React.createElement(icon, {className: iconClass, size: size})}
      </button>
    </>
  );
}
