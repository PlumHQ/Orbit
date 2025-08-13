import React from 'react';

export type TInputSelectSizes = 'medium' | 'large';

export interface ISelectOption {
  value: string;
  label: string;
  icon?: React.FC<any>;
}