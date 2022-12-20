import React from 'react';

interface Props {
  options: { value: string; name: string };
}

const SelectBox = ({ options }: any) => {
  return (
    <select>
      {options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
