import styled from '@emotion/native';
import React, {ReactNode} from 'react';
import {RegisterstepType} from '../types/registerFunnelType';
import {findByStepRegister} from '../constatnts/REGISTER_VIEW_CONSTANTS';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface RegisterStepLayoutProps {
  step: (typeof RegisterstepType)[number];
  children: ReactNode;
  onBackPress: () => void;
  onButtonPress: () => void;
  isBtnActive: boolean;
}

const RegisterLayout = ({
  step,
  children,
  onBackPress,
  onButtonPress,
  isBtnActive,
}: RegisterStepLayoutProps) => {
  const currentStep = findByStepRegister(step);

  return (
    <Container>
      <Header>
        <BackButton onPress={onBackPress}>
          <Text>&lt;</Text>
        </BackButton>
        <Title>{currentStep?.mainTitle}</Title>
        {currentStep?.subTitle && <SubTitle>{currentStep?.subTitle}</SubTitle>}
      </Header>
      <Content>{children}</Content>
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

export default RegisterLayout;

const Container = styled(SafeAreaView)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 20px 56px 20px;
`;

const Header = styled(View)`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const BackButton = styled(TouchableOpacity)`
  margin-bottom: 34px;
`;

const Content = styled.View`
  flex: 1;
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

const SubTitle = styled.Text`
  color: #646d7a;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;

  letter-spacing: -0.3px;
  margin-top: 16px;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.colors.gray9};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;

  letter-spacing: -0.3px;
`;
