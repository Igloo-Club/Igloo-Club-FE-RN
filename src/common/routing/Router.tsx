import React, {useEffect, useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../../register';
import DetailProfile from '../../detail/DetailProfile';
import QnA from '../../qna/pages/addQuestion';
import QuestionList from '../../qna/pages/questionList';
import AnswerPage from '../../qna/pages/answerPage';
import IdealType from '../../idealType';
import Login from '../../login';
import KakaoLoginRedirect from '../../login/KakaoLoginLedirect';
import Landing from '../../landing';
import MainPage from '../../main/pages/mainPage';
import NungilList from '../../nungilList/nungilList';
import DetailPage from '../page/detailPage';
import MyPage from '../../mypage';
import {navigationRef} from '../hooks/useNavigationRef';
import ChatRoom from '../../chat/components/ChatRoom/ChatRoom';
import {RootStackParamList} from './routerTypes';
import BottomNavLayout from '../components/BottomNavLayout';
import getAccessToken from '../utils/getAccessToken';
import SplashScreen from 'react-native-splash-screen';
import instance from '../apis/axiosInstance';
import NEXT_PROGRESS from '../../login/constants/NEXT_PROGRESS';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export const Router = () => {
  const [initialRoute, setInitialRoute] = useState<
    keyof RootStackParamList | null
  >(null);
  const [initialRegisterParams, setInitialRegisterParams] = useState<number>(0);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await getAccessToken(); // 토큰 확인
        if (token) {
          console.log('토큰이 존재합니다:', token);
          return 'BottomNavLayout'; // 토큰이 있을 경우 MainPage로 설정
        } else {
          console.log('토큰이 존재하지 않습니다.');
          return 'Login'; // 토큰이 없을 경우 Login으로 설정
        }
      } catch (error) {
        console.error('토큰 확인 중 오류 발생:', error);
        return 'Login'; // 오류 발생 시 기본값 설정
      }
    };

    const getUserData = async () => {
      try {
        const {data} = await instance.get('api/progress');
        console.log(data.nextProgress);
        if (data.isProfileRegistered) {
          return 'BottomNavLayout';
        } else {
          switch (data.nextProgress) {
            case NEXT_PROGRESS[0]:
              setInitialRegisterParams(0);
              return 'Register';
            case NEXT_PROGRESS[2]:
              setInitialRegisterParams(2);
              return 'Register';
            case NEXT_PROGRESS[3]:
              return 'DetailProfile';
            case NEXT_PROGRESS[4]:
              return 'BottomNavLayout';
            default:
              return 'Register';
          }
        }
      } catch (err) {
        console.log('사용자 데이터 불러오기 오류:', err);
        return 'Login'; // 오류 발생 시 기본값 설정
      }
    };

    const initialize = async () => {
      try {
        const userDataRoute = await getUserData(); // 사용자 데이터 확인
        if (userDataRoute === 'Login') {
          setInitialRoute('Login');
          return;
        }
        const tokenRoute = await checkToken(); // 토큰 확인

        // 둘 중 하나라도 Register나 Login일 경우 해당 페이지로 이동
        if (userDataRoute === 'Register') {
          setInitialRoute('Register');
        } else if (tokenRoute === 'Login') {
          setInitialRoute('Login');
        } else {
          setInitialRoute('BottomNavLayout'); // 그 외의 경우 MainPage로 이동
        }
      } catch (error) {
        console.error('초기화 중 오류 발생:', error);
      } finally {
        // SplashScreen 숨기기
        SplashScreen.hide();
      }
    };

    initialize();
  }, []);

  if (!initialRoute) {
    return null;
  }

  return (
    <NavigationContainer theme={navTheme} ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'none'}}
        initialRouteName={initialRoute}>
        <Stack.Screen name="BottomNavLayout" component={BottomNavLayout} />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{title: 'landing'}}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{title: '메인 페이지'}}
        />
        <Stack.Screen
          name="DetailPage"
          component={DetailPage}
          options={{title: '상세 페이지'}}
        />
        <Stack.Screen
          name="NungilList"
          component={NungilList}
          options={{title: '눈길 리스트'}}
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
          initialParams={{stepIndex: initialRegisterParams}}
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
        <Stack.Screen
          name="MyPage"
          component={MyPage}
          options={{title: '마이페이지'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
