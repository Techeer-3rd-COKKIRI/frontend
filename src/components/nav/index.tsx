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
import { useGetLogout } from '@/hook/nav/useGETLogout';

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

  const { refetch: logout } = useGetLogout();

  return (
    <>
      <HambergetIcon
        role="button"
        toggleNav={toggleNav}
        onClick={() => {
          setToggleNav(!toggleNav);
        }}
      >
        <img alt="nav토글" src={hamburger}></img>
      </HambergetIcon>
      <NavBar style={{ display: toggleNav ? 'block' : 'none' }}>
        <Logo role="button">
          <img alt="메인페이지로가는 로고" src={logo}></img>
        </Logo>
        <Taps>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Tap isActive={homeMatch !== null}>
              <div>
                {homeMatch !== null ? (
                  <img alt="메인페이지로 가는" src={selectedHome}></img>
                ) : (
                  <img alt="메인페이지로 가는" src={home}></img>
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
                      <img alt="로그인페이지로 가는" src={selectedLogin}></img>
                    ) : (
                      <img alt="로그인페이지로 가는" src={login}></img>
                    )}
                  </div>
                  로그인
                </Tap>
              </Link>
              <Link to={'/SignUp'} style={{ textDecoration: 'none' }}>
                <Tap isActive={signMatch !== null}>
                  <div>
                    {signMatch !== null ? (
                      <img alt="회원가입페이지로 가는" src={selectedSign}></img>
                    ) : (
                      <img alt="회원가입페이지로 가는" src={people}></img>
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
                    <img alt="프로필페이지로 가는" src={myprofile}></img>
                  ) : (
                    <img alt="프로필페이지로 가는" src={clickMyprofile}></img>
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
                    <img alt="개설페이지로 가는" src={pencil}></img>
                  ) : (
                    <img alt="개설페이지로 가는" src={pencil}></img>
                  )}
                </div>
                스터디 개설
              </Tap>
            </Link>
          ) : null}

          {user ? (
            <div role="button" onClick={() => logout()}>
              <Tap>
                <div>
                  <img
                    alt="로그아웃"
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
  position: fixed;
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
