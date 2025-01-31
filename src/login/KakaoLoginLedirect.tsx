import React from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {VITE_BASE_URL} from '@env';
import styled from '@emotion/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NEXT_PROGRESS from './constants/NEXT_PROGRESS';

const KakaoLoginRedirect = ({navigation, route}: any) => {
  // params로 인가 코드 넘어옴
  const _code = route.params.token;
  console.log(`👀 ${_code}`);

  useEffect(() => {
    // 인가 코드가 정상적으로 넘어왔다면 백엔드 서버로 전달
    const getAccessToken = async () => {
      try {
        const {data} = await axios.post(`${VITE_BASE_URL}/api/auth/kakao`, {
          code: _code,
        });
        const stringValue = JSON.stringify(data.accessToken);
        console.log(stringValue);
        await AsyncStorage.setItem('ACCESS_TOKEN', stringValue);
        if (data.isProfileRegistered) {
          navigation.navigate('BottomNavLayout');
        } else {
          switch (data.nextProgress) {
            case NEXT_PROGRESS[3]:
              navigation.navigate('DetailProfile');
              break;
            case NEXT_PROGRESS[4]:
              navigation.navigate('BottomNavLayout');
              break;
            default:
              navigation.navigate('Register');
              break;
          }
        }
      } catch (err) {
        console.log('🥲', err);
      }
    };

    if (_code) {
      getAccessToken();
    }
  }, [navigation, _code]);

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
