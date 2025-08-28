import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{L as i}from"./index-DvYfR3mk.js";import{I as m,R as c}from"./index-C8heY3qb.js";import"./index-DpTt3J-R.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utilities-CP3_-lCt.js";/* empty css                *//* empty css               *//* empty css              */const _={title:"Design System/LinkButton",component:i,parameters:{layout:"centered",docs:{description:{component:"A link-styled button component for secondary actions and navigation."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the link button"},state:{control:{type:"select"},options:["primary","gray","beige"],description:"The state of the link button"},label:{control:{type:"text"},description:"The text label of the button"}},args:{size:"medium",state:"primary",label:"Link Button",onClick:()=>console.log("Link button clicked")}},s={args:{size:"medium",state:"primary",label:"Default Link"}},r={args:{size:"medium",state:"primary",label:"Link with Icon",leadingIcon:m}},t={args:{size:"medium",state:"disabled",label:"Disabled Link"}},n={args:{size:"medium",state:"loading",label:"Loading Link"}},o={render:a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...a,size:"small",label:"Small Link",state:"primary"}),e.jsx(i,{...a,size:"medium",label:"Medium Link",state:"primary"}),e.jsx(i,{...a,size:"large",label:"Large Link",state:"primary"})]}),args:{state:"primary"}},l={render:a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{...a,leadingIcon:m,trailingIcon:c,state:"primary",label:"Primary Link",size:"medium"}),e.jsx(i,{...a,leadingIcon:m,trailingIcon:c,state:"gray",label:"Gray Link",size:"medium"}),e.jsx(i,{...a,leadingIcon:m,trailingIcon:c,state:"beige",label:"Beige Link",size:"medium"})]}),args:{size:"medium"}};var d,p,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    state: 'primary',
    label: 'Default Link'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,b,L;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    state: 'primary',
    label: 'Link with Icon',
    leadingIcon: InfoIcon
  }
}`,...(L=(b=r.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var k,y,I;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    state: 'disabled',
    label: 'Disabled Link'
  }
}`,...(I=(y=t.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var z,f,h;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    state: 'loading',
    label: 'Loading Link'
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,B;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <LinkButton {...args} size="small" label="Small Link" state="primary" />
      <LinkButton {...args} size="medium" label="Medium Link" state="primary" />
      <LinkButton {...args} size="large" label="Large Link" state="primary" />
    </div>,
  args: {
    state: 'primary'
  }
}`,...(B=(S=o.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var j,A,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <LinkButton {...args} leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} state="primary" label="Primary Link" size="medium" />
      <LinkButton {...args} leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} state="gray" label="Gray Link" size="medium" />
      <LinkButton {...args} leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} state="beige" label="Beige Link" size="medium" />
    </div>,
  args: {
    size: 'medium'
  }
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const C=["Default","WithIcon","Disabled","Loading","AllSizes","AllStates"];export{o as AllSizes,l as AllStates,s as Default,t as Disabled,n as Loading,r as WithIcon,C as __namedExportsOrder,_ as default};
