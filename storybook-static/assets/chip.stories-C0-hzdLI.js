import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{R as G,r as H}from"./index-DpTt3J-R.js";import{c as J}from"./index-Dp3B9jqt.js";/* empty css              */import{C as x}from"./index--FKSGq1x.js";import{c as K}from"./utilities-WNthGydt.js";import{l as y,m as C,I as P}from"./index-2-1EQAb5.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-CLJs87Zn.js";/* empty css               */const t=({styleVariant:e,size:s,isSelected:f,value:o,onClick:v,iconOnly:a=!1,leadingIcon:l,trailingIcon:c,leadingCounter:b,trailingCounter:S,disabled:r})=>{const[n,L]=G.useState(f),O=J(`flex items-center w-fit rounded-25 px-2 py-${a?2:15} focus-visible:plum-focus
     font-primary font-medium text-interactive-text-${e}-${r?"disabled":"normal"}`,{variants:{styleVariant:{gray:`bg-interactive-background-${n?`${e}-${r?"disabled":"normal"}`:r?"white-disabled":"white-transparent"} 
          border border-interactive-border-gray-${r?"disabled":n?"highlighted":"normal"} ${r?"":`hover:bg-interactive-background-gray-muted 
            focus-visible:bg-interactive-background-gray-muted`}`,beige:`bg-interactive-background-${n?`${e}-${r?"disabled":"normal"}`:"white-transparent"} 
          border border-interactive-border-beige-${r?"disabled":n?"normal":"subtle"} ${r?"":`hover:bg-interactive-background-beige-muted 
            focus-visible:bg-interactive-background-beige-muted`}`},size:{small:"text-sm",medium:"text-base"}}}),B=()=>{L(!n),v(o)};return i.jsxs("button",{onClick:B,className:K(O({styleVariant:e,size:s})),disabled:r,children:[i.jsx("div",{children:l&&l({size:s==="medium"?"large":"medium",className:`fill-interactive-icon-${e}-${r?"disabled":"subtle"} mr-${a?"0":"1"}`})}),!a&&i.jsxs(i.Fragment,{children:[n&&b&&i.jsx("div",{className:"mr-15",children:i.jsx(x,{value:b,size:s==="medium"?"large":"medium",styleVariant:e==="gray"?"neutral":"information"})}),i.jsx("div",{children:o}),n&&S&&i.jsx("div",{className:"ml-15",children:i.jsx(x,{value:S,size:s==="medium"?"large":"medium",styleVariant:e==="gray"?"neutral":"information"})})]}),i.jsx("div",{children:c&&c({size:s==="medium"?"large":"medium",className:`fill-interactive-icon-${e}-${r?"disabled":"subtle"} ml-15`})})]})};try{t.displayName="Chip",t.__docgenInfo={description:"",displayName:"Chip",props:{styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"beige"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(value: string) => void"}},iconOnly:{defaultValue:{value:"false"},description:"",name:"iconOnly",required:!1,type:{name:"boolean | undefined"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"FC<{}> | undefined"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"FC<{}> | undefined"}},leadingCounter:{defaultValue:null,description:"",name:"leadingCounter",required:!1,type:{name:"number | undefined"}},trailingCounter:{defaultValue:null,description:"",name:"trailingCounter",required:!1,type:{name:"number | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const se={title:"Design System/Chip",component:t,parameters:{layout:"centered",docs:{description:{component:"A chip component for displaying selectable tags or filters."}}},tags:["autodocs"],argTypes:{styleVariant:{control:{type:"select"},options:["gray","beige"],description:"The style variant of the chip"},size:{control:{type:"select"},options:["medium","small"],description:"The size of the chip"},value:{control:{type:"text"},description:"The text content of the chip"},isSelected:{control:{type:"boolean"},description:"Whether the chip is selected"},disabled:{control:{type:"boolean"},description:"Whether the chip is disabled"},iconOnly:{control:{type:"boolean"},description:"Whether the chip is icon only"},leadingIcon:{control:{type:"select"},options:[y,C],description:"The leading icon of the chip"},trailingCounter:{control:{type:"number"},description:"The trailing counter of the chip"}},args:{styleVariant:"gray",size:"medium",value:"Chip",isSelected:!1,disabled:!1,onClick:e=>console.log("Clicked:",e)}},d={args:{styleVariant:"gray",size:"medium",value:"Default Chip",isSelected:!1,leadingIcon:y,trailingIcon:C}},u={render:e=>i.jsx("div",{className:"flex gap-4 items-center",children:i.jsx(t,{styleVariant:"gray",isSelected:e.isSelected,onClick:()=>{},...e,size:"medium",value:"Medium"})}),args:{styleVariant:"gray",size:"medium",value:"Selected Chip",isSelected:!0,leadingCounter:10,trailingCounter:10,leadingIcon:y,trailingIcon:C}},m={args:{styleVariant:"gray",size:"medium",value:"With Icon",isSelected:!1,leadingIcon:P}},p={args:{styleVariant:"gray",size:"medium",value:"Messages",isSelected:!1,trailingCounter:5}},g={render:e=>i.jsxs("div",{className:"flex gap-4 items-center",children:[i.jsx(t,{...e,size:"small",value:"Small"}),i.jsx(t,{...e,size:"medium",value:"Medium"}),i.jsx(t,{...e,size:"medium",value:"Large"})]}),args:{styleVariant:"gray",isSelected:!1}},h={render:e=>{const[s,f]=H.useState([]),o=a=>{f(l=>l.includes(a)?l.filter(c=>c!==a):[...l,a])},v=["React","TypeScript","Storybook","Tailwind"];return i.jsx("div",{className:"flex gap-2 flex-wrap",children:v.map(a=>i.jsx(t,{...e,value:a,isSelected:s.includes(a),onClick:o},a))})},args:{styleVariant:"gray",size:"medium"}};var I,z,V;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'Default Chip',
    isSelected: false,
    leadingIcon: FilterIcon,
    trailingIcon: ChevronDown
  }
}`,...(V=(z=d.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var k,j,$;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Chip styleVariant='gray' isSelected={args.isSelected} onClick={() => {}} {...args} size="medium" value="Medium" />
    </div>,
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'Selected Chip',
    isSelected: true,
    leadingCounter: 10,
    trailingCounter: 10,
    leadingIcon: FilterIcon,
    trailingIcon: ChevronDown
  }
}`,...($=(j=u.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var N,q,w;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'With Icon',
    isSelected: false,
    leadingIcon: InfoIcon
  }
}`,...(w=(q=m.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var T,_,W;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'Messages',
    isSelected: false,
    trailingCounter: 5
  }
}`,...(W=(_=p.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var D,F,M;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Chip {...args} size="small" value="Small" />
      <Chip {...args} size="medium" value="Medium" />
      <Chip {...args} size="medium" value="Large" />
    </div>,
  args: {
    styleVariant: 'gray',
    isSelected: false
  }
}`,...(M=(F=g.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var R,A,E;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const [selectedChips, setSelectedChips] = useState<string[]>([]);
    const handleChipClick = (value: string) => {
      setSelectedChips(prev => prev.includes(value) ? prev.filter(chip => chip !== value) : [...prev, value]);
    };
    const chips = ['React', 'TypeScript', 'Storybook', 'Tailwind'];
    return <div className="flex gap-2 flex-wrap">
        {chips.map(chip => <Chip key={chip} {...args} value={chip} isSelected={selectedChips.includes(chip)} onClick={handleChipClick} />)}
      </div>;
  },
  args: {
    styleVariant: 'gray',
    size: 'medium'
  }
}`,...(E=(A=h.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const ne=["Default","Selected","WithIcon","WithCounter","AllSizes","Interactive"];export{g as AllSizes,d as Default,h as Interactive,u as Selected,p as WithCounter,m as WithIcon,ne as __namedExportsOrder,se as default};
