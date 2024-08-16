import {signInInstance} from './axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Linking} from 'react-native';

const getRefreshToken = async () => {
  try {
    const res = await signInInstance.post('api/auth/refresh');

    const {accessToken} = res.data;

    await AsyncStorage.setItem('ACCESS_TOKEN', accessToken);

    return true;
  } catch {
    await AsyncStorage.clear();

    Linking.openURL('/추후생성될카카오로그인페이지');

    return false;
  }
};

export default getRefreshToken;
