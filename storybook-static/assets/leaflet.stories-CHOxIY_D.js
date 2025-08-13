import{R as t}from"./index-DpTt3J-R.js";import{L as n}from"./component-jLJetnFZ.js";import{R as i,I as e}from"./index-C_GYH-13.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utilities-CP3_-lCt.js";/* empty css              *//* empty css               */const C={title:"Design System/Leaflet",component:n,parameters:{layout:"centered",docs:{description:{component:"A leaflet component for displaying informational cards or callouts."}}},tags:["autodocs"],argTypes:{style:{control:{type:"select"},options:["positive","information","notice"],description:"The style of the leaflet"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the leaflet"},leadingText:{control:{type:"text"},description:"The leading text of the leaflet"},trailingText:{control:{type:"text"},description:"The trailing text of the leaflet"}},args:{style:"information",size:"medium",leadingText:"Leaflet Text",trailingText:"Additional info",onClick:()=>console.log("Leaflet clicked")}},o={args:{style:"information",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Information",trailingText:"Additional details",width:"800"}},a={args:{style:"positive",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Success",trailingText:"Operation completed",width:"800"}},r={args:{style:"notice",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Notice",trailingText:"Please review",width:"800"}},s={args:{style:"information",size:"medium",leadingText:"With Icon",trailingText:"Icon included",leadingIcon:e,width:"800"}},l={render:N=>t.createElement("div",{className:"space-y-4 w-full max-w-md"},t.createElement(n,{style:"information",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Medium",trailingText:"Medium size",width:"800"}),t.createElement(n,{style:"information",size:"large",leadingIcon:e,trailingIcon:i,leadingText:"Large",trailingText:"Large size",width:"800"})),args:{}},c={render:N=>t.createElement("div",{className:"space-y-4 w-full max-w-md"},t.createElement(n,{style:"positive",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Positive",trailingText:"Success message",width:"800"}),t.createElement(n,{style:"information",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Information",trailingText:"Info message",width:"800"}),t.createElement(n,{style:"notice",size:"medium",leadingIcon:e,trailingIcon:i,leadingText:"Notice",trailingText:"Important notice",width:"800"})),args:{}};var d,m,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    style: 'information',
    size: 'medium',
    leadingIcon: InfoIcon,
    trailingIcon: RightArrowIcon,
    leadingText: 'Information',
    trailingText: 'Additional details',
    width: '800'
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var I,p,f;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    style: 'positive',
    size: 'medium',
    leadingIcon: InfoIcon,
    trailingIcon: RightArrowIcon,
    leadingText: 'Success',
    trailingText: 'Operation completed',
    width: '800'
  }
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var u,x,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    style: 'notice',
    size: 'medium',
    leadingIcon: InfoIcon,
    trailingIcon: RightArrowIcon,
    leadingText: 'Notice',
    trailingText: 'Please review',
    width: '800'
  }
}`,...(T=(x=r.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var h,w,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    style: 'information',
    size: 'medium',
    leadingText: 'With Icon',
    trailingText: 'Icon included',
    leadingIcon: InfoIcon,
    width: '800'
  }
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var z,v,A;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-full max-w-md">
      <Leaflet style="information" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Medium" trailingText="Medium size" width="800" />
      <Leaflet style="information" size="large" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Large" trailingText="Large size" width="800" />
    </div>,
  args: {}
}`,...(A=(v=l.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var S,L,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-full max-w-md">
      <Leaflet style="positive" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Positive" trailingText="Success message" width="800" />
      <Leaflet style="information" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Information" trailingText="Info message" width="800" />
      <Leaflet style="notice" size="medium" leadingIcon={InfoIcon} trailingIcon={RightArrowIcon} leadingText="Notice" trailingText="Important notice" width="800" />
    </div>,
  args: {}
}`,...(R=(L=c.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const b=["Default","Positive","Notice","WithIcon","AllSizes","AllStyles"];export{l as AllSizes,c as AllStyles,o as Default,r as Notice,a as Positive,s as WithIcon,b as __namedExportsOrder,C as default};
