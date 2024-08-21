import React from 'react';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import RegisterLayout from '../components/RegisterLayout';
import {View} from 'react-native';

const SelectAreaFunnel = ({step, onNext, onPrev}: IregisterFunnulProps) => {
  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={onNext}
      isBtnActive={true}>
      <View />
    </RegisterLayout>
  );
};

export default SelectAreaFunnel;
