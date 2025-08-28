import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to create arbitrary value classes that work with Tailwind CSS
 * Handles cases where arbitrary values like max-h-[480px] might not be generated
 */

export interface ArbitraryValueConfig {
  property: string;
  value: string;
  prefix?: string;
}

/**
 * Creates a class name for arbitrary values
 * Falls back to inline styles if the Tailwind class doesn't exist
 */
export function createArbitraryClass(
  property: keyof CSSStyleDeclaration | string,
  value: string,
  tailwindClass?: string
): { className?: string; style?: React.CSSProperties } {
  // If a tailwind class is provided, use it
  if (tailwindClass) {
    return { className: tailwindClass };
  }

  // Otherwise, create inline style
  return {
    style: {
      [property as string]: value,
    } as React.CSSProperties,
  };
}

/**
 * Helper function for max-height arbitrary values
 */
export function maxH(value: string): { className?: string; style?: React.CSSProperties } {
  // Common cases that should have Tailwind classes
  const tailwindClasses: Record<string, string> = {
    '480px': 'max-h-[480px]',
    '90vh': 'max-h-[90vh]',
    '50vh': 'max-h-[50vh]',
    '70vh': 'max-h-[70vh]',
    '80vh': 'max-h-[80vh]',
    '95vh': 'max-h-[95vh]',
    '600px': 'max-h-[600px]',
    '400px': 'max-h-[400px]',
    '320px': 'max-h-[320px]',
    '500px': 'max-h-[500px]',
  };

  const tailwindClass = tailwindClasses[value];
  return createArbitraryClass('maxHeight', value, tailwindClass);
}

/**
 * Helper function for height arbitrary values
 */
export function h(value: string): { className?: string; style?: React.CSSProperties } {
  const tailwindClasses: Record<string, string> = {
    '480px': 'h-[480px]',
    '90vh': 'h-[90vh]',
    '50vh': 'h-[50vh]',
    '70vh': 'h-[70vh]',
    '80vh': 'h-[80vh]',
  };

  const tailwindClass = tailwindClasses[value];
  return createArbitraryClass('height', value, tailwindClass);
}

/**
 * Helper function for width arbitrary values
 */
export function w(value: string): { className?: string; style?: React.CSSProperties } {
  const tailwindClasses: Record<string, string> = {
    '480px': 'w-[480px]',
    '90vw': 'w-[90vw]',
    '50vw': 'w-[50vw]',
    '70vw': 'w-[70vw]',
    '80vw': 'w-[80vw]',
  };

  const tailwindClass = tailwindClasses[value];
  return createArbitraryClass('width', value, tailwindClass);
}

/**
 * Enhanced cn function that can handle arbitrary value objects
 */
export function cnWithArbitrary(...inputs: (ClassValue | { className?: string; style?: React.CSSProperties })[]): {
  className: string;
  style?: React.CSSProperties;
} {
  const classes: ClassValue[] = [];
  let combinedStyle: React.CSSProperties = {};

  inputs.forEach(input => {
    if (input && typeof input === 'object' && 'className' in input) {
      if (input.className) {
        classes.push(input.className);
      }
      if (input.style) {
        combinedStyle = { ...combinedStyle, ...input.style };
      }
    } else {
      classes.push(input as ClassValue);
    }
  });

  return {
    className: twMerge(clsx(classes)),
    style: Object.keys(combinedStyle).length > 0 ? combinedStyle : undefined,
  };
}

/**
 * Example usage hook for components
 */
export function useArbitraryStyles(
  ...styles: (ClassValue | { className?: string; style?: React.CSSProperties })[]
) {
  return cnWithArbitrary(...styles);
}
