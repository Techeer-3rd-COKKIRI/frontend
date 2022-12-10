import Nav from '@/components/nav';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import ReactQuill from 'react-quill';
import Quill from '@/components/Quill';
import { useNavigate } from 'react-router-dom';
interface FormValue {
  studyName: string;
  studyPassword: string;
  studyCycle: string;
  userLimit: string;
}

const CreateStudy = () => {
  const [studyIntroduce, setStudyIntroduce] = useState('');
  const navigator = useNavigate();
  const {
    register, //등록
    handleSubmit, //submit처리
    watch, //변경사항 추적
    formState: { errors }, // 에러검증
  } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = async (values, e) => {
    console.log({ ...values, studyIntroduce });
    //두번을 axios
  };

  return (
    <CreateStudyPage>
      <Nav />
      <WriteForm>
        <Title>Create Study</Title>
        <Inform>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <InformTitle>
              <div>1</div>
              <span>스터디 기본 정보를 입력해주세요</span>
            </InformTitle>
            <Horizon />
            <StudyInform>
              <div>
                <label>모집인원</label>
                <input id="userLimit" placeholder="1명~10명이상"></input>
              </div>
              <div>
                <label>패스워드</label>
                <input id="password" placeholder="패스워드"></input>
              </div>
              <div>
                <label>인증기간</label>
                <input id="studyCycle" placeholder="인증기간"></input>
              </div>
              <div>
                <label>인증기간</label>
                <input id="studyCycle" placeholder="인증기간"></input>
              </div>
              <div>
                <label>인증기간</label>
                <input id="studyCycle" placeholder="인증기간"></input>
              </div>
            </StudyInform>
            <InformTitle>
              <div>2</div>
              <span>스터디에 대해 소개해주세요</span>
            </InformTitle>
            <Horizon />
            <StudyIntroduce>
              <Section>
                <label>스터디명</label>

                <input
                  placeholder="글 제목을 입력해주세요 !"
                  {...register('studyName')}
                />
                <Quill
                  setStudyIntroduce={setStudyIntroduce}
                  studyIntroduce={studyIntroduce}
                />
                <Buttons>
                  <button onClick={() => navigator('/')}>취소</button>
                  <button>글 등록</button>
                </Buttons>
              </Section>
            </StudyIntroduce>
          </form>
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
  font-size: 3.5rem;
  margin: 15px 0;
  margin-top: 25px;
`;

const WriteForm = styled.div`
  width: 50%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Inform = styled.div`
  width: 100%;
  margin: 0 auto;
  min-width: 500px;
  box-sizing: border-box;
  padding: 10px 30px;
  background: #e9edf7;
  border: 3px solid #e9edf7;
  border-radius: 2rem;
`;

const InformTitle = styled.div`
  padding-top: 15px;

  display: flex;
  align-items: center;
  & > span {
    font-family: 'Inria Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 3rem;
    color: #000000;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    background: #293659;
    border-radius: 50%;
    font-family: 'Inria Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 3rem;
    color: #ffffff;
    margin-right: 15px;
  }
`;

const StudyInform = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, auto));
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 80%;
    max-width: 400px;

    & > label {
      font-family: 'Inria Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      color: #000000;
    }
    & > input {
      width: 100%;
      height: 2.5rem;
      background-color: #ffffff;
      border-radius: 10px;
      padding: 10px;
      border: none;
      margin: 5px 0;
    }
  }
`;

const StudyIntroduce = styled.div`
  width: 90%;
  margin: 0 auto;

  & > div {
    display: flex;

    align-items: center;
    & > span {
      font-family: 'Inria Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 3rem;

      color: #000000;
    }
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      background-color: black;
      border-radius: 50%;
      font-family: 'Inria Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 3rem;
      color: #ffffff;
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;

  & > label {
    width: 119px;
    height: 29px;
    font-family: 'Inria Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-top: 10px;
    color: #000000;
  }

  & > input {
    border: none;
    width: 95%;
    height: 5rem;
    background: #ffffff;
    border-radius: 10px;
    margin: 10px 0;
    padding-left: 15px;
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

const Horizon = styled.div`
  height: 2px;
  opacity: 0.1;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 50%;
  margin: 10px 0px;
`;
