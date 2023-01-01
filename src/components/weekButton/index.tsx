import React from 'react';
import styled from 'styled-components';

interface Props {
  figure: number;
}
const WeekButton = ({ figure }: Props) => {
  return <OneWeek>{figure}주차</OneWeek>;
};

export default WeekButton;

const OneWeek = styled.div`
  min-width: 7.5rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #a6a6ff;
  margin: 1rem 0.5rem;

  &:hover {
    background-color: #dedefc;
  }
`;
