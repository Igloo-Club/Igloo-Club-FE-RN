import * as React from 'react';
import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {Router} from './src/common/routing/Router';
import {ThemeProvider} from '@emotion/react';
import {theme} from './src/common/styles/theme';
import {IdProvider} from './src/common/apis/contexts/useIdContext';

const App = () => {
  useEffect(() => {
    requestPermission();
    getFcmToken();

    // 앱이 백그라운드 상태일 때 메시지를 처리할 핸들러 설정
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('[+] Background Message: ', JSON.stringify(remoteMessage));
    });

    // 메시지 수신 구독
    const unsubscribe = subscribe();
    return () => {
      unsubscribe(); // 이벤트 리스너 해제
    };
  }, []);

  // 권한 요청
  const requestPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('[+] Notification Permission granted');
    } else {
      console.warn('[-] Notification Permission denied');
    }
  };

  // FCM 토큰 받기
  const getFcmToken = async () => {
    try {
      const fcmToken = await messaging().getToken();
      console.log('[+] FCM Token :: ', fcmToken);
    } catch (error) {
      console.error('[-] Error getting FCM Token: ', error);
    }
  };

  // 메시지 처리
  const subscribe = () => {
    return messaging().onMessage(async remoteMessage => {
      try {
        console.log('[+] Remote Message ', JSON.stringify(remoteMessage));
      } catch (error) {
        console.error('[-] Error handling remote message: ', error);
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <IdProvider>
        <Router />
      </IdProvider>
    </ThemeProvider>
  );
};

export default App;
