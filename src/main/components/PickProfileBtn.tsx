import React, {useState, useEffect} from 'react';
import styled from '@emotion/native';
import instance from '../../common/apis/axiosInstance';
import {TouchableOpacity, View} from 'react-native';
import CountDown from './CountDown';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PickProfileBtn = ({
  ProfileData,
  refreshList,
  location,
}: {
  ProfileData: any;
  refreshList: () => void;
  location: string;
}) => {
  const [activePick, setActivePick] = useState(true);
  const [isLimitModalOpen, setIsLimitModalOpen] = useState<boolean>(false);
  const [isExistModalOpen, setIsExistModalOpen] = useState<boolean>(false);
  const [remainingPicks, setRemainingPicks] = useState<number>(0);

  // 무료 뽑기 가능 횟수 업데이트
  const updatePickCount = async () => {
    const now = new Date();
    const currentHour = now.getHours();

    const savedPicks = await AsyncStorage.getItem('remainingPicks');
    let updatedRemainingPicks = savedPicks ? parseInt(savedPicks) : 0;

    // 11시부터 13시 or 16시부터 18시 사이에 무료 뽑기 기회 1번 부여
    if (
      (currentHour >= 11 && currentHour < 13) ||
      (currentHour >= 16 && currentHour < 18)
    ) {
      if (updatedRemainingPicks === 0) {
        updatedRemainingPicks = 1;
      }
    } else {
      updatedRemainingPicks = 0;
    }

    setRemainingPicks(updatedRemainingPicks);
    await AsyncStorage.setItem(
      'remainingPicks',
      updatedRemainingPicks.toString(),
    );
  };

  useEffect(() => {
    updatePickCount();
    const interval = setInterval(updatePickCount, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePickBtn = async () => {
    if (remainingPicks > 0) {
      try {
        const res = await instance.post(
          `/api/nungil/recommend?location=${location}`,
        );
        if (res.data) {
          console.log('됨', res.data);
          refreshList();
          setRemainingPicks(remainingPicks - 1); // 뽑기 기회 감소
          await AsyncStorage.setItem(
            'remainingPicks',
            (remainingPicks - 1).toString(),
          ); // 상태 업데이트 후 AsyncStorage에 저장
        } else {
          setIsExistModalOpen(true);
        }
      } catch (err: any) {
        console.log('PickProfileBtn api 에러 : ', err);
        if (err.response && err.response.status === 403) {
          setIsLimitModalOpen(true);
        }
      }
    } else {
      setIsLimitModalOpen(true); // 뽑기 기회가 없으면 제한 모달 표시
    }
  };

  return (
    <Container>
      <PickBtn
        activePick={activePick}
        onPress={handlePickBtn}
        disabled={remainingPicks <= 0}>
        {remainingPicks > 0 ? (
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
