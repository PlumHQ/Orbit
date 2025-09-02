import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as n,R as N}from"./index-DpTt3J-R.js";import{L as ce}from"./index-J7nU_OMq.js";import{m as ue,I as de,n as pe,b as me,U as x,o as V}from"./index-DGR86Cth.js";/* empty css              */import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./utilities-DX5EtrsU.js";import"./bundle-mjs-C8PyMnuF.js";/* empty css                *//* empty css               */const O=({label:S,helperLink:W,helperText:Z,disabled:w=!1,placeholder:U,isRequired:D,isOptional:A,helpTextIcon:z=de,defaultValue:K="",prefixIcon:I,showValidation:G,prefixValue:E="",isValid:L=l=>!0,errorText:J,successText:P,onChange:C=l=>{},onFocus:Q=()=>{},onBlur:X=()=>{},size:u,id:Y,options:s=[],searchable:c=!1,onSelect:ee=()=>{}})=>{const[l,M]=n.useState(K),[m,R]=n.useState(!0),[F,_]=n.useState(!1),[r,o]=n.useState(!1),[d,T]=n.useState(s),[q,ae]=n.useState(null),[k,i]=n.useState(-1),j=n.useRef(null),$=n.useRef(null);n.useEffect(()=>{C(l)},[l,C]),n.useEffect(()=>{T(s)},[s]),n.useEffect(()=>{if(c&&r){const e=s.filter(t=>t.label.toLowerCase().includes(l.toLowerCase()));T(e)}else T(s)},[l,s,c,r]),n.useEffect(()=>{const e=t=>{j.current&&!j.current.contains(t.target)&&(o(!1),i(-1))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const te=()=>{Q()},ne=e=>{const t=e.target.value;M(t),R(L(t)),_(!0),c&&s.length>0&&o(!0)},le=()=>{R(L(l)),F||_(!0),X()},re=()=>{w||s.length===0||(o(!r),i(-1))},H=e=>{ae(e),M(e.label),o(!1),i(-1),ee(e),C(e.value)},se=e=>{if(s.length!==0)switch(e.key){case"ArrowDown":e.preventDefault(),r?i(t=>t<d.length-1?t+1:0):o(!0);break;case"ArrowUp":e.preventDefault(),r&&i(t=>t>0?t-1:d.length-1);break;case"Enter":e.preventDefault(),r&&k>=0?H(d[k]):r||o(!0);break;case"Escape":e.preventDefault(),o(!1),i(-1),$.current?.blur();break;case"Tab":o(!1),i(-1);break}},oe=q?q.label:l,f=F&&G&&(l||D),B=f?m?P:J:Z,ie=`
    w-full border border-solid py-2 px-3 rounded-25 mb-1 flex justify-between items-center focus-within:plum-focus cursor-pointer relative
    ${w?"bg-surface-background-gray-muted cursor-not-allowed":"bg-surface-background-white-normal"}
    ${f?m?"border-feedback-border-positive-intense":"border-feedback-border-negative-intense":r?"border-surface-border-gray-highlighted ring-2 ring-blue-100":"border-surface-border-gray-highlighted"}
    hover:bg-surface-background-gray-subtle hover:children:bg-surface-background-gray-subtle
  `;return a.jsxs("div",{className:"w-full font-primary relative",ref:j,children:[a.jsxs("div",{className:"flex justify-between mb-1 px-1",children:[S&&a.jsxs("div",{className:`flex text-${u==="medium"?"xs":"sm"}`,children:[a.jsx("div",{className:"text-surface-text-gray-subtle font-semibold",children:S}),D?a.jsx("div",{className:"text-feedback-text-negative-intense ml-05",children:"*"}):A?a.jsx("div",{className:"text-feedback-text-neutral-muted ml-05",children:"(Optional)"}):null]}),W&&a.jsx(ce,{state:"primary",label:"Link",size:u==="medium"?"small":"medium"})]}),a.jsxs("div",{className:ie,onClick:re,children:[I&&N.createElement(I,{size:u,className:"fill-interactive-icon-gray-subtle"}),E&&a.jsx("span",{className:`font-primary text-sm font-normal text-surface-text-gray-subtle ml-${I?15:0}`,children:E}),a.jsx("input",{ref:$,className:`ml-15 focus-visible:outline-none placeholder-gray-400 text-surface-text-gray-normal bg-inherit font-normal font-primary text-sm w-full ${c?"":"cursor-pointer"}`,id:Y||"input-field-main",disabled:w,placeholder:U,value:c?l:oe,onFocus:te,onChange:c?ne:void 0,onBlur:le,onKeyDown:se,readOnly:!c}),a.jsx("div",{className:`${l?"mx-2":"ml-2"}`,children:a.jsx(ue,{className:`fill-interactive-icon-gray-muted transition-transform duration-200 ${r?"rotate-180":""}`,size:u})})]}),a.jsx("div",{className:"flex justify-between mb-1 px-1",children:B&&a.jsxs("div",{className:"flex items-center",children:[f?m?a.jsx(pe,{size:"small",className:"fill-feedback-icon-positive-intense mr-1"}):a.jsx(me,{size:"small",className:"fill-feedback-icon-negative-intense mr-1"}):z&&N.createElement(z,{size:u==="large"?"medium":"small",className:"fill-feedback-icon-neutral-muted mr-1"}),a.jsx("div",{className:`text-xs font-medium ${f?m?"text-feedback-text-positive-intense":"text-feedback-text-negative-intense":"text-feedback-text-neutral-muted"}`,children:B})]})}),r&&d.length>0&&a.jsx("div",{className:"absolute dropdown-shadow z-50 w-full rounded-3 mt-2 bg-surface-background-white-normal rounded-lg max-h-60 overflow-y-auto p-2",children:d.map((e,t)=>a.jsxs("div",{className:`flex items-center px-15 py-2 cursor-pointer hover:bg-surface-background-gray-subtle transition-colors ${t===k?"bg-surface-background-gray-subtle":""} ${q?.value===e.value?"bg-blue-50 text-blue-700":"text-surface-text-gray-normal"}`,onClick:()=>H(e),onMouseEnter:()=>i(t),children:[e.icon&&a.jsx("div",{className:"mr-1",children:N.createElement(e.icon,{size:"medium",className:"fill-interactive-icon-gray-subtle"})}),a.jsx("span",{className:"font-primary text-sm font-medium text-interactive-text-gray-normal",children:e.label})]},e.value))})]})};try{O.displayName="InputSelect",O.__docgenInfo={description:"",displayName:"InputSelect",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},helperLink:{defaultValue:null,description:"",name:"helperLink",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isOptional:{defaultValue:null,description:"",name:"isOptional",required:!1,type:{name:"boolean | undefined"}},helpTextIcon:{defaultValue:{value:`({
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
}`},description:"",name:"helpTextIcon",required:!1,type:{name:"FC<{}> | undefined"}},prefixIcon:{defaultValue:null,description:"",name:"prefixIcon",required:!1,type:{name:"FC<{}> | undefined"}},prefixValue:{defaultValue:{value:""},description:"",name:"prefixValue",required:!1,type:{name:"string | undefined"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean | undefined"}},defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"string | undefined"}},showValidation:{defaultValue:null,description:"",name:"showValidation",required:!1,type:{name:"boolean | undefined"}},isValid:{defaultValue:{value:"(value: string) => true"},description:"",name:"isValid",required:!1,type:{name:"((value: any) => boolean) | undefined"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string | undefined"}},successText:{defaultValue:null,description:"",name:"successText",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:{value:"(value: string) => {}"},description:"",name:"onChange",required:!1,type:{name:"((value: any) => void) | undefined"}},onFocus:{defaultValue:{value:"() => {}"},description:"",name:"onFocus",required:!1,type:{name:"(() => void) | undefined"}},onBlur:{defaultValue:{value:"() => {}"},description:"",name:"onBlur",required:!1,type:{name:"(() => void) | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"ISelectOption[] | undefined"}},searchable:{defaultValue:{value:"false"},description:"",name:"searchable",required:!1,type:{name:"boolean | undefined"}},onSelect:{defaultValue:{value:"() => {}"},description:"",name:"onSelect",required:!1,type:{name:"((option: ISelectOption) => void) | undefined"}}}}}catch{}const Ce={title:"Design System/InputSelect",component:O,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["medium","large"]},searchable:{control:{type:"boolean"}},options:{control:{type:"object"}},onSelect:{action:"onSelect"},onFocus:{action:"onFocus"},onBlur:{action:"onBlur"},onChange:{action:"onChange"},label:{control:{type:"text"}},placeholder:{control:{type:"text"}},helperText:{control:{type:"text"}},helperLink:{control:{type:"text"}},isRequired:{control:{type:"boolean"}},isOptional:{control:{type:"boolean"}},helpTextIcon:{control:{type:"object"}},prefixIcon:{control:{type:"object"}},prefixValue:{control:{type:"text"}},isValidated:{control:{type:"boolean"}},defaultValue:{control:{type:"text"}},showValidation:{control:{type:"boolean"}},isValid:{control:{type:"boolean"}},errorText:{control:{type:"text"}},successText:{control:{type:"text"}},disabled:{control:{type:"boolean"}},id:{control:{type:"text"}}}},p=[{value:"option1",label:"Dropdown Menu Item Text",icon:x},{value:"option2",label:"Dropdown Menu Item Text",icon:x},{value:"option3",label:"Dropdown Menu Item Text",icon:x},{value:"option4",label:"Dropdown Menu Item Text",icon:x}],b={args:{size:"large",placeholder:"Select",label:"Label",helperText:"Help text",prefixIcon:V,prefixValue:"₹",options:p,searchable:!1}},h={args:{size:"medium",placeholder:"Select",label:"Label",helperText:"Help text",prefixIcon:V,prefixValue:"₹",options:p,searchable:!1}},g={args:{size:"large",placeholder:"Type to search...",label:"Searchable Select",helperText:"Type to filter options",prefixIcon:V,options:p,searchable:!0}},y={args:{size:"large",placeholder:"Select",label:"Required Field",isRequired:!0,showValidation:!0,errorText:"This field is required",successText:"Selection valid",options:p}},v={args:{size:"large",placeholder:"Select",label:"Disabled",disabled:!0,prefixIcon:V,prefixValue:"₹",options:p,searchable:!1}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    placeholder: 'Type to search...',
    label: 'Searchable Select',
    helperText: 'Type to filter options',
    prefixIcon: SearchIcon,
    options: sampleOptions,
    searchable: true
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const Te=["Large","Medium","SearchableDropdown","WithValidation","WithDisabled"];export{b as Large,h as Medium,g as SearchableDropdown,v as WithDisabled,y as WithValidation,Te as __namedExportsOrder,Ce as default};
