import React from 'react';
import styled from 'styled-components';

const NonStudy = () => {
  return (
    <NonStudyBox>
      <div>
        <h1>아직 진행중인 스터디가 없습니다 !</h1>
        <p>
          스터디에 <span>가입</span> 또는 <span>개설</span> 해주세요 !
        </p>
      </div>
    </NonStudyBox>
  );
};

export default NonStudy;

const NonStudyBox = styled.div`
  width: 60%;
  min-width: 500px;
  margin-top: 2rem;
  & > div {
    display: flex;
    flex-direction: column;
    height: 12.5rem;
    margin: 5px;
    border-radius: 0.5rem;

    & > h1 {
      font-size: 2.5rem;
    }
    & > p {
      font-size: 1.5rem;
      opacity: 0.5;
      padding-top: 1rem;
      & > span {
        opacity: 1;
        font-size: 1.5rem;
        color: red;
        font-weight: 700;
      }
    }
    cursor: pointer;
  }
`;
