import React, {useState} from 'react';
import {SCALE} from '../constants/DETAIL_PROFILE_SELECTS';
import SelectBox from '../components/SelectBox';
import {detailProfileFunnelProps} from '../types/detailProfileFunnelTypes';
import DetailLayout from '../components/DetailProfileLayout';

const 회사규모 = ({
  step,
  onPrev,
  onNext,
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
      progress={72}
      onBackPress={onPrev}
      onButtonPress={async () => {
        if (typeof selectedOption === 'string') {
          await handleDetailProfileValue?.('scale', selectedOption);
        }
        onNext();
      }}
      isBtnActive={selectedOption !== null}>
      <SelectBox
        options={SCALE.map(scale => ({
          label: scale.label,
          value: scale.value,
        }))}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={option => setSelectedOption(option)}
        mode="single"
      />
    </DetailLayout>
  );
};

export default 회사규모;
