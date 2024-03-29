import { useQuery, QueryClient } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';

type AnyOBJ = { [key: string]: any };

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000 * 60,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();

const BASE_URL = 'http://localhost:8080';

export const restFetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  body?: AnyOBJ;
  params?: AnyOBJ;
}) => {
  try {
    let url = `${BASE_URL}${path}`;
    const axiosConfig: AxiosRequestConfig = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL,
      },
      withCredentials: true,
    };
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += '?' + searchParams.toString();
    }
    if (body) axiosConfig.data = body;

    const res = await axios(url, axiosConfig);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const QueryKeys = {
  STUDYROOM: 'STUDYROOM',
  PAGE: 'PAGE',
  COMMENT: 'COOMENT',
  DUPLICATION: 'DUPLICATION',
  MYSTUDY: 'MYSTUDY',
  LOGOUT: 'LOGOUT',
};
