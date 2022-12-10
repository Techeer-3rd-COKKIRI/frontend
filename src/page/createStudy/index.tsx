import Nav from '@/components/nav';
import React from 'react';
import styled from 'styled-components';

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
  width: 50%;
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
`;
const CreateStudy = () => {
  return (
    <CreateStudyPage>
      <Nav />
      <WriteForm>
        <Title>Create Study</Title>
        <Inform>
          <StudyInform>
            <div>
              <div>1</div>
              <span>스터디 기본 정보를 입력해주세요</span>
            </div>
            <hr />
          </StudyInform>
          <StudyIntroduce>
            <div>
              <div>2</div>
              <span>스터디에 대해 소개해주세요</span>
            </div>
            <hr />
          </StudyIntroduce>
        </Inform>
      </WriteForm>
    </CreateStudyPage>
  );
};

export default CreateStudy;
