import React, {useState} from 'react';
import {GROSS_SALARY} from '../constants/DETAIL_PROFILE_SELECTS';
import SelectBox from '../components/SelectBox';
import {detailProfileFunnelProps} from '../types/detailProfileFunnelTypes';
import DetailLayout from '../components/DetailProfileLayout';

const 세전연봉 = ({
  onPrev,
  onNext,
  step,
  handleDetailProfileValue,
  value,
}: detailProfileFunnelProps & {
  step: string;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    value?.grossSalary || null,
  );

  return (
    <DetailLayout
      step={step}
      progress={56}
      onBackPress={onPrev}
      onButtonPress={async () => {
        let valueToSend;

        if (selectedOption !== null) {
          // 선택된 값이 string이면 GROSS_SALARY에서 해당하는 값을 찾아서 숫자로 반환
          if (typeof selectedOption === 'string') {
            const matchedOption = GROSS_SALARY.find(
              income => income.label === selectedOption,
            );
            valueToSend = matchedOption ? matchedOption.value : 4; // 기본값 4로 설정
          } else {
            // 숫자 값이면 그대로 전달
            valueToSend = selectedOption;
          }

          await handleDetailProfileValue?.('grossSalary', valueToSend);
        }

        onNext();
      }}
      isBtnActive={selectedOption !== null}>
      <SelectBox
        options={GROSS_SALARY}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
    </DetailLayout>
  );
};

export default 세전연봉;
