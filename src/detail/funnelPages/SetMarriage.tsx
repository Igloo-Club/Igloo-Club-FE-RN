import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {
  DETAIL_PROFILE_VIEW_CONSTATNS,
  MARRIAGE_PLAN,
} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';
import {NavTypesProps} from '../types/navTypes';

const 결혼예정여부 = ({
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

  const handleNextStep = () => {
    if (handleDetailProfileValue) {
      const valueToSend =
        typeof selectedOption === 'number'
          ? selectedOption
          : MARRIAGE_PLAN.find(plan => plan.label === selectedOption)?.value ||
            0;
      handleDetailProfileValue({
        ...detailProfileValues,
        marriagePlan: valueToSend,
      });
    }
    onNext();
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={40} onPrev={onPrev} />
      <Text style={globalStyles.title}>
        {
          DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step)
            ?.mainTitle
        }{' '}
      </Text>
      <SelectBox
        options={MARRIAGE_PLAN}
        selectedOption={selectedOption !== null ? [selectedOption] : []}
        onSelect={option => setSelectedOption(option)}
        mode="single"
      />
      <FooterBtn
        onPress={handleNextStep}
        isDisabled={selectedOption === null}
        label="다음으로"
      />
    </View>
  );
};

export default 결혼예정여부;
