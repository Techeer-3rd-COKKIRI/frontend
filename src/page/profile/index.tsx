import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import preparing from '../../assets/image/preparing.png';
const Profile = () => {
  const navigator = useNavigate();

  const gotoMain = () => {
    navigator(-1);
  };

  return (
    <ProfilePage>
      <img alt="준비중" src={preparing}></img>
      <h1>이 페이지는 준비중입니다..!</h1>
      <button onClick={gotoMain}>이전페이지로 돌아가기</button>
    </ProfilePage>
  );
};

export default Profile;

const ProfilePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    width: 35rem;
    height: 35rem;
  }

  & > h1 {
    font-size: 3rem;
  }

  & > button {
    cursor: pointer;
    margin-top: 5rem;
    border-radius: 10px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
    background-color: #6979f8;
    padding: 1.5rem 2.5rem;
    color: #ffffff;
    &:hover {
      scale: 1.05;
    }
  }
`;
