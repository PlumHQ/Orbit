import React, { useState } from 'react';
import { Button } from './component.js';
import {
  DownloadIcon,
  RightArrowIcon,
} from '@pluminsurance/design-system-test.icons';

// Primary Buttons
export const DefaultPrimaryButton = () => {
  return (
    <Button
      variant="primary"
      styleVariant="primary"
      size="large"
      label="Primary Button"
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
    />
  );
};

export const DefaultGraySecondaryButton = () => {
  return (
    <Button
      variant="secondary"
      styleVariant="gray"
      size="large"
      label="Primary Button"
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
    />
  );
};

export const DefaultPrimaryButtonLoading = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      variant="primary"
      styleVariant="primary"
      size="medium"
      // iconOnly={true}
      label={'Hidden Button Label'}
      loading={loading}
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      onClick={() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }}
    />
  );
};

export const DefaultPrimarySmallButton = () => {
  return (
    <Button
      variant="primary"
      styleVariant="primary"
      size="small"
      label="Primary Small Button"
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
    />
  );
};

export const DefaultPrimarySmallButtonLoading = () => {
  return (
    <Button
      variant="primary"
      styleVariant="primary"
      size="small"
      iconOnly={true}
      loading
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
    />
  );
};

export const DefaultPrimaryMediumButton = () => {
  return (
    <Button
      variant="primary"
      styleVariant="primary"
      size="medium"
      label="Primary Medium Button"
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
    />
  );
};

export const DefaultPrimaryMediumButtonLoading = () => {
  return (
    <Button
      variant="primary"
      styleVariant="primary"
      size="medium"
      iconOnly={true}
      loading
      label={"Default Button Medium Button Loading"}
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
    />
  );
};

// Destructive Buttons
export const DestructivePrimarySmallButton = () => {
  return (
    <Button
      variant="primary"
      styleVariant="destructive"
      size="small"
      label="Destructive Button"
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
    />
  );
};

export const DestructivePrimarySmallButtonLoading = () => {
  return (
    <Button
      variant="primary"
      styleVariant="destructive"
      size="small"
      iconOnly={true}
      loading
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
    />
  );
};

// Secondary Buttons
export const SecondaryPrimaryLargeButton = () => {
  return (
    <Button
      variant="secondary"
      styleVariant="beige"
      size="large"
      label="Secondary Beige Large Button"
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
    />
  );
};

export const SecondaryPrimaryLargeButtonLoading = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        background: 'lightblue',
      }}
    >
      <Button
        variant="secondary"
        styleVariant="white"
        size="large"
        label="Secondary Primary Large Button Loading"
        // iconOnly
        loading={loading}
        leadingIcon={DownloadIcon}
        trailingIcon={RightArrowIcon}
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }}
      />
    </div>
  );
};

// Disabled Buttons
export const DisabledPrimaryLargeButton = () => {
  return (
    <Button
      variant="primary"
      styleVariant="primary"
      size="large"
      label="Disabled Button"
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      disabled
    />
  );
};

export const DisabledPrimaryLargeButtonLoading = () => {
  return (
    <Button
      variant="primary"
      styleVariant="primary"
      size="large"
      iconOnly
      loading
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      disabled
    />
  );
};

// Continue this pattern for all other buttons
