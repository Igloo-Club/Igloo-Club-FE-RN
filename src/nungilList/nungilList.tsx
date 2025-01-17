import React from 'react';
import styled from '@emotion/native';
import {SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ReceivedNungil from './components/ReceivedNungil';
import SendNungil from './components/SendNungil';
import SoonNungil from './components/SoonNungil';

const Tab = createMaterialTopTabNavigator();

function NungilList() {
  return (
    <Tab.Navigator initialRouteName="Received">
      <Tab.Screen name="Received" component={ReceivedNungil} />
      <Tab.Screen name="Send" component={SendNungil} />
      <Tab.Screen name="Soon" component={SoonNungil} />
    </Tab.Navigator>
  );
}

export default NungilList;

const Container = styled(SafeAreaView)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
`;
