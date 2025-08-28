import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogBody } from './index';
import { Button } from '../button';
import { Card } from '../cards';
import { CrossCloseIcon, ListTreeIcon } from '../icons';
import { Skeleton } from '../skeleton';

const meta: Meta<typeof Dialog> = {
  title: 'Design System/Modal',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modal dialog component for displaying content in an overlay.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    buttonGroupStyle: {
      control: { type: 'select' },
      options: ['simple', 'modular'],
      description: 'The style of the button group',
    },
    buttonGroupOrientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the button group',
    },
    buttonGroupOnFirstButtonClick: {
      control: { type: 'function' },
      description: 'The function to call when the first button is clicked',
    },
    buttonGroupOnSecondButtonClick: {
      control: { type: 'function' },
      description: 'The function to call when the second button is clicked',
    },
    buttonGroupFirstButtonLabel: {
      control: { type: 'string' },
      description: 'The label for the first button',
    },
    buttonGroupSecondButtonLabel: {
      control: { type: 'string' },
      description: 'The label for the second button',
    },
    buttonGroupLinkButtonLabel: {
      control: { type: 'string' },
      description: 'The label for the link button',
    },
    buttonGroupLinkButtonClick: {
      control: { type: 'function' },
      description: 'The function to call when the link button is clicked',
    },
    buttonGroupAlignment: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'The alignment of the button group',
    },
    showConfirmationCheckbox: {
      control: { type: 'boolean' },
      description: 'Whether to show the confirmation checkbox',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the modal',
    },
  },
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   render: (args) => (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="primary" styleVariant="primary" size="medium" label="Open Modal" />
//       </DialogTrigger>
//       <DialogContent {...args}>
//         <DialogHeader>
//           <DialogTitle>Default Modal</DialogTitle>
//           <DialogDescription>
//             This is a basic modal dialog with default settings.
//           </DialogDescription>
//         </DialogHeader>
//         <DialogBody>
//           <p>This is the main content of the modal. You can put any content here.</p>
//         </DialogBody>
//         <DialogFooter>
//           <Button variant="secondary" styleVariant="gray" size="medium" label="Cancel" />
//           <Button variant="primary" styleVariant="primary" size="medium" label="Save" />
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   ),
//   args: {
//     size: 'medium',
//     showCloseButton: true,
//   },
// };

// export const Large: Story = {
//   render: (args) => (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="primary" styleVariant="primary" size="medium" label="Open Large Modal" />
//       </DialogTrigger>
//       <DialogContent {...args}>
//         <DialogHeader>
//           <DialogTitle>Large Modal</DialogTitle>
//           <DialogDescription>
//             This is a larger modal with more content space.
//           </DialogDescription>
//         </DialogHeader>
//         <DialogBody>
//           <p>This modal has more space for content. You can include forms, images, or other complex content here.</p>
//           <div className="mt-4 p-4 bg-gray-50 rounded">
//             <h4 className="font-medium mb-2">Example Content Area</h4>
//             <p>This could contain a form, a list of items, or any other content that requires more space.</p>
//           </div>
//         </DialogBody>
//         <DialogFooter>
//           <Button variant="secondary" styleVariant="gray" size="medium" label="Cancel" />
//           <Button variant="primary" styleVariant="primary" size="medium" label="Continue" />
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   ),
//   args: {
//     size: 'large',
//     showCloseButton: true,
//   },
// };

// export const WithCards: Story = {
//   render: (args) => (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="primary" styleVariant="primary" size="medium" label="Open Modal with Cards" />
//       </DialogTrigger>
//       <DialogContent {...args}>
//         <DialogHeader>
//           <DialogTitle>Select an Option</DialogTitle>
//           <DialogDescription>
//             Choose one of the options below to continue.
//           </DialogDescription>
//         </DialogHeader>
//         <DialogBody>
//           <div className="grid grid-cols-2 gap-4">
//             <Card size="small" cardStyle="primary">
//               <h4 className="font-medium mb-2">Option 1</h4>
//               <p className="text-sm">First option description</p>
//             </Card>
//             <Card size="small" cardStyle="secondary">
//               <h4 className="font-medium mb-2">Option 2</h4>
//               <p className="text-sm">Second option description</p>
//             </Card>
//           </div>
//         </DialogBody>
//         <DialogFooter alignment="center">
//           <Button variant="secondary" styleVariant="gray" size="medium" label="Back" />
//           <Button variant="primary" styleVariant="primary" size="medium" label="Select" />
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   ),
//   args: {
//     size: 'medium',
//     showCloseButton: true,
//   },
// };

export const HorzinatalButtons: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <div className="w-screen flex justify-center bg-[#F5F5F5]">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="primary"
            styleVariant="primary"
            size="medium"
            label="Open Cards Modal"
          />
        </DialogTrigger>
        <DialogContent size={args.size} showHeaderOverFlowGradient={args.showHeaderOverFlowGradient} showFooterOverFlowGradient={args.showFooterOverFlowGradient}>
          <DialogHeader centerAlignHeader={args.centerAlignHeader} showBackButton={args.showBackButton} headerText="Choose Your Plan" onCloseClick={() => setIsOpen(false)} onBackArrowClick={args.onBackArrowClick} />
          <DialogBody
            bodyText="This will end the current addition request you have requested and will redirect you back to the homescreen.This will end the current addition request you have requested and will redirect you back to the homescreen. This will end the current addition request you have requested and will redirect you back to the homescreen.This will end the current addition request you have requested and will redirect you back to the homescreen. This will end the current addition request you have requested and will redirect you back to the homescreen.This will end the current addition request you have requested and will redirect you back to the homescreen. This will end the current addition request you have requested and will redirect you back to the homescreen.This will end the current addition request you have requested and will redirect you back to the homescreen."
            bodySlot={
              <Skeleton className="h-37" />
            }
          />
          <DialogFooter
            buttonGroupStyle={args.buttonGroupStyle}
            buttonGroupOrientation={args.buttonGroupOrientation}
            buttonGroupOnFirstButtonClick={args.buttonGroupOnFirstButtonClick}
            buttonGroupOnSecondButtonClick={args.buttonGroupOnSecondButtonClick}
            buttonGroupFirstButtonLabel={args.buttonGroupFirstButtonLabel}
            buttonGroupSecondButtonLabel={args.buttonGroupSecondButtonLabel}
            buttonGroupLinkButtonLabel={args.buttonGroupLinkButtonLabel}
            buttonGroupLinkButtonClick={args.buttonGroupLinkButtonClick}
            showConfirmationCheckbox={args.showConfirmationCheckbox}
          />
          </DialogContent>
        </Dialog>
      </div>
    )
  },
  args: {
    size: "large",
    showCloseButton: false,
    showHeaderOverFlowGradient: false,
    showFooterOverFlowGradient: true,
    buttonGroupStyle: "modular",
    buttonGroupOrientation: 'horizontal',
    buttonGroupOnFirstButtonClick: () => {},
    buttonGroupOnSecondButtonClick: () => {},
    buttonGroupFirstButtonLabel: 'Cancel',
    buttonGroupSecondButtonLabel: 'Continue',
    buttonGroupLinkButtonLabel: 'Link Button',
    buttonGroupLinkButtonClick: () => {},
    buttonGroupAlignment: 'right',
    showConfirmationCheckbox: true,
    centerAlignHeader: true,
    showBackButton: true,
    onBackArrowClick: () => {},
  },
};