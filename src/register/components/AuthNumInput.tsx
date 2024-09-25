import styled from '@emotion/native';
import React from 'react';
import {TextInput, TouchableOpacity} from 'react-native';

interface IAuthNumInputProps {
  value: string;
  onChangeNum: (text: string) => void;
}

const AuthNumInput = ({value, onChangeNum}: IAuthNumInputProps) => {
  return (
    <InputContainer>
      <Input
        placeholder="인증번호 6자리 입력"
        value={value}
        onChangeText={onChangeNum}
        keyboardType="number-pad"
        autoCapitalize="none"
      />
      <ReSendBtn onPress={() => {}}>
        <ReSendBtnText>재전송</ReSendBtnText>
      </ReSendBtn>
    </InputContainer>
  );
};

export default AuthNumInput;

const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: #fafafb;
  border-radius: 7px;
  padding: 0 13px;
  width: 100%;
  height: 67px;
`;

const Input = styled(TextInput)`
  height: 100%;
  border-color: transparent;
  color: #333a44;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  & ::placeholder {
    color: #878d9b;
  }
`;

const ReSendBtn = styled(TouchableOpacity)`
  width: 64px;
  height: 45px;
  border-radius: 6px;
  background: #333a44;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReSendBtnText = styled.Text`
  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
`;
