import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{L as t}from"./component-CckqiwSn.js";import{R as i,I as e}from"./index-DqMjPeH2.js";import"./index-DpTt3J-R.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./utilities-DX5EtrsU.js";import"./bundle-mjs-C8PyMnuF.js";/* empty css              *//* empty css               */const h={title:"Design System/Leaflet",component:t,parameters:{layout:"centered",docs:{description:{component:"A leaflet component for displaying informational cards or callouts."}}},tags:["autodocs"],argTypes:{style:{control:{type:"select"},options:["positive","information","notice","neutral","negative"],description:"The style of the leaflet"},size:{control:{type:"select"},options:["medium","large"],description:"The size of the leaflet"},leadingText:{control:{type:"text"},description:"The leading text of the leaflet"},trailingText:{control:{type:"text"},description:"The trailing text of the leaflet"},trailingIcon:{control:{type:"select"},options:[i,e],description:"The trailing icon of the leaflet"}},args:{style:"information",size:"medium",leadingText:"Leaflet Text",trailingText:"Additional info",onClick:()=>console.log("Leaflet clicked")}},a={args:{style:"information",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Information",trailingText:"Additional details"}},o={args:{style:"positive",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Success",trailingText:"Operation completed"}},r={args:{style:"notice",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Notice",trailingText:"Please review"}},s={args:{style:"information",size:"medium",leadingText:"With Icon",trailingText:"Icon included",leadingIcon:e}},l={render:g=>n.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[n.jsx(t,{style:"information",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Medium",trailingText:"Medium size"}),n.jsx(t,{style:"information",size:"large",leadingIcon:e,trailingIcon:i,leadingText:"Large",trailingText:"Large size"})]}),args:{}},c={render:g=>n.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[n.jsx(t,{style:"positive",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Positive",trailingText:"Success message"}),n.jsx(t,{style:"information",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Information",trailingText:"Info message"}),n.jsx(t,{style:"notice",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Notice",trailingText:"Important notice"}),n.jsx(t,{style:"neutral",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Neutral",trailingText:"Neutral message"}),n.jsx(t,{style:"negative",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Negative",trailingText:"Negative message"})]}),args:{}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'information',
    size: 'medium',
    leadingIcon: InfoIcon,
    trailingIcon: RightArrowIcon,
    leadingText: 'Information',
    trailingText: 'Additional details'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'positive',
    size: 'medium',
    leadingIcon: InfoIcon,
    trailingIcon: RightArrowIcon,
    leadingText: 'Success',
    trailingText: 'Operation completed'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'notice',
    size: 'medium',
    leadingIcon: InfoIcon,
    trailingIcon: RightArrowIcon,
    leadingText: 'Notice',
    trailingText: 'Please review'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'information',
    size: 'medium',
    leadingText: 'With Icon',
    trailingText: 'Icon included',
    leadingIcon: InfoIcon
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-full max-w-md">
      <Leaflet style="information" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Medium" trailingText="Medium size" />
      <Leaflet style="information" size="large" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Large" trailingText="Large size" />
    </div>,
  args: {}
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-full max-w-md">
      <Leaflet style="positive" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Positive" trailingText="Success message" />
      <Leaflet style="information" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Information" trailingText="Info message" />
      <Leaflet style="notice" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Notice" trailingText="Important notice" />
      <Leaflet style="neutral" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Neutral" trailingText="Neutral message" />
      <Leaflet style="negative" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Negative" trailingText="Negative message" />
    </div>,
  args: {}
}`,...c.parameters?.docs?.source}}};const v=["Default","Positive","Notice","WithIcon","AllSizes","AllStyles"];export{l as AllSizes,c as AllStyles,a as Default,r as Notice,o as Positive,s as WithIcon,v as __namedExportsOrder,h as default};
