import React from 'react';

interface Props {
  inputName: string;
  placeholder: string;
  id: string;
}
const CreateStudyInput = ({ inputName, placeholder, id }: Props) => {
  return (
    <div>
      <label>{inputName}</label>
      <input id={id} placeholder={placeholder}></input>
    </div>
  );
};

export default CreateStudyInput;
