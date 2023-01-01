import React from 'react';
import styled from 'styled-components';

const StudyIntroduce = () => {
  return (
    <StudyIntroducePage>
      <Title>[스프링 스터디] 스프링 스터디 공부인증방</Title>
      <ReaderProfile>
        <div></div>
        <span>이승환승</span>
        <span>2022.11.17</span>
      </ReaderProfile>
      <Line></Line>
      <IntroduceRule>
        <RuleBox>
          <div>모집인원</div>
          <div>5명</div>
        </RuleBox>
        <RuleBox>
          <div>진행기간</div>
          <div>6개월이상</div>
        </RuleBox>
        <RuleBox>
          <div>진행방식</div>
          <div>오프라인</div>
        </RuleBox>
        <RuleBox>
          <div>시작예정</div>
          <div>2022-11-16</div>
        </RuleBox>
      </IntroduceRule>
      <IntroduceTitle>스프링 스터디 소개</IntroduceTitle>
      <Line></Line>
      <Introduction>
        스프링 스터디입니다 !<br /> 일주일에 한번이상 블로그링크를 작성해서
        댓글창에 올려주세요 !
      </Introduction>
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
  & div:nth-child(1) {
    font-family: 'Inria Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 2.4rem;
    color: #000000;
    opacity: 0.5;
    margin-right: 5.7rem;
  }

  & div:nth-child(2) {
    font-family: 'Inria Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 2rem;

    color: #000000;
  }
`;

const IntroduceTitle = styled.h1`
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  color: #000000;
  margin-top: 10rem;
`;

const Introduction = styled.div`
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #000000;
  border: 1px solid black;
  border-radius: 3rem;
  padding: 30px 10px;
  margin: 30px 0;
`;
