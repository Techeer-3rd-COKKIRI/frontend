import { QueryKeys, restFetcher } from '@/queryClient';
import { CreateUser } from '@/type/user';
import { useMutation, useQuery } from '@tanstack/react-query';

export const usePostSignUp = () => {
  return useMutation((user: CreateUser) =>
    restFetcher({ method: 'POST', path: '/api/v1/users', body: user }),
  );
};

export const useGetDuplication = (
  username: string,
  setDuplication: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  return useQuery(
    [QueryKeys.DUPLICATION],
    () =>
      restFetcher({
        method: 'GET',
        path: `/api/v1/users/duplicated/${username}`,
      }),
    {
      enabled: false, //기본동작 비활성화
      onSuccess: (data) => {
        if (!data.data) {
          alert('사용할 수 있는 username입니다 !');
          setDuplication(true);
        } else {
          alert('username이 중복되었습니다 !');
          setDuplication(false);
        }
      },
    },
  );
};
