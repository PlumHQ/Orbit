import React, {useState} from 'react';
import { InputSearch } from '.';

export const TableInputSearch = () => {
  return (
    <InputSearch
      placeholder="Search Employees"
      variant="table"
      styleVariant="gray"
      disabled={false}
    />
  );
};

export const GlobalGrayInputSearch = () => {
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
};

export const GlobalBeigeInputSearch = () => {
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
        styleVariant="beige"
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
};
