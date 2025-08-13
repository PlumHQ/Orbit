import React from 'react';
import { Chip } from './component';
import {
  ChevronDown,
  FilterIcon,
} from '@pluminsurance/design-system-test.icons';

export const MediumGrayIconsChip = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Chip
      value="Filter"
      leadingIcon={FilterIcon}
      styleVariant="gray"
      size="medium"
      isSelected={isSelected}
      onClick={handleClick}
      iconOnly={false}
      trailingIcon={ChevronDown}
    />
  );
};

export const MediumGrayIconCounterChip = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Chip
      value="Filter"
      leadingIcon={FilterIcon}
      styleVariant="gray"
      size="medium"
      isSelected={isSelected}
      onClick={handleClick}
      iconOnly={false}
      trailingCounter={4}
    />
  );
};

export const MediumGrayDefaultChip = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Chip
      value="Filter"
      styleVariant="gray"
      size="medium"
      isSelected={isSelected}
      onClick={handleClick}
      iconOnly={false}
    />
  );
};

export const MediumGrayIconOnlyIconsChip = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Chip
      value="Filter"
      leadingIcon={FilterIcon}
      styleVariant="gray"
      size="medium"
      isSelected={isSelected}
      onClick={handleClick}
      iconOnly={true}
    />
  );
};

export const SmallGrayIconOnlyIconCounterChip = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Chip
      value="Filter"
      leadingIcon={FilterIcon}
      styleVariant="gray"
      size="small"
      isSelected={isSelected}
      onClick={handleClick}
      iconOnly={true}
      trailingCounter={4}
    />
  );
};

export const MediumBeigeIconCounterChip = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Chip
      value="Filter"
      leadingIcon={FilterIcon}
      styleVariant="beige"
      size="medium"
      isSelected={isSelected}
      onClick={handleClick}
      iconOnly={false}
      trailingCounter={4}
    />
  );
};

export const MediumBeigeIconsChip = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Chip
      value="Filter"
      leadingIcon={FilterIcon}
      styleVariant="beige"
      size="medium"
      isSelected={isSelected}
      onClick={handleClick}
      iconOnly={false}
      trailingIcon={ChevronDown}
    />
  );
};

export const MediumBeigeDefaultChip = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Chip
      value="Filter"
      styleVariant="beige"
      size="medium"
      isSelected={isSelected}
      onClick={handleClick}
    />
  );
};

export const MediumDisabledGrayIconsChip = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Chip
      value="Filter"
      leadingIcon={FilterIcon}
      styleVariant="gray"
      size="medium"
      isSelected={isSelected}
      onClick={handleClick}
      iconOnly={false}
      trailingIcon={ChevronDown}
      disabled
    />
  );
};

export const MediumDisabledSelectedGrayIconCounterChip = () => {
  const [isSelected, setIsSelected] = React.useState(true);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Chip
      value="Filter"
      leadingIcon={FilterIcon}
      styleVariant="gray"
      size="medium"
      isSelected={isSelected}
      onClick={handleClick}
      iconOnly={false}
      trailingCounter={4}
      disabled
    />
  );
};

export const MediumDisabledBeigeIconCounterChip = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Chip
      value="Filter"
      leadingIcon={FilterIcon}
      styleVariant="beige"
      size="medium"
      isSelected={isSelected}
      onClick={handleClick}
      iconOnly={false}
      trailingCounter={4}
      disabled
    />
  );
};

export const MediumDisabledSelectedBeigeIconsChip = () => {
  const [isSelected, setIsSelected] = React.useState(true);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Chip
      value="Filter"
      leadingIcon={FilterIcon}
      styleVariant="beige"
      size="medium"
      isSelected={isSelected}
      onClick={handleClick}
      iconOnly={false}
      trailingIcon={ChevronDown}
      disabled
    />
  );
};
