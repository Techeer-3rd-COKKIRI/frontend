import { recruits } from '@/constants/option';
import React from 'react';
import styled from 'styled-components';

interface Props {
  options: { value: string; name: string };
}

const Select = styled.select`
  border: none;
  width: 100%;
  height: 5.5rem;
  background: #ffffff;
  border-radius: 10px;
  margin: 5px 0;
  padding: 10px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const SelectBox = ({ id, options, register, registerConfig }: any) => {
  return (
    <Select {...register(id, registerConfig)}>
      {options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;
