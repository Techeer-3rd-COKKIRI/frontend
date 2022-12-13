import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Account from '@/components/account';

const LogIn = () => {
  const navigate = useNavigate();

  return (
    <LogInPage>
      <Account />
      <RightBackground>
        <Title>Log In</Title>

        <Input>
          <NickNameInput placeholder="NickName"></NickNameInput>
        </Input>
        <LogIndiv>
          <LogInButton
            onClick={() => {
              navigate('/');
            }}
          >
            로그인
          </LogInButton>
          <SignupButton
            onClick={() => {
              navigate('/SignUp');
            }}
          >
            회원가입 하기
          </SignupButton>
        </LogIndiv>
      </RightBackground>
    </LogInPage>
  );
};

export default LogIn;

const LogInPage = styled.div`
  display: flex;
  min-width: 100vw;
  height: 100vh;
`;

const RightBackground = styled.div`
  flex-grow: 1;
  height: 100%;
  background-color: white;
  flex-shrink: 0;
  flex-basis: 500px;
  align-items: center;
`;

const Title = styled.div`
  font-family: 'InriaSans';
  font-size: 5.5rem;
  margin-left: 240px;
  margin-top: 190px;
`;

const Input = styled.div`
  margin-left: 85px;
  margin-top: 150px;
`;

const NickNameInput = styled.input`
  font-family: InriaSans;
  border-radius: 18px;
  width: 440px;
  height: 25px;
  padding: 10px;
  padding-left: 20px;
  font-size: 2rem;
`;

const LogIndiv = styled.div``;

const LogInButton = styled.button`
  font-family: InriaSans;
  background-color: #7e84ff;
  color: white;
  font-size: 2rem;
  margin-left: 85px;
  border-radius: 18px;
  width: 470px;
  height: 48px;
  margin-top: 40px;
  border: 0;
`;

const SignupButton = styled.button`
  font-family: InriaSans;
  border: 1px solid #000000;
  color: black;
  font-size: 2rem;
  margin-left: 85px;
  border-radius: 18px;
  width: 470px;
  height: 45px;
  margin-top: 40px;
  border: 0;
`;
