import React, {useState} from 'react';
import styled from '@emotion/native';
import instance from '../apis/axiosInstance';
import {NungilImg} from '../assets/0_index';
import {Text, TouchableOpacity} from 'react-native';

const NungilModal = ({
  nungilId,
  from,
  isSent,
  setIsSent,
  isReceived,
  setIsReceived,
  setIsModalOpen,
}: {
  nungilId: number;
  from: string;
  isSent: boolean;
  setIsSent: React.Dispatch<React.SetStateAction<boolean>>;
  isReceived: boolean;
  setIsReceived: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleSendNungil = async () => {
    try {
      await instance.post(`/api/nungil/send?nungilId=${nungilId}`);
      setIsSent(true);
    } catch (err) {
      console.log('눈길 보내기 실패 ', err);
    }
  };

  const handleAcceptNungil = async () => {
    try {
      await instance.patch(`/api/nungil/accept?nungilId=${nungilId}`);
      setIsReceived(true);
    } catch (err) {
      console.log('눈길 수락하기 실패 ', err);
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
      {isSent ? (
        <ModalContainer>
          <Modal>
            <ModalText>눈길 보내기에 성공했어요!</ModalText>
            <TouchableOpacity
              onPress={() => {
                setIsModalOpen(false);
                setIsSent(false);
              }}>
              <Text style={{color: 'gray'}}>닫기</Text>
            </TouchableOpacity>
          </Modal>
        </ModalContainer>
      ) : isReceived ? (
        <ModalContainer>
          <Modal>
            <ModalText>눈길을 수락했어요!</ModalText>
            <TouchableOpacity
              onPress={() => {
                setIsModalOpen(false);
                setIsSent(false);
              }}>
              <Text style={{color: 'gray'}}>닫기</Text>
            </TouchableOpacity>
          </Modal>
        </ModalContainer>
      ) : from === 'SoonNungil' ? null : (
        <Container>
          {from === 'SendNungil' && (
            <NungilBtn onPress={handleSendNungil}>
              <NungilImg />
              <BtnText>눈길을 보낼래요</BtnText>
            </NungilBtn>
          )}
          {from === 'ReceivedNungil' && (
            <NungilBtn onPress={handleAcceptNungil}>
              <NungilImg />
              <BtnText>눈길을 수락할래요</BtnText>
            </NungilBtn>
          )}
          <ModalBtn onPress={() => setIsModalOpen(false)}>
            <BtnText>프로필 삭제하기</BtnText>
          </ModalBtn>
        </Container>
      )}
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

const ModalContainer = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: 400px;
  right: 100px;
  z-index: 1000;
`;

const Modal = styled.View`
  padding: 30px 20px;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
`;

const ModalText = styled.Text`
  margin-bottom: 10px;
  font-size: 16px;
  color: #fa7268;
  font-weight: 700;
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
