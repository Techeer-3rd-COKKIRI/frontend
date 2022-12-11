import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  let navigate = useNavigate();
  return (
    <SignUpPage>
      <LeftBackground>
        <Logo>
          <img src="src\assets\image\코끼리로고.png"></img>
        </Logo>

        <Logo2>
          <img src="src\assets\image\메인코끼리.png"></img>
          <Ment>
            코딩은 우리끼리 <br />
            함께, <br />
            코끼리에서
          </Ment>
        </Logo2>
      </LeftBackground>

      <RightBackground>
        <Title>Create Account</Title>

        <Input>
          <NickNameInput placeholder="NickName"></NickNameInput>
          <InputCheck>중복확인</InputCheck>
        </Input>

        <SignUpdiv>
          <SignupButton
            onClick={() => {
              navigate('/');
            }}
          >
            Sign Up
          </SignupButton>
        </SignUpdiv>
      </RightBackground>
    </SignUpPage>
  );
};

export default SignUp;

const SignUpPage = styled.div`
  display: flex;
  min-width: 100vw;
  height: 100vh;
`;

const LeftBackground = styled.div`
  background-color: #e9edf7;
  width: 60vw;
  height: 100%;
  box-shadow: 6px 0px 10px rgba(0, 0, 0, 0.25);
  z-index: 1;
  flex-shrink: 1;
  position: relative;
`;

const Logo = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  & img {
    position: absolute;
    top: 15px;
    left: 25px;
    width: 130px;
    height: 50px;
  }
`;

const Logo2 = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  margin-left: 100px;
  & img {
    position: absolute;
    bottom: 60px;
  }
`;

const Ment = styled.div`
  font-size: 5.5rem;
  font-weight: 500;
  margin-left: 15px;
  margin-top: 60px;
`;

const RightBackground = styled.div`
  flex-grow: 1;
  height: 100%;
  background-color: white;
  flex-shrink: 0;
  flex-basis: 500px;
`;

const Title = styled.div`
  font-family: 'InriaSans';
  font-size: 5.5rem;
  margin-left: 65px;
  margin-top: 70px;
`;

const Input = styled.div`
  margin-left: 65px;
  margin-top: 270px;
`;

const NickNameInput = styled.input`
  font-family: InriaSans;
  border-radius: 18px;
  width: 300px;
  height: 20px;
  padding: 10px;
  font-size: 2rem;
`;

const InputCheck = styled.button`
  font-family: InriaSans;
  border-radius: 18px;
  width: 140px;
  height: 44px;
  font-size: 2rem;
  margin-left: 10px;
`;
//  여기부터 다시 수정
const SignUpdiv = styled.div``;

const SignupButton = styled.button`
  font-family: InriaSans;
  background-color: #7e84ff;
  color: white;
  font-size: 2rem;
  margin-left: 65px;
  border-radius: 18px;
  width: 470px;
  height: 40px;
  margin-top: 20px;
  border: 0;
`;
