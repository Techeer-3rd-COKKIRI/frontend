import Nav from '@/components/nav';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import ReactQuill from 'react-quill';
import Quill from '@/components/Quill';
import { useNavigate } from 'react-router-dom';
interface FormValue {
  studyName: string;
  studyIntroduce: string;
}

const CreateStudy = () => {
  const navigator = useNavigate();
  const {
    register, //등록
    handleSubmit, //submit처리
    watch, //변경사항 추적
    formState: { errors }, // 에러검증
  } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data: any) => {
    console.log(data);
  };

  return (
    <CreateStudyPage>
      <Nav />
      <WriteForm>
        <Title>Create Study</Title>
        <Inform>
          <form>
            <StudyInform>
              <div>
                <div>1</div>
                <span>스터디 기본 정보를 입력해주세요</span>
              </div>

              <hr />
            </StudyInform>
          </form>
          <StudyIntroduce>
            <div>
              <div>2</div>
              <span>스터디에 대해 소개해주세요</span>
            </div>
            <hr />
            <form>
              <label>스터디명</label>

              <input
                placeholder="글 제목을 입력해주세요 !"
                {...register('studyName')}
              />
              <Quill />
              <Buttons>
                <button onClick={() => navigator('/')}>취소</button>
                <button>글 등록</button>
              </Buttons>
            </form>
          </StudyIntroduce>
        </Inform>
      </WriteForm>
    </CreateStudyPage>
  );
};

export default CreateStudy;

const CreateStudyPage = styled.div`
  margin-left: 200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 5rem;
  margin: 15px 0;
  margin-top: 25px;
`;

const WriteForm = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Inform = styled.div`
  width: 100%;
  margin: 0 auto;
  min-width: 500px;
  height: 80rem;
  box-sizing: border-box;

  background: #e9edf7;
  border: 3px solid #e9edf7;
  border-radius: 2rem;
`;

const StudyInform = styled.div`
  width: 90%;
  margin: 0 auto;
  & > div {
    display: flex;
    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15px;
      height: 15px;
      background-color: black;
      border-radius: 50%;
      color: white;
    }
  }
`;

const StudyIntroduce = styled.div`
  width: 90%;
  margin: 0 auto;
  & > div {
    display: flex;
    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15px;
      height: 15px;
      background-color: black;
      border-radius: 50%;
      color: white;
    }
  }

  & > form {
    display: flex;
    flex-direction: column;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;

  & button :nth-child(0) {
    background: #d9d9d9;
    opacity: 0.6;
    border-radius: 5px;
  }

  & button :nth-child(1) {
    background: #293659;
    border-radius: 5px;
  }
`;
