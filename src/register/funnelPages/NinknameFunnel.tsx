import React, {useState} from 'react';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import RegisterLayout from '../components/RegisterLayout';
import {View} from 'react-native';
import CustomTextInput from '../components/TextInput';

const NinknameFunnel = ({
  step,
  onNext,
  onPrev,
  handleChange,
}: IregisterFunnulProps) => {
  const [nickname, setNickname] = useState('');
  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={async () => {
        await handleChange?.('nickname', nickname);
        onNext();
      }}
      isBtnActive={nickname.length > 0}>
      <View>
        <CustomTextInput
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
