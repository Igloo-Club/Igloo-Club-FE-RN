import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import styled from '@emotion/native';
import {detailProfileFunnelProps} from '../types/detailProfileFunnelTypes';
import {theme} from '../../common/styles/theme';
import DetailLayout from '../components/DetailProfileLayout';

const 키입력 = ({
  step,
  onPrev,
  onNext,
  handleDetailProfileValue,
}: detailProfileFunnelProps & {
  step: string;
}) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    console.log(height);
  }, [height]);

  return (
    <DetailLayout
      step={step}
      progress={8}
      onBackPress={onPrev}
      onButtonPress={async () => {
        await handleDetailProfileValue?.('height', height);
        onNext();
      }}
      isBtnActive={height > 0}>
      <InputBox>
        <Input
          placeholder="숫자 입력"
          value={height.toString()}
          onChangeText={text => setHeight(Number(text))}
          keyboardType="phone-pad"
        />
        <HeightUnit>cm</HeightUnit>
      </InputBox>
    </DetailLayout>
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
