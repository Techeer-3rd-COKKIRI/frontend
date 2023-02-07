import React, { useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import hamburger from '@/assets/image/hamburger.png';
import logo from '@/assets/image/logo.png';
import selectedHome from '@/assets/image/selectedHome.png';
import home from '@/assets/image/home.png';
import selectedLogin from '@/assets/image/selectedLogin.png';
import login from '@/assets/image/login.png';
import bye from '@/assets/image/bye.png';
import selectedSign from '@/assets/image/selectedSign.png';
import myprofile from '@/assets/image/myprofile.svg';
import clickMyprofile from '@/assets/image/clickMyprofile.svg';
import people from '@/assets/image/user.png';
import pencil from '@/assets/image/pencil.png';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const homeMatch = useMatch('/');
  const loginMatch = useMatch('/login');
  const signMatch = useMatch('/sign');
  const createStudy = useMatch('/createStudy');
  const profile = useMatch('/profile');

  //localstorage가 있다면 그값을 전해줌 // 애는 객체이기때문에 parse가공을 해줘야한다. 현재는 Json형태이다.
  const checkUser = localStorage.getItem('user');

  let user;
  if (typeof checkUser === 'string') {
    user = JSON.parse(checkUser); // ok
  }
  console.log(user);
  const logoutHandle = async () => {
    // useQuery(['logout'], async () =>
    //   restFetcher({ method: 'GET', path: '/api/v1/users/logout' }),
    // );
    try {
      await axios.get('http://localhost:8080/api/v1/users/logout');
    } catch {
      location.replace('/');
      window.localStorage.clear();
    }
  };

  return (
    <>
      <HambergetIcon
        toggleNav={toggleNav}
        onClick={() => {
          setToggleNav(!toggleNav);
        }}
      >
        <img src={hamburger}></img>
      </HambergetIcon>
      <NavBar style={{ display: toggleNav ? 'block' : 'none' }}>
        <Logo>
          <img src={logo}></img>
        </Logo>
        <Taps>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Tap isActive={homeMatch !== null}>
              <div>
                {homeMatch !== null ? (
                  <img src={selectedHome}></img>
                ) : (
                  <img src={home}></img>
                )}
              </div>
              홈
            </Tap>
          </Link>
          {user ? null : (
            <>
              <Link to={'/LogIn'} style={{ textDecoration: 'none' }}>
                <Tap isActive={loginMatch !== null}>
                  <div>
                    {loginMatch !== null ? (
                      <img src={selectedLogin}></img>
                    ) : (
                      <img src={login}></img>
                    )}
                  </div>
                  로그인
                </Tap>
              </Link>
              <Link to={'/SignUp'} style={{ textDecoration: 'none' }}>
                <Tap isActive={signMatch !== null}>
                  <div>
                    {signMatch !== null ? (
                      <img src={selectedSign}></img>
                    ) : (
                      <img src={people}></img>
                    )}
                  </div>
                  회원가입
                </Tap>
              </Link>
            </>
          )}

          {user ? (
            <Link to={'/profile'} style={{ textDecoration: 'none' }}>
              <Tap isActive={profile !== null}>
                <div>
                  {profile !== null ? (
                    <img src={myprofile}></img>
                  ) : (
                    <img src={clickMyprofile}></img>
                  )}
                </div>
                내 프로필
              </Tap>
            </Link>
          ) : null}
          {user ? (
            <Link to={'/createStudy'} style={{ textDecoration: 'none' }}>
              <Tap isActive={createStudy !== null}>
                <div>
                  {createStudy !== null ? (
                    <img src={pencil}></img>
                  ) : (
                    <img src={pencil}></img>
                  )}
                </div>
                스터디 개설
              </Tap>
            </Link>
          ) : null}

          {user ? (
            <div onClick={logoutHandle}>
              <Tap>
                <div>
                  <img
                    style={{ width: '55px', height: '55px' }}
                    src={bye}
                  ></img>
                </div>
                로그아웃
              </Tap>
            </div>
          ) : null}
        </Taps>
      </NavBar>
    </>
  );
};

export default Nav;

const NavBar = styled.div`
  width: 200px;
  height: 100vh;
  background: #e9edf7;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  @media screen and (min-width: 1440px) {
    display: block !important;
  }
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
    top: 1.5rem;
    left: 2.5rem;
    width: 130px;
    height: 50px;
  }
`;

const Taps = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Tap = styled.li<{ isActive?: boolean }>`
  display: flex;
  align-items: center;

  cursor: pointer;
  margin-bottom: 30px;
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 2.4rem;
  color: #000000;
  opacity: ${(props) => (props.isActive ? '1' : '0.5')};
  &:hover {
    opacity: 1;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 15px;
    width: 4rem;
    height: 4rem;
    border-radius: 1.5rem;
    padding: 2px;
  }

  & img {
    width: 35px;
    height: 35px;
  }
`;

const HambergetIcon = styled.div<{ toggleNav: boolean }>`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  left: ${(props) => (props.toggleNav ? '205px' : '15px')};
  position: absolute;
  z-index: 999;
  & img {
    width: 35px;
    height: 35px;
  }

  &:hover {
    border-radius: 50%;
    background-color: rgba(217, 217, 217, 0.5);
  }

  @media screen and (min-width: 639px) {
    display: block;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
