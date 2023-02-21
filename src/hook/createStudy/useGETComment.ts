import { QueryKeys, restFetcher } from '@/queryClient';
import { useQuery } from '@tanstack/react-query';

export const useGetComment = (id: number, weekNumber: number) => {
  return useQuery(
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
};
