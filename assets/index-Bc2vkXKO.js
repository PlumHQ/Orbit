import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{R as u}from"./index-DpTt3J-R.js";import{C as d}from"./index-DMCxKUFW.js";import{c}from"./index-B8k91cqS.js";import{c as m}from"./utilities-DX5EtrsU.js";/* empty css               *//* empty css              */const n=({color:e,size:i,disabled:a=!1,icon:r=d,onClick:o=()=>{}})=>{const s=c(`${a?"":`hover:bg-interactive-background-${e}-${e==="white"?"muted":"normal"}`} focus-visible:plum-focus`,{variants:{size:{large:"rounded-15",medium:"rounded-1",small:"rounded-1"}}}),t=`fill-interactive-icon-${e}-${a?"disabled":"normal"}`;return l.jsx(l.Fragment,{children:l.jsx("button",{className:m(s({size:i})),disabled:a,onClick:o,children:u.createElement(r,{className:t,size:i})})})};try{n.displayName="IconButton",n.__docgenInfo={description:"",displayName:"IconButton",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"beige"'},{value:'"gray"'},{value:'"white"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:{value:`({
  color,
  className= \`fill-interactive-icon-gray-normal\`,
  size="large",
  disabled=false,
  ...props
}) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeMap[size]}
      height={sizeMap[size]}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M18.6917 6.79538C19.1028 6.38425 19.1028 5.71946 18.6917 5.31271C18.2805 4.90597 17.6157 4.90159 17.209 5.31271L12.0044 10.5173L6.79538 5.30834C6.38425 4.89722 5.71946 4.89722 5.31271 5.30834C4.90597 5.71946 4.90159 6.38425 5.31271 6.791L10.5173 11.9956L5.30834 17.2046C4.89722 17.6157 4.89722 18.2805 5.30834 18.6873C5.71946 19.094 6.38425 19.0984 6.791 18.6873L11.9956 13.4827L17.2046 18.6917C17.6157 19.1028 18.2805 19.1028 18.6873 18.6917C19.094 18.2805 19.0984 17.6157 18.6873 17.209L13.4827 12.0044L18.6917 6.79538Z"
        fill={color}
      />
    </svg>
  );
}`},description:"",name:"icon",required:!1,type:{name:"FC<{}> | undefined"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}try{n.displayName="IconButton",n.__docgenInfo={description:"",displayName:"IconButton",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"beige"'},{value:'"gray"'},{value:'"white"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:{value:`({
  color,
  className= \`fill-interactive-icon-gray-normal\`,
  size="large",
  disabled=false,
  ...props
}) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeMap[size]}
      height={sizeMap[size]}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M18.6917 6.79538C19.1028 6.38425 19.1028 5.71946 18.6917 5.31271C18.2805 4.90597 17.6157 4.90159 17.209 5.31271L12.0044 10.5173L6.79538 5.30834C6.38425 4.89722 5.71946 4.89722 5.31271 5.30834C4.90597 5.71946 4.90159 6.38425 5.31271 6.791L10.5173 11.9956L5.30834 17.2046C4.89722 17.6157 4.89722 18.2805 5.30834 18.6873C5.71946 19.094 6.38425 19.0984 6.791 18.6873L11.9956 13.4827L17.2046 18.6917C17.6157 19.1028 18.2805 19.1028 18.6873 18.6917C19.094 18.2805 19.0984 17.6157 18.6873 17.209L13.4827 12.0044L18.6917 6.79538Z"
        fill={color}
      />
    </svg>
  );
}`},description:"",name:"icon",required:!1,type:{name:"FC<{}> | undefined"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}export{n as I};
