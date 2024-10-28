import React, {useEffect, useState} from 'react';

import RegisterLayout from '../components/RegisterLayout';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import CustomTextInput from '../components/TextInput';
import EmailModal from '../components/EmailModal';

const EmailFunnel = ({step, onNext, onPrev}: IregisterFunnulProps) => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {}, []);

  const submitEmail = async () => {
    try {
      // await instance.post('api/company/email', {
      //   email: email,
      // });
      setIsModalOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <RegisterLayout
        step={step}
        onBackPress={onPrev}
        onButtonPress={submitEmail}
        isBtnActive={email.length > 0}>
        <CustomTextInput
          label="회사 이메일 주소"
          placeholder="이메일 주소 입력"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </RegisterLayout>

      {isModalOpen && (
        <EmailModal
          onNext={onNext}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          email={email}
        />
      )}
    </>
  );
};

export default EmailFunnel;
