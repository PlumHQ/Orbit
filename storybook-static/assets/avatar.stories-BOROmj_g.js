import{R as e}from"./index-DpTt3J-R.js";import{A as r}from"./component-BT3ZjxNH.js";import"./index-Ca3VPhni.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-D9ZhQrDp.js";import"./index-BsciMW3t.js";import"./index-B5ODnmFs.js";/* empty css               */import"./clsx-B-dksMZM.js";/* empty css              */const U={title:"Design System/Avatar",component:r,parameters:{layout:"centered",docs:{description:{component:"An avatar component for displaying user profile images with fallback support."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["image","initials"],description:"The shape variant of the avatar"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the avatar"},src:{control:{type:"text"},description:"The image source URL"},fallback:{control:{type:"text"},description:"Fallback text when image is not available"},alt:{control:{type:"text"},description:"Alt text for the image"}},args:{variant:"image",size:"medium",src:"https://via.placeholder.com/150",fallback:"JD",alt:"Avatar",onClick:()=>console.log("Avatar clicked")}},t={render:a=>e.createElement(r,{...a,variant:a.variant,fallback:a.fallback,alt:a.alt,src:a.src,onClick:()=>{},size:"medium"}),args:{variant:"initials",size:"large",src:"https://cdn-icons-png.freepik.com/256/9165/9165802.png?semt=ais_white_label",fallback:"JD",alt:"User Avatar"}},s={render:a=>e.createElement(r,{...a,variant:a.variant,fallback:a.fallback,alt:a.alt,src:a.src,onClick:()=>{},size:"medium"}),args:{variant:"initials",size:"large",fallback:"LI",alt:"User Avatar",onClick:()=>console.log("Avatar clicked")}},i={render:a=>e.createElement("div",{className:"flex gap-4 items-center"},e.createElement(r,{...a,src:a.src,size:"small",variant:a.variant,onClick:()=>{}}),e.createElement(r,{...a,src:a.src,size:"medium",variant:a.variant,onClick:()=>{}}),e.createElement(r,{...a,src:a.src,size:"large",variant:a.variant,onClick:()=>{}}))},c={render:a=>e.createElement("div",{className:"flex gap-4 items-center"},e.createElement(r,{...a,variant:"image",src:a.src,onClick:()=>{},size:"medium"}),e.createElement(r,{...a,variant:"initials",src:a.src,onClick:()=>{},size:"medium"})),args:{size:"medium",src:"https://cdn-icons-png.freepik.com/256/9165/9165802.png?semt=ais_white_label",fallback:"JD",alt:"User Avatar"}};var l,n,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Avatar {...args} variant={args.variant} fallback={args.fallback} alt={args.alt} src={args.src} onClick={() => {}} size="medium" />,
  args: {
    variant: "initials",
    size: "large",
    src: "https://cdn-icons-png.freepik.com/256/9165/9165802.png?semt=ais_white_label",
    fallback: 'JD',
    alt: 'User Avatar'
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Avatar {...args} variant={args.variant} fallback={args.fallback} alt={args.alt} src={args.src} onClick={() => {}} size="medium" />,
  args: {
    variant: "initials",
    size: "large",
    fallback: 'LI',
    alt: 'User Avatar',
    onClick: () => console.log('Avatar clicked')
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var v,g,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Avatar {...args} src={args.src} size="small" variant={args.variant} onClick={() => {}} />
      <Avatar {...args} src={args.src} size="medium" variant={args.variant} onClick={() => {}} />
      <Avatar {...args} src={args.src} size="large" variant={args.variant} onClick={() => {}} />
    </div>
}`,...(k=(g=i.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var f,u,A;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Avatar {...args} variant="image" src={args.src} onClick={() => {}} size="medium" />
      <Avatar {...args} variant="initials" src={args.src} onClick={() => {}} size="medium" />
    </div>,
  args: {
    size: 'medium',
    src: 'https://cdn-icons-png.freepik.com/256/9165/9165802.png?semt=ais_white_label',
    fallback: 'JD',
    alt: 'User Avatar'
  }
}`,...(A=(u=c.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};const w=["DefaultImage","DefaultInitials","AllSizes","AllVariants"];export{i as AllSizes,c as AllVariants,t as DefaultImage,s as DefaultInitials,w as __namedExportsOrder,U as default};
