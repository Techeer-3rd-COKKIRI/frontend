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
  height: 25px;
  padding: 10px;
  padding-left: 20px;
  font-size: 2rem;
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
