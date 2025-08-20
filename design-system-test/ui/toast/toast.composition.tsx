import React from 'react';
import { Toast } from './component';
import { Button } from '../button';
export const NegativeBasicToast = () => {
  return (
    <Toast
      styleVariant="negative"
      message="Placeholder text for toast"
      action={
        <Button
          variant="secondary"
          styleVariant="white"
          size="small"
          label="Button"
        />
      }
      onClose={() => console.log('Closed')}
    />
  );
};

export const PositiveBasicToast = () => {
  return (
    <Toast
      styleVariant="positive"
      message="Placeholder text for toast"
      action={
        <Button
          variant="secondary"
          styleVariant="white"
          size="small"
          label="Button"
        />
      }
      onClose={() => console.log('Closed')}
    />
  );
};

export const NeutralBasicToast = () => {
  return (
    <Toast
      styleVariant="neutral"
      message="Placeholder text for toast"
      action={
        <Button
          variant="secondary"
          styleVariant="white"
          size="small"
          label="Button"
        />
      }
      onClose={() => console.log('Closed')}
    />
  );
};

export const MessageToast = () => {
  return (
    <div style={{ width: '400px' }}>
      <Toast
        styleVariant="promotional"
        title="Heading"
        message="Content for a promotional toast which will be a multi liner content that will be written here."
        action={
          <Button
            variant="secondary"
            styleVariant="white"
            size="small"
            label="Button"
          />
        }
        onClose={() => {}}
      />
    </div>
  );
};
