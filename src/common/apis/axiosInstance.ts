// axiosInstance.ts
import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import getRefreshToken from './getRefreshToken';
import {VITE_BASE_URL} from '@env';
import getAccessToken from '../utils/getAccessToken';

export const signInInstance = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const instance = axios.create({
  baseURL: VITE_BASE_URL,
});

export default instance;

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const ACCESS_TOKEN =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzQyNTIwMjIsImV4cCI6MTczNDI1MzgyMiwic3ViIjoiMSIsImlkIjoxfQ.ZmAFAOW4TajYULKHUu9P4yT_zVnaD3c7GT_AiobJiNA';

    if (config.headers && ACCESS_TOKEN !== null) {
      const token = JSON.parse(ACCESS_TOKEN);
      config.headers.Authorization = `Bearer ${token}`;
      console.log(token);
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// Response 인터셉터 설정
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: any) => {
    // 401 에러 처리
    if (error.response?.status === 401) {
      console.log('401 error');
      await getRefreshToken();
    }

    return Promise.reject(error);
  },
);
