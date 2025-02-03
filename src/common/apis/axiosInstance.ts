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
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const instance = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    //const ACCESS_TOKEN =
    //  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzgzMTY5MzQsImV4cCI6MTczODMxODczNCwic3ViIjoiMyIsImlkIjozfQ.V_GjTpMzbiGs-_mMypf6ewLrrpCrd8sZQrhoW7aZgTU';
    const ACCESS_TOKEN = await getAccessToken();

    if (config.headers && ACCESS_TOKEN !== null) {
      const token = JSON.parse(ACCESS_TOKEN); //-> [SyntaxError: JSON Parse error: Unexpected character: e] 에러 발생으로 지워둠
      config.headers.Authorization = `Bearer ${token}`;
      console.log(ACCESS_TOKEN);
    }
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
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
