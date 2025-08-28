import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{C as r}from"./component-82wm3IpT.js";import{r as E}from"./index-DpTt3J-R.js";import"./index-2-1EQAb5.js";/* empty css               *//* empty css              */const q={title:"Design System/Checkbox",component:r,parameters:{layout:"centered",docs:{description:{component:"A checkbox component for boolean input with various states."}}},tags:["autodocs"],argTypes:{checked:{control:{type:"boolean"},description:"Whether the checkbox is checked"},disabled:{control:{type:"boolean"},description:"Whether the checkbox is disabled"},isIntermediate:{control:{type:"boolean"},description:"Whether the checkbox is in intermediate state"},styleVariant:{control:{type:"select"},options:["gray","blue"],description:"The style variant of the checkbox"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the checkbox"},error:{control:{type:"boolean"},description:"Whether the checkbox is in error state"},errorText:{control:{type:"text"},description:"The error text of the checkbox"},label:{control:{type:"text"},description:"The label of the checkbox"},onClick:{action:"clicked",description:"The function to be called when the checkbox is clicked"},onKeyDown:{action:"keydown",description:"The function to be called when the checkbox is keyed down"},tabIndex:{control:{type:"number"},description:"The tab index of the checkbox"},role:{control:{type:"text"},description:"The role of the checkbox"}},args:{checked:!1,disabled:!1,isIntermediate:!1,styleVariant:"gray",size:"large"}},a={render:s=>{const[w,A]=E.useState(s.checked);return e.jsx("div",{className:"flex gap-4 items-center",children:e.jsx(r,{error:!0,styleVariant:"gray",...s,size:"medium",checked:w,onClick:A,label:"Checkbox",errorText:"Error text"})})},args:{checked:!1,disabled:!1,styleVariant:"gray",size:"large"}},t={args:{checked:!0,disabled:!1,styleVariant:"gray",size:"large"}},c={args:{checked:!1,isIntermediate:!0,disabled:!1,styleVariant:"gray",size:"large"}},i={args:{checked:!1,disabled:!0,styleVariant:"gray",size:"large"}},d={args:{checked:!0,disabled:!0,styleVariant:"gray",size:"large"}},n={render:s=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(r,{...s,size:"small"}),e.jsx(r,{...s,size:"medium"}),e.jsx(r,{...s,size:"large"})]}),args:{checked:!0,styleVariant:"gray"}},o={render:s=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{...s,checked:!1}),e.jsx("span",{children:"Unchecked"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{...s,checked:!0}),e.jsx("span",{children:"Checked"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{...s,isIntermediate:!0}),e.jsx("span",{children:"Intermediate"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{...s,checked:!1,disabled:!0}),e.jsx("span",{children:"Disabled"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{...s,checked:!0,disabled:!0}),e.jsx("span",{children:"Disabled Checked"})]})]}),args:{styleVariant:"gray",size:"large"}};var l,h,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,x,k;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var g,b,u;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: false,
    isIntermediate: true,
    disabled: false,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(u=(b=c.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var y,f,C;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var v,z,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(j=(z=d.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var V,N,S;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Checkbox {...args} size="small" />
      <Checkbox {...args} size="medium" />
      <Checkbox {...args} size="large" />
    </div>,
  args: {
    checked: true,
    styleVariant: 'gray'
  }
}`,...(S=(N=n.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var D,T,I;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(T=o.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const B=["Default","Checked","Intermediate","Disabled","DisabledChecked","AllSizes","AllStates"];export{n as AllSizes,o as AllStates,t as Checked,a as Default,i as Disabled,d as DisabledChecked,c as Intermediate,B as __namedExportsOrder,q as default};
