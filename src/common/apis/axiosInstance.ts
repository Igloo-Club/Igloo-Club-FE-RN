import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import getRefreshToken from './getRefreshToken';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Linking} from 'react-native';
import {VITE_BASE_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';

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
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN');
    const navigation = useNavigation<NavigationProp>();

    if (!ACCESS_TOKEN) {
      navigation.navigate('Login');

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
