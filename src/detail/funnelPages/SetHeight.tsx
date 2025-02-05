import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styled from '@emotion/native';
import {detailProfileFunnelProps} from '../types/detailProfileFunnelTypes'; // 경로는 실제 경로로 수정
import {theme} from '../../common/styles/theme';
import DetailLayout from '../components/DetailProfileLayout';

const 키입력 = ({
  step,
  onPrev,
  onNext,
  handleDetailProfileValue,
  value,
}: detailProfileFunnelProps) => {
  const [height, setHeight] = useState<number | string>(value?.height || '');

  const [validContent, setValidContent] = useState('');

  const handleHeightChange = (text: string) => {
    if (/^\d*$/.test(text)) {
      setHeight(Number(text));

      if (Number(text) < 100 || Number(text) > 250) {
        setValidContent(
          '키는 100~250cm 사이여야 하며, 0으로 시작할 수 없습니다.',
        );
      } else {
        setValidContent('');
      }
    }
  };

  const submit = async () => {
    console.log('클릭');
    await handleDetailProfileValue?.('height', Number(height));
    onNext();
  };

  return (
    <DetailLayout
      step={step}
      progress={8}
      onBackPress={onPrev}
      onButtonPress={submit}
      isBtnActive={Number(height) > 0 && !validContent}>
      <InputBox>
        <Input
          placeholder="숫자 입력"
          value={height.toString()}
          onChangeText={handleHeightChange}
          keyboardType="phone-pad"
        />
        <HeightUnit>cm</HeightUnit>
      </InputBox>
      {validContent && <ErrorText>{validContent}</ErrorText>}
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

const ErrorText = styled.Text`
  color: red;
  font-size: 14px;
`;
