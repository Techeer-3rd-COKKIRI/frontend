import React from 'react';
import SelectBox from '../selectBox';

interface Props {
  inputName: string;
  placeholder: string;
  id: string;
  error?: string;
  option: any;
}
const CreateStudySelectInput = ({
  inputName,
  placeholder,
  id,
  error,
  option,
}: Props) => {
  return (
    <div>
      <label htmlFor={id}>{inputName}</label>
      <SelectBox placeholder={placeholder} options={option} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateStudySelectInput;
