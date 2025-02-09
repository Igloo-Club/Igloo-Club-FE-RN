import React, {useState} from 'react';
import {MARRIAGE_PLAN} from '../constants/DETAIL_PROFILE_SELECTS';
import SelectBox from '../components/SelectBox';
import {detailProfileFunnelProps} from '../types/detailProfileFunnelTypes';
import DetailLayout from '../components/DetailProfileLayout';

const 결혼예정여부 = ({
  step,
  onPrev,
  onNext,
  handleDetailProfileValue,
  value,
}: detailProfileFunnelProps & {
  step: string;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    value?.marriagePlan ?? null,
  );

  return (
    <DetailLayout
      step={step}
      progress={40}
      onBackPress={onPrev}
      onButtonPress={async () => {
        const valueToSend =
          typeof selectedOption === 'number'
            ? selectedOption
            : MARRIAGE_PLAN.find(plan => plan.label === selectedOption)
                ?.value || 0;

        if (valueToSend !== undefined) {
          await handleDetailProfileValue?.('marriagePlan', valueToSend);
        }

        onNext();
      }}
      isBtnActive={selectedOption !== null}>
      <SelectBox
        options={MARRIAGE_PLAN}
        selectedOption={selectedOption !== null ? [selectedOption] : []}
        onSelect={option => setSelectedOption(option)}
        mode="single"
      />
    </DetailLayout>
  );
};

export default 결혼예정여부;
