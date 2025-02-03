import React, {useState, useEffect} from 'react';
import {WORK_ARRANGEMENT} from '../constants/DETAIL_PROFILE_SELECTS';
import SelectBox from '../components/SelectBox';
import {detailProfileFunnelProps} from '../types/detailProfileFunnelTypes';
import DetailLayout from '../components/DetailProfileLayout';

const 근무형태 = ({
  onPrev,
  onNext,
  step,
  handleDetailProfileValue,
  value,
}: detailProfileFunnelProps & {
  step: string;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    value?.workArrangementList || [],
  );

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
        // 순환근무와 교대근무 중 하나만 선택 가능
        setSelectedOptions([
          optionAsString,
          ...selectedOptions.filter(item => item === 'NONE'),
        ]);
      }
    }
  };

  return (
    <DetailLayout
      step={step}
      progress={64}
      onBackPress={onPrev}
      onButtonPress={async () => {
        const valueToSend = WORK_ARRANGEMENT.filter(w =>
          selectedOptions.includes(w.value),
        ).map(w => w.value);
        if (valueToSend) {
          await handleDetailProfileValue?.('workArrangementList', valueToSend);
        }
        onNext();
      }}
      isBtnActive={selectedOptions.length !== 0}>
      <SelectBox
        options={WORK_ARRANGEMENT.map(workform => ({
          label: workform.label,
          value: workform.value,
        }))}
        selectedOption={selectedOptions}
        onSelect={handleSelectOption}
        mode="multiple"
      />
    </DetailLayout>
  );
};

export default 근무형태;
