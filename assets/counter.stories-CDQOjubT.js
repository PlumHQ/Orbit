import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{C as s}from"./index-BIEhlhpx.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./utilities-DX5EtrsU.js";import"./bundle-mjs-C8PyMnuF.js";/* empty css              */const y={title:"Design System/Counter",component:s,parameters:{layout:"centered",docs:{description:{component:"A counter component for displaying numerical values with different styles."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["medium","large"],description:"The size of the counter"},styleVariant:{control:{type:"select"},options:["positive","negative","neutral","notice","information"],description:"The style variant of the counter"},value:{control:{type:"number"},description:"The numerical value to display"}},args:{size:"medium",styleVariant:"neutral",value:5}},t={args:{size:"medium",styleVariant:"neutral",value:5}},r={render:e=>a.jsxs("div",{className:"flex gap-4 items-center",children:[a.jsx(s,{...e,size:"medium",styleVariant:e.styleVariant}),a.jsx(s,{...e,size:"large",styleVariant:e.styleVariant})]}),args:{styleVariant:"neutral",value:42}},i={render:e=>a.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[a.jsx(s,{...e,styleVariant:"positive",value:5,size:e.size}),a.jsx(s,{...e,styleVariant:"negative",value:3,size:e.size}),a.jsx(s,{...e,styleVariant:"neutral",value:10,size:e.size}),a.jsx(s,{...e,styleVariant:"notice",value:7,size:e.size}),a.jsx(s,{...e,styleVariant:"information",value:12,size:e.size})]}),args:{size:"medium"}},n={render:e=>a.jsxs("div",{className:"flex gap-4 items-center",children:[a.jsx(s,{...e,value:99,size:"medium",styleVariant:"neutral"}),a.jsx(s,{...e,value:999,size:"medium",styleVariant:"neutral"}),a.jsx(s,{...e,value:1e3,size:"medium",styleVariant:"neutral"})]}),args:{size:"medium",styleVariant:"neutral"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    styleVariant: 'neutral',
    value: 5
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Counter {...args} size="medium" styleVariant={args.styleVariant} />
      <Counter {...args} size="large" styleVariant={args.styleVariant} />
    </div>,
  args: {
    styleVariant: 'neutral',
    value: 42
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center flex-wrap">
      <Counter {...args} styleVariant="positive" value={5} size={args.size} />
      <Counter {...args} styleVariant="negative" value={3} size={args.size} />
      <Counter {...args} styleVariant="neutral" value={10} size={args.size} />
      <Counter {...args} styleVariant="notice" value={7} size={args.size} />
      <Counter {...args} styleVariant="information" value={12} size={args.size} />
    </div>,
  args: {
    size: 'medium'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Counter {...args} value={99} size="medium" styleVariant="neutral" />
      <Counter {...args} value={999} size="medium" styleVariant="neutral" />
      <Counter {...args} value={1000} size="medium" styleVariant="neutral" />
    </div>,
  args: {
    size: 'medium',
    styleVariant: 'neutral'
  }
}`,...n.parameters?.docs?.source}}};const z=["Default","AllSizes","AllStyleVariants","LargeNumbers"];export{r as AllSizes,i as AllStyleVariants,t as Default,n as LargeNumbers,z as __namedExportsOrder,y as default};
