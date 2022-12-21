import React, { Component } from 'react';
import styled from 'styled-components';

const StudyComponents = () => {
  return (
    <Studies>
      <Picture />
      <StudyTitle>스터디 제목자리</StudyTitle>
      <StudyDuration>
        <DurationTitle>진행기간</DurationTitle>
      </StudyDuration>
      <Etc>
        <Duration>2022-11-13 ~ 2022-11-29</Duration>
        <StudyButton>바로가기 ▶</StudyButton>
      </Etc>
    </Studies>
  );
};
const Studies = styled.div`
  font-family: 'Inria Sans';
  width: 45rem;
  height: 13rem;
  border: 1px solid #b2b2b2;
  border-radius: 5px;
`;

const Picture = styled.div`
  width: 155px;
  height: 130px;
  background: tomato;
  float: left;
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

const StudyDuration = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
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
