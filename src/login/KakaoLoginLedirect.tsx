import React from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {VITE_BASE_URL} from '@env';
import styled from '@emotion/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KakaoLoginRedirect = ({navigation, route}: any) => {
  // params로 인가 코드 넘어옴
  const _code = route.params.token;
  console.log(`👀 ${_code}`);

  useEffect(() => {
    // 인가 코드가 정상적으로 넘어왔다면 백엔드 서버로 전달
    if (_code) {
      getAccessToken();
    }
  }, [_code]);

  const getAccessToken = async () => {
    try {
      const {data} = await axios.post(`${VITE_BASE_URL}/api/auth/kakao`, {
        code: _code,
      });
      const stringValue = JSON.stringify(data.accessToken);
      console.log(stringValue);
      await AsyncStorage.setItem('ACCESS_TOKEN', stringValue);
      navigation.navigate('Home');
    } catch (err) {
      console.log('🥲', err);
    }
  };

  return (
    <StContainer>
      <Text>Loading...</Text>
    </StContainer>
  );
};

export default KakaoLoginRedirect;

const StContainer = styled(SafeAreaView)`
  flex: 1;
`;
