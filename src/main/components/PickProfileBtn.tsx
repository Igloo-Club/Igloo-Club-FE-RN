import React, {useState} from 'react';
import styled from '@emotion/native';
import instance from '../../common/apis/axiosInstance';
import {TouchableOpacity, View} from 'react-native';
import CountDown from './CountDown';
// import LimitModal from './LimitModal';
// import ExistModal from './ExistModal';

const PickProfileBtn = ({ProfileData}: any) => {
  const [activePick, setActivePick] = useState(true);
  const [isLimitModalOpen, setIsLimitModalOpen] = useState<boolean>(false);
  const [isExistModalOpen, setIsExistModalOpen] = useState<boolean>(false);

  const handlePickBtn = async () => {
    try {
      const res = await instance.post('/api/nungil/recommend');
      if (res.data) {
        console.log(res.data);
      } else {
        console.log('안됨');
        setIsExistModalOpen(true);
      }
    } catch (err: any) {
      console.log('PickProfileBtn api 에러 : ', err);
      if (err.response && err.response.status === 403) {
        setIsLimitModalOpen(true);
      }
    }
  };

  return (
    <Container>
      <PickBtn activePick={activePick} onPress={handlePickBtn}>
        {activePick ? (
          <ActiveMent>번의 추가 프로필 뽑기 기회가 생겼어요!</ActiveMent>
        ) : (
          <>
            <UnActiveMent>
              다음 추가 프로필 뽑기까지 <CountDown /> 남았어요
            </UnActiveMent>
          </>
        )}
      </PickBtn>
      {isLimitModalOpen && (
        <></>
        // <LimitModal closeModal={() => setIsLimitModalOpen(false)} />
      )}
      {isExistModalOpen && (
        <></>
        // <ExistModal closeModal={() => setIsExistModalOpen(false)} />
      )}
    </Container>
  );
};

export default PickProfileBtn;

const Container = styled(View)`
  display: flex;
  width: 100%;
`;

const PickBtn = styled(TouchableOpacity)<{activePick: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
  background-color: ${({activePick}) => (activePick ? '#FA7268' : '#E4E8EC')};
`;

const ActiveMent = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
`;

const UnActiveMent = styled.Text`
  color: #bbc0ca;
  font-size: 15px;
  font-weight: 600;
`;
