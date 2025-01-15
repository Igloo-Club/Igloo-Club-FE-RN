import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useCallback} from 'react';
import MainPage from '../../main/pages/mainPage';
import Chat from '../../chat';
import BottomNavIcon from './bottomNav/BottomNavIcon';

const Tab = createBottomTabNavigator();
const BottomNavLayout = () => {
  const renderIcon = useCallback(
    (name: string, focused: boolean) => {
      return <BottomNavIcon name={name} focused={focused} />;
    },
    [], // 의존성 배열을 빈 배열로 두어 함수가 재정의되지 않도록 함
  );
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={{
        tabBarActiveTintColor: '#FA7268',
        tabBarInactiveTintColor: '#C2C2C2',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {height: 70},
      }}>
      <Tab.Screen
        name="MainPage"
        component={MainPage}
        options={{
          tabBarIcon: ({focused}) => renderIcon('MainPage', focused),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => renderIcon('Chat', focused),
        }}
      />
      <Tab.Screen
        name="Matching"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => renderIcon('Matching', focused),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => renderIcon('MyPage', focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavLayout;
