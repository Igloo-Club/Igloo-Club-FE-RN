import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import instance from '../common/apis/axiosInstance';

const Home = ({navigation}: any) => {
  useEffect(() => {
    getAccessToken();
    getUser();
  }, []);

  const getAccessToken = async () => {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN');

    if (!ACCESS_TOKEN) {
      navigation.navigate('Landing');
    }
  };

  const getUser = async () => {
    try {
      const {data} = await instance.get('api/member');
    } catch {
      console.log('멤버조회 실패');
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('ACCESS_TOKEN');
    navigation.navigate('Landing');
  };

  return (
    <SafeAreaView>
      <Button
        title="필수 프로필 등록"
        onPress={() => navigation.navigate('Register')}
      />
      <Text>페이지 이동</Text>
      <Button
        title="로그인 하러 가기"
        onPress={() => navigation.navigate('Landing')}
      />
      <Button
        title="상세 프로필 등록"
        onPress={() => navigation.navigate('DetailProfile')}
      />
      <Button
        title="이상형 등록"
        onPress={() => navigation.navigate('IdealType')}
      />
      <Button
        title="질문 리스트"
        onPress={() => navigation.navigate('QuestionList')}
      />
      <Button
        title="추가 답변 등록"
        onPress={() => navigation.navigate('QnA')}
      />
      <Button title="카카오 로그아웃" onPress={logout} />
      <Button title="채팅" onPress={() => navigation.navigate('Chat')} />
    </SafeAreaView>
  );
};

export default Home;
