import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as _,R as x}from"./index-DpTt3J-R.js";import{S as V}from"./index-B6TRxRi1.js";import{j as B,k as z,E as C}from"./index-2-1EQAb5.js";import{c}from"./utilities-WNthGydt.js";/* empty css               *//* empty css              */import{B as v}from"./component-CU7poC3f.js";import"./index-B5ODnmFs.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-CLJs87Zn.js";import"./index-Dp3B9jqt.js";function P({...n}){return e.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...n})}function h({listOfLinks:n,onCrumbClick:t,ellipsisPosition:r=null,maximumLinkCount:a=n.length,onBackButtonClick:o}){const[i,k]=_.useState(n);if(!a||i.length<=a||!r||r>=i.length)return e.jsxs(P,{className:"flex items-center gap-1.5",children:[e.jsx(v,{label:"Back",variant:"tertiary",styleVariant:"beige",size:"medium",iconOnly:!0,leadingIcon:B,onClick:o,disabled:i.length===1}),e.jsx(N,{children:i.map((l,s)=>e.jsxs(x.Fragment,{children:[e.jsx(u,{children:e.jsx(g,{asChild:!0,children:e.jsx("button",{onClick:()=>{k(i.slice(0,s+1)),t==null||t(l.href,s,i.slice(0,s+1))},"aria-current":s===i.length-1?"page":void 0,"aria-label":l.label,"aria-disabled":s===i.length-1,children:l.label})})}),s<i.length-1&&e.jsx(m,{})]},s))})]});const p=r?r+1:0,d=a-p-1,E=p,w=i.length-d,j=i.slice(E,w),b=d>0?i.slice(-d):[],L=i.slice(0,p);return console.log(L,d,j,b),e.jsxs(P,{className:"flex items-center gap-1.5",children:[e.jsx(v,{label:"Back",variant:"tertiary",styleVariant:"beige",size:"medium",iconOnly:!0,leadingIcon:B,onClick:o}),e.jsxs(N,{children:[L.map((l,s)=>e.jsxs(x.Fragment,{children:[e.jsx(u,{children:e.jsx(g,{asChild:!0,children:e.jsx("button",{onClick:()=>{k(i.slice(0,s+1)),t==null||t(l.href,s,i.slice(0,s+1))},children:l.label})})}),e.jsx(m,{})]},s)),e.jsx(u,{className:"relative",children:e.jsx(T,{})}),e.jsx(m,{}),b.map((l,s)=>e.jsxs(x.Fragment,{children:[e.jsx(u,{children:e.jsx(g,{asChild:!0,children:e.jsx("button",{onClick:()=>{const y=r+j.length+s;t==null||t(l.href,y,i.slice(0,y+1))},children:l.label})})}),s<b.length-1&&e.jsx(m,{})]},`last-${s}`))]})]})}function N({className:n,...t}){return e.jsx("ol",{"data-slot":"breadcrumb-list",className:c("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",n),...t})}function u({className:n,...t}){return e.jsx("li",{"data-slot":"breadcrumb-item",className:c("font-primary text-interactive-text-beige-muted inline-flex items-center gap-1.5 px-1 hover:text-interactive-text-beige-subtle cursor-pointer hover:underline",n),...t})}function g({asChild:n,className:t,...r}){const a=n?V:"a";return e.jsx(a,{"data-slot":"breadcrumb-link",className:c("hover:text-foreground transition-colors",t),...r})}function m({children:n,className:t,...r}){return e.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:c("[&>svg]:size-3.5",t),...r,children:n??e.jsx(z,{className:"fill-surface-icon-beige-muted",size:"large"})})}function T({className:n,...t}){return e.jsx("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:c("flex size-9 items-center justify-center",n),...t,children:e.jsx("div",{className:"h-6 w-6 flex items-center justify-center",children:e.jsx(C,{className:"fill-surface-icon-beige-muted",size:"extra-large"})})})}try{h.displayName="Breadcrumb",h.__docgenInfo={description:"",displayName:"Breadcrumb",props:{listOfLinks:{defaultValue:null,description:"",name:"listOfLinks",required:!0,type:{name:"{ label: string; href: string; }[]"}},onCrumbClick:{defaultValue:null,description:"",name:"onCrumbClick",required:!1,type:{name:"((href: string, index?: number | undefined, truncatedList?: { label: string; href: string; }[] | undefined) => void) | undefined"}},ellipsisPosition:{defaultValue:{value:"null"},description:"",name:"ellipsisPosition",required:!1,type:{name:"number | null | undefined"}},maximumLinkCount:{defaultValue:{value:"listOfLinks.length"},description:"",name:"maximumLinkCount",required:!1,type:{name:"number | undefined"}},onBackButtonClick:{defaultValue:null,description:"",name:"onBackButtonClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const U={title:"Design System/Breadcrumb",component:h,tags:["autodocs"],argTypes:{ellipsisPosition:{control:{type:"number"},description:"The index of the link to be hidden by the ellipsis. It should be less than the maximum link count."},maximumLinkCount:{control:{type:"number"},description:"The maximum number of links to be displayed. If the number of links is greater than this value, the ellipsis will be displayed."},linkList:{control:{type:"object"},description:"The list of links to be displayed in the breadcrumb."},onBackButtonClick:{control:{type:"object"},description:"The function to be called when the back button is clicked."},onCrumbClick:{control:{type:"object"},description:"The function to be called when a crumb is clicked."}}},f={render:n=>{const[t,r]=_.useState(n.linkList);return e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(h,{...n,listOfLinks:t,onBackButtonClick:()=>{r(t.slice(0,-1))},ellipsisPosition:n.ellipsisPosition,maximumLinkCount:n.maximumLinkCount,onCrumbClick:(a,o)=>{alert(`Crumb clicked: ${t[o].label}, index: ${o}`)}})})},args:{linkList:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Product 1",href:"#"},{label:"Product 2",href:"#"},{label:"Product 3",href:"#"},{label:"Product 4",href:"#"},{label:"Product 5",href:"#"},{label:"Product 6",href:"#"}],ellipsisPosition:2,maximumLinkCount:5,onBackButtonClick:()=>{console.log("Back button clicked")}}};var I,O,S;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [listOfLinks, setListOfLinks] = useState(args.linkList);
    return <div className="flex flex-col gap-4">
                <Breadcrumb {...args} listOfLinks={listOfLinks} onBackButtonClick={() => {
        setListOfLinks(listOfLinks.slice(0, -1));
      }} ellipsisPosition={args.ellipsisPosition} maximumLinkCount={args.maximumLinkCount} onCrumbClick={(href, index) => {
        alert(\`Crumb clicked: \${listOfLinks[index].label}, index: \${index}\`);
      }} />
            </div>;
  },
  args: {
    linkList: [{
      label: "Home",
      href: "#"
    }, {
      label: "Products",
      href: "#"
    }, {
      label: "Product 1",
      href: "#"
    }, {
      label: "Product 2",
      href: "#"
    }, {
      label: "Product 3",
      href: "#"
    }, {
      label: "Product 4",
      href: "#"
    }, {
      label: "Product 5",
      href: "#"
    }, {
      label: "Product 6",
      href: "#"
    }],
    ellipsisPosition: 2,
    maximumLinkCount: 5,
    onBackButtonClick: () => {
      console.log("Back button clicked");
    }
  }
}`,...(S=(O=f.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};const W=["Default"];export{f as Default,W as __namedExportsOrder,U as default};
