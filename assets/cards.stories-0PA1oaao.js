import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as m}from"./index-B8k91cqS.js";/* empty css               */import{c as n}from"./utilities-DX5EtrsU.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./bundle-mjs-C8PyMnuF.js";const r=({size:a,cardStyle:c,children:i})=>{const l=m("border-solid border",{variants:{size:{large:"p-12 rounded-6",medium:"p-10 rounded-6",small:"p-6 rounded-4"},cardStyle:{primary:"border-surface-border-beige-subtle",positive:"border-feedback-border-positive-intense",negative:"border-feedback-border-negative-intense",secondary:"border-surface-border-gray-subtle"}}});return e.jsx("div",{className:n(l({size:a,cardStyle:c})),children:i&&i})};try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},cardStyle:{defaultValue:null,description:"",name:"cardStyle",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"positive"'},{value:'"negative"'},{value:'"secondary"'}]}}}}}catch{}try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},cardStyle:{defaultValue:null,description:"",name:"cardStyle",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"positive"'},{value:'"negative"'},{value:'"secondary"'}]}}}}}catch{}const x={title:"Design System/Card",component:r,parameters:{layout:"centered",docs:{description:{component:"A card component for grouping content with different sizes and styles."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["large","medium","small"],description:"The size of the card"},cardStyle:{control:{type:"select"},options:["primary","positive","negative","secondary"],description:"The style variant of the card"},children:{control:{type:"text"},description:"The content inside the card"}},args:{size:"medium",cardStyle:"primary",children:"Card content goes here"}},s={args:{size:"medium",cardStyle:"primary",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Card Title"}),e.jsx("p",{className:"text-gray-600",children:"This is some example content inside the card component."})]})}},d={render:a=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(r,{...a,size:"small",cardStyle:a.cardStyle,children:[e.jsx("h4",{className:"font-medium",children:"Small Card"}),e.jsx("p",{className:"text-sm",children:"Small card content"})]}),e.jsxs(r,{...a,size:"medium",cardStyle:a.cardStyle,children:[e.jsx("h4",{className:"font-medium",children:"Medium Card"}),e.jsx("p",{className:"text-sm",children:"Medium card content"})]}),e.jsxs(r,{...a,size:"large",cardStyle:a.cardStyle,children:[e.jsx("h4",{className:"font-medium",children:"Large Card"}),e.jsx("p",{className:"text-sm",children:"Large card content with more padding"})]})]}),args:{cardStyle:"primary"}},t={render:a=>e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs(r,{...a,cardStyle:"primary",size:"medium",children:[e.jsx("h4",{className:"font-medium",children:"Primary Card"}),e.jsx("p",{className:"text-sm",children:"Primary style card"})]}),e.jsxs(r,{...a,cardStyle:"secondary",size:"medium",children:[e.jsx("h4",{className:"font-medium",children:"Secondary Card"}),e.jsx("p",{className:"text-sm",children:"Secondary style card"})]}),e.jsxs(r,{...a,cardStyle:"positive",size:"medium",children:[e.jsx("h4",{className:"font-medium",children:"Positive Card"}),e.jsx("p",{className:"text-sm",children:"Positive style card"})]}),e.jsxs(r,{...a,cardStyle:"negative",size:"medium",children:[e.jsx("h4",{className:"font-medium",children:"Negative Card"}),e.jsx("p",{className:"text-sm",children:"Negative style card"})]})]}),args:{size:"medium"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    cardStyle: 'primary',
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">This is some example content inside the card component.</p>
      </div>
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <Card {...args} size="small" cardStyle={args.cardStyle}>
        <h4 className="font-medium">Small Card</h4>
        <p className="text-sm">Small card content</p>
      </Card>
      <Card {...args} size="medium" cardStyle={args.cardStyle}>
        <h4 className="font-medium">Medium Card</h4>
        <p className="text-sm">Medium card content</p>
      </Card>
      <Card {...args} size="large" cardStyle={args.cardStyle}>
        <h4 className="font-medium">Large Card</h4>
        <p className="text-sm">Large card content with more padding</p>
      </Card>
    </div>,
  args: {
    cardStyle: 'primary'
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div className="grid grid-cols-2 gap-4">
      <Card {...args} cardStyle="primary" size="medium">
        <h4 className="font-medium">Primary Card</h4>
        <p className="text-sm">Primary style card</p>
      </Card>
      <Card {...args} cardStyle="secondary" size="medium">
        <h4 className="font-medium">Secondary Card</h4>
        <p className="text-sm">Secondary style card</p>
      </Card>
      <Card {...args} cardStyle="positive" size="medium">
        <h4 className="font-medium">Positive Card</h4>
        <p className="text-sm">Positive style card</p>
      </Card>
      <Card {...args} cardStyle="negative" size="medium">
        <h4 className="font-medium">Negative Card</h4>
        <p className="text-sm">Negative style card</p>
      </Card>
    </div>,
  args: {
    size: 'medium'
  }
}`,...t.parameters?.docs?.source}}};const S=["Default","AllSizes","AllStyles"];export{d as AllSizes,t as AllStyles,s as Default,S as __namedExportsOrder,x as default};
