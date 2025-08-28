import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as e}from"./component-DFnj1LCD.js";import{R as z,D as V}from"./index-2-1EQAb5.js";import"./index-DpTt3J-R.js";import"./index-B6TRxRi1.js";import"./index-B5ODnmFs.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./utilities-WNthGydt.js";import"./bundle-mjs-CLJs87Zn.js";/* empty css              */const I={title:"Design System/Button",component:e,parameters:{layout:"centered",docs:{description:{component:"A versatile button component with multiple variants, sizes, and styles."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"The variant of the button"},styleVariant:{control:{type:"select"},options:["primary","white","beige","gray","destructive"],description:"The style variant of the button"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the button"},label:{control:{type:"text"},description:"The text label of the button"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},loading:{control:{type:"boolean"},description:"Whether the button is in loading state"},iconOnly:{control:{type:"boolean"},description:"Whether to show only the icon"}},args:{variant:"primary",styleVariant:"primary",size:"medium",label:"Button",disabled:!1,loading:!1,iconOnly:!1}},i={args:{variant:"primary",styleVariant:"primary",size:"medium",label:"Primary Button",leadingIcon:V,trailingIcon:z,iconOnly:!1,disabled:!1,loading:!1,asChild:!1,onClick:()=>{console.log("Button clicked")}}},t={render:r=>a.jsxs("div",{className:"flex gap-4 items-center",children:[a.jsx(e,{variant:"primary",styleVariant:"primary",size:"small",label:"Small"}),a.jsx(e,{variant:"primary",styleVariant:"primary",size:"medium",label:"Medium"}),a.jsx(e,{variant:"primary",styleVariant:"primary",size:"large",label:"Large"})]}),args:{variant:"primary",styleVariant:"primary"}},s={render:r=>a.jsx("div",{className:"space-y-4 p-4 rounded-25",children:a.jsxs("div",{className:"flex gap-4",children:[a.jsx("div",{className:"flex p-4 rounded-4 flex-col gap-2",children:a.jsx(e,{...r,variant:"primary",styleVariant:"primary",size:"medium",label:"Primary"})}),a.jsxs("div",{className:"flex p-4 rounded-4 bg-feedback-background-neutral-intense flex-col gap-2",children:[a.jsx(e,{...r,variant:"primary",styleVariant:"white",size:"medium",label:"Primary"}),a.jsx(e,{...r,variant:"secondary",styleVariant:"white",size:"medium",label:"Secondary"})]}),a.jsxs("div",{className:"flex p-4 rounded-4 flex-col gap-2",children:[a.jsx(e,{...r,variant:"secondary",styleVariant:"gray",size:"medium",label:"Secondary"}),a.jsx(e,{...r,variant:"tertiary",styleVariant:"gray",size:"medium",label:"Tertiary"})]}),a.jsxs("div",{className:"flex p-4 rounded-4 flex-col gap-2",children:[a.jsx(e,{...r,variant:"secondary",styleVariant:"beige",size:"medium",label:"Secondary"}),a.jsx(e,{...r,variant:"tertiary",styleVariant:"beige",size:"medium",label:"Tertiary"})]}),a.jsxs("div",{className:"flex p-4 rounded-4 flex-col gap-2",children:[a.jsx(e,{...r,variant:"primary",styleVariant:"destructive",size:"medium",label:"Primary"}),a.jsx(e,{...r,variant:"secondary",styleVariant:"destructive",size:"medium",label:"Secondary"}),a.jsx(e,{...r,variant:"tertiary",styleVariant:"destructive",size:"medium",label:"Tertiary"})]})]})}),args:{styleVariant:"primary",size:"medium"}},l={render:r=>a.jsx("div",{className:"space-y-4 bg-feedback-background-information-normal p-4 rounded-25",children:a.jsxs("div",{className:"flex gap-4 flex-wrap",children:[a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx(e,{...r,styleVariant:"primary",variant:"primary",size:"medium",label:"Primary"}),a.jsx(e,{...r,styleVariant:"gray",variant:"primary",size:"medium",label:"Gray"}),a.jsx(e,{...r,styleVariant:"beige",variant:"primary",size:"medium",label:"Beige"}),a.jsx(e,{...r,styleVariant:"destructive",variant:"primary",size:"medium",label:"Destructive"}),a.jsx(e,{...r,styleVariant:"white",variant:"primary",size:"medium",label:"White"})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx(e,{...r,styleVariant:"primary",variant:"secondary",size:"medium",label:"Primary"}),a.jsx(e,{...r,styleVariant:"gray",variant:"secondary",size:"medium",label:"Gray"}),a.jsx(e,{...r,styleVariant:"beige",variant:"secondary",size:"medium",label:"Beige"}),a.jsx(e,{...r,styleVariant:"destructive",variant:"secondary",size:"medium",label:"Destructive"}),a.jsx(e,{...r,styleVariant:"white",variant:"secondary",size:"medium",label:"White"})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx(e,{...r,styleVariant:"primary",variant:"tertiary",size:"medium",label:"Primary"}),a.jsx(e,{...r,styleVariant:"gray",variant:"tertiary",size:"medium",label:"Gray"}),a.jsx(e,{...r,styleVariant:"beige",variant:"tertiary",size:"medium",label:"Beige"}),a.jsx(e,{...r,styleVariant:"destructive",variant:"tertiary",size:"medium",label:"Destructive"}),a.jsx(e,{...r,styleVariant:"white",variant:"tertiary",size:"medium",label:"White"})]})]})}),args:{variant:"primary",size:"medium"}};var n,m,d;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    styleVariant: 'primary',
    size: 'medium',
    label: 'Primary Button',
    leadingIcon: DownloadIcon,
    trailingIcon: RightArrowIcon,
    iconOnly: false,
    disabled: false,
    loading: false,
    asChild: false,
    onClick: () => {
      console.log('Button clicked');
    }
  }
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var o,y,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Button variant="primary" styleVariant="primary" size="small" label="Small" />
      <Button variant="primary" styleVariant="primary" size="medium" label="Medium" />
      <Button variant="primary" styleVariant="primary" size="large" label="Large" />
    </div>,
  args: {
    variant: 'primary',
    styleVariant: 'primary'
  }
}`,...(c=(y=t.parameters)==null?void 0:y.docs)==null?void 0:c.source}}};var u,p,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 p-4 rounded-25">
      <div className="flex gap-4">
        <div className="flex p-4 rounded-4 flex-col gap-2">
        <Button {...args} variant="primary" styleVariant="primary" size="medium" label="Primary" />
        {/* <Button {...args} variant="secondary" styleVariant="primary" size="medium" label="Secondary" /> */}
        {/* <Button {...args} variant="tertiary" styleVariant="primary" size="medium" label="Tertiary" /> */}
        </div>
        <div className="flex p-4 rounded-4 bg-feedback-background-neutral-intense flex-col gap-2">
        <Button {...args} variant="primary" styleVariant="white" size="medium" label="Primary" />
        <Button {...args} variant="secondary" styleVariant="white" size="medium" label="Secondary" />
        {/* <Button {...args} variant="tertiary" styleVariant="white" size="medium" label="Tertiary" /> */}
        </div>
        <div className="flex p-4 rounded-4 flex-col gap-2">
        {/* <Button {...args} variant="primary" styleVariant="gray" size="medium" label="Primary" /> */}
        <Button {...args} variant="secondary" styleVariant="gray" size="medium" label="Secondary" />
        <Button {...args} variant="tertiary" styleVariant="gray" size="medium" label="Tertiary" />
        </div>
        <div className="flex p-4 rounded-4 flex-col gap-2">
        {/* <Button {...args} variant="primary" styleVariant="beige" size="medium" label="Primary" /> */}
        <Button {...args} variant="secondary" styleVariant="beige" size="medium" label="Secondary" />
        <Button {...args} variant="tertiary" styleVariant="beige" size="medium" label="Tertiary" />
        </div>
        <div className="flex p-4 rounded-4 flex-col gap-2">
        <Button {...args} variant="primary" styleVariant="destructive" size="medium" label="Primary" />
        <Button {...args} variant="secondary" styleVariant="destructive" size="medium" label="Secondary" />
        <Button {...args} variant="tertiary" styleVariant="destructive" size="medium" label="Tertiary" />
        </div>
      </div>
    </div>,
  args: {
    styleVariant: 'primary',
    size: 'medium'
  }
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var b,g,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 bg-feedback-background-information-normal p-4 rounded-25">
      <div className="flex gap-4 flex-wrap">
        <div className="flex flex-col gap-2">
          <Button {...args} styleVariant="primary" variant='primary' size="medium" label="Primary" />
          <Button {...args} styleVariant="gray" variant='primary' size="medium" label="Gray" />
          <Button {...args} styleVariant="beige" variant='primary' size="medium" label="Beige" />
          <Button {...args} styleVariant="destructive" variant='primary' size="medium" label="Destructive" />
          <Button {...args} styleVariant="white" variant='primary' size="medium" label="White" />
        </div>
        <div className="flex flex-col gap-2">
          <Button {...args} styleVariant="primary" variant='secondary' size="medium" label="Primary" />
          <Button {...args} styleVariant="gray" variant='secondary' size="medium" label="Gray" />
          <Button {...args} styleVariant="beige" variant='secondary' size="medium" label="Beige" />
          <Button {...args} styleVariant="destructive" variant='secondary' size="medium" label="Destructive" />
          <Button {...args} styleVariant="white" variant='secondary' size="medium" label="White" />
        </div>
        <div className="flex flex-col gap-2">
          <Button {...args} styleVariant="primary" variant='tertiary' size="medium" label="Primary" />
          <Button {...args} styleVariant="gray" variant='tertiary' size="medium" label="Gray" />
          <Button {...args} styleVariant="beige" variant='tertiary' size="medium" label="Beige" />
          <Button {...args} styleVariant="destructive" variant='tertiary' size="medium" label="Destructive" />
          <Button {...args} styleVariant="white" variant='tertiary' size="medium" label="White" />
        </div>
      </div>
    </div>,
  args: {
    variant: 'primary',
    size: 'medium'
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const A=["Default","AllSizes","AllVariants","StyleVariants"];export{t as AllSizes,s as AllVariants,i as Default,l as StyleVariants,A as __namedExportsOrder,I as default};
