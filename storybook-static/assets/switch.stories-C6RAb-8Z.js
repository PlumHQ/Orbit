import{r as t,R as c}from"./index-DpTt3J-R.js";import{c as y}from"./clsx-B-dksMZM.js";import{n as A}from"./index-Z7pS7jLs.js";/* empty css              *//* empty css               */const k=({label:e,description:s,labelPosition:o,styleVariant:d,disabled:n,size:r})=>t.createElement("div",{className:`${o==="left"?"mr-2":"ml-2"}`},e&&t.createElement("div",{className:`text-interactive-text-${d}-${n?"disabled":"normal"} text-${r==="small"?"sm":"base"} font-medium`},e),s&&t.createElement("div",{className:`text-interactive-text-${d}-${n?"disabled":"subtle"} text-${r==="small"?"xs":"sm"} font-normal`},s)),i=({checked:e=!1,onChange:s=b=>{},label:o,description:d,labelPosition:n="left",styleVariant:r,disabled:a=!1,size:l="medium"})=>{const b=()=>{a||s(!e)};return t.createElement("div",{className:`flex font-primary ${a?"":"cursor-pointer"}`,onClick:b},n==="left"&&t.createElement(k,{label:o,description:d,labelPosition:n,styleVariant:r,disabled:a,size:l}),t.createElement("div",null,t.createElement("button",{type:"button",role:"switch","aria-checked":e,className:y(`relative inline-flex p-1 py-05 w-${l==="medium"?"9":"7"} flex-shrink-0 cursor-pointer rounded-8 border border-interactive-border-${e?"primary-normal":r==="gray"?`gray-${a?"disabled":"intense"}`:`beige-${a?"disabled":"normal"}`} transition-colors transition-switch`,e?`bg-interactive-background-primary-${a?"disabled":"normal"}`:"",`${a?"":e?"hover:bg-interactive-background-primary-highlighted":`hover:bg-interactive-background-${r}-muted`}`,"focus:outline-none focus:ring-offset-2 focus:ring-interactive-border-primary-normal"),disabled:a},t.createElement("div",{className:y(`pointer-events-none inline-block h-${l==="small"?"25":"3"} w-${l==="small"?"25":"3"} transform rounded-8 shadow ring-0 transition duration-200 ease-in-out`,e?`transform-switch-checked-${l} bg-surface-background-white-normal`:r==="gray"?`transform-switch-unchecked bg-interactive-icon-gray-${a?"disabled":"subtle"}`:`transform-switch-unchecked bg-interactive-icon-beige-${a?"disabled":"muted"}`)},e?t.createElement(A,{size:l==="medium"?"extraSmall":"doubleExtraSmall",className:`fill-interactive-icon-primary-${a?"disabled":"normal"}`}):""))),n==="right"&&t.createElement(k,{label:o,description:d,labelPosition:n,styleVariant:r,disabled:a,size:l}))};try{i.displayName="ToggleSwitch",i.__docgenInfo={description:"",displayName:"ToggleSwitch",props:{checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"(checked) => {}"},description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}},styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"beige"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},labelPosition:{defaultValue:{value:"left"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}}}}}catch{}const F={title:"Design System/Switch",component:i,parameters:{layout:"centered",docs:{description:{component:"A switch component for toggling between two states."}}},tags:["autodocs"],argTypes:{styleVariant:{control:{type:"select"},options:["beige","gray"],description:"The style variant of the switch"},checked:{control:{type:"boolean"},description:"Whether the switch is checked"},disabled:{control:{type:"boolean"},description:"Whether the switch is disabled"}},args:{styleVariant:"beige",checked:!1,disabled:!1,onChange:e=>console.log("Switch toggled:",e)}},m={args:{styleVariant:"beige",checked:!1,disabled:!1,label:"Beige",labelPosition:"left",description:"Beige Description"}},g={args:{styleVariant:"beige",checked:!0,disabled:!1,label:"Beige",labelPosition:"left",description:"Beige Description"}},u={args:{styleVariant:"beige",checked:!1,disabled:!0}},p={args:{styleVariant:"beige",checked:!0,disabled:!0}},h={render:e=>c.createElement("div",{className:"flex flex-col gap-4 items-center"},c.createElement(i,{...e,styleVariant:"beige",checked:!1,onChange:()=>{},size:"medium",label:"Beige",labelPosition:"left",description:"Beige Description"}),c.createElement(i,{...e,styleVariant:"beige",checked:!1,onChange:()=>{},size:"medium",label:"Beige",labelPosition:"right",description:"Beige Description"}),c.createElement(i,{...e,styleVariant:"gray",checked:!1,onChange:()=>{},size:"medium",label:"Gray",labelPosition:"left",description:"Gray Description"}),c.createElement(i,{...e,styleVariant:"gray",checked:!1,onChange:()=>{},size:"medium",label:"Gray",labelPosition:"right",description:"Gray Description"})),args:{checked:!1,disabled:!1}},f={render:e=>{const[s,o]=t.useState(!1);return c.createElement("div",{className:"space-y-4"},c.createElement(i,{...e,checked:s,onChange:()=>o(!s),size:"medium",label:"Beige",labelPosition:"left",description:"Beige Description"}))},args:{styleVariant:"beige",disabled:!1}};var v,V,w;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    styleVariant: 'beige',
    checked: false,
    disabled: false,
    label: 'Beige',
    labelPosition: 'left',
    description: 'Beige Description'
  }
}`,...(w=(V=m.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var S,C,D;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    styleVariant: 'beige',
    checked: true,
    disabled: false,
    label: 'Beige',
    labelPosition: 'left',
    description: 'Beige Description'
  }
}`,...(D=(C=g.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var $,x,B;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    styleVariant: 'beige',
    checked: false,
    disabled: true
  }
}`,...(B=(x=u.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var E,N,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    styleVariant: 'beige',
    checked: true,
    disabled: true
  }
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var _,q,G;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var z,T,I;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=(T=f.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const H=["Default","Checked","Disabled","DisabledChecked","AllVariants","Interactive"];export{h as AllVariants,g as Checked,m as Default,u as Disabled,p as DisabledChecked,f as Interactive,H as __namedExportsOrder,F as default};
