import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {
  DETAIL_PROFILE_VIEW_CONSTATNS,
  WORK_ARRANGEMENT,
} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';
import {NavTypesProps} from '../types/navTypes';

const 근무형태 = ({
  onPrev,
  onNext,
  step,
  handleDetailProfileValue,
  detailProfileValues,
}: NavTypesProps & {
  step: string;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  const handleNextStep = () => {
    if (handleDetailProfileValue) {
      const valueToSend = WORK_ARRANGEMENT.filter(w =>
        selectedOptions.includes(w.value),
      ).map(w => w.value);
      handleDetailProfileValue({
        ...detailProfileValues,
        workArrangementList: valueToSend,
      });
    }
    onNext();
  };

  const handleSelectOption = (option: string | number) => {
    const optionAsString = option.toString();

    if (optionAsString === 'NONE') {
      // 해당 사항 없어요는 언제나 추가 가능
      if (selectedOptions.includes('NONE')) {
        setSelectedOptions(selectedOptions.filter(item => item !== 'NONE'));
      } else {
        setSelectedOptions([...selectedOptions, 'NONE']);
      }
    } else if (optionAsString === 'ROTATIONAL' || optionAsString === 'SHIFT') {
      // 순환근무와 교대근무는 중복 선택이 불가능
      if (selectedOptions.includes(optionAsString)) {
        // 이미 선택한 항목이면 선택 해제
        setSelectedOptions(
          selectedOptions.filter(item => item !== optionAsString),
        );
      } else {
        // 순환근무와 교대근무중 하나만 선택 가능
        setSelectedOptions([
          optionAsString,
          ...selectedOptions.filter(item => item === 'NONE'),
        ]);
      }
    }
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={64} onPrev={onPrev} />
      <Text style={globalStyles.title}>
        {
          DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step)
            ?.mainTitle
        }{' '}
      </Text>
      <SelectBox
        options={WORK_ARRANGEMENT.map(workform => ({
          label: workform.label,
          value: workform.value,
        }))}
        selectedOption={selectedOptions}
        onSelect={handleSelectOption}
        mode="multiple"
      />
      <FooterBtn
        onPress={handleNextStep}
        isDisabled={selectedOptions.length === 0}
        label="다음으로"
      />
    </View>
  );
};

export default 근무형태;
