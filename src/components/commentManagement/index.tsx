import { QueryKeys, restFetcher } from '@/queryClient';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Comment, { CommentComponent } from '../comment';

const CommentManagement = ({ id, studyName, weekNumber }: any) => {
  const { data: comments, refetch } = useQuery(
    [QueryKeys.COMMENT, id, weekNumber],
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
      staleTime: 0,
      cacheTime: 0,
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
    mutate(commentInform, { onSuccess: (data) => refetch() });
  };

  return (
    <CommentManagementPage>
      <InputBox>
        <input onChange={chatWrite} placeholder="인증하기.."></input>
      </InputBox>
      <Comments>
        <CommentComponent>
          <UserImage></UserImage>
          <div>
            <UserName>
              <h1>관리자</h1>
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
            <CommentInform>안녕하세요</CommentInform>
          </div>
        </CommentComponent>
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
`;

const PreBox = styled.div`
  display: flex;
`;

const UserImage = styled.div`
  width: 7rem;
  height: 7rem;
  background: #d9d9d9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 1.2rem;
`;

const CommentInform = styled.div``;

const UserName = styled.div`
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

const UpIcon = styled.div`
  &:hover {
    transform: scale(1.25);
  }
  margin: 0 0.5rem;
`;

const DownIcon = styled(UpIcon)``;
