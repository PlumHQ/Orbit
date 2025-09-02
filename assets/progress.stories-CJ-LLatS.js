import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as v}from"./utilities-DX5EtrsU.js";/* empty css               *//* empty css              */import{p as f,A as T}from"./index-DGR86Cth.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-C8PyMnuF.js";const h=({size:r="medium",progress:m,className:d,variant:a,primaryText:c,secondaryText:p,label:u})=>{const x={large:"h-4",medium:"h-3",small:"h-2"},g=Math.min(Math.max(m,0),100),y=a==="positive"?f:T;return e.jsxs("div",{className:"flex flex-col gap-15",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("p",{className:`text-${r==="small"?"sm":"base"} font-medium font-primary text-feedback-text-neutral-subtle ${a==="neutral"?"text-feedback-text-neutral-normal":""}`,children:u}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("p",{className:`text-${r==="small"?"sm":"base"} font-semibold font-primary text-feedback-text-neutral-normal`,children:c}),e.jsx("p",{className:`text-${r==="small"?"sm":"base"} font-semibold font-primary text-feedback-text-neutral-subtle`,children:p}),a!=="neutral"&&e.jsx(y,{size:"large",className:`fill-feedback-icon-${a}-${a==="positive"?"subtle":"intense"}`})]})]}),e.jsx("div",{className:v("w-full bg-interactive-background-neutral-subtle rounded-8 overflow-hidden",x[r],d),children:e.jsx("div",{className:`h-full bg-feedback-background-${a}-intense transition-all duration-300 ease-in-out`,style:{width:`${g}%`}})})]})},s=h;try{s.displayName="Progress",s.__docgenInfo={description:"",displayName:"Progress",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"positive"'},{value:'"negative"'},{value:'"neutral"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},primaryText:{defaultValue:null,description:"",name:"primaryText",required:!1,type:{name:"string | undefined"}},secondaryText:{defaultValue:null,description:"",name:"secondaryText",required:!1,type:{name:"string | undefined"}}}}}catch{}try{component.displayName="component",component.__docgenInfo={description:"",displayName:"component",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"positive"'},{value:'"negative"'},{value:'"neutral"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},primaryText:{defaultValue:null,description:"",name:"primaryText",required:!1,type:{name:"string | undefined"}},secondaryText:{defaultValue:null,description:"",name:"secondaryText",required:!1,type:{name:"string | undefined"}}}}}catch{}const V={title:"Design System/Progress",component:s,parameters:{layout:"centered",docs:{description:{component:"A progress bar component with customizable sizes and variants."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the progress bar"},variant:{control:{type:"select"},options:["neutral","positive","negative"],description:"The color variant of the progress bar"},progress:{control:{type:"range",min:0,max:100,step:1},description:"Progress value from 0 to 100"}},args:{progress:50,size:"medium",variant:"positive"}},t={render:r=>e.jsx("div",{className:"space-y-4 w-100",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Default"}),e.jsx(s,{...r,label:"Progress",size:"medium",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]})})},i={render:r=>e.jsx("div",{className:"space-y-4 w-100",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small"}),e.jsx(s,{...r,label:"Progress",size:"small",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]})})},n={render:r=>e.jsx("div",{className:"space-y-4 w-100",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Large"}),e.jsx(s,{...r,label:"Progress",size:"large",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]})})},l={render:r=>e.jsxs("div",{className:"space-y-4 w-100",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Positive"}),e.jsx(s,{...r,label:"Progress",variant:"positive",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Neutral"}),e.jsx(s,{...r,label:"Progress",variant:"neutral",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Negative"}),e.jsx(s,{...r,label:"Progress",variant:"negative",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]})]}),args:{progress:65,size:"medium"}},o={render:r=>e.jsxs("div",{className:"space-y-4 w-100",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small"}),e.jsx(s,{...r,label:"Progress",size:"small",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Medium"}),e.jsx(s,{...r,label:"Progress",size:"medium",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Large"}),e.jsx(s,{...r,label:"Progress",size:"large",primaryText:"Primary Text",secondaryText:"Secondary Text",progress:r.progress})]})]}),args:{progress:80,variant:"positive"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Default</h3>
        <Progress {...args} label="Progress" size="medium" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Small</h3>
        <Progress {...args} label="Progress" size="small" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>  
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-100">
      <div>
        <h3 className="text-sm font-medium mb-2">Large</h3>
        <Progress {...args} label="Progress" size="large" primaryText="Primary Text" secondaryText="Secondary Text" progress={args.progress} />
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const w=["Default","Small","Large","AllVariants","AllSizes"];export{o as AllSizes,l as AllVariants,t as Default,n as Large,i as Small,w as __namedExportsOrder,V as default};
