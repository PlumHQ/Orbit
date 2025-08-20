import{R as s}from"./index-DpTt3J-R.js";import{I as r}from"./index-C_9sus95.js";import{C as o}from"./index-Z7pS7jLs.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utilities-CP3_-lCt.js";/* empty css               *//* empty css              */const W={title:"Design System/IconButton",component:r,parameters:{layout:"centered",docs:{description:{component:"An icon button component for actions represented by icons only."}}},tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["beige","gray","white"],description:"The color of the icon button"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the icon button"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"}},args:{color:"gray",size:"medium",disabled:!1,icon:o,onClick:()=>console.log("Icon button clicked")}},c={args:{color:"gray",size:"medium",icon:o}},n={args:{color:"white",size:"medium",icon:o}},t={render:e=>s.createElement("div",{className:"flex gap-4 items-center"},s.createElement(r,{icon:o,...e,size:"small",color:e.color}),s.createElement(r,{icon:o,...e,size:"medium",color:e.color}),s.createElement(r,{icon:o,...e,size:"large",color:e.color})),args:{color:"gray",icon:o}},i={render:e=>s.createElement("div",{className:"flex gap-4 items-center"},s.createElement(r,{icon:o,...e,color:"gray",size:e.size}),s.createElement(r,{icon:o,...e,color:"white",size:e.size}),s.createElement(r,{icon:o,...e,color:"beige",size:e.size})),args:{size:"medium",icon:o}},a={args:{color:"gray",size:"medium",icon:o,disabled:!0}};var l,m,d;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    color: 'gray',
    size: 'medium',
    icon: CrossCloseIcon
  }
}`,...(d=(m=c.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: 'white',
    size: 'medium',
    icon: CrossCloseIcon
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var z,C,I;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <IconButton icon={CrossCloseIcon} {...args} size="small" color={args.color} />
      <IconButton icon={CrossCloseIcon} {...args} size="medium" color={args.color} />
      <IconButton icon={CrossCloseIcon} {...args} size="large" color={args.color} />
    </div>,
  args: {
    color: 'gray',
    icon: CrossCloseIcon
  }
}`,...(I=(C=t.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var y,b,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <IconButton icon={CrossCloseIcon} {...args} color="gray" size={args.size} />
      <IconButton icon={CrossCloseIcon} {...args} color="white" size={args.size} />
      <IconButton icon={CrossCloseIcon} {...args} color="beige" size={args.size} />
    </div>,
  args: {
    size: 'medium',
    icon: CrossCloseIcon
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,E,B;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: 'gray',
    size: 'medium',
    icon: CrossCloseIcon,
    disabled: true
  }
}`,...(B=(E=a.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const k=["Default","White","AllSizes","AllColors","Disabled"];export{i as AllColors,t as AllSizes,c as Default,a as Disabled,n as White,k as __namedExportsOrder,W as default};
