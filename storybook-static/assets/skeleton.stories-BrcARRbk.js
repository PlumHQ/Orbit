import{R as e}from"./index-DpTt3J-R.js";import{S as a}from"./index-CJOFCmGv.js";import"./utilities-CP3_-lCt.js";import"./clsx-B-dksMZM.js";/* empty css               *//* empty css              */const _={title:"Design System/Skeleton",component:a,parameters:{layout:"centered",docs:{description:{component:"A skeleton loader component with animated pulse effect for loading states."}}},tags:["autodocs"],argTypes:{shape:{control:{type:"select"},options:["circle","quadrilaterals"],description:"The shape of the skeleton"},className:{control:{type:"text"},description:"Additional CSS classes for custom styling"}},args:{shape:"quadrilaterals",className:"h-4 w-48"}},s={args:{shape:"quadrilaterals",className:"w-12 h-12"}},l={args:{shape:"circle",className:"w-12 h-12"}},r={render:()=>e.createElement("div",{className:"p-6 border border-surface-border-gray-subtle rounded-4 space-y-4 max-w-sm"},e.createElement("div",{className:"flex items-center space-x-3"},e.createElement(a,{shape:"circle",className:"w-10 h-10"}),e.createElement("div",{className:"space-y-2"},e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-24"}),e.createElement(a,{shape:"quadrilaterals",className:"h-3 w-16"}))),e.createElement(a,{shape:"quadrilaterals",className:"h-32 w-full"}),e.createElement("div",{className:"space-y-2"},e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-full"}),e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-3/4"})))},t={render:()=>e.createElement("div",{className:"flex flex-col gap-2 w-80"},e.createElement(a,{shape:"quadrilaterals",className:"h-12 w-full"}),e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-full"}),e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-3/4"}),e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-1/2"}))},c={render:()=>e.createElement("div",{className:"space-y-3 w-96"},e.createElement("div",{className:"flex space-x-4"},e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-24"}),e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-32"}),e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-20"}),e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-16"})),[...Array(4)].map((x,v)=>e.createElement("div",{key:v,className:"flex space-x-4"},e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-24"}),e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-32"}),e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-20"}),e.createElement(a,{shape:"quadrilaterals",className:"h-4 w-16"}))))};var n,m,o;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    shape: 'quadrilaterals',
    className: 'w-12 h-12'
  }
}`,...(o=(m=s.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};var d,i,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    className: 'w-12 h-12'
  }
}`,...(p=(i=l.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var h,u,N;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="p-6 border border-surface-border-gray-subtle rounded-4 space-y-4 max-w-sm">
      <div className="flex items-center space-x-3">
        <Skeleton shape="circle" className="w-10 h-10" />
        <div className="space-y-2">
          <Skeleton shape="quadrilaterals" className="h-4 w-24" />
          <Skeleton shape="quadrilaterals" className="h-3 w-16" />
        </div>
      </div>
      <Skeleton shape="quadrilaterals" className="h-32 w-full" />
      <div className="space-y-2">
        <Skeleton shape="quadrilaterals" className="h-4 w-full" />
        <Skeleton shape="quadrilaterals" className="h-4 w-3/4" />
      </div>
    </div>
}`,...(N=(u=r.parameters)==null?void 0:u.docs)==null?void 0:N.source}}};var w,q,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 w-80">
      <Skeleton shape="quadrilaterals" className="h-12 w-full" />
      <Skeleton shape="quadrilaterals" className="h-4 w-full" />
      <Skeleton shape="quadrilaterals" className="h-4 w-3/4" />
      <Skeleton shape="quadrilaterals" className="h-4 w-1/2" />
    </div>
}`,...(S=(q=t.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var f,k,E;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 w-96">
      <div className="flex space-x-4">
        <Skeleton shape="quadrilaterals" className="h-4 w-24" />
        <Skeleton shape="quadrilaterals" className="h-4 w-32" />
        <Skeleton shape="quadrilaterals" className="h-4 w-20" />
        <Skeleton shape="quadrilaterals" className="h-4 w-16" />
      </div>
      {[...Array(4)].map((_, i) => <div key={i} className="flex space-x-4">
          <Skeleton shape="quadrilaterals" className="h-4 w-24" />
          <Skeleton shape="quadrilaterals" className="h-4 w-32" />
          <Skeleton shape="quadrilaterals" className="h-4 w-20" />
          <Skeleton shape="quadrilaterals" className="h-4 w-16" />
        </div>)}
    </div>
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const D=["Default","Circle","CardSkeleton","TextLines","TableSkeleton"];export{r as CardSkeleton,l as Circle,s as Default,c as TableSkeleton,t as TextLines,D as __namedExportsOrder,_ as default};
