import{r as n,R as e}from"./index-DpTt3J-R.js";import{u as Q,a as U,P as C,c as _,b as X}from"./index-iqTuoGYz.js";import{c as Y}from"./index-Ca3VPhni.js";import{u as Z,c as L,R as ee,I as ae}from"./index-CBdJq0in.js";import{j as v}from"./jsx-runtime-BjG_zV1W.js";import{c as V}from"./utilities-CP3_-lCt.js";import{C as te}from"./index-CZNa3luW.js";import{v as ne,I}from"./index-Z7pS7jLs.js";import"./index-D9ZhQrDp.js";import"./index-B6TRxRi1.js";import"./index-B5ODnmFs.js";import"./clsx-B-dksMZM.js";import"./index-Dp3B9jqt.js";/* empty css              *//* empty css               */var x="Tabs",[re,xe]=Y(x,[L]),j=L(),[se,w]=re(x),M=n.forwardRef((a,t)=>{const{__scopeTabs:s,value:i,onValueChange:l,defaultValue:c,orientation:r="horizontal",dir:d,activationMode:o="automatic",...g}=a,u=Z(d),[m,f]=Q({prop:i,onChange:l,defaultProp:c??"",caller:x});return v.jsx(se,{scope:s,baseId:U(),value:m,onValueChange:f,orientation:r,dir:u,activationMode:o,children:v.jsx(C.div,{dir:u,"data-orientation":r,...g,ref:t})})});M.displayName=x;var G="TabsList",B=n.forwardRef((a,t)=>{const{__scopeTabs:s,loop:i=!0,...l}=a,c=w(G,s),r=j(s);return v.jsx(ee,{asChild:!0,...r,orientation:c.orientation,dir:c.dir,loop:i,children:v.jsx(C.div,{role:"tablist","aria-orientation":c.orientation,...l,ref:t})})});B.displayName=G;var H="TabsTrigger",k=n.forwardRef((a,t)=>{const{__scopeTabs:s,value:i,disabled:l=!1,...c}=a,r=w(H,s),d=j(s),o=O(r.baseId,i),g=J(r.baseId,i),u=i===r.value;return v.jsx(ae,{asChild:!0,...d,focusable:!l,active:u,children:v.jsx(C.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":g,"data-state":u?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:o,...c,ref:t,onMouseDown:_(a.onMouseDown,m=>{!l&&m.button===0&&m.ctrlKey===!1?r.onValueChange(i):m.preventDefault()}),onKeyDown:_(a.onKeyDown,m=>{[" ","Enter"].includes(m.key)&&r.onValueChange(i)}),onFocus:_(a.onFocus,()=>{const m=r.activationMode!=="manual";!u&&!l&&m&&r.onValueChange(i)})})})});k.displayName=H;var W="TabsContent",K=n.forwardRef((a,t)=>{const{__scopeTabs:s,value:i,forceMount:l,children:c,...r}=a,d=w(W,s),o=O(d.baseId,i),g=J(d.baseId,i),u=i===d.value,m=n.useRef(u);return n.useEffect(()=>{const f=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(f)},[]),v.jsx(X,{present:l||u,children:({present:f})=>v.jsx(C.div,{"data-state":u?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":o,hidden:!f,id:g,tabIndex:0,...r,ref:t,style:{...a.style,animationDuration:m.current?"0s":void 0},children:f&&c})})});K.displayName=W;function O(a,t){return`${a}-trigger-${t}`}function J(a,t){return`${a}-content-${t}`}var le=M,ie=B,oe=k,ce=K;function T({className:a,onValueChange:t,orientation:s="horizontal",children:i,selectedValue:l,styleVariant:c="gray",verticalTabHeader:r="",...d}){return n.createElement(le,{"data-slot":"tabs",...d,className:V("flex",s==="vertical"?"flex-row-reverse":"flex-col",a),value:l},n.Children.map(i,o=>n.isValidElement(o)?n.cloneElement(o,{onValueChange:t,selectedValue:l,styleVariant:c,orientation:s,verticalTabHeader:r}):o))}function h({className:a,styleVariant:t,orientation:s,children:i,onValueChange:l,selectedValue:c,verticalTabHeader:r,...d}){return n.createElement("div",null,r&&n.createElement("div",{className:`flex items-center justify-start text-interactive-text-${t}-muted font-primary text-base font-medium mb-2 pr-1`},n.createElement(ne,{size:"large",className:`fill-surface-icon-${t}-muted mr-1`}),n.createElement("div",null,r)),n.createElement(ie,{"data-slot":"tabs-list",className:V("bg-muted text-muted-foreground",s==="vertical"?`flex flex-col h-fit w-36 items-start justify-start rounded-lg p-[3px] border-l-2 border-interactive-border-${t}-subtle rounded-0.5`:`inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px] border-b-2 border-interactive-border-${t}-subtle rounded-0.5`,"",r?"ml-2":"",a),...d},n.Children.map(i,(o,g)=>n.isValidElement(o)?n.cloneElement(o,{onValueChange:l,selectedValue:c,styleVariant:t,orientation:s}):o)))}function b({className:a,name:t,leadingIcon:s,counter:i,value:l,selectedValue:c,styleVariant:r,onValueChange:d,orientation:o,...g}){return n.createElement(oe,{value:l,"data-slot":"tabs-trigger",...g},n.createElement("button",{className:`${o==="vertical"?"flex":"mr-4 pt-1"} focus-visible:plum-focus focus:none mx-05 rounded-2`,onClick:()=>{d==null||d(l)}},c===l&&o==="vertical"?n.createElement("div",{className:`w-05 bg-interactive-icon-${r}-muted  ml-05-negative rounded-0.5`}):"",n.createElement("div",{className:V(`flex items-center font-primary text-base font-primary text-interactive-text-${r}-muted 
        hover:text-interactive-text-${r}-subtle 
        focus-visible:plum-focus ${o==="vertical"?`m-1 ml-${c===l?"45":"4"}`:`mb-${c===l?"25":"2"}`} `,`${o==="horizontal"?"mb-2":""}`)},s&&n.createElement(s,{size:"large",className:`mr-1 fill-surface-icon-${r}-${r==="beige"?"muted":"subtle"}`}),n.createElement("div",null,t),i&&n.createElement("div",{className:"ml-1"},n.createElement(te,{size:"medium",styleVariant:r==="beige"?"information":"neutral",value:i}))),c===l&&o==="horizontal"?n.createElement("div",{className:`h-05 bg-interactive-icon-${r}-muted mb-1-negative rounded-0.5`}):""))}function p({className:a,...t}){return n.createElement(ce,{"data-slot":"tabs-content",className:V("flex-1 outline-none",a),...t})}try{T.displayName="Tabs",T.__docgenInfo={description:"",displayName:"Tabs",props:{onValueChange:{defaultValue:null,description:"A function called when a new tab is selected",name:"onValueChange",required:!1,type:{name:"(value: string) => void"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"string"}},styleVariant:{defaultValue:{value:"gray"},description:"",name:"styleVariant",required:!1,type:{name:"string"}},verticalTabHeader:{defaultValue:{value:""},description:"",name:"verticalTabHeader",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:`The orientation the tabs are layed out.
Mainly so arrow navigation is done accordingly (left & right vs. up & down)`,name:"orientation",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="TabsList",h.__docgenInfo={description:"",displayName:"TabsList",props:{styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!1,type:{name:"string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"(value: string) => void"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"string"}},verticalTabHeader:{defaultValue:null,description:"",name:"verticalTabHeader",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{b.displayName="TabsTrigger",b.__docgenInfo={description:"",displayName:"TabsTrigger",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"FC<{}>"}},counter:{defaultValue:null,description:"",name:"counter",required:!1,type:{name:"number"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"string"}},styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"(value: string) => void"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="TabsContent",p.__docgenInfo={description:"",displayName:"TabsContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const _e={title:"Design System/Tabs",component:T,parameters:{layout:"centered",docs:{description:{component:"A tabs component for organizing content into multiple sections."}}},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"The orientation of the tabs"},styleVariant:{control:{type:"select"},options:["gray","beige"],description:"The style variant of the tabs"}},args:{orientation:"horizontal",styleVariant:"gray"}},y={render:a=>{const[t,s]=n.useState("tab1");return e.createElement(T,{...a,selectedValue:t,onValueChange:s,className:"w-96"},e.createElement(h,{...a},e.createElement(b,{selectedValue:t,onValueChange:s,value:"tab1",name:"First Tab"}),e.createElement(b,{selectedValue:t,onValueChange:s,value:"tab2",name:"Second Tab"}),e.createElement(b,{selectedValue:t,onValueChange:s,value:"tab3",name:"Third Tab"})),e.createElement(p,{value:"tab1"},e.createElement("div",{className:"p-4"},e.createElement("h3",{className:"text-lg font-semibold mb-2"},"First Tab Content"),e.createElement("p",null,"This is the content for the first tab."))),e.createElement(p,{value:"tab2"},e.createElement("div",{className:"p-4"},e.createElement("h3",{className:"text-lg font-semibold mb-2"},"Second Tab Content"),e.createElement("p",null,"This is the content for the second tab."))),e.createElement(p,{value:"tab3"},e.createElement("div",{className:"p-4"},e.createElement("h3",{className:"text-lg font-semibold mb-2"},"Third Tab Content"),e.createElement("p",null,"This is the content for the third tab."))))},args:{orientation:"horizontal",styleVariant:"gray"}},E={render:a=>{const[t,s]=n.useState("settings");return e.createElement(T,{...a,selectedValue:t,onValueChange:s,className:"w-96"},e.createElement(h,{...a},e.createElement(b,{value:"settings",name:"Settings",leadingIcon:I}),e.createElement(b,{value:"profile",name:"Profile",leadingIcon:I}),e.createElement(b,{value:"billing",name:"Billing",leadingIcon:I,counter:3})),e.createElement(p,{value:"settings"},e.createElement("div",{className:"p-4"},e.createElement("h3",{className:"text-lg font-semibold mb-2"},"Settings"),e.createElement("p",null,"Configure your application settings here."))),e.createElement(p,{value:"profile"},e.createElement("div",{className:"p-4"},e.createElement("h3",{className:"text-lg font-semibold mb-2"},"Profile"),e.createElement("p",null,"Manage your profile information."))),e.createElement(p,{value:"billing"},e.createElement("div",{className:"p-4"},e.createElement("h3",{className:"text-lg font-semibold mb-2"},"Billing"),e.createElement("p",null,"View your billing information and history."))))},args:{orientation:"horizontal",styleVariant:"gray"}},N={render:a=>{const[t,s]=n.useState("dashboard");return e.createElement(T,{...a,selectedValue:t,onValueChange:s,orientation:"vertical",className:"w-96 h-64",verticalTabHeader:"Navigation"},e.createElement(h,{...a,orientation:"vertical"},e.createElement(b,{value:"dashboard",name:"Dashboard"}),e.createElement(b,{value:"analytics",name:"Analytics"}),e.createElement(b,{value:"reports",name:"Reports"})),e.createElement(p,{value:"dashboard"},e.createElement("div",{className:"p-4"},e.createElement("h3",{className:"text-lg font-semibold mb-2"},"Dashboard"),e.createElement("p",null,"Welcome to your dashboard overview."))),e.createElement(p,{value:"analytics"},e.createElement("div",{className:"p-4"},e.createElement("h3",{className:"text-lg font-semibold mb-2"},"Analytics"),e.createElement("p",null,"View your analytics data here."))),e.createElement(p,{value:"reports"},e.createElement("div",{className:"p-4"},e.createElement("h3",{className:"text-lg font-semibold mb-2"},"Reports"),e.createElement("p",null,"Generate and view reports."))))},args:{styleVariant:"gray"}};var A,S,q;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState('tab1');
    return <Tabs {...args} selectedValue={activeTab} onValueChange={setActiveTab} className="w-96">
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
}`,...(q=(S=y.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var $,R,z;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(z=(R=E.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var P,D,F;N.parameters={...N.parameters,docs:{...(P=N.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(D=N.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const Ie=["Default","WithIcons","Vertical"];export{y as Default,N as Vertical,E as WithIcons,Ie as __namedExportsOrder,_e as default};
