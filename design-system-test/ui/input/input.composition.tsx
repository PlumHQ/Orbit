import React from 'react';
import { Input } from './index';
import { CalendarIcon, SearchIcon } from '@pluminsurance/design-system-test.icons';

export const RequiredLargeInputField = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vh',
        margin: "auto",
        marginTop: "20%"
      }}
    >
      <Input
        label="Label"
        helperLink="Link"
        helperText="Help Text"
        disabled={false}
        size="large"
        placeholder="Value"
        isRequired
        prefixValue="$"
        shortcutKey="K"
        suffixIcon={CalendarIcon}
        bankLogoIcon={require('./image.png')}
        showSuffixButton={true}
        defaultValue={"Default"}
        showValidation={true}
        isValid={(value)=>{
          return value.length < 10
        }}
        errorText={"Text should be less than 10 characters."}
        successText={"Success message."}
        // onChange={(value)=>{alert(value)}}
        prefixIcon={SearchIcon}
        showPrefixIcon={true}
      />
    </div>
  );
};

export const NotRequiredMediumInputField = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vh',
        margin: "auto",
        marginTop: "20%"
      }}
    >
      <Input
        label="Label"
        helperLink="Link"
        helperText="Help Text"
        disabled={false}
        size="medium"
        placeholder="Value"
        prefixValue="$"
        shortcutKey="K"
        suffixIcon={CalendarIcon}
        bankLogoIcon={require('./image.png')}
        showSuffixButton={true}
        defaultValue={"Default"}
        showValidation={true}
        isValid={(value)=>{
          return value.length < 10
        }}
        errorText={"Text should be less than 10 characters."}
        successText={"Success message."}
        // onChange={(value)=>{alert(value)}}
      />
    </div>
  );
};

export const OptionalDisabledInputField = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vh',
        margin: "auto",
        marginTop: "20%"
      }}
    >
      <Input
        label="Label"
        helperLink="Link"
        helperText="Help Text"
        disabled={true}
        size="large"
        placeholder="Value"
        isOptional
      />
    </div>
  );
};
