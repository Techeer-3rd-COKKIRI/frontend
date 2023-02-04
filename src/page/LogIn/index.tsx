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
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
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
          <Error />
          <Buttons>
            <button type="submit">Sign In</button>
            <button>Create Account</button>
          </Buttons>
        </Form>
      </DoLogin>
    </LoginPage>
  );
};

export default LogIn;

const LoginPage = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
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

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const DoLogin = styled.div`
  display: flex;
  width: 45vw;
  flex-direction: column;
  align-items: center;
  min-width: 350px;
  height: 100vh;

  & > h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 60px;
    margin: 125px 0;
    color: #000000;
    text-align: center;
  }

  @media screen and (max-width: 850px) {
    max-width: 100vw;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const UserInput = styled.input`
  width: 80%;
  min-height: 50px;
  max-width: 400px;
  min-width: 400px;
  background: #ffffff;
  border: 1px solid #293659;
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 850px) {
    min-width: 300px;
  }
`;

const Error = styled.div`
  height: 100px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    background: #7e84ff;
    border: 1px solid #ffffff;
    border-radius: 20px;
    min-width: 400px;
    height: 50px;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 20px;
    @media screen and (max-width: 850px) {
      min-width: 300px;
    }
  }
`;
