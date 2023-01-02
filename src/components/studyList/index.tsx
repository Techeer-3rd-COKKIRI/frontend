import React from 'react';
import styled from 'styled-components';

interface Props {
  studyName: string;
}

const StudyListComponent = ({ studyName }: Props) => {
  return (
    <StudyList>
      <StudyImage></StudyImage>
      <StudyText>
        <StudyInfo>
          <Tags>
            <Tag>#태그1</Tag>
            <Tag>#태그2</Tag>
          </Tags>
          <StudyTitle>{studyName}</StudyTitle>
          <StudyIntro>스터디 소개</StudyIntro>
        </StudyInfo>

        <Bottom>
          <Period>
            <Studyperiod>모집기간</Studyperiod>
            <DayCount>D-day</DayCount>
          </Period>
          <People>
            <StudyPeople>모집인원</StudyPeople>
            <PeopleCount>1/n</PeopleCount>
          </People>
        </Bottom>
      </StudyText>
    </StudyList>
  );
};
const StudyList = styled.div`
  font-family: 'Inria Sans';
  width: 25rem;
  height: 33rem;
  border: 1px solid #b2b2b2;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const StudyImage = styled.div`
  border-radius: 5px;
  width: 25rem;
  height: 17rem;
  background: tomato;
`;

const StudyText = styled.div`
  margin: 10px;
  margin-left: 10px;
`;

const StudyInfo = styled.div``;

const Tags = styled.a`
  color: #8b8b8b;
`;
const Tag = styled.a`
  font-size: 1.5rem;
  margin: 7px 7px 7px 0px;
`;

const StudyTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 18px;
  margin-top: 10px;
`;
const StudyIntro = styled.div`
  margin: 15px 0px 15px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 12px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-right: 7px;
`;
const Period = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 18px;
  text-align: center;
  color: #8b8b8b;
`;
const Studyperiod = styled.a``;
const DayCount = styled.a`
  margin-left: 5px;
`;
const People = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 18px;
  text-align: center;
  color: #8b8b8b;
`;
const StudyPeople = styled.a``;
const PeopleCount = styled.a`
  margin-left: 5px;
`;

export default StudyListComponent;
