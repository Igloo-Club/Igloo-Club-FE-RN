import React from 'react';
import RegisterLayout from '../components/RegisterLayout';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import {View} from 'react-native';

const GenderFunnel = ({step, onNext}: IregisterFunnulProps) => {
  return (
    <RegisterLayout step={step} onBackPress={() => {}} onButtonPress={onNext}>
      <View />
    </RegisterLayout>
  );
};

export default GenderFunnel;
