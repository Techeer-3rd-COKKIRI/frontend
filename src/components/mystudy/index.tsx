import React, { Component } from 'react';
import styled from 'styled-components';
// 구조 다시
// 바로가기 화살표 빼기

const StudyComponents = () => {
  return (
    <Studies>
      <Picture />
      <Info>
        <StudyTitle>스터디 제목자리</StudyTitle>
        <Bottom>
          <StudyDuration>
            <DurationTitle>진행기간</DurationTitle>
            <Duration>2022-11-13 ~ 2022-11-29</Duration>
          </StudyDuration>
          <StudyButton>바로가기</StudyButton>
        </Bottom>
        <Etc></Etc>
      </Info>
    </Studies>
  );
};
const Studies = styled.div`
  font-family: 'Inria Sans';
  width: 48rem;
  height: 13rem;
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  display: flex;
`;

const Picture = styled.div`
  width: 155px;
  height: 130px;
  background: tomato;
  float: left;
  border-radius: 5px;
`;

const Info = styled.div`
  float: right;
  flex-direction: row;
`;

const StudyTitle = styled.p`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 220px;
  height: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  padding: 15px;
  margin-bottom: 30px;
`;

const Bottom = styled.div`
  display: flex;
`;

const StudyDuration = styled.div`
  margin-left: 15px;
`;

const DurationTitle = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #b2b2b2;
`;

const Etc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Duration = styled.div`
  padding-left: 15px;
  color: #b2b2b2;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.5rem;
`;

const StudyButton = styled.button`
  margin-right: 15px;
  width: 88px;
  height: 26px;
  background: #697af8;
  border-radius: 5px;
  border: none;
  color: #fff;
  text-align: center;
`;

export default StudyComponents;
