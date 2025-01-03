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
}: detailProfileFunnelProps & {
  step: string;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null,
  );

  return (
    <DetailLayout
      step={step}
      progress={56}
      onBackPress={onPrev}
      onButtonPress={async () => {
        if (typeof selectedOption === 'string') {
          const valueToSend =
            typeof selectedOption === 'number'
              ? selectedOption
              : GROSS_SALARY.find(income => income.label === selectedOption)
                  ?.value || 4;
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
