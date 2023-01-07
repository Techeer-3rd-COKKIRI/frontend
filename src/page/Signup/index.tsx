import { useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Account from '@/components/account';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();

  // API 연결 테스트를 위해 임시로 만든 부분
  const username = useRef<string>();
  const password = useRef<string>();

  const sginUp = async () => {
    try {
      const registrationRequest = {
        username: username.current,
        password: password.current,
        nickname: 'nickname',
      };
      console.log(registrationRequest);
      const result = await axios.post('/api/v1/users', registrationRequest);
      console.log(result);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };
  // ------------------------------

  return (
    <SignUpPage>
      <Account />
      <RightBackground>
        <Title>Create Account</Title>

        <Input>
          <NickNameInput
            placeholder="NickName"
            onChange={(e) => {
              username.current = e.target.value;
            }}
          ></NickNameInput>
          <InputCheck>중복확인</InputCheck>
          <NickNameInput
            placeholder="Password"
            onChange={(e) => {
              password.current = e.target.value;
            }}
          ></NickNameInput>
        </Input>

        <SignUpdiv>
          <SignupButton
            onClick={() => {
              // navigate('/');
              sginUp();
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
  margin-left: 130px;
  margin-top: 190px;
`;

const Input = styled.div`
  margin-left: 85px;
  margin-top: 150px;
`;

const NickNameInput = styled.input`
  font-family: InriaSans;
  border-radius: 18px;
  width: 300px;
  height: 50px;
  padding: 10px;
  padding-left: 20px;
  font-size: 2rem;
  margin-top: 5px;
`;

const InputCheck = styled.button`
  font-family: InriaSans;
  border-radius: 18px;
  width: 140px;
  height: 48px;
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
  margin-left: 85px;
  border-radius: 18px;
  width: 470px;
  height: 48px;
  margin-top: 40px;
  border: 0;
`;
