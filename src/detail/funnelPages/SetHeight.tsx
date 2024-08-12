import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import styled from '@emotion/native';
import {NavTypesProps} from '../types/navTypes';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';
import {theme} from '../../common/styles/theme';

const 키입력 = ({onNext, navigation}: NavTypesProps) => {
  const [step, setStep] = useState(0);
  const [height, setHeight] = useState('');

  const handleNextStep = () => {
    onNext();
    setStep(step + 1);
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={8} navigation={navigation} />
      <Text style={globalStyles.title}>
        {DETAIL_PROFILE_VIEW_CONSTATNS[step].mainTitle}
      </Text>
      <InputBox>
        <Input
          placeholder="숫자 입력"
          value={height}
          onChangeText={setHeight}
          keyboardType="phone-pad"
        />
        <HeightUnit>cm</HeightUnit>
      </InputBox>
      <FooterBtn
        onPress={handleNextStep}
        isDisabled={!height}
        label="다음으로"
      />
    </View>
  );
};

export default 키입력;

const InputBox = styled(View)``;

const Input = styled(TextInput)`
  border-radius: 8px;
  padding: 25px 20px;
  margin-bottom: 16px;
  border-radius: 18px;
  background: #fafafb;
  color: ${theme.colors.add_gray1};
  font-size: 19px;
  font-weight: 600;
`;

const HeightUnit = styled.Text`
  position: absolute;
  top: 25px;
  right: 30px;
  color: #878d9b;
  font-size: 19px;
  font-weight: 600;
`;
