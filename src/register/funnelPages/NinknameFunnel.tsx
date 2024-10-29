import React, {useState} from 'react';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import RegisterLayout from '../components/RegisterLayout';
import {Text, View} from 'react-native';
import CustomTextInput from '../components/TextInput';
import {IcCheckk} from '../assets/0_index';
import styled from '@emotion/native';
import {validateKoreanEnglishNumbers} from '../../common/utils/validation';

const NinknameFunnel = ({
  step,
  onNext,
  onPrev,
  handleChange,
}: IregisterFunnulProps) => {
  const [nickname, setNickname] = useState('');
  const [validContent, setValidContent] = useState('');

  const submit = async () => {
    if (nickname.length > 10 || !validateKoreanEnglishNumbers(nickname)) {
      setValidContent('닉네임 규칙을 지켜야 해요.');
      return;
    }
    await handleChange?.('nickname', nickname);
    onNext();
  };

  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={submit}
      isBtnActive={nickname.length > 0}>
      <View>
        <CustomTextInput
          label="닉네임"
          placeholder="닉네임 입력"
          value={nickname}
          onChangeText={setNickname}
          keyboardType="default"
          validErrContent={validContent}
        />
      </View>
      <StCondition>
        <IcCheckk />
        <Text>최대 10글자</Text>
      </StCondition>
      <StCondition>
        <IcCheckk />
        <Text>특수기호 제외 한글, 영어, 숫자만</Text>
      </StCondition>
    </RegisterLayout>
  );
};

export default NinknameFunnel;

const StCondition = styled(View)`
  display: flex;
  flex-direction: row;
  gap: 5px;
  color: #878e9c;
  ${({theme}) => theme.fonts.caption};
`;
