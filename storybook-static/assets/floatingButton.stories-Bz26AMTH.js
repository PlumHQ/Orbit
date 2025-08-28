import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as H}from"./index-Dp3B9jqt.js";import{c as J}from"./utilities-WNthGydt.js";/* empty css              */import{a as t,D as L,o as K,C as Q}from"./index-2-1EQAb5.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-CLJs87Zn.js";/* empty css               */const n=({styleVariant:a,size:m,iconOnly:u=!1,leadingIcon:p,label:y,onClick:M=()=>{}})=>{const T=H(`inline-flex items-center font-primary py-2 font-semibold
        shadow h-fit w-fit
        font-primary
        focus-visible:plum-focus disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0`,{variants:{size:{large:"text-lg py-2 px-5 text-lg rounded-3",medium:"text-base py-15 px-3 text-base rounded-25"},iconOnly:{true:"p-3",false:""},styleVariant:{white:"bg-interactive-background-white-normal text-interactive-text-gray-normal hover:bg-interactive-background-gray-normal",gray:"bg-interactive-background-gray-highlighted text-interactive-text-white-normal hover:bg-interactive-background-gray-intense"}},defaultVariants:{size:"large",styleVariant:"white",iconOnly:!1}}),P={large:"extraLarge",medium:"large"},$=J(T({size:m,iconOnly:u,styleVariant:a})),E=`size-${P[m]} fill-interactive-icon-${a==="white"?"gray":"white"}-normal !important mr-${u?0:1}`;return e.jsxs("button",{className:$,onClick:M,children:[p&&e.jsx(e.Fragment,{children:p({className:E,size:{size:m}})}),!u&&y&&y]})};try{n.displayName="FloatingButton",n.__docgenInfo={description:"",displayName:"FloatingButton",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"white"'}]}},iconOnly:{defaultValue:{value:"false"},description:"",name:"iconOnly",required:!1,type:{name:"boolean | undefined"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"FC<{}> | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"FC<{}> | undefined"}}}}}catch{}try{n.displayName="FloatingButton",n.__docgenInfo={description:"",displayName:"FloatingButton",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"white"'}]}},iconOnly:{defaultValue:{value:"false"},description:"",name:"iconOnly",required:!1,type:{name:"boolean | undefined"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"FC<{}> | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"FC<{}> | undefined"}}}}}catch{}const le={title:"Design System/FloatingButton",component:n,parameters:{layout:"centered",docs:{description:{component:"A floating action button component with customizable size, style, and icon options. Perfect for primary actions that need to stand out on the interface."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["medium","large"],description:"The size of the floating button"},styleVariant:{control:{type:"select"},options:["white","gray"],description:"The style variant of the floating button"},iconOnly:{control:{type:"boolean"},description:"Whether to show only the icon without label"},label:{control:{type:"text"},description:"The text label of the button (ignored when iconOnly is true)"},loading:{control:{type:"boolean"},description:"Whether the button is in loading state"}},args:{size:"large",styleVariant:"white",iconOnly:!1,label:"Add Item",loading:!1,leadingIcon:t,onClick:()=>console.log("Floating button clicked")}},l={args:{size:"large",styleVariant:"white",iconOnly:!1,label:"Add Item",leadingIcon:t}},s={args:{size:"large",styleVariant:"white",iconOnly:!0,leadingIcon:t}},i={args:{size:"large",styleVariant:"gray",iconOnly:!1,label:"Download",leadingIcon:L}},r={render:a=>e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,size:"medium",styleVariant:"white",label:"Medium",leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Medium"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,size:"large",styleVariant:"white",label:"Large",leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Large"})]})]}),args:{styleVariant:"white",iconOnly:!1}},o={render:a=>e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,styleVariant:"white",size:"large",label:"White",leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"White"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,styleVariant:"gray",size:"large",label:"Gray",leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Gray"})]})]}),args:{size:"large",iconOnly:!1}},c={render:a=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,size:"medium",styleVariant:"white",iconOnly:!0,leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Medium White"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,size:"large",styleVariant:"white",iconOnly:!0,leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Large White"})]})]}),e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,size:"medium",styleVariant:"gray",iconOnly:!0,leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Medium Gray"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...a,size:"large",styleVariant:"gray",iconOnly:!0,leadingIcon:t}),e.jsx("span",{className:"text-sm text-gray-600",children:"Large Gray"})]})]})]}),args:{iconOnly:!0}},d={render:a=>e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(n,{...a,size:"large",styleVariant:"white",label:"Add",leadingIcon:t}),e.jsx(n,{...a,size:"large",styleVariant:"white",label:"Download",leadingIcon:L}),e.jsx(n,{...a,size:"large",styleVariant:"white",label:"Search",leadingIcon:K}),e.jsx(n,{...a,size:"large",styleVariant:"gray",iconOnly:!0,leadingIcon:Q})]}),args:{iconOnly:!1}},g={args:{size:"large",styleVariant:"white",iconOnly:!1,label:"Interactive Button",leadingIcon:t,loading:!1}};var f,x,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'large',
    styleVariant: 'white',
    iconOnly: false,
    label: 'Add Item',
    leadingIcon: RoundedAddIcon
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,I,V;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'large',
    styleVariant: 'white',
    iconOnly: true,
    leadingIcon: RoundedAddIcon
  }
}`,...(V=(I=s.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var b,N,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'large',
    styleVariant: 'gray',
    iconOnly: false,
    label: 'Download',
    leadingIcon: DownloadIcon
  }
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var z,j,O;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(O=(j=r.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var F,A,B;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(A=o.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var _,S,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(S=c.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var C,R,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center flex-wrap">
      <FloatingButton {...args} size="large" styleVariant="white" label="Add" leadingIcon={RoundedAddIcon} />
      <FloatingButton {...args} size="large" styleVariant="white" label="Download" leadingIcon={DownloadIcon} />
      <FloatingButton {...args} size="large" styleVariant="white" label="Search" leadingIcon={SearchIcon} />
      <FloatingButton {...args} size="large" styleVariant="gray" iconOnly={true} leadingIcon={CrossCloseIcon} />
    </div>,
  args: {
    iconOnly: false
  }
}`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var k,G,W;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'large',
    styleVariant: 'white',
    iconOnly: false,
    label: 'Interactive Button',
    leadingIcon: RoundedAddIcon,
    loading: false
  }
}`,...(W=(G=g.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};const se=["Default","IconOnly","GrayVariant","AllSizes","AllStyleVariants","IconOnlyVariants","DifferentIcons","Playground"];export{r as AllSizes,o as AllStyleVariants,l as Default,d as DifferentIcons,i as GrayVariant,s as IconOnly,c as IconOnlyVariants,g as Playground,se as __namedExportsOrder,le as default};
