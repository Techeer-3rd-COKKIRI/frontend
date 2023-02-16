import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import Account from '@/components/account';
import { useMutation } from '@tanstack/react-query';
import { createUser, userInform } from '@/type/user';
import { restFetcher } from '@/queryClient';
import logo from '../../assets/image/logo.png';
import { UserError } from '../LogIn';

interface SignUser extends createUser {
  password_re: string;
}

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<SignUser>();
  const { mutate } = useMutation((user: createUser) =>
    restFetcher({ method: 'POST', path: '/api/v1/users', body: user }),
  );
  const onSubmitHandler: SubmitHandler<SignUser> = async (values, e) => {
    const { nickname, username, password, password_re } = values;
    const user = { nickname, username, password };
    mutate(user, {
      onSuccess: (data) => {
        console.log(data);
        alert('회원가입에 성공하셨습니다 ! ');
        navigate('/login');
      },
    });
  };

  const gotoMain = () => {
    navigate('/');
  };
  // 회원가입 성공 -> 로그인
  // 중복확인
  // 유효성검사
  // 비밀번호 같게입력했는지
  return (
    <SignUpPage>
      <Logo onClick={gotoMain}>
        <img src={logo} alt="클릭하면 메인페이지로 가는 로고"></img>
      </Logo>
      <Account />
      <RightBackground>
        <Title>Create Account</Title>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <NickName>
            <NickNameInput
              {...register('nickname', {
                required: '닉네임을 입력해주세요!',
                minLength: {
                  value: 2,
                  message: '최소 2자 이상의 닉네임을 입력해주세요!',
                },
                maxLength: {
                  value: 8,
                  message: '8자 이하의 닉네임을 입력해주세요!',
                },
              })}
              placeholder="닉네임을 입력해주세요!"
            ></NickNameInput>
            <NickNameCheck>중복확인</NickNameCheck>
          </NickName>
          {errors.nickname ? (
            <UserError>{errors.nickname.message}</UserError>
          ) : (
            <UserError />
          )}
          <Id>
            <IdInput
              {...register('username', {
                required: '아이디를 입력해주세요!',
                minLength: {
                  value: 5,
                  message: '최소 5자 이상의 아이디를 입력해주세요!',
                },
                maxLength: {
                  value: 20,
                  message: '20자 이하의 아이디를 입력해주세요!',
                },
                pattern: {
                  value: /^[A-Za-z0-9]+$/,
                  message: '영문,숫자를 혼용하여 입력주세요!',
                },
              })}
              placeholder="아이디를 입력해주세요"
            ></IdInput>
          </Id>
          {errors.username ? (
            <UserError>{errors.username.message}</UserError>
          ) : (
            <UserError />
          )}
          <Password
            {...register('password', {
              required: '비밀번호를 입력해주세요 !',
              minLength: {
                value: 8,
                message: '최소 8자 이상의 비밀번호를 입력해주세요!',
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
                message: '영문,숫자를 혼용하여 입력주세요!',
              },
            })}
            placeholder={'비밀번호를 입력해주세요'}
            type="password"
          ></Password>
          {errors.password ? (
            <UserError>{errors.password.message}</UserError>
          ) : (
            <UserError />
          )}
          <PasswordCheck
            id="password_re"
            type="password"
            placeholder="비밀번호를 입력하세요"
            {...register('password_re', {
              required: '비밀번호를 입력해주세요!',
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues();
                  return password === value || '비밀번호가 일치하지않습니다!';
                },
              },
            })}
          />
          {errors.password_re ? (
            <UserError>{errors.password_re.message}</UserError>
          ) : (
            <UserError />
          )}
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </Form>
      </RightBackground>
    </SignUpPage>
  );
};

export default SignUp;

const SignUpPage = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Logo = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 2.5rem;
  & > img {
    width: 130px;
    height: 50px;
  }
  @media screen and (max-width: 700px) {
    & > img {
      width: 100px;
      height: 40px;
    }
  }
`;
const RightBackground = styled.div`
  font-family: InriaSans;
  display: flex;
  width: 45vw;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  max-height: 100vh;
  @media screen and (max-width: 1080px) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  font-size: 5.5rem;
  margin: 100px 0;
  margin-top: 150px;
  @media screen and (max-width: 850px) {
    margin: 100px 0;
  }
`;

const Form = styled.form`
  text-align: center;
  align-items: center;
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
  margin-top: 8rem;
  background: #7e84ff;
  border: 1px solid #ffffff;
  border-radius: 20px;
  height: 50px;
  color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 600px) {
    min-width: 54rem;
  }
`;
