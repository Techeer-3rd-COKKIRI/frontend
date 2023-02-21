import { restFetcher } from '@/queryClient';
import { CreateUser } from '@/type/user';
import { useMutation } from '@tanstack/react-query';

export const usePostSignUp = () => {
  return useMutation((user: CreateUser) =>
    restFetcher({ method: 'POST', path: '/api/v1/users', body: user }),
  );
};
