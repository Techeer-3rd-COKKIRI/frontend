import { studyListType } from '@/type/studyList';
import React from 'react';
import styled from 'styled-components';

const StudyIntroduce = ({
  id,
  studyName,
  currentUserCount,
  startDate,
  finishDate,
  introduction,
  userLimit,
}: studyListType) => {
  //localstorage가 있다면 그값을 전해줌 // 애는 객체이기때문에 parse가공을 해줘야한다. 현재는 Json형태이다.
  const checkUser = localStorage.getItem('user');

  let user;
  if (typeof checkUser === 'string') {
    user = JSON.parse(checkUser); // ok
  }
  return (
    <StudyIntroducePage>
      <Title>{studyName}</Title>
      <ReaderProfile>
        <div></div>
        <span>{user.username}</span>
      </ReaderProfile>
      <Line></Line>
      <IntroduceRule>
        <RuleBox>
          <div>모집인원</div>
          <div>
            {currentUserCount}/{userLimit}명
          </div>
        </RuleBox>
        <RuleBox>
          <div>진행기간</div>
          <div>{finishDate[1] - startDate[1]}개월 이내</div>
        </RuleBox>
        <RuleBox>
          <div>시작예정</div>
          <div>
            {startDate.map((day, index) => {
              if (startDate.length - 1 == index) return <div>{day}</div>;
              return <div>{day}-</div>;
            })}
          </div>
        </RuleBox>
        <RuleBox>
          <div>마칠예정</div>
          <div>
            {finishDate.map((day, index) => {
              if (finishDate.length - 1 == index) return <div>{day}</div>;
              return <div>{day}-</div>;
            })}
          </div>
        </RuleBox>
      </IntroduceRule>
      <IntroduceTitle>스프링 스터디 소개</IntroduceTitle>
      <Line></Line>
      <Introduction>{introduction}</Introduction>
    </StudyIntroducePage>
  );
};

export default StudyIntroduce;

const StudyIntroducePage = styled.div``;

const Title = styled.h1`
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  color: #000000;
  margin: 1.6rem 0;
  margin-top: 3.3rem;
`;

const ReaderProfile = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 400;
  & div {
    width: 7rem;
    height: 7rem;
    background: #000000;
    border-radius: 50%;
  }

  & :nth-child(2) {
    font-size: 1.7rem;
    line-height: 2rem;
    margin-left: 2.4rem;
    margin-right: 3.4rem;
    color: #000000;
  }

  & :nth-child(3) {
    font-size: 1.7rem;
    line-height: 2rem;
    color: rgba(0, 0, 0, 1);
    opacity: 0.5;
  }
`;

const Line = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 0.001px;
  opacity: 0.1;
  border: 2px solid #000000;
  border-radius: 10%;
  margin-top: 3.6rem;
  margin-bottom: 2.7rem;
`;
const IntroduceRule = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1000px;
`;

const RuleBox = styled.div`
  display: flex;
  width: 50%;

  margin-bottom: 0.8rem;
  & div {
    display: flex;
    font-style: normal;
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 2.4rem;
    color: #000000;
  }
  & > div:nth-child(1) {
    opacity: 0.5;
    margin-right: 5.7rem;
  }
`;

const IntroduceTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  color: #000000;
  margin-top: 10rem;
`;

const Introduction = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #000000;
  border: 1px solid black;
  border-radius: 1.5rem;
  padding: 4.5rem 1.5rem;
  margin: 30px 0;
`;
