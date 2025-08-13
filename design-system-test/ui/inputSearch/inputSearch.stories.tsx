import type { Meta, StoryObj } from '@storybook/react';
import React, {useState} from 'react';
import { InputSearch } from './index';

const meta: Meta<typeof InputSearch> = {
  title: 'Design System/InputSearch',
  component: InputSearch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A search input component with built-in search functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    styleVariant: {
      control: { type: 'select' },
      options: ['gray', 'beige'],
      description: 'The style variant of the search input',
    },
    variant: {
      control: { type: 'select' },
      options: ['table', 'global'],
      description: 'The variant of the search input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the search input',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Whether the search input is in loading state',
    },
  },
  args: {
    styleVariant: 'gray',
    variant: 'table',
    placeholder: 'Search...',
    isLoading: false,
    onInputChange: (value: string) => console.log('Search:', value),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TableInputSearch: Story = {
  args: {
    styleVariant: 'gray',
    variant: 'table',
    placeholder: 'Search for items...',
    isLoading: false,
  },
};

export const GlobalInputSearch: Story = {
  render: (args) => {
    const [searchText, setSearchText] = useState("I am search text.");  
    const [isLoading, setIsLoading] = useState(false);
    return (
      <div
      style={{
        height: '100vh',
        width: '100vw',
        margin: 'auto',
        background: 'gray',
      }}
    >
      <InputSearch
        placeholder="Search Employees"
        variant="global"
        styleVariant="gray"
        searchSuggestions={
            <div
            style={{
                background: "rgba(72, 85, 247, 0.10)",
                border: '1px dashed rgba(168, 85, 247, 0.50)',
                borderRadius: 16,
                padding: 56,
                textAlign: "center"
            }}
        >
            Search Suggestions (swap it with your recent searches)
        </div>
        }
        onInputChange={(value)=>{
          if(value.length){
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
            }, 3000);
          }
        }}
        isLoading={isLoading}
      >
        <div
            style={{
                background: "rgba(168, 85, 247, 0.10)",
                border: '1px dashed rgba(168, 85, 247, 0.50)',
                borderRadius: 16,
                padding: 56,
                textAlign: "center"
            }}
        >
            Result Slot (swap it with your result content)
        </div>
    </InputSearch>
    </div>
    );
  },
  args: {},
};

export const AllVariants: Story = {
  render: (args) => {
    const [searchText, setSearchText] = useState("I am search text.");
    return (<div className="space-y-4 w-80">
      <InputSearch defaultSearchText={searchText}  styleVariant="gray" variant="table" placeholder="Table" />
      <InputSearch defaultSearchText={searchText} styleVariant="gray" variant="global" placeholder="Global" onInputChange={setSearchText} />
      <InputSearch defaultSearchText={searchText} styleVariant="beige" variant="table" placeholder="Table" onInputChange={setSearchText} />
      <InputSearch defaultSearchText={searchText} styleVariant="beige" variant="global" placeholder="Global" onInputChange={setSearchText} />
    </div>
  )},
  args: {},
};