import { studyListType } from '@/type/studyList';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import temporary from '../../assets/image/temporary.png';
const UserStudy = ({
  id,
  studyName,
  currentUserCount,
  startDate,
  finishDate,
  introduction,
  userLimit,
}: studyListType) => {
  const navigator = useNavigate();

  const gotoStudyMain = () => {
    const roomData = {
      id,
      studyName,
      currentUserCount,
      startDate,
      finishDate,
      introduction,
      userLimit,
    };
    navigator(`/studyMain/${id}`, { state: roomData });
  };

  return (
    <UserStudyBox role="button" onClick={gotoStudyMain}>
      <ImageBox>
        <img alt="스터디방 프로필" src={temporary} />
      </ImageBox>
      <TextBox>
        <StudyTitle>{studyName}</StudyTitle>
        <Period>
          <p>진행기간</p>
          <p>
            {startDate.join('-')} - {finishDate.join('-')}
          </p>
        </Period>
        <button>바로가기</button>
      </TextBox>
    </UserStudyBox>
  );
};

const UserStudyBox = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.3);

  width: auto;
  height: 12.5rem;
  margin: 5px;
  position: relative;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 3px -3px rgba(0, 0, 0, 0.3);

  &:hover {
    scale: 1.03;
  }
  cursor: pointer;
`;
const ImageBox = styled.div`
  height: 100%;
  width: 12.5rem;
  & > img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 950px) {
    display: none;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2rem;
  padding: 2.5rem 1.5rem;

  & > button {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    border-radius: 10px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 2.2rem;

    display: flex;
    align-items: center;
    background-color: #6979f8;
    padding: 0.5rem 1.5rem;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      scale: 1.05;
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;
const StudyTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  color: #000000;
`;
const Period = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.4rem;
  color: #b2b2b2;
`;

export default UserStudy;
