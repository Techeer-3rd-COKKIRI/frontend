import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import Account from '@/components/account';
import { useMutation, useQuery } from '@tanstack/react-query';
import { CreateUser, UserInform } from '@/type/user';
import { QueryKeys, restFetcher } from '@/queryClient';
import logo from '../../assets/image/logo.png';
import { UserError } from '../logIn';
import { usePostSignUp } from '@/hook/usePOSTSignUp';

interface SignUser extends CreateUser {
  password_re: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [duplication, setDuplication] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<SignUser>();
  const { mutate } = usePostSignUp();
  const onSubmitHandler: SubmitHandler<SignUser> = async (values, e) => {
    const { nickname, username, password } = values;
    const user = { nickname, username, password };
    if (duplication) {
      mutate(user, {
        onSuccess: (data) => {
          alert('회원가입에 성공하셨습니다 ! ');
          navigate('/login');
        },
        onError: (data) => {
          console.log('회원가입 실패');
        },
      });
    } else {
      alert('중복확인 버튼을 먼저 눌러주세요 !');
    }
  };

  const { data, refetch } = useQuery(
    [QueryKeys.DUPLICATION],
    () =>
      restFetcher({
        method: 'GET',
        path: `/api/v1/users/duplicated/${getValues().username}`,
      }),
    {
      enabled: false, //기본동작 비활성화
      onSuccess: (data) => {
        if (!data.data) {
          alert('사용할 수 있는 username입니다 !');
          setDuplication(true);
        } else {
          alert('username이 중복되었습니다 !');
          setDuplication(false);
        }
      },
    },
  );

  const duplicationCheck = () => {
    refetch();
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
            <UserNameCheck type="button" onClick={duplicationCheck}>
              중복확인
            </UserNameCheck>
          </Id>

          {errors.username ? (
            <UserError>{errors.username.message}</UserError>
          ) : (
            <UserError />
          )}
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
          </NickName>
          {errors.nickname ? (
            <UserError>{errors.nickname.message}</UserError>
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
                value: /^/,
                // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!~$%^&-+=()])(?=S+$).{8,16}$/,
                message:
                  '대소문자와 숫자, 특수문자를 포함한 8자 이상 16자 이하의 비밀번호를 입력해주세요!.',
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
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
const Id = styled.div`
  margin: 5px;
  display: flex;
`;
const IdInput = styled.input`
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
const UserNameCheck = styled.button`
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

const NickName = styled.div`
  display: flex;
`;

const NickNameInput = styled.input`
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
