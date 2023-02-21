import { restFetcher } from '@/queryClient';
import { useMutation } from '@tanstack/react-query';

export const usePostRegistration = () => {
  return useMutation((formData: any) =>
    restFetcher({ method: 'POST', path: '/api/v1/studies', body: formData }),
  );
};
