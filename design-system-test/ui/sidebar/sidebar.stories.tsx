  import { CommandKeyIcon, EndorsementsIcon, FileText, GraduationCapIcon, HomeIcon, IndianRupee, LeftChevronIcon, MessageQuestionIcon, SettingsIcon, StarIcon, UserIcon } from "../icons"
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
  SidebarFooter,
} from "."
import { Meta, StoryObj } from "@storybook/react";
import { ExpandedSidedLogo, CollapsedSidedLogo } from "../illustrations";
import { Avatar } from "../avatar";

const meta: Meta<typeof Sidebar> = {
  title: "Design System/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Menu items.




function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [items, setItems] = React.useState<SidebarMenuItem[]>([
    {
      title: "Home",
      url: "#",
      icon: () => HomeIcon,
      counter: 3,
    },
    {
      title: "Employees",
      url: "#",
      icon: () => UserIcon,
    },
    {
      title: "Benefits",
      url: "#",
      icon: () => StarIcon,
      expanded: true,
      children: [
        {
          title: "Benefits",
          url: "#",
        },
        {
          title: "Groups",
          url: "#",
        },
      ],
    },
    {
      title: "CD Accounts",
      url: "#",
      icon: () => IndianRupee,
    },
    {
      title: "Endorsements",
      url: "#",
      icon: () => EndorsementsIcon,
    },
    {
      title: "Claims",
      url: "#",
      icon: () => FileText,
    },
  ])
  const [footerItems, setFooterItems] = React.useState<SidebarMenuItem[]>([
    {
      title: "Resource Hub",
      url: "#",
      icon: () => GraduationCapIcon,
      onClick: () => {
        console.log("Resource Hub");
      }
    },
    {
      title: "Settings",
      url: "#",
      icon: () => SettingsIcon,
      onClick: () => {
        console.log("Settings");
      }
    },
    {
      title: "Help & Support",
      url: "#",
      icon: () => MessageQuestionIcon,
      onClick: () => {
        console.log("Help & Support");
      }
    },
    {
      title: "Aditya Singh",
      url: "#",
      icon: () => {
        const AvatarComponent: React.FC = () => (
          <Avatar
            variant="initials"
            size="small"
            src="https://via.placeholder.com/150"
            fallback="AS"
            alt="Aditya Singh"
            onClick={() => {}}
          />
        );
        return AvatarComponent;
      },
      onClick: () => {
        console.log("Aditya Singh");
      }
    }
  ])
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel expandedIllustration={ExpandedSidedLogo} collapsedIllustration={CollapsedSidedLogo} />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item: SidebarMenuItem) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton item={item}  isActive={false} asChild onClick={() => {
                    setItems(items.map((i) => ({...i, expanded: i.title === item.title ? !i.expanded : i.expanded})))
                    item.onClick && item.onClick();
                  }} tooltip={item.title} />
                  {item.children && item.expanded && <SidebarMenuSub>
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
          <SidebarFooter>
            <SidebarGroupContent>
            <SidebarMenu>
              {footerItems.map((item: SidebarMenuItem) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton item={item} tooltip={item.title} asChild />
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
          </SidebarFooter>
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
        <SidebarTrigger variant="tertiary" styleVariant="beige" size="medium" iconOnly={true} leadingIcon={LeftChevronIcon} label="Toggle Sidebar" />
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