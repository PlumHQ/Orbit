import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{I as r}from"./index-D-NK6AaC.js";import{C as e}from"./index-DIjgcm8G.js";import"./index-DpTt3J-R.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./utilities-DX5EtrsU.js";import"./bundle-mjs-C8PyMnuF.js";/* empty css               *//* empty css              */const b={title:"Design System/IconButton",component:r,parameters:{layout:"centered",docs:{description:{component:"An icon button component for actions represented by icons only."}}},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["beige","gray","white"],description:"The color of the icon button"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the icon button"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"}},args:{color:"gray",size:"medium",disabled:!1,icon:e,onClick:()=>console.log("Icon button clicked")}},c={args:{color:"gray",size:"medium",icon:e}},i={args:{color:"white",size:"medium",icon:e}},n={render:o=>s.jsxs("div",{className:"flex gap-4 items-center",children:[s.jsx(r,{icon:e,...o,size:"small",color:o.color}),s.jsx(r,{icon:e,...o,size:"medium",color:o.color}),s.jsx(r,{icon:e,...o,size:"large",color:o.color})]}),args:{color:"gray",icon:e}},t={render:o=>s.jsxs("div",{className:"flex gap-4 items-center",children:[s.jsx(r,{icon:e,...o,color:"gray",size:o.size}),s.jsx(r,{icon:e,...o,color:"white",size:o.size}),s.jsx(r,{icon:e,...o,color:"beige",size:o.size})]}),args:{size:"medium",icon:e}},a={args:{color:"gray",size:"medium",icon:e,disabled:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'gray',
    size: 'medium',
    icon: CrossCloseIcon
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'white',
    size: 'medium',
    icon: CrossCloseIcon
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <IconButton icon={CrossCloseIcon} {...args} size="small" color={args.color} />
      <IconButton icon={CrossCloseIcon} {...args} size="medium" color={args.color} />
      <IconButton icon={CrossCloseIcon} {...args} size="large" color={args.color} />
    </div>,
  args: {
    color: 'gray',
    icon: CrossCloseIcon
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <IconButton icon={CrossCloseIcon} {...args} color="gray" size={args.size} />
      <IconButton icon={CrossCloseIcon} {...args} color="white" size={args.size} />
      <IconButton icon={CrossCloseIcon} {...args} color="beige" size={args.size} />
    </div>,
  args: {
    size: 'medium',
    icon: CrossCloseIcon
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'gray',
    size: 'medium',
    icon: CrossCloseIcon,
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const h=["Default","White","AllSizes","AllColors","Disabled"];export{t as AllColors,n as AllSizes,c as Default,a as Disabled,i as White,h as __namedExportsOrder,b as default};
