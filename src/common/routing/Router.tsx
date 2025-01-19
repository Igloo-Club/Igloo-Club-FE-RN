import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../../register';
import DetailProfile from '../../detail/DetailProfile';
import QnA from '../../qna/pages/addQuestion';
import QuestionList from '../../qna/pages/questionList';
import AnswerPage from '../../qna/pages/answerPage';
import IdealType from '../../idealType';
// import Login from '../../login';
// import KakaoLoginRedirect from '../../login/KakaoLoginLedirect';
// import Landing from '../../landing';
import MainPage from '../../main/pages/mainPage';
import DetailPage from '../page/detailPage';
import NungilList from '../../nungilList/nungilList';
import {navigationRef} from '../hooks/useNavigationRef';
// import Chat from '../../chat';
import ChatRoom from '../../chat/components/ChatRoom/ChatRoom';
import {RootStackParamList} from './routerTypes';
import BottomNavLayout from '../components/BottomNavLayout';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export const Router = () => {
  return (
    <NavigationContainer theme={navTheme} ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen name="BottomNavLayout" component={BottomNavLayout} />
        {/* <Stack.Screen
          name="Landing"
          component={Landing}
          options={{title: 'landing'}}
        /> */}
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{title: '메인 페이지'}}
        />
        <Stack.Screen
          name="NungilList"
          component={NungilList}
          options={{title: '눈길 리스트'}}
        />
        <Stack.Screen
          name="DetailPage"
          component={DetailPage}
          options={{title: '상세 페이지'}}
        />
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{title: '로그인'}}
        /> */}
        {/* <Stack.Screen
          name="KakaoLoginRedirect"
          component={KakaoLoginRedirect}
        /> */}
        <Stack.Screen
          name="QnA"
          component={QnA}
          options={{title: '추가 답변 등록'}}
        />
        <Stack.Screen
          name="DetailProfile"
          component={DetailProfile}
          options={{title: '상세 프로필 등록'}}
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
          name="IdealType"
          component={IdealType}
          options={{title: '이상형 등록'}}
        />
        <Stack.Screen
          name="QuestionList"
          component={QuestionList}
          options={{title: '질문 리스트'}}
        />
        {/* <Stack.Screen name="Chat" component={Chat} options={{title: '채팅'}} /> */}
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
          options={{title: '채팅룸'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
