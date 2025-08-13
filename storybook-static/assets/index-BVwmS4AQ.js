import{R as n}from"./index-DpTt3J-R.js";import{C as u}from"./index-C_GYH-13.js";import{c}from"./index-Dp3B9jqt.js";import{c as d}from"./utilities-CP3_-lCt.js";/* empty css               *//* empty css              */const a=({color:e,size:i,disabled:l=!1,icon:r=u,onClick:o=()=>{}})=>{const t=c(`${l?"":`hover:bg-interactive-background-${e}-${e==="white"?"muted":"normal"}`} focus-visible:plum-focus`,{variants:{size:{large:"rounded-15",medium:"rounded-1",small:"rounded-1"}}}),s=`fill-interactive-icon-${e}-${l?"disabled":"normal"}`;return n.createElement(n.Fragment,null,n.createElement("button",{className:d(t({size:i})),disabled:l,onClick:o},n.createElement(r,{className:s,size:i})))};try{a.displayName="IconButton",a.__docgenInfo={description:"",displayName:"IconButton",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"beige"'},{value:'"gray"'},{value:'"white"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:`({
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
}`},description:"",name:"icon",required:!1,type:{name:"FC<{}>"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"() => void"}}}}}catch{}try{a.displayName="IconButton",a.__docgenInfo={description:"",displayName:"IconButton",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"beige"'},{value:'"gray"'},{value:'"white"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:`({
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
}`},description:"",name:"icon",required:!1,type:{name:"FC<{}>"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"() => void"}}}}}catch{}export{a as I};
