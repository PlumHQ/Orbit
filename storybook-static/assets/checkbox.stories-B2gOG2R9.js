import{R as e}from"./index-DpTt3J-R.js";import{C as s}from"./component-DMbMmXnb.js";import"./index-Z7pS7jLs.js";/* empty css               *//* empty css              */const w={title:"Design System/Checkbox",component:s,parameters:{layout:"centered",docs:{description:{component:"A checkbox component for boolean input with various states."}}},tags:["autodocs"],argTypes:{checked:{control:{type:"boolean"},description:"Whether the checkbox is checked"},disabled:{control:{type:"boolean"},description:"Whether the checkbox is disabled"},isIntermediate:{control:{type:"boolean"},description:"Whether the checkbox is in intermediate state"},styleVariant:{control:{type:"select"},options:["gray","blue"],description:"The style variant of the checkbox"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the checkbox"}},args:{checked:!1,disabled:!1,isIntermediate:!1,styleVariant:"gray",size:"large"}},r={args:{checked:!1,disabled:!1,styleVariant:"gray",size:"large"}},t={args:{checked:!0,disabled:!1,styleVariant:"gray",size:"large"}},c={args:{checked:!1,isIntermediate:!0,disabled:!1,styleVariant:"gray",size:"large"}},l={args:{checked:!1,disabled:!0,styleVariant:"gray",size:"large"}},n={args:{checked:!0,disabled:!0,styleVariant:"gray",size:"large"}},i={render:a=>e.createElement("div",{className:"flex gap-4 items-center"},e.createElement(s,{...a,size:"small"}),e.createElement(s,{...a,size:"medium"}),e.createElement(s,{...a,size:"large"})),args:{checked:!0,styleVariant:"gray"}},d={render:a=>e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(s,{...a,checked:!1}),e.createElement("span",null,"Unchecked")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(s,{...a,checked:!0}),e.createElement("span",null,"Checked")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(s,{...a,isIntermediate:!0}),e.createElement("span",null,"Intermediate")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(s,{...a,checked:!1,disabled:!0}),e.createElement("span",null,"Disabled")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(s,{...a,checked:!0,disabled:!0}),e.createElement("span",null,"Disabled Checked"))),args:{styleVariant:"gray",size:"large"}};var o,m,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var k,b,y;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: false,
    isIntermediate: true,
    disabled: false,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,f,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var z,E,C;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    styleVariant: 'gray',
    size: 'large'
  }
}`,...(C=(E=n.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var V,N,S;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Checkbox {...args} size="small" />
      <Checkbox {...args} size="medium" />
      <Checkbox {...args} size="large" />
    </div>,
  args: {
    checked: true,
    styleVariant: 'gray'
  }
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var D,I,A;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(I=d.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const O=["Default","Checked","Intermediate","Disabled","DisabledChecked","AllSizes","AllStates"];export{i as AllSizes,d as AllStates,t as Checked,r as Default,l as Disabled,n as DisabledChecked,c as Intermediate,O as __namedExportsOrder,w as default};
