import{r as s,R as e}from"./index-DpTt3J-R.js";import{c as A}from"./utilities-CP3_-lCt.js";/* empty css               *//* empty css              */import{m as L,A as D}from"./index-C_GYH-13.js";import"./clsx-B-dksMZM.js";const I=({size:r="medium",progress:S,className:z,variant:t,primaryText:_,secondaryText:V,label:w})=>{const q={large:"h-4",medium:"h-3",small:"h-2"},k=Math.min(Math.max(S,0),100),$=t==="positive"?L:D;return s.createElement("div",{className:"flex flex-col gap-15"},s.createElement("div",{className:"flex justify-between"},s.createElement("p",{className:`text-${r==="small"?"sm":"base"} font-medium font-primary text-feedback-text-neutral-subtle ${t==="neutral"?"text-feedback-text-neutral-normal":""}`},w),s.createElement("div",{className:"flex items-center gap-1"},s.createElement("p",{className:`text-${r==="small"?"sm":"base"} font-semibold font-primary text-feedback-text-neutral-normal`},_),s.createElement("p",{className:`text-${r==="small"?"sm":"base"} font-semibold font-primary text-feedback-text-neutral-subtle`},V),t!=="neutral"&&s.createElement($,{size:"large",className:`fill-feedback-icon-${t}-${t==="positive"?"subtle":"intense"}`}))),s.createElement("div",{className:A("w-full bg-interactive-background-neutral-subtle rounded-8 overflow-hidden",q[r],z)},s.createElement("div",{className:`h-full bg-feedback-background-${t}-intense transition-all duration-300 ease-in-out`,style:{width:`${k}%`}})))},a=I;try{a.displayName="Progress",a.__docgenInfo={description:"",displayName:"Progress",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"positive"'},{value:'"negative"'},{value:'"neutral"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},primaryText:{defaultValue:null,description:"",name:"primaryText",required:!1,type:{name:"string"}},secondaryText:{defaultValue:null,description:"",name:"secondaryText",required:!1,type:{name:"string"}}}}}catch{}try{component.displayName="component",component.__docgenInfo={description:"",displayName:"component",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"positive"'},{value:'"negative"'},{value:'"neutral"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},primaryText:{defaultValue:null,description:"",name:"primaryText",required:!1,type:{name:"string"}},secondaryText:{defaultValue:null,description:"",name:"secondaryText",required:!1,type:{name:"string"}}}}}catch{}const O={title:"Design System/Progress",component:a,parameters:{layout:"centered",docs:{description:{component:"A progress bar component with customizable sizes and variants."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the progress bar"},variant:{control:{type:"select"},options:["neutral","positive","negative"],description:"The color variant of the progress bar"},progress:{control:{type:"range",min:0,max:100,step:1},description:"Progress value from 0 to 100"}},args:{progress:50,size:"medium",variant:"positive"}},l={render:r=>e.createElement("div",{className:"space-y-4 w-100"},e.createElement("div",null,e.createElement("h3",{className:"text-sm font-medium mb-2"},"Default"),e.createElement(a,{...r,label:"Progress",size:"medium",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})))},m={render:r=>e.createElement("div",{className:"space-y-4 w-100"},e.createElement("div",null,e.createElement("h3",{className:"text-sm font-medium mb-2"},"Small"),e.createElement(a,{...r,label:"Progress",size:"small",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})))},n={render:r=>e.createElement("div",{className:"space-y-4 w-100"},e.createElement("div",null,e.createElement("h3",{className:"text-sm font-medium mb-2"},"Large"),e.createElement(a,{...r,label:"Progress",size:"large",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})))},i={render:r=>e.createElement("div",{className:"space-y-4 w-100"},e.createElement("div",null,e.createElement("h3",{className:"text-sm font-medium mb-2"},"Positive"),e.createElement(a,{...r,label:"Progress",variant:"positive",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})),e.createElement("div",null,e.createElement("h3",{className:"text-sm font-medium mb-2"},"Neutral"),e.createElement(a,{...r,label:"Progress",variant:"neutral",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})),e.createElement("div",null,e.createElement("h3",{className:"text-sm font-medium mb-2"},"Negative"),e.createElement(a,{...r,label:"Progress",variant:"negative",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress}))),args:{progress:65,size:"medium"}},o={render:r=>e.createElement("div",{className:"space-y-4 w-100"},e.createElement("div",null,e.createElement("h3",{className:"text-sm font-medium mb-2"},"Small"),e.createElement(a,{...r,label:"Progress",size:"small",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})),e.createElement("div",null,e.createElement("h3",{className:"text-sm font-medium mb-2"},"Medium"),e.createElement(a,{...r,label:"Progress",size:"medium",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})),e.createElement("div",null,e.createElement("h3",{className:"text-sm font-medium mb-2"},"Large"),e.createElement(a,{...r,label:"Progress",size:"large",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress}))),args:{progress:80,variant:"positive"}};var c,d,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Default</h3>
        <Progress {...args} label="Progress" size="medium" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
    </div>
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,y;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Small</h3>
        <Progress {...args} label="Progress" size="small" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>  
    </div>
}`,...(y=(g=m.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,v,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Large</h3>
        <Progress {...args} label="Progress" size="large" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
    </div>
}`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var f,b,P;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Positive</h3>
        <Progress {...args} label="Progress" variant="positive" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Neutral</h3>
        <Progress {...args} label="Progress" variant="neutral" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Negative</h3>
        <Progress {...args} label="Progress" variant="negative" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
    </div>,
  args: {
    progress: 65,
    size: 'medium'
  }
}`,...(P=(b=i.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var N,h,E;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Small</h3>
        <Progress {...args} label="Progress" size="small" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Medium</h3>
        <Progress {...args} label="Progress" size="medium" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Large</h3>
        <Progress {...args} label="Progress" size="large" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
    </div>,
  args: {
    progress: 80,
    variant: 'positive'
  }
}`,...(E=(h=o.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const G=["Default","Small","Large","AllVariants","AllSizes"];export{o as AllSizes,i as AllVariants,l as Default,n as Large,m as Small,G as __namedExportsOrder,O as default};
