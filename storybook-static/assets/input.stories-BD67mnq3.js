import{r as i,R as e}from"./index-DpTt3J-R.js";import{L as ae}from"./index-BCk3_L7_.js";import{o as le,I as R,k as te,E as ne,l as re}from"./index-C_GYH-13.js";import{I as se}from"./index-BVwmS4AQ.js";/* empty css              */import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utilities-CP3_-lCt.js";/* empty css               */const t=({label:a,helperLink:$,helperText:K,disabled:m=!1,placeholder:Z,isRequired:p,isOptional:D,helpTextIcon:f=R,showPrefixIcon:x=!1,prefixIcon:h,prefixValue:c,defaultValue:O="",shortcutKey:g,suffixIcon:y,bankLogoIcon:b,showSuffixButton:v,showValidation:P,isValid:V=l=>!0,errorText:W,successText:j,onChange:C=l=>{},onFocus:A=()=>{},onBlur:G=()=>{},size:n,id:J})=>{const[l,q]=i.useState(O),[r,I]=i.useState(!0),[T,w]=i.useState(!1);i.useEffect(()=>{C(l)},[l,C]);const Q=()=>{},U=ee=>{const N=ee.target.value;q(N),I(V(N)),w(!0)},X=()=>{I(V(l)),T||w(!0)},s=T&&P&&(l||p),E=s?r?j:W:K,Y=`
    w-full border border-solid py-2 px-3 rounded-25 mb-1 flex justify-between items-center focus-within:plum-focus
    ${m?"bg-surface-background-gray-muted":"bg-surface-background-white-normal"}
    ${s?r?"border-feedback-border-positive-intense":"border-feedback-border-negative-intense":"border-surface-border-gray-highlighted"}
    hover:bg-surface-background-gray-subtle hover:children:bg-surface-background-gray-subtle
  `;return e.createElement("div",{className:"w-full font-primary",onBlur:G,onFocus:A},e.createElement("div",{className:"flex justify-between mb-1 px-1"},a&&e.createElement("div",{className:"flex text-sm"},e.createElement("div",{className:"text-surface-text-gray-subtle font-semibold"},a),p?e.createElement("div",{className:"text-feedback-text-negative-intense ml-05"},"*"):D?e.createElement("div",{className:"text-feedback-text-neutral-muted ml-05"},"(Optional)"):null),$&&e.createElement(ae,{state:"primary",label:"Link",size:n==="medium"?"small":"medium"})),e.createElement("div",{className:Y},x&&e.createElement(h,{size:n,className:"fill-interactive-icon-gray-subtle"}),c&&e.createElement("span",{className:`font-primary text-sm font-normal text-surface-text-gray-subtle ml-${x?3:0}`},c),e.createElement("input",{className:`ml-${c||h?15:0} focus-visible:outline-none placeholder-gray-400 text-surface-text-gray-normal bg-inherit font-normal font-primary text-sm ${v&&l?"w-[calc(100%-24px)]":"w-full"}`,id:J||"input-field-main",disabled:m,placeholder:Z,value:l,onFocus:Q,onChange:U,onBlur:X}),b&&e.createElement("div",{className:"mr-2"},e.createElement("img",{src:b,className:"w-4 h-4",alt:"Bank Logo"})),g&&e.createElement("div",{className:"flex items-center"},e.createElement(le,{size:n==="medium"?"extraSmall":"medium"}),e.createElement("div",{className:"text-surface-text-gray-muted text-xs font-medium overflow-ellipsis ml-05"},g)),y&&e.createElement("div",{className:`${l?"mx-2":"ml-2"}`},e.createElement(y,{size:n,className:"fill-interactive-icon-gray-muted"})),v&&l&&e.createElement(se,{size:n,color:"gray",onClick:()=>q("")})),e.createElement("div",{className:"flex justify-between mb-1 px-1"},E&&e.createElement("div",{className:"flex items-center"},s?r?e.createElement(te,{size:"small",className:"fill-feedback-icon-positive-intense mr-1"}):e.createElement(ne,{size:"small",className:"fill-feedback-icon-negative-intense mr-1"}):f&&e.createElement(f,{size:n==="large"?"medium":"small",className:"fill-feedback-icon-neutral-muted mr-1"}),e.createElement("div",{className:`text-xs font-medium ${s?r?"text-feedback-text-positive-intense":"text-feedback-text-negative-intense":"text-feedback-text-neutral-muted"}`},E))))};try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperLink:{defaultValue:null,description:"",name:"helperLink",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isOptional:{defaultValue:null,description:"",name:"isOptional",required:!1,type:{name:"boolean"}},helpTextIcon:{defaultValue:{value:`({
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
}`},description:"",name:"helpTextIcon",required:!1,type:{name:"FC<{}>"}},showPrefixIcon:{defaultValue:{value:"false"},description:"",name:"showPrefixIcon",required:!1,type:{name:"boolean"}},prefixIcon:{defaultValue:null,description:"",name:"prefixIcon",required:!1,type:{name:"FC<{}>"}},prefixValue:{defaultValue:null,description:"",name:"prefixValue",required:!1,type:{name:"string"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"string"}},shortcutKey:{defaultValue:null,description:"",name:"shortcutKey",required:!1,type:{name:"string"}},suffixIcon:{defaultValue:null,description:"",name:"suffixIcon",required:!1,type:{name:"FC<{}>"}},bankLogoIcon:{defaultValue:null,description:"",name:"bankLogoIcon",required:!1,type:{name:"string"}},showSuffixButton:{defaultValue:null,description:"",name:"showSuffixButton",required:!1,type:{name:"boolean"}},showValidation:{defaultValue:null,description:"",name:"showValidation",required:!1,type:{name:"boolean"}},isValid:{defaultValue:{value:"(value) => true"},description:"",name:"isValid",required:!1,type:{name:"(value: any) => boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},successText:{defaultValue:null,description:"",name:"successText",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"(value) => {}"},description:"",name:"onChange",required:!1,type:{name:"(value: any) => void"}},onFocus:{defaultValue:{value:"() => {}"},description:"",name:"onFocus",required:!1,type:{name:"() => void"}},onBlur:{defaultValue:{value:"() => {}"},description:"",name:"onBlur",required:!1,type:{name:"() => void"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperLink:{defaultValue:null,description:"",name:"helperLink",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isOptional:{defaultValue:null,description:"",name:"isOptional",required:!1,type:{name:"boolean"}},helpTextIcon:{defaultValue:{value:`({
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
}`},description:"",name:"helpTextIcon",required:!1,type:{name:"FC<{}>"}},showPrefixIcon:{defaultValue:{value:"false"},description:"",name:"showPrefixIcon",required:!1,type:{name:"boolean"}},prefixIcon:{defaultValue:null,description:"",name:"prefixIcon",required:!1,type:{name:"FC<{}>"}},prefixValue:{defaultValue:null,description:"",name:"prefixValue",required:!1,type:{name:"string"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"string"}},shortcutKey:{defaultValue:null,description:"",name:"shortcutKey",required:!1,type:{name:"string"}},suffixIcon:{defaultValue:null,description:"",name:"suffixIcon",required:!1,type:{name:"FC<{}>"}},bankLogoIcon:{defaultValue:null,description:"",name:"bankLogoIcon",required:!1,type:{name:"string"}},showSuffixButton:{defaultValue:null,description:"",name:"showSuffixButton",required:!1,type:{name:"boolean"}},showValidation:{defaultValue:null,description:"",name:"showValidation",required:!1,type:{name:"boolean"}},isValid:{defaultValue:{value:"(value) => true"},description:"",name:"isValid",required:!1,type:{name:"(value: any) => boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},successText:{defaultValue:null,description:"",name:"successText",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"(value) => {}"},description:"",name:"onChange",required:!1,type:{name:"(value: any) => void"}},onFocus:{defaultValue:{value:"() => {}"},description:"",name:"onFocus",required:!1,type:{name:"() => void"}},onBlur:{defaultValue:{value:"() => {}"},description:"",name:"onBlur",required:!1,type:{name:"() => void"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const he={title:"Design System/Input",component:t,parameters:{layout:"centered",docs:{description:{component:"A versatile input component with validation states, helper text, and various configurations."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the input"},label:{control:{type:"text"},description:"The label for the input"},placeholder:{control:{type:"text"},description:"Placeholder text"},helperText:{control:{type:"text"},description:"Helper text below the input"},disabled:{control:{type:"boolean"},description:"Whether the input is disabled"},isRequired:{control:{type:"boolean"},description:"Whether the input is required"},showValidation:{control:{type:"boolean"},description:"Whether to show validation state"}},args:{size:"medium",label:"Email",placeholder:"Enter your email",helperText:"We will never share your email",disabled:!1,isRequired:!1,showValidation:!1}},o={args:{size:"medium",label:"Email",placeholder:"Enter your amount",helperText:"We will never share your bank balance",onChange:a=>{console.log(a)},prefixIcon:re,showPrefixIcon:!0,prefixValue:"$",suffixIcon:R,showSuffixIcon:!0,suffixValue:"/-",showSuffixButton:!0,shortcutKey:"K",width:"100%"}},u={render:a=>e.createElement("div",{className:"space-y-4 w-80"},e.createElement(t,{...a,size:"medium",label:"Medium Input (no validation)",placeholder:"Enter text...",helperText:"Helper text",disabled:!1,isRequired:!1,showValidation:!1,errorText:"Error Text",successText:"Success Text",onChange:()=>{},onBlur:()=>{},onFocus:()=>{}}),e.createElement(t,{...a,size:"medium",label:"Medium Input (valid)",placeholder:"Enter text...",helperText:"Helper text",disabled:!1,isRequired:!1,showValidation:!0,errorText:"Error Text",successText:"Success Text",onChange:()=>{},onBlur:()=>{},onFocus:()=>{},isValid:()=>!0}),e.createElement(t,{...a,size:"large",label:"Large Input (invalid)",placeholder:"Enter text...",helperText:"Helper text",disabled:!1,isRequired:!1,showValidation:!0,errorText:"Error Text",successText:"Success Text",onChange:()=>{},onBlur:()=>{},onFocus:()=>{},isValid:()=>!1})),args:{placeholder:"Enter text...",onChange:a=>{console.log(a)}}},d={args:{size:"medium",label:"Disabled Input",placeholder:"This input is disabled",disabled:!0,helperText:"This input cannot be edited"}};var z,k,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var B,F,_;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(_=(F=u.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var H,M,L;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    helperText: 'This input cannot be edited'
  }
}`,...(L=(M=d.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};const ge=["Default","AllSizes","Disabled"];export{u as AllSizes,o as Default,d as Disabled,ge as __namedExportsOrder,he as default};
