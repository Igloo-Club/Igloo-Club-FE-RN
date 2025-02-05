import React from 'react';
import styled from '@emotion/native';
import instance from '../apis/axiosInstance';
import {Text, TouchableOpacity} from 'react-native';
import {NungilImg} from '../assets/0_index';

const NungilModal = ({nungilId}: {nungilId: number}) => {
  console.log(nungilId);
  const handleSendNungil = async () => {
    try {
      await instance.post(`/api/nungil/send?nungilId=${nungilId}`);
      console.log('눈길 보내기 성공');
    } catch (err) {
      console.log('눈길 보내기 실패 ', err);
    }
  };

  const handleDeleteNungil = async () => {
    try {
      await instance.delete('/api/nungil/delete?', {
        params: {
          nungilId: nungilId,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Overlay>
      <Container>
        <NungilBtn onPress={handleSendNungil}>
          <NungilImg />
          <BtnText>눈길을 보낼래요</BtnText>
        </NungilBtn>
        <ModalBtn onPress={handleDeleteNungil}>
          <BtnText>프로필 삭제하기</BtnText>
        </ModalBtn>
      </Container>
    </Overlay>
  );
};

export default NungilModal;

const Overlay = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Container = styled.View`
  position: absolute;
  flex-direction: column;
  align-items: flex-end;
  bottom: 110px;
  right: 30px;
  gap: 10px;
  z-index: 1000;
`;

const NungilBtn = styled.TouchableOpacity`
  height: 50px;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  border-radius: 50px;
  background: #fff0f0;
  padding: 10px 20px;
  gap: 10px;
`;

const ModalBtn = styled.TouchableOpacity`
  height: 50px;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  background: #fafafb;
  padding: 10px 20px;
`;

const BtnText = styled.Text`
  color: #303030;
  font-size: 15px;
  font-weight: 600;
`;
