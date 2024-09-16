import React, {useEffect, useState} from 'react';
import {Button, Text, TouchableHighlight, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../common/apis/axiosInstance';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

const Landing = ({navigation}: any) => {
  const [fcmToken, setFcmToken] = useState('');

  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN');

    if (ACCESS_TOKEN) {
      navigation.navigate('Register');
    }
  };

  // 푸시 알림 테스트 코드 ---

  // FCM 토큰 받기
  const getFcmToken = async () => {
    const fcmTokenInfo = await messaging().getToken();
    setFcmToken(fcmTokenInfo);
    console.log('FCM 토큰 :', fcmToken);
  };

  useEffect(() => {
    const requestPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
      } else {
        console.log('Notification permission not granted');
      }
    };

    requestPermission();
  }, []);

  useEffect(() => {
    getFcmToken();
    console.log('[+] FCM 메시지 리스너가 등록되었습니다!');
    const unsubscribe = messaging().onMessage(
      async remoteMessage => await onMessageReceived(remoteMessage),
    ); // 활성 상태 및 포그라운드 상태일때 FCM 메시지 수신

    return () => {
      console.log('[-] FCM 메시지 리스너가 사라졌습니다!');
      unsubscribe();
    };
  }, []);

  // FCM 메시지 수신 리스너 등록
  const onMessageReceived = async (
    message: FirebaseMessagingTypes.RemoteMessage,
  ) => {
    console.log('title :: ', message.notification!.title);
    console.log('body :: ', message.notification!.body);

    // 알림 채널 생성
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    console.log(channelId);
    console.log('알림 표시 시작');
    // 디바이스에 알림 표시
    await notifee.displayNotification({
      title: message.notification!.title,
      body: message.notification!.body,
      android: {
        channelId: channelId,
        smallIcon: 'ic_launcher',
      },
    });
  };

  // 푸시 메시지 전송
  const sendPushMessage = async () => {
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
        <TouchableHighlight onPress={sendPushMessage}>
          <Text>알람 전송</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default Landing;
