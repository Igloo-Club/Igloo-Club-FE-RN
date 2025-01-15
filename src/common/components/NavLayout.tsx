import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MainPage from '../../main/pages/mainPage';
import Chat from '../../chat';
import styled from '@emotion/native';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import HomeIcon from './bottomNav/HomeIcon';
import ChatIcon from './bottomNav/ChatIcon';

const Tab = createBottomTabNavigator();
const NavLayout = () => {
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={{
        tabBarActiveTintColor: '#FA7268',
        tabBarInactiveTintColor: '#C2C2C2',
      }}>
      <Tab.Screen
        name="MainPage"
        component={MainPage}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <HomeIcon name="MainPage" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => <HomeIcon name="Chat" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default NavLayout;
