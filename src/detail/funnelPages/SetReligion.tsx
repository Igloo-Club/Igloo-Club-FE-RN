import React, {useState} from 'react';
import {detailProfileFunnelProps} from '../types/detailProfileFunnelTypes';
import {RELIGION} from '../constants/DETAIL_PROFILE_SELECTS';
import SelectBox from '../components/SelectBox';
import DetailLayout from '../components/DetailProfileLayout';

const 종교여부 = ({
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
      progress={16}
      onBackPress={onPrev}
      onButtonPress={async () => {
        if (typeof selectedOption === 'string') {
          await handleDetailProfileValue?.('religion', selectedOption);
        }
        onNext();
      }}
      isBtnActive={selectedOption !== null}>
      <SelectBox
        options={RELIGION}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
    </DetailLayout>
  );
};

export default 종교여부;
