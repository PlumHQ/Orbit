import { InfoIcon, SearchIcon, UserIcon } from '../icons';
import { InputSelect } from './index';
import React from 'react';

export const LargeInputSelectComposition = () => {
    const options = [
        { value: 'option1', label: 'Dropdown Menu Item Text', icon: UserIcon },
        { value: 'option2', label: 'Dropdown Menu Item Text', icon: UserIcon },
        { value: 'option3', label: 'Dropdown Menu Item Text', icon: UserIcon },
        { value: 'option4', label: 'Dropdown Menu Item Text', icon: UserIcon }
    ];

    return (
        <div className='w-100'>
            <InputSelect
                size='large'
                placeholder='Select'
                onChange={() => { }}
                onFocus={() => { }}
                onBlur={() => { }}
                onSelect={(option) => console.log('Selected:', option)}
                isValid={() => true}
                errorText='Error message'
                successText='Success message'
                label='Label'
                helperLink='https://www.google.com'
                helperText='Help text'
                isRequired={false}
                isOptional={false}
                helpTextIcon={InfoIcon}
                prefixIcon={SearchIcon}
                prefixValue='₹'
                options={options}
                searchable={false}
            />
        </div>
    );
};

export const MediumInputSelectComposition = () => {
    const options = [
        { value: 'option1', label: 'Dropdown Menu Item Text', icon: UserIcon },
        { value: 'option2', label: 'Dropdown Menu Item Text', icon: UserIcon },
        { value: 'option3', label: 'Dropdown Menu Item Text', icon: UserIcon },
        { value: 'option4', label: 'Dropdown Menu Item Text', icon: UserIcon }
    ];

    return (
        <div className='w-100'>
            <InputSelect
                size='medium'
                placeholder='Select'
                onChange={() => { }}
                onFocus={() => { }}
                onBlur={() => { }}
                onSelect={(option) => console.log('Selected:', option)}
                isValid={() => false}
                showValidation={true}
                errorText='Error message'
                successText='Success message'
                label='Label'
                helperLink='https://www.google.com'
                helperText='Help text'
                isRequired={false}
                isOptional={false}
                helpTextIcon={InfoIcon}
                prefixIcon={SearchIcon}
                options={options}
                searchable={true}
                prefixValue='₹'
            />
        </div>
    );
};

export const SearchableInputSelectComposition = () => {
    const options = [
        { value: 'apple', label: 'Apple', icon: UserIcon },
        { value: 'banana', label: 'Banana', icon: UserIcon },
        { value: 'cherry', label: 'Cherry', icon: UserIcon },
        { value: 'date', label: 'Date', icon: UserIcon },
        { value: 'elderberry', label: 'Elderberry', icon: UserIcon }
    ];

    return (
        <div className='w-100'>
            <InputSelect
                size='medium'
                placeholder='Type to search...'
                onChange={() => { }}
                onFocus={() => { }}
                onBlur={() => { }}
                onSelect={(option) => console.log('Selected:', option)}
                isValid={() => true}
                showValidation={true}
                errorText='Error message'
                successText='Success message'
                label='Searchable Dropdown'
                helperText='Type to filter options'
                isRequired={false}
                isOptional={false}
                helpTextIcon={InfoIcon}
                prefixIcon={SearchIcon}
                options={options}
                searchable={true}
                prefixValue='₹'
            />
        </div>
    );
};