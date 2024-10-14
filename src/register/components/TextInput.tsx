import React, {useState} from 'react';
import {
  Image,
  KeyboardTypeOptions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styled from '@emotion/native';

import deleteBtnIMG from '../assets/deleteBtnIMG.png';

interface CustomTextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const CoustomTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType,
}: CustomTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer isFocused={isFocused}>
      <InputLabel>{label}</InputLabel>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize="none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {value.length > 0 && (
        <InputRemoveBtn onPress={() => onChangeText('')}>
          <Image source={deleteBtnIMG} style={{width: 17, height: 17}} />
        </InputRemoveBtn>
      )}
    </InputContainer>
  );
};

export default CoustomTextInput;

const InputContainer = styled.View<{isFocused: boolean}>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fafafb;
  border-radius: 18px;
  padding: 14px 17px;
  width: 100%;
  height: 75px;
  border: 1px solid transparent;
  border-color: ${({isFocused, theme}) =>
    isFocused ? theme.colors.pressed_primary : 'transparent'};
`;

const InputLabel = styled.Text`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;

const Input = styled(TextInput)`
  border-color: transparent;
  color: #333a44;
  font-family: Pretendard;
  font-size: 19px;
  line-height: 23px;
  font-weight: 400;
  letter-spacing: -0.3px;

  & ::placeholder {
    color: #878d9b;
  }
`;

const InputRemoveBtn = styled(TouchableOpacity)`
  position: absolute;
  right: 16px;
  bottom: 19px;
`;
