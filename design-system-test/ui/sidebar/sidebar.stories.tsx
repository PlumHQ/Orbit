import { CommandKeyIcon, LeftChevronIcon } from "@pluminsurance/design-system-test.icons"
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "."
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sidebar> = {
  title: "Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
      description: "The side of the sidebar.",
    },
    variant: {
      control: {
        type: "select",
        options: ["sidebar", "floating", "inset"],
      },
      description: "The variant of the sidebar.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: () => CommandKeyIcon,
    children: [
      {
        title: "Home Sub Item",
        url: "#",
        icon: () => CommandKeyIcon,
      },
    ],
  },
  {
    title: "Inbox",
    url: "#",
    icon: () => CommandKeyIcon,
  },
  {
    title: "Calendar",
    url: "#",
    icon: () => CommandKeyIcon,
    children: [
      {
        title: "Calendar Sub Item",
        url: "#",
        icon: () => CommandKeyIcon,
      },
    ],
  },
  {
    title: "Search",
    url: "#",
    icon: () => CommandKeyIcon,
  },
  {
    title: "Settings",
    url: "#",
    icon: () => CommandKeyIcon,
  },
]

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton item={item} asChild />
                  {item.children && <SidebarMenuSub>
                    {item.children.map((child) => (
                      <SidebarMenuSubItem key={child.title}>
                        <SidebarMenuSubButton item={child} />
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                  }
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(args.open)

    return(
    <SidebarProvider defaultOpen={true} open={open} onOpenChange={setOpen}>
      <AppSidebar {...args} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger variant="tertiary" styleVariant="beige" size="medium" iconOnly={true} leadingIcon={LeftChevronIcon} label="Toggle Sidebar" />
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-gray-100 aspect-video rounded-xl" />
            <div className="bg-gray-100 aspect-video rounded-xl" />
            <div className="bg-gray-100 aspect-video rounded-xl" />
          </div>
          <div className="bg-gray-100 min-h-[300px] flex-1 rounded-xl" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )},
  args: {
    side: "left",
    variant: "sidebar",
    collapsible: "icon",
    open: true,
  },
};