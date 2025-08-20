import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{R as O,r as B}from"./index-DpTt3J-R.js";import{c as G}from"./index-Dp3B9jqt.js";/* empty css              */import{C}from"./index-BfEk3WjK.js";import{c as H}from"./utilities-CP3_-lCt.js";import{I as J}from"./index-BdKfWn55.js";import"./clsx-B-dksMZM.js";/* empty css               */const n=({styleVariant:e,size:t,isSelected:f,value:c,onClick:v,iconOnly:r=!1,leadingIcon:l,trailingIcon:o,leadingCounter:y,trailingCounter:b,disabled:i})=>{const[s,E]=O.useState(f),F=G(`flex items-center w-fit rounded-25 px-2 py-${r?2:15} focus-visible:plum-focus
     font-primary font-medium text-interactive-text-${e}-${i?"disabled":"normal"}`,{variants:{styleVariant:{gray:`bg-interactive-background-${s?`${e}-${i?"disabled":"normal"}`:i?"white-disabled":"white-transparent"} 
          border border-interactive-border-gray-${i?"disabled":s?"highlighted":"normal"} ${i?"":`hover:bg-interactive-background-gray-muted 
            focus-visible:bg-interactive-background-gray-muted`}`,beige:`bg-interactive-background-${s?`${e}-${i?"disabled":"normal"}`:"white-transparent"} 
          border border-interactive-border-beige-${i?"disabled":s?"normal":"subtle"} ${i?"":`hover:bg-interactive-background-beige-muted 
            focus-visible:bg-interactive-background-beige-muted`}`},size:{small:"text-sm",medium:"text-base"}}}),L=()=>{E(!s),v(c)};return a.jsxs("button",{onClick:L,className:H(F({styleVariant:e,size:t})),disabled:i,children:[a.jsx("div",{children:l&&l({size:t==="medium"?"large":"medium",className:`fill-interactive-icon-${e}-${i?"disabled":"subtle"} mr-${r?"0":"1"}`})}),!r&&a.jsxs(a.Fragment,{children:[s&&y&&a.jsx("div",{className:"mr-15",children:a.jsx(C,{value:y,size:t==="medium"?"large":"medium",styleVariant:e==="gray"?"neutral":"information"})}),a.jsx("div",{children:c}),s&&b&&a.jsx("div",{className:"ml-15",children:a.jsx(C,{value:b,size:t==="medium"?"large":"medium",styleVariant:e==="gray"?"neutral":"information"})})]}),a.jsx("div",{children:o&&o({size:t==="medium"?"large":"medium",className:`fill-interactive-icon-${e}-${i?"disabled":"subtle"} ml-15`})})]})};try{n.displayName="Chip",n.__docgenInfo={description:"",displayName:"Chip",props:{styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"beige"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(value: string) => void"}},iconOnly:{defaultValue:{value:"false"},description:"",name:"iconOnly",required:!1,type:{name:"boolean | undefined"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"FC<{}> | undefined"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"FC<{}> | undefined"}},leadingCounter:{defaultValue:null,description:"",name:"leadingCounter",required:!1,type:{name:"number | undefined"}},trailingCounter:{defaultValue:null,description:"",name:"trailingCounter",required:!1,type:{name:"number | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const re={title:"Design System/Chip",component:n,parameters:{layout:"centered",docs:{description:{component:"A chip component for displaying selectable tags or filters."}}},tags:["autodocs"],argTypes:{styleVariant:{control:{type:"select"},options:["gray","secondary","success","warning","error"],description:"The style variant of the chip"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the chip"},value:{control:{type:"text"},description:"The text content of the chip"},isSelected:{control:{type:"boolean"},description:"Whether the chip is selected"},disabled:{control:{type:"boolean"},description:"Whether the chip is disabled"}},args:{styleVariant:"gray",size:"medium",value:"Chip",isSelected:!1,disabled:!1,onClick:e=>console.log("Clicked:",e)}},d={args:{styleVariant:"gray",size:"medium",value:"Default Chip",isSelected:!1}},u={args:{styleVariant:"gray",size:"medium",value:"Selected Chip",isSelected:!0}},m={args:{styleVariant:"gray",size:"medium",value:"With Icon",isSelected:!1,leadingIcon:J}},p={args:{styleVariant:"gray",size:"medium",value:"Messages",isSelected:!1,trailingCounter:5}},g={render:e=>a.jsxs("div",{className:"flex gap-4 items-center",children:[a.jsx(n,{...e,size:"small",value:"Small"}),a.jsx(n,{...e,size:"medium",value:"Medium"}),a.jsx(n,{...e,size:"medium",value:"Large"})]}),args:{styleVariant:"gray",isSelected:!1}},h={render:e=>{const[t,f]=B.useState([]),c=r=>{f(l=>l.includes(r)?l.filter(o=>o!==r):[...l,r])},v=["React","TypeScript","Storybook","Tailwind"];return a.jsx("div",{className:"flex gap-2 flex-wrap",children:v.map(r=>a.jsx(n,{...e,value:r,isSelected:t.includes(r),onClick:c},r))})},args:{styleVariant:"gray",size:"medium"}};var S,x,z;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'Default Chip',
    isSelected: false
  }
}`,...(z=(x=d.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var V,k,$;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'Selected Chip',
    isSelected: true
  }
}`,...($=(k=u.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var j,I,q;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    styleVariant: 'gray',
    size: 'medium',
    value: 'With Icon',
    isSelected: false,
    leadingIcon: InfoIcon
  }
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var N,_,w;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(D=(W=g.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var R,M,A;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=(M=h.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const ie=["Default","Selected","WithIcon","WithCounter","AllSizes","Interactive"];export{g as AllSizes,d as Default,h as Interactive,u as Selected,p as WithCounter,m as WithIcon,ie as __namedExportsOrder,re as default};
