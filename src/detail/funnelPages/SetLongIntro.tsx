import React, {useState} from 'react';
import styled from '@emotion/native';
import {View, TextInput} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import FooterBtn from '../components/DetailProfileFooter';

const 자기소개 = ({navigation}: any) => {
  const [step, setStep] = useState(0);
  const [longIntro, setLongIntro] = useState('');

  const IntroExample =
    '저는 여행, 음악, 그리고 맛집 탐방을 사랑하는 26살 여자예요.';

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <Container>
      <DetailProfileHeader percent={96} navigation={navigation} />
      <Title>{DETAIL_PROFILE_VIEW_CONSTATNS[step].mainTitle}</Title>
      <InputBox>
        <Input
          placeholder={IntroExample}
          value={longIntro}
          onChangeText={setLongIntro}
          keyboardType="ascii-capable"
          maxLength={100}
          multiline={true}
        />
        <InputFooter>
          <InputLimit>최대 100자</InputLimit>
          <InputCount>
            <CountText>{longIntro.length}</CountText>/100
          </InputCount>
        </InputFooter>
      </InputBox>
      <FooterBtn
        onPress={handleNextStep}
        isDisabled={!longIntro}
        label="다음으로"
      />
    </Container>
  );
};

export default 자기소개;

const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 0px 0px 10px 5px;
  line-height: 35px;
`;

const InputBox = styled(View)`
  height: 200px;
  border-radius: 18px;
  background: #fafafb;
  margin-top: 20px;
  margin-bottom: 16px;
`;

const Input = styled(TextInput)`
  border-radius: 18px;
  background: #fafafb;
  padding: 18px 20px 160px 20px;
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
