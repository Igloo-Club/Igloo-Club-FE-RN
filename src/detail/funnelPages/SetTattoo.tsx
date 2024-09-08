import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';
import {NavTypesProps} from '../types/navTypes';

const 문신여부 = ({
  onPrev,
  onNext,
  step,
  handleDetailProfileValue,
  detailProfileValues,
}: NavTypesProps & {
  step: string;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    {value: 'true', label: '있다'},
    {value: 'false', label: '없다'},
  ];

  const handleNextStep = () => {
    if (handleDetailProfileValue) {
      const tattooValue = selectedOption === '있다';
      handleDetailProfileValue({...detailProfileValues, tattoo: tattooValue});
    }
    onNext();
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={24} onPrev={onPrev} />
      <Text style={globalStyles.title}>
        {
          DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step)
            ?.mainTitle
        }{' '}
      </Text>
      <SelectBox
        options={options}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={option => setSelectedOption(option as string)}
        mode="single"
      />
      <FooterBtn
        onPress={handleNextStep}
        isDisabled={!selectedOption}
        label="다음으로"
      />
    </View>
  );
};

export default 문신여부;
