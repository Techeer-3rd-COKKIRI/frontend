import React from 'react';
import styled from 'styled-components';
const CommentLoading = () => {
  return <LoadingBox className="loading"></LoadingBox>;
};

export default CommentLoading;

const LoadingBox = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
