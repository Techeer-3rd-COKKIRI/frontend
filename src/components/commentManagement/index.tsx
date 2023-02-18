import { QueryKeys, restFetcher } from '@/queryClient';
import { studyListType } from '@/type/studyList';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Comment, {
  CommentComponent,
  CommentInform,
  DownIcon,
  UpIcon,
  UserImage,
  UserName,
} from '../comment';
import CommentLoading from '../loading';

interface commentProps extends studyListType {
  weekNumber: number;
}

interface sendChatType {
  content: string;
  studyId: number;
  studyWeek: number;
}

const CommentManagement = ({
  id,
  studyName,
  currentUserCount,
  startDate,
  finishDate,
  introduction,
  userLimit,
  weekNumber,
}: commentProps) => {
  const {
    data: comments,
    refetch,
    isLoading,
  } = useQuery(
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
  const { mutate } = useMutation((commentInform: sendChatType) =>
    restFetcher({
      method: 'POST',
      path: '/api/v1/comments',
      body: commentInform,
    }),
  );

  const [chat, setChat] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const chatWrite = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChat(e.currentTarget.value);
  };

  const handleChat = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.nativeEvent.isComposing === false) {
        sendComment();
        setChat('');
        if (inputRef.current) inputRef.current.value = '';
      }
    }
  };
  const sendComment = () => {
    const commentInform: sendChatType = {
      content: chat,
      studyId: id,
      studyWeek: weekNumber,
    };
    return mutate(commentInform, { onSuccess: () => refetch() });
  };

  return (
    <CommentManagementPage>
      <InputBox>
        <input
          ref={inputRef}
          onChange={chatWrite}
          onKeyDown={handleChat}
          placeholder="인증하기.."
        ></input>
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
        {isLoading ? (
          <CommentLoading />
        ) : (
          <>
            {comments?.map((comment: any, index: number) => {
              return <Comment key={index} commentInform={comment} />;
            })}
          </>
        )}
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
