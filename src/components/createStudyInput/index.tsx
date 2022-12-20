import { Error, FormName, FormValue } from '@/page/createStudy';
import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props {
  inputName: string;
  placeholder: string;
  id: FormName;
  register: UseFormRegister<FormValue>;
  registerConfig: RegisterOptions<FormValue, FormName>;
  error?: string;
  type?: string;
}

const CreateStudyInput = ({
  inputName,
  placeholder,
  id,
  error,
  register,
  registerConfig,
  type,
}: Props) => {
  return (
    <div>
      <label htmlFor={id}>{inputName}</label>
      <input
        type={type}
        {...register(id, registerConfig)}
        id={id}
        placeholder={placeholder}
      ></input>
      {error ? (
        <Error style={{ height: '10px' }}>{error}</Error>
      ) : (
        <Error style={{ height: '10px' }}></Error>
      )}
    </div>
  );
};

export default CreateStudyInput;
