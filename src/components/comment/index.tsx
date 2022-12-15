import React from 'react';
import styled from 'styled-components';

const CommentComponent = styled.div`
  display: flex;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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

  & div:nth-child(1) {
    width: 7rem;
    height: 7rem;
    background: #d9d9d9;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 1.2rem;
  }

  & div:nth-child(2) {
    width: 85%;
    & h1 {
      font-weight: 700;
      font-size: 1.7rem;
      line-height: 2rem;
      margin: 1rem 0;
    }

    & div {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;

const Comment = () => {
  return (
    <CommentComponent>
      <div>프로필사진</div>
      <div>
        <h1>관리자</h1>
        <div>
          [공지] 2회차는 토비의 스프링 vol.1 2장 공부해오고 블로그 글
          작성하기입니다! 댓글에 블로그 글 링크 달아주시면 되겠습니다. 이번주도
          열심히 해봅시다!
        </div>
      </div>
    </CommentComponent>
  );
};

export default Comment;
