import React, {useState} from 'react';

import RegisterLayout from '../components/RegisterLayout';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import CoustomTextInput from '../components/TextInput';

const EmailFunnel = ({step, onNext, onPrev}: IregisterFunnulProps) => {
  const [email, setEmail] = useState('');

  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={onNext}
      isBtnActive={Boolean(email)}>
      <CoustomTextInput
        placeholder=""
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
    </RegisterLayout>
  );
};

export default EmailFunnel;
