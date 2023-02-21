import { studyListType } from '@/type/studyList';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bear from '../../assets/image/bear.png';
import bear2 from '../../assets/image/bear2.png';
import bear3 from '../../assets/image/bear3.png';
import bear4 from '../../assets/image/bear4.png';
const StudyListComponent = ({
  id,
  studyName,
  currentUserCount,
  startDate,
  finishDate,
  introduction,
  userLimit,
}: studyListType) => {
  const navigator = useNavigate();

  //localstorage가 있다면 그값을 전해줌 // 애는 객체이기때문에 parse가공을 해줘야한다. 현재는 Json형태이다.
  const checkUser = localStorage.getItem('user');

  let user: string;
  if (typeof checkUser === 'string') {
    user = JSON.parse(checkUser); // ok
  }
  const goStudyMain = () => {
    const roomData = {
      id,
      studyName,
      currentUserCount,
      startDate,
      finishDate,
      introduction,
      userLimit,
    };
    if (user) navigator(`/studyMain/${id}`, { state: roomData });
    else {
      alert('로그인이후에 사용 가능한 서비스입니다!');
    }
  };
  return (
    <StudyList onClick={goStudyMain}>
      <StudyImage></StudyImage>
      <StudyText>
        <StudyInfo>
          <StudyTitle>{studyName}</StudyTitle>
          <StudyIntro>{introduction}</StudyIntro>
        </StudyInfo>

        <Bottom>
          <Period>
            <Studyperiod>모집기간</Studyperiod>
            <DayCount>
              {startDate.join('-')} - {finishDate.join('-')}
            </DayCount>
          </Period>
          <People>
            <StudyPeople>모집인원</StudyPeople>
            <PeopleCount>
              {currentUserCount}/{userLimit}
            </PeopleCount>
          </People>
        </Bottom>
      </StudyText>
    </StudyList>
  );
};
const StudyList = styled.div`
  font-family: 'Inria Sans';
  width: 23rem;
  height: 28rem;
  border: 1px solid #b2b2b2;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  transition: 0.5s all;
  &:hover > div:nth-child(1) {
    transform: scale(1.2);
    z-index: 9;
  }
  &:hover {
    transform: translateY(-5px);
    z-index: 9;
  }
  @media screen and (max-width: 500px) {
    width: 18rem;
    height: 23rem;
  }
`;
const StudyImage = styled.div`
  border-radius: 5px;
  width: 23rem;
  height: 12rem;
  background-image: url(${bear3});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  transition: 0.2s all;
  @media screen and (max-width: 500px) {
    width: 18rem;
    height: 10rem;
  }
`;

const StudyText = styled.div`
  margin: 1rem;
  margin-left: 1rem;
`;

const StudyInfo = styled.div``;

const Tags = styled.div`
  color: #8b8b8b;
`;
const Tag = styled.span`
  font-size: 1.5rem;
  margin: 0.7rem 0.7rem 0.7rem 0px;
`;

const StudyTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8rem;
  margin-top: 1rem;
`;
const StudyIntro = styled.div`
  margin: 1.5rem 0;
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.2rem;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 0.7rem;
`;
const Period = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.8rem;
  text-align: center;
  color: #8b8b8b;
  position: absolute;
  bottom: 1rem;
  @media screen and (max-width: 500px) {
    transform: scale(0.6);
    left: 0;
    bottom: 0.5rem;
  }
`;
const Studyperiod = styled.a``;
const DayCount = styled.a``;
const People = styled.div`
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
  text-align: center;
  color: #8b8b8b;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  @media screen and (max-width: 500px) {
    transform: scale(0.6);
    right: 0.1rem;
    bottom: 0.5rem;
  }
`;
const StudyPeople = styled.span``;
const PeopleCount = styled.span`
  margin-left: 5px;
`;

export default StudyListComponent;
