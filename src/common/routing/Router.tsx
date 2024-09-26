import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import DetailProfile from '../../detail/DetailProfilePage';
import Register from '../../register';
import QnA from '../../qna/pages/addQuestion';
import QuestionList from '../../qna/pages/questionList';
import AnswerPage from '../../qna/pages/answerPage';
import IdealType from '../../idealType';
import Login from '../../login';
import KakaoLoginRedirect from '../../login/KakaoLoginLedirect';
import Landing from '../../landing';

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export const Router = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="landing"
          component={Landing}
          options={{title: 'landing'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: '로그인'}}
        />
        <Stack.Screen
          name="KakaoLoginRedirect"
          component={KakaoLoginRedirect}
        />

        <Stack.Screen
          name="AnswerPage"
          component={AnswerPage}
          options={{title: '답변 작성'}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: '필수 프로필 등록'}}
        />
        <Stack.Screen
          name="DetailProfile"
          component={DetailProfile}
          options={{title: '상세 프로필 등록'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="IdealType"
          component={IdealType}
          options={{title: '이상형 등록'}}
        />
        <Stack.Screen
          name="QnA"
          component={QnA}
          options={{title: '추가 답변 등록'}}
        />
        <Stack.Screen
          name="QuestionList"
          component={QuestionList}
          options={{title: '질문 리스트'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
