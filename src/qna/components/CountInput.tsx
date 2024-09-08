import React from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';

interface CountInputProps {
  text: string;
}

const CountInput = ({text}: CountInputProps) => {
  const textLength = text.length;

  const getStatus = () => {
    if (textLength < 6) {
      return {message: '아직 부족해요', filledBars: 0};
    }
    if (textLength < 15) {
      return {message: '아직 부족해요', filledBars: 1};
    }
    if (textLength < 30) {
      return {message: '조금 더 적어볼까요?', filledBars: 2};
    }
    if (textLength < 60) {
      return {message: '잘 쓰고 계시네요!', filledBars: 3};
    }
    return {message: '훌륭해요!', filledBars: 4};
  };

  const {message, filledBars} = getStatus();

  return (
    <Container>
      <Header>
        <Message>{message}</Message>
        <CharCount>{textLength}자</CharCount>
      </Header>
      <ProgressBarWrapper>
        {Array.from({length: 4}).map((_, index) => (
          <ProgressBar key={index} isFilled={index < filledBars} />
        ))}
      </ProgressBarWrapper>
    </Container>
  );
};

export default CountInput;

const Container = styled(View)`
  margin-bottom: 80px;
`;

const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Message = styled.Text`
  color: #fa7268;
  font-size: 14px;
  font-weight: 500;
`;

const CharCount = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;

const ProgressBarWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const ProgressBar = styled(View)<{isFilled: boolean}>`
  flex: 1;
  height: 8px;
  background-color: ${({isFilled}) => (isFilled ? '#FA7268' : '#E0E0E0')};
  border-radius: 7px;
`;
