import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  width: 200px;
  height: 100vh;
  background: #e9edf7;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.15);
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

    &.active {
      color: red;
    }

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

const Nav = () => {
  const [currentLocation, setCurrentLocation] = useState('홈');
  return (
    <NavBar>
      <Logo>
        <img src="src\assets\image\코끼리로고.png"></img>
      </Logo>
      <Navli>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <li
            style={{ color: currentLocation == '홈' ? 'red' : '#000000' }}
            onClick={() => setCurrentLocation('홈')}
          >
            <div>
              <img src="src\assets\image\홈.png"></img>
            </div>
            홈
          </li>
        </Link>
        <Link to={'/login'} style={{ textDecoration: 'none' }}>
          <li
            style={{ color: currentLocation == '로그인' ? 'red' : '#000000' }}
            onClick={() => setCurrentLocation('로그인')}
          >
            <div>
              <img src="src\assets\image\로그인.png"></img>
            </div>
            로그인
          </li>
        </Link>
        <Link to={'/sign'} style={{ textDecoration: 'none' }}>
          <li
            style={{ color: currentLocation == '회원가입' ? 'red' : '#000000' }}
            onClick={() => setCurrentLocation('회원가입')}
          >
            <div>
              <img src="src\assets\image\유저.png"></img>
            </div>
            회원가입
          </li>
        </Link>
      </Navli>
    </NavBar>
  );
};

export default Nav;
