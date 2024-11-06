import React, {useState} from 'react';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import RegisterLayout from '../components/RegisterLayout';
import {View} from 'react-native';
import CustomTextInput from '../components/TextInput';

const JobFunnel = ({
  step,
  onNext,
  onPrev,
  handleChange,
  value,
}: IregisterFunnulProps) => {
  const [job, setJob] = useState(value?.job || '');
  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={async () => {
        await handleChange?.('job', job);
        onNext();
      }}
      isBtnActive={job.length > 0}>
      <View>
        <CustomTextInput
          label="직무"
          placeholder="직무 입력"
          value={job}
          onChangeText={setJob}
          keyboardType="default"
        />
      </View>
    </RegisterLayout>
  );
};

export default JobFunnel;
