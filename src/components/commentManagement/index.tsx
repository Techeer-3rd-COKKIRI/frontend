import { QueryKeys, restFetcher } from '@/queryClient';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import styled from 'styled-components';
import Comment from '../comment';

const CommentManagement = ({ id, studyName, weekNumber }: any) => {
  const { data: comments } = useQuery(
    [QueryKeys.COMMENT, id],
    () =>
      restFetcher({
        method: 'GET',
        path: `/api/v1/comments/${id}`,
        params: { studyWeek: weekNumber },
      }),
    {
      select(data) {
        return data.data;
      },
    },
  );
  const { mutate } = useMutation((commentInform: any) =>
    restFetcher({
      method: 'POST',
      path: '/api/v1/comments',
      body: commentInform,
    }),
  );
  const [chat, setChat] = useState('');
  const chatWrite = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChat(e.target.value);
  };

  const sendComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    const commentInform: any = {
      content: chat,
      studyId: id,
      studyWeek: weekNumber,
    };
    console.log(commentInform);
    mutate(commentInform);
  };

  return (
    <CommentManagementPage>
      <InputBox>
        <input onChange={chatWrite} placeholder="인증하기.."></input>
        <button onClick={sendComment}>게시</button>
      </InputBox>
      <Comments>
        {comments?.map((comment: any, index: number) => {
          console.log(comment);
          return <Comment key={index} commentInform={comment} />;
        })}
      </Comments>
    </CommentManagementPage>
  );
};

export default CommentManagement;

const CommentManagementPage = styled.div``;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  & input {
    box-sizing: border-box;
    max-width: 1200px;
    width: 100%;
    height: 7rem;
    background: #f2f2f2;
    border-radius: 3rem;
    border: none;
    padding-left: 3rem;
    margin: 1.3rem 0;
    min-width: 100%;
  }

  & button {
    min-width: 12rem;
    height: 5rem;
    position: relative;
    background: #e2e2e2;
    border-radius: 30px;
    border: none;
    left: -13rem;
    top: 2.2rem;
  }
`;
