import React, {useState} from 'react';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import RegisterLayout from '../components/RegisterLayout';
import {View} from 'react-native';
import {AREAS} from '../constatnts/REGISTER_SELECTS';
import SelectBoxArea from '../components/SelectBoxArea';
import instance from '../../common/apis/axiosInstance';

const SelectAreaFunnel = ({step, onNext, onPrev}: IregisterFunnulProps) => {
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null,
  );

  const submit = async () => {
    try {
      // await instance.post('/api/member/location', {
      //   location: selectedOption,
      // });
      onNext();
    } catch {}
  };

  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={submit}
      isBtnActive={true}>
      <View>
        <SelectBoxArea
          options={AREAS}
          selectedOption={selectedOption !== null ? [selectedOption] : []}
          onSelect={setSelectedOption}
          mode="single"
        />
      </View>
    </RegisterLayout>
  );
};

export default SelectAreaFunnel;
