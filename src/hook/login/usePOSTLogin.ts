import { restFetcher } from '@/queryClient';
import { UserInform } from '@/type/user';
import { useMutation } from '@tanstack/react-query';

export const usePostLogin = () => {
  return useMutation((user: UserInform) =>
    restFetcher({ method: 'POST', path: '/api/v1/users/login', body: user }),
  );
};
