import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as A}from"./index-Dp3B9jqt.js";import{D as B}from"./index-BbKn7Mdi.js";import{B as P}from"./component-DuhNdf_5.js";import{I as n,C as p}from"./index-BdKfWn55.js";/* empty css               */import{I as g}from"./index-BwvbaHPQ.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./utilities-CP3_-lCt.js";import"./index-DpTt3J-R.js";import"./index-B6TRxRi1.js";import"./index-B5ODnmFs.js";const Z=A("gap-4 rounded-25 py-2 px-4 shadow-md w-fit max-w-md justify-between toast-shadow",{variants:{styleVariant:{neutral:"bg-feedback-background-neutral-intense text-feedback-text-neutral-minimal",negative:"bg-feedback-background-negative-intense text-feedback-text-neutral-minimal",positive:"bg-feedback-background-positive-intense text-feedback-text-neutral-minimal",promotional:"bg-surface-background-white-normal border border-solid border-surface-border-gray-normal text-default"}},defaultVariants:{styleVariant:"promotional"}}),t=({title:a,message:m,onClose:E,onButtonClick:q,action:H,styleVariant:s,LeadingIcon:u=n,...M})=>e.jsxs("div",{className:Z({styleVariant:s}),...M,children:[e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:`${s==="promotional"?"":"flex"} items-center font-primary`,children:[a&&s==="promotional"&&e.jsx("div",{className:"flex justify-between mb-1",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"mr-1",children:e.jsx(u,{className:"fill-interactive-icon-neutral-subtle",size:"medium"})}),e.jsx("div",{className:"text-sm font-semibold text-feedback-text-neutral-normal",children:a})]})}),m&&e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"mr-1",children:e.jsx(u,{color:"white",size:"medium"})}),e.jsx("div",{className:`text-sm font-medium text-feedback-text-${s==="promotional"?"neutral-subtle":"white-normal"}`,children:m})]})]}),s!="promotional"?e.jsx("div",{className:"flex ml-6",children:e.jsxs("div",{className:"flex gap-2 items-center",children:[H,e.jsx("div",{className:"rotate-90 w-4",children:e.jsx(B,{dividerStyle:"gray",stroke:"solid",variant:"subtle"})}),e.jsx(e.Fragment,{children:e.jsx(g,{size:"medium",color:"white",icon:p})})]})}):e.jsx("div",{children:e.jsx(g,{size:"small",color:"gray",icon:p})})]}),s==="promotional"&&e.jsx("div",{className:"ml-5 mt-2",children:e.jsx(P,{styleVariant:"gray",variant:"secondary",size:"small",label:"Button",onClick:q})})]});try{t.displayName="Toast",t.__docgenInfo={description:"",displayName:"Toast",props:{styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"positive"'},{value:'"negative"'},{value:'"neutral"'},{value:'"promotional"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"(() => void) | undefined"}},LeadingIcon:{defaultValue:{value:`({
  color = '',
  className,
  size = 'large',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeMap[size]}
      height={sizeMap[size]}
      viewBox={\`0 0 24 24\`}
      fill="none"
      color={color}
      className={className}
      {...props}
    >
      <path
        d="M12 4.6875C13.9394 4.6875 15.7994 5.45792 17.1707 6.82928C18.5421 8.20064 19.3125 10.0606 19.3125 12C19.3125 13.9394 18.5421 15.7994 17.1707 17.1707C15.7994 18.5421 13.9394 19.3125 12 19.3125C10.0606 19.3125 8.20064 18.5421 6.82928 17.1707C5.45792 15.7994 4.6875 13.9394 4.6875 12C4.6875 10.0606 5.45792 8.20064 6.82928 6.82928C8.20064 5.45792 10.0606 4.6875 12 4.6875ZM12 21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM10.5938 14.8125C10.1262 14.8125 9.75 15.1887 9.75 15.6562C9.75 16.1238 10.1262 16.5 10.5938 16.5H13.4062C13.8738 16.5 14.25 16.1238 14.25 15.6562C14.25 15.1887 13.8738 14.8125 13.4062 14.8125H13.125V11.7188C13.125 11.2512 12.7488 10.875 12.2812 10.875H10.5938C10.1262 10.875 9.75 11.2512 9.75 11.7188C9.75 12.1863 10.1262 12.5625 10.5938 12.5625H11.4375V14.8125H10.5938ZM12 9.75C12.2984 9.75 12.5845 9.63147 12.7955 9.4205C13.0065 9.20952 13.125 8.92337 13.125 8.625C13.125 8.32663 13.0065 8.04048 12.7955 7.8295C12.5845 7.61853 12.2984 7.5 12 7.5C11.7016 7.5 11.4155 7.61853 11.2045 7.8295C10.9935 8.04048 10.875 8.32663 10.875 8.625C10.875 8.92337 10.9935 9.20952 11.2045 9.4205C11.4155 9.63147 11.7016 9.75 12 9.75Z"
        fill={color}
      />
    </svg>
  );
}`},description:"",name:"LeadingIcon",required:!1,type:{name:"FC<IIconProps> | undefined"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}}}}}catch{}try{t.displayName="Toast",t.__docgenInfo={description:"",displayName:"Toast",props:{styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"positive"'},{value:'"negative"'},{value:'"neutral"'},{value:'"promotional"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"(() => void) | undefined"}},LeadingIcon:{defaultValue:{value:`({
  color = '',
  className,
  size = 'large',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeMap[size]}
      height={sizeMap[size]}
      viewBox={\`0 0 24 24\`}
      fill="none"
      color={color}
      className={className}
      {...props}
    >
      <path
        d="M12 4.6875C13.9394 4.6875 15.7994 5.45792 17.1707 6.82928C18.5421 8.20064 19.3125 10.0606 19.3125 12C19.3125 13.9394 18.5421 15.7994 17.1707 17.1707C15.7994 18.5421 13.9394 19.3125 12 19.3125C10.0606 19.3125 8.20064 18.5421 6.82928 17.1707C5.45792 15.7994 4.6875 13.9394 4.6875 12C4.6875 10.0606 5.45792 8.20064 6.82928 6.82928C8.20064 5.45792 10.0606 4.6875 12 4.6875ZM12 21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM10.5938 14.8125C10.1262 14.8125 9.75 15.1887 9.75 15.6562C9.75 16.1238 10.1262 16.5 10.5938 16.5H13.4062C13.8738 16.5 14.25 16.1238 14.25 15.6562C14.25 15.1887 13.8738 14.8125 13.4062 14.8125H13.125V11.7188C13.125 11.2512 12.7488 10.875 12.2812 10.875H10.5938C10.1262 10.875 9.75 11.2512 9.75 11.7188C9.75 12.1863 10.1262 12.5625 10.5938 12.5625H11.4375V14.8125H10.5938ZM12 9.75C12.2984 9.75 12.5845 9.63147 12.7955 9.4205C13.0065 9.20952 13.125 8.92337 13.125 8.625C13.125 8.32663 13.0065 8.04048 12.7955 7.8295C12.5845 7.61853 12.2984 7.5 12 7.5C11.7016 7.5 11.4155 7.61853 11.2045 7.8295C10.9935 8.04048 10.875 8.32663 10.875 8.625C10.875 8.92337 10.9935 9.20952 11.2045 9.4205C11.4155 9.63147 11.7016 9.75 12 9.75Z"
        fill={color}
      />
    </svg>
  );
}`},description:"",name:"LeadingIcon",required:!1,type:{name:"FC<IIconProps> | undefined"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}}}}}catch{}const ee={title:"Design System/Toast",component:t,parameters:{layout:"centered",docs:{description:{component:"A toast component for displaying temporary notifications."}}},tags:["autodocs"],argTypes:{styleVariant:{control:{type:"select"},options:["neutral","negative","positive","promotional"],description:"The style variant of the toast"},title:{control:{type:"text"},description:"The title of the toast"},message:{control:{type:"text"},description:"The message content of the toast"}},args:{styleVariant:"promotional",title:"Notification",message:"This is a toast notification message.",onClose:()=>console.log("Toast closed"),onButtonClick:()=>console.log("Toast action clicked")}},o={args:{styleVariant:"promotional",title:"Success!",message:"Your changes have been saved successfully.",LeadingIcon:n}},r={args:{styleVariant:"positive",title:"Success",message:"Your action was completed successfully.",LeadingIcon:n}},i={args:{styleVariant:"negative",title:"Error",message:"Something went wrong. Please try again.",LeadingIcon:n}},l={args:{styleVariant:"neutral",title:"Information",message:"Here is some important information for you.",LeadingIcon:n}},c={args:{styleVariant:"promotional",title:"Update Available",message:"A new version is available. Would you like to update?",LeadingIcon:n,action:"Update Now"}},d={render:a=>e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsx(t,{...a,styleVariant:"positive",title:"Success",message:"Operation completed successfully."}),e.jsx(t,{...a,styleVariant:"negative",title:"Error",message:"An error occurred."}),e.jsx(t,{...a,styleVariant:"neutral",title:"Info",message:"Here's some information."}),e.jsx(t,{...a,styleVariant:"promotional",title:"Promotion",message:"Check out our new feature!"})]}),args:{LeadingIcon:n}};var f,v,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    styleVariant: 'promotional',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    LeadingIcon: InfoIcon
  }
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var y,x,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    styleVariant: 'positive',
    title: 'Success',
    message: 'Your action was completed successfully.',
    LeadingIcon: InfoIcon
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var V,I,N;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    styleVariant: 'negative',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    LeadingIcon: InfoIcon
  }
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var w,b,j;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    styleVariant: 'neutral',
    title: 'Information',
    message: 'Here is some important information for you.',
    LeadingIcon: InfoIcon
  }
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var k,_,T;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    styleVariant: 'promotional',
    title: 'Update Available',
    message: 'A new version is available. Would you like to update?',
    LeadingIcon: InfoIcon,
    action: 'Update Now'
  }
}`,...(T=(_=c.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var S,z,L;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col space-y-4">
      <Toast {...args} styleVariant="positive" title="Success" message="Operation completed successfully." />
      <Toast {...args} styleVariant="negative" title="Error" message="An error occurred." />
      <Toast {...args} styleVariant="neutral" title="Info" message="Here's some information." />
      <Toast {...args} styleVariant="promotional" title="Promotion" message="Check out our new feature!" />
    </div>,
  args: {
    LeadingIcon: InfoIcon
  }
}`,...(L=(z=d.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const ae=["Default","Positive","Negative","Neutral","WithAction","AllVariants"];export{d as AllVariants,o as Default,i as Negative,l as Neutral,r as Positive,c as WithAction,ae as __namedExportsOrder,ee as default};
