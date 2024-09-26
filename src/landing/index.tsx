import React, {useEffect, useState} from 'react';
import {Button, Text, TouchableHighlight, View, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../common/apis/axiosInstance';

// ios 푸시 빌드 문제 -> 일단 android에서만 import 하도록
let messaging;
let notifee;
if (Platform.OS === 'android') {
  messaging = require('@react-native-firebase/messaging').default;
  notifee = require('@notifee/react-native').default;
}

const Landing = ({navigation}: any) => {
  const [fcmToken, setFcmToken] = useState('');

  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN');
    if (ACCESS_TOKEN) {
      navigation.navigate('Home');
    }
  };

  // 푸시 알림 테스트 코드 ---

  // 안드로이드에서만 푸시 알림 코드 실행
  useEffect(() => {
    if (Platform.OS === 'android' && messaging) {
      getFcmToken();
      console.log('[+] FCM 메시지 리스너가 등록되었습니다!');
      const unsubscribe = messaging().onMessage(
        async (remoteMessage: any) => await onMessageReceived(remoteMessage),
      );

      return () => {
        console.log('[-] FCM 메시지 리스너가 사라졌습니다!');
        unsubscribe();
      };
    }
  }, []);

  // FCM 토큰 받기 (안드로이드만)
  const getFcmToken = async () => {
    if (Platform.OS === 'android' && messaging) {
      const fcmTokenInfo = await messaging.getToken();
      setFcmToken(fcmTokenInfo);
      console.log('FCM 토큰 :', fcmTokenInfo);
    }
  };

  // FCM 메시지 수신 리스너 등록 (안드로이드만)
  const onMessageReceived = async (message: any) => {
    if (Platform.OS === 'android' && notifee) {
      console.log('title :: ', message.notification!.title);
      console.log('body :: ', message.notification!.body);

      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });

      await notifee.displayNotification({
        title: message.notification!.title,
        body: message.notification!.body,
        android: {
          channelId: channelId,
          smallIcon: 'ic_launcher',
        },
      });
    }
  };

  // 푸시 메시지 전송 (안드로이드만)
  const sendPushMessage = async () => {
    if (Platform.OS === 'android') {
      console.log('현재 FCM 토큰: ', fcmToken);

      const sendInfo = {
        token: fcmToken,
        title: '테스트 전송합니다.',
        body: '테스트로 전송하는 내용입니다.',
      };

      try {
        const res = await instance.post('/api/send', sendInfo);
        const {result, resultCode} = res.data;
        console.log(result, resultCode);
      } catch (error) {
        console.log(`에러가 발생하였습니다: ${error}`);
      }
    }
  };

  return (
    <>
      <Button
        title="카카오 로그인"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <View>
        {Platform.OS === 'android' && (
          <TouchableHighlight onPress={sendPushMessage}>
            <Text>알람 전송</Text>
          </TouchableHighlight>
        )}
      </View>
    </>
  );
};

export default Landing;
