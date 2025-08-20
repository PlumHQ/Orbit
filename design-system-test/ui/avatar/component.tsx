/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import '../../styles/output.css';
import { clsx } from 'clsx';
import '@fontsource/inter';
import { TAvatarSizes, TAvatarVariants } from './types';

export interface IAvatar {
  variant: TAvatarVariants;
  size: TAvatarSizes;
  src?: string;
  fallback?: string;
  alt?: string;
  onClick: () => void;
}

export const Avatar: React.FC<IAvatar> = ({
  variant,
  size,
  src,
  fallback = '?',
  alt = '?',
  onClick= () => {}
}) => {
  const sizeClasses: Record<string, string> = {
    '2xlarge': 'w-16 h-16 text-2xl',
    'xlarge': 'w-12 h-12 text-lg',
    large: 'w-10 h-10 text-base',
    medium: 'w-9 h-9 text-base',
    small: 'w-6 h-6 text-xs',
  };

  return (
    <AvatarPrimitive.Root
      className={clsx(
        'inline-flex items-center justify-center align-middle overflow-hidden rounded-8',
        'text-surface-text-beige-subtle',
        'border-15 border-solid border-surface-border-beige-normal',
        'cursor-pointer',
        sizeClasses[size]
            )}
            onClick={onClick}
          >
            {variant === 'image' ? (
        <AvatarPrimitive.Image
          src={src}
          alt={alt}
          className={clsx(
            'w-full h-full object-cover',
            'bg-surface-background-beige-subtle', 
            'rounded-md'
          )}
        />
      ) : (
        <AvatarPrimitive.Fallback
          className={clsx(
            'w-full h-full flex items-center justify-center',
            'bg-surface-background-beige-subtle font-semibold',
            'rounded-md',
            sizeClasses[size]
          )}
        >
          {fallback}
        </AvatarPrimitive.Fallback>
      )}
    </AvatarPrimitive.Root>
  );
};
