import React, {useState} from 'react';
import { ToggleSwitch } from './index';

export const LeftMediumGrayToggleSwitch = () => {
    const [checkedState, setCheckedState] = useState(false);
  return (
    <div className="flex items-center">
      <ToggleSwitch
        size={"medium"} 
        checked={checkedState}
        onChange={(value)=>{setCheckedState(value)}}
        label={"Title"}
        description='Description'
        styleVariant='gray'
      />
    </div>
  );
};

export const LeftDisabledMediumGrayToggleSwitch = () => {
    const [checkedState, setCheckedState] = useState(false);
  return (
    <div className="flex items-center">
      <ToggleSwitch
        size={"medium"} 
        checked={checkedState}
        onChange={(value)=>{setCheckedState(value)}}
        label={"Title"}
        description='Description'
        styleVariant='gray'
        disabled
      />
    </div>
  );
};

export const LeftSmallGrayToggleSwitch = () => {
    const [checkedState, setCheckedState] = useState(false);
  return (
    <div className="flex items-center">
      <ToggleSwitch
        size={"small"} 
        checked={checkedState}
        onChange={(value)=>{setCheckedState(value)}}
        label={"Title"}
        description='Description'
        styleVariant='gray'
      />
    </div>
  );
};

export const RightMediumGrayToggleSwitch = () => {
    const [checkedState, setCheckedState] = useState(false);
  return (
    <div className="flex items-center">
      <ToggleSwitch
        size={"medium"} 
        checked={checkedState}
        onChange={(value)=>{setCheckedState(value)}}
        label={"Title"}
        description='Description'
        styleVariant='gray'
        labelPosition='right'
      />
    </div>
  );
};

export const LeftMediumBeigeToggleSwitch = () => {
    const [checkedState, setCheckedState] = useState(false);
  return (
    <div className="flex items-center">
      <ToggleSwitch
        size={"medium"} 
        checked={checkedState}
        onChange={(value)=>{setCheckedState(value)}}
        label={"Title"}
        description='Description'
        styleVariant='beige'
      />
    </div>
  );
};

export const LeftSmallBeigeToggleSwitch = () => {
    const [checkedState, setCheckedState] = useState(false);
  return (
    <div className="flex items-center">
      <ToggleSwitch
        size={"small"} 
        checked={checkedState}
        onChange={(value)=>{setCheckedState(value)}}
        label={"Title"}
        description='Description'
        styleVariant='beige'
      />
    </div>
  );
};

export const LeftDisabledMediumBeigeToggleSwitch = () => {
    const [checkedState, setCheckedState] = useState(false);
  return (
    <div className="flex items-center">
      <ToggleSwitch
        size={"medium"} 
        checked={checkedState}
        onChange={(value)=>{setCheckedState(value)}}
        label={"Title"}
        description='Description'
        styleVariant='beige'
        disabled
      />
    </div>
  );
};

export const RightMediumBeigeToggleSwitch = () => {
    const [checkedState, setCheckedState] = useState(false);
  return (
    <div className="flex items-center">
      <ToggleSwitch
        size={"medium"} 
        checked={checkedState}
        onChange={(value)=>{setCheckedState(value)}}
        label={"Title"}
        description='Description'
        styleVariant='beige'
        labelPosition='right'
      />
    </div>
  );
};
