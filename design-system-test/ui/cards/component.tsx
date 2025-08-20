import React from 'react';
import { cva } from 'class-variance-authority';
import { TCardSizes, TCardStyles } from './types';
import '../../styles/output.css';
import { cn } from '../utilities';
import '@fontsource/inter';

export interface ICard {
  size: TCardSizes;
  cardStyle: TCardStyles;
  children?: React.ReactNode;
}

export const Card = ({
  size,
  cardStyle,
  children
}: ICard) => {
  const cardVariants = cva(`border-solid border`, {
    variants: {
      size: {
        large: 'p-12 rounded-6',
        medium: 'p-10 rounded-6',
        small: 'p-6 rounded-4',
      },
      cardStyle: {
        primary: 'border-surface-border-beige-subtle',
        positive: 'border-feedback-border-positive-intense',
        negative: 'border-feedback-border-negative-intense',
        secondary: 'border-surface-border-gray-subtle',
      },
    },
  });
  return (
    <div className={cn(cardVariants({ size, cardStyle }))}>
      {children && children}
    </div>
  );
}
