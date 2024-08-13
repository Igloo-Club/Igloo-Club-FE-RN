import React, {useState} from 'react';
import styled from '@emotion/native';
import {View, Text} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';
import {NavTypesProps} from '../types/navTypes';

const 엠비티아이 = ({
  onNext,
  step,
  setStep,
  navigation,
}: NavTypesProps & {
  step: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    setSelectedOptions(prevOptions =>
      prevOptions.includes(option)
        ? prevOptions.filter(item => item !== option)
        : [...prevOptions, option],
    );
  };

  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
    onNext();
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={48} navigation={navigation} />
      <Text style={globalStyles.title}>
        {
          DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step)
            ?.mainTitle
        }{' '}
      </Text>
      <SelectTitle>외향형/내향형</SelectTitle>
      <SelectBox
        options={['E', 'I']}
        selectedOption={selectedOptions}
        onSelect={handleSelect}
        mode="multiple"
      />
      <SelectTitle>감각형/직관형</SelectTitle>
      <SelectBox
        options={['S', 'N']}
        selectedOption={selectedOptions}
        onSelect={handleSelect}
        mode="multiple"
      />
      <SelectTitle>사고형/감정형</SelectTitle>
      <SelectBox
        options={['T', 'F']}
        selectedOption={selectedOptions}
        onSelect={handleSelect}
        mode="multiple"
      />
      <SelectTitle>판단형/인식형</SelectTitle>
      <SelectBox
        options={['J', 'P']}
        selectedOption={selectedOptions}
        onSelect={handleSelect}
        mode="multiple"
      />
      <FooterBtn
        onPress={handleNextStep}
        isDisabled={!selectedOptions}
        label="다음으로"
      />
    </View>
  );
};

export default 엠비티아이;

const SelectTitle = styled.Text`
  margin: 0px 0px 5px 10px;
  color: #646d7a;
  font-size: 14px;
  font-weight: 500;
`;
