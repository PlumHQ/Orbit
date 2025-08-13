import{R as e}from"./index-DpTt3J-R.js";import{c as N}from"./index-Dp3B9jqt.js";/* empty css               */import{c as h}from"./utilities-CP3_-lCt.js";/* empty css              */import"./clsx-B-dksMZM.js";const r=({size:a,cardStyle:v,children:m})=>{const S=N("border-solid border",{variants:{size:{large:"p-12 rounded-6",medium:"p-10 rounded-6",small:"p-6 rounded-4"},cardStyle:{primary:"border-surface-border-beige-subtle",positive:"border-feedback-border-positive-intense",negative:"border-feedback-border-negative-intense",secondary:"border-surface-border-gray-subtle"}}});return e.createElement("div",{className:h(S({size:a,cardStyle:v}))},m&&m)};try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},cardStyle:{defaultValue:null,description:"",name:"cardStyle",required:!0,type:{name:"enum",value:[{value:'"positive"'},{value:'"negative"'},{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},cardStyle:{defaultValue:null,description:"",name:"cardStyle",required:!0,type:{name:"enum",value:[{value:'"positive"'},{value:'"negative"'},{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const _={title:"Design System/Card",component:r,parameters:{layout:"centered",docs:{description:{component:"A card component for grouping content with different sizes and styles."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["large","medium","small"],description:"The size of the card"},cardStyle:{control:{type:"select"},options:["primary","positive","negative","secondary"],description:"The style variant of the card"},children:{control:{type:"text"},description:"The content inside the card"}},args:{size:"medium",cardStyle:"primary",children:"Card content goes here"}},t={args:{size:"medium",cardStyle:"primary",children:e.createElement("div",null,e.createElement("h3",{className:"text-lg font-semibold mb-2"},"Card Title"),e.createElement("p",{className:"text-gray-600"},"This is some example content inside the card component."))}},s={render:a=>e.createElement("div",{className:"space-y-4"},e.createElement(r,{...a,size:"small",cardStyle:a.cardStyle},e.createElement("h4",{className:"font-medium"},"Small Card"),e.createElement("p",{className:"text-sm"},"Small card content")),e.createElement(r,{...a,size:"medium",cardStyle:a.cardStyle},e.createElement("h4",{className:"font-medium"},"Medium Card"),e.createElement("p",{className:"text-sm"},"Medium card content")),e.createElement(r,{...a,size:"large",cardStyle:a.cardStyle},e.createElement("h4",{className:"font-medium"},"Large Card"),e.createElement("p",{className:"text-sm"},"Large card content with more padding"))),args:{cardStyle:"primary"}},d={render:a=>e.createElement("div",{className:"grid grid-cols-2 gap-4"},e.createElement(r,{...a,cardStyle:"primary",size:"medium"},e.createElement("h4",{className:"font-medium"},"Primary Card"),e.createElement("p",{className:"text-sm"},"Primary style card")),e.createElement(r,{...a,cardStyle:"secondary",size:"medium"},e.createElement("h4",{className:"font-medium"},"Secondary Card"),e.createElement("p",{className:"text-sm"},"Secondary style card")),e.createElement(r,{...a,cardStyle:"positive",size:"medium"},e.createElement("h4",{className:"font-medium"},"Positive Card"),e.createElement("p",{className:"text-sm"},"Positive style card")),e.createElement(r,{...a,cardStyle:"negative",size:"medium"},e.createElement("h4",{className:"font-medium"},"Negative Card"),e.createElement("p",{className:"text-sm"},"Negative style card"))),args:{size:"medium"}};var c,l,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    cardStyle: 'primary',
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">This is some example content inside the card component.</p>
      </div>
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var n,o,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(o=s.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var u,y,g;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(y=d.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const P=["Default","AllSizes","AllStyles"];export{s as AllSizes,d as AllStyles,t as Default,P as __namedExportsOrder,_ as default};
