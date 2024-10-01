// axiosInstance.ts
import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import getRefreshToken from './getRefreshToken';
import {VITE_BASE_URL} from '@env';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import getAccessToken from '../utils/getAccessToken';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

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
    const ACCESS_TOKEN = await getAccessToken();

    if (config.headers && ACCESS_TOKEN !== null) {
      const token = JSON.parse(ACCESS_TOKEN);
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// Response 인터셉터 설정
export const setAxiosInterceptors = (navigation: NavigationProp) => {
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: any) => {
      console.log('@', error);
      // 401 에러 처리
      if (error.response?.status === 401) {
        await getRefreshToken(navigation);
      }

      return Promise.reject(error);
    },
  );
};
