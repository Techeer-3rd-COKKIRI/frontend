import React, { useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const homeMatch = useMatch('/');
  const loginMatch = useMatch('/login');
  const signMatch = useMatch('/sign');
  const createStudy = useMatch('/createStudy');

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
        <Taps>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Tap isActive={homeMatch !== null}>
              <div>
                {homeMatch !== null ? (
                  <img src="src\assets\image\selected홈.png"></img>
                ) : (
                  <img src="src\assets\image\홈.png"></img>
                )}
              </div>
              홈
            </Tap>
          </Link>
          <Link to={'/LogIn'} style={{ textDecoration: 'none' }}>
            <Tap isActive={loginMatch !== null}>
              <div>
                {loginMatch !== null ? (
                  <img src="src\assets\image\selected로그인.png"></img>
                ) : (
                  <img src="src\assets\image\로그인.png"></img>
                )}
              </div>
              로그인
            </Tap>
          </Link>
          <Link to={'/SignUp'} style={{ textDecoration: 'none' }}>
            <Tap isActive={signMatch !== null}>
              <div>
                {signMatch !== null ? (
                  <img src="src\assets\image\selected회원가입.png"></img>
                ) : (
                  <img src="src\assets\image\유저.png"></img>
                )}
              </div>
              회원가입
            </Tap>
          </Link>
          <Link to={'/createStudy'} style={{ textDecoration: 'none' }}>
            <Tap isActive={createStudy !== null}>
              <div>
                {createStudy !== null ? (
                  <img src="src\assets\image\연필.png"></img>
                ) : (
                  <img src="src\assets\image\연필.png"></img>
                )}
              </div>
              스터디 개설
            </Tap>
          </Link>
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
    top: 15px;
    left: 25px;
    width: 130px;
    height: 50px;
  }
`;

const Taps = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Tap = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;

  margin-bottom: 30px;
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #000000;
  opacity: ${(props) => (props.isActive ? '1' : '0.5')};

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
    width: 3.5rem;
    height: 3.5rem;
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

  @media screen and (min-width: 639px) {
    display: block;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
