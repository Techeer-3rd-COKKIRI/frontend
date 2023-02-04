import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/image/logo.png';
import mainElephant from '../../assets/image/mainElephant.png';
const Account = () => {
  return (
    <LeftBackground>
      <Logo>
        <img src={logo}></img>
      </Logo>
      <Logo2>
        <img src={mainElephant}></img>
        <Ment>
          코딩은 우리끼리 <br />
          함께, <br />
          코끼리에서
        </Ment>
      </Logo2>
    </LeftBackground>
  );
};

const LeftBackground = styled.div`
  background: #e9edf7;
  width: 55vw;
  height: 100vh;
  box-shadow: 6px 0px 10px rgba(0, 0, 0, 0.25);
  /* z-index: 1; */
  flex-shrink: 1;
  position: relative;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 2.5rem;
  & img {
    width: 130px;
    height: 50px;
  }
`;

const Logo2 = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  margin-left: 100px;
  & img {
    position: absolute;
    bottom: 15px;
  }
`;

const Ment = styled.div`
  font-size: 5.5rem;
  font-weight: 500;
  margin-top: 160px;
`;

export default Account;
