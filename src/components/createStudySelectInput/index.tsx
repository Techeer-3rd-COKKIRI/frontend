import React from 'react';
import SelectBox from '../selectBox';
import { FormName, FormValue } from '@/page/createStudy';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props {
  inputName: string;
  placeholder: string;
  id: string;
  error?: string;
  option: any;
  register: UseFormRegister<FormValue>;
  registerConfig: RegisterOptions<FormValue, FormName>;
}
const CreateStudySelectInput = ({
  inputName,
  placeholder,
  id,
  error,
  option,
  register,
  registerConfig,
}: Props) => {
  return (
    <div>
      <label htmlFor={id}>{inputName}</label>
      <SelectBox
        id={id}
        register={register}
        registerConfig={registerConfig}
        placeholder={placeholder}
        options={option}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateStudySelectInput;
