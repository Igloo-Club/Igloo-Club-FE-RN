import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from '@emotion/native';
import {RAGISTER_VIEW_CONSTATNS} from './constatnts/REGISTER_VIEW_CONSTANTS';

const Register = ({navigation}: any) => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Text>&lt;</Text>
      </BackButton>
      <Title>{RAGISTER_VIEW_CONSTATNS[step].mainTitle}</Title>
      <SubTitle>{RAGISTER_VIEW_CONSTATNS[step].subTitle}</SubTitle>
      <InputLabel>회사 이메일 주소</InputLabel>
      <Input
        placeholder="이메일 주소 입력"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button onPress={() => setStep(step + 1)}>
        <ButtonText>인증 요청하기</ButtonText>
      </Button>
      <Text>
        직접 입력 회사 확인하는 절차이며, 다른 용도로 사용되지 않아요.
      </Text>
    </Container>
  );
};

export default Register;

const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 16px;
  background-color: #ffffff;
`;

const BackButton = styled(TouchableOpacity)`
  margin-bottom: 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const SubTitle = styled.Text`
  font-size: 16px;
  color: #555555;
  margin-bottom: 24px;
`;

const InputLabel = styled.Text`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Input = styled(TextInput)`
  height: 40px;
  border-width: 1px;
  border-color: #cccccc;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
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
