import React, {useEffect, useState} from 'react';
import {Platform, Alert, TouchableOpacity, View, Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import axios from 'axios';
import instance from '../apis/axiosInstance';

const PushNoti = () => {
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  useEffect(() => {
    getFcmToken();
    subscribe();
    return () => {
      subscribe();
    };
  }, [messaging]);

  // FCM 토큰 가져오기
  const getFcmToken = async () => {
    if (Platform.OS !== 'android' || !messaging) return;

    try {
      const token = await messaging().getToken();
      if (token) {
        setFcmToken(token);
        console.log('✅ FCM 토큰:', token);
      }
    } catch (err) {
      console.log('❌ FCM 토큰 조회 실패:', err);
    }
  };

  // FCM 메시지 수신 핸들러
  const onMessageReceived = async (message: any) => {
    if (Platform.OS !== 'android' || !notifee) return;

    console.log('📩 FCM 메시지 수신:', message);

    if (!message.notification) {
      console.warn('⚠️ 알림 메시지가 비어 있습니다.', message);
      return;
    }

    const {title, body} = message.notification;

    console.log('✅ title:', title);
    console.log('✅ body:', body);

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title,
      body,
      android: {
        channelId,
        smallIcon: 'ic_launcher',
      },
    });
  };

  // 푸시 메시지 전송
  const sendPushMessage = async () => {
    if (Platform.OS !== 'android') return;

    if (!fcmToken) {
      Alert.alert(
        'FCM 오류',
        'FCM 토큰이 존재하지 않습니다. 다시 시도해 주세요.',
      );
      return;
    }

    console.log('📤 현재 FCM 토큰:', fcmToken);

    const sendInfo = {
      token: fcmToken,
      title: '테스트 전송합니다.',
      body: '테스트로 전송하는 내용입니다.',
    };

    try {
      const res = await instance.post('/api/send', sendInfo);
      const {result, resultCode} = res.data;
      console.log('✅ 전송 결과:', result, resultCode);
    } catch (error) {
      console.error('❌ 푸시 메시지 전송 실패:', error);
    }
  };

  // useEffect에서 FCM 토큰을 먼저 가져오고 리스너를 등록
  //   useEffect(() => {
  //     if (Platform.OS === 'android' && messaging) {
  //       (async () => {
  //         await getFcmToken(); // 토큰 먼저 가져오기
  //         console.log('[+] FCM 메시지 리스너가 등록되었습니다!');

  //         const unsubscribe = messaging().onMessage(async remoteMessage => {
  //           await onMessageReceived(remoteMessage);
  //         });

  //         return () => {
  //           console.log('[-] FCM 메시지 리스너가 사라졌습니다!');
  //           unsubscribe();
  //         };
  //       })();
  //     }
  //   }, []);

  const subscribe = messaging().onMessage(async remoteMessage => {
    await onMessageReceived(remoteMessage);
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>푸시 알림 테스트</Text>
      <Text>FCM 토큰: {fcmToken ?? '토큰 없음'}</Text>

      {/* 푸시 메시지 전송 버튼 */}
      <TouchableOpacity onPress={sendPushMessage}>
        <Text>푸시 알림 테스트</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PushNoti;
