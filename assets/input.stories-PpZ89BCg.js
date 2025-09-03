import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s,R as p}from"./index-DpTt3J-R.js";import{L as A}from"./index-D1cC6FbB.js";import{w as G,I as E,n as J,b as Q,o as U}from"./index-DqMjPeH2.js";import{I as X}from"./index-B-aVel8z.js";/* empty css              */import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./utilities-DX5EtrsU.js";import"./bundle-mjs-C8PyMnuF.js";/* empty css                *//* empty css               */const l=({label:n,helperLink:k,helperText:S,disabled:f=!1,placeholder:B,isRequired:m,isOptional:F,helpTextIcon:x=E,showPrefixIcon:h=!1,prefixIcon:g,prefixValue:c,defaultValue:_="",shortcutKey:y,suffixIcon:b,bankLogoIcon:v,showSuffixButton:V,showValidation:H,isValid:C=a=>!0,errorText:M,successText:R,onChange:q=a=>{},onFocus:L=()=>{},onBlur:$=()=>{},size:t,id:K})=>{const[a,I]=s.useState(_),[i,T]=s.useState(!0),[w,N]=s.useState(!1);s.useEffect(()=>{q(a)},[a,q]);const Z=()=>{},D=W=>{const z=W.target.value;I(z),T(C(z)),N(!0)},O=()=>{T(C(a)),w||N(!0)},r=w&&H&&(a||m),j=r?i?R:M:S,P=`
    w-full border border-solid py-2 px-3 rounded-25 mb-1 flex justify-between items-center focus-within:plum-focus
    ${f?"bg-surface-background-gray-muted":"bg-surface-background-white-normal"}
    ${r?i?"border-feedback-border-positive-intense":"border-feedback-border-negative-intense":"border-surface-border-gray-highlighted"}
    hover:bg-surface-background-gray-subtle hover:children:bg-surface-background-gray-subtle
  `;return e.jsxs("div",{className:"w-full font-primary",onBlur:$,onFocus:L,children:[e.jsxs("div",{className:"flex justify-between mb-1 px-1",children:[n&&e.jsxs("div",{className:"flex text-sm",children:[e.jsx("div",{className:"text-surface-text-gray-subtle font-semibold",children:n}),m?e.jsx("div",{className:"text-feedback-text-negative-intense ml-05",children:"*"}):F?e.jsx("div",{className:"text-feedback-text-neutral-muted ml-05",children:"(Optional)"}):null]}),k&&e.jsx(A,{state:"primary",label:"Link",size:t==="medium"?"small":"medium"})]}),e.jsxs("div",{className:P,children:[h&&p.createElement(g,{size:t,className:"fill-interactive-icon-gray-subtle"}),c&&e.jsx("span",{className:`font-primary text-sm font-normal text-surface-text-gray-subtle ml-${h?3:0}`,children:c}),e.jsx("input",{className:`ml-${c||g?15:0} focus-visible:outline-none placeholder-gray-400 text-surface-text-gray-normal bg-inherit font-normal font-primary text-sm ${V&&a?"w-[calc(100%-24px)]":"w-full"}`,id:K||"input-field-main",disabled:f,placeholder:B,value:a,onFocus:Z,onChange:D,onBlur:O}),v&&e.jsx("div",{className:"mr-2",children:e.jsx("img",{src:v,className:"w-4 h-4",alt:"Bank Logo"})}),y&&e.jsxs("div",{className:"flex items-center",children:[e.jsx(G,{size:t==="medium"?"extraSmall":"medium"}),e.jsx("div",{className:"text-surface-text-gray-muted text-xs font-medium overflow-ellipsis ml-05",children:y})]}),b&&e.jsx("div",{className:`${a?"mx-2":"ml-2"}`,children:p.createElement(b,{size:t,className:"fill-interactive-icon-gray-muted"})}),V&&a&&e.jsx(X,{size:t,color:"gray",onClick:()=>I("")})]}),e.jsx("div",{className:"flex justify-between mb-1 px-1",children:j&&e.jsxs("div",{className:"flex items-center",children:[r?i?e.jsx(J,{size:"small",className:"fill-feedback-icon-positive-intense mr-1"}):e.jsx(Q,{size:"small",className:"fill-feedback-icon-negative-intense mr-1"}):x&&p.createElement(x,{size:t==="large"?"medium":"small",className:"fill-feedback-icon-neutral-muted mr-1"}),e.jsx("div",{className:`text-xs font-medium ${r?i?"text-feedback-text-positive-intense":"text-feedback-text-negative-intense":"text-feedback-text-neutral-muted"}`,children:j})]})})]})};try{l.displayName="Input",l.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},helperLink:{defaultValue:null,description:"",name:"helperLink",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isOptional:{defaultValue:null,description:"",name:"isOptional",required:!1,type:{name:"boolean | undefined"}},helpTextIcon:{defaultValue:{value:`({
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
}`},description:"",name:"helpTextIcon",required:!1,type:{name:"FC<{}> | undefined"}},showPrefixIcon:{defaultValue:{value:"false"},description:"",name:"showPrefixIcon",required:!1,type:{name:"boolean | undefined"}},prefixIcon:{defaultValue:null,description:"",name:"prefixIcon",required:!1,type:{name:"FC<{}> | undefined"}},prefixValue:{defaultValue:null,description:"",name:"prefixValue",required:!1,type:{name:"string | undefined"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean | undefined"}},defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"string | undefined"}},shortcutKey:{defaultValue:null,description:"",name:"shortcutKey",required:!1,type:{name:"string | undefined"}},suffixIcon:{defaultValue:null,description:"",name:"suffixIcon",required:!1,type:{name:"FC<{}> | undefined"}},bankLogoIcon:{defaultValue:null,description:"",name:"bankLogoIcon",required:!1,type:{name:"string | undefined"}},showSuffixButton:{defaultValue:null,description:"",name:"showSuffixButton",required:!1,type:{name:"boolean | undefined"}},showValidation:{defaultValue:null,description:"",name:"showValidation",required:!1,type:{name:"boolean | undefined"}},isValid:{defaultValue:{value:"(value) => true"},description:"",name:"isValid",required:!1,type:{name:"((value: any) => boolean) | undefined"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string | undefined"}},successText:{defaultValue:null,description:"",name:"successText",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:{value:"(value) => {}"},description:"",name:"onChange",required:!1,type:{name:"((value: any) => void) | undefined"}},onFocus:{defaultValue:{value:"() => {}"},description:"",name:"onFocus",required:!1,type:{name:"(() => void) | undefined"}},onBlur:{defaultValue:{value:"() => {}"},description:"",name:"onBlur",required:!1,type:{name:"(() => void) | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}}}}}catch{}try{l.displayName="Input",l.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},helperLink:{defaultValue:null,description:"",name:"helperLink",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isOptional:{defaultValue:null,description:"",name:"isOptional",required:!1,type:{name:"boolean | undefined"}},helpTextIcon:{defaultValue:{value:`({
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
}`},description:"",name:"helpTextIcon",required:!1,type:{name:"FC<{}> | undefined"}},showPrefixIcon:{defaultValue:{value:"false"},description:"",name:"showPrefixIcon",required:!1,type:{name:"boolean | undefined"}},prefixIcon:{defaultValue:null,description:"",name:"prefixIcon",required:!1,type:{name:"FC<{}> | undefined"}},prefixValue:{defaultValue:null,description:"",name:"prefixValue",required:!1,type:{name:"string | undefined"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean | undefined"}},defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"string | undefined"}},shortcutKey:{defaultValue:null,description:"",name:"shortcutKey",required:!1,type:{name:"string | undefined"}},suffixIcon:{defaultValue:null,description:"",name:"suffixIcon",required:!1,type:{name:"FC<{}> | undefined"}},bankLogoIcon:{defaultValue:null,description:"",name:"bankLogoIcon",required:!1,type:{name:"string | undefined"}},showSuffixButton:{defaultValue:null,description:"",name:"showSuffixButton",required:!1,type:{name:"boolean | undefined"}},showValidation:{defaultValue:null,description:"",name:"showValidation",required:!1,type:{name:"boolean | undefined"}},isValid:{defaultValue:{value:"(value) => true"},description:"",name:"isValid",required:!1,type:{name:"((value: any) => boolean) | undefined"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string | undefined"}},successText:{defaultValue:null,description:"",name:"successText",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:{value:"(value) => {}"},description:"",name:"onChange",required:!1,type:{name:"((value: any) => void) | undefined"}},onFocus:{defaultValue:{value:"() => {}"},description:"",name:"onFocus",required:!1,type:{name:"(() => void) | undefined"}},onBlur:{defaultValue:{value:"() => {}"},description:"",name:"onBlur",required:!1,type:{name:"(() => void) | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}}}}}catch{}const ce={title:"Design System/Input",component:l,parameters:{layout:"centered",docs:{description:{component:"A versatile input component with validation states, helper text, and various configurations."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the input"},label:{control:{type:"text"},description:"The label for the input"},placeholder:{control:{type:"text"},description:"Placeholder text"},helperText:{control:{type:"text"},description:"Helper text below the input"},disabled:{control:{type:"boolean"},description:"Whether the input is disabled"},isRequired:{control:{type:"boolean"},description:"Whether the input is required"},showValidation:{control:{type:"boolean"},description:"Whether to show validation state"}},args:{size:"medium",label:"Email",placeholder:"Enter your email",helperText:"We will never share your email",disabled:!1,isRequired:!1,showValidation:!1}},u={args:{size:"medium",label:"Email",placeholder:"Enter your amount",helperText:"We will never share your bank balance",onChange:n=>{console.log(n)},prefixIcon:U,showPrefixIcon:!0,prefixValue:"$",suffixIcon:E,showSuffixIcon:!0,suffixValue:"/-",showSuffixButton:!0,shortcutKey:"K",width:"100%"}},d={render:n=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(l,{...n,size:"medium",label:"Medium Input (no validation)",placeholder:"Enter text...",helperText:"Helper text",disabled:!1,isRequired:!1,showValidation:!1,errorText:"Error Text",successText:"Success Text",onChange:()=>{},onBlur:()=>{},onFocus:()=>{}}),e.jsx(l,{...n,size:"medium",label:"Medium Input (valid)",placeholder:"Enter text...",helperText:"Helper text",disabled:!1,isRequired:!1,showValidation:!0,errorText:"Error Text",successText:"Success Text",onChange:()=>{},onBlur:()=>{},onFocus:()=>{},isValid:()=>!0}),e.jsx(l,{...n,size:"large",label:"Large Input (invalid)",placeholder:"Enter text...",helperText:"Helper text",disabled:!1,isRequired:!1,showValidation:!0,errorText:"Error Text",successText:"Success Text",onChange:()=>{},onBlur:()=>{},onFocus:()=>{},isValid:()=>!1})]}),args:{placeholder:"Enter text...",onChange:n=>{console.log(n)}}},o={args:{size:"medium",label:"Disabled Input",placeholder:"This input is disabled",disabled:!0,helperText:"This input cannot be edited"}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    label: 'Email',
    placeholder: 'Enter your amount',
    helperText: 'We will never share your bank balance',
    onChange: (value: string) => {
      console.log(value);
    },
    prefixIcon: SearchIcon,
    showPrefixIcon: true,
    prefixValue: '$',
    suffixIcon: InfoIcon,
    showSuffixIcon: true,
    suffixValue: '/-',
    showSuffixButton: true,
    shortcutKey: 'K',
    width: '100%'
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-80">
      <Input {...args} size="medium" label="Medium Input (no validation)" placeholder="Enter text..." helperText="Helper text" disabled={false} isRequired={false} showValidation={false} errorText="Error Text" successText="Success Text" onChange={() => {}} onBlur={() => {}} onFocus={() => {}} />
      <Input {...args} size="medium" label="Medium Input (valid)" placeholder="Enter text..." helperText="Helper text" disabled={false} isRequired={false} showValidation={true} errorText="Error Text" successText="Success Text" onChange={() => {}} onBlur={() => {}} onFocus={() => {}} isValid={() => true} />
      <Input {...args} size="large" label="Large Input (invalid)" placeholder="Enter text..." helperText="Helper text" disabled={false} isRequired={false} showValidation={true} errorText="Error Text" successText="Success Text" onChange={() => {}} onBlur={() => {}} onFocus={() => {}} isValid={() => false} />
    </div>,
  args: {
    placeholder: 'Enter text...',
    onChange: (value: string) => {
      console.log(value);
    }
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    helperText: 'This input cannot be edited'
  }
}`,...o.parameters?.docs?.source}}};const pe=["Default","AllSizes","Disabled"];export{d as AllSizes,u as Default,o as Disabled,pe as __namedExportsOrder,ce as default};
