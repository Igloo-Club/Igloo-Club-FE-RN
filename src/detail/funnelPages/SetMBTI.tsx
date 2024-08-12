import React, {useState} from 'react';
import styled from '@emotion/native';
import {View} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';

const 엠비티아이 = ({navigation}: any) => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <Container>
      <DetailProfileHeader percent={48} navigation={navigation} />
      <Title>{DETAIL_PROFILE_VIEW_CONSTATNS[step].mainTitle}</Title>
      <SelectTitle>외향형/내향형</SelectTitle>
      <SelectBox
        options={['E', 'I']}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <SelectTitle>감각형/직관형</SelectTitle>
      <SelectBox
        options={['S', 'N']}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <SelectTitle>사고형/감정형</SelectTitle>
      <SelectBox
        options={['T', 'F']}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <SelectTitle>판단형/인식형</SelectTitle>
      <SelectBox
        options={['J', 'P']}
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

export default 엠비티아이;

const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 0px 0px 20px 5px;
  line-height: 35px;
`;

const SelectTitle = styled.Text`
  margin: 10px 0px 5px 10px;
  color: #646d7a;
  font-size: 14px;
  font-weight: 500;
`;
