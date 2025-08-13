import{r as s,R as e}from"./index-DpTt3J-R.js";import{l as $}from"./index-C_GYH-13.js";import{L as z}from"./index-BCk3_L7_.js";import{I as D}from"./index-BVwmS4AQ.js";/* empty css              *//* empty css               */import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./utilities-CP3_-lCt.js";const E=({searchText:t,isLoading:r,styleVariant:a,placeholder:o,handleFocus:i,handleInputChange:c,clearSearchText:d,disabled:f,variant:y,id:S="input"})=>{const u=`
    w-full border border-solid px-6 py-2 rounded-3 mb-1 flex justify-between items-center focus-visible:plum-focus
       ${a==="beige"?"bg-surface-background-beige-subtle":"bg-surface-background-white-normal"}
      ${a==="beige"?"border-surface-border-beige-normal":"border-surface-border-gray-highlighted"}
    hover:bg-surface-background-${a==="beige"?"beige-normal":"gray-subtle"} hover:children:bg-surface-background-${a==="beige"?"beige-normal":"gray-subtle"}
  `;return e.createElement("div",{className:u},t&&r?e.createElement("div",{className:"animate-spin w-5 h-5 rounded-8",style:{background:"conic-gradient(from 0deg, #F88E7A1A 0deg, #925448 90deg, #F88E7A1A 90deg, #925448 180deg, #F88E7A1A 180deg, #925448 270deg, #F88E7A1A 270deg, #925448 360deg)"}}):e.createElement($,{size:"large",className:"fill-surface-icon-gray-subtle"}),e.createElement("input",{className:`ml-15 w-full ${a==="beige"?"bg-surface-background-beige-subtle":"bg-surface-background-white-normal"} focus-visible:outline-none placeholder-gray-400 text-surface-text-gray-normal bg-inherit font-normal font-primary text-sm`,placeholder:o,value:t,...y==="table"?{}:{onFocus:i},onChange:g=>c(g.target.value),id:S,disabled:f}),t&&e.createElement(D,{size:"medium",color:"gray",onClick:d}))},n=({styleVariant:t,placeholder:r,variant:a,children:o,searchSuggestions:i,isLoading:c=!1,onClearSuggestions:d,defaultSearchText:f,disabled:y=!1,onInputChange:S=u=>{}})=>{const[u,g]=s.useState(f||""),[p,x]=s.useState(!1),[I,T]=s.useState(!0),R=()=>{x(!0)};s.useEffect(()=>{var l;p&&((l=document.getElementById("modal-input"))==null||l.focus())},[p]);const G=l=>{!l.currentTarget.contains(l.relatedTarget)&&a==="global"&&(x(!1),g(""))},v=l=>{g(l),T(!l),S(l)},B=()=>{T(!1),d&&d()},V=()=>{v("")};return e.createElement("div",{style:{width:"600px"},onBlur:G},e.createElement(E,{searchText:a==="global"?"":u,isLoading:c,styleVariant:t,placeholder:r,handleFocus:R,handleInputChange:v,clearSearchText:V,disabled:a==="global"?p:y,variant:a}),a==="global"&&p&&e.createElement(e.Fragment,null,e.createElement("div",{className:"",style:{zIndex:1e3,position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"inherit"},tabIndex:-1},e.createElement(E,{searchText:u,isLoading:c,styleVariant:"gray",placeholder:r,handleFocus:()=>{},handleInputChange:v,clearSearchText:V,id:"modal-input",disabled:!1,variant:a}),e.createElement("div",{className:"bg-interactive-background-white-normal p-6 h-max-320 w-full rounded-3"},I&&e.createElement("div",{className:"flex items-center px-2 justify-between"},e.createElement("div",{className:"text-base font-primary font-normal text-surface-text-gray-subtle"},"Recent Searches"),e.createElement(z,{label:"Clear",size:"large",state:"primary",onClick:B})),e.createElement("div",{className:"mt-2 rounded-4"},u&&o?o:I?i:"")))))};try{n.displayName="InputSearch",n.__docgenInfo={description:"",displayName:"InputSearch",props:{styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!0,type:{name:"enum",value:[{value:'"beige"'},{value:'"gray"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"table"'},{value:'"global"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},searchSuggestions:{defaultValue:null,description:"",name:"searchSuggestions",required:!1,type:{name:"unknown"}},onClearSuggestions:{defaultValue:null,description:"",name:"onClearSuggestions",required:!1,type:{name:"() => void"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},onInputChange:{defaultValue:{value:"(value) => {}"},description:"",name:"onInputChange",required:!1,type:{name:"(value: string) => void"}},defaultSearchText:{defaultValue:null,description:"",name:"defaultSearchText",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{n.displayName="InputSearch",n.__docgenInfo={description:"",displayName:"InputSearch",props:{styleVariant:{defaultValue:null,description:"",name:"styleVariant",required:!0,type:{name:"enum",value:[{value:'"beige"'},{value:'"gray"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"table"'},{value:'"global"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},searchSuggestions:{defaultValue:null,description:"",name:"searchSuggestions",required:!1,type:{name:"unknown"}},onClearSuggestions:{defaultValue:null,description:"",name:"onClearSuggestions",required:!1,type:{name:"() => void"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},onInputChange:{defaultValue:{value:"(value) => {}"},description:"",name:"onInputChange",required:!1,type:{name:"(value: string) => void"}},defaultSearchText:{defaultValue:null,description:"",name:"defaultSearchText",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const U={title:"Design System/InputSearch",component:n,parameters:{layout:"centered",docs:{description:{component:"A search input component with built-in search functionality."}}},tags:["autodocs"],argTypes:{styleVariant:{control:{type:"select"},options:["gray","beige"],description:"The style variant of the search input"},variant:{control:{type:"select"},options:["table","global"],description:"The variant of the search input"},placeholder:{control:{type:"text"},description:"Placeholder text for the search input"},isLoading:{control:{type:"boolean"},description:"Whether the search input is in loading state"}},args:{styleVariant:"gray",variant:"table",placeholder:"Search...",isLoading:!1,onInputChange:t=>console.log("Search:",t)}},h={args:{styleVariant:"gray",variant:"table",placeholder:"Search for items...",isLoading:!1}},m={render:t=>{const[r,a]=s.useState("I am search text."),[o,i]=s.useState(!1);return e.createElement("div",{style:{height:"100vh",width:"100vw",margin:"auto",background:"gray"}},e.createElement(n,{placeholder:"Search Employees",variant:"global",styleVariant:"gray",searchSuggestions:e.createElement("div",{style:{background:"rgba(72, 85, 247, 0.10)",border:"1px dashed rgba(168, 85, 247, 0.50)",borderRadius:16,padding:56,textAlign:"center"}},"Search Suggestions (swap it with your recent searches)"),onInputChange:c=>{c.length&&(i(!0),setTimeout(()=>{i(!1)},3e3))},isLoading:o},e.createElement("div",{style:{background:"rgba(168, 85, 247, 0.10)",border:"1px dashed rgba(168, 85, 247, 0.50)",borderRadius:16,padding:56,textAlign:"center"}},"Result Slot (swap it with your result content)")))},args:{}},b={render:t=>{const[r,a]=s.useState("I am search text.");return e.createElement("div",{className:"space-y-4 w-80"},e.createElement(n,{defaultSearchText:r,styleVariant:"gray",variant:"table",placeholder:"Table"}),e.createElement(n,{defaultSearchText:r,styleVariant:"gray",variant:"global",placeholder:"Global",onInputChange:a}),e.createElement(n,{defaultSearchText:r,styleVariant:"beige",variant:"table",placeholder:"Table",onInputChange:a}),e.createElement(n,{defaultSearchText:r,styleVariant:"beige",variant:"global",placeholder:"Global",onInputChange:a}))},args:{}};var w,C,k;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    styleVariant: 'gray',
    variant: 'table',
    placeholder: 'Search for items...',
    isLoading: false
  }
}`,...(k=(C=h.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var q,_,L;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(L=(_=m.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var N,A,F;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(A=b.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const X=["TableInputSearch","GlobalInputSearch","AllVariants"];export{b as AllVariants,m as GlobalInputSearch,h as TableInputSearch,X as __namedExportsOrder,U as default};
