import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as r}from"./index-BbKn7Mdi.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./utilities-CP3_-lCt.js";const b={title:"Design System/Divider",component:r,parameters:{layout:"centered",docs:{description:{component:"A divider component for separating content sections."}}},tags:["autodocs"],argTypes:{stroke:{control:{type:"select"},options:["solid","dashed"],description:"The stroke style of the divider"},dividerStyle:{control:{type:"select"},options:["gray","neutral"],description:"The style of the divider"},variant:{control:{type:"select"},options:["normal","muted"],description:"The variant of the divider"}},args:{stroke:"solid",dividerStyle:"gray",variant:"normal"}},s={args:{stroke:"solid",dividerStyle:"gray",variant:"normal"}},a={args:{stroke:"dashed",dividerStyle:"gray",variant:"normal"}},t={args:{stroke:"solid",dividerStyle:"gray",variant:"muted"}},i={render:x=>e.jsxs("div",{className:"space-y-6 w-full max-w-md",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm",children:"Solid Normal"}),e.jsx(r,{stroke:"solid",dividerStyle:"gray",variant:"normal"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm",children:"Dashed Normal"}),e.jsx(r,{stroke:"dashed",dividerStyle:"gray",variant:"normal"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm",children:"Solid Muted"}),e.jsx(r,{stroke:"solid",dividerStyle:"gray",variant:"subtle"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm",children:"Dashed Muted"}),e.jsx(r,{stroke:"dashed",dividerStyle:"gray",variant:"highlighted"})]})]}),args:{}};var d,o,n;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    stroke: 'solid',
    dividerStyle: 'gray',
    variant: 'normal'
  }
}`,...(n=(o=s.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var l,m,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    stroke: 'dashed',
    dividerStyle: 'gray',
    variant: 'normal'
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var v,p,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    stroke: 'solid',
    dividerStyle: 'gray',
    variant: 'muted'
  }
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,h,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const M=["Default","Dashed","Muted","AllVariants"];export{i as AllVariants,a as Dashed,s as Default,t as Muted,M as __namedExportsOrder,b as default};
