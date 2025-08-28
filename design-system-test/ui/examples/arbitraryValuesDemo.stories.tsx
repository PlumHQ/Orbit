import type { Meta, StoryObj } from '@storybook/react';
import { ArbitraryValuesDemo } from './ArbitraryValuesDemo';
import { maxH, h, w, cnWithArbitrary } from '../utilities/arbitraryValues';

const meta = {
  title: 'Utilities/Arbitrary Values Demo',
  component: ArbitraryValuesDemo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
This demo shows how to use arbitrary values like \`max-h-[480px]\` and \`max-h-[90vh]\` in your components.

## Usage

Instead of being limited to predefined Tailwind classes, you can now use arbitrary values:

\`\`\`tsx
import { maxH, h, w, cnWithArbitrary } from '../utilities/arbitraryValues';

// For max-height
<div {...cnWithArbitrary('bg-blue-100 p-4', maxH('480px'))}>
  Content with max-height: 480px
</div>

// For height
<div {...cnWithArbitrary('bg-green-100 p-4', h('90vh'))}>
  Content with height: 90vh
</div>

// For width
<div {...cnWithArbitrary('bg-red-100 p-4', w('70vw'))}>
  Content with width: 70vw
</div>
\`\`\`

## Supported Values

The utility functions support both:
- **Tailwind classes**: When the arbitrary value is common (like \`480px\`, \`90vh\`), it uses the generated Tailwind class
- **Inline styles**: When the arbitrary value is not predefined, it falls back to inline CSS styles

This ensures maximum flexibility while maintaining performance.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArbitraryValuesDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MaxHeightExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Max Height Arbitrary Values</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="max-h-[480px] bg-blue-100 border border-blue-300 p-4 overflow-auto">
          <h3 className="font-semibold">max-h-[480px]</h3>
          <p>This container has a maximum height of 480px.</p>
          <div className="mt-4 space-y-2">
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>Line {i + 1} - This is some content to demonstrate scrolling behavior when content exceeds the max height.</p>
            ))}
          </div>
        </div>
        
        <div className="max-h-[90vh] bg-green-100 border border-green-300 p-4 overflow-auto">
          <h3 className="font-semibold">max-h-[90vh]</h3>
          <p>This container has a maximum height of 90% of the viewport height.</p>
          <div className="mt-4 space-y-2">
            {Array.from({ length: 30 }, (_, i) => (
              <p key={i}>Line {i + 1} - This content will scroll when it exceeds 90% of viewport height.</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of max-height arbitrary values in action. Notice how the containers become scrollable when content exceeds the maximum height.',
      },
    },
  },
};

export const UtilityFunctionExample: Story = {
  render: () => {
    const containerStyles = cnWithArbitrary(
      'bg-purple-100 border border-purple-300 p-4',
      maxH('400px'),
      w('600px')
    );

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Using Utility Functions</h2>
        <p>This example uses the utility functions to create arbitrary values programmatically.</p>
        
        <div {...containerStyles} style={containerStyles.style}>
          <h3 className="font-semibold">Container with maxH('400px') and w('600px')</h3>
          <p className="text-sm text-gray-600 mb-4">
            This container uses the utility functions to set max-height: 400px and width: 600px
          </p>
          <div className="space-y-2 overflow-auto">
            {Array.from({ length: 15 }, (_, i) => (
              <div key={i} className="bg-white p-2 rounded border">
                <p>Content block {i + 1}</p>
                <p className="text-sm text-gray-500">This content will scroll when it exceeds the max height</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates using the utility functions to create arbitrary values with a combination of Tailwind classes and custom styles.',
      },
    },
  },
};
