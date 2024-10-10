import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import BottomModal from '../../common/components/BottomModal';
import styled from '@emotion/native';
import {useState} from 'react';
import {STFlexRow_sb} from '../../common/styles/commonStyles';
import AuthNumInput from './AuthNumInput';
import {closeBtnIMG} from '../../common/assets/0_index';
import instance from '../../common/apis/axiosInstance';

interface IEmailModalProps {
  onNext: () => void;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
}

const EmailModal = ({
  onNext,
  isModalOpen,
  setIsModalOpen,
  email,
}: IEmailModalProps) => {
  const [authNum, setAuthNum] = useState('');

  const submitAuthEmail = async () => {
    try {
      // await instance.post('api/company/verification', {
      //   code: authNum,
      //   email: email,
      // });
      onNext();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <BottomModal
      isVisible={isModalOpen}
      onClose={() => {
        setIsModalOpen(false);
      }}>
      <StEmailModal.Container>
        <STFlexRow_sb>
          <StEmailModal.Title>인증번호 입력</StEmailModal.Title>
          <StXBtn source={closeBtnIMG} />
        </STFlexRow_sb>
        <STFlexRow_sb>
          <StEmailModal.InfoText>이메일 주소 | {email}</StEmailModal.InfoText>
          <StEmailModal.RedInfoText>시간연장</StEmailModal.RedInfoText>
        </STFlexRow_sb>
        <AuthNumInput value={authNum} onChangeNum={setAuthNum} />
        <Button disabled={!authNum.length} onPress={submitAuthEmail}>
          <ButtonText disabled={!authNum.length}>인증하기</ButtonText>
        </Button>
        <StEmailModal.ReSendBtn>
          인증 메일이 오지 않나요?
        </StEmailModal.ReSendBtn>
      </StEmailModal.Container>
    </BottomModal>
  );
};

export default EmailModal;

const BaseInfoText = styled.Text`
  color: #303030;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;

  letter-spacing: -0.3px;
`;

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

  letter-spacing: -0.3px;
  color: ${({disabled, theme}) => (disabled ? '#bbc0ca' : theme.colors.white)};
`;

const StEmailModal = {
  Container: styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 16px;
    padding: 20px;
  `,
  Title: styled.Text`
    color: #303030;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;

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

const StXBtn = styled(Image)`
  width: 11px;
  height: 11px;
`;
