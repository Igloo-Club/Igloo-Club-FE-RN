import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import DetailProfile from '../../detail/DetailProfilePage';
import Register from '../../register';
import QnA from '../../qna/pages/addQustion';

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
        {/* <Stack.Screen
          name="DetailProfile"
          component={DetailProfile}
          options={{title: '상세 프로필 등록'}}
        /> */}
        <Stack.Screen
          name="Regitser"
          component={Register}
          options={{title: '필수 프로필 등록'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="QnA"
          component={QnA}
          options={{title: '추가 답변 등록'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
