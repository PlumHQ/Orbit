import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{S as e}from"./index-WWAcDeTr.js";import"./utilities-DX5EtrsU.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-C8PyMnuF.js";/* empty css               *//* empty css              */const x={title:"Design System/Skeleton",component:e,parameters:{layout:"centered",docs:{description:{component:"A skeleton loader component with animated pulse effect for loading states."}}},tags:["autodocs"],argTypes:{shape:{control:{type:"select"},options:["circle","quadrilaterals"],description:"The shape of the skeleton"},className:{control:{type:"text"},description:"Additional CSS classes for custom styling"}},args:{shape:"quadrilaterals",className:"h-4 w-48"}},s={args:{shape:"quadrilaterals",className:"w-12 h-12"}},l={args:{shape:"circle",className:"w-12 h-12"}},r={render:()=>a.jsxs("div",{className:"p-6 border border-surface-border-gray-subtle rounded-4 space-y-4 max-w-sm",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx(e,{shape:"circle",className:"w-10 h-10"}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-24"}),a.jsx(e,{shape:"quadrilaterals",className:"h-3 w-16"})]})]}),a.jsx(e,{shape:"quadrilaterals",className:"h-32 w-full"}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-full"}),a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-3/4"})]})]})},c={render:()=>a.jsxs("div",{className:"flex flex-col gap-2 w-80",children:[a.jsx(e,{shape:"quadrilaterals",className:"h-12 w-full"}),a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-full"}),a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-3/4"}),a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-1/2"})]})},t={render:()=>a.jsxs("div",{className:"space-y-3 w-96",children:[a.jsxs("div",{className:"flex space-x-4",children:[a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-24"}),a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-32"}),a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-20"}),a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-16"})]}),[...Array(4)].map((d,n)=>a.jsxs("div",{className:"flex space-x-4",children:[a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-24"}),a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-32"}),a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-20"}),a.jsx(e,{shape:"quadrilaterals",className:"h-4 w-16"})]},n))]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    shape: 'quadrilaterals',
    className: 'w-12 h-12'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    className: 'w-12 h-12'
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 w-80">
      <Skeleton shape="quadrilaterals" className="h-12 w-full" />
      <Skeleton shape="quadrilaterals" className="h-4 w-full" />
      <Skeleton shape="quadrilaterals" className="h-4 w-3/4" />
      <Skeleton shape="quadrilaterals" className="h-4 w-1/2" />
    </div>
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["Default","Circle","CardSkeleton","TextLines","TableSkeleton"];export{r as CardSkeleton,l as Circle,s as Default,t as TableSkeleton,c as TextLines,w as __namedExportsOrder,x as default};
