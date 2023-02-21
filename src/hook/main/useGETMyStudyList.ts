import { QueryKeys, restFetcher } from '@/queryClient';
import { useQuery } from '@tanstack/react-query';

export const useGetMyStudyList = (myStudyPage: number) => {
  return useQuery(
    [QueryKeys.MYSTUDY],
    async () =>
      await restFetcher({
        method: 'GET',
        path: `/api/v1/studies/user/${myStudyPage}?size=4`,
      }),
    {
      select(data) {
        return data.data;
      },
      staleTime: 0, // staleTime을 2초로 설정하여 fetch된 데이터는 2초간 fresh 상태
      cacheTime: 0,
    },
  );
};
