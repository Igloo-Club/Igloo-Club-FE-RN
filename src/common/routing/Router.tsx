import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import DetailProfile from '../../detail/DetailProfilePage';
import Register from '../../register';

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
          name="DetailProfile"
          component={DetailProfile}
          options={{title: '상세 프로필 등록'}}
        />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
