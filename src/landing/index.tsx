import React from 'react';
import {Button} from 'react-native';

const Landing = ({navigation}: any) => {
  return (
    <Button
      title="카카오로그인"
      onPress={() => {
        navigation.navigate('Login');
      }}
    />
  );
};

export default Landing;
