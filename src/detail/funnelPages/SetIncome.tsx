import React, {useState} from 'react';
import styled from '@emotion/native';
import {View} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';

const 세전연봉 = ({navigation}: any) => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <Container>
      <DetailProfileHeader percent={56} navigation={navigation} />
      <Title>{DETAIL_PROFILE_VIEW_CONSTATNS[step].mainTitle}</Title>
      <SelectBox
        options={['4000만원 이하', '4-5000만원']}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <SelectBox
        options={['5-6000만원', '6-8000만원']}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <SelectBox
        options={['8000-1억', '1억 이상']}
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

export default 세전연봉;

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
