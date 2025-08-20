import { cva } from 'class-variance-authority';
import React from 'react';
import { TCounterSizes, TCounterStyleVariants } from './types';
import { cn } from '../utilities';
import '@fontsource/inter';


export interface ICounter {
  size: TCounterSizes;
  styleVariant: TCounterStyleVariants;
  value?: number;
}

export const Counter = ({
  size,
  styleVariant,
  value,
}: ICounter) => {
  const counterVariants = cva(
    'flex items-center justify-center font-primary font-medium text-sm rounded-8',
    {
      variants: {
        size: {
          medium: 'h-5 w-5',
          large: 'h-6 w-6',
        },
        styleVariant: {
          positive:
            'bg-feedback-background-positive-intense text-feedback-text-positive-subtle',
          negative:
            'bg-feedback-background-negative-intense text-feedback-text-negative-subtle',
          neutral:
            'bg-feedback-background-neutral-intense text-feedback-text-neutral-minimal',
          notice:
            'bg-feedback-background-notice-intense text-feedback-text-notice-intense',
          information:
            'bg-feedback-background-information-intense text-feedback-text-neutral-minimal',
        },
      },
    }
  );
  return (
    <div className={cn(counterVariants({ size, styleVariant }))}>{value}</div>
  );
};
