import * as React from 'react';
import { cva } from 'class-variance-authority';
import '../../styles/output.css';
import { TBadgeSizeVariants, TBadgeStyleVariants, TBadgeVariants } from './types';
import '@fontsource/inter';
import { cn } from '../utilities';

interface IconProps {
  size?: string;
  className?: string;
  color?: string;
}

export interface IBadge {
  styleVariant: TBadgeStyleVariants;
  size: TBadgeSizeVariants;
  variant: TBadgeVariants;
  value: string;
  icon?: React.FC<IconProps>;
}

export const Badge = ({
  styleVariant,
  variant,
  size,
  value,
  icon ,
}: IBadge) => {
  const variantMap = {
    primary: 'intense',
    secondary: 'subtle',
  };

  const colorVariantsMap = {
    neutral: ['neutral', 'neutral'],
    positive: ['neutral', 'neutral'],
    information: ['neutral', 'neutral'],
    negative: ['neutral', 'neutral'],
    notice: ['notice', 'notice'],
  };

  const badgeVariants = cva(
    `inline-flex gap-1 w-fit items-center font-medium font-primary ${
      variant === 'primary'
        ? ''
        : `border border-feedback-border-${styleVariant}-intense`
    } transition-colors focus:outline-none focus:ring-ring focus:ring-offset-2 ${
      variant === 'tertiary'
        ? `bg-surface-background-white-transparent`
        : `bg-feedback-background-${styleVariant}-${
            styleVariant === 'neutral' && variant === 'primary'
              ? 'highlighted'
              : variantMap[variant]
          }`
    } text-feedback-text-${
      variant === 'primary' ? colorVariantsMap[styleVariant][0] : styleVariant
    }-${
      variant === 'secondary' || variant === 'tertiary'
        ? styleVariant === 'neutral'
          ? 'subtle'
          : `intense`
        : styleVariant === 'notice'
        ? `intense`
        : `minimal`
    }`,
    {
      variants: {
        size: {
          large: 'py-15 px-2 text-base rounded-3',
          medium: 'py-15 px-2 text-sm rounded-25',
          small: 'py-1 px-2 text-xs rounded-2',
        },
      },
    }
  );
  const IconComponent = icon;
  return (
    <div className={cn(badgeVariants({ size }))}>
      <div>
        {IconComponent && <IconComponent
          size={size === 'large' ? 'medium' : size === 'medium' ? 'small' : 'extraSmall'}
          className={`fill-feedback-icon-${
            variant === 'primary'
              ? colorVariantsMap[styleVariant][1]
              : styleVariant
          }-${
            variant === 'secondary' || variant === 'tertiary'
              ? styleVariant === 'notice' || styleVariant === 'information'
                ? 'normal'
                : styleVariant === 'neutral'
                ? 'subtle'
                : `intense`
              : styleVariant === 'notice'
              ? 'normal'
              : `minimal`
          }`}
        />}
      </div>
      <div>{value}</div>
    </div>
  );
};
