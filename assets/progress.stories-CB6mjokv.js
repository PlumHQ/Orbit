import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as $}from"./utilities-CP3_-lCt.js";/* empty css               *//* empty css              */import{m as A,A as L}from"./index-C8heY3qb.js";import"./clsx-B-dksMZM.js";const D=({size:r="medium",progress:j,className:S,variant:a,primaryText:z,secondaryText:_,label:V})=>{const w={large:"h-4",medium:"h-3",small:"h-2"},q=Math.min(Math.max(j,0),100),k=a==="positive"?A:L;return e.jsxs("div",{className:"flex flex-col gap-15",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("p",{className:`text-${r==="small"?"sm":"base"} font-medium font-primary text-feedback-text-neutral-subtle ${a==="neutral"?"text-feedback-text-neutral-normal":""}`,children:V}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("p",{className:`text-${r==="small"?"sm":"base"} font-semibold font-primary text-feedback-text-neutral-normal`,children:z}),e.jsx("p",{className:`text-${r==="small"?"sm":"base"} font-semibold font-primary text-feedback-text-neutral-subtle`,children:_}),a!=="neutral"&&e.jsx(k,{size:"large",className:`fill-feedback-icon-${a}-${a==="positive"?"subtle":"intense"}`})]})]}),e.jsx("div",{className:$("w-full bg-interactive-background-neutral-subtle rounded-8 overflow-hidden",w[r],S),children:e.jsx("div",{className:`h-full bg-feedback-background-${a}-intense transition-all duration-300 ease-in-out`,style:{width:`${q}%`}})})]})},s=D;try{s.displayName="Progress",s.__docgenInfo={description:"",displayName:"Progress",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"negative"'},{value:'"positive"'},{value:'"neutral"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},primaryText:{defaultValue:null,description:"",name:"primaryText",required:!1,type:{name:"string | undefined"}},secondaryText:{defaultValue:null,description:"",name:"secondaryText",required:!1,type:{name:"string | undefined"}}}}}catch{}try{component.displayName="component",component.__docgenInfo={description:"",displayName:"component",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"negative"'},{value:'"positive"'},{value:'"neutral"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},primaryText:{defaultValue:null,description:"",name:"primaryText",required:!1,type:{name:"string | undefined"}},secondaryText:{defaultValue:null,description:"",name:"secondaryText",required:!1,type:{name:"string | undefined"}}}}}catch{}const O={title:"Design System/Progress",component:s,parameters:{layout:"centered",docs:{description:{component:"A progress bar component with customizable sizes and variants."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the progress bar"},variant:{control:{type:"select"},options:["neutral","positive","negative"],description:"The color variant of the progress bar"},progress:{control:{type:"range",min:0,max:100,step:1},description:"Progress value from 0 to 100"}},args:{progress:50,size:"medium",variant:"positive"}},t={render:r=>e.jsx("div",{className:"space-y-4 w-100",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Default"}),e.jsx(s,{...r,label:"Progress",size:"medium",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]})})},i={render:r=>e.jsx("div",{className:"space-y-4 w-100",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small"}),e.jsx(s,{...r,label:"Progress",size:"small",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]})})},n={render:r=>e.jsx("div",{className:"space-y-4 w-100",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Large"}),e.jsx(s,{...r,label:"Progress",size:"large",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]})})},l={render:r=>e.jsxs("div",{className:"space-y-4 w-100",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Positive"}),e.jsx(s,{...r,label:"Progress",variant:"positive",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Neutral"}),e.jsx(s,{...r,label:"Progress",variant:"neutral",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Negative"}),e.jsx(s,{...r,label:"Progress",variant:"negative",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]})]}),args:{progress:65,size:"medium"}},o={render:r=>e.jsxs("div",{className:"space-y-4 w-100",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small"}),e.jsx(s,{...r,label:"Progress",size:"small",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Medium"}),e.jsx(s,{...r,label:"Progress",size:"medium",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Large"}),e.jsx(s,{...r,label:"Progress",size:"large",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]})]}),args:{progress:80,variant:"positive"}};var m,d,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Default</h3>
        <Progress {...args} label="Progress" size="medium" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
    </div>
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,x;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Small</h3>
        <Progress {...args} label="Progress" size="small" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>  
    </div>
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,y,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Large</h3>
        <Progress {...args} label="Progress" size="large" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
    </div>
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,T,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(T=l.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var b,P,N;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(N=(P=o.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};const R=["Default","Small","Large","AllVariants","AllSizes"];export{o as AllSizes,l as AllVariants,t as Default,n as Large,i as Small,R as __namedExportsOrder,O as default};
