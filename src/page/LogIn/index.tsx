import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
const LogIn = () => {
  const navigate = useNavigate();

  return (
    <LoginPage>
      <Logo onClick={() => navigate('/')}>
        <img src={logo}></img>
      </Logo>
      <LoginIntroduce></LoginIntroduce>
      <DoLogin>로그인 하이</DoLogin>
    </LoginPage>
  );
};

export default LogIn;

const LoginPage = styled.div`
  display: flex;
`;

const Logo = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 2.5rem;
  & > img {
    width: 130px;
    height: 50px;
  }
`;

const LoginIntroduce = styled.div`
  width: 55vw;
  height: 100vh;
  background: #e9edf7;
  flex-shrink: 1;
  box-shadow: 6px 0px 10px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const DoLogin = styled.div`
  min-width: 380px;
  height: 100vh;
  flex-shrink: 0;

  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`;
