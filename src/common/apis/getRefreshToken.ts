import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {signInInstance} from './axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootStackParamList} from './types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const getRefreshToken = async (navigation: NavigationProp) => {
  try {
    const {data} = await signInInstance.post('api/auth/refresh');
    console.log('💖', data);

    const {accessToken} = data;

    await AsyncStorage.setItem('ACCESS_TOKEN', accessToken);

    return true;
  } catch {
    await AsyncStorage.clear();
    navigation.navigate('Login');

    return false;
  }
};

export default getRefreshToken;
