import { Breadcrumb } from "./component";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import * as React from "react";

const meta: Meta<typeof Breadcrumb> = {
    title: "Design System/Breadcrumb",
    component: Breadcrumb,
    tags: ["autodocs"],
    argTypes: {
        ellipsisPosition: {
            control: {
                type: "number",
            },
            description: "The index of the link to be hidden by the ellipsis. It should be less than the maximum link count.",
        },
        maximumLinkCount: {
            control: {
                type: "number",
            },
            description: "The maximum number of links to be displayed. If the number of links is greater than this value, the ellipsis will be displayed.",
        },
        linkList: {
            control: {
                type: "object",
            },
            description: "The list of links to be displayed in the breadcrumb.",
        },
        onBackButtonClick: {
            control: {
                type: "object",
            },
            description: "The function to be called when the back button is clicked.",
        },
        onCrumbClick: {
            control: {
                type: "object",
            },
            description: "The function to be called when a crumb is clicked.",
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [listOfLinks, setListOfLinks] = useState(args.linkList);
        return (
            <div className="flex flex-col gap-4">
                <Breadcrumb {...args}
                    listOfLinks={listOfLinks}
                    onBackButtonClick={() => {
                        setListOfLinks(listOfLinks.slice(0, -1));
                    }}
                    ellipsisPosition={args.ellipsisPosition}
                    maximumLinkCount={args.maximumLinkCount}
                    onCrumbClick={(href, index) => {
                        alert(`Crumb clicked: ${listOfLinks[index].label}, index: ${index}`);
                    }}
                />
            </div>
        )
    },
    args: {
        linkList: [{ label: "Home", href: "#" }, { label: "Products", href: "#" }, { label: "Product 1", href: "#" }, { label: "Product 2", href: "#" }, { label: "Product 3", href: "#" }, { label: "Product 4", href: "#" }, { label: "Product 5", href: "#" }, { label: "Product 6", href: "#" }],
        ellipsisPosition: 2,
        maximumLinkCount: 5,
        onBackButtonClick: () => {
            console.log("Back button clicked");
        },

    },
};