import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{I as r}from"./index-BwvbaHPQ.js";import{C as e}from"./index-BdKfWn55.js";import"./index-DpTt3J-R.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utilities-CP3_-lCt.js";/* empty css               *//* empty css              */const k={title:"Design System/IconButton",component:r,parameters:{layout:"centered",docs:{description:{component:"An icon button component for actions represented by icons only."}}},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["beige","gray","white"],description:"The color of the icon button"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the icon button"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"}},args:{color:"gray",size:"medium",disabled:!1,icon:e,onClick:()=>console.log("Icon button clicked")}},c={args:{color:"gray",size:"medium",icon:e}},i={args:{color:"white",size:"medium",icon:e}},n={render:o=>s.jsxs("div",{className:"flex gap-4 items-center",children:[s.jsx(r,{icon:e,...o,size:"small",color:o.color}),s.jsx(r,{icon:e,...o,size:"medium",color:o.color}),s.jsx(r,{icon:e,...o,size:"large",color:o.color})]}),args:{color:"gray",icon:e}},t={render:o=>s.jsxs("div",{className:"flex gap-4 items-center",children:[s.jsx(r,{icon:e,...o,color:"gray",size:o.size}),s.jsx(r,{icon:e,...o,color:"white",size:o.size}),s.jsx(r,{icon:e,...o,color:"beige",size:o.size})]}),args:{size:"medium",icon:e}},a={args:{color:"gray",size:"medium",icon:e,disabled:!0}};var l,m,d;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    color: 'gray',
    size: 'medium',
    icon: CrossCloseIcon
  }
}`,...(d=(m=c.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: 'white',
    size: 'medium',
    icon: CrossCloseIcon
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var z,C,I;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <IconButton icon={CrossCloseIcon} {...args} size="small" color={args.color} />
      <IconButton icon={CrossCloseIcon} {...args} size="medium" color={args.color} />
      <IconButton icon={CrossCloseIcon} {...args} size="large" color={args.color} />
    </div>,
  args: {
    color: 'gray',
    icon: CrossCloseIcon
  }
}`,...(I=(C=n.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var y,b,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <IconButton icon={CrossCloseIcon} {...args} color="gray" size={args.size} />
      <IconButton icon={CrossCloseIcon} {...args} color="white" size={args.size} />
      <IconButton icon={CrossCloseIcon} {...args} color="beige" size={args.size} />
    </div>,
  args: {
    size: 'medium',
    icon: CrossCloseIcon
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,f,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: 'gray',
    size: 'medium',
    icon: CrossCloseIcon,
    disabled: true
  }
}`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const E=["Default","White","AllSizes","AllColors","Disabled"];export{t as AllColors,n as AllSizes,c as Default,a as Disabled,i as White,E as __namedExportsOrder,k as default};
