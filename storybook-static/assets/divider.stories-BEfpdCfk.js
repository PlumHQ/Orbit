import{R as e}from"./index-DpTt3J-R.js";import{D as r}from"./index-BQrtP65-.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./utilities-CP3_-lCt.js";const b={title:"Design System/Divider",component:r,parameters:{layout:"centered",docs:{description:{component:"A divider component for separating content sections."}}},tags:["autodocs"],argTypes:{stroke:{control:{type:"select"},options:["solid","dashed"],description:"The stroke style of the divider"},dividerStyle:{control:{type:"select"},options:["gray","neutral"],description:"The style of the divider"},variant:{control:{type:"select"},options:["normal","muted"],description:"The variant of the divider"}},args:{stroke:"solid",dividerStyle:"gray",variant:"normal"}},a={args:{stroke:"solid",dividerStyle:"gray",variant:"normal"}},t={args:{stroke:"dashed",dividerStyle:"gray",variant:"normal"}},s={args:{stroke:"solid",dividerStyle:"gray",variant:"muted"}},i={render:S=>e.createElement("div",{className:"space-y-6 w-full max-w-md"},e.createElement("div",null,e.createElement("p",{className:"mb-2 text-sm"},"Solid Normal"),e.createElement(r,{stroke:"solid",dividerStyle:"gray",variant:"normal"})),e.createElement("div",null,e.createElement("p",{className:"mb-2 text-sm"},"Dashed Normal"),e.createElement(r,{stroke:"dashed",dividerStyle:"gray",variant:"normal"})),e.createElement("div",null,e.createElement("p",{className:"mb-2 text-sm"},"Solid Muted"),e.createElement(r,{stroke:"solid",dividerStyle:"gray",variant:"subtle"})),e.createElement("div",null,e.createElement("p",{className:"mb-2 text-sm"},"Dashed Muted"),e.createElement(r,{stroke:"dashed",dividerStyle:"gray",variant:"highlighted"}))),args:{}};var d,o,n;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    stroke: 'solid',
    dividerStyle: 'gray',
    variant: 'normal'
  }
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var l,m,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    stroke: 'dashed',
    dividerStyle: 'gray',
    variant: 'normal'
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var v,p,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    stroke: 'solid',
    dividerStyle: 'gray',
    variant: 'muted'
  }
}`,...(y=(p=s.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,u,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="space-y-6 w-full max-w-md">
      <div>
        <p className="mb-2 text-sm">Solid Normal</p>
        <Divider stroke="solid" dividerStyle="gray" variant="normal" />
      </div>
      <div>
        <p className="mb-2 text-sm">Dashed Normal</p>
        <Divider stroke="dashed" dividerStyle="gray" variant="normal" />
      </div>
      <div>
        <p className="mb-2 text-sm">Solid Muted</p>
        <Divider stroke="solid" dividerStyle="gray" variant="subtle" />
      </div>
      <div>
        <p className="mb-2 text-sm">Dashed Muted</p>
        <Divider stroke="dashed" dividerStyle="gray" variant="highlighted" />
      </div>
    </div>,
  args: {}
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const M=["Default","Dashed","Muted","AllVariants"];export{i as AllVariants,t as Dashed,a as Default,s as Muted,M as __namedExportsOrder,b as default};
