import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/image/logo.png';
import mainElephant from '../../assets/image/mainElephant.png';
const Account = () => {
  const navigater = useNavigate();
  const gotoMain = () => {
    navigater('/');
  };
  return (
    <LeftBackground>
      <LeftIntroduce>
        <Logo2>
          <Ment>
            <span>코</span>딩은 우리<span>끼리</span> <br />
            함께, <br />
            <span>코끼리</span>에서
          </Ment>
          <img src={mainElephant} alt=""></img>
        </Logo2>
      </LeftIntroduce>
    </LeftBackground>
  );
};

const LeftBackground = styled.div`
  flex-direction: column;
  background: #e9edf7;
  width: 55vw;
  height: 100vh;
  box-shadow: 6px 0px 10px rgba(0, 0, 0, 0.25);
  /* z-index: 1; */
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const LeftIntroduce = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-bottom: 5rem;
`;

const Logo = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 2.5rem;
  cursor: pointer;
  & img {
    width: 130px;
    height: 50px;
  }
`;

const Logo2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
  margin-top: 3rem;
  & img {
    bottom: 15px;
    width: 35vw;
    height: 50vh;
    min-width: 175px;
    min-height: 250px;
  }
`;

const Ment = styled.div`
  font-size: 5.5rem;
  font-weight: 500;

  & > span {
    font-size: 5.5rem;
    color: #62779e;
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
  }
`;

export default Account;
