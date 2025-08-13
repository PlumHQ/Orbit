import{R as a,r as j}from"./index-DpTt3J-R.js";import{c as B}from"./index-Dp3B9jqt.js";/* empty css              */import{C}from"./index-CZNa3luW.js";import{c as G}from"./utilities-CP3_-lCt.js";import{I as H}from"./index-C_GYH-13.js";import"./clsx-B-dksMZM.js";/* empty css               */const l=({styleVariant:e,size:i,isSelected:h,value:c,onClick:y,iconOnly:t=!1,leadingIcon:n,trailingIcon:o,leadingCounter:v,trailingCounter:b,disabled:r})=>{const[s,F]=a.useState(h),L=B(`flex items-center w-fit rounded-25 px-2 py-${t?2:15} focus-visible:plum-focus
     font-primary font-medium text-interactive-text-${e}-${r?"disabled":"normal"}`,{variants:{styleVariant:{gray:`bg-interactive-background-${s?`${e}-${r?"disabled":"normal"}`:r?"white-disabled":"white-transparent"} 
          border border-interactive-border-gray-${r?"disabled":s?"highlighted":"normal"} ${r?"":`hover:bg-interactive-background-gray-muted 
            focus-visible:bg-interactive-background-gray-muted`}`,beige:`bg-interactive-background-${s?`${e}-${r?"disabled":"normal"}`:"white-transparent"} 
          border border-interactive-border-beige-${r?"disabled":s?"normal":"subtle"} ${r?"":`hover:bg-interactive-background-beige-muted 
            focus-visible:bg-interactive-background-beige-muted`}`},size:{small:"text-sm",medium:"text-base"}}}),O=()=>{F(!s),y(c)};return a.createElement("button",{onClick:O,className:G(L({styleVariant:e,size:i})),disabled:r},a.createElement("div",null,n&&n({size:i==="medium"?"large":"medium",className:`fill-interactive-icon-${e}-${r?"disabled":"subtle"} mr-${t?"0":"1"}`})),!t&&a.createElement(a.Fragment,null,s&&v&&a.createElement("div",{className:"mr-15"},a.createElement(C,{value:v,size:i==="medium"?"large":"medium",styleVariant:e==="gray"?"neutral":"information"})),a.createElement("div",null,c),s&&b&&a.createElement("div",{className:"ml-15"},a.createElement(C,{value:b,size:i==="medium"?"large":"medium",styleVariant:e==="gray"?"neutral":"information"}))),a.createElement("div",null,o&&o({size:i==="medium"?"large":"medium",className:`fill-interactive-icon-${e}-${r?"disabled":"subtle"} ml-15`})))};try{l.displayName="Chip",l.__docgenInfo={description:"",displayName:"Chip",props:{styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!0,type:{name:"enum",value:[{value:'"beige"'},{value:'"gray"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(value: string) => void"}},iconOnly:{defaultValue:{value:"false"},description:"",name:"iconOnly",required:!1,type:{name:"boolean"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"FC<{}>"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"FC<{}>"}},leadingCounter:{defaultValue:null,description:"",name:"leadingCounter",required:!1,type:{name:"number"}},trailingCounter:{defaultValue:null,description:"",name:"trailingCounter",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const ee={title:"Design System/Chip",component:l,parameters:{layout:"centered",docs:{description:{component:"A chip component for displaying selectable tags or filters."}}},tags:["autodocs"],argTypes:{styleVariant:{control:{type:"select"},options:["gray","secondary","success","warning","error"],description:"The style variant of the chip"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the chip"},value:{control:{type:"text"},description:"The text content of the chip"},isSelected:{control:{type:"boolean"},description:"Whether the chip is selected"},disabled:{control:{type:"boolean"},description:"Whether the chip is disabled"}},args:{styleVariant:"gray",size:"medium",value:"Chip",isSelected:!1,disabled:!1,onClick:e=>console.log("Clicked:",e)}},d={args:{styleVariant:"gray",size:"medium",value:"Default Chip",isSelected:!1}},m={args:{styleVariant:"gray",size:"medium",value:"Selected Chip",isSelected:!0}},u={args:{styleVariant:"gray",size:"medium",value:"With Icon",isSelected:!1,leadingIcon:H}},p={args:{styleVariant:"gray",size:"medium",value:"Messages",isSelected:!1,trailingCounter:5}},g={render:e=>a.createElement("div",{className:"flex gap-4 items-center"},a.createElement(l,{...e,size:"small",value:"Small"}),a.createElement(l,{...e,size:"medium",value:"Medium"}),a.createElement(l,{...e,size:"medium",value:"Large"})),args:{styleVariant:"gray",isSelected:!1}},f={render:e=>{const[i,h]=j.useState([]),c=t=>{h(n=>n.includes(t)?n.filter(o=>o!==t):[...n,t])},y=["React","TypeScript","Storybook","Tailwind"];return a.createElement("div",{className:"flex gap-2 flex-wrap"},y.map(t=>a.createElement(l,{key:t,...e,value:t,isSelected:i.includes(t),onClick:c})))},args:{styleVariant:"gray",size:"medium"}};var S,z,V;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'Default Chip',
    isSelected: false
  }
}`,...(V=(z=d.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var k,$,x;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'Selected Chip',
    isSelected: true
  }
}`,...(x=($=m.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var E,I,q;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'With Icon',
    isSelected: false,
    leadingIcon: InfoIcon
  }
}`,...(q=(I=u.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var N,_,w;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'Messages',
    isSelected: false,
    trailingCounter: 5
  }
}`,...(w=(_=p.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var T,W,D;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Chip {...args} size="small" value="Small" />
      <Chip {...args} size="medium" value="Medium" />
      <Chip {...args} size="medium" value="Large" />
    </div>,
  args: {
    styleVariant: 'gray',
    isSelected: false
  }
}`,...(D=(W=g.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var M,R,A;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(R=f.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const ae=["Default","Selected","WithIcon","WithCounter","AllSizes","Interactive"];export{g as AllSizes,d as Default,f as Interactive,m as Selected,p as WithCounter,u as WithIcon,ae as __namedExportsOrder,ee as default};
