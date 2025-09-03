import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{C as r}from"./component-CRQeDbRO.js";import{r as m}from"./index-DpTt3J-R.js";import"./index-DqMjPeH2.js";/* empty css               *//* empty css              */const y={title:"Design System/Checkbox",component:r,parameters:{layout:"centered",docs:{description:{component:"A checkbox component for boolean input with various states."}}},tags:["autodocs"],argTypes:{checked:{control:{type:"boolean"},description:"Whether the checkbox is checked"},disabled:{control:{type:"boolean"},description:"Whether the checkbox is disabled"},isIntermediate:{control:{type:"boolean"},description:"Whether the checkbox is in intermediate state"},styleVariant:{control:{type:"select"},options:["gray","blue"],description:"The style variant of the checkbox"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the checkbox"},error:{control:{type:"boolean"},description:"Whether the checkbox is in error state"},errorText:{control:{type:"text"},description:"The error text of the checkbox"},label:{control:{type:"text"},description:"The label of the checkbox"},onClick:{action:"clicked",description:"The function to be called when the checkbox is clicked"},onKeyDown:{action:"keydown",description:"The function to be called when the checkbox is keyed down"},tabIndex:{control:{type:"number"},description:"The tab index of the checkbox"},role:{control:{type:"text"},description:"The role of the checkbox"}},args:{checked:!1,disabled:!1,isIntermediate:!1,styleVariant:"gray",size:"large"}},a={render:s=>{const[l,h]=m.useState(s.checked);return e.jsx("div",{className:"flex gap-4 items-center",children:e.jsx(r,{error:!0,styleVariant:"gray",...s,size:"medium",checked:l,onClick:h,label:"Checkbox",errorText:"Error text"})})},args:{checked:!1,disabled:!1,styleVariant:"gray",size:"large"}},t={args:{checked:!0,disabled:!1,styleVariant:"gray",size:"large"}},c={args:{checked:!1,isIntermediate:!0,disabled:!1,styleVariant:"gray",size:"large"}},i={args:{checked:!1,disabled:!0,styleVariant:"gray",size:"large"}},d={args:{checked:!0,disabled:!0,styleVariant:"gray",size:"large"}},n={render:s=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(r,{...s,size:"small"}),e.jsx(r,{...s,size:"medium"}),e.jsx(r,{...s,size:"large"})]}),args:{checked:!0,styleVariant:"gray"}},o={render:s=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{...s,checked:!1}),e.jsx("span",{children:"Unchecked"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{...s,checked:!0}),e.jsx("span",{children:"Checked"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{...s,isIntermediate:!0}),e.jsx("span",{children:"Intermediate"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{...s,checked:!1,disabled:!0}),e.jsx("span",{children:"Disabled"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{...s,checked:!0,disabled:!0}),e.jsx("span",{children:"Disabled Checked"})]})]}),args:{styleVariant:"gray",size:"large"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(args.checked);
    return <div className="flex gap-4 items-center">
        <Checkbox error={true} styleVariant='gray' {...args} size="medium" checked={checked} onClick={setChecked} label="Checkbox" errorText="Error text" />
      </div>;
  },
  args: {
    checked: false,
    disabled: false,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    isIntermediate: true,
    disabled: false,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Checkbox {...args} size="small" />
      <Checkbox {...args} size="medium" />
      <Checkbox {...args} size="large" />
    </div>,
  args: {
    checked: true,
    styleVariant: 'gray'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox {...args} checked={false} />
        <span>Unchecked</span>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} checked={true} />
        <span>Checked</span>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} isIntermediate={true} />
        <span>Intermediate</span>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} checked={false} disabled={true} />
        <span>Disabled</span>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} checked={true} disabled={true} />
        <span>Disabled Checked</span>
      </div>
    </div>,
  args: {
    styleVariant: 'gray',
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};const f=["Default","Checked","Intermediate","Disabled","DisabledChecked","AllSizes","AllStates"];export{n as AllSizes,o as AllStates,t as Checked,a as Default,i as Disabled,d as DisabledChecked,c as Intermediate,f as __namedExportsOrder,y as default};
