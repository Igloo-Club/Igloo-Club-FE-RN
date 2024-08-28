import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {
  DETAIL_PROFILE_VIEW_CONSTATNS,
  SCALE,
} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';
import {NavTypesProps} from '../types/navTypes';

const 회사규모 = ({
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
        SCALE.find(s => s.label === selectedOption)?.value || '';
      handleDetailProfileValue({
        ...detailProfileValues,
        scale: valueToSend,
      });
    }
    onNext();
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={72} onPrev={onPrev} />
      <Text style={globalStyles.title}>
        {
          DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step)
            ?.mainTitle
        }{' '}
      </Text>
      <SelectBox
        options={SCALE.map(scale => ({
          label: scale.label,
          value: scale.value,
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

export default 회사규모;
