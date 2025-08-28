import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-DpTt3J-R.js";import{u as J,a as Q,c as V,P as U}from"./index-Zex7zZ5g.js";import{c as X}from"./index-CC9pek2O.js";import{u as Y,c as z,R as Z,I as ee}from"./index-CFpPf2if.js";import"./index-D9ZhQrDp.js";import{c as ae}from"./index-B6TRxRi1.js";import{c as N}from"./utilities-WNthGydt.js";import{C as te}from"./index-PIl7ip1f.js";import{O as ne,I as _}from"./index-2-1EQAb5.js";import"./index-B5ODnmFs.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-CLJs87Zn.js";import"./index-Dp3B9jqt.js";/* empty css              *//* empty css               */var se=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],j=se.reduce((a,t)=>{const s=ae(`Primitive.${t}`),i=c.forwardRef((r,o)=>{const{asChild:n,...d}=r,l=n?s:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(l,{...d,ref:o})});return i.displayName=`Primitive.${t}`,{...a,[t]:i}},{}),C="Tabs",[ie,Ie]=X(C,[z]),D=z(),[re,I]=ie(C),F=c.forwardRef((a,t)=>{const{__scopeTabs:s,value:i,onValueChange:r,defaultValue:o,orientation:n="horizontal",dir:d,activationMode:l="automatic",...f}=a,u=Y(d),[m,g]=J({prop:i,onChange:r,defaultProp:o??"",caller:C});return e.jsx(re,{scope:s,baseId:Q(),value:m,onValueChange:g,orientation:n,dir:u,activationMode:l,children:e.jsx(j.div,{dir:u,"data-orientation":n,...f,ref:t})})});F.displayName=C;var M="TabsList",G=c.forwardRef((a,t)=>{const{__scopeTabs:s,loop:i=!0,...r}=a,o=I(M,s),n=D(s);return e.jsx(Z,{asChild:!0,...n,orientation:o.orientation,dir:o.dir,loop:i,children:e.jsx(j.div,{role:"tablist","aria-orientation":o.orientation,...r,ref:t})})});G.displayName=M;var B="TabsTrigger",H=c.forwardRef((a,t)=>{const{__scopeTabs:s,value:i,disabled:r=!1,...o}=a,n=I(B,s),d=D(s),l=W(n.baseId,i),f=K(n.baseId,i),u=i===n.value;return e.jsx(ee,{asChild:!0,...d,focusable:!r,active:u,children:e.jsx(j.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":f,"data-state":u?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:l,...o,ref:t,onMouseDown:V(a.onMouseDown,m=>{!r&&m.button===0&&m.ctrlKey===!1?n.onValueChange(i):m.preventDefault()}),onKeyDown:V(a.onKeyDown,m=>{[" ","Enter"].includes(m.key)&&n.onValueChange(i)}),onFocus:V(a.onFocus,()=>{const m=n.activationMode!=="manual";!u&&!r&&m&&n.onValueChange(i)})})})});H.displayName=B;var k="TabsContent",O=c.forwardRef((a,t)=>{const{__scopeTabs:s,value:i,forceMount:r,children:o,...n}=a,d=I(k,s),l=W(d.baseId,i),f=K(d.baseId,i),u=i===d.value,m=c.useRef(u);return c.useEffect(()=>{const g=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(g)},[]),e.jsx(U,{present:r||u,children:({present:g})=>e.jsx(j.div,{"data-state":u?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":l,hidden:!g,id:f,tabIndex:0,...n,ref:t,style:{...a.style,animationDuration:m.current?"0s":void 0},children:g&&o})})});O.displayName=k;function W(a,t){return`${a}-trigger-${t}`}function K(a,t){return`${a}-content-${t}`}var le=F,oe=G,de=H,ce=O;function v({className:a,onValueChange:t,orientation:s="horizontal",children:i,selectedValue:r,styleVariant:o="gray",verticalTabHeader:n="",...d}){return e.jsx(le,{"data-slot":"tabs",...d,className:N("flex",s==="vertical"?"flex-row-reverse":"flex-col",a),value:r,children:c.Children.map(i,l=>c.isValidElement(l)?c.cloneElement(l,{onValueChange:t,selectedValue:r,styleVariant:o,orientation:s,verticalTabHeader:n}):l)})}function h({className:a,styleVariant:t,orientation:s,children:i,onValueChange:r,selectedValue:o,verticalTabHeader:n,...d}){return e.jsxs("div",{children:[n&&e.jsxs("div",{className:`flex items-center justify-start text-interactive-text-${t}-muted font-primary text-base font-medium mb-2 pr-1`,children:[e.jsx(ne,{size:"large",className:`fill-surface-icon-${t}-muted mr-1`}),e.jsx("div",{children:n})]}),e.jsx(oe,{"data-slot":"tabs-list",className:N("bg-muted text-muted-foreground",s==="vertical"?`flex flex-col h-fit w-36 items-start justify-start rounded-lg p-[3px] border-l-2 border-interactive-border-${t}-subtle rounded-0.5`:`inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px] border-b-2 border-interactive-border-${t}-subtle rounded-0.5`,"",n?"ml-2":"",a),...d,children:c.Children.map(i,(l,f)=>c.isValidElement(l)?c.cloneElement(l,{onValueChange:r,selectedValue:o,styleVariant:t,orientation:s,isLastTab:f===c.Children.count(i)-1}):l)})]})}function b({className:a,name:t,leadingIcon:s,counter:i,value:r,selectedValue:o,styleVariant:n,onValueChange:d,orientation:l,isLastTab:f,...u}){return e.jsx(de,{value:r,"data-slot":"tabs-trigger",...u,children:e.jsxs("button",{className:`${l==="vertical"?"flex":`${f?"":"mr-4"} pt-1`} focus-visible:plum-focus focus:none mx-05 rounded-2`,onClick:()=>{d==null||d(r)},children:[o===r&&l==="vertical"?e.jsx("div",{className:`w-05 bg-interactive-icon-${n}-muted  ml-05-negative rounded-0.5`}):"",e.jsxs("div",{className:N(`flex items-center font-primary text-base font-primary text-interactive-text-${n}-muted 
        hover:text-interactive-text-${n}-subtle 
        focus-visible:plum-focus ${l==="vertical"?`m-1 ml-${o===r?"45":"4"}`:`mb-${o===r?"25":"2"}`} `,`${l==="horizontal"?"mb-2":""}`),children:[s&&c.createElement(s,{size:"large",className:`mr-1 fill-surface-icon-${n}-${n==="beige"?"muted":"subtle"}`}),e.jsx("div",{children:t}),i&&e.jsx("div",{className:"ml-1",children:e.jsx(te,{size:"medium",styleVariant:n==="beige"?"information":"neutral",value:i})})]}),o===r&&l==="horizontal"?e.jsx("div",{className:`h-05 bg-interactive-icon-${n}-muted mb-1-negative rounded-0.5`}):""]})})}function p({className:a,...t}){return e.jsx(ce,{"data-slot":"tabs-content",className:N("flex-1 outline-none",a),...t})}try{v.displayName="Tabs",v.__docgenInfo={description:"",displayName:"Tabs",props:{onValueChange:{defaultValue:null,description:"A function called when a new tab is selected",name:"onValueChange",required:!1,type:{name:"((value: string) => void) | undefined"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"string | undefined"}},styleVariant:{defaultValue:{value:"gray"},description:"",name:"styleVariant",required:!1,type:{name:"string | undefined"}},verticalTabHeader:{defaultValue:{value:""},description:"",name:"verticalTabHeader",required:!1,type:{name:"string | undefined"}},orientation:{defaultValue:{value:"horizontal"},description:`The orientation the tabs are layed out.
Mainly so arrow navigation is done accordingly (left & right vs. up & down)`,name:"orientation",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{h.displayName="TabsList",h.__docgenInfo={description:"",displayName:"TabsList",props:{styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!1,type:{name:"string | undefined"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"string | undefined"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: string) => void) | undefined"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"string | undefined"}},verticalTabHeader:{defaultValue:null,description:"",name:"verticalTabHeader",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{b.displayName="TabsTrigger",b.__docgenInfo={description:"",displayName:"TabsTrigger",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"FC<{}> | undefined"}},counter:{defaultValue:null,description:"",name:"counter",required:!1,type:{name:"number | undefined"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"string | undefined"}},styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!1,type:{name:"string | undefined"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: string) => void) | undefined"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},isLastTab:{defaultValue:null,description:"",name:"isLastTab",required:!1,type:{name:"boolean | undefined"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{p.displayName="TabsContent",p.__docgenInfo={description:"",displayName:"TabsContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const we={title:"Design System/Tabs",component:v,parameters:{layout:"centered",docs:{description:{component:"A tabs component for organizing content into multiple sections."}}},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"The orientation of the tabs"},styleVariant:{control:{type:"select"},options:["gray","beige"],description:"The style variant of the tabs"}},args:{orientation:"horizontal",styleVariant:"gray"}},T={render:a=>{const[t,s]=c.useState("tab1");return e.jsxs(v,{...a,selectedValue:t,onValueChange:s,children:[e.jsxs(h,{...a,children:[e.jsx(b,{selectedValue:t,onValueChange:s,value:"tab1",name:"First Tab"}),e.jsx(b,{selectedValue:t,onValueChange:s,value:"tab2",name:"Second Tab"}),e.jsx(b,{selectedValue:t,onValueChange:s,value:"tab3",name:"Third Tab"})]}),e.jsx(p,{value:"tab1",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"First Tab Content"}),e.jsx("p",{children:"This is the content for the first tab."})]})}),e.jsx(p,{value:"tab2",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Second Tab Content"}),e.jsx("p",{children:"This is the content for the second tab."})]})}),e.jsx(p,{value:"tab3",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Third Tab Content"}),e.jsx("p",{children:"This is the content for the third tab."})]})})]})},args:{orientation:"horizontal",styleVariant:"gray"}},x={render:a=>{const[t,s]=c.useState("settings");return e.jsxs(v,{...a,selectedValue:t,onValueChange:s,className:"w-96",children:[e.jsxs(h,{...a,children:[e.jsx(b,{value:"settings",name:"Settings",leadingIcon:_}),e.jsx(b,{value:"profile",name:"Profile",leadingIcon:_}),e.jsx(b,{value:"billing",name:"Billing",leadingIcon:_,counter:3})]}),e.jsx(p,{value:"settings",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Settings"}),e.jsx("p",{children:"Configure your application settings here."})]})}),e.jsx(p,{value:"profile",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Profile"}),e.jsx("p",{children:"Manage your profile information."})]})}),e.jsx(p,{value:"billing",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Billing"}),e.jsx("p",{children:"View your billing information and history."})]})})]})},args:{orientation:"horizontal",styleVariant:"gray"}},y={render:a=>{const[t,s]=c.useState("dashboard");return e.jsxs(v,{...a,selectedValue:t,onValueChange:s,orientation:"vertical",className:"w-96 h-64",verticalTabHeader:"Navigation",children:[e.jsxs(h,{...a,orientation:"vertical",children:[e.jsx(b,{value:"dashboard",name:"Dashboard"}),e.jsx(b,{value:"analytics",name:"Analytics"}),e.jsx(b,{value:"reports",name:"Reports"})]}),e.jsx(p,{value:"dashboard",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Dashboard"}),e.jsx("p",{children:"Welcome to your dashboard overview."})]})}),e.jsx(p,{value:"analytics",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Analytics"}),e.jsx("p",{children:"View your analytics data here."})]})}),e.jsx(p,{value:"reports",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Reports"}),e.jsx("p",{children:"Generate and view reports."})]})})]})},args:{styleVariant:"gray"}};var w,S,A;T.parameters={...T.parameters,docs:{...(w=T.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(A=(S=T.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var q,$,R;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=($=x.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var E,P,L;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState('dashboard');
    return <Tabs {...args} selectedValue={activeTab} onValueChange={setActiveTab} orientation="vertical" className="w-96 h-64" verticalTabHeader="Navigation">
        <TabsList {...args} orientation="vertical">
          <TabsTrigger value="dashboard" name="Dashboard" />
          <TabsTrigger value="analytics" name="Analytics" />
          <TabsTrigger value="reports" name="Reports" />
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
}`,...(L=(P=y.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const Se=["Default","WithIcons","Vertical"];export{T as Default,y as Vertical,x as WithIcons,Se as __namedExportsOrder,we as default};
