import { QueryKeys, restFetcher } from '@/queryClient';
import { useQuery } from '@tanstack/react-query';

export const useGetLogout = () => {
  return useQuery(
    [QueryKeys.LOGOUT],
    () =>
      restFetcher({
        method: 'GET',
        path: '/api/v1/users/logout',
      }),
    {
      enabled: false,
      onSuccess: (data) => {
        location.replace('/');
        window.localStorage.clear();
      },
    },
  );
};
