import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import getRefreshToken from './getRefreshToken';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Linking} from 'react-native';

export const signInInstance = axios.create({
  baseURL: process.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const instance = axios.create({
  baseURL: process.env.VITE_BASE_URL,
});

export default instance;

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN');

    if (!ACCESS_TOKEN) {
      Linking.openURL('/추후등록할카카오로그인페이지');
      return config;
    }

    if (config.headers) {
      config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const isRefreshSuccessful = await getRefreshToken();

      if (isRefreshSuccessful) {
        return instance(originalRequest);
      }
    }

    return Promise.reject(error);
  },
);
