import { QueryKeys, restFetcher } from '@/queryClient';
import { useQuery } from '@tanstack/react-query';

export const useGetStudyList = (page: number) => {
  return useQuery(
    [QueryKeys.PAGE, page],
    async () =>
      await restFetcher({
        method: 'GET',
        path: `/api/v1/studies/page/${page}`,
        params: { size: 20 },
      }),
    {
      select(data) {
        return data.data;
      },
      staleTime: 5000, // staleTime을 2초로 설정하여 fetch된 데이터는 2초간 fresh 상태
      cacheTime: 60 * 1000,
    },
  );
};
