import styled from '@emotion/native';
import React, {ReactNode} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {findByStepDetailProfile} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import DetailProfileHeader from './DetailProfileHeader';
import {DetailProfileStepType} from '../types/detailProfileFunnelTypes';

interface DetailLayoutProps {
  step: (typeof DetailProfileStepType)[number];
  children: ReactNode;
  onBackPress: () => void;
  onButtonPress: () => void;
  isBtnActive: boolean;
  progress: number;
}

const DetailLayout = ({
  step,
  children,
  onBackPress,
  onButtonPress,
  isBtnActive,
  progress,
}: DetailLayoutProps) => {
  const currentStep = findByStepDetailProfile(step);

  return (
    <Container>
      <DetailProfileHeader percent={progress} onBackPress={onBackPress} />
      <Content>
        <Title>{currentStep?.mainTitle}</Title>
        {currentStep?.subTitle && <SubTitle>{currentStep?.subTitle}</SubTitle>}
        {children}
      </Content>
      <Footer>
        <Notice>{currentStep?.notice}</Notice>
        <Button onPress={onButtonPress} disabled={!isBtnActive}>
          <ButtonText disabled={!isBtnActive}>
            {currentStep?.buttonContent}
          </ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};

export default DetailLayout;

const Container = styled(SafeAreaView)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 20px 56px 20px;
`;

const Content = styled(View)`
  flex: 1;
`;

const Title = styled.Text`
  color: #333;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const SubTitle = styled.Text`
  color: #646d7a;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Footer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled(TouchableOpacity)<{disabled: boolean}>`
  width: 100%;
  height: 54px;
  padding: 17px;
  border-radius: 7px;
  align-items: center;

  background-color: ${({disabled}) => (disabled ? '#e4e8ec' : '#FA7268')};
`;

const Notice = styled.Text`
  color: #878e9c;
  text-align: center;
  margin-bottom: 13px;
  ${({theme}) => theme.fonts.body3}
`;

const ButtonText = styled.Text<{disabled: boolean}>`
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;

  letter-spacing: -0.3px;
  color: ${({disabled, theme}) => (disabled ? '#bbc0ca' : theme.colors.white)};
`;
