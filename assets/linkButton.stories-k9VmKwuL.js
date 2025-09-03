import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{L as i}from"./index-D1cC6FbB.js";import{I as m,R as c}from"./index-DqMjPeH2.js";import"./index-DpTt3J-R.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./utilities-DX5EtrsU.js";import"./bundle-mjs-C8PyMnuF.js";/* empty css                *//* empty css               *//* empty css              */const h={title:"Design System/LinkButton",component:i,parameters:{layout:"centered",docs:{description:{component:"A link-styled button component for secondary actions and navigation."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the link button"},state:{control:{type:"select"},options:["primary","gray","beige"],description:"The state of the link button"},label:{control:{type:"text"},description:"The text label of the button"}},args:{size:"medium",state:"primary",label:"Link Button",onClick:()=>console.log("Link button clicked")}},r={args:{size:"medium",state:"primary",label:"Default Link"}},s={args:{size:"medium",state:"primary",label:"Link with Icon",leadingIcon:m}},t={args:{size:"medium",state:"disabled",label:"Disabled Link"}},n={args:{size:"medium",state:"loading",label:"Loading Link"}},o={render:a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...a,size:"small",label:"Small Link",state:"primary"}),e.jsx(i,{...a,size:"medium",label:"Medium Link",state:"primary"}),e.jsx(i,{...a,size:"large",label:"Large Link",state:"primary"})]}),args:{state:"primary"}},l={render:a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...a,leadingIcon:m,trailingIcon:c,state:"primary",label:"Primary Link",size:"medium"}),e.jsx(i,{...a,leadingIcon:m,trailingIcon:c,state:"gray",label:"Gray Link",size:"medium"}),e.jsx(i,{...a,leadingIcon:m,trailingIcon:c,state:"beige",label:"Beige Link",size:"medium"})]}),args:{size:"medium"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    state: 'primary',
    label: 'Default Link'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    state: 'primary',
    label: 'Link with Icon',
    leadingIcon: InfoIcon
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    state: 'disabled',
    label: 'Disabled Link'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    state: 'loading',
    label: 'Loading Link'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <LinkButton {...args} size="small" label="Small Link" state="primary" />
      <LinkButton {...args} size="medium" label="Medium Link" state="primary" />
      <LinkButton {...args} size="large" label="Large Link" state="primary" />
    </div>,
  args: {
    state: 'primary'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <LinkButton {...args} leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} state="primary" label="Primary Link" size="medium" />
      <LinkButton {...args} leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} state="gray" label="Gray Link" size="medium" />
      <LinkButton {...args} leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} state="beige" label="Beige Link" size="medium" />
    </div>,
  args: {
    size: 'medium'
  }
}`,...l.parameters?.docs?.source}}};const x=["Default","WithIcon","Disabled","Loading","AllSizes","AllStates"];export{o as AllSizes,l as AllStates,r as Default,t as Disabled,n as Loading,s as WithIcon,x as __namedExportsOrder,h as default};
