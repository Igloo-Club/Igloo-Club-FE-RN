import React, {useState} from 'react';
import styled from '@emotion/native';
import {View, TextInput, Text} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import FooterBtn from '../../common/components/FooterBtn';
import {globalStyles} from '../../common/styles/globalStyles';
import {detailProfileFunnelProps} from '../types/detailProfileFunnelTypes';

const 자기소개 = ({
  onPrev,
  onNext,
  step,
}: detailProfileFunnelProps & {
  step: string;
}) => {
  const [longIntro, setLongIntro] = useState('');

  const IntroExample =
    '저는 여행, 음악, 그리고 맛집 탐방을 사랑하는 26살 여자\n에요. 다양한 취미를 통해 사람들과 소통하는 걸 좋아하고\n새로운 경험을 쌓는 걸 즐겨요. 주말에는 카페에 가거나\n친구들과 맛있는 음식을 찾아다니며 힐링해요. 긍정적인\n에너지를 가진 저와 함께 즐거운 순간들을 나눠보실래요?';

  const handleNextStep = () => {
    onNext();
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={96} onPrev={onPrev} />
      <Text style={globalStyles.title}>
        {
          DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step)
            ?.mainTitle
        }{' '}
      </Text>
      <InputBox>
        <Input
          multiline={true}
          placeholder={IntroExample}
          value={longIntro}
          onChangeText={setLongIntro}
          keyboardType="ascii-capable"
          maxLength={100}
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
    </View>
  );
};

export default 자기소개;

const InputBox = styled(View)`
  height: 200px;
  border-radius: 18px;
  background: #fafafb;
  margin-bottom: 16px;
`;

const Input = styled(TextInput)`
  flex: 1;
  border-radius: 18px;
  background: #fafafb;
  padding: 18px 15px 0px 15px;
  line-height: 20px;
  font-size: 14px;
`;

const InputFooter = styled(View)`
  position: absolute;
  bottom: 0;
  gap: 220px;
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
