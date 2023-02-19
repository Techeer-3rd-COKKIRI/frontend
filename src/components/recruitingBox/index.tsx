import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RecruitingBox = () => {
  const navigator = useNavigate();
  return (
    <Recruiting>
      <Application>참여 신청</Application>
      <Back onClick={() => navigator(-1)}>Back</Back>
    </Recruiting>
  );
};

export default RecruitingBox;

const Recruiting = styled.div``;

const Application = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(50, 50, 71, 0.08))
    drop-shadow(0px 4px 8px rgba(50, 50, 71, 0.06));
  background: #6979f8;
  border-radius: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.2rem;

  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;

  &:hover {
    scale: 1.02;
  }
`;

const Back = styled(Application)`
  color: #999999;
  background: #e4e4e4;
  margin-bottom: 15rem;
  margin-top: 2.5rem;
`;
