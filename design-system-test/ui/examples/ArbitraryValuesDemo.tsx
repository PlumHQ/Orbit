import React from 'react';
import { maxH, h, w, cnWithArbitrary } from '../utilities/arbitraryValues';

/**
 * Demo component showing how to use arbitrary values like max-h-[480px] and max-h-[90vh]
 */
export function ArbitraryValuesDemo() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Arbitrary Values Demo</h2>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Max Height Examples</h3>
        
        {/* Using max-h-[480px] */}
        <div {...cnWithArbitrary('bg-blue-100 border border-blue-300 p-4', maxH('480px'))}>
          <p>This div has max-h-[480px]</p>
          <p>Content will be constrained to maximum height of 480px</p>
        </div>
        
        {/* Using max-h-[90vh] */}
        <div {...cnWithArbitrary('bg-green-100 border border-green-300 p-4', maxH('90vh'))}>
          <p>This div has max-h-[90vh]</p>
          <p>Content will be constrained to maximum height of 90% viewport height</p>
        </div>
        
        {/* Using max-h-[50vh] */}
        <div {...cnWithArbitrary('bg-purple-100 border border-purple-300 p-4', maxH('50vh'))}>
          <p>This div has max-h-[50vh]</p>
          <p>Content will be constrained to maximum height of 50% viewport height</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Height Examples</h3>
        
        {/* Using h-[90vh] */}
        <div {...cnWithArbitrary('bg-yellow-100 border border-yellow-300 p-4', h('90vh'))}>
          <p>This div has h-[90vh]</p>
          <p>Fixed height of 90% viewport height</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Width Examples</h3>
        
        {/* Using w-[480px] */}
        <div {...cnWithArbitrary('bg-red-100 border border-red-300 p-4', w('480px'))}>
          <p>This div has w-[480px]</p>
          <p>Fixed width of 480px</p>
        </div>
        
        {/* Using w-[70vw] */}
        <div {...cnWithArbitrary('bg-indigo-100 border border-indigo-300 p-4', w('70vw'))}>
          <p>This div has w-[70vw]</p>
          <p>Fixed width of 70% viewport width</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Traditional Tailwind Classes (for comparison)</h3>
        
        <div className="max-h-90 bg-gray-100 border border-gray-300 p-4">
          <p>This div uses the existing max-h-90 class</p>
          <p>Maximum height of 22.5rem (360px)</p>
        </div>
      </div>
    </div>
  );
}

export default ArbitraryValuesDemo;
