import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer, DrawerContent, DrawerTrigger } from './component';
import { Button } from '../button';
import { DownloadIcon } from '../icons';
import { DrawerType, SideDrawerStyle } from './types';

const meta: Meta<typeof Drawer> = {
    title: 'Design System/Drawer',
    component: Drawer,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DrawerDemoWithSideNotification: Story = {
    render: ({type = "side", sideDrawerStyle = "information"}: {type?: DrawerType, sideDrawerStyle?: SideDrawerStyle}) => {
        const [currentRecord, setCurrentRecord] = useState(1);
        const [totalRecords, setTotalRecords] = useState(10);
        return (
            <Drawer>
                <DrawerTrigger>
                    <Button
                        variant="primary"
                        styleVariant="primary"
                        size="small"
                        label="Open Drawer"
                        leadingIcon={DownloadIcon}
                    />
                </DrawerTrigger>
                <DrawerContent 
                    type={type} 
                    title="Title" 
                    showCloseButton={true} 
                    currentRecord={currentRecord} 
                    showNotification={true}
                    totalRecords={totalRecords} 
                    recordType="Records" 
                    leadingContent={<div className={`w-full h-full bg-surface-background-${currentRecord%2 ? "peach": "gray"}-subtle border border-dashed rounded-6`}></div>} 
                    trailingContent={<div className={`w-full h-full bg-surface-background-${currentRecord%2 ? "peach": "gray"}-subtle border border-dashed rounded-6`}></div>} 
                    tertiaryButtonLabel="Tertiary" 
                    tertiaryButtonOnClick={() => {alert("tertiary button clicked")}} 
                    primaryButtonLabel="Primary" 
                    primaryButtonOnClick={() => {alert("primary button clicked")}} 
                    buttonLabel="Button" 
                    sideDrawerStyle={sideDrawerStyle} 
                    bodyContent={<div className={`h-full bg-surface-background-${currentRecord%2 ? "peach": "gray"}-subtle border border-dashed rounded-6 flex items-center justify-center`}>Slot (Swap it with your content)</div>} 
                    sideDrawerHeading="Personal Accident" 
                    sideDrawerDescription="Personal Accident" 
                    sideDrawerHeadingButtonClick={() => {alert("heading button clicked")}}
                    onSideDrawerLinkButtonClick={() => {alert("link button clicked")}}
                    getPreviousRecord={() => {setCurrentRecord(currentRecord - 1)}}
                    getNextRecord={() => {setCurrentRecord(currentRecord + 1)}}
                />
            </Drawer>
        )
    },
    args: {
        type: "side",
        sideDrawerStyle: "information",
    },
}

export const DrawerDemoWithSideNoNotification: Story = {
    render: ({type = "side", sideDrawerStyle = "information"}: {type?: DrawerType, sideDrawerStyle?: SideDrawerStyle}) => {
        const [currentRecord, setCurrentRecord] = useState(1);
        const [totalRecords, setTotalRecords] = useState(10);
        return (
            <Drawer>
                <DrawerTrigger>
                    <Button
                        variant="primary"
                        styleVariant="primary"
                        size="small"
                        label="Open Drawer"
                        leadingIcon={DownloadIcon}
                    />
                </DrawerTrigger>
                <DrawerContent 
                    type={type} 
                    title="Title" 
                    showCloseButton={true} 
                    currentRecord={currentRecord} 
                    showNotification={false}
                    totalRecords={totalRecords} 
                    recordType="Records" 
                    leadingContent={<div className={`w-full h-full bg-surface-background-${currentRecord%2 ? "peach": "gray"}-subtle border border-dashed rounded-6`}></div>} 
                    trailingContent={<div className={`w-full h-full bg-surface-background-${currentRecord%2 ? "peach": "gray"}-subtle border border-dashed rounded-6`}></div>} 
                    tertiaryButtonLabel="Tertiary" 
                    tertiaryButtonOnClick={() => {alert("tertiary button clicked")}} 
                    primaryButtonLabel="Primary" 
                    primaryButtonOnClick={() => {alert("primary button clicked")}} 
                    buttonLabel="Button" 
                    sideDrawerStyle={sideDrawerStyle} 
                    bodyContent={<div className={`h-full bg-surface-background-${currentRecord%2 ? "peach": "gray"}-subtle border border-dashed rounded-6 flex items-center justify-center`}>Slot (Swap it with your content)</div>} 
                    sideDrawerHeading="Personal Accident" 
                    sideDrawerDescription="Personal Accident" 
                    sideDrawerHeadingButtonClick={() => {alert("heading button clicked")}}
                    onSideDrawerLinkButtonClick={() => {alert("link button clicked")}}
                    getPreviousRecord={() => {setCurrentRecord(currentRecord - 1)}}
                    getNextRecord={() => {setCurrentRecord(currentRecord + 1)}}
                />
            </Drawer>
        )
    },
    args: {
        type: "side",
        sideDrawerStyle: "information",
    },
}

export const DrawerDemoWithFullPage: Story = {
    render: ({type = "side", sideDrawerStyle = "information"}: {type?: DrawerType, sideDrawerStyle?: SideDrawerStyle}) => {
        const [currentRecord, setCurrentRecord] = useState(1);
        const [totalRecords, setTotalRecords] = useState(10);
        return (
            <Drawer>
                <DrawerTrigger>
                    <Button
                        variant="primary"
                        styleVariant="primary"
                        size="small"
                        label="Open Drawer"
                        leadingIcon={DownloadIcon}
                    />
                </DrawerTrigger>
                <DrawerContent 
                    type={type} 
                    title="Title" 
                    showCloseButton={true} 
                    currentRecord={currentRecord} 
                    showNotification={true}
                    totalRecords={totalRecords} 
                    recordType="Records" 
                    leadingContent={<div className={`w-full h-full bg-surface-background-${currentRecord%2 ? "peach": "gray"}-subtle border border-dashed rounded-6`}></div>} 
                    trailingContent={<div className={`w-full h-full bg-surface-background-${currentRecord%2 ? "peach": "gray"}-subtle border border-dashed rounded-6`}></div>} 
                    tertiaryButtonLabel="Tertiary" 
                    tertiaryButtonOnClick={() => {alert("tertiary button clicked")}} 
                    primaryButtonLabel="Primary" 
                    primaryButtonOnClick={() => {alert("primary button clicked")}} 
                    buttonLabel="Button" 
                    sideDrawerStyle={sideDrawerStyle} 
                    bodyContent={<div className={`h-full bg-surface-background-${currentRecord%2 ? "peach": "gray"}-subtle border border-dashed rounded-6 flex items-center justify-center`}>Slot (Swap it with your content)</div>} 
                    sideDrawerHeading="Personal Accident" 
                    sideDrawerDescription="Personal Accident" 
                    sideDrawerHeadingButtonClick={() => {alert("heading button clicked")}}
                    onSideDrawerLinkButtonClick={() => {alert("link button clicked")}}
                    getPreviousRecord={() => {setCurrentRecord(currentRecord - 1)}}
                    getNextRecord={() => {setCurrentRecord(currentRecord + 1)}}
                />
            </Drawer>
        )
    },
    args: {
        type: "full",
    },
}
