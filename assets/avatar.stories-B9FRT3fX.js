import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{A as e}from"./component-AO99FQNF.js";import"./index-DpTt3J-R.js";import"./index-CC9pek2O.js";import"./index-D9ZhQrDp.js";import"./index-B5ODnmFs.js";/* empty css               */import"./clsx-B-dksMZM.js";/* empty css              */const S={title:"Design System/Avatar",component:e,parameters:{layout:"centered",docs:{description:{component:"An avatar component for displaying user profile images with fallback support."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["image","initials"],description:"The shape variant of the avatar"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the avatar"},src:{control:{type:"text"},description:"The image source URL"},fallback:{control:{type:"text"},description:"Fallback text when image is not available"},alt:{control:{type:"text"},description:"Alt text for the image"}},args:{variant:"image",size:"medium",src:"https://via.placeholder.com/150",fallback:"JD",alt:"Avatar",onClick:()=>console.log("Avatar clicked")}},s={render:a=>r.jsx(e,{...a,variant:a.variant,fallback:a.fallback,alt:a.alt,src:a.src,onClick:()=>{},size:"medium"}),args:{variant:"initials",size:"large",src:"https://cdn-icons-png.freepik.com/256/9165/9165802.png?semt=ais_white_label",fallback:"JD",alt:"User Avatar"}},t={render:a=>r.jsx(e,{...a,variant:a.variant,fallback:a.fallback,alt:a.alt,src:a.src,onClick:()=>{},size:"medium"}),args:{variant:"initials",size:"large",fallback:"LI",alt:"User Avatar",onClick:()=>console.log("Avatar clicked")}},i={render:a=>r.jsxs("div",{className:"flex gap-4 items-center",children:[r.jsx(e,{...a,src:a.src,size:"small",variant:a.variant,onClick:()=>{}}),r.jsx(e,{...a,src:a.src,size:"medium",variant:a.variant,onClick:()=>{}}),r.jsx(e,{...a,src:a.src,size:"large",variant:a.variant,onClick:()=>{}})]})},c={render:a=>r.jsxs("div",{className:"flex gap-4 items-center",children:[r.jsx(e,{...a,variant:"image",src:a.src,onClick:()=>{},size:"medium"}),r.jsx(e,{...a,variant:"initials",src:a.src,onClick:()=>{},size:"medium"})]}),args:{size:"medium",src:"https://cdn-icons-png.freepik.com/256/9165/9165802.png?semt=ais_white_label",fallback:"JD",alt:"User Avatar"}};var l,n,o;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Avatar {...args} variant={args.variant} fallback={args.fallback} alt={args.alt} src={args.src} onClick={() => {}} size="medium" />,
  args: {
    variant: "initials",
    size: "large",
    src: "https://cdn-icons-png.freepik.com/256/9165/9165802.png?semt=ais_white_label",
    fallback: 'JD',
    alt: 'User Avatar'
  }
}`,...(o=(n=s.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Avatar {...args} variant={args.variant} fallback={args.fallback} alt={args.alt} src={args.src} onClick={() => {}} size="medium" />,
  args: {
    variant: "initials",
    size: "large",
    fallback: 'LI',
    alt: 'User Avatar',
    onClick: () => console.log('Avatar clicked')
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var v,g,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(A=(u=c.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};const U=["DefaultImage","DefaultInitials","AllSizes","AllVariants"];export{i as AllSizes,c as AllVariants,s as DefaultImage,t as DefaultInitials,U as __namedExportsOrder,S as default};
