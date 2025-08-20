import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{c as b}from"./clsx-B-dksMZM.js";import{n as E}from"./index-BdKfWn55.js";/* empty css              */import{r as I}from"./index-DpTt3J-R.js";/* empty css               */const y=({label:e,description:t,labelPosition:c,styleVariant:o,disabled:n,size:s})=>a.jsxs("div",{className:`${c==="left"?"mr-2":"ml-2"}`,children:[e&&a.jsx("div",{className:`text-interactive-text-${o}-${n?"disabled":"normal"} text-${s==="small"?"sm":"base"} font-medium`,children:e}),t&&a.jsx("div",{className:`text-interactive-text-${o}-${n?"disabled":"subtle"} text-${s==="small"?"xs":"sm"} font-normal`,children:t})]}),r=({checked:e=!1,onChange:t=f=>{},label:c,description:o,labelPosition:n="left",styleVariant:s,disabled:i=!1,size:l="medium"})=>{const f=()=>{i||t(!e)};return a.jsxs("div",{className:`flex font-primary ${i?"":"cursor-pointer"}`,onClick:f,children:[n==="left"&&a.jsx(y,{label:c,description:o,labelPosition:n,styleVariant:s,disabled:i,size:l}),a.jsx("div",{children:a.jsx("button",{type:"button",role:"switch","aria-checked":e,className:b(`relative inline-flex p-1 py-05 w-${l==="medium"?"9":"7"} flex-shrink-0 cursor-pointer rounded-8 border border-interactive-border-${e?"primary-normal":s==="gray"?`gray-${i?"disabled":"intense"}`:`beige-${i?"disabled":"normal"}`} transition-colors transition-switch`,e?`bg-interactive-background-primary-${i?"disabled":"normal"}`:"",`${i?"":e?"hover:bg-interactive-background-primary-highlighted":`hover:bg-interactive-background-${s}-muted`}`,"focus:outline-none focus:ring-offset-2 focus:ring-interactive-border-primary-normal"),disabled:i,children:a.jsx("div",{className:b(`pointer-events-none inline-block h-${l==="small"?"25":"3"} w-${l==="small"?"25":"3"} transform rounded-8 shadow ring-0 transition duration-200 ease-in-out`,e?`transform-switch-checked-${l} bg-surface-background-white-normal`:s==="gray"?`transform-switch-unchecked bg-interactive-icon-gray-${i?"disabled":"subtle"}`:`transform-switch-unchecked bg-interactive-icon-beige-${i?"disabled":"muted"}`),children:e?a.jsx(E,{size:l==="medium"?"extraSmall":"doubleExtraSmall",className:`fill-interactive-icon-primary-${i?"disabled":"normal"}`}):""})})}),n==="right"&&a.jsx(y,{label:c,description:o,labelPosition:n,styleVariant:s,disabled:i,size:l})]})};try{r.displayName="ToggleSwitch",r.__docgenInfo={description:"",displayName:"ToggleSwitch",props:{checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"(checked) => {}"},description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}},styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"gray"'},{value:'"beige"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},labelPosition:{defaultValue:{value:"left"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}}}}}catch{}const H={title:"Design System/Switch",component:r,parameters:{layout:"centered",docs:{description:{component:"A switch component for toggling between two states."}}},tags:["autodocs"],argTypes:{styleVariant:{control:{type:"select"},options:["beige","gray"],description:"The style variant of the switch"},checked:{control:{type:"boolean"},description:"Whether the switch is checked"},disabled:{control:{type:"boolean"},description:"Whether the switch is disabled"}},args:{styleVariant:"beige",checked:!1,disabled:!1,onChange:e=>console.log("Switch toggled:",e)}},d={args:{styleVariant:"beige",checked:!1,disabled:!1,label:"Beige",labelPosition:"left",description:"Beige Description"}},m={args:{styleVariant:"beige",checked:!0,disabled:!1,label:"Beige",labelPosition:"left",description:"Beige Description"}},u={args:{styleVariant:"beige",checked:!1,disabled:!0}},g={args:{styleVariant:"beige",checked:!0,disabled:!0}},p={render:e=>a.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[a.jsx(r,{...e,styleVariant:"beige",checked:!1,onChange:()=>{},size:"medium",label:"Beige",labelPosition:"left",description:"Beige Description"}),a.jsx(r,{...e,styleVariant:"beige",checked:!1,onChange:()=>{},size:"medium",label:"Beige",labelPosition:"right",description:"Beige Description"}),a.jsx(r,{...e,styleVariant:"gray",checked:!1,onChange:()=>{},size:"medium",label:"Gray",labelPosition:"left",description:"Gray Description"}),a.jsx(r,{...e,styleVariant:"gray",checked:!1,onChange:()=>{},size:"medium",label:"Gray",labelPosition:"right",description:"Gray Description"})]}),args:{checked:!1,disabled:!1}},h={render:e=>{const[t,c]=I.useState(!1);return a.jsx("div",{className:"space-y-4",children:a.jsx(r,{...e,checked:t,onChange:()=>c(!t),size:"medium",label:"Beige",labelPosition:"left",description:"Beige Description"})})},args:{styleVariant:"beige",disabled:!1}};var v,k,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    styleVariant: 'beige',
    checked: false,
    disabled: false,
    label: 'Beige',
    labelPosition: 'left',
    description: 'Beige Description'
  }
}`,...(x=(k=d.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var V,w,S;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    styleVariant: 'beige',
    checked: true,
    disabled: false,
    label: 'Beige',
    labelPosition: 'left',
    description: 'Beige Description'
  }
}`,...(S=(w=m.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,D,$;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    styleVariant: 'beige',
    checked: false,
    disabled: true
  }
}`,...($=(D=u.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var B,j,N;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    styleVariant: 'beige',
    checked: true,
    disabled: true
  }
}`,...(N=(j=g.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var P,_,q;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4 items-center">
      <Switch {...args} styleVariant="beige" checked={false} onChange={() => {}} size="medium" label="Beige" labelPosition="left" description="Beige Description" />
      <Switch {...args} styleVariant="beige" checked={false} onChange={() => {}} size="medium" label="Beige" labelPosition="right" description="Beige Description" />
      <Switch {...args} styleVariant="gray" checked={false} onChange={() => {}} size="medium" label="Gray" labelPosition="left" description="Gray Description" />
      <Switch {...args} styleVariant="gray" checked={false} onChange={() => {}} size="medium" label="Gray" labelPosition="right" description="Gray Description" />
    </div>,
  args: {
    checked: false,
    disabled: false
  }
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var G,z,T;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <div className="space-y-4">
        <Switch {...args} checked={checked} onChange={() => setChecked(!checked)} size="medium" label="Beige" labelPosition="left" description="Beige Description" />
      </div>;
  },
  args: {
    styleVariant: 'beige',
    disabled: false
  }
}`,...(T=(z=h.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};const J=["Default","Checked","Disabled","DisabledChecked","AllVariants","Interactive"];export{p as AllVariants,m as Checked,d as Default,u as Disabled,g as DisabledChecked,h as Interactive,J as __namedExportsOrder,H as default};
