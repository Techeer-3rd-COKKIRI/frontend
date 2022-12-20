import { FormName, FormValue } from '@/page/createStudy';
import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props {
  inputName: string;
  placeholder: string;
  id: FormName;
  error?: string;
  register: UseFormRegister<FormValue>;
  registerConfig: RegisterOptions<FormValue, FormName>;
}
const CreateStudyInput = ({
  inputName,
  placeholder,
  id,
  error,
  register,
  registerConfig,
}: Props) => {
  return (
    <div>
      <label htmlFor={id}>{inputName}</label>
      <input
        {...register(id, registerConfig)}
        id={id}
        placeholder={placeholder}
      ></input>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateStudyInput;
