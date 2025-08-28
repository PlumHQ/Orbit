import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{L as t}from"./component-BUxxkJvP.js";import{R as i,I as e}from"./index-C8heY3qb.js";import"./index-DpTt3J-R.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utilities-CP3_-lCt.js";/* empty css              *//* empty css               */const C={title:"Design System/Leaflet",component:t,parameters:{layout:"centered",docs:{description:{component:"A leaflet component for displaying informational cards or callouts."}}},tags:["autodocs"],argTypes:{style:{control:{type:"select"},options:["positive","information","notice","neutral","negative"],description:"The style of the leaflet"},size:{control:{type:"select"},options:["medium","large"],description:"The size of the leaflet"},leadingText:{control:{type:"text"},description:"The leading text of the leaflet"},trailingText:{control:{type:"text"},description:"The trailing text of the leaflet"}},args:{style:"information",size:"medium",leadingText:"Leaflet Text",trailingText:"Additional info",onClick:()=>console.log("Leaflet clicked")}},a={args:{style:"information",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Information",trailingText:"Additional details"}},o={args:{style:"positive",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Success",trailingText:"Operation completed"}},r={args:{style:"notice",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Notice",trailingText:"Please review"}},s={args:{style:"information",size:"medium",leadingText:"With Icon",trailingText:"Icon included",leadingIcon:e}},l={render:R=>n.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[n.jsx(t,{style:"information",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Medium",trailingText:"Medium size"}),n.jsx(t,{style:"information",size:"large",leadingIcon:e,trailingIcon:i,leadingText:"Large",trailingText:"Large size"})]}),args:{}},c={render:R=>n.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[n.jsx(t,{style:"positive",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Positive",trailingText:"Success message"}),n.jsx(t,{style:"information",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Information",trailingText:"Info message"}),n.jsx(t,{style:"notice",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Notice",trailingText:"Important notice"}),n.jsx(t,{style:"neutral",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Neutral",trailingText:"Neutral message"}),n.jsx(t,{style:"negative",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Negative",trailingText:"Negative message"})]}),args:{}};var g,d,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    style: 'information',
    size: 'medium',
    leadingIcon: InfoIcon,
    trailingIcon: RightArrowIcon,
    leadingText: 'Information',
    trailingText: 'Additional details'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var I,x,p;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    style: 'positive',
    size: 'medium',
    leadingIcon: InfoIcon,
    trailingIcon: RightArrowIcon,
    leadingText: 'Success',
    trailingText: 'Operation completed'
  }
}`,...(p=(x=o.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var u,f,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    style: 'notice',
    size: 'medium',
    leadingIcon: InfoIcon,
    trailingIcon: RightArrowIcon,
    leadingText: 'Notice',
    trailingText: 'Please review'
  }
}`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var y,z,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    style: 'information',
    size: 'medium',
    leadingText: 'With Icon',
    trailingText: 'Icon included',
    leadingIcon: InfoIcon
  }
}`,...(h=(z=s.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var v,w,A;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-full max-w-md">
      <Leaflet style="information" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Medium" trailingText="Medium size" />
      <Leaflet style="information" size="large" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Large" trailingText="Large size" />
    </div>,
  args: {}
}`,...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var N,L,S;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-full max-w-md">
      <Leaflet style="positive" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Positive" trailingText="Success message" />
      <Leaflet style="information" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Information" trailingText="Info message" />
      <Leaflet style="notice" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Notice" trailingText="Important notice" />
      <Leaflet style="neutral" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Neutral" trailingText="Neutral message" />
      <Leaflet style="negative" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Negative" trailingText="Negative message" />
    </div>,
  args: {}
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const b=["Default","Positive","Notice","WithIcon","AllSizes","AllStyles"];export{l as AllSizes,c as AllStyles,a as Default,r as Notice,o as Positive,s as WithIcon,b as __namedExportsOrder,C as default};
