import React from 'react';
import styled from 'styled-components';
import mainElephant from '../../assets/image/mainElephant.png';
const FallbackLoading = () => {
  return (
    <FallbackBox className="loading">
      <Spinner className="spinner">
        <img src={mainElephant}></img>
      </Spinner>
      <p>조금만 기다려주세요...</p>
    </FallbackBox>
  );
};

export default FallbackLoading;

const FallbackBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  flex-direction: column;

  & > p {
    font-size: 3rem;
  }
`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  min-height: 180px;
  border-radius: 50%;
  animation: spin 0.8s linear infinite alternate;

  & > img {
    width: 120px;
    height: 120px;
  }

  @keyframes spin {
    0% {
      transform: translateX(-70px) rotate(-15deg);
    }
    25% {
      transform: translateX(-30px) rotate(0deg);
    }
    50% {
      transform: translateX(10px) rotate(15deg);
    }
    75% {
      transform: translateX(50px) rotate(0deg);
    }
    100% {
      transform: translateX(70px) rotate(-15deg);
    }
  }
`;
