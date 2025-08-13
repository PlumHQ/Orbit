import React from 'react';
import { IconButton } from './component';

export const LargeGrayButton = () => {
  return <div style={{padding: "8px"}}><IconButton color="gray" size="large" /></div>;
};

export const LargeGrayDisabledButton = () => {
  return <IconButton disabled color="gray" size="large" />;
};

export const MediumGrayButton = () => {
  return <IconButton color="gray" size="medium" />;
};

export const SmallGrayButton = () => {
  return <IconButton color="gray" size="small" />;
};

export const LargeBeigeButton = () => {
  return <IconButton color="beige" size="large" />;
};

export const LargeBeigeDisabledButton = () => {
    return <IconButton color="beige" disabled size="large" />;
  };

export const MediumBeigeButton = () => {
  return <IconButton color="beige" size="medium" />;
};
export const SmallBeigeButton = () => {
  return <IconButton color="beige" size="small" />;
};

export const LargeWhiteButton = () => {
  return (
    <div
      style={{
        background: 'blue',
        padding: 8,
        width: 'fit-content',
        height: 'fit-content',
      }}
    >
      <IconButton color="white" size="large" />
    </div>
  );
};

export const LargeWhiteDisabledButton = () => {
    return (
      <div
        style={{
          background: 'blue',
          padding: 8,
          width: 'fit-content',
          height: 'fit-content',
        }}
      >
        <IconButton color="white" disabled size="large" />
      </div>
    );
  };
export const MediumWhiteButton = () => {
  return (
    <div
      style={{
        background: 'blue',
        padding: 8,
        width: 'fit-content',
        height: 'fit-content',
      }}
    >
      <IconButton color="white" size="medium" />
    </div>
  );
};
export const SmallWhiteButton = () => {
  return (
    <div
      style={{
        background: 'blue',
        padding: 8,
        width: 'fit-content',
        height: 'fit-content',
      }}
    >
      <IconButton color="white" size="small" />
    </div>
  );
};
