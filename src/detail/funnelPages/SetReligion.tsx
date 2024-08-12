import React, {useState} from 'react';
import styled from '@emotion/native';
import {View} from 'react-native';
import {NavTypesProps} from '../types/navTypes';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';

const 종교여부 = ({onNext, navigation}: NavTypesProps) => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNextStep = () => {
    setStep(step + 1);
    onNext();
  };

  return (
    <Container>
      <DetailProfileHeader percent={16} navigation={navigation} />
      <Title>{DETAIL_PROFILE_VIEW_CONSTATNS[step]?.mainTitle}</Title>
      <SelectBox
        options={['불교', '기독교']}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <SelectBox
        options={['천주교', '이슬람']}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <SelectBox
        options={['기타', '무교']}
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

export default 종교여부;

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
