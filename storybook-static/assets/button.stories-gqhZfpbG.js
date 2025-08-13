import{R as e}from"./index-DpTt3J-R.js";import{B as a}from"./component-C3GjhsXJ.js";import{R as V,D as f}from"./index-C_GYH-13.js";import"./index-BsciMW3t.js";import"./index-B5ODnmFs.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";/* empty css               */import"./utilities-CP3_-lCt.js";/* empty css              */const W={title:"Design System/Button",component:a,parameters:{layout:"centered",docs:{description:{component:"A versatile button component with multiple variants, sizes, and styles."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"The variant of the button"},styleVariant:{control:{type:"select"},options:["primary","white","beige","gray","destructive"],description:"The style variant of the button"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the button"},label:{control:{type:"text"},description:"The text label of the button"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},loading:{control:{type:"boolean"},description:"Whether the button is in loading state"},iconOnly:{control:{type:"boolean"},description:"Whether to show only the icon"}},args:{variant:"primary",styleVariant:"primary",size:"medium",label:"Button",disabled:!1,loading:!1,iconOnly:!1}},t={args:{variant:"primary",styleVariant:"primary",size:"medium",label:"Primary Button",leadingIcon:f,trailingIcon:V,iconOnly:!1,disabled:!1,loading:!1,asChild:!1,onClick:()=>{console.log("Button clicked")}}},i={render:r=>e.createElement("div",{className:"flex gap-4 items-center"},e.createElement(a,{variant:"primary",styleVariant:"primary",size:"small",label:"Small"}),e.createElement(a,{variant:"primary",styleVariant:"primary",size:"medium",label:"Medium"}),e.createElement(a,{variant:"primary",styleVariant:"primary",size:"large",label:"Large"})),args:{variant:"primary",styleVariant:"primary"}},l={render:r=>e.createElement("div",{className:"space-y-4 p-4 rounded-25"},e.createElement("div",{className:"flex gap-4"},e.createElement("div",{className:"flex p-4 rounded-4 flex-col gap-2"},e.createElement(a,{...r,variant:"primary",styleVariant:"primary",size:"medium",label:"Primary"})),e.createElement("div",{className:"flex p-4 rounded-4 bg-feedback-background-neutral-intense flex-col gap-2"},e.createElement(a,{...r,variant:"primary",styleVariant:"white",size:"medium",label:"Primary"}),e.createElement(a,{...r,variant:"secondary",styleVariant:"white",size:"medium",label:"Secondary"})),e.createElement("div",{className:"flex p-4 rounded-4 flex-col gap-2"},e.createElement(a,{...r,variant:"secondary",styleVariant:"gray",size:"medium",label:"Secondary"}),e.createElement(a,{...r,variant:"tertiary",styleVariant:"gray",size:"medium",label:"Tertiary"})),e.createElement("div",{className:"flex p-4 rounded-4 flex-col gap-2"},e.createElement(a,{...r,variant:"secondary",styleVariant:"beige",size:"medium",label:"Secondary"}),e.createElement(a,{...r,variant:"tertiary",styleVariant:"beige",size:"medium",label:"Tertiary"})),e.createElement("div",{className:"flex p-4 rounded-4 flex-col gap-2"},e.createElement(a,{...r,variant:"primary",styleVariant:"destructive",size:"medium",label:"Primary"}),e.createElement(a,{...r,variant:"secondary",styleVariant:"destructive",size:"medium",label:"Secondary"}),e.createElement(a,{...r,variant:"tertiary",styleVariant:"destructive",size:"medium",label:"Tertiary"})))),args:{styleVariant:"primary",size:"medium"}},n={render:r=>e.createElement("div",{className:"space-y-4 bg-feedback-background-information-normal p-4 rounded-25"},e.createElement("div",{className:"flex gap-4 flex-wrap"},e.createElement("div",{className:"flex flex-col gap-2"},e.createElement(a,{...r,styleVariant:"primary",variant:"primary",size:"medium",label:"Primary"}),e.createElement(a,{...r,styleVariant:"gray",variant:"primary",size:"medium",label:"Gray"}),e.createElement(a,{...r,styleVariant:"beige",variant:"primary",size:"medium",label:"Beige"}),e.createElement(a,{...r,styleVariant:"destructive",variant:"primary",size:"medium",label:"Destructive"}),e.createElement(a,{...r,styleVariant:"white",variant:"primary",size:"medium",label:"White"})),e.createElement("div",{className:"flex flex-col gap-2"},e.createElement(a,{...r,styleVariant:"primary",variant:"secondary",size:"medium",label:"Primary"}),e.createElement(a,{...r,styleVariant:"gray",variant:"secondary",size:"medium",label:"Gray"}),e.createElement(a,{...r,styleVariant:"beige",variant:"secondary",size:"medium",label:"Beige"}),e.createElement(a,{...r,styleVariant:"destructive",variant:"secondary",size:"medium",label:"Destructive"}),e.createElement(a,{...r,styleVariant:"white",variant:"secondary",size:"medium",label:"White"})),e.createElement("div",{className:"flex flex-col gap-2"},e.createElement(a,{...r,styleVariant:"primary",variant:"tertiary",size:"medium",label:"Primary"}),e.createElement(a,{...r,styleVariant:"gray",variant:"tertiary",size:"medium",label:"Gray"}),e.createElement(a,{...r,styleVariant:"beige",variant:"tertiary",size:"medium",label:"Beige"}),e.createElement(a,{...r,styleVariant:"destructive",variant:"tertiary",size:"medium",label:"Destructive"}),e.createElement(a,{...r,styleVariant:"white",variant:"tertiary",size:"medium",label:"White"})))),args:{variant:"primary",size:"medium"}};var s,m,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(m=t.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};var d,y,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Button variant="primary" styleVariant="primary" size="small" label="Small" />
      <Button variant="primary" styleVariant="primary" size="medium" label="Medium" />
      <Button variant="primary" styleVariant="primary" size="large" label="Large" />
    </div>,
  args: {
    variant: 'primary',
    styleVariant: 'primary'
  }
}`,...(c=(y=i.parameters)==null?void 0:y.docs)==null?void 0:c.source}}};var u,p,v;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(p=l.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var b,g,z;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(z=(g=n.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};const I=["Default","AllSizes","AllVariants","StyleVariants"];export{i as AllSizes,l as AllVariants,t as Default,n as StyleVariants,I as __namedExportsOrder,W as default};
