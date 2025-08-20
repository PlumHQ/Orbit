import React from 'react';
import { TDividerStroke, TDividerStyle, TDividerVariant } from './types';
import { cva } from 'class-variance-authority';
import '../../styles/output.css';
import { cn } from '../utilities';

export interface IDivider {
  stroke: TDividerStroke;
  dividerStyle: TDividerStyle;
  variant: TDividerVariant;
}
export const Divider = ({ stroke, dividerStyle, variant}: IDivider) => {
  const dividerVariants = cva(
    `border-b border-surface-border-${dividerStyle}-${variant} w-full`,
    {
      variants: {
        stroke: {
          solid: `border-solid`,
          dashed: `border-dashed`,
        },
      },
    }
  );

  return <div className={cn(dividerVariants({ stroke }))}></div>;
}
