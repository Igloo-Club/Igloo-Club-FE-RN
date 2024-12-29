import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from './axiosInstance';

const getRefreshToken = async () => {
  console.log('리프레쉬 받기');
  try {
    const {data} = await instance.post('api/auth/refresh');
    console.log(data);
    const {accessToken} = data;

    await AsyncStorage.setItem('ACCESS_TOKEN', accessToken);

    return true;
  } catch (err) {
    console.log('리프레쉬 받기 실패', err);
    await AsyncStorage.clear();
    return false;
  }
};

export default getRefreshToken;
