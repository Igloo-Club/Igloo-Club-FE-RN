import React, {useState} from 'react';
import styled from '@emotion/native';
import {View, TextInput} from 'react-native';
import {detailProfileFunnelProps} from '../types/detailProfileFunnelTypes';
import DetailLayout from '../components/DetailProfileLayout';

const 한줄소개 = ({
  onPrev,
  onNext,
  step,
  handleDetailProfileValue,
}: detailProfileFunnelProps & {
  step: string;
}) => {
  const [shortIntro, setShortIntro] = useState('');

  return (
    <DetailLayout
      step={step}
      progress={88}
      onBackPress={onPrev}
      onButtonPress={async () => {
        if (typeof shortIntro === 'string') {
          handleDetailProfileValue?.('intro', shortIntro);
        }
        onNext();
      }}
      isBtnActive={shortIntro !== null}>
      <InputBox>
        <Input
          placeholder="짧고 임팩트 있는 한 줄 소개를 작성하세요."
          value={shortIntro}
          onChangeText={setShortIntro}
          keyboardType="default"
          maxLength={30}
        />
        <InputFooter>
          <InputLimit>최대 30자</InputLimit>
          <InputCount>
            <CountText>{shortIntro.length}</CountText>/30
          </InputCount>
        </InputFooter>
      </InputBox>
      <ExampleBox>
        <ExampleTitle>작성 예시</ExampleTitle>
        <ExampleText>클라이밍을 사랑하는 26살 여자입니다😄</ExampleText>
      </ExampleBox>
    </DetailLayout>
  );
};

export default 한줄소개;

const InputBox = styled(View)`
  height: 120px;
  border-radius: 18px;
  background: #fafafb;
  margin-top: 20px;
  margin-bottom: 16px;
`;

const Input = styled(TextInput)`
  border-radius: 18px;
  background: #fafafb;
  padding: 18px 20px 80px 20px;
`;

const InputFooter = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: -20px;
  padding: 0 20px 10px 20px;
`;

const InputLimit = styled.Text`
  font-size: 11px;
  font-weight: 500;
`;

const InputCount = styled.Text`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const CountText = styled.Text`
  color: #d0d6de;
  font-size: 11px;
  font-weight: 500;
`;

const ExampleBox = styled(View)`
  flex-direction: row;
  margin-left: 10px;
  gap: 11px;
`;

const ExampleTitle = styled.Text`
  color: #808080;
  font-size: 12px;
  font-weight: 600;
`;

const ExampleText = styled.Text`
  color: #303030;
  font-size: 12px;
  font-weight: 600;
`;
