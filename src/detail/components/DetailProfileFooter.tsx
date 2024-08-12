import React from 'react';
import styled from '@emotion/native';
import {TouchableOpacity, Text} from 'react-native';

interface FooterBtnProps {
  onPress: () => void;
  isDisabled: boolean;
  label: string;
}

const FooterBtn: React.FC<FooterBtnProps> = ({onPress, isDisabled, label}) => {
  return (
    <Footer>
      <Button onPress={onPress} disabled={isDisabled} isDisabled={isDisabled}>
        <ButtonText>{label}</ButtonText>
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

const Button = styled(TouchableOpacity)<{isDisabled: boolean}>`
  background-color: ${({isDisabled}) => (isDisabled ? '#E4E8EC' : '#FA7268')};
  padding: 15px;
  border-radius: 8px;
  align-items: center;
`;

const ButtonText = styled(Text)`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`;
