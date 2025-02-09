import React, {useState} from 'react';

import RegisterLayout from '../components/RegisterLayout';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import CustomTextInput from '../components/TextInput';
import EmailModal from '../components/EmailModal';
import {isValidEmail} from '../../common/utils/validation';
import instance from '../../common/apis/axiosInstance';
import CompanyFunnel from './CompanyFunnel';

const EmailFunnel = ({step, onNext, onPrev}: IregisterFunnulProps) => {
  const [email, setEmail] = useState('');
  const [validErrContent, setValidErrContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInitialPage, setIsInitialPage] = useState(true);

  const submitEmail = async () => {
    //검증
    if (!isValidEmail(email)) {
      setValidErrContent('메일 형식대로 입력해야 해요');
      return;
    } else {
      setValidErrContent('');
    }

    try {
      setIsModalOpen(true);
      await instance.post('api/company/email', {
        email: email,
      });
    } catch (err) {
      setIsModalOpen(false);
      console.log(err);
    }
  };

  const handleSetInitialPage = () => {
    setIsInitialPage(false);
  };

  return isInitialPage ? (
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
          validErrContent={validErrContent}
        />
      </RegisterLayout>

      {isModalOpen && (
        <EmailModal
          onNext={handleSetInitialPage}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          email={email}
        />
      )}
    </>
  ) : (
    <CompanyFunnel onNext={onNext} onPrev={onPrev} email={email} />
  );
};

export default EmailFunnel;
