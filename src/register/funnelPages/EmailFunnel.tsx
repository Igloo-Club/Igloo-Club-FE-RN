import React, {useState} from 'react';
import {Image, TextInput, TouchableOpacity} from 'react-native';
import styled from '@emotion/native';

import RegisterLayout from '../components/RegisterLayout';
import deleteBtnIMG from '../assets/deleteBtnIMG.png';
import {IregisterFunnulProps} from '../types/registerFunnelType';

const EmailFunnel = ({step, onNext}: IregisterFunnulProps) => {
  const [email, setEmail] = useState('');

  return (
    <RegisterLayout step={step} onBackPress={() => {}} onButtonPress={onNext}>
      <InputContainer>
        <InputLabel>회사 이메일 주소</InputLabel>
        <Input
          placeholder="이메일 주소 입력"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {/* <IcDelete /> */}
        <InputRemoveBtn
          onPress={() => {
            console.log('버튼 클릭');
          }}>
          <Image source={deleteBtnIMG} style={{width: 17, height: 17}} />
        </InputRemoveBtn>
      </InputContainer>
    </RegisterLayout>
  );
};

export default EmailFunnel;

const InputContainer = styled.View`
  position: relative;
  background-color: #fafafb;
  border-radius: 18px;
  padding: 14px 17px;
  width: 100%;
  height: 75px;
  & :focus {
    border: 1px solid ${({theme}) => theme.colors.pressed_primary};
  }
`;

const InputLabel = styled.Text`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Input = styled(TextInput)`
  border-color: transparent;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
`;

// const IconX = styled(TouchableOpacity)`
//   background-image: url(deleteIcon);
// `;

const InputRemoveBtn = styled(TouchableOpacity)`
  position: absolute;
  right: 16px;
  bottom: 19px;
`;
