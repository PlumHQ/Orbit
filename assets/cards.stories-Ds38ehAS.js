import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as x}from"./index-Dp3B9jqt.js";/* empty css               */import{c as S}from"./utilities-CP3_-lCt.js";/* empty css              */import"./clsx-B-dksMZM.js";const r=({size:a,cardStyle:g,children:i})=>{const v=x("border-solid border",{variants:{size:{large:"p-12 rounded-6",medium:"p-10 rounded-6",small:"p-6 rounded-4"},cardStyle:{primary:"border-surface-border-beige-subtle",positive:"border-feedback-border-positive-intense",negative:"border-feedback-border-negative-intense",secondary:"border-surface-border-gray-subtle"}}});return e.jsx("div",{className:S(v({size:a,cardStyle:g})),children:i&&i})};try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},cardStyle:{defaultValue:null,description:"",name:"cardStyle",required:!0,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'},{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},cardStyle:{defaultValue:null,description:"",name:"cardStyle",required:!0,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'},{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const _={title:"Design System/Card",component:r,parameters:{layout:"centered",docs:{description:{component:"A card component for grouping content with different sizes and styles."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["large","medium","small"],description:"The size of the card"},cardStyle:{control:{type:"select"},options:["primary","positive","negative","secondary"],description:"The style variant of the card"},children:{control:{type:"text"},description:"The content inside the card"}},args:{size:"medium",cardStyle:"primary",children:"Card content goes here"}},s={args:{size:"medium",cardStyle:"primary",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Card Title"}),e.jsx("p",{className:"text-gray-600",children:"This is some example content inside the card component."})]})}},d={render:a=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(r,{...a,size:"small",cardStyle:a.cardStyle,children:[e.jsx("h4",{className:"font-medium",children:"Small Card"}),e.jsx("p",{className:"text-sm",children:"Small card content"})]}),e.jsxs(r,{...a,size:"medium",cardStyle:a.cardStyle,children:[e.jsx("h4",{className:"font-medium",children:"Medium Card"}),e.jsx("p",{className:"text-sm",children:"Medium card content"})]}),e.jsxs(r,{...a,size:"large",cardStyle:a.cardStyle,children:[e.jsx("h4",{className:"font-medium",children:"Large Card"}),e.jsx("p",{className:"text-sm",children:"Large card content with more padding"})]})]}),args:{cardStyle:"primary"}},t={render:a=>e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs(r,{...a,cardStyle:"primary",size:"medium",children:[e.jsx("h4",{className:"font-medium",children:"Primary Card"}),e.jsx("p",{className:"text-sm",children:"Primary style card"})]}),e.jsxs(r,{...a,cardStyle:"secondary",size:"medium",children:[e.jsx("h4",{className:"font-medium",children:"Secondary Card"}),e.jsx("p",{className:"text-sm",children:"Secondary style card"})]}),e.jsxs(r,{...a,cardStyle:"positive",size:"medium",children:[e.jsx("h4",{className:"font-medium",children:"Positive Card"}),e.jsx("p",{className:"text-sm",children:"Positive style card"})]}),e.jsxs(r,{...a,cardStyle:"negative",size:"medium",children:[e.jsx("h4",{className:"font-medium",children:"Negative Card"}),e.jsx("p",{className:"text-sm",children:"Negative style card"})]})]}),args:{size:"medium"}};var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    cardStyle: 'primary',
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">This is some example content inside the card component.</p>
      </div>
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var n,o,p;d.parameters={...d.parameters,docs:{...(n=d.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(o=d.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var u,y,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const P=["Default","AllSizes","AllStyles"];export{d as AllSizes,t as AllStyles,s as Default,P as __namedExportsOrder,_ as default};
