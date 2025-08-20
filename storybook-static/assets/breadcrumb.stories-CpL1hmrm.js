import{r as b,R as e}from"./index-DpTt3J-R.js";import{S as V}from"./index-B6TRxRi1.js";import{g as B,h as z,i as C}from"./index-Z7pS7jLs.js";import{c as o}from"./utilities-CP3_-lCt.js";/* empty css               *//* empty css              */import{B as v}from"./component-BKNwBBMA.js";import"./index-B5ODnmFs.js";import"./jsx-runtime-BjG_zV1W.js";import"./clsx-B-dksMZM.js";import"./index-BsciMW3t.js";import"./index-Dp3B9jqt.js";function P({...n}){return e.createElement("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...n})}function p({listOfLinks:n,onCrumbClick:t,ellipsisPosition:a=null,maximumLinkCount:s=n.length,onBackButtonClick:c}){const[l,E]=b.useState(n);if(!s||l.length<=s||!a||a>=l.length)return e.createElement(P,{className:"flex items-center gap-1.5"},e.createElement(v,{label:"Back",variant:"tertiary",styleVariant:"beige",size:"medium",iconOnly:!0,leadingIcon:B,onClick:c,disabled:l.length===1}),e.createElement(N,null,l.map((i,r)=>e.createElement(e.Fragment,{key:r},e.createElement(u,null,e.createElement(k,{asChild:!0},e.createElement("button",{onClick:()=>{E(l.slice(0,r+1)),t==null||t(i.href,r,l.slice(0,r+1))},"aria-current":r===l.length-1?"page":void 0,"aria-label":i.label,"aria-disabled":r===l.length-1},i.label))),r<l.length-1&&e.createElement(d,null)))));const h=a?a+1:0,m=s-h-1,_=h,w=l.length-m,L=l.slice(_,w),g=m>0?l.slice(-m):[],y=l.slice(0,h);return console.log(y,m,L,g),e.createElement(P,{className:"flex items-center gap-1.5"},e.createElement(v,{label:"Back",variant:"tertiary",styleVariant:"beige",size:"medium",iconOnly:!0,leadingIcon:B,onClick:c}),e.createElement(N,null,y.map((i,r)=>e.createElement(e.Fragment,{key:r},e.createElement(u,null,e.createElement(k,{asChild:!0},e.createElement("button",{onClick:()=>{E(l.slice(0,r+1)),t==null||t(i.href,r,l.slice(0,r+1))}},i.label))),e.createElement(d,null))),e.createElement(u,{className:"relative"},e.createElement(T,null)),e.createElement(d,null),g.map((i,r)=>e.createElement(e.Fragment,{key:`last-${r}`},e.createElement(u,null,e.createElement(k,{asChild:!0},e.createElement("button",{onClick:()=>{const x=a+L.length+r;t==null||t(i.href,x,l.slice(0,x+1))}},i.label))),r<g.length-1&&e.createElement(d,null)))))}function N({className:n,...t}){return e.createElement("ol",{"data-slot":"breadcrumb-list",className:o("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",n),...t})}function u({className:n,...t}){return e.createElement("li",{"data-slot":"breadcrumb-item",className:o("font-primary text-interactive-text-beige-muted inline-flex items-center gap-1.5 px-1 hover:text-interactive-text-beige-subtle cursor-pointer hover:underline",n),...t})}function k({asChild:n,className:t,...a}){const s=n?V:"a";return e.createElement(s,{"data-slot":"breadcrumb-link",className:o("hover:text-foreground transition-colors",t),...a})}function d({children:n,className:t,...a}){return e.createElement("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:o("[&>svg]:size-3.5",t),...a},n??e.createElement(z,{className:"fill-surface-icon-beige-muted",size:"large"}))}function T({className:n,...t}){return e.createElement("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:o("flex size-9 items-center justify-center",n),...t},e.createElement("div",{className:"h-6 w-6 flex items-center justify-center"},e.createElement(C,{className:"fill-surface-icon-beige-muted",size:"extra-large"})))}try{p.displayName="Breadcrumb",p.__docgenInfo={description:"",displayName:"Breadcrumb",props:{listOfLinks:{defaultValue:null,description:"",name:"listOfLinks",required:!0,type:{name:"{ label: string; href: string; }[]"}},onCrumbClick:{defaultValue:null,description:"",name:"onCrumbClick",required:!1,type:{name:"(href: string, index?: number, truncatedList?: { label: string; href: string; }[]) => void"}},ellipsisPosition:{defaultValue:{value:"null"},description:"",name:"ellipsisPosition",required:!1,type:{name:"number"}},maximumLinkCount:{defaultValue:{value:"listOfLinks.length"},description:"",name:"maximumLinkCount",required:!1,type:{name:"number"}},onBackButtonClick:{defaultValue:null,description:"",name:"onBackButtonClick",required:!1,type:{name:"() => void"}}}}}catch{}const Q={title:"Design System/Breadcrumb",component:p,tags:["autodocs"],argTypes:{ellipsisPosition:{control:{type:"number"},description:"The index of the link to be hidden by the ellipsis. It should be less than the maximum link count."},maximumLinkCount:{control:{type:"number"},description:"The maximum number of links to be displayed. If the number of links is greater than this value, the ellipsis will be displayed."},linkList:{control:{type:"object"},description:"The list of links to be displayed in the breadcrumb."},onBackButtonClick:{control:{type:"object"},description:"The function to be called when the back button is clicked."},onCrumbClick:{control:{type:"object"},description:"The function to be called when a crumb is clicked."}}},f={render:n=>{const[t,a]=b.useState(n.linkList);return b.createElement("div",{className:"flex flex-col gap-4"},b.createElement(p,{...n,listOfLinks:t,onBackButtonClick:()=>{a(t.slice(0,-1))},ellipsisPosition:n.ellipsisPosition,maximumLinkCount:n.maximumLinkCount,onCrumbClick:(s,c)=>{alert(`Crumb clicked: ${t[c].label}, index: ${c}`)}}))},args:{linkList:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Product 1",href:"#"},{label:"Product 2",href:"#"},{label:"Product 3",href:"#"},{label:"Product 4",href:"#"},{label:"Product 5",href:"#"},{label:"Product 6",href:"#"}],ellipsisPosition:2,maximumLinkCount:5,onBackButtonClick:()=>{console.log("Back button clicked")}}};var I,O,S;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(O=f.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};const U=["Default"];export{f as Default,U as __namedExportsOrder,Q as default};
