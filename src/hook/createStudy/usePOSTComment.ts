import { sendChatType } from '@/components/commentManagement';
import { restFetcher } from '@/queryClient';
import { useMutation } from '@tanstack/react-query';

export const usePostComment = () => {
  return useMutation((commentInform: sendChatType) =>
    restFetcher({
      method: 'POST',
      path: '/api/v1/comments',
      body: commentInform,
    }),
  );
};
