import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{C as a}from"./component-DAX5npNb.js";import"./index-DpTt3J-R.js";import"./index-BdKfWn55.js";/* empty css               *//* empty css              */const O={title:"Design System/Checkbox",component:a,parameters:{layout:"centered",docs:{description:{component:"A checkbox component for boolean input with various states."}}},tags:["autodocs"],argTypes:{checked:{control:{type:"boolean"},description:"Whether the checkbox is checked"},disabled:{control:{type:"boolean"},description:"Whether the checkbox is disabled"},isIntermediate:{control:{type:"boolean"},description:"Whether the checkbox is in intermediate state"},styleVariant:{control:{type:"select"},options:["gray","blue"],description:"The style variant of the checkbox"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the checkbox"}},args:{checked:!1,disabled:!1,isIntermediate:!1,styleVariant:"gray",size:"large"}},r={args:{checked:!1,disabled:!1,styleVariant:"gray",size:"large"}},t={args:{checked:!0,disabled:!1,styleVariant:"gray",size:"large"}},c={args:{checked:!1,isIntermediate:!0,disabled:!1,styleVariant:"gray",size:"large"}},i={args:{checked:!1,disabled:!0,styleVariant:"gray",size:"large"}},d={args:{checked:!0,disabled:!0,styleVariant:"gray",size:"large"}},n={render:s=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(a,{...s,size:"small"}),e.jsx(a,{...s,size:"medium"}),e.jsx(a,{...s,size:"large"})]}),args:{checked:!0,styleVariant:"gray"}},l={render:s=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{...s,checked:!1}),e.jsx("span",{children:"Unchecked"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{...s,checked:!0}),e.jsx("span",{children:"Checked"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{...s,isIntermediate:!0}),e.jsx("span",{children:"Intermediate"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{...s,checked:!1,disabled:!0}),e.jsx("span",{children:"Disabled"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{...s,checked:!0,disabled:!0}),e.jsx("span",{children:"Disabled Checked"})]})]}),args:{styleVariant:"gray",size:"large"}};var o,m,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,g,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,k,b;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: false,
    isIntermediate: true,
    disabled: false,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(b=(k=c.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var y,f,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var z,j,C;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var V,N,S;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Checkbox {...args} size="small" />
      <Checkbox {...args} size="medium" />
      <Checkbox {...args} size="large" />
    </div>,
  args: {
    checked: true,
    styleVariant: 'gray'
  }
}`,...(S=(N=n.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var D,I,A;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(I=l.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const R=["Default","Checked","Intermediate","Disabled","DisabledChecked","AllSizes","AllStates"];export{n as AllSizes,l as AllStates,t as Checked,r as Default,i as Disabled,d as DisabledChecked,c as Intermediate,R as __namedExportsOrder,O as default};
