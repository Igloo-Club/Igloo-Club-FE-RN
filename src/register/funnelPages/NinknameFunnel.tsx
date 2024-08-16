import React from 'react';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import RegisterLayout from '../components/RegisterLayout';
import {View} from 'react-native';

const NinknameFunnel = ({step, onNext}: IregisterFunnulProps) => {
  return (
    <RegisterLayout step={step} onBackPress={() => {}} onButtonPress={onNext}>
      <View />
    </RegisterLayout>
  );
};

export default NinknameFunnel;
