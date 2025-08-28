import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{c as y}from"./clsx-B-dksMZM.js";import{q as w}from"./index-2-1EQAb5.js";/* empty css              */import{r as V}from"./index-DpTt3J-R.js";/* empty css               */const k=({label:e,description:r,labelPosition:o="left",styleVariant:c,disabled:n,size:t})=>a.jsxs("div",{className:`${o==="left"?"mr-2":"ml-2"}`,children:[e&&a.jsx("div",{className:`text-interactive-text-${c}-${n?"disabled":"normal"} text-${t==="small"?"sm":"base"} font-medium`,children:e}),r&&a.jsx("div",{className:`text-interactive-text-${c}-${n?"disabled":"subtle"} text-${t==="small"?"xs":"sm"} font-normal`,children:r})]}),s=({checked:e=!1,onChange:r=f=>{},label:o,description:c,labelPosition:n="left",styleVariant:t,disabled:i=!1,size:l="medium",tabIndex:v=0})=>{const f=()=>{i||r(!e)},x=b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),f())};return a.jsxs("div",{className:"flex font-primary",children:[n==="left"&&a.jsx(k,{label:o,description:c,labelPosition:n,styleVariant:t,disabled:i,size:l}),a.jsx("div",{children:a.jsx("button",{type:"button",onClick:f,onKeyDown:x,role:"switch","aria-checked":e,tabIndex:i?-1:v,className:y(`relative inline-flex p-1 py-05 w-${l==="medium"?"9":"7"} flex-shrink-0 cursor-pointer rounded-8 border border-interactive-border-${e?"primary-normal":t==="gray"?`gray-${i?"disabled":"intense"}`:`beige-${i?"disabled":"normal"}`} transition-colors transition-switch`,e?`bg-interactive-background-primary-${i?"disabled":"normal"}`:"",`${i?"":e?"hover:bg-interactive-background-primary-highlighted":`hover:bg-interactive-background-${t}-muted`}`,i?"":"focus-visible:plum-focus"),disabled:i,children:a.jsx("div",{className:y(`pointer-events-none inline-block h-${l==="small"?"25":"3"} w-${l==="small"?"25":"3"} transform rounded-8 shadow ring-0 transition duration-200 ease-in-out`,e?`transform-switch-checked-${l} bg-surface-background-white-normal`:t==="gray"?`transform-switch-unchecked bg-interactive-icon-gray-${i?"disabled":"subtle"}`:`transform-switch-unchecked bg-interactive-icon-beige-${i?"disabled":"muted"}`),children:e?a.jsx(w,{size:l==="medium"?"extraSmall":"doubleExtraSmall",className:`fill-interactive-icon-primary-${i?"disabled":"normal"}`}):""})})}),n==="right"&&a.jsx(k,{label:o,description:c,labelPosition:n,styleVariant:t,disabled:i,size:l})]})};try{s.displayName="ToggleSwitch",s.__docgenInfo={description:"",displayName:"ToggleSwitch",props:{checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"(checked: boolean) => {}"},description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}},styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"beige"'},{value:'"gray"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},labelPosition:{defaultValue:{value:"left"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number | undefined"}}}}}catch{}const N={title:"Design System/Switch",component:s,parameters:{layout:"centered",docs:{description:{component:"A switch component for toggling between two states."}}},tags:["autodocs"],argTypes:{styleVariant:{control:{type:"select"},options:["beige","gray"],description:"The style variant of the switch"},checked:{control:{type:"boolean"},description:"Whether the switch is checked"},disabled:{control:{type:"boolean"},description:"Whether the switch is disabled"},labelPosition:{control:{type:"select"},options:["left","right"],description:"The position of the label"},label:{control:{type:"text"},description:"The label of the switch"},description:{control:{type:"text"},description:"The description of the switch"},size:{control:{type:"select"},options:["small","medium"],description:"The size of the switch"}},args:{styleVariant:"beige",checked:!1,disabled:!1,onChange:e=>console.log("Switch toggled:",e)}},d={args:{styleVariant:"beige",checked:!1,disabled:!1,label:"Beige",labelPosition:"left",description:"Beige Description"}},m={args:{styleVariant:"beige",checked:!0,disabled:!1,label:"Beige",labelPosition:"left",description:"Beige Description"}},u={args:{styleVariant:"beige",checked:!1,disabled:!0}},p={args:{styleVariant:"beige",checked:!0,disabled:!0}},g={render:e=>a.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[a.jsx(s,{...e,styleVariant:"beige",checked:!1,onChange:()=>{},size:"medium",label:"Beige",labelPosition:"left",description:"Beige Description"}),a.jsx(s,{...e,styleVariant:"beige",checked:!1,onChange:()=>{},size:"medium",label:"Beige",labelPosition:"right",description:"Beige Description"}),a.jsx(s,{...e,styleVariant:"gray",checked:!1,onChange:()=>{},size:"medium",label:"Gray",labelPosition:"left",description:"Gray Description"}),a.jsx(s,{...e,styleVariant:"gray",checked:!1,onChange:()=>{},size:"medium",label:"Gray",labelPosition:"right",description:"Gray Description"})]}),args:{checked:!1,disabled:!1}},h={render:e=>{const[r,o]=V.useState(!1);return a.jsx("div",{className:"space-y-4",children:a.jsx(s,{...e,checked:r,onChange:()=>o(!r),size:e.size,label:"Beige",labelPosition:"left",description:"Beige Description"})})},args:{styleVariant:"beige",disabled:!1,size:"medium"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    styleVariant: 'beige',
    checked: false,
    disabled: false,
    label: 'Beige',
    labelPosition: 'left',
    description: 'Beige Description'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    styleVariant: 'beige',
    checked: true,
    disabled: false,
    label: 'Beige',
    labelPosition: 'left',
    description: 'Beige Description'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    styleVariant: 'beige',
    checked: false,
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    styleVariant: 'beige',
    checked: true,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <div className="space-y-4">
        <Switch {...args} checked={checked} onChange={() => setChecked(!checked)} size={args.size} label="Beige" labelPosition="left" description="Beige Description" />
      </div>;
  },
  args: {
    styleVariant: 'beige',
    disabled: false,
    size: 'medium'
  }
}`,...h.parameters?.docs?.source}}};const P=["Default","Checked","Disabled","DisabledChecked","AllVariants","Interactive"];export{g as AllVariants,m as Checked,d as Default,u as Disabled,p as DisabledChecked,h as Interactive,P as __namedExportsOrder,N as default};
