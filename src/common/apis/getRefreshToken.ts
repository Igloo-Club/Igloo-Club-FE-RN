import {signInInstance} from './axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Linking} from 'react-native';

const getRefreshToken = async () => {
  try {
    const {data} = await signInInstance.post('api/auth/refresh');
    console.log('💖', data);

    const {accessToken} = data;

    await AsyncStorage.setItem('ACCESS_TOKEN', accessToken);

    return true;
  } catch {
    await AsyncStorage.clear();

    Linking.openURL('Login');

    return false;
  }
};

export default getRefreshToken;
