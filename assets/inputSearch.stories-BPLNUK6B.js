import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-DpTt3J-R.js";import{o as q}from"./index-DMCxKUFW.js";import{L as _}from"./index-35VstwiW.js";import{I as L}from"./index-Bc2vkXKO.js";/* empty css              *//* empty css               */import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./utilities-DX5EtrsU.js";import"./bundle-mjs-C8PyMnuF.js";/* empty css                */const w=({searchText:t,isLoading:r,styleVariant:a,placeholder:l,handleFocus:i,handleInputChange:o,clearSearchText:c,disabled:f,variant:y,id:x="input"})=>{const d=`
    w-full border border-solid px-6 py-2 rounded-3 mb-1 flex justify-between items-center focus-visible:plum-focus
       ${a==="beige"?"bg-surface-background-beige-subtle":"bg-surface-background-white-normal"}
      ${a==="beige"?"border-surface-border-beige-normal":"border-surface-border-gray-highlighted"}
    hover:bg-surface-background-${a==="beige"?"beige-normal":"gray-subtle"} hover:children:bg-surface-background-${a==="beige"?"beige-normal":"gray-subtle"}
  `;return e.jsxs("div",{className:d,children:[t&&r?e.jsx("div",{className:"animate-spin w-5 h-5 rounded-8",style:{background:"conic-gradient(from 0deg, #F88E7A1A 0deg, #925448 90deg, #F88E7A1A 90deg, #925448 180deg, #F88E7A1A 180deg, #925448 270deg, #F88E7A1A 270deg, #925448 360deg)"}}):e.jsx(q,{size:"large",className:"fill-surface-icon-gray-subtle"}),e.jsx("input",{className:`ml-15 w-full ${a==="beige"?"bg-surface-background-beige-subtle":"bg-surface-background-white-normal"} focus-visible:outline-none placeholder-gray-400 text-surface-text-gray-normal bg-inherit font-normal font-primary text-sm`,placeholder:l,value:t,...y==="table"?{}:{onFocus:i},onChange:g=>o(g.target.value),id:x,disabled:f}),t&&e.jsx(L,{size:"medium",color:"gray",onClick:c})]})},n=({styleVariant:t,placeholder:r,variant:a,children:l,searchSuggestions:i,isLoading:o=!1,onClearSuggestions:c,defaultSearchText:f,disabled:y=!1,onInputChange:x=d=>{}})=>{const[d,g]=s.useState(f||""),[p,v]=s.useState(!1),[I,T]=s.useState(!0),j=()=>{v(!0)};s.useEffect(()=>{p&&document.getElementById("modal-input")?.focus()},[p]);const C=u=>{!u.currentTarget.contains(u.relatedTarget)&&a==="global"&&(v(!1),g(""))},S=u=>{g(u),T(!u),x(u)},k=()=>{T(!1),c&&c()},V=()=>{S("")};return e.jsxs("div",{style:{width:"600px"},onBlur:C,children:[e.jsx(w,{searchText:a==="global"?"":d,isLoading:o,styleVariant:t,placeholder:r,handleFocus:j,handleInputChange:S,clearSearchText:V,disabled:a==="global"?p:y,variant:a}),a==="global"&&p&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",style:{zIndex:1e3,position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"inherit"},tabIndex:-1,children:[e.jsx(w,{searchText:d,isLoading:o,styleVariant:"gray",placeholder:r,handleFocus:()=>{},handleInputChange:S,clearSearchText:V,id:"modal-input",disabled:!1,variant:a}),e.jsxs("div",{className:"bg-interactive-background-white-normal p-6 h-max-320 w-full rounded-3",children:[I&&e.jsxs("div",{className:"flex items-center px-2 justify-between",children:[e.jsx("div",{className:"text-base font-primary font-normal text-surface-text-gray-subtle",children:"Recent Searches"}),e.jsx(_,{label:"Clear",size:"large",state:"primary",onClick:k})]}),e.jsx("div",{className:"mt-2 rounded-4",children:d&&l?l:I?i:""})]})]})})]})};try{n.displayName="InputSearch",n.__docgenInfo={description:"",displayName:"InputSearch",props:{styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!0,type:{name:"enum",value:[{value:'"beige"'},{value:'"gray"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"table"'},{value:'"global"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},searchSuggestions:{defaultValue:null,description:"",name:"searchSuggestions",required:!1,type:{name:"unknown"}},onClearSuggestions:{defaultValue:null,description:"",name:"onClearSuggestions",required:!1,type:{name:"(() => void) | undefined"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},onInputChange:{defaultValue:{value:"(value) => {}"},description:"",name:"onInputChange",required:!1,type:{name:"((value: string) => void) | undefined"}},defaultSearchText:{defaultValue:null,description:"",name:"defaultSearchText",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{n.displayName="InputSearch",n.__docgenInfo={description:"",displayName:"InputSearch",props:{styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!0,type:{name:"enum",value:[{value:'"beige"'},{value:'"gray"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"table"'},{value:'"global"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},searchSuggestions:{defaultValue:null,description:"",name:"searchSuggestions",required:!1,type:{name:"unknown"}},onClearSuggestions:{defaultValue:null,description:"",name:"onClearSuggestions",required:!1,type:{name:"(() => void) | undefined"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},onInputChange:{defaultValue:{value:"(value) => {}"},description:"",name:"onInputChange",required:!1,type:{name:"((value: string) => void) | undefined"}},defaultSearchText:{defaultValue:null,description:"",name:"defaultSearchText",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const W={title:"Design System/InputSearch",component:n,parameters:{layout:"centered",docs:{description:{component:"A search input component with built-in search functionality."}}},tags:["autodocs"],argTypes:{styleVariant:{control:{type:"select"},options:["gray","beige"],description:"The style variant of the search input"},variant:{control:{type:"select"},options:["table","global"],description:"The variant of the search input"},placeholder:{control:{type:"text"},description:"Placeholder text for the search input"},isLoading:{control:{type:"boolean"},description:"Whether the search input is in loading state"}},args:{styleVariant:"gray",variant:"table",placeholder:"Search...",isLoading:!1,onInputChange:t=>console.log("Search:",t)}},h={args:{styleVariant:"gray",variant:"table",placeholder:"Search for items...",isLoading:!1}},m={render:t=>{const[r,a]=s.useState("I am search text."),[l,i]=s.useState(!1);return e.jsx("div",{style:{height:"100vh",width:"100vw",margin:"auto",background:"gray"},children:e.jsx(n,{placeholder:"Search Employees",variant:"global",styleVariant:"gray",searchSuggestions:e.jsx("div",{style:{background:"rgba(72, 85, 247, 0.10)",border:"1px dashed rgba(168, 85, 247, 0.50)",borderRadius:16,padding:56,textAlign:"center"},children:"Search Suggestions (swap it with your recent searches)"}),onInputChange:o=>{o.length&&(i(!0),setTimeout(()=>{i(!1)},3e3))},isLoading:l,children:e.jsx("div",{style:{background:"rgba(168, 85, 247, 0.10)",border:"1px dashed rgba(168, 85, 247, 0.50)",borderRadius:16,padding:56,textAlign:"center"},children:"Result Slot (swap it with your result content)"})})})},args:{}},b={render:t=>{const[r,a]=s.useState("I am search text.");return e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(n,{defaultSearchText:r,styleVariant:"gray",variant:"table",placeholder:"Table"}),e.jsx(n,{defaultSearchText:r,styleVariant:"gray",variant:"global",placeholder:"Global",onInputChange:a}),e.jsx(n,{defaultSearchText:r,styleVariant:"beige",variant:"table",placeholder:"Table",onInputChange:a}),e.jsx(n,{defaultSearchText:r,styleVariant:"beige",variant:"global",placeholder:"Global",onInputChange:a})]})},args:{}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    styleVariant: 'gray',
    variant: 'table',
    placeholder: 'Search for items...',
    isLoading: false
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [searchText, setSearchText] = useState("I am search text.");
    const [isLoading, setIsLoading] = useState(false);
    return <div style={{
      height: '100vh',
      width: '100vw',
      margin: 'auto',
      background: 'gray'
    }}>
      <InputSearch placeholder="Search Employees" variant="global" styleVariant="gray" searchSuggestions={<div style={{
        background: "rgba(72, 85, 247, 0.10)",
        border: '1px dashed rgba(168, 85, 247, 0.50)',
        borderRadius: 16,
        padding: 56,
        textAlign: "center"
      }}>
            Search Suggestions (swap it with your recent searches)
        </div>} onInputChange={value => {
        if (value.length) {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        }
      }} isLoading={isLoading}>
        <div style={{
          background: "rgba(168, 85, 247, 0.10)",
          border: '1px dashed rgba(168, 85, 247, 0.50)',
          borderRadius: 16,
          padding: 56,
          textAlign: "center"
        }}>
            Result Slot (swap it with your result content)
        </div>
    </InputSearch>
    </div>;
  },
  args: {}
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [searchText, setSearchText] = useState("I am search text.");
    return <div className="space-y-4 w-80">
      <InputSearch defaultSearchText={searchText} styleVariant="gray" variant="table" placeholder="Table" />
      <InputSearch defaultSearchText={searchText} styleVariant="gray" variant="global" placeholder="Global" onInputChange={setSearchText} />
      <InputSearch defaultSearchText={searchText} styleVariant="beige" variant="table" placeholder="Table" onInputChange={setSearchText} />
      <InputSearch defaultSearchText={searchText} styleVariant="beige" variant="global" placeholder="Global" onInputChange={setSearchText} />
    </div>;
  },
  args: {}
}`,...b.parameters?.docs?.source}}};const H=["TableInputSearch","GlobalInputSearch","AllVariants"];export{b as AllVariants,m as GlobalInputSearch,h as TableInputSearch,H as __namedExportsOrder,W as default};
