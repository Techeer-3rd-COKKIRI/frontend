import React from 'react';
import styled from 'styled-components';
import mainElephant from '../../assets/image/mainElephant.png';
const LoginAlert = () => {
  return (
    <Alert>
      <div>
        <img src={mainElephant}></img>
      </div>
    </Alert>
  );
};

export default LoginAlert;

const Alert = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  width: 300px;
  height: 100px;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25),
    inset 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  & > div :nth-child(1) {
    width: 30%;
    height: 100%;
  }
`;
