import AsyncStorage from '@react-native-async-storage/async-storage';

const getAccessToken = async () => {
  const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN');
  return ACCESS_TOKEN;
};

export default getAccessToken;
