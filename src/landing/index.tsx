import React, {useEffect} from 'react';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Landing = ({navigation}: any) => {
  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN');

    if (ACCESS_TOKEN) {
      navigation.navigate('Register');
    }
  };

  return (
    <Button
      title="카카오로그인"
      onPress={() => {
        navigation.navigate('Login');
      }}
    />
  );
};

export default Landing;
