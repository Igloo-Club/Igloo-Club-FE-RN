import React, {useState} from 'react';
import RegisterLayout from '../components/RegisterLayout';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import SelectBox from '../../detail/components/SelectBox';

const GenderFunnel = ({step, onNext, onPrev}: IregisterFunnulProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={onNext}
      isBtnActive={typeof selectedOption === 'string'}>
      <SelectBox
        options={['여성', '남성']}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
    </RegisterLayout>
  );
};

export default GenderFunnel;
