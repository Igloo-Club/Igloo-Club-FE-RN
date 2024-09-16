import React, {useEffect, useState} from 'react';

import RegisterLayout from '../components/RegisterLayout';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import CoustomTextInput from '../components/TextInput';
import BottomModal from '../../common/components/BottomModal';
import {Image, TouchableOpacity} from 'react-native';
import styled from '@emotion/native';
import {closeBtnIMG} from '../../common/assets/0_index';
import {STFlexRow_sb} from '../../common/styles/commonStyles';
import AuthNumInput from '../components/AuthNumInput';

const EmailFunnel = ({step, onNext, onPrev}: IregisterFunnulProps) => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authNum, setAuthNum] = useState('');

  useEffect(() => {}, []);

  return (
    <>
      <RegisterLayout
        step={step}
        onBackPress={onPrev}
        onButtonPress={() => setIsModalOpen(true)}
        isBtnActive={email.length > 0}>
        <CoustomTextInput
          label="회사 이메일 주소"
          placeholder="이메일 주소 입력"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </RegisterLayout>

      {isModalOpen && (
        <BottomModal
          isVisible={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}>
          <EmailModal.Container>
            <STFlexRow_sb>
              <EmailModal.Title>인증번호 입력</EmailModal.Title>
              <Image source={closeBtnIMG} style={{width: 11, height: 11}} />
            </STFlexRow_sb>
            <STFlexRow_sb>
              <EmailModal.InfoText>이메일 주소 | {email}</EmailModal.InfoText>
              <EmailModal.RedInfoText>시간연장</EmailModal.RedInfoText>
            </STFlexRow_sb>
            <AuthNumInput value={authNum} onChangeNum={setAuthNum} />
            <Button disabled={!authNum.length} onPress={onNext}>
              <ButtonText disabled={!authNum.length}>인증하기</ButtonText>
            </Button>
            <EmailModal.ReSendBtn>
              인증 메일이 오지 않나요?
            </EmailModal.ReSendBtn>
          </EmailModal.Container>
        </BottomModal>
      )}
    </>
  );
};

export default EmailFunnel;

const BaseInfoText = styled.Text`
  color: #303030;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const EmailModal = {
  Container: styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 16px;
  `,
  Title: styled.Text`
    color: #303030;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
  InfoText: BaseInfoText,
  RedInfoText: styled(BaseInfoText)`
    color: #fa7268;
  `,
  ReSendBtn: styled.Text`
    text-decoration: underline;
    ${({theme}) => theme.fonts.body3};
    color: #9fa4b0;
  `,
};

const Button = styled(TouchableOpacity)<{disabled: boolean}>`
  width: 100%;
  height: 54px;
  padding: 17px;
  border-radius: 7px;
  align-items: center;

  background-color: ${({disabled}) => (disabled ? '#e4e8ec' : '#FA7268')};
`;

const ButtonText = styled.Text<{disabled: boolean}>`
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
  color: ${({disabled, theme}) => (disabled ? '#bbc0ca' : theme.colors.white)};
`;
