import React, {useState} from 'react';
import RegisterLayout from '../components/RegisterLayout';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import SelectBox from '../../detail/components/SelectBox';
import {GENDER} from '../constatnts/REGISTER_SELECTS';

const GenderFunnel = ({step, onNext, onPrev}: IregisterFunnulProps) => {
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null,
  );

  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={onNext}
      isBtnActive={typeof selectedOption !== null}>
      <SelectBox
        options={GENDER}
        selectedOption={selectedOption !== null ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
    </RegisterLayout>
  );
};

export default GenderFunnel;
