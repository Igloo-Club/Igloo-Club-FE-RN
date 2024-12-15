import React, {useState} from 'react';
import SelectBox from '../components/SelectBox';
import {detailProfileFunnelProps} from '../types/detailProfileFunnelTypes';
import {TATTOO} from '../constants/DETAIL_PROFILE_SELECTS';
import DetailLayout from '../components/DetailProfileLayout';

const 문신여부 = ({
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
      progress={24}
      onBackPress={onPrev}
      onButtonPress={async () => {
        if (typeof selectedOption !== null) {
          const tattooValue = selectedOption === 'true';
          await handleDetailProfileValue?.('tattoo', tattooValue);
          onNext();
        }
      }}
      isBtnActive={selectedOption !== null}>
      <SelectBox
        options={TATTOO}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
    </DetailLayout>
  );
};

export default 문신여부;
