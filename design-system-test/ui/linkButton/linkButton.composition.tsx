import React from 'react';
import { LinkButton } from './component';
import {
  DownloadIcon,
  RightArrowIcon,
} from '../icons';

export const LargePrimaryButton = () => {
  return (
    <LinkButton
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      size="large"
      state="primary"
      label="Button"
    />
  );
};

export const LargePrimaryDisabledButton = () => {
  return (
    <LinkButton
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      size="large"
      state="primary"
      label="Button"
      disabled
    />
  );
};

export const MediumPrimaryButton = () => {
  return (
    <LinkButton
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      size="medium"
      state="primary"
      label="Button"
    />
  );
};

export const SmallPrimaryButton = () => {
  return (
    <LinkButton
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      size="small"
      state="primary"
      label="Button"
    />
  );
};

export const LargeGrayButton = () => {
  return (
    <LinkButton
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      size="large"
      state="gray"
      label="Button"
    />
  );
};

export const LargeGrayDisabledButton = () => {
  return (
    <LinkButton
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      size="large"
      state="gray"
      label="Button"
      disabled
    />
  );
};

export const MediumGrayButton = () => {
  return (
    <LinkButton
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      size="medium"
      state="gray"
      label="Button"
    />
  );
};

export const SmallGrayButton = () => {
  return (
    <LinkButton
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      size="small"
      state="gray"
      label="Button"
    />
  );
};

export const LargeBeigeButton = () => {
  return (
    <LinkButton
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      size="large"
      state="beige"
      label="Button"
    />
  );
};

export const LargeBeigeDisabledButton = () => {
  return (
    <LinkButton
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      size="large"
      state="beige"
      label="Button"
      disabled
    />
  );
};

export const MediumBeigeButton = () => {
  return (
    <LinkButton
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      size="medium"
      state="beige"
      label="Button"
    />
  );
};

export const SmallBeigeButton = () => {
  return (
    <LinkButton
      leadingIcon={DownloadIcon}
      trailingIcon={RightArrowIcon}
      size="small"
      state="beige"
      label="Button"
    />
  );
};

export const LargeWhiteButton = () => {
  return (
    <div style={{ background: 'lightblue', padding: '100px' }}>
      <LinkButton
        leadingIcon={DownloadIcon}
        trailingIcon={RightArrowIcon}
        size="large"
        state="white"
        label="Button"
      />
    </div>
  );
};
