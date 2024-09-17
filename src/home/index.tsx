import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = ({navigation}: any) => {
  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN');

    if (!ACCESS_TOKEN) {
      navigation.navigate('Login');
    }
  };
  return (
    <SafeAreaView>
      <Button
        title="필수 프로필 등록"
        onPress={() => navigation.navigate('Register')}
      />
      <Text>페이지 이동</Text>
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
    </SafeAreaView>
  );
};

export default Home;
