import { FormName, FormValue } from '@/page/createStudy';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';
interface Props {
  inputName: string;
  id: FormName;
  control: Control<FormValue, any>;
}

const SDatePicker = styled(DatePicker)`
  width: 100%;
  height: 5.5rem;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  border: none;
  margin: 5px 0;
`;

const CreateStudyCalender = ({ inputName, id, control }: Props) => {
  return (
    <div>
      <label htmlFor={id}>{inputName}</label>
      <Controller
        name={id}
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <SDatePicker
              dateFormat="yyyy/MM/dd"
              placeholderText="날짜를 선택해주세요!"
              locale={ko}
              minDate={new Date()}
              selected={value as Date}
              onChange={onChange}
            />
          );
        }}
      />
    </div>
  );
};

export default CreateStudyCalender;
