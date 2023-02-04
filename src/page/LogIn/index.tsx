import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import logo from '../../assets/image/logo.png';
interface userInform {
  id: string;
  password: string;
}
const LogIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userInform>();

  const onSubmitHandler: SubmitHandler<userInform> = async (values, e) => {
    const { id, password } = values;
    console.log(id, password);
    const user = { id, password };
    // mutate(user, {
    //   onSuccess: (data) => {
    //     console.log('로그인에 성공하셨습니다 !');
    //   },
    // });
  };
  //로그인버튼을 누르면 mutate trigger

  return (
    <LoginPage>
      <Logo onClick={() => navigate('/')}>
        <img src={logo}></img>
      </Logo>
      <LoginIntroduce></LoginIntroduce>
      <DoLogin>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <UserInput
            {...register('id', {})}
            placeholder={'아이디를 입력해주세요'}
          />
          <UserInput
            {...register('password', {})}
            placeholder={'비밀번호를 입력해주세요'}
          />
          {/* {errors.id ? (
          <Error style={{ height: '10px' }}>{errors.id.message}</Error>
        ) : (
          <Error style={{ height: '10px' }}></Error>
        )}
        {errors.password ? (
          <Error style={{ height: '10px' }}>{errors.password.message}</Error>
        ) : (
          <Error style={{ height: '10px' }}></Error>
        )} */}
          <Buttons>
            <button type="submit">Sign In</button>
            <button>Create Account</button>
          </Buttons>
        </form>
      </DoLogin>
    </LoginPage>
  );
};

export default LogIn;

const LoginPage = styled.div`
  display: flex;
  margin-top: 300px;
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

const UserInput = styled.input`
  width: 100px;
  height: 50px;
`;

const Error = styled.div``;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  & > button {
    background: #7e84ff;
    border: 1px solid #ffffff;
    border-radius: 20px;
    height: 5rem;
    color: rgba(255, 255, 255, 1);
  }
`;
