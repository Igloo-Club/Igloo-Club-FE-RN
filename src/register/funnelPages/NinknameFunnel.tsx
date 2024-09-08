import React, {useState} from 'react';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import RegisterLayout from '../components/RegisterLayout';
import {View} from 'react-native';
import CoustomTextInput from '../components/TextInput';

const NinknameFunnel = ({step, onNext, onPrev}: IregisterFunnulProps) => {
  const [nickname, setNickname] = useState('');
  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={onNext}
      isBtnActive={nickname.length > 0}>
      <View>
        <CoustomTextInput
          label="닉네임"
          placeholder="닉네임 입력"
          value={nickname}
          onChangeText={setNickname}
          keyboardType="default"
        />
      </View>
    </RegisterLayout>
  );
};

export default NinknameFunnel;
