import React, {useState} from 'react';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import RegisterLayout from '../components/RegisterLayout';
import {View} from 'react-native';
import CoustomTextInput from '../components/TextInput';

const JobFunnel = ({
  step,
  onNext,
  onPrev,
  handleChange,
}: IregisterFunnulProps) => {
  const [job, setJob] = useState('');
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
        <CoustomTextInput
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
