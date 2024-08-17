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
      isBtnActive={email.length > 0}>
      <CoustomTextInput
        label="회사 이메일 주소"
        placeholder="이메일 주소 입력"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
    </RegisterLayout>
  );
};

export default EmailFunnel;
