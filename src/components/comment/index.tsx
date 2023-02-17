import React from 'react';
import styled from 'styled-components';

const Comment = ({ commentInform }: any) => {
  return (
    <CommentComponent>
      <UserImage></UserImage>
      <div>
        <UserName>
          <h1>{commentInform.userCommentInfo.userName}</h1>
          <div>
            <span>작성 일자 : 22.11.19 22:45</span>
            <span>
              <UpIcon>👍</UpIcon>1
            </span>
            <span>
              <DownIcon>👎</DownIcon>0
            </span>
          </div>
        </UserName>
        <CommentInform>{commentInform.content}</CommentInform>
      </div>
    </CommentComponent>
  );
};

export default Comment;

export const CommentComponent = styled.div`
  display: flex;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  min-height: 12rem;
  background: #e9edf7;
  border: 1px solid #000000;
  border-radius: 3rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  color: #000000;
  padding-top: 1.3rem;
  padding-left: 2.3rem;
  padding-bottom: 3.6rem;
  margin-bottom: 2.2rem;
  border: none;

  & > div:nth-child(1) {
    width: 7rem;
    height: 7rem;
    background: #d9d9d9;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 1.2rem;
  }

  & > div:nth-child(2) {
    width: 85%;
    & h1 {
      font-weight: 700;
      font-size: 1.7rem;
      line-height: 2rem;
      margin: 0.3rem 0;
    }

    & div {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    & span {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;

export const UserImage = styled.div`
  width: 7rem;
  height: 7rem;
  background: #d9d9d9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 1.2rem;
`;

export const CommentInform = styled.div``;

export const UserName = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 2.5rem;
  margin: 0.5rem 0;
  & > div {
    display: flex;
  }

  & > div > span {
    display: flex;
    align-items: center;
    margin: 0.2rem;
  }

  & > div > span:nth-child(1) {
    margin-right: 3rem;
  }
`;

export const UpIcon = styled.div`
  &:hover {
    transform: scale(1.25);
  }
  margin: 0 0.5rem;
`;

export const DownIcon = styled(UpIcon)``;
