import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  width: 200px;
  height: 100vh;
  background: #e9edf7;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  @media screen and (min-width: 639px) {
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
    top: 15px;
    left: 25px;
    width: 130px;
    height: 50px;
  }
`;

const Navli = styled.ul`
  display: flex;
  flex-direction: column;

  & li {
    display: flex;
    align-items: center;

    margin-bottom: 30px;
    font-family: 'Inria Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.4rem;

    color: #000000;

    & div {
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 0 15px;
      width: 4rem;
      height: 4rem;
      border: 2px solid #000000;
      border-radius: 1.5rem;
      padding: 2px;
    }

    & img {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;

const HambergetIcon = styled.div<{ toggleNav: boolean }>`
  width: 35px;
  height: 35px;
  padding: 5px;
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

  @media screen and (max-width: 639px) {
    display: block;
  }

  @media screen and (min-width: 639px) {
    display: none;
  }
`;
const Nav = () => {
  const [currentLocation, setCurrentLocation] = useState('홈');
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <>
      <HambergetIcon
        toggleNav={toggleNav}
        onClick={() => {
          setToggleNav(!toggleNav);
        }}
      >
        <img src="src\assets\image\햄버거.png"></img>
      </HambergetIcon>
      <NavBar style={{ display: toggleNav ? 'block' : 'none' }}>
        <Logo>
          <img src="src\assets\image\코끼리로고.png"></img>
        </Logo>
        <Navli>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <li
              style={{ opacity: currentLocation == '홈' ? '1' : '0.5' }}
              onClick={() => setCurrentLocation('홈')}
            >
              <div>
                {currentLocation == '홈' ? (
                  <img src="src\assets\image\selected홈.png"></img>
                ) : (
                  <img src="src\assets\image\홈.png"></img>
                )}
              </div>
              홈
            </li>
          </Link>
          <Link to={'/login'} style={{ textDecoration: 'none' }}>
            <li
              style={{ opacity: currentLocation == '로그인' ? '1' : '0.5' }}
              onClick={() => setCurrentLocation('로그인')}
            >
              <div>
                {currentLocation == '로그인' ? (
                  <img src="src\assets\image\selected로그인.png"></img>
                ) : (
                  <img src="src\assets\image\로그인.png"></img>
                )}
              </div>
              로그인
            </li>
          </Link>
          <Link to={'/sign'} style={{ textDecoration: 'none' }}>
            <li
              style={{
                opacity: currentLocation == '회원가입' ? '1' : '0.5',
              }}
              onClick={() => setCurrentLocation('회원가입')}
            >
              <div>
                {currentLocation == '회원가입' ? (
                  <img src="src\assets\image\selected회원가입.png"></img>
                ) : (
                  <img src="src\assets\image\유저.png"></img>
                )}
              </div>
              회원가입
            </li>
          </Link>
        </Navli>
      </NavBar>
    </>
  );
};

export default Nav;
