import React from 'react';
import styled from '@emotion/native';
import {TouchableOpacity, Text} from 'react-native';

interface FooterBtnProps {
  onPress: () => void;
  isDisabled: boolean;
  label: string;
  bgColor?: string;
  textColor?: string;
}

const FooterBtn: React.FC<FooterBtnProps> = ({
  onPress,
  isDisabled,
  label,
  bgColor,
  textColor,
}) => {
  return (
    <Footer>
      <Button
        onPress={onPress}
        isDisabled={isDisabled}
        bgColor={bgColor}
        disabled={isDisabled}>
        <ButtonText textColor={textColor}>{label}</ButtonText>
      </Button>
    </Footer>
  );
};

export default FooterBtn;

const Footer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  margin-bottom: 20px;
`;

const Button = styled(TouchableOpacity)<{
  isDisabled: boolean;
  bgColor?: string;
}>`
  background-color: ${({isDisabled, bgColor}) =>
    bgColor ? bgColor : isDisabled ? '#E4E8EC' : '#FA7268'};
  padding: 15px;
  border-radius: 8px;
  align-items: center;
`;

const ButtonText = styled(Text)<{textColor?: string}>`
  color: ${({textColor}) => (textColor ? textColor : '#ffffff')};
  font-size: 16px;
  font-weight: 600;
`;
