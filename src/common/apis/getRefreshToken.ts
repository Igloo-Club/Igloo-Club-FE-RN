import AsyncStorage from '@react-native-async-storage/async-storage';
import {signInInstance} from './axiosInstance';

const getRefreshToken = async (navigation: any) => {
  console.log('리프레쉬 받기');
  try {
    const {data} = await signInInstance.post('api/auth/refresh');
    console.log(data);
    const {accessToken} = data;

    await AsyncStorage.setItem('ACCESS_TOKEN', accessToken);

    return true;
  } catch (err) {
    console.log('리프레쉬 받기 실패', err);
    await AsyncStorage.clear();
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}], // Login은 네비게이션에 등록된 로그인 페이지 이름
    });
    return false;
  }
};

export default getRefreshToken;
