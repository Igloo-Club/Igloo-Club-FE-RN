import React, {useState} from 'react';
import SelectBox from '../components/SelectBox';
import {detailProfileFunnelProps} from '../types/detailProfileFunnelTypes';
import DetailLayout from '../components/DetailProfileLayout';
import {SMOKE} from '../constants/DETAIL_PROFILE_SELECTS';

const 흡연여부 = ({
  onPrev,
  onNext,
  step,
  handleDetailProfileValue,
  value,
}: detailProfileFunnelProps & {
  step: string;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    value?.smoke === true ? 'true' : value?.smoke === false ? 'false' : null,
  );

  return (
    <DetailLayout
      step={step}
      progress={32}
      onBackPress={onPrev}
      onButtonPress={async () => {
        if (typeof selectedOption !== null) {
          const smokeValue = selectedOption === 'true';
          await handleDetailProfileValue?.('smoke', smokeValue);
        }
        onNext();
      }}
      isBtnActive={selectedOption !== null}>
      <SelectBox
        options={SMOKE}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
    </DetailLayout>
  );
};

export default 흡연여부;
