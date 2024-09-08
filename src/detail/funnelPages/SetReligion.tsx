import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavTypesProps} from '../types/navTypes';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {
  DETAIL_PROFILE_VIEW_CONSTATNS,
  RELIGION,
} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';

const 종교여부 = ({
  onPrev,
  onNext,
  step,
  handleDetailProfileValue,
  detailProfileValues,
}: NavTypesProps & {
  step: string;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null,
  );

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  const handleNextStep = () => {
    if (handleDetailProfileValue) {
      const valueToSend =
        RELIGION.find(r => r.value === selectedOption)?.value || '';
      handleDetailProfileValue({
        ...detailProfileValues,
        religion: valueToSend,
      });
    }
    onNext();
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={16} onPrev={onPrev} />
      <Text style={globalStyles.title}>
        {
          DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step)
            ?.mainTitle
        }{' '}
      </Text>
      <SelectBox
        options={RELIGION.map(religion => ({
          label: religion.label,
          value: religion.value,
        }))}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={option => setSelectedOption(option)}
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

export default 종교여부;
