import{R as a}from"./index-DpTt3J-R.js";import{C as t}from"./index-DNf_-Grk.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utilities-CP3_-lCt.js";/* empty css              */const h={title:"Design System/Counter",component:t,parameters:{layout:"centered",docs:{description:{component:"A counter component for displaying numerical values with different styles."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["medium","large"],description:"The size of the counter"},styleVariant:{control:{type:"select"},options:["positive","negative","neutral","notice","information"],description:"The style variant of the counter"},value:{control:{type:"number"},description:"The numerical value to display"}},args:{size:"medium",styleVariant:"neutral",value:5}},r={args:{size:"medium",styleVariant:"neutral",value:5}},s={render:e=>a.createElement("div",{className:"flex gap-4 items-center"},a.createElement(t,{...e,size:"medium",styleVariant:e.styleVariant}),a.createElement(t,{...e,size:"large",styleVariant:e.styleVariant})),args:{styleVariant:"neutral",value:42}},i={render:e=>a.createElement("div",{className:"flex gap-4 items-center flex-wrap"},a.createElement(t,{...e,styleVariant:"positive",value:5,size:e.size}),a.createElement(t,{...e,styleVariant:"negative",value:3,size:e.size}),a.createElement(t,{...e,styleVariant:"neutral",value:10,size:e.size}),a.createElement(t,{...e,styleVariant:"notice",value:7,size:e.size}),a.createElement(t,{...e,styleVariant:"information",value:12,size:e.size})),args:{size:"medium"}},n={render:e=>a.createElement("div",{className:"flex gap-4 items-center"},a.createElement(t,{...e,value:99,size:"medium",styleVariant:"neutral"}),a.createElement(t,{...e,value:999,size:"medium",styleVariant:"neutral"}),a.createElement(t,{...e,value:1e3,size:"medium",styleVariant:"neutral"})),args:{size:"medium",styleVariant:"neutral"}};var l,o,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    styleVariant: 'neutral',
    value: 5
  }
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var u,c,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Counter {...args} size="medium" styleVariant={args.styleVariant} />
      <Counter {...args} size="large" styleVariant={args.styleVariant} />
    </div>,
  args: {
    styleVariant: 'neutral',
    value: 42
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,y,z;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(z=(y=i.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var v,g,V;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Counter {...args} value={99} size="medium" styleVariant="neutral" />
      <Counter {...args} value={999} size="medium" styleVariant="neutral" />
      <Counter {...args} value={1000} size="medium" styleVariant="neutral" />
    </div>,
  args: {
    size: 'medium',
    styleVariant: 'neutral'
  }
}`,...(V=(g=n.parameters)==null?void 0:g.docs)==null?void 0:V.source}}};const A=["Default","AllSizes","AllStyleVariants","LargeNumbers"];export{s as AllSizes,i as AllStyleVariants,r as Default,n as LargeNumbers,A as __namedExportsOrder,h as default};
