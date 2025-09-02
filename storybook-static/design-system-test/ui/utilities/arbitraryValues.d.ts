import { ClassValue } from 'clsx';
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
export declare function createArbitraryClass(property: keyof CSSStyleDeclaration | string, value: string, tailwindClass?: string): {
    className?: string;
    style?: React.CSSProperties;
};
/**
 * Helper function for max-height arbitrary values
 */
export declare function maxH(value: string): {
    className?: string;
    style?: React.CSSProperties;
};
/**
 * Helper function for height arbitrary values
 */
export declare function h(value: string): {
    className?: string;
    style?: React.CSSProperties;
};
/**
 * Helper function for width arbitrary values
 */
export declare function w(value: string): {
    className?: string;
    style?: React.CSSProperties;
};
/**
 * Enhanced cn function that can handle arbitrary value objects
 */
export declare function cnWithArbitrary(...inputs: (ClassValue | {
    className?: string;
    style?: React.CSSProperties;
})[]): {
    className: string;
    style?: React.CSSProperties;
};
/**
 * Example usage hook for components
 */
export declare function useArbitraryStyles(...styles: (ClassValue | {
    className?: string;
    style?: React.CSSProperties;
})[]): {
    className: string;
    style?: React.CSSProperties;
};
