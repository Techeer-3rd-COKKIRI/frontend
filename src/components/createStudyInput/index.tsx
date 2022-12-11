import React from 'react';

interface Props {
  inputName: string;
  placeholder: string;
  id: string;
  error?: string;
}
const CreateStudyInput = ({ inputName, placeholder, id, error }: Props) => {
  return (
    <div>
      <label htmlFor={id}>{inputName}</label>
      <input id={id} placeholder={placeholder}></input>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateStudyInput;
