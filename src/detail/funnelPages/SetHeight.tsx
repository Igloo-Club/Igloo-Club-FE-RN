import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styled from '@emotion/native';
import {NavTypesProps} from '../types/navTypes';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import FooterBtn from '../components/DetailProfileFooter';

const 키입력 = ({onNext, navigation}: NavTypesProps) => {
  const [step, setStep] = useState(0);
  const [height, setHeight] = useState('');

  const handleNextStep = () => {
    onNext();
    setStep(step + 1);
  };

  return (
    <Container>
      <DetailProfileHeader percent={8} navigation={navigation} />
      <Title>{DETAIL_PROFILE_VIEW_CONSTATNS[step].mainTitle}</Title>
      <Input
        placeholder="숫자 입력"
        value={height}
        onChangeText={setHeight}
        keyboardType="phone-pad"
      />
      <FooterBtn
        onPress={handleNextStep}
        isDisabled={!height}
        label="다음으로"
      />
    </Container>
  );
};

export default 키입력;

const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 0px 0px 30px 5px;
  line-height: 35px;
`;

const Input = styled(TextInput)`
  height: 40px;
  border-width: 1px;
  border-color: #cccccc;
  border-radius: 8px;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 16px;
`;
