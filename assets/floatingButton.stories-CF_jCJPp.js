import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as b}from"./index-B8k91cqS.js";import{c as N}from"./utilities-DX5EtrsU.js";/* empty css              */import{a as t,D as f,o as w,C as z}from"./index-obMssGqU.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-C8PyMnuF.js";/* empty css               */const n=({styleVariant:a,size:m,iconOnly:u=!1,leadingIcon:p,label:y,onClick:x=()=>{}})=>{const h=b(`inline-flex items-center font-primary py-2 font-semibold
        shadow h-fit w-fit
        font-primary
        focus-visible:plum-focus disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0`,{variants:{size:{large:"text-lg py-2 px-5 text-lg rounded-3",medium:"text-base py-15 px-3 text-base rounded-25"},iconOnly:{true:"p-3",false:""},styleVariant:{white:"bg-interactive-background-white-normal text-interactive-text-gray-normal hover:bg-interactive-background-gray-normal",gray:"bg-interactive-background-gray-highlighted text-interactive-text-white-normal hover:bg-interactive-background-gray-intense"}},defaultVariants:{size:"large",styleVariant:"white",iconOnly:!1}}),v={large:"extraLarge",medium:"large"},I=N(h({size:m,iconOnly:u,styleVariant:a})),V=`size-${v[m]} fill-interactive-icon-${a==="white"?"gray":"white"}-normal !important mr-${u?0:1}`;return e.jsxs("button",{className:I,onClick:x,children:[p&&e.jsx(e.Fragment,{children:p({className:V,size:{size:m}})}),!u&&y&&y]})};try{n.displayName="FloatingButton",n.__docgenInfo={description:"",displayName:"FloatingButton",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"white"'}]}},iconOnly:{defaultValue:{value:"false"},description:"",name:"iconOnly",required:!1,type:{name:"boolean | undefined"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"FC<{}> | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"FC<{}> | undefined"}}}}}catch{}try{n.displayName="FloatingButton",n.__docgenInfo={description:"",displayName:"FloatingButton",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"white"'}]}},iconOnly:{defaultValue:{value:"false"},description:"",name:"iconOnly",required:!1,type:{name:"boolean | undefined"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"FC<{}> | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"FC<{}> | undefined"}}}}}catch{}const C={title:"Design System/FloatingButton",component:n,parameters:{layout:"centered",docs:{description:{component:"A floating action button component with customizable size, style, and icon options. Perfect for primary actions that need to stand out on the interface."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["medium","large"],description:"The size of the floating button"},styleVariant:{control:{type:"select"},options:["white","gray"],description:"The style variant of the floating button"},iconOnly:{control:{type:"boolean"},description:"Whether to show only the icon without label"},label:{control:{type:"text"},description:"The text label of the button (ignored when iconOnly is true)"},loading:{control:{type:"boolean"},description:"Whether the button is in loading state"}},args:{size:"large",styleVariant:"white",iconOnly:!1,label:"Add Item",loading:!1,leadingIcon:t,onClick:()=>console.log("Floating button clicked")}},l={args:{size:"large",styleVariant:"white",iconOnly:!1,label:"Add Item",leadingIcon:t}},s={args:{size:"large",styleVariant:"white",iconOnly:!0,leadingIcon:t}},i={args:{size:"large",styleVariant:"gray",iconOnly:!1,label:"Download",leadingIcon:f}},r={render:a=>e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,size:"medium",styleVariant:"white",label:"Medium",leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Medium"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,size:"large",styleVariant:"white",label:"Large",leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Large"})]})]}),args:{styleVariant:"white",iconOnly:!1}},o={render:a=>e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,styleVariant:"white",size:"large",label:"White",leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"White"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,styleVariant:"gray",size:"large",label:"Gray",leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Gray"})]})]}),args:{size:"large",iconOnly:!1}},c={render:a=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,size:"medium",styleVariant:"white",iconOnly:!0,leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Medium White"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,size:"large",styleVariant:"white",iconOnly:!0,leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Large White"})]})]}),e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,size:"medium",styleVariant:"gray",iconOnly:!0,leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Medium Gray"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,size:"large",styleVariant:"gray",iconOnly:!0,leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Large Gray"})]})]})]}),args:{iconOnly:!0}},d={render:a=>e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(n,{...a,size:"large",styleVariant:"white",label:"Add",leadingIcon:t}),e.jsx(n,{...a,size:"large",styleVariant:"white",label:"Download",leadingIcon:f}),e.jsx(n,{...a,size:"large",styleVariant:"white",label:"Search",leadingIcon:w}),e.jsx(n,{...a,size:"large",styleVariant:"gray",iconOnly:!0,leadingIcon:z})]}),args:{iconOnly:!1}},g={args:{size:"large",styleVariant:"white",iconOnly:!1,label:"Interactive Button",leadingIcon:t,loading:!1}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    styleVariant: 'white',
    iconOnly: false,
    label: 'Add Item',
    leadingIcon: RoundedAddIcon
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    styleVariant: 'white',
    iconOnly: true,
    leadingIcon: RoundedAddIcon
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    styleVariant: 'gray',
    iconOnly: false,
    label: 'Download',
    leadingIcon: DownloadIcon
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-6 items-center">
      <div className="flex flex-col items-center gap-2">
        <FloatingButton {...args} size="medium" styleVariant="white" label="Medium" leadingIcon={RoundedAddIcon} />
        <span className="text-sm text-gray-600">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FloatingButton {...args} size="large" styleVariant="white" label="Large" leadingIcon={RoundedAddIcon} />
        <span className="text-sm text-gray-600">Large</span>
      </div>
    </div>,
  args: {
    styleVariant: 'white',
    iconOnly: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-6 items-center">
      <div className="flex flex-col items-center gap-2">
        <FloatingButton {...args} styleVariant="white" size="large" label="White" leadingIcon={RoundedAddIcon} />
        <span className="text-sm text-gray-600">White</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FloatingButton {...args} styleVariant="gray" size="large" label="Gray" leadingIcon={RoundedAddIcon} />
        <span className="text-sm text-gray-600">Gray</span>
      </div>
    </div>,
  args: {
    size: 'large',
    iconOnly: false
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-6">
      <div className="flex gap-6 items-center">
        <div className="flex flex-col items-center gap-2">
          <FloatingButton {...args} size="medium" styleVariant="white" iconOnly={true} leadingIcon={RoundedAddIcon} />
          <span className="text-sm text-gray-600">Medium White</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FloatingButton {...args} size="large" styleVariant="white" iconOnly={true} leadingIcon={RoundedAddIcon} />
          <span className="text-sm text-gray-600">Large White</span>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex flex-col items-center gap-2">
          <FloatingButton {...args} size="medium" styleVariant="gray" iconOnly={true} leadingIcon={RoundedAddIcon} />
          <span className="text-sm text-gray-600">Medium Gray</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FloatingButton {...args} size="large" styleVariant="gray" iconOnly={true} leadingIcon={RoundedAddIcon} />
          <span className="text-sm text-gray-600">Large Gray</span>
        </div>
      </div>
    </div>,
  args: {
    iconOnly: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center flex-wrap">
      <FloatingButton {...args} size="large" styleVariant="white" label="Add" leadingIcon={RoundedAddIcon} />
      <FloatingButton {...args} size="large" styleVariant="white" label="Download" leadingIcon={DownloadIcon} />
      <FloatingButton {...args} size="large" styleVariant="white" label="Search" leadingIcon={SearchIcon} />
      <FloatingButton {...args} size="large" styleVariant="gray" iconOnly={true} leadingIcon={CrossCloseIcon} />
    </div>,
  args: {
    iconOnly: false
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    styleVariant: 'white',
    iconOnly: false,
    label: 'Interactive Button',
    leadingIcon: RoundedAddIcon,
    loading: false
  }
}`,...g.parameters?.docs?.source}}};const R=["Default","IconOnly","GrayVariant","AllSizes","AllStyleVariants","IconOnlyVariants","DifferentIcons","Playground"];export{r as AllSizes,o as AllStyleVariants,l as Default,d as DifferentIcons,i as GrayVariant,s as IconOnly,c as IconOnlyVariants,g as Playground,R as __namedExportsOrder,C as default};
