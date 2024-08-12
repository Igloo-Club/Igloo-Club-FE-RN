import React, {useState} from 'react';
import styled from '@emotion/native';
import {View} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';

const 결혼예정여부 = ({navigation}: any) => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <Container>
      <DetailProfileHeader percent={40} navigation={navigation} />
      <Title>{DETAIL_PROFILE_VIEW_CONSTATNS[step].mainTitle}</Title>
      <SelectBox
        options={['미정', '3년 이내']}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <SelectBox
        options={['5년 이내', '7년 이내']}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <FooterBtn
        onPress={handleNextStep}
        isDisabled={!selectedOption}
        label="다음으로"
      />
    </Container>
  );
};

export default 결혼예정여부;

const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 0px 0px 30px 5px;
  line-height: 35px;
`;
