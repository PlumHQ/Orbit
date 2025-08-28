# Arbitrary Values Guide

This guide explains how to use arbitrary values like `max-h-[480px]` and `max-h-[90vh]` in the Plum Design System.

## Overview

The design system now supports arbitrary values for common CSS properties, allowing you to use custom dimensions without being limited to predefined Tailwind classes.

## Available Utility Functions

### 1. `maxH(value)` - Maximum Height

```tsx
import { maxH, cnWithArbitrary } from '@plumhq/design-system';

// Usage
<div {...cnWithArbitrary('bg-blue-100 p-4', maxH('480px'))}>
  Content with max-height: 480px
</div>
```

**Supported values:**
- `480px` → `max-h-[480px]`
- `90vh` → `max-h-[90vh]`
- `50vh` → `max-h-[50vh]`
- `70vh` → `max-h-[70vh]`
- `80vh` → `max-h-[80vh]`
- `95vh` → `max-h-[95vh]`
- `600px` → `max-h-[600px]`
- `400px` → `max-h-[400px]`
- `320px` → `max-h-[320px]`
- `500px` → `max-h-[500px]`

### 2. `h(value)` - Height

```tsx
import { h, cnWithArbitrary } from '@plumhq/design-system';

// Usage
<div {...cnWithArbitrary('bg-green-100 p-4', h('90vh'))}>
  Content with height: 90vh
</div>
```

**Supported values:**
- `480px` → `h-[480px]`
- `90vh` → `h-[90vh]`
- `50vh` → `h-[50vh]`
- `70vh` → `h-[70vh]`
- `80vh` → `h-[80vh]`

### 3. `w(value)` - Width

```tsx
import { w, cnWithArbitrary } from '@plumhq/design-system';

// Usage
<div {...cnWithArbitrary('bg-red-100 p-4', w('480px'))}>
  Content with width: 480px
</div>
```

**Supported values:**
- `480px` → `w-[480px]`
- `90vw` → `w-[90vw]`
- `50vw` → `w-[50vw]`
- `70vw` → `w-[70vw]`
- `80vw` → `w-[80vw]`

## How It Works

The utility functions work in two ways:

1. **Tailwind Classes**: For common values, they use predefined Tailwind classes that are included in the compiled CSS
2. **Inline Styles**: For any other values, they fall back to inline CSS styles

This hybrid approach ensures:
- ✅ Performance optimization for common cases
- ✅ Maximum flexibility for custom values
- ✅ No build-time dependencies

## Direct Class Usage

You can also use the classes directly in your HTML/JSX:

```html
<!-- These classes are predefined in the CSS -->
<div class="max-h-[480px] overflow-auto">Content</div>
<div class="max-h-[90vh] overflow-auto">Content</div>
<div class="h-[90vh]">Content</div>
<div class="w-[480px]">Content</div>
```

## Complete Example

```tsx
import React from 'react';
import { maxH, h, w, cnWithArbitrary } from '@plumhq/design-system';

export function MyComponent() {
  return (
    <div className="p-4">
      {/* Using utility functions */}
      <div {...cnWithArbitrary(
        'bg-blue-100 border border-blue-300 p-4 overflow-auto',
        maxH('480px'),
        w('600px')
      )}>
        <h3>Scrollable Container</h3>
        <div className="space-y-2">
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i}>Line {i + 1} of content...</p>
          ))}
        </div>
      </div>

      {/* Using direct classes */}
      <div className="max-h-[90vh] w-[70vw] bg-green-100 p-4 overflow-auto">
        <h3>Viewport-based Container</h3>
        <p>This container adapts to viewport size</p>
      </div>
    </div>
  );
}
```

## Advanced Usage

### Combining with Responsive Design

```tsx
// Responsive arbitrary values
<div className="w-[90vw] lg:w-[600px] max-h-[50vh] lg:max-h-[400px]">
  Responsive content
</div>
```

### Custom Values with Fallback

```tsx
// For values not predefined, the utility functions provide inline styles
const customStyles = cnWithArbitrary(
  'bg-purple-100 p-4',
  maxH('350px'), // Will use inline style if not predefined
  w('750px')     // Will use inline style if not predefined
);

<div {...customStyles} style={customStyles.style}>
  Custom sized container
</div>
```

### Modal with Arbitrary Values

```tsx
import { Modal } from '@plumhq/design-system';

<Modal.Content
  {...cnWithArbitrary(
    'p-6',
    maxH('80vh'),
    w('600px')
  )}
>
  Modal content that won't exceed 80% viewport height
</Modal.Content>
```

## Testing

To test if arbitrary values are working correctly, you can:

1. Open the test file: `test-arbitrary-values.html` in your browser
2. Check the browser console for validation results
3. Visually verify that containers have the expected dimensions

## Browser Support

- ✅ All modern browsers
- ✅ CSS custom properties support required
- ✅ Viewport units (vh, vw) support required

## Performance Notes

- Predefined arbitrary values use CSS classes (better performance)
- Custom arbitrary values use inline styles (slightly less optimal but more flexible)
- The compiled CSS includes the most common arbitrary value patterns
- No runtime JavaScript calculations for dimensions
