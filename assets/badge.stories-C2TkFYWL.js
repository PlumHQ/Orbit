import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as i}from"./component-Crdb6v6w.js";import{I as l}from"./index-2-1EQAb5.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";/* empty css               *//* empty css              */import"./utilities-WNthGydt.js";import"./bundle-mjs-CLJs87Zn.js";const h={title:"Design System/Badge",component:i,parameters:{layout:"centered",docs:{description:{component:"A badge component for displaying status or labels with various styles and sizes."}}},tags:["autodocs"],argTypes:{styleVariant:{control:{type:"select"},options:["positive","negative","neutral","information","notice"],description:"The style variant of the badge"},variant:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"The variant of the badge"},size:{control:{type:"select"},options:["large","medium","small"],description:"The size of the badge"},value:{control:{type:"text"},description:"The text content of the badge"}},args:{styleVariant:"positive",variant:"primary",size:"medium",value:"Badge",icon:l}},r={args:{styleVariant:"positive",variant:"primary",size:"medium",value:"Default Badge",icon:l}},t={render:e=>a.jsxs("div",{className:"flex gap-4 items-center",children:[a.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[a.jsx(i,{...e,size:"small",value:"Small",styleVariant:"positive",variant:"primary"}),a.jsx(i,{...e,size:"medium",value:"Medium",styleVariant:"positive",variant:"primary"}),a.jsx(i,{...e,size:"large",value:"Large",styleVariant:"positive",variant:"primary"})]}),a.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[a.jsx(i,{...e,size:"small",value:"Small",styleVariant:"negative",variant:"primary"}),a.jsx(i,{...e,size:"medium",value:"Medium",styleVariant:"negative",variant:"primary"}),a.jsx(i,{...e,size:"large",value:"Large",styleVariant:"negative",variant:"primary"})]}),a.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[a.jsx(i,{...e,size:"small",value:"Small",styleVariant:"neutral",variant:"primary"}),a.jsx(i,{...e,size:"medium",value:"Medium",styleVariant:"neutral",variant:"primary"}),a.jsx(i,{...e,size:"large",value:"Large",styleVariant:"neutral",variant:"primary"})]}),a.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[a.jsx(i,{...e,size:"small",value:"Small",styleVariant:"information",variant:"primary"}),a.jsx(i,{...e,size:"medium",value:"Medium",styleVariant:"information",variant:"primary"}),a.jsx(i,{...e,size:"large",value:"Large",styleVariant:"information",variant:"primary"})]}),a.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[a.jsx(i,{...e,size:"small",value:"Small",styleVariant:"notice",variant:"primary"}),a.jsx(i,{...e,size:"medium",value:"Medium",styleVariant:"notice",variant:"primary"}),a.jsx(i,{...e,size:"large",value:"Large",styleVariant:"notice",variant:"primary"})]})]}),args:{styleVariant:"positive",variant:"primary",icon:l}},s={render:e=>a.jsxs("div",{className:"flex gap-4 items-center",children:[a.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[a.jsx(i,{...e,variant:"primary",value:"Primary",styleVariant:"positive",size:"medium"}),a.jsx(i,{...e,variant:"secondary",value:"Secondary",styleVariant:"positive",size:"medium"}),a.jsx(i,{...e,variant:"tertiary",value:"Tertiary",styleVariant:"positive",size:"medium"})]}),a.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[a.jsx(i,{...e,variant:"primary",value:"Primary",styleVariant:"negative",size:"medium"}),a.jsx(i,{...e,variant:"secondary",value:"Secondary",styleVariant:"negative",size:"medium"}),a.jsx(i,{...e,variant:"tertiary",value:"Tertiary",styleVariant:"negative",size:"medium"})]}),a.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[a.jsx(i,{...e,variant:"primary",value:"Primary",styleVariant:"neutral",size:"medium"}),a.jsx(i,{...e,variant:"secondary",value:"Secondary",styleVariant:"neutral",size:"medium"}),a.jsx(i,{...e,variant:"tertiary",value:"Tertiary",styleVariant:"neutral",size:"medium"})]}),a.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[a.jsx(i,{...e,variant:"primary",value:"Primary",styleVariant:"information",size:"medium"}),a.jsx(i,{...e,variant:"secondary",value:"Secondary",styleVariant:"information",size:"medium"}),a.jsx(i,{...e,variant:"tertiary",value:"Tertiary",styleVariant:"information",size:"medium"})]}),a.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[a.jsx(i,{...e,variant:"primary",value:"Primary",styleVariant:"notice",size:"medium"}),a.jsx(i,{...e,variant:"secondary",value:"Secondary",styleVariant:"notice",size:"medium"}),a.jsx(i,{...e,variant:"tertiary",value:"Tertiary",styleVariant:"notice",size:"medium"})]})]}),args:{styleVariant:"positive",size:"medium",icon:l}};var n,m,v;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    styleVariant: 'positive',
    variant: 'primary',
    size: 'medium',
    value: 'Default Badge',
    icon: InfoIcon
  }
}`,...(v=(m=r.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var o,d,y;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(y=(d=t.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var c,u,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const T=["Default","AllSizes","AllVariants"];export{t as AllSizes,s as AllVariants,r as Default,T as __namedExportsOrder,h as default};
