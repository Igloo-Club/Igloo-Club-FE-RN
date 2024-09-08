import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectGroup from '../components/SelectGroup';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';
import {NavTypesProps} from '../types/navTypes';

type MBTIGroup = 'ei' | 'sn' | 'tf' | 'jp';

const GROUP_OPTIONS: Record<
  MBTIGroup,
  {label: string; value: string | number}[]
> = {
  ei: ['E', 'I'].map(value => ({label: value, value})),
  sn: ['S', 'N'].map(value => ({label: value, value})),
  tf: ['T', 'F'].map(value => ({label: value, value})),
  jp: ['J', 'P'].map(value => ({label: value, value})),
};

const GROUP_LABELS: Record<MBTIGroup, string> = {
  ei: '외향형/내향형',
  sn: '감각형/직관형',
  tf: '사고형/감정형',
  jp: '판단형/인식형',
};

const 엠비티아이 = ({
  onPrev,
  onNext,
  step,
  handleDetailProfileValue,
  detailProfileValues,
}: NavTypesProps & {step: string}) => {
  const [selectedOptions, setSelectedOptions] = useState<
    Record<MBTIGroup, string | null>
  >({
    ei: null,
    sn: null,
    tf: null,
    jp: null,
  });

  const handleSelect = (group: MBTIGroup, option: string | number) => {
    setSelectedOptions(prevOptions => ({...prevOptions, [group]: option}));
  };

  const handleNextStep = () => {
    if (handleDetailProfileValue) {
      const mbtiValue = ['ei', 'sn', 'tf', 'jp']
        .map(group => selectedOptions[group as MBTIGroup] || 'X')
        .join('');
      handleDetailProfileValue({...detailProfileValues, mbti: mbtiValue});
    }
    onNext();
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={48} onPrev={onPrev} />
      <Text style={globalStyles.title}>
        {
          DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step)
            ?.mainTitle
        }
      </Text>
      {Object.keys(GROUP_OPTIONS).map(group => (
        <SelectGroup
          key={group}
          label={GROUP_LABELS[group as MBTIGroup]}
          options={GROUP_OPTIONS[group as MBTIGroup]}
          selectedOption={selectedOptions[group as MBTIGroup]}
          onSelect={option => handleSelect(group as MBTIGroup, option)}
        />
      ))}
      <FooterBtn
        onPress={handleNextStep}
        isDisabled={Object.values(selectedOptions).includes(null)}
        label="다음으로"
      />
    </View>
  );
};

export default 엠비티아이;
