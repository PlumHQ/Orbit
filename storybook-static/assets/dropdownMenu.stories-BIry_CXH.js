import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{D as t,a as c,b as l,c as a,d as p,e,f as r,g as o,h as P,i as L,j as B,k as w,l as R,m as D}from"./component-DmZDK-Uc.js";import{B as m}from"./component-CT9O-9-M.js";import{H as G,U as M,S as h,a as F,E as g,F as I,D as N,T as V}from"./index-2-1EQAb5.js";import"./index-DpTt3J-R.js";import"./index-Zex7zZ5g.js";import"./index-CC9pek2O.js";import"./index-B5ODnmFs.js";import"./index-D9ZhQrDp.js";import"./index-B6TRxRi1.js";import"./index-CFpPf2if.js";import"./index-Bxjft1r3.js";import"./index-BTxGLU0k.js";import"./index-hoQZG4F6.js";import"./utilities-WNthGydt.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-CLJs87Zn.js";/* empty css              */import"./index-bNigeQq9.js";import"./index-Dp3B9jqt.js";/* empty css               */const dn={title:"Design System/DropdownMenu",component:t,parameters:{layout:"centered",docs:{description:{component:"A versatile dropdown menu component with support for various item types, sub-menus, checkboxes, radio buttons, and destructive actions."}}},tags:["autodocs"]},s={render:()=>n.jsxs(t,{children:[n.jsx(c,{asChild:!0,children:n.jsx(m,{variant:"primary",styleVariant:"primary",size:"medium",label:"Full Example"})}),n.jsxs(l,{children:[n.jsx(a,{children:"My Account"}),n.jsxs(p,{children:[n.jsx(e,{name:"Profile",leadingIcon:M,trailingIcon:G,shortcutKey:"⇧⌘P",children:n.jsx(r,{children:"⇧⌘P"})}),n.jsx(e,{name:"Settings",leadingIcon:h,children:n.jsx(r,{children:"⌘,"})})]}),n.jsx(o,{}),n.jsxs(p,{children:[n.jsx(e,{name:"New File",leadingIcon:F,children:n.jsx(r,{children:"⌘N"})}),n.jsxs(P,{children:[n.jsx(L,{name:"Share",leadingIcon:g}),n.jsxs(B,{children:[n.jsx(e,{name:"Email",leadingIcon:I}),n.jsx(e,{name:"Message",leadingIcon:I}),n.jsx(o,{}),n.jsx(e,{name:"More...",leadingIcon:g})]})]}),n.jsx(e,{name:"Download",leadingIcon:N,children:n.jsx(r,{children:"⌘D"})})]}),n.jsx(o,{}),n.jsx(a,{children:"Preferences"}),n.jsx(w,{checked:!0,name:"Show Status Bar",children:"Show Status Bar"}),n.jsx(w,{checked:!1,disabled:!0,name:"Show Activity Bar (Disabled)",children:"Show Activity Bar (Disabled)"}),n.jsx(w,{checked:!0,name:"Show Panel",children:"Show Panel"}),n.jsx(o,{}),n.jsx(a,{children:"Theme"}),n.jsxs(R,{value:"light",children:[n.jsx(D,{value:"light",children:"Light"}),n.jsx(D,{value:"dark",children:"Dark"}),n.jsx(D,{value:"system",children:"System"})]}),n.jsx(o,{}),n.jsx(e,{name:"Disabled Item",disabled:!0}),n.jsx(e,{name:"Log out",variant:"destructive",children:n.jsx(r,{children:"⇧⌘Q"})})]})]})},i={render:()=>n.jsxs(t,{children:[n.jsx(c,{asChild:!0,children:n.jsx(m,{variant:"primary",styleVariant:"primary",size:"medium",label:"Simple Menu"})}),n.jsxs(l,{className:"w-56",children:[n.jsx(a,{children:"Quick Actions"}),n.jsxs(p,{children:[n.jsx(e,{name:"View Profile",leadingIcon:M}),n.jsx(e,{name:"Settings",leadingIcon:h})]}),n.jsx(o,{}),n.jsx(e,{name:"Sign Out",variant:"destructive"})]})]}),parameters:{docs:{description:{story:"A simple dropdown menu with basic items and grouping."}}}},d={render:()=>n.jsxs(t,{children:[n.jsx(c,{asChild:!0,children:n.jsx(m,{variant:"secondary",styleVariant:"destructive",size:"medium",label:"Danger Zone"})}),n.jsxs(l,{className:"w-56",children:[n.jsx(a,{children:"Account Actions"}),n.jsxs(p,{children:[n.jsx(e,{name:"Edit Profile",leadingIcon:M}),n.jsx(e,{name:"Account Settings",leadingIcon:h})]}),n.jsx(o,{}),n.jsx(e,{name:"Delete Account",variant:"destructive",leadingIcon:V})]})]}),parameters:{docs:{description:{story:"Dropdown menu with destructive actions highlighted in red."}}}},u={render:()=>n.jsxs(t,{children:[n.jsx(c,{asChild:!0,children:n.jsx(m,{variant:"tertiary",styleVariant:"gray",size:"small",label:"Options"})}),n.jsxs(l,{className:"w-48",children:[n.jsx(e,{name:"Edit"}),n.jsx(e,{name:"Duplicate"}),n.jsx(o,{}),n.jsx(e,{name:"Delete",variant:"destructive"})]})]}),parameters:{docs:{description:{story:"A minimal dropdown menu without icons or groups."}}}};var x,S,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary" styleVariant="primary" size="medium" label="Full Example" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem {...{
          name: "Profile",
          leadingIcon: UserIcon
        } as any} trailingIcon={HeartIcon} shortcutKey="⇧⌘P">
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem {...{
          name: "Settings",
          leadingIcon: SettingsIcon
        } as any}>
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuItem {...{
          name: "New File",
          leadingIcon: RoundedAddIcon
        } as any}>
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger {...{
            name: "Share",
            leadingIcon: EllipsisIcon
          } as any} />
            <DropdownMenuSubContent>
              <DropdownMenuItem {...{
              name: "Email",
              leadingIcon: FileText
            } as any} />
              <DropdownMenuItem {...{
              name: "Message",
              leadingIcon: FileText
            } as any} />
              <DropdownMenuSeparator />
              <DropdownMenuItem {...{
              name: "More...",
              leadingIcon: EllipsisIcon
            } as any} />
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem {...{
          name: "Download",
          leadingIcon: DownloadIcon
        } as any}>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Preferences</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked={true} name="Show Status Bar">
          Show Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={false} disabled name="Show Activity Bar (Disabled)">
          Show Activity Bar (Disabled)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={true} name="Show Panel">
          Show Panel
        </DropdownMenuCheckboxItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="light">
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator />
        
        <DropdownMenuItem {...{
        name: "Disabled Item",
        disabled: true
      } as any} />
        <DropdownMenuItem {...{
        name: "Log out",
        variant: "destructive"
      } as any}>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var y,b,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary" styleVariant="primary" size="medium" label="Simple Menu" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem {...{
          name: "View Profile",
          leadingIcon: UserIcon
        } as any} />
          <DropdownMenuItem {...{
          name: "Settings",
          leadingIcon: SettingsIcon
        } as any} />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem {...{
        name: "Sign Out",
        variant: "destructive"
      } as any} />
      </DropdownMenuContent>
    </DropdownMenu>,
  parameters: {
    docs: {
      description: {
        story: 'A simple dropdown menu with basic items and grouping.'
      }
    }
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var C,A,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" styleVariant="destructive" size="medium" label="Danger Zone" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Account Actions</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem {...{
          name: "Edit Profile",
          leadingIcon: UserIcon
        } as any} />
          <DropdownMenuItem {...{
          name: "Account Settings",
          leadingIcon: SettingsIcon
        } as any} />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem {...{
        name: "Delete Account",
        variant: "destructive",
        leadingIcon: TrashIcon
      } as any} />
      </DropdownMenuContent>
    </DropdownMenu>,
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu with destructive actions highlighted in red.'
      }
    }
  }
}`,...(k=(A=d.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var T,f,E;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary" styleVariant="gray" size="small" label="Options" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem {...{
        name: "Edit"
      } as any} />
        <DropdownMenuItem {...{
        name: "Duplicate"
      } as any} />
        <DropdownMenuSeparator />
        <DropdownMenuItem {...{
        name: "Delete",
        variant: "destructive"
      } as any} />
      </DropdownMenuContent>
    </DropdownMenu>,
  parameters: {
    docs: {
      description: {
        story: 'A minimal dropdown menu without icons or groups.'
      }
    }
  }
}`,...(E=(f=u.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};const un=["FullExample","SimpleMenu","WithDestructiveAction","MinimalMenu"];export{s as FullExample,u as MinimalMenu,i as SimpleMenu,d as WithDestructiveAction,un as __namedExportsOrder,dn as default};
