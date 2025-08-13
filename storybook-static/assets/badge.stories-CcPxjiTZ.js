import{R as e}from"./index-DpTt3J-R.js";import{B as i}from"./component-D-YHFCo0.js";import{I as n}from"./index-C_GYH-13.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";/* empty css               *//* empty css              */import"./utilities-CP3_-lCt.js";const N={title:"Design System/Badge",component:i,parameters:{layout:"centered",docs:{description:{component:"A badge component for displaying status or labels with various styles and sizes."}}},tags:["autodocs"],argTypes:{styleVariant:{control:{type:"select"},options:["positive","negative","neutral","information","notice"],description:"The style variant of the badge"},variant:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"The variant of the badge"},size:{control:{type:"select"},options:["large","medium","small"],description:"The size of the badge"},value:{control:{type:"text"},description:"The text content of the badge"}},args:{styleVariant:"positive",variant:"primary",size:"medium",value:"Badge",icon:n}},t={args:{styleVariant:"positive",variant:"primary",size:"medium",value:"Default Badge",icon:n}},r={render:a=>e.createElement("div",{className:"flex gap-4 items-center"},e.createElement("div",{className:"flex flex-col gap-4 items-center"},e.createElement(i,{...a,size:"small",value:"Small",styleVariant:"positive",variant:"primary"}),e.createElement(i,{...a,size:"medium",value:"Medium",styleVariant:"positive",variant:"primary"}),e.createElement(i,{...a,size:"large",value:"Large",styleVariant:"positive",variant:"primary"})),e.createElement("div",{className:"flex flex-col gap-4 items-center"},e.createElement(i,{...a,size:"small",value:"Small",styleVariant:"negative",variant:"primary"}),e.createElement(i,{...a,size:"medium",value:"Medium",styleVariant:"negative",variant:"primary"}),e.createElement(i,{...a,size:"large",value:"Large",styleVariant:"negative",variant:"primary"})),e.createElement("div",{className:"flex flex-col gap-4 items-center"},e.createElement(i,{...a,size:"small",value:"Small",styleVariant:"neutral",variant:"primary"}),e.createElement(i,{...a,size:"medium",value:"Medium",styleVariant:"neutral",variant:"primary"}),e.createElement(i,{...a,size:"large",value:"Large",styleVariant:"neutral",variant:"primary"})),e.createElement("div",{className:"flex flex-col gap-4 items-center"},e.createElement(i,{...a,size:"small",value:"Small",styleVariant:"information",variant:"primary"}),e.createElement(i,{...a,size:"medium",value:"Medium",styleVariant:"information",variant:"primary"}),e.createElement(i,{...a,size:"large",value:"Large",styleVariant:"information",variant:"primary"})),e.createElement("div",{className:"flex flex-col gap-4 items-center"},e.createElement(i,{...a,size:"small",value:"Small",styleVariant:"notice",variant:"primary"}),e.createElement(i,{...a,size:"medium",value:"Medium",styleVariant:"notice",variant:"primary"}),e.createElement(i,{...a,size:"large",value:"Large",styleVariant:"notice",variant:"primary"}))),args:{styleVariant:"positive",variant:"primary",icon:n}},l={render:a=>e.createElement("div",{className:"flex gap-4 items-center"},e.createElement("div",{className:"flex flex-col gap-4 items-center"},e.createElement(i,{...a,variant:"primary",value:"Primary",styleVariant:"positive",size:"medium"}),e.createElement(i,{...a,variant:"secondary",value:"Secondary",styleVariant:"positive",size:"medium"}),e.createElement(i,{...a,variant:"tertiary",value:"Tertiary",styleVariant:"positive",size:"medium"})),e.createElement("div",{className:"flex flex-col gap-4 items-center"},e.createElement(i,{...a,variant:"primary",value:"Primary",styleVariant:"negative",size:"medium"}),e.createElement(i,{...a,variant:"secondary",value:"Secondary",styleVariant:"negative",size:"medium"}),e.createElement(i,{...a,variant:"tertiary",value:"Tertiary",styleVariant:"negative",size:"medium"})),e.createElement("div",{className:"flex flex-col gap-4 items-center"},e.createElement(i,{...a,variant:"primary",value:"Primary",styleVariant:"neutral",size:"medium"}),e.createElement(i,{...a,variant:"secondary",value:"Secondary",styleVariant:"neutral",size:"medium"}),e.createElement(i,{...a,variant:"tertiary",value:"Tertiary",styleVariant:"neutral",size:"medium"})),e.createElement("div",{className:"flex flex-col gap-4 items-center"},e.createElement(i,{...a,variant:"primary",value:"Primary",styleVariant:"information",size:"medium"}),e.createElement(i,{...a,variant:"secondary",value:"Secondary",styleVariant:"information",size:"medium"}),e.createElement(i,{...a,variant:"tertiary",value:"Tertiary",styleVariant:"information",size:"medium"})),e.createElement("div",{className:"flex flex-col gap-4 items-center"},e.createElement(i,{...a,variant:"primary",value:"Primary",styleVariant:"notice",size:"medium"}),e.createElement(i,{...a,variant:"secondary",value:"Secondary",styleVariant:"notice",size:"medium"}),e.createElement(i,{...a,variant:"tertiary",value:"Tertiary",styleVariant:"notice",size:"medium"}))),args:{styleVariant:"positive",size:"medium",icon:n}};var s,m,v;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    styleVariant: 'positive',
    variant: 'primary',
    size: 'medium',
    value: 'Default Badge',
    icon: InfoIcon
  }
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var c,o,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} size="small" value="Small" styleVariant="positive" variant="primary" />
        <Badge {...args} size="medium" value="Medium" styleVariant="positive" variant="primary" />
        <Badge {...args} size="large" value="Large" styleVariant="positive" variant="primary" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} size="small" value="Small" styleVariant="negative" variant="primary" />
        <Badge {...args} size="medium" value="Medium" styleVariant="negative" variant="primary" />
        <Badge {...args} size="large" value="Large" styleVariant="negative" variant="primary" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} size="small" value="Small" styleVariant="neutral" variant="primary" />
        <Badge {...args} size="medium" value="Medium" styleVariant="neutral" variant="primary" />
        <Badge {...args} size="large" value="Large" styleVariant="neutral" variant="primary" />
      </div>
      <div className="flex flex-col gap-4 items-center">  
        <Badge {...args} size="small" value="Small" styleVariant="information" variant="primary" />
        <Badge {...args} size="medium" value="Medium" styleVariant="information" variant="primary" />
        <Badge {...args} size="large" value="Large" styleVariant="information" variant="primary" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} size="small" value="Small" styleVariant="notice" variant="primary" />
        <Badge {...args} size="medium" value="Medium" styleVariant="notice" variant="primary" />
        <Badge {...args} size="large" value="Large" styleVariant="notice" variant="primary" />
      </div>
    </div>,
  args: {
    styleVariant: 'positive',
    variant: 'primary',
    icon: InfoIcon
  }
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var y,u,p;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} variant="primary" value="Primary" styleVariant="positive" size="medium" />
        <Badge {...args} variant="secondary" value="Secondary" styleVariant="positive" size="medium" />
        <Badge {...args} variant="tertiary" value="Tertiary" styleVariant="positive" size="medium" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} variant="primary" value="Primary" styleVariant="negative" size="medium" />
        <Badge {...args} variant="secondary" value="Secondary" styleVariant="negative" size="medium" />
        <Badge {...args} variant="tertiary" value="Tertiary" styleVariant="negative" size="medium" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} variant="primary" value="Primary" styleVariant="neutral" size="medium" />
        <Badge {...args} variant="secondary" value="Secondary" styleVariant="neutral" size="medium" />
        <Badge {...args} variant="tertiary" value="Tertiary" styleVariant="neutral" size="medium" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} variant="primary" value="Primary" styleVariant="information" size="medium" />
        <Badge {...args} variant="secondary" value="Secondary" styleVariant="information" size="medium" />
        <Badge {...args} variant="tertiary" value="Tertiary" styleVariant="information" size="medium" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Badge {...args} variant="primary" value="Primary" styleVariant="notice" size="medium" />
        <Badge {...args} variant="secondary" value="Secondary" styleVariant="notice" size="medium" />
        <Badge {...args} variant="tertiary" value="Tertiary" styleVariant="notice" size="medium" />
      </div>
    </div>,
  args: {
    styleVariant: 'positive',
    size: 'medium',
    icon: InfoIcon
  }
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const T=["Default","AllSizes","AllVariants"];export{r as AllSizes,l as AllVariants,t as Default,T as __namedExportsOrder,N as default};
