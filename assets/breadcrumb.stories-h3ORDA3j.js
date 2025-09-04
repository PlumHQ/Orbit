import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as N,R as x}from"./index-DpTt3J-R.js";import{S}from"./index-CxBDjkVw.js";import{j as y,k as _,E}from"./index-DMCxKUFW.js";import{c}from"./utilities-DX5EtrsU.js";/* empty css               *//* empty css              */import{B}from"./component-DvxTQLKl.js";import"./index-B5ODnmFs.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-C8PyMnuF.js";import"./index-B8k91cqS.js";function v({...t}){return e.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...t})}function b({listOfLinks:t,onCrumbClick:n,ellipsisPosition:l=null,maximumLinkCount:a=t.length,onBackButtonClick:o}){const[i,g]=N.useState(t);if(!a||i.length<=a||!l||l>=i.length)return e.jsxs(v,{className:"flex items-center gap-1.5",children:[e.jsx(B,{label:"Back",variant:"tertiary",styleVariant:"beige",size:"medium",iconOnly:!0,leadingIcon:y,onClick:o,disabled:i.length===1}),e.jsx(P,{children:i.map((s,r)=>e.jsxs(x.Fragment,{children:[e.jsx(d,{children:e.jsx(k,{asChild:!0,children:e.jsx("button",{onClick:()=>{g(i.slice(0,r+1)),n?.(s.href,r,i.slice(0,r+1))},"aria-current":r===i.length-1?"page":void 0,"aria-label":s.label,"aria-disabled":r===i.length-1,children:s.label})})}),r<i.length-1&&e.jsx(m,{})]},r))})]});const h=l?l+1:0,u=a-h-1,I=h,O=i.length-u,j=i.slice(I,O),p=u>0?i.slice(-u):[],L=i.slice(0,h);return console.log(L,u,j,p),e.jsxs(v,{className:"flex items-center gap-1.5",children:[e.jsx(B,{label:"Back",variant:"tertiary",styleVariant:"beige",size:"medium",iconOnly:!0,leadingIcon:y,onClick:o}),e.jsxs(P,{children:[L.map((s,r)=>e.jsxs(x.Fragment,{children:[e.jsx(d,{children:e.jsx(k,{asChild:!0,children:e.jsx("button",{onClick:()=>{g(i.slice(0,r+1)),n?.(s.href,r,i.slice(0,r+1))},children:s.label})})}),e.jsx(m,{})]},r)),e.jsx(d,{className:"relative",children:e.jsx(w,{})}),e.jsx(m,{}),p.map((s,r)=>e.jsxs(x.Fragment,{children:[e.jsx(d,{children:e.jsx(k,{asChild:!0,children:e.jsx("button",{onClick:()=>{const C=l+j.length+r;n?.(s.href,C,i.slice(0,C+1))},children:s.label})})}),r<p.length-1&&e.jsx(m,{})]},`last-${r}`))]})]})}function P({className:t,...n}){return e.jsx("ol",{"data-slot":"breadcrumb-list",className:c("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",t),...n})}function d({className:t,...n}){return e.jsx("li",{"data-slot":"breadcrumb-item",className:c("font-primary text-interactive-text-beige-muted inline-flex items-center gap-1.5 px-1 hover:text-interactive-text-beige-subtle cursor-pointer hover:underline",t),...n})}function k({asChild:t,className:n,...l}){const a=t?S:"a";return e.jsx(a,{"data-slot":"breadcrumb-link",className:c("hover:text-foreground transition-colors",n),...l})}function m({children:t,className:n,...l}){return e.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:c("[&>svg]:size-3.5",n),...l,children:t??e.jsx(_,{className:"fill-surface-icon-beige-muted",size:"large"})})}function w({className:t,...n}){return e.jsx("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:c("flex size-9 items-center justify-center",t),...n,children:e.jsx("div",{className:"h-6 w-6 flex items-center justify-center",children:e.jsx(E,{className:"fill-surface-icon-beige-muted",size:"extra-large"})})})}try{b.displayName="Breadcrumb",b.__docgenInfo={description:"",displayName:"Breadcrumb",props:{listOfLinks:{defaultValue:null,description:"",name:"listOfLinks",required:!0,type:{name:"{ label: string; href: string; }[]"}},onCrumbClick:{defaultValue:null,description:"",name:"onCrumbClick",required:!1,type:{name:"((href: string, index?: number | undefined, truncatedList?: { label: string; href: string; }[] | undefined) => void) | undefined"}},ellipsisPosition:{defaultValue:{value:"null"},description:"",name:"ellipsisPosition",required:!1,type:{name:"number | null | undefined"}},maximumLinkCount:{defaultValue:{value:"listOfLinks.length"},description:"",name:"maximumLinkCount",required:!1,type:{name:"number | undefined"}},onBackButtonClick:{defaultValue:null,description:"",name:"onBackButtonClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const K={title:"Design System/Breadcrumb",component:b,tags:["autodocs"],argTypes:{ellipsisPosition:{control:{type:"number"},description:"The index of the link to be hidden by the ellipsis. It should be less than the maximum link count."},maximumLinkCount:{control:{type:"number"},description:"The maximum number of links to be displayed. If the number of links is greater than this value, the ellipsis will be displayed."},linkList:{control:{type:"object"},description:"The list of links to be displayed in the breadcrumb."},onBackButtonClick:{control:{type:"object"},description:"The function to be called when the back button is clicked."},onCrumbClick:{control:{type:"object"},description:"The function to be called when a crumb is clicked."}}},f={render:t=>{const[n,l]=N.useState(t.linkList);return e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(b,{...t,listOfLinks:n,onBackButtonClick:()=>{l(n.slice(0,-1))},ellipsisPosition:t.ellipsisPosition,maximumLinkCount:t.maximumLinkCount,onCrumbClick:(a,o)=>{alert(`Crumb clicked: ${n[o].label}, index: ${o}`)}})})},args:{linkList:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Product 1",href:"#"},{label:"Product 2",href:"#"},{label:"Product 3",href:"#"},{label:"Product 4",href:"#"},{label:"Product 5",href:"#"},{label:"Product 6",href:"#"}],ellipsisPosition:2,maximumLinkCount:5,onBackButtonClick:()=>{console.log("Back button clicked")}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const M=["Default"];export{f as Default,M as __namedExportsOrder,K as default};
