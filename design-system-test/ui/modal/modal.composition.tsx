import React from 'react';
import { Button } from '@pluminsurance/design-system-test.button';
import { Card } from '@pluminsurance/design-system-test.cards';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogBody,
} from './index';

// Basic Modal matching your image design
export function BasicModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="primary"
          styleVariant="primary"
          size="medium"
          label="Open Modal"
        />
      </DialogTrigger>
      <DialogContent size="medium">
        <DialogHeader headerText="Header Text" onCloseClick={() => setIsOpen(false)}>
          <DialogTitle>Header Text</DialogTitle>
        </DialogHeader>
        <DialogBody bodyText="This will end the current addition request you have requested and will redirect you back to the homescreen.">
          <DialogDescription>
            This will end the current addition request you have requested and will redirect you back to the homescreen.          </DialogDescription>
        </DialogBody>
        <DialogFooter buttonGroupStyle="simple" buttonGroupOrientation="horizontal" buttonGroupOnFirstButtonClick={() => { }} buttonGroupOnSecondButtonClick={() => { }} buttonGroupFirstButtonLabel="Cancel" buttonGroupSecondButtonLabel="Confirm" buttonGroupLinkButtonLabel="Link Button" buttonGroupLinkButtonClick={() => { }} buttonGroupAlignment="right" showConfirmationCheckbox={true} />
      </DialogContent>
    </Dialog>
  );
}

// Modal with Button Group
export function ModalWithButtonGroup() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="primary"
          styleVariant="primary"
          size="medium"
          label="Open Button Group Modal"
        />
      </DialogTrigger>
      <DialogContent size="large">
        <DialogHeader headerText="Header Text" onCloseClick={() => setIsOpen(false)}>
          <DialogTitle>Select an Option</DialogTitle>
        </DialogHeader>
        <DialogBody bodyText="This will end the current addition request you have requested and will redirect you back to the homescreen.">
          <div className="space-y-3">
            <p className="text-base font-primary text-surface-text-gray-subtle mb-4">
              Choose from the available options below:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="secondary"
                styleVariant="gray"
                size="medium"
                label="Option 1"
              />
              <Button
                variant="secondary"
                styleVariant="gray"
                size="medium"
                label="Option 2"
              />
              <Button
                variant="secondary"
                styleVariant="gray"
                size="medium"
                label="Option 3"
              />
              <Button
                variant="secondary"
                styleVariant="gray"
                size="medium"
                label="Option 4"
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter
          buttonGroupStyle="simple"
          buttonGroupOrientation="horizontal"
          buttonGroupOnFirstButtonClick={() => { }}
          buttonGroupOnSecondButtonClick={() => { }}
          buttonGroupFirstButtonLabel="Cancel"
          buttonGroupSecondButtonLabel="Confirm"
          buttonGroupLinkButtonLabel="Link Button"
          buttonGroupLinkButtonClick={() => { }}
          buttonGroupAlignment="right"
          showConfirmationCheckbox={true} />
      </DialogContent>
    </Dialog>
  );
}

// Modal with Cards
export function ModalWithCards() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="primary"
          styleVariant="primary"
          size="medium"
          label="Open Cards Modal"
        />
      </DialogTrigger>
      <DialogContent size="large">
        <DialogHeader headerText="Header Text" onCloseClick={() => setIsOpen(false)} />
        <DialogBody bodyText="This will end the current addition request you have requested and will redirect you back to the homescreen." />
        <DialogFooter
          buttonGroupStyle="simple"
          buttonGroupOrientation="horizontal"
          buttonGroupOnFirstButtonClick={() => { }}
          buttonGroupOnSecondButtonClick={() => { }}
          buttonGroupFirstButtonLabel="Cancel"
          buttonGroupSecondButtonLabel="Continue"
          buttonGroupLinkButtonLabel="Link Button"
          buttonGroupLinkButtonClick={() => { }}
          buttonGroupAlignment="right"
          showConfirmationCheckbox={true} />
      </DialogContent>
    </Dialog>
  );
}
