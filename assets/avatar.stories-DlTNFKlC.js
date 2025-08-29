import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{A as e}from"./component-CQ-ce4gF.js";import"./index-DpTt3J-R.js";import"./index-bX3F6qy8.js";import"./index-D9ZhQrDp.js";import"./index-B5ODnmFs.js";/* empty css               */import"./clsx-B-dksMZM.js";/* empty css              */const f={title:"Design System/Avatar",component:e,parameters:{layout:"centered",docs:{description:{component:"An avatar component for displaying user profile images with fallback support."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["image","initials"],description:"The shape variant of the avatar"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the avatar"},src:{control:{type:"text"},description:"The image source URL"},fallback:{control:{type:"text"},description:"Fallback text when image is not available"},alt:{control:{type:"text"},description:"Alt text for the image"}},args:{variant:"image",size:"medium",src:"https://via.placeholder.com/150",fallback:"JD",alt:"Avatar",onClick:()=>console.log("Avatar clicked")}},s={render:a=>r.jsx(e,{...a,variant:a.variant,fallback:a.fallback,alt:a.alt,src:a.src,onClick:()=>{},size:"medium"}),args:{variant:"initials",size:"large",src:"https://cdn-icons-png.freepik.com/256/9165/9165802.png?semt=ais_white_label",fallback:"JD",alt:"User Avatar"}},t={render:a=>r.jsx(e,{...a,variant:a.variant,fallback:a.fallback,alt:a.alt,src:a.src,onClick:()=>{},size:"medium"}),args:{variant:"initials",size:"large",fallback:"LI",alt:"User Avatar",onClick:()=>console.log("Avatar clicked")}},i={render:a=>r.jsxs("div",{className:"flex gap-4 items-center",children:[r.jsx(e,{...a,src:a.src,size:"small",variant:a.variant,onClick:()=>{}}),r.jsx(e,{...a,src:a.src,size:"medium",variant:a.variant,onClick:()=>{}}),r.jsx(e,{...a,src:a.src,size:"large",variant:a.variant,onClick:()=>{}})]})},c={render:a=>r.jsxs("div",{className:"flex gap-4 items-center",children:[r.jsx(e,{...a,variant:"image",src:a.src,onClick:()=>{},size:"medium"}),r.jsx(e,{...a,variant:"initials",src:a.src,onClick:()=>{},size:"medium"})]}),args:{size:"medium",src:"https://cdn-icons-png.freepik.com/256/9165/9165802.png?semt=ais_white_label",fallback:"JD",alt:"User Avatar"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Avatar {...args} variant={args.variant} fallback={args.fallback} alt={args.alt} src={args.src} onClick={() => {}} size="medium" />,
  args: {
    variant: "initials",
    size: "large",
    src: "https://cdn-icons-png.freepik.com/256/9165/9165802.png?semt=ais_white_label",
    fallback: 'JD',
    alt: 'User Avatar'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Avatar {...args} variant={args.variant} fallback={args.fallback} alt={args.alt} src={args.src} onClick={() => {}} size="medium" />,
  args: {
    variant: "initials",
    size: "large",
    fallback: 'LI',
    alt: 'User Avatar',
    onClick: () => console.log('Avatar clicked')
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Avatar {...args} src={args.src} size="small" variant={args.variant} onClick={() => {}} />
      <Avatar {...args} src={args.src} size="medium" variant={args.variant} onClick={() => {}} />
      <Avatar {...args} src={args.src} size="large" variant={args.variant} onClick={() => {}} />
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const u=["DefaultImage","DefaultInitials","AllSizes","AllVariants"];export{i as AllSizes,c as AllVariants,s as DefaultImage,t as DefaultInitials,u as __namedExportsOrder,f as default};
