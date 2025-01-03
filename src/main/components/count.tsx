import React, {useState} from 'react';
import styled from '@emotion/native';
import {View} from 'react-native';

const Count = () => {
  const [activePick, setActivePick] = useState(false);
  return (
    <Container>
      {activePick ? (
        <ActiveMent>번의 추가 프로필 뽑기 기회가 생겼어요!</ActiveMent>
      ) : (
        <>
          <UnActiveMent>다음 추가 프로필 뽑기까지 {} 남았어요</UnActiveMent>
        </>
      )}
    </Container>
  );
};

export default Count;

const Container = styled(View)<{activePick: boolean}>`
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
