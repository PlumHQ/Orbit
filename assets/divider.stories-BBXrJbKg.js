import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as r}from"./index-CUdfSGXo.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./utilities-DX5EtrsU.js";import"./bundle-mjs-C8PyMnuF.js";const y={title:"Design System/Divider",component:r,parameters:{layout:"centered",docs:{description:{component:"A divider component for separating content sections."}}},tags:["autodocs"],argTypes:{stroke:{control:{type:"select"},options:["solid","dashed"],description:"The stroke style of the divider"},dividerStyle:{control:{type:"select"},options:["gray","neutral"],description:"The style of the divider"},variant:{control:{type:"select"},options:["normal","muted"],description:"The variant of the divider"}},args:{stroke:"solid",dividerStyle:"gray",variant:"normal"}},s={args:{stroke:"solid",dividerStyle:"gray",variant:"normal"}},a={args:{stroke:"dashed",dividerStyle:"gray",variant:"normal"}},t={args:{stroke:"solid",dividerStyle:"gray",variant:"muted"}},i={render:d=>e.jsxs("div",{className:"space-y-6 w-full max-w-md",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm",children:"Solid Normal"}),e.jsx(r,{stroke:"solid",dividerStyle:"gray",variant:"normal"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm",children:"Dashed Normal"}),e.jsx(r,{stroke:"dashed",dividerStyle:"gray",variant:"normal"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm",children:"Solid Muted"}),e.jsx(r,{stroke:"solid",dividerStyle:"gray",variant:"subtle"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm",children:"Dashed Muted"}),e.jsx(r,{stroke:"dashed",dividerStyle:"gray",variant:"highlighted"})]})]}),args:{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    stroke: 'solid',
    dividerStyle: 'gray',
    variant: 'normal'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    stroke: 'dashed',
    dividerStyle: 'gray',
    variant: 'normal'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    stroke: 'solid',
    dividerStyle: 'gray',
    variant: 'muted'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const g=["Default","Dashed","Muted","AllVariants"];export{i as AllVariants,a as Dashed,s as Default,t as Muted,g as __namedExportsOrder,y as default};
