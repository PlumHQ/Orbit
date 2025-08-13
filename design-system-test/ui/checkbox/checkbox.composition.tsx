import React from 'react';
import { Checkbox } from './index';

export const UncheckedGrayLargeCheckbox = () => {
  return (
    <Checkbox label="Option" checked={false} styleVariant="gray" size="large" />
  );
};

export const CheckedLargeErrorBeigeCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      label="Option"
      checked={checked}
      styleVariant="beige"
      size={'large'}
      error={true}
      errorText="Error message"
      onClick={() => {
        setChecked(!checked);
      }}
    />
  );
};

export const CheckedLargeGrayCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      label="Option"
      checked={checked}
      styleVariant="gray"
      size={'large'}
      onClick={() => {
        setChecked(!checked);
      }}
    />
  );
};

export const CheckedLargeBeigeDisabledCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      label="Option"
      checked={checked}
      styleVariant="beige"
      disabled
      size={'large'}
      onClick={() => {
        setChecked(!checked);
      }}
    />
  );
};

export const UncheckedGrayMediumCheckbox = () => {
  return (
    <Checkbox
      label="Option"
      checked={false}
      styleVariant="gray"
      size="medium"
    />
  );
};

export const CheckedMediumErrorBeigeCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      label="Option"
      checked={checked}
      styleVariant="beige"
      size={'medium'}
      error={true}
      errorText="Error message"
      onClick={() => {
        setChecked(!checked);
      }}
    />
  );
};

export const CheckedMediumGrayCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      label="Option"
      checked={checked}
      styleVariant="gray"
      size={'medium'}
      onClick={() => {
        setChecked(!checked);
      }}
    />
  );
};

export const CheckedMediumBeigeDisabledCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      label="Option"
      checked={checked}
      styleVariant="beige"
      disabled
      size={'medium'}
      onClick={() => {
        setChecked(!checked);
      }}
    />
  );
};

export const UncheckedGraySmallCheckbox = () => {
  return (
    <Checkbox
      label="Option"
      checked={false}
      styleVariant="gray"
      size="small"
    />
  );
};

export const CheckedSmallErrorBeigeCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      label="Option"
      checked={checked}
      styleVariant="beige"
      size={'small'}
      error={true}
      errorText="Error message"
      onClick={() => {
        setChecked(!checked);
      }}
    />
  );
};

export const CheckedSmallGrayCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      label="Option"
      checked={checked}
      styleVariant="gray"
      size={'small'}
      onClick={() => {
        setChecked(!checked);
      }}
    />
  );
};

export const CheckedSmallBeigeDisabledCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      label="Option"
      checked={checked}
      styleVariant="beige"
      disabled
      size={'small'}
      onClick={() => {
        setChecked(!checked);
      }}
    />
  );
};
