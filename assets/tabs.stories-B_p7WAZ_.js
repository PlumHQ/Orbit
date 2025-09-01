import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-DpTt3J-R.js";import{u as H,a as M,c as V,P as G}from"./index-PdevSJdQ.js";import{c as B}from"./index-bX3F6qy8.js";import{u as k,c as S,R as O,I as W}from"./index-ZRahkmzL.js";import"./index-D9ZhQrDp.js";import{c as K}from"./index-CxBDjkVw.js";import{c as C}from"./utilities-DX5EtrsU.js";import{C as J}from"./index-BTmPGD2O.js";import{O as Q,I,H as _}from"./index-BKY7SJYe.js";import"./index-B5ODnmFs.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-C8PyMnuF.js";import"./index-B8k91cqS.js";/* empty css              *//* empty css               */var U=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],N=U.reduce((a,t)=>{const s=K(`Primitive.${t}`),i=d.forwardRef((r,o)=>{const{asChild:n,...c}=r,l=n?s:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(l,{...c,ref:o})});return i.displayName=`Primitive.${t}`,{...a,[t]:i}},{}),j="Tabs",[X,Te]=B(j,[S]),A=S(),[Y,w]=X(j),q=d.forwardRef((a,t)=>{const{__scopeTabs:s,value:i,onValueChange:r,defaultValue:o,orientation:n="horizontal",dir:c,activationMode:l="automatic",...b}=a,u=k(c),[m,g]=H({prop:i,onChange:r,defaultProp:o??"",caller:j});return e.jsx(Y,{scope:s,baseId:M(),value:m,onValueChange:g,orientation:n,dir:u,activationMode:l,children:e.jsx(N.div,{dir:u,"data-orientation":n,...b,ref:t})})});q.displayName=j;var $="TabsList",R=d.forwardRef((a,t)=>{const{__scopeTabs:s,loop:i=!0,...r}=a,o=w($,s),n=A(s);return e.jsx(O,{asChild:!0,...n,orientation:o.orientation,dir:o.dir,loop:i,children:e.jsx(N.div,{role:"tablist","aria-orientation":o.orientation,...r,ref:t})})});R.displayName=$;var E="TabsTrigger",P=d.forwardRef((a,t)=>{const{__scopeTabs:s,value:i,disabled:r=!1,...o}=a,n=w(E,s),c=A(s),l=D(n.baseId,i),b=F(n.baseId,i),u=i===n.value;return e.jsx(W,{asChild:!0,...c,focusable:!r,active:u,children:e.jsx(N.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":b,"data-state":u?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:l,...o,ref:t,onMouseDown:V(a.onMouseDown,m=>{!r&&m.button===0&&m.ctrlKey===!1?n.onValueChange(i):m.preventDefault()}),onKeyDown:V(a.onKeyDown,m=>{[" ","Enter"].includes(m.key)&&n.onValueChange(i)}),onFocus:V(a.onFocus,()=>{const m=n.activationMode!=="manual";!u&&!r&&m&&n.onValueChange(i)})})})});P.displayName=E;var L="TabsContent",z=d.forwardRef((a,t)=>{const{__scopeTabs:s,value:i,forceMount:r,children:o,...n}=a,c=w(L,s),l=D(c.baseId,i),b=F(c.baseId,i),u=i===c.value,m=d.useRef(u);return d.useEffect(()=>{const g=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(g)},[]),e.jsx(G,{present:r||u,children:({present:g})=>e.jsx(N.div,{"data-state":u?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":l,hidden:!g,id:b,tabIndex:0,...n,ref:t,style:{...a.style,animationDuration:m.current?"0s":void 0},children:g&&o})})});z.displayName=L;function D(a,t){return`${a}-trigger-${t}`}function F(a,t){return`${a}-content-${t}`}var Z=q,ee=R,ae=P,te=z;function h({className:a,onValueChange:t,orientation:s="horizontal",children:i,selectedValue:r,styleVariant:o="gray",verticalTabHeader:n="",...c}){return e.jsx(Z,{"data-slot":"tabs",...c,className:C("flex",s==="vertical"?"flex-row-reverse":"flex-col",a),value:r,children:d.Children.map(i,l=>d.isValidElement(l)?d.cloneElement(l,{onValueChange:t,selectedValue:r,styleVariant:o,orientation:s,verticalTabHeader:n}):l)})}function v({className:a,styleVariant:t,orientation:s,children:i,onValueChange:r,selectedValue:o,verticalTabHeader:n,showHeaderIcon:c,...l}){return e.jsxs("div",{children:[n&&e.jsxs("div",{className:`flex items-center justify-start text-interactive-text-${t}-muted font-primary text-base font-medium mb-2 pr-1`,children:[c&&e.jsx(Q,{size:"large",className:`fill-surface-icon-${t}-muted mr-1`}),e.jsx("div",{children:n})]}),e.jsx(ee,{"data-slot":"tabs-list",className:C("bg-muted text-muted-foreground",s==="vertical"?`flex flex-col h-fit w-36 items-start justify-start rounded-lg border-l-2 border-interactive-border-${t}-subtle rounded-0.5`:`inline-flex h-9 w-fit items-center justify-center rounded-lg  border-b-2 border-interactive-border-${t}-subtle rounded-0.5`,"",n?"ml-2":"",a),...l,children:d.Children.map(i,(b,u)=>d.isValidElement(b)?d.cloneElement(b,{onValueChange:r,selectedValue:o,styleVariant:t,orientation:s,isLastTab:u===d.Children.count(i)-1}):b)})]})}function p({className:a,name:t,leadingIcon:s,counter:i,value:r,selectedValue:o,styleVariant:n,onValueChange:c,orientation:l,isLastTab:b,...u}){return e.jsx(ae,{value:r,"data-slot":"tabs-trigger",...u,children:e.jsxs("button",{className:`${l==="vertical"?"flex":`${b?"":"mr-4"} pt-1`} focus-visible:plum-focus focus:none rounded-2`,onClick:()=>{c?.(r)},children:[o===r&&l==="vertical"?e.jsx("div",{className:`w-05 bg-interactive-icon-${n}-muted  ml-1-negative rounded-0.5`}):"",e.jsxs("div",{className:C(`flex items-center font-primary text-base font-primary text-interactive-text-${n}-muted 
        hover:text-interactive-text-${n}-subtle 
        focus-visible:plum-focus ${l==="vertical"?`m-1 ml-${o===r?"45":"4"}`:`mb-${o===r?"25":"2"}`} `,`${l==="horizontal"?"mb-2":""}`),children:[s&&d.createElement(s,{size:"large",className:`mr-1 fill-surface-icon-${n}-${n==="beige"?"muted":"subtle"}`}),e.jsx("div",{children:t}),i&&e.jsx("div",{className:"ml-1",children:e.jsx(J,{size:"medium",styleVariant:n==="beige"?"information":"neutral",value:i})})]}),o===r&&l==="horizontal"?e.jsx("div",{className:`h-05 bg-interactive-icon-${n}-muted mb-1-negative rounded-0.5`}):""]})})}function f({className:a,...t}){return e.jsx(te,{"data-slot":"tabs-content",className:C("flex-1 outline-none",a),...t})}try{h.displayName="Tabs",h.__docgenInfo={description:"",displayName:"Tabs",props:{onValueChange:{defaultValue:null,description:"A function called when a new tab is selected",name:"onValueChange",required:!1,type:{name:"((value: string) => void) | undefined"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"string | undefined"}},styleVariant:{defaultValue:{value:"gray"},description:"",name:"styleVariant",required:!1,type:{name:"string | undefined"}},verticalTabHeader:{defaultValue:{value:""},description:"",name:"verticalTabHeader",required:!1,type:{name:"string | undefined"}},orientation:{defaultValue:{value:"horizontal"},description:`The orientation the tabs are layed out.
Mainly so arrow navigation is done accordingly (left & right vs. up & down)`,name:"orientation",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{v.displayName="TabsList",v.__docgenInfo={description:"",displayName:"TabsList",props:{styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!1,type:{name:"string | undefined"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"string | undefined"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: string) => void) | undefined"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"string | undefined"}},verticalTabHeader:{defaultValue:null,description:"",name:"verticalTabHeader",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},showHeaderIcon:{defaultValue:null,description:"",name:"showHeaderIcon",required:!1,type:{name:"boolean | undefined"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{p.displayName="TabsTrigger",p.__docgenInfo={description:"",displayName:"TabsTrigger",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"FC<{}> | undefined"}},counter:{defaultValue:null,description:"",name:"counter",required:!1,type:{name:"number | undefined"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"string | undefined"}},styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!1,type:{name:"string | undefined"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: string) => void) | undefined"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},isLastTab:{defaultValue:null,description:"",name:"isLastTab",required:!1,type:{name:"boolean | undefined"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{f.displayName="TabsContent",f.__docgenInfo={description:"",displayName:"TabsContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const xe={title:"Design System/Tabs",component:h,parameters:{layout:"centered",docs:{description:{component:"A tabs component for organizing content into multiple sections."}}},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"The orientation of the tabs"},styleVariant:{control:{type:"select"},options:["gray","beige"],description:"The style variant of the tabs"}},args:{orientation:"horizontal",styleVariant:"gray"}},T={render:a=>{const[t,s]=d.useState("tab1");return e.jsxs(h,{...a,selectedValue:t,onValueChange:s,children:[e.jsxs(v,{...a,children:[e.jsx(p,{selectedValue:t,onValueChange:s,value:"tab1",name:"First Tab"}),e.jsx(p,{selectedValue:t,onValueChange:s,value:"tab2",name:"Second Tab"}),e.jsx(p,{selectedValue:t,onValueChange:s,value:"tab3",name:"Third Tab"})]}),e.jsx(f,{value:"tab1",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"First Tab Content"}),e.jsx("p",{children:"This is the content for the first tab."})]})}),e.jsx(f,{value:"tab2",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Second Tab Content"}),e.jsx("p",{children:"This is the content for the second tab."})]})}),e.jsx(f,{value:"tab3",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Third Tab Content"}),e.jsx("p",{children:"This is the content for the third tab."})]})})]})},args:{orientation:"horizontal",styleVariant:"gray"}},x={render:a=>{const[t,s]=d.useState("settings");return e.jsxs(h,{...a,selectedValue:t,onValueChange:s,className:"w-96",children:[e.jsxs(v,{...a,children:[e.jsx(p,{value:"settings",name:"Settings",leadingIcon:I}),e.jsx(p,{value:"profile",name:"Profile",leadingIcon:I}),e.jsx(p,{value:"billing",name:"Billing",leadingIcon:I,counter:3})]}),e.jsx(f,{value:"settings",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Settings"}),e.jsx("p",{children:"Configure your application settings here."})]})}),e.jsx(f,{value:"profile",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Profile"}),e.jsx("p",{children:"Manage your profile information."})]})}),e.jsx(f,{value:"billing",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Billing"}),e.jsx("p",{children:"View your billing information and history."})]})})]})},args:{orientation:"horizontal",styleVariant:"gray"}},y={render:a=>{const[t,s]=d.useState("dashboard");return e.jsxs(h,{...a,selectedValue:t,onValueChange:s,orientation:"vertical",className:"w-96 h-64",verticalTabHeader:"Navigation",children:[e.jsxs(v,{...a,orientation:"vertical",showHeaderIcon:!0,children:[e.jsx(p,{value:"dashboard",name:"Dashboard",leadingIcon:_}),e.jsx(p,{value:"analytics",name:"Analytics",leadingIcon:_}),e.jsx(p,{value:"reports",name:"Reports",leadingIcon:_})]}),e.jsx(f,{value:"dashboard",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Dashboard"}),e.jsx("p",{children:"Welcome to your dashboard overview."})]})}),e.jsx(f,{value:"analytics",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Analytics"}),e.jsx("p",{children:"View your analytics data here."})]})}),e.jsx(f,{value:"reports",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Reports"}),e.jsx("p",{children:"Generate and view reports."})]})})]})},args:{styleVariant:"gray"}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState('tab1');
    return <Tabs {...args} selectedValue={activeTab} onValueChange={setActiveTab}>
        <TabsList {...args}>
          <TabsTrigger selectedValue={activeTab} onValueChange={setActiveTab} value="tab1" name="First Tab" />
          <TabsTrigger selectedValue={activeTab} onValueChange={setActiveTab} value="tab2" name="Second Tab" />
          <TabsTrigger selectedValue={activeTab} onValueChange={setActiveTab} value="tab3" name="Third Tab" />
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">First Tab Content</h3>
            <p>This is the content for the first tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Second Tab Content</h3>
            <p>This is the content for the second tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Third Tab Content</h3>
            <p>This is the content for the third tab.</p>
          </div>
        </TabsContent>
      </Tabs>;
  },
  args: {
    orientation: 'horizontal',
    styleVariant: 'gray'
  }
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState('settings');
    return <Tabs {...args} selectedValue={activeTab} onValueChange={setActiveTab} className="w-96">
        <TabsList {...args}>
          <TabsTrigger value="settings" name="Settings" leadingIcon={InfoIcon} />
          <TabsTrigger value="profile" name="Profile" leadingIcon={InfoIcon} />
          <TabsTrigger value="billing" name="Billing" leadingIcon={InfoIcon} counter={3} />
        </TabsList>
        <TabsContent value="settings">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <p>Configure your application settings here.</p>
          </div>
        </TabsContent>
        <TabsContent value="profile">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Profile</h3>
            <p>Manage your profile information.</p>
          </div>
        </TabsContent>
        <TabsContent value="billing">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Billing</h3>
            <p>View your billing information and history.</p>
          </div>
        </TabsContent>
      </Tabs>;
  },
  args: {
    orientation: 'horizontal',
    styleVariant: 'gray'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState('dashboard');
    return <Tabs {...args} selectedValue={activeTab} onValueChange={setActiveTab} orientation="vertical" className="w-96 h-64" verticalTabHeader="Navigation">
        <TabsList {...args} orientation="vertical" showHeaderIcon={true}>
          <TabsTrigger value="dashboard" name="Dashboard" leadingIcon={HeartIcon} />
          <TabsTrigger value="analytics" name="Analytics" leadingIcon={HeartIcon} />
          <TabsTrigger value="reports" name="Reports" leadingIcon={HeartIcon} />
        </TabsList>
        <TabsContent value="dashboard">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Dashboard</h3>
            <p>Welcome to your dashboard overview.</p>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p>View your analytics data here.</p>
          </div>
        </TabsContent>
        <TabsContent value="reports">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Reports</h3>
            <p>Generate and view reports.</p>
          </div>
        </TabsContent>
      </Tabs>;
  },
  args: {
    styleVariant: 'gray'
  }
}`,...y.parameters?.docs?.source}}};const ye=["Default","WithIcons","Vertical"];export{T as Default,y as Vertical,x as WithIcons,ye as __namedExportsOrder,xe as default};
