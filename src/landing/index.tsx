import React, {useEffect} from 'react';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    <SafeAreaView>
      <Button
        title="카카오로그인"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </SafeAreaView>
  );
};

export default Landing;
