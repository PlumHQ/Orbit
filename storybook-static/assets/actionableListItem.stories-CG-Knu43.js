import{R as t}from"./index-DpTt3J-R.js";import{c as U,d as X,e as Y,f as ee,R as te,I as m}from"./index-C_GYH-13.js";import{c as ae}from"./index-Dp3B9jqt.js";import{c as re}from"./utilities-CP3_-lCt.js";import{B as ie}from"./component-D-YHFCo0.js";import{L as ne}from"./component-jLJetnFZ.js";/* empty css              */import{H as r}from"./health-insurance-OAOTZ4qQ.js";/* empty css               */import"./clsx-B-dksMZM.js";const a=({variant:e,size:i,behaviour:d,leadingAsset:q,primaryText:R,secondaryTexts:u,tertiaryText:p,callToAction:x,badgeText:v,badgeSize:H,badgeVariant:D,badgeStyle:P,leafletLeadingIcon:_=m,leafletLeadingText:B="",leafletTrailingIcon:$=te,leafletTrailingText:W="",leafletStyle:Z="positive",showRightArrowIcon:F=!0,onNotificationClick:j=()=>{},onItemClick:O=()=>{}})=>{const G=q,[y,J]=t.useState(!1),K=ae(`flex cursor-pointer relative z-1 font-primary justify-between w-full ${e==="secondary"?"bg-surface-background-peach-subtle":"bg-interactive-background-white-normal"} hover:bg-interactive-background-${e==="secondary"?"peach":"gray"}-normal border border-interactive-border-${d==="select"&&y?"primary":"gray"}-normal rounded-4 items-center`,{variants:{size:{medium:"px-5 py-4",large:"px-8 py-6"}},defaultVariants:{size:"medium"}}),Q=()=>{d==="select"&&J(g=>!g),O()};return t.createElement("div",null,t.createElement("div",{className:re(K({size:i})),onClick:Q},t.createElement("div",{className:"flex"},t.createElement("div",{className:`flex h-${i==="large"?14:12} w-${i==="large"?14:12} mr-3`},t.createElement(G,null)),t.createElement("div",null,t.createElement("div",{className:`text-interactive-text-${y?"":"gray"}-normal font-semibold text-${i==="large"?"lg":"base"} mb-05`},R),t.createElement("div",{className:"flex items-center mb-05"},u&&u.map((g,T)=>t.createElement(t.Fragment,null,t.createElement("div",{key:T,className:"text-interactive-text-gray-subtle font-normal text-base mr-05"},g),T<u.length-1&&t.createElement(U,{size:"medium",className:"fill-surface-icon-gray-muted mr-05"})))),i==="large"&&p&&t.createElement("div",{className:"text-interactive-text-gray-subtle font-normal text-sm"},p))),t.createElement("div",{className:"flex items-center cursor-pointer"},d==="select"&&e==="primary"?y?t.createElement(X,{size:"extraLarge",className:"fill-interactive-icon-destructive-normal"}):t.createElement(Y,{size:"extraLarge",className:"fill-interactive-icon-gray-subtle"}):t.createElement("div",{className:"flex items-center gap-2"},v?t.createElement(ie,{value:v,size:H||"medium",variant:D||"primary",styleVariant:P||"neutral"}):x?t.createElement("div",{className:"text-interactive-text-beige-subtle text-sm font-medium"},x):"",F&&t.createElement(ee,{size:"extraLarge",className:"fill-interactive-icon-gray-subtle"})))),e==="primary"&&t.createElement("div",{className:`mt-negative-${i==="large"?6:35}`},t.createElement(ne,{size:i,style:Z,leadingIcon:_,leadingText:B,trailingIcon:$,trailingText:W,onClick:j})))};try{a.displayName="ActionableListItem",a.__docgenInfo={description:"",displayName:"ActionableListItem",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},behaviour:{defaultValue:null,description:"",name:"behaviour",required:!0,type:{name:"enum",value:[{value:'"select"'},{value:'"click"'}]}},leadingAsset:{defaultValue:null,description:"",name:"leadingAsset",required:!0,type:{name:"FC<{}>"}},primaryText:{defaultValue:null,description:"",name:"primaryText",required:!0,type:{name:"string"}},secondaryTexts:{defaultValue:null,description:"",name:"secondaryTexts",required:!1,type:{name:"string[]"}},tertiaryText:{defaultValue:null,description:"",name:"tertiaryText",required:!0,type:{name:"string"}},badgeText:{defaultValue:null,description:"",name:"badgeText",required:!1,type:{name:"string"}},badgeSize:{defaultValue:null,description:"",name:"badgeSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},badgeVariant:{defaultValue:null,description:"",name:"badgeVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},badgeStyle:{defaultValue:null,description:"",name:"badgeStyle",required:!1,type:{name:"enum",value:[{value:'"positive"'},{value:'"negative"'},{value:'"information"'},{value:'"notice"'},{value:'"neutral"'}]}},callToAction:{defaultValue:null,description:"",name:"callToAction",required:!1,type:{name:"string"}},leafletLeadingIcon:{defaultValue:{value:`({
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
}`},description:"",name:"leafletLeadingIcon",required:!1,type:{name:"FC<{}>"}},leafletLeadingText:{defaultValue:{value:""},description:"",name:"leafletLeadingText",required:!1,type:{name:"string"}},leafletTrailingIcon:{defaultValue:{value:`({
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
      fill={color}
      className={className}
      {...props}
    >
      <path
        d="M20.7027 12.7019C20.8915 12.5211 21 12.268 21 12.0028C21 11.7377 20.8915 11.4886 20.7027 11.3037L13.6313 4.55373C13.2455 4.18409 12.6348 4.20016 12.2692 4.58587C11.9036 4.97159 11.9156 5.5823 12.3013 5.94793L17.629 11.0386H3.96429C3.42991 11.0386 3 11.4685 3 12.0028C3 12.5372 3.42991 12.9671 3.96429 12.9671H17.629L12.2973 18.0537C11.9116 18.4234 11.8996 19.0301 12.2652 19.4158C12.6308 19.8015 13.2415 19.8136 13.6272 19.4479L20.6987 12.6979L20.7027 12.7019Z"
        fill={color}
      />
    </svg>
  );
}`},description:"",name:"leafletTrailingIcon",required:!1,type:{name:"FC<{}>"}},leafletTrailingText:{defaultValue:{value:""},description:"",name:"leafletTrailingText",required:!1,type:{name:"string"}},leafletStyle:{defaultValue:{value:"positive"},description:"",name:"leafletStyle",required:!1,type:{name:"enum",value:[{value:'"positive"'},{value:'"negative"'},{value:'"information"'},{value:'"notice"'},{value:'"neutral"'}]}},onItemClick:{defaultValue:{value:"() => { }"},description:"",name:"onItemClick",required:!1,type:{name:"() => void"}},onNotificationClick:{defaultValue:{value:"() => { }"},description:"",name:"onNotificationClick",required:!1,type:{name:"() => void"}},showRightArrowIcon:{defaultValue:{value:"true"},description:"",name:"showRightArrowIcon",required:!1,type:{name:"boolean"}}}}}catch{}const xe={title:"Design System/ActionableListItem",component:a,parameters:{layout:"centered",docs:{description:{component:"An actionable list item component for interactive list elements."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary"],description:"The variant of the list item"},size:{control:{type:"select"},options:["medium","large"],description:"The size of the list item"},behaviour:{control:{type:"select"},options:["click","select"],description:"The behavior of the list item"},primaryText:{control:{type:"text"},description:"The primary text content"},secondaryTexts:{control:{type:"object"},description:"Array of secondary text strings"},tertiaryText:{control:{type:"text"},description:"The tertiary text content"},badgeText:{control:{type:"text"},description:"Optional badge text"},badgeSize:{control:{type:"select"},options:["large","medium","small"],description:"Size of the badge"},badgeVariant:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"Variant of the badge"},badgeStyle:{control:{type:"select"},options:["positive","negative","neutral","information","notice"],description:"Style of the badge"},callToAction:{control:{type:"text"},description:"Call to action text"},leafletLeadingText:{control:{type:"text"},description:"Leading text for leaflet"},leafletTrailingText:{control:{type:"text"},description:"Trailing text for leaflet"},leafletStyle:{control:{type:"select"},options:["positive","neutral","negative","information","notice"],description:"Style of the leaflet"},onItemClick:{action:"item clicked",description:"Callback fired when item is clicked"},onNotificationClick:{action:"notification clicked",description:"Callback fired when notification is clicked"}},args:{variant:"primary",size:"medium",behaviour:"click",leadingAsset:m,primaryText:"List Item",secondaryTexts:["Description text"],tertiaryText:"Tertiary text",callToAction:"Action",leafletLeadingText:"Leading",leafletTrailingText:"Trailing",leafletStyle:"positive",onItemClick:()=>console.log("Item clicked"),onNotificationClick:()=>console.log("Notification clicked")}},n={render:e=>t.createElement("div",{className:"w-150 max-w-md"},t.createElement(a,{...e,size:e.size,primaryText:e.primaryText,secondaryTexts:e.secondaryTexts,leadingAsset:e.leadingAsset,tertiaryText:e.tertiaryText,variant:e.variant,behaviour:e.behaviour,badgeText:e.badgeText,badgeSize:e.badgeSize,badgeVariant:e.badgeVariant,badgeStyle:e.badgeStyle})),args:{variant:"primary",size:"medium",behaviour:"click",primaryText:"List Item",secondaryTexts:["Description text"],leadingAsset:r,tertiaryText:"Tertiary text",badgeText:"Badge",badgeSize:"medium",badgeVariant:"primary",badgeStyle:"positive",showRightArrowIcon:!0}},l={render:e=>t.createElement("div",{className:"w-150 max-w-md"},t.createElement(a,{...e,size:e.size,primaryText:e.primaryText,secondaryTexts:e.secondaryTexts,leadingAsset:e.leadingAsset,tertiaryText:e.tertiaryText,variant:e.variant,behaviour:e.behaviour})),args:{variant:"primary",size:"medium",behaviour:"click",primaryText:"List Item",secondaryTexts:["Description text"],leadingAsset:r,tertiaryText:"Tertiary text",callToAction:"Read more",leafletLeadingText:"Leading",leafletTrailingText:"Trailing",leafletStyle:"positive",showRightArrowIcon:!0}},s={render:e=>t.createElement("div",{className:"w-150 max-w-md"},t.createElement(a,{...e,size:e.size,primaryText:e.primaryText,secondaryTexts:e.secondaryTexts,leadingAsset:e.leadingAsset,tertiaryText:e.tertiaryText,variant:e.variant,behaviour:e.behaviour})),args:{variant:"primary",size:"medium",behaviour:"select",primaryText:"Selectable Item",secondaryTexts:["Click to select"],leadingAsset:r,tertiaryText:"Tertiary text",showRightArrowIcon:!0}},o={render:e=>t.createElement("div",{className:"space-y-2 w-150 max-w-md"},t.createElement(a,{...e,size:"medium",primaryText:"Medium Item",secondaryTexts:["Medium size"],leadingAsset:r,tertiaryText:"Medium tertiary",variant:"primary",behaviour:"click"}),t.createElement(a,{...e,size:"medium",primaryText:"Medium Item 2",secondaryTexts:["Medium size"],leadingAsset:r,tertiaryText:"Medium tertiary",variant:"primary",behaviour:"click"}),t.createElement(a,{...e,size:"large",primaryText:"Large Item",secondaryTexts:["Large size"],leadingAsset:r,tertiaryText:"Large tertiary",variant:"primary",behaviour:"click"})),args:{variant:"primary",behaviour:"click",leadingAsset:m,tertiaryText:"Tertiary text"}},c={render:e=>t.createElement("div",{className:"space-y-2 w-150 max-w-md"},t.createElement(a,{variant:"primary",size:"medium",behaviour:"click",primaryText:"Primary",secondaryTexts:["Primary variant"],leadingAsset:r,leafletLeadingText:"Leading",leafletTrailingText:"Trailing",tertiaryText:"Primary tertiary"}),t.createElement(a,{variant:"secondary",callToAction:"Read more",size:"medium",behaviour:"select",primaryText:"Secondary",secondaryTexts:["Secondary variant"],leadingAsset:r,leafletLeadingText:"Leading",tertiaryText:"Secondary tertiary"}),t.createElement(a,{variant:"primary",size:"medium",behaviour:"click",primaryText:"Primary Alt",secondaryTexts:["Primary alt variant"],leadingAsset:r,leafletLeadingText:"Leading",leafletTrailingText:"Trailing",tertiaryText:"Primary alt tertiary"})),args:{leadingAsset:m,tertiaryText:"Tertiary text",showRightArrowIcon:!0}};var f,b,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="w-150 max-w-md">
            <ActionableListItem {...args} size={args.size} primaryText={args.primaryText} secondaryTexts={args.secondaryTexts} leadingAsset={args.leadingAsset} tertiaryText={args.tertiaryText} variant={args.variant} behaviour={args.behaviour} badgeText={args.badgeText} badgeSize={args.badgeSize} badgeVariant={args.badgeVariant} badgeStyle={args.badgeStyle} />
        </div>,
  args: {
    variant: 'primary',
    size: 'medium',
    behaviour: 'click',
    primaryText: 'List Item',
    secondaryTexts: ['Description text'],
    leadingAsset: HealthInsuraceIllustration,
    tertiaryText: 'Tertiary text',
    badgeText: 'Badge',
    badgeSize: 'medium',
    badgeVariant: 'primary',
    badgeStyle: 'positive',
    showRightArrowIcon: true
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var I,A,z;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div className="w-150 max-w-md">
            <ActionableListItem {...args} size={args.size} primaryText={args.primaryText} secondaryTexts={args.secondaryTexts} leadingAsset={args.leadingAsset} tertiaryText={args.tertiaryText} variant={args.variant} behaviour={args.behaviour} />
        </div>,
  args: {
    variant: 'primary',
    size: 'medium',
    behaviour: 'click',
    primaryText: 'List Item',
    secondaryTexts: ['Description text'],
    leadingAsset: HealthInsuraceIllustration,
    tertiaryText: 'Tertiary text',
    callToAction: 'Read more',
    leafletLeadingText: 'Leading',
    leafletTrailingText: 'Trailing',
    leafletStyle: 'positive',
    showRightArrowIcon: true
  }
}`,...(z=(A=l.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var C,L,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div className="w-150 max-w-md">
            <ActionableListItem {...args} size={args.size} primaryText={args.primaryText} secondaryTexts={args.secondaryTexts} leadingAsset={args.leadingAsset} tertiaryText={args.tertiaryText} variant={args.variant} behaviour={args.behaviour} />
        </div>,
  args: {
    variant: 'primary',
    size: 'medium',
    behaviour: 'select',
    primaryText: 'Selectable Item',
    secondaryTexts: ['Click to select'],
    leadingAsset: HealthInsuraceIllustration,
    tertiaryText: 'Tertiary text',
    showRightArrowIcon: true
  }
}`,...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var S,k,N;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div className="space-y-2 w-150 max-w-md">
            <ActionableListItem {...args} size="medium" primaryText="Medium Item" secondaryTexts={["Medium size"]} leadingAsset={HealthInsuraceIllustration} tertiaryText="Medium tertiary" variant="primary" behaviour="click" />
            <ActionableListItem {...args} size="medium" primaryText="Medium Item 2" secondaryTexts={["Medium size"]} leadingAsset={HealthInsuraceIllustration} tertiaryText="Medium tertiary" variant="primary" behaviour="click" />
            <ActionableListItem {...args} size="large" primaryText="Large Item" secondaryTexts={["Large size"]} leadingAsset={HealthInsuraceIllustration} tertiaryText="Large tertiary" variant="primary" behaviour="click" />
        </div>,
  args: {
    variant: 'primary',
    behaviour: 'click',
    leadingAsset: InfoIcon,
    tertiaryText: 'Tertiary text'
  }
}`,...(N=(k=o.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var V,E,M;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <div className="space-y-2 w-150 max-w-md">
            <ActionableListItem variant="primary" size="medium" behaviour="click" primaryText="Primary" secondaryTexts={["Primary variant"]} leadingAsset={HealthInsuraceIllustration} leafletLeadingText='Leading' leafletTrailingText='Trailing' tertiaryText="Primary tertiary" />
            <ActionableListItem variant="secondary" callToAction='Read more' size="medium" behaviour="select" primaryText="Secondary" secondaryTexts={["Secondary variant"]} leadingAsset={HealthInsuraceIllustration} leafletLeadingText='Leading' tertiaryText="Secondary tertiary" />
            <ActionableListItem variant="primary" size="medium" behaviour="click" primaryText="Primary Alt" secondaryTexts={["Primary alt variant"]} leadingAsset={HealthInsuraceIllustration} leafletLeadingText='Leading' leafletTrailingText='Trailing' tertiaryText="Primary alt tertiary" />
        </div>,
  args: {
    leadingAsset: InfoIcon,
    tertiaryText: 'Tertiary text',
    showRightArrowIcon: true
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const ve=["DefaultWithBadge","DefaultWithCallToAction","DefaultWithSelectable","AllSizes","AllVariants"];export{o as AllSizes,c as AllVariants,n as DefaultWithBadge,l as DefaultWithCallToAction,s as DefaultWithSelectable,ve as __namedExportsOrder,xe as default};
