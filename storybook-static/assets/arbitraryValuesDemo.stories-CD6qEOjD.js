import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as j}from"./clsx-B-dksMZM.js";import{t as N}from"./bundle-mjs-CLJs87Zn.js";function m(s,t,i){return i?{className:i}:{style:{[s]:t}}}function l(s){const i={"480px":"max-h-[480px]","90vh":"max-h-[90vh]","50vh":"max-h-[50vh]","70vh":"max-h-[70vh]","80vh":"max-h-[80vh]","95vh":"max-h-[95vh]","600px":"max-h-[600px]","400px":"max-h-[400px]","320px":"max-h-[320px]","500px":"max-h-[500px]"}[s];return m("maxHeight",s,i)}function T(s){const i={"480px":"h-[480px]","90vh":"h-[90vh]","50vh":"h-[50vh]","70vh":"h-[70vh]","80vh":"h-[80vh]"}[s];return m("height",s,i)}function c(s){const i={"480px":"w-[480px]","90vw":"w-[90vw]","50vw":"w-[50vw]","70vw":"w-[70vw]","80vw":"w-[80vw]"}[s];return m("width",s,i)}function r(...s){const t=[];let i={};return s.forEach(a=>{a&&typeof a=="object"&&"className"in a?(a.className&&t.push(a.className),a.style&&(i={...i,...a.style})):t.push(a)}),{className:N(j(t)),style:Object.keys(i).length>0?i:void 0}}function d(){return e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold",children:"Arbitrary Values Demo"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Max Height Examples"}),e.jsxs("div",{...r("bg-blue-100 border border-blue-300 p-4",l("480px")),children:[e.jsx("p",{children:"This div has max-h-[480px]"}),e.jsx("p",{children:"Content will be constrained to maximum height of 480px"})]}),e.jsxs("div",{...r("bg-green-100 border border-green-300 p-4",l("90vh")),children:[e.jsx("p",{children:"This div has max-h-[90vh]"}),e.jsx("p",{children:"Content will be constrained to maximum height of 90% viewport height"})]}),e.jsxs("div",{...r("bg-purple-100 border border-purple-300 p-4",l("50vh")),children:[e.jsx("p",{children:"This div has max-h-[50vh]"}),e.jsx("p",{children:"Content will be constrained to maximum height of 50% viewport height"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Height Examples"}),e.jsxs("div",{...r("bg-yellow-100 border border-yellow-300 p-4",T("90vh")),children:[e.jsx("p",{children:"This div has h-[90vh]"}),e.jsx("p",{children:"Fixed height of 90% viewport height"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Width Examples"}),e.jsxs("div",{...r("bg-red-100 border border-red-300 p-4",c("480px")),children:[e.jsx("p",{children:"This div has w-[480px]"}),e.jsx("p",{children:"Fixed width of 480px"})]}),e.jsxs("div",{...r("bg-indigo-100 border border-indigo-300 p-4",c("70vw")),children:[e.jsx("p",{children:"This div has w-[70vw]"}),e.jsx("p",{children:"Fixed width of 70% viewport width"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Traditional Tailwind Classes (for comparison)"}),e.jsxs("div",{className:"max-h-90 bg-gray-100 border border-gray-300 p-4",children:[e.jsx("p",{children:"This div uses the existing max-h-90 class"}),e.jsx("p",{children:"Maximum height of 22.5rem (360px)"})]})]})]})}try{d.displayName="ArbitraryValuesDemo",d.__docgenInfo={description:"Demo component showing how to use arbitrary values like max-h-[480px] and max-h-[90vh]",displayName:"ArbitraryValuesDemo",props:{}}}catch{}const H={title:"Utilities/Arbitrary Values Demo",component:d,parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},tags:["autodocs"]},o={},h={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold",children:"Max Height Arbitrary Values"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"max-h-[480px] bg-blue-100 border border-blue-300 p-4 overflow-auto",children:[e.jsx("h3",{className:"font-semibold",children:"max-h-[480px]"}),e.jsx("p",{children:"This container has a maximum height of 480px."}),e.jsx("div",{className:"mt-4 space-y-2",children:Array.from({length:20},(s,t)=>e.jsxs("p",{children:["Line ",t+1," - This is some content to demonstrate scrolling behavior when content exceeds the max height."]},t))})]}),e.jsxs("div",{className:"max-h-[90vh] bg-green-100 border border-green-300 p-4 overflow-auto",children:[e.jsx("h3",{className:"font-semibold",children:"max-h-[90vh]"}),e.jsx("p",{children:"This container has a maximum height of 90% of the viewport height."}),e.jsx("div",{className:"mt-4 space-y-2",children:Array.from({length:30},(s,t)=>e.jsxs("p",{children:["Line ",t+1," - This content will scroll when it exceeds 90% of viewport height."]},t))})]})]})]}),parameters:{docs:{description:{story:"Examples of max-height arbitrary values in action. Notice how the containers become scrollable when content exceeds the maximum height."}}}},n={render:()=>{const s=r("bg-purple-100 border border-purple-300 p-4",l("400px"),c("600px"));return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold",children:"Using Utility Functions"}),e.jsx("p",{children:"This example uses the utility functions to create arbitrary values programmatically."}),e.jsxs("div",{...s,style:s.style,children:[e.jsx("h3",{className:"font-semibold",children:"Container with maxH('400px') and w('600px')"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"This container uses the utility functions to set max-height: 400px and width: 600px"}),e.jsx("div",{className:"space-y-2 overflow-auto",children:Array.from({length:15},(t,i)=>e.jsxs("div",{className:"bg-white p-2 rounded border",children:[e.jsxs("p",{children:["Content block ",i+1]}),e.jsx("p",{className:"text-sm text-gray-500",children:"This content will scroll when it exceeds the max height"})]},i))})]})]})},parameters:{docs:{description:{story:"Demonstrates using the utility functions to create arbitrary values with a combination of Tailwind classes and custom styles."}}}};var x,p,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(v=(p=o.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var b,g,u;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <h2 className="text-xl font-bold">Max Height Arbitrary Values</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="max-h-[480px] bg-blue-100 border border-blue-300 p-4 overflow-auto">
          <h3 className="font-semibold">max-h-[480px]</h3>
          <p>This container has a maximum height of 480px.</p>
          <div className="mt-4 space-y-2">
            {Array.from({
            length: 20
          }, (_, i) => <p key={i}>Line {i + 1} - This is some content to demonstrate scrolling behavior when content exceeds the max height.</p>)}
          </div>
        </div>
        
        <div className="max-h-[90vh] bg-green-100 border border-green-300 p-4 overflow-auto">
          <h3 className="font-semibold">max-h-[90vh]</h3>
          <p>This container has a maximum height of 90% of the viewport height.</p>
          <div className="mt-4 space-y-2">
            {Array.from({
            length: 30
          }, (_, i) => <p key={i}>Line {i + 1} - This content will scroll when it exceeds 90% of viewport height.</p>)}
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of max-height arbitrary values in action. Notice how the containers become scrollable when content exceeds the maximum height.'
      }
    }
  }
}`,...(u=(g=h.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,w,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const containerStyles = cnWithArbitrary('bg-purple-100 border border-purple-300 p-4', maxH('400px'), w('600px'));
    return <div className="space-y-4">
        <h2 className="text-xl font-bold">Using Utility Functions</h2>
        <p>This example uses the utility functions to create arbitrary values programmatically.</p>
        
        <div {...containerStyles} style={containerStyles.style}>
          <h3 className="font-semibold">Container with maxH('400px') and w('600px')</h3>
          <p className="text-sm text-gray-600 mb-4">
            This container uses the utility functions to set max-height: 400px and width: 600px
          </p>
          <div className="space-y-2 overflow-auto">
            {Array.from({
            length: 15
          }, (_, i) => <div key={i} className="bg-white p-2 rounded border">
                <p>Content block {i + 1}</p>
                <p className="text-sm text-gray-500">This content will scroll when it exceeds the max height</p>
              </div>)}
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates using the utility functions to create arbitrary values with a combination of Tailwind classes and custom styles.'
      }
    }
  }
}`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const E=["Default","MaxHeightExamples","UtilityFunctionExample"];export{o as Default,h as MaxHeightExamples,n as UtilityFunctionExample,E as __namedExportsOrder,H as default};
