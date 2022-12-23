import Nav from '@/components/nav';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CreateStudyInput from '@/components/createStudyInput';
import axios from 'axios';
import CreateStudySelectInput from '@/components/createStudySelectInput';
import { certificationPeriod, recruits } from '@/constants/option';
import CreateStudyCalender from '@/components/createStudyCalender';
import CreateStudyImage from '@/components/createStudyImage';
import { useMutation } from '@tanstack/react-query';

export type FormName =
  | 'studyName'
  | 'studyPassword'
  | 'studyCycle'
  | 'userLimit'
  | 'startDate'
  | 'finishDate'
  | 'image';

export interface FormValue {
  studyName: string;
  studyPassword: string;
  studyCycle: string;
  userLimit: string;
  startDate: Date;
  finishDate: Date;
  image: string;
}

const CreateStudy = () => {
  const navigator = useNavigate();
  const {
    register, //등록
    handleSubmit, //submit처리
    watch, //변경사항 추적
    control,
    formState: { errors }, // 에러검증
  } = useForm<FormValue>();

  const { mutate } = useMutation((formData: FormData) =>
    axios.post<FormValue>('/api/v1/studies', formData),
  );
  const onSubmitHandler: SubmitHandler<FormValue> = async (values, e) => {
    alert('글 등록이 완료되었습니다 !');
    const {
      startDate,
      finishDate,
      studyCycle,
      studyName,
      studyPassword,
      userLimit,
      image,
    } = values;
    const formData = new FormData();
    let startDay = new Date(startDate).toUTCString();
    let finishDay = new Date(finishDate).toUTCString();
    formData.append('image', image[0]);
    formData.append('startDate', startDay);
    formData.append('finishDate', finishDay);
    formData.append('studyCycle', studyCycle);
    formData.append('studyName', studyName);
    formData.append('studyPassword', studyPassword);
    formData.append('userLimit', userLimit);

    mutate(formData, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
    // let result = await axios.post('/api/v1/studies', formData, {
    //   headers: { 'Content-Type': 'multipart/form-data' },
    // });

    // formData를 순회하며 데이터출력
    // let entries = formData.entries();
    // for (const pair of entries) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
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
              <CreateStudySelectInput
                inputName={'모집인원'}
                placeholder={'1명~10명'}
                id={'userLimit'}
                option={recruits}
                register={register}
                registerConfig={{
                  required: '모집인원을 선택해주세요!',
                }}
              />
              <CreateStudyInput
                inputName={'패스워드'}
                placeholder={'패스워드'}
                type={'password'}
                id={'studyPassword'}
                register={register}
                registerConfig={{
                  required: '패스워드를 입력해주세요!',
                  minLength: {
                    value: 2,
                    message: '패스워드 많이많이 입력해주세요!',
                  },
                }}
                error={errors.studyPassword?.message}
              />
              <CreateStudySelectInput
                inputName={'인증기간'}
                placeholder={'인증기간'}
                id={'studyCycle'}
                option={certificationPeriod}
                register={register}
                registerConfig={{
                  required: '인증기간을 선택해주세요!',
                }}
              />
              <CreateStudyCalender
                inputName={'시작날짜'}
                id={'startDate'}
                control={control}
              />
              <CreateStudyCalender
                inputName={'마감날짜'}
                id={'finishDate'}
                control={control}
              />
              <CreateStudyImage
                inputName={'썸네일'}
                placeholder={'썸네일을 선택해주세요'}
                id={'image'}
                register={register}
              ></CreateStudyImage>
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
                  {...register('studyName', {
                    required: '스터디명을 입력해주세요!',
                    minLength: {
                      value: 2,
                      message: '최소 2자 이상의 스터디명을 입력해주세요!',
                    },
                  })}
                />
                {errors.studyName ? (
                  <Error style={{ height: '10px' }}>
                    {errors.studyName.message}
                  </Error>
                ) : (
                  <Error style={{ height: '10px' }}></Error>
                )}
                <Textarea name="text" defaultValue={'안녕하세요'}></Textarea>
                <Buttons>
                  <button onClick={() => navigator('/')}>취소</button>
                  <button type="submit">글 등록</button>
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

  @media screen and (max-width: 1440px) {
    margin-top: 50px;
    margin-left: 0px;
  }
`;

const Title = styled.div`
  font-size: 3.5rem;
  margin: 15px 0;
  margin-top: 25px;
`;

const WriteForm = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1400px;
  @media screen and (min-width: 639px) {
    width: 50%;
  }
`;

const Inform = styled.div`
  width: 100%;
  min-width: 250px;
  margin: 0 auto;
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
    line-height: 2.5rem;
    color: #ffffff;
    margin-right: 15px;
  }
`;

const StudyInform = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 3rem;
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
      font-size: 2rem;
      line-height: 2.4rem;
      margin: 5px 0;
      color: #000000;
    }
    & > input {
      width: 100%;
      height: 6rem;
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
  margin-right: auto;

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
    height: 2.9rem;
    font-family: 'Inria Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    margin-top: 10px;
    color: #000000;
  }

  & > input {
    border: none;
    width: 100%;
    height: 6.5rem;
    background: #ffffff;
    border-radius: 10px;
    margin-top: 10px;
    padding-left: 15px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 700px;
  background: #ffffff;
  border-radius: 10px;
  padding: 15px;
  border: none;
  resize: none;
  &::-webkit-scrollbar {
    width: 13px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #acafb7;
  }
  @media screen and (max-width: 1440px) {
    height: 400px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  & button:nth-child(1) {
    width: 10rem;
    height: 4.5rem;
    background: #d9d9d9;
    border-radius: 5px;
    border: none;
    margin-right: 20px;
    cursor: pointer;
  }

  & button:nth-child(2) {
    width: 10rem;
    height: 4.5rem;
    background: #293659;
    border-radius: 5px;
    border: none;
    color: #faeded;
    cursor: pointer;
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

export const Error = styled.div`
  height: 10px;
  margin: 10px 0;
  margin-left: 5px;
  color: red;
  opacity: 0.6;
`;
