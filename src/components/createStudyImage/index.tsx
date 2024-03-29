import React, { useRef, useState, useCallback } from 'react';
import { FormName, FormValue } from '@/page/createStudy';
import { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

interface Props {
  inputName: string;
  placeholder: string;
  id: FormName;
  error?: string;
  register: UseFormRegister<FormValue>;
}

const CreateStudyImage = ({ inputName, placeholder, id, register }: Props) => {
  const { ref, onChange } = register(id);
  const imageRef = useRef<any>();
  const [image, setImage] = useState('');
  const onUploadImage = useCallback((e: any) => {
    if (!e.target.files) {
      return;
    } else {
      if (e.target.files[0]) {
        setImage(e.target.files[0].name);
      }
    }
  }, []);

  const onUploadImageButtonClick = useCallback(() => {
    if (!imageRef.current) {
      return;
    }
    imageRef.current.click();
  }, []);

  return (
    <div>
      <label>썸네일</label>
      <input
        {...register(id)}
        accept="image/*"
        type="file"
        style={{ display: 'none' }}
        ref={(e) => {
          ref(e);
          imageRef.current = e;
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e);
          onUploadImage(e);
        }}
      ></input>
      <input readOnly value={image || ''}></input>
      <Button type="button" onClick={onUploadImageButtonClick}>
        Upload File
      </Button>
    </div>
  );
};

export default CreateStudyImage;

const Button = styled.button`
  background-color: #293659;
  border-radius: 1rem;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  text-decoration: none;
  border: none;
  &:active {
    position: relative;
    top: 1px;
  }
`;
