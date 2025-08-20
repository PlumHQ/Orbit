import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as t,R as D}from"./index-DpTt3J-R.js";import{L as Ce}from"./index-C-noe4nq.js";import{j as Te,I as ke,k as qe,E as je,U as h,l as w}from"./index-BdKfWn55.js";/* empty css              */import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utilities-CP3_-lCt.js";/* empty css                *//* empty css               */const O=({label:I,helperLink:re,helperText:se,disabled:C=!1,placeholder:oe,isRequired:z,isOptional:ie,helpTextIcon:E=ke,defaultValue:ce="",prefixIcon:T,showValidation:ue,prefixValue:L="",isValid:M=l=>!0,errorText:de,successText:pe,onChange:k=l=>{},onFocus:me=()=>{},onBlur:fe=()=>{},size:u,id:xe,options:s=[],searchable:c=!1,onSelect:be=()=>{}})=>{const[l,R]=t.useState(ce),[x,F]=t.useState(!0),[_,$]=t.useState(!1),[r,o]=t.useState(!1),[d,q]=t.useState(s),[p,he]=t.useState(null),[j,i]=t.useState(-1),N=t.useRef(null),H=t.useRef(null);t.useEffect(()=>{k(l)},[l,k]),t.useEffect(()=>{q(s)},[s]),t.useEffect(()=>{if(c&&r){const e=s.filter(n=>n.label.toLowerCase().includes(l.toLowerCase()));q(e)}else q(s)},[l,s,c,r]),t.useEffect(()=>{const e=n=>{N.current&&!N.current.contains(n.target)&&(o(!1),i(-1))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const ge=()=>{me()},ye=e=>{const n=e.target.value;R(n),F(M(n)),$(!0),c&&s.length>0&&o(!0)},ve=()=>{F(M(l)),_||$(!0),fe()},Ve=()=>{C||s.length===0||(o(!r),i(-1))},B=e=>{he(e),R(e.label),o(!1),i(-1),be(e),k(e.value)},Se=e=>{var n;if(s.length!==0)switch(e.key){case"ArrowDown":e.preventDefault(),r?i(m=>m<d.length-1?m+1:0):o(!0);break;case"ArrowUp":e.preventDefault(),r&&i(m=>m>0?m-1:d.length-1);break;case"Enter":e.preventDefault(),r&&j>=0?B(d[j]):r||o(!0);break;case"Escape":e.preventDefault(),o(!1),i(-1),(n=H.current)==null||n.blur();break;case"Tab":o(!1),i(-1);break}},we=p?p.label:l,b=_&&ue&&(l||z),W=b?x?pe:de:se,Ie=`
    w-full border border-solid py-2 px-3 rounded-25 mb-1 flex justify-between items-center focus-within:plum-focus cursor-pointer relative
    ${C?"bg-surface-background-gray-muted cursor-not-allowed":"bg-surface-background-white-normal"}
    ${b?x?"border-feedback-border-positive-intense":"border-feedback-border-negative-intense":r?"border-surface-border-gray-highlighted ring-2 ring-blue-100":"border-surface-border-gray-highlighted"}
    hover:bg-surface-background-gray-subtle hover:children:bg-surface-background-gray-subtle
  `;return a.jsxs("div",{className:"w-full font-primary relative",ref:N,children:[a.jsxs("div",{className:"flex justify-between mb-1 px-1",children:[I&&a.jsxs("div",{className:`flex text-${u==="medium"?"xs":"sm"}`,children:[a.jsx("div",{className:"text-surface-text-gray-subtle font-semibold",children:I}),z?a.jsx("div",{className:"text-feedback-text-negative-intense ml-05",children:"*"}):ie?a.jsx("div",{className:"text-feedback-text-neutral-muted ml-05",children:"(Optional)"}):null]}),re&&a.jsx(Ce,{state:"primary",label:"Link",size:u==="medium"?"small":"medium"})]}),a.jsxs("div",{className:Ie,onClick:Ve,children:[T&&D.createElement(T,{size:u,className:"fill-interactive-icon-gray-subtle"}),L&&a.jsx("span",{className:`font-primary text-sm font-normal text-surface-text-gray-subtle ml-${T?15:0}`,children:L}),a.jsx("input",{ref:H,className:`ml-15 focus-visible:outline-none placeholder-gray-400 text-surface-text-gray-normal bg-inherit font-normal font-primary text-sm w-full ${c?"":"cursor-pointer"}`,id:xe||"input-field-main",disabled:C,placeholder:oe,value:c?l:we,onFocus:ge,onChange:c?ye:void 0,onBlur:ve,onKeyDown:Se,readOnly:!c}),a.jsx("div",{className:`${l?"mx-2":"ml-2"}`,children:a.jsx(Te,{className:`fill-interactive-icon-gray-muted transition-transform duration-200 ${r?"rotate-180":""}`,size:u})})]}),a.jsx("div",{className:"flex justify-between mb-1 px-1",children:W&&a.jsxs("div",{className:"flex items-center",children:[b?x?a.jsx(qe,{size:"small",className:"fill-feedback-icon-positive-intense mr-1"}):a.jsx(je,{size:"small",className:"fill-feedback-icon-negative-intense mr-1"}):E&&D.createElement(E,{size:u==="large"?"medium":"small",className:"fill-feedback-icon-neutral-muted mr-1"}),a.jsx("div",{className:`text-xs font-medium ${b?x?"text-feedback-text-positive-intense":"text-feedback-text-negative-intense":"text-feedback-text-neutral-muted"}`,children:W})]})}),r&&d.length>0&&a.jsx("div",{className:"absolute dropdown-shadow z-50 w-full rounded-3 mt-2 bg-surface-background-white-normal rounded-lg max-h-60 overflow-y-auto p-2",children:d.map((e,n)=>a.jsxs("div",{className:`flex items-center px-15 py-2 cursor-pointer hover:bg-surface-background-gray-subtle transition-colors ${n===j?"bg-surface-background-gray-subtle":""} ${(p==null?void 0:p.value)===e.value?"bg-blue-50 text-blue-700":"text-surface-text-gray-normal"}`,onClick:()=>B(e),onMouseEnter:()=>i(n),children:[e.icon&&a.jsx("div",{className:"mr-1",children:D.createElement(e.icon,{size:"medium",className:"fill-interactive-icon-gray-subtle"})}),a.jsx("span",{className:"font-primary text-sm font-medium text-interactive-text-gray-normal",children:e.label})]},e.value))})]})};try{O.displayName="InputSelect",O.__docgenInfo={description:"",displayName:"InputSelect",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},helperLink:{defaultValue:null,description:"",name:"helperLink",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isOptional:{defaultValue:null,description:"",name:"isOptional",required:!1,type:{name:"boolean | undefined"}},helpTextIcon:{defaultValue:{value:`({
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
}`},description:"",name:"helpTextIcon",required:!1,type:{name:"FC<{}> | undefined"}},prefixIcon:{defaultValue:null,description:"",name:"prefixIcon",required:!1,type:{name:"FC<{}> | undefined"}},prefixValue:{defaultValue:{value:""},description:"",name:"prefixValue",required:!1,type:{name:"string | undefined"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean | undefined"}},defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"string | undefined"}},showValidation:{defaultValue:null,description:"",name:"showValidation",required:!1,type:{name:"boolean | undefined"}},isValid:{defaultValue:{value:"(value: string) => true"},description:"",name:"isValid",required:!1,type:{name:"((value: any) => boolean) | undefined"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string | undefined"}},successText:{defaultValue:null,description:"",name:"successText",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:{value:"(value: string) => {}"},description:"",name:"onChange",required:!1,type:{name:"((value: any) => void) | undefined"}},onFocus:{defaultValue:{value:"() => {}"},description:"",name:"onFocus",required:!1,type:{name:"(() => void) | undefined"}},onBlur:{defaultValue:{value:"() => {}"},description:"",name:"onBlur",required:!1,type:{name:"(() => void) | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"ISelectOption[] | undefined"}},searchable:{defaultValue:{value:"false"},description:"",name:"searchable",required:!1,type:{name:"boolean | undefined"}},onSelect:{defaultValue:{value:"() => {}"},description:"",name:"onSelect",required:!1,type:{name:"((option: ISelectOption) => void) | undefined"}}}}}catch{}const $e={title:"Design System/InputSelect",component:O,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["medium","large"]},searchable:{control:{type:"boolean"}},options:{control:{type:"object"}},onSelect:{action:"onSelect"},onFocus:{action:"onFocus"},onBlur:{action:"onBlur"},onChange:{action:"onChange"},label:{control:{type:"text"}},placeholder:{control:{type:"text"}},helperText:{control:{type:"text"}},helperLink:{control:{type:"text"}},isRequired:{control:{type:"boolean"}},isOptional:{control:{type:"boolean"}},helpTextIcon:{control:{type:"object"}},prefixIcon:{control:{type:"object"}},prefixValue:{control:{type:"text"}},isValidated:{control:{type:"boolean"}},defaultValue:{control:{type:"text"}},showValidation:{control:{type:"boolean"}},isValid:{control:{type:"boolean"}},errorText:{control:{type:"text"}},successText:{control:{type:"text"}},disabled:{control:{type:"boolean"}},id:{control:{type:"text"}}}},f=[{value:"option1",label:"Dropdown Menu Item Text",icon:h},{value:"option2",label:"Dropdown Menu Item Text",icon:h},{value:"option3",label:"Dropdown Menu Item Text",icon:h},{value:"option4",label:"Dropdown Menu Item Text",icon:h}],g={args:{size:"large",placeholder:"Select",label:"Label",helperText:"Help text",prefixIcon:w,prefixValue:"₹",options:f,searchable:!1}},y={args:{size:"medium",placeholder:"Select",label:"Label",helperText:"Help text",prefixIcon:w,prefixValue:"₹",options:f,searchable:!1}},v={args:{size:"large",placeholder:"Type to search...",label:"Searchable Select",helperText:"Type to filter options",prefixIcon:w,options:f,searchable:!0}},V={args:{size:"large",placeholder:"Select",label:"Required Field",isRequired:!0,showValidation:!0,errorText:"This field is required",successText:"Selection valid",options:f}},S={args:{size:"large",placeholder:"Select",label:"Disabled",disabled:!0,prefixIcon:w,prefixValue:"₹",options:f,searchable:!1}};var Z,U,A;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: 'large',
    placeholder: 'Select',
    label: 'Label',
    helperText: 'Help text',
    prefixIcon: SearchIcon,
    prefixValue: '₹',
    options: sampleOptions,
    searchable: false
  }
}`,...(A=(U=g.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var K,G,J;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    placeholder: 'Select',
    label: 'Label',
    helperText: 'Help text',
    prefixIcon: SearchIcon,
    prefixValue: '₹',
    options: sampleOptions,
    searchable: false
  }
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var P,Q,X;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'large',
    placeholder: 'Type to search...',
    label: 'Searchable Select',
    helperText: 'Type to filter options',
    prefixIcon: SearchIcon,
    options: sampleOptions,
    searchable: true
  }
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,ae;V.parameters={...V.parameters,docs:{...(Y=V.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: 'large',
    placeholder: 'Select',
    label: 'Required Field',
    isRequired: true,
    showValidation: true,
    errorText: 'This field is required',
    successText: 'Selection valid',
    options: sampleOptions
  }
}`,...(ae=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,le;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    size: 'large',
    placeholder: 'Select',
    label: 'Disabled',
    disabled: true,
    prefixIcon: SearchIcon,
    prefixValue: '₹',
    options: sampleOptions,
    searchable: false
  }
}`,...(le=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const He=["Large","Medium","SearchableDropdown","WithValidation","WithDisabled"];export{g as Large,y as Medium,v as SearchableDropdown,S as WithDisabled,V as WithValidation,He as __namedExportsOrder,$e as default};
