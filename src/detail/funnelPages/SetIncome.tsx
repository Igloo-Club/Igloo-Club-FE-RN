import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {
  DETAIL_PROFILE_VIEW_CONSTATNS,
  GROSS_SALARY,
} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';
import {NavTypesProps} from '../types/navTypes';

const 세전연봉 = ({
  onPrev,
  onNext,
  step,
  handleDetailProfileValue,
  detailProfileValues,
}: NavTypesProps & {
  step: string;
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelect = (option: string | number) => {
    if (typeof option === 'number') {
      setSelectedOption(option);
    } else {
      const matchedOption =
        GROSS_SALARY.find(o => o.label === option)?.value || null;
      setSelectedOption(matchedOption);
    }
  };

  const handleNextStep = () => {
    if (handleDetailProfileValue) {
      handleDetailProfileValue({
        ...detailProfileValues,
        grossSalary: selectedOption as number,
      });
    }
    onNext();
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={56} onPrev={onPrev} />
      <Text style={globalStyles.title}>
        {
          DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step)
            ?.mainTitle
        }{' '}
      </Text>
      <SelectBox
        options={GROSS_SALARY}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={handleSelect}
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

export default 세전연봉;
