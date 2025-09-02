import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{D as t,a as c,b as l,c as a,d as p,e,f as r,g as o,h as x,i as S,j,k as w,l as y,m as D}from"./component-BKhWJ00V.js";import{B as m}from"./component-B9fzchTs.js";import{H as b,U as M,S as h,a as v,E as g,F as I,D as C,T as A}from"./index-DGR86Cth.js";import"./index-DpTt3J-R.js";import"./index-PdevSJdQ.js";import"./index-bX3F6qy8.js";import"./index-B5ODnmFs.js";import"./index-D9ZhQrDp.js";import"./index-CxBDjkVw.js";import"./index-ZRahkmzL.js";import"./index-Bis8x_gY.js";import"./index-CRjfMz32.js";import"./index-BQ0qMpLy.js";import"./utilities-DX5EtrsU.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-C8PyMnuF.js";/* empty css              */import"./index-C_ytSnlL.js";import"./index-B8k91cqS.js";/* empty css               */const q={title:"Design System/DropdownMenu",component:t,parameters:{layout:"centered",docs:{description:{component:"A versatile dropdown menu component with support for various item types, sub-menus, checkboxes, radio buttons, and destructive actions."}}},tags:["autodocs"]},s={render:()=>n.jsxs(t,{children:[n.jsx(c,{asChild:!0,children:n.jsx(m,{variant:"primary",styleVariant:"primary",size:"medium",label:"Full Example"})}),n.jsxs(l,{children:[n.jsx(a,{children:"My Account"}),n.jsxs(p,{children:[n.jsx(e,{name:"Profile",leadingIcon:M,trailingIcon:b,shortcutKey:"⇧⌘P",children:n.jsx(r,{children:"⇧⌘P"})}),n.jsx(e,{name:"Settings",leadingIcon:h,children:n.jsx(r,{children:"⌘,"})})]}),n.jsx(o,{}),n.jsxs(p,{children:[n.jsx(e,{name:"New File",leadingIcon:v,children:n.jsx(r,{children:"⌘N"})}),n.jsxs(x,{children:[n.jsx(S,{name:"Share",leadingIcon:g}),n.jsxs(j,{children:[n.jsx(e,{name:"Email",leadingIcon:I}),n.jsx(e,{name:"Message",leadingIcon:I}),n.jsx(o,{}),n.jsx(e,{name:"More...",leadingIcon:g})]})]}),n.jsx(e,{name:"Download",leadingIcon:C,children:n.jsx(r,{children:"⌘D"})})]}),n.jsx(o,{}),n.jsx(a,{children:"Preferences"}),n.jsx(w,{checked:!0,name:"Show Status Bar",children:"Show Status Bar"}),n.jsx(w,{checked:!1,disabled:!0,name:"Show Activity Bar (Disabled)",children:"Show Activity Bar (Disabled)"}),n.jsx(w,{checked:!0,name:"Show Panel",children:"Show Panel"}),n.jsx(o,{}),n.jsx(a,{children:"Theme"}),n.jsxs(y,{value:"light",children:[n.jsx(D,{value:"light",children:"Light"}),n.jsx(D,{value:"dark",children:"Dark"}),n.jsx(D,{value:"system",children:"System"})]}),n.jsx(o,{}),n.jsx(e,{name:"Disabled Item",disabled:!0}),n.jsx(e,{name:"Log out",variant:"destructive",children:n.jsx(r,{children:"⇧⌘Q"})})]})]})},i={render:()=>n.jsxs(t,{children:[n.jsx(c,{asChild:!0,children:n.jsx(m,{variant:"primary",styleVariant:"primary",size:"medium",label:"Simple Menu"})}),n.jsxs(l,{className:"w-56",children:[n.jsx(a,{children:"Quick Actions"}),n.jsxs(p,{children:[n.jsx(e,{name:"View Profile",leadingIcon:M}),n.jsx(e,{name:"Settings",leadingIcon:h})]}),n.jsx(o,{}),n.jsx(e,{name:"Sign Out",variant:"destructive"})]})]}),parameters:{docs:{description:{story:"A simple dropdown menu with basic items and grouping."}}}},d={render:()=>n.jsxs(t,{children:[n.jsx(c,{asChild:!0,children:n.jsx(m,{variant:"secondary",styleVariant:"destructive",size:"medium",label:"Danger Zone"})}),n.jsxs(l,{className:"w-56",children:[n.jsx(a,{children:"Account Actions"}),n.jsxs(p,{children:[n.jsx(e,{name:"Edit Profile",leadingIcon:M}),n.jsx(e,{name:"Account Settings",leadingIcon:h})]}),n.jsx(o,{}),n.jsx(e,{name:"Delete Account",variant:"destructive",leadingIcon:A})]})]}),parameters:{docs:{description:{story:"Dropdown menu with destructive actions highlighted in red."}}}},u={render:()=>n.jsxs(t,{children:[n.jsx(c,{asChild:!0,children:n.jsx(m,{variant:"tertiary",styleVariant:"gray",size:"small",label:"Options"})}),n.jsxs(l,{className:"w-48",children:[n.jsx(e,{name:"Edit"}),n.jsx(e,{name:"Duplicate"}),n.jsx(o,{}),n.jsx(e,{name:"Delete",variant:"destructive"})]})]}),parameters:{docs:{description:{story:"A minimal dropdown menu without icons or groups."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const J=["FullExample","SimpleMenu","WithDestructiveAction","MinimalMenu"];export{s as FullExample,u as MinimalMenu,i as SimpleMenu,d as WithDestructiveAction,J as __namedExportsOrder,q as default};
