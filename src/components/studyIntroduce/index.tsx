import React from 'react';
import styled from 'styled-components';

const StudyIntroducePage = styled.div``;

const Title = styled.h1`
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #000000;
  margin: 1.9rem 0;
  margin-top: 3.8rem;
`;

const ReaderProfile = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 400;
  margin-left: 2rem;
  & div {
    width: 9rem;
    height: 9rem;
    background: #000000;
    border-radius: 50%;
  }

  & :nth-child(2) {
    font-size: 2rem;
    line-height: 2.4rem;
    margin-left: 2.7rem;
    margin-right: 3.7rem;
    color: #000000;
  }

  & :nth-child(3) {
    font-size: 2rem;
    line-height: 2.4rem;
    color: rgba(0, 0, 0, 1);
    opacity: 0.5;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 0.001px;
  margin: 0 auto;
  opacity: 0.1;
  border: 2px solid #000000;
  border-radius: 10%;
  margin-top: 3.6rem;
`;
const IntroduceRule = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RuleBox = styled.div`
  display: flex;
  width: 50%;

  & div:nth-child(1) {
    font-family: 'Inria Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;

    color: #000000;

    opacity: 0.5;
  }

  & div:nth-child(2) {
    font-family: 'Inria Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;

    color: #000000;
  }
`;

const IntroduceStudy = styled.div``;

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

      <IntroduceStudy />
    </StudyIntroducePage>
  );
};

export default StudyIntroduce;
