import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Account from '@/components/account';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <SignUpPage>
      <Account />
      <RightBackground>
        <Title>Create Account</Title>
        <Input>
          <NickName>
            <NickNameInput placeholder="Nickname"></NickNameInput>
            <NickNameCheck>중복확인</NickNameCheck>
          </NickName>
          <Id>
            <IdInput placeholder="Id"></IdInput>
          </Id>
          <Password placeholder="Password" type="password"></Password>
          <PasswordCheck
            placeholder="Password Check"
            type="password"
          ></PasswordCheck>
        </Input>
        <SignUpButton>Sign Up</SignUpButton>
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
  text-align: center;
  align-items: center;
  font-family: InriaSans;
  flex-grow: 1;
  height: 100%;
  background-color: white;
  flex-shrink: 0;
  flex-basis: 500px;
  align-items: center;
  @media screen and (max-width: 850px) {
    max-width: 100vw;
  }
`;

const Title = styled.h1`
  font-size: 5.5rem;
  margin-top: 100px;
`;

const Input = styled.div`
  text-align: center;
  align-items: center;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  border-color: #293659;
`;
const NickName = styled.div`
  margin: 5px;
  display: flex;
`;
const NickNameInput = styled.input`
  font-family: InriaSans;
  border-radius: 20px;
  width: 32rem;
  height: 2.5rem;
  padding: 25px;
  padding-left: 25px;
  font-size: 2rem;
  @media screen and (max-width: 600px) {
    min-width: 37rem;
  }
`;
const NickNameCheck = styled.button`
  border-radius: 20px;
  width: 11rem;
  height: 54px;
  font-size: 2rem;
  margin-left: 10px;
  /* padding: 25px; */
  @media screen and (max-width: 600px) {
    min-width: 15rem;
  }
`;

const Id = styled.div`
  margin-top: 10px;
  display: flex;
`;

const IdInput = styled.input`
  font-family: InriaSans;
  border-radius: 20px;
  width: 44rem;
  height: 2.5rem;
  padding: 25px;
  padding-left: 25px;
  font-size: 2rem;
  @media screen and (max-width: 600px) {
    min-width: 54rem;
  }
`;

const Password = styled.input`
  font-family: InriaSans;
  margin-top: 10px;
  border-radius: 20px;
  width: 44rem;
  height: 2.5rem;
  padding: 25px;
  padding-left: 25px;
  font-size: 2rem;
  @media screen and (max-width: 600px) {
    min-width: 54rem;
  }
`;
const PasswordCheck = styled.input`
  font-family: InriaSans;
  margin-top: 10px;
  border-radius: 20px;
  width: 44rem;
  height: 2.5rem;
  padding: 25px;
  padding-left: 25px;
  font-size: 2rem;
  @media screen and (max-width: 600px) {
    min-width: 54rem;
  }
`;

const SignUpButton = styled.button`
  font-family: InriaSans;
  /* background: #7e84ff; */
  /* border: 1px solid #ffffff; */
  /* border-radius: 20px; */
  /* color: #fff; */
  width: 44rem;
  /* height: 5.5rem; */
  font-size: 2.2rem;
  margin-top: 15rem;
  background: #7e84ff;
  border: 1px solid #ffffff;
  border-radius: 20px;
  height: 50px;
  color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 600px) {
    min-width: 54rem;
  }
`;
