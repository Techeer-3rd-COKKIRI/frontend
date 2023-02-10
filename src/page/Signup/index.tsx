import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import Account from '@/components/account';
import { useMutation } from '@tanstack/react-query';
import { createUser, userInform } from '@/type/user';
import { restFetcher } from '@/queryClient';

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm<createUser>();
  const { mutate } = useMutation((user: createUser) =>
    restFetcher({ method: 'POST', path: '/api/v1/users', body: user }),
  );
  const onSubmitHandler: SubmitHandler<createUser> = async (values, e) => {
    const { nickname, username, password } = values;
    const user = { nickname, username, password };
    mutate(user, {
      onSuccess: (data) => {
        console.log(data);
        alert('회원가입에 성공하셨습니다 ! ');
        navigate('/login');
      },
    });
  };

  // 회원가입 성공 -> 로그인
  // 중복확인
  // 유효성검사
  // 비밀번호 같게입력했는지
  return (
    <SignUpPage>
      <Account />
      <RightBackground>
        <Title>Create Account</Title>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <NickName>
            <NickNameInput
              {...register('nickname', { required: true })}
              placeholder={'닉네임을 입력해주세요'}
            ></NickNameInput>
            <NickNameCheck>중복확인</NickNameCheck>
          </NickName>
          <Id>
            <IdInput
              {...register('username', { required: true })}
              placeholder="Id를 입력해주세요"
            ></IdInput>
          </Id>
          <Password
            {...register('password', { required: true })}
            placeholder={'비밀번호를 입력해주세요'}
            type="password"
          ></Password>
          <PasswordCheck
            placeholder="Password Check"
            type="password"
          ></PasswordCheck>
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </Form>
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

const Form = styled.form`
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
