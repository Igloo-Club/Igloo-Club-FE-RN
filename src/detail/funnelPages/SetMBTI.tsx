import React, {useState, useEffect} from 'react';
import SelectGroup from '../components/SelectGroup';
import {detailProfileFunnelProps} from '../types/detailProfileFunnelTypes';
import {
  MBTIGroup,
  GROUP_OPTIONS,
  GROUP_LABELS,
} from '../constants/DETAIL_PROFILE_SELECTS';
import DetailLayout from '../components/DetailProfileLayout';

const 엠비티아이 = ({
  onPrev,
  onNext,
  step,
  handleDetailProfileValue,
  value,
}: detailProfileFunnelProps & {step: string}) => {
  const [selectedOptions, setSelectedOptions] = useState<
    Record<MBTIGroup, string | null>
  >({
    ei: null,
    sn: null,
    tf: null,
    jp: null,
  });

  useEffect(() => {
    if (value?.mbti) {
      const mbtiValues = value.mbti.split('');
      setSelectedOptions({
        ei: mbtiValues[0] || null,
        sn: mbtiValues[1] || null,
        tf: mbtiValues[2] || null,
        jp: mbtiValues[3] || null,
      });
    }
  }, [value?.mbti]);

  const handleSelect = (group: MBTIGroup, option: string | number) => {
    setSelectedOptions(prevOptions => ({...prevOptions, [group]: option}));
  };

  return (
    <DetailLayout
      step={step}
      progress={48}
      onBackPress={onPrev}
      onButtonPress={async () => {
        const mbtiValue = ['ei', 'sn', 'tf', 'jp']
          .map(group => selectedOptions[group as MBTIGroup] || 'X')
          .join('');

        await handleDetailProfileValue?.('mbti', mbtiValue);
        onNext();
      }}
      isBtnActive={!Object.values(selectedOptions).includes(null)}>
      {Object.keys(GROUP_OPTIONS).map(group => (
        <SelectGroup
          key={group}
          label={GROUP_LABELS[group as MBTIGroup]}
          options={GROUP_OPTIONS[group as MBTIGroup]}
          selectedOption={selectedOptions[group as MBTIGroup]}
          onSelect={option => handleSelect(group as MBTIGroup, option)}
        />
      ))}
    </DetailLayout>
  );
};

export default 엠비티아이;
