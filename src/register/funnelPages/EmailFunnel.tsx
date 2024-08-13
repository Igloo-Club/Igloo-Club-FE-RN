import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from '@emotion/native';
import {RAGISTER_VIEW_CONSTATNS} from '../constatnts/REGISTER_VIEW_CONSTANTS';
import EmailModal from './components/EmailModal';
import * as St from '../styles/registerCommonStyles';

const EmailFunnel = ({navigation}: any) => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <View>
        <BackButton onPress={() => navigation.goBack()}>
          <Text>&lt;</Text>
        </BackButton>
        <St.Title>{RAGISTER_VIEW_CONSTATNS[step].mainTitle}</St.Title>
        <SubTitle>{RAGISTER_VIEW_CONSTATNS[step].subTitle}</SubTitle>
        <InputContainer>
          <InputLabel>회사 이메일 주소</InputLabel>
          <Input
            placeholder="이메일 주소 입력"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {/* <IcDelete /> */}
          <InputRemoveBtn
            onPress={() => {
              console.log('버튼 클릭');
            }}>
            {/* <Text>x</Text> */}
          </InputRemoveBtn>
        </InputContainer>
      </View>
      <View>
        <Text>
          재직 중인 회사를 확인하는 절차이며, 다른 용도로 사용되지 않아요.
        </Text>
        <Button onPress={() => setIsModalOpen(true)}>
          <ButtonText>인증 요청하기</ButtonText>
        </Button>
      </View>
      {/* <EmailModal /> */}
    </Container>
  );
};

export default EmailFunnel;

const Container = styled(SafeAreaView)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 20px 56px 20px;
  background-color: #ffffff;
`;

const BackButton = styled(TouchableOpacity)`
  margin-bottom: 16px;
`;

const SubTitle = styled.Text`
  font-size: 16px;
  color: #555555;
  margin-bottom: 24px;
`;

const InputContainer = styled.View`
  position: relative;
  background-color: #fafafb;
  border-radius: 18px;
  padding: 14px 17px;
  width: 100%;
  height: 75px;
  & :focus {
    border: 1px solid ${({theme}) => theme.colors.pressed_primary};
  }
`;

const InputLabel = styled.Text`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Input = styled(TextInput)`
  border-color: transparent;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
`;

// const IconX = styled(TouchableOpacity)`
//   background-image: url(deleteIcon);
// `;

const InputRemoveBtn = styled(TouchableOpacity)`
  position: absolute;
  right: 16px;
  bottom: 19px;
`;

const Button = styled(TouchableOpacity)`
  background-color: #cccccc;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;
