import React from 'react';
import { TLeafletSize, TLeafletStyle } from './types';
import { cva } from 'class-variance-authority';
import { cn } from '../utilities';
import '@fontsource/inter';


export interface ILeaflet {
  style: TLeafletStyle;
  size: TLeafletSize;
  leadingIcon?: React.FC;
  leadingText: string;
  trailingIcon?: React.FC;
  trailingText?: string;
  onClick?: () => void;
  width?: string;
}

export const Leaflet = ({
  size,
  style,
  leadingIcon,
  leadingText,
  trailingIcon,
  trailingText,
  onClick = () => {},
  width,
}: ILeaflet) => {
  const colorDepthMapping = {
    positive: ['intense', 'intense'],
    information: ['intense', 'normal'],
    notice: ['intense', 'normal'],
    neutral: ['normal', 'normal'],
    negative: ['intense', 'intense'],

  }
  const leafletVariants = cva(
    `w-full cursor-pointer flex items-center justify-between rounded-b font-primary font-medium border border-feedback-border-${style}-subtle bg-interactive-background-${style}-subtle hover:bg-feedback-background-${style}-normal text-feedback-text-${style}-${
      colorDepthMapping[style][0]
    }`,
    {
      variants: {
        size: {
          large: `p-8 pb-2 px-5 rounded-b-lg  text-base`,
          medium: `pl-8 pt-5 pr-6 pb-2 rounded-b-md text-sm`,
        },
      },
      defaultVariants: {
        size: 'large',
      },
    }
  );
  return (
    <div 
      className={cn(leafletVariants({ size }))} 
      onClick={onClick}
      style={width ? { width: `${width}px` } : undefined}
    >
      <div className={`flex gap-1 justify-between`}>
        <div className={`flex items-center gap-1`}>
          {leadingIcon && React.createElement(leadingIcon, {
            size: size,
            className: `fill-feedback-icon-${style}-${
              colorDepthMapping[style][1]
            }`,
          })}
        </div>
        <div>{leadingText}</div>
      </div>
      <div className={`flex gap-1 items-center`}>
        {trailingText && <div>{trailingText}</div>}
        {trailingIcon && (
          <div>
            {React.createElement(trailingIcon, {
              size: size,
              className: `fill-feedback-icon-${style}-${
                colorDepthMapping[style][1]
              }`,
            })}
          </div>
        )}
      </div>
    </div>
  );
}
