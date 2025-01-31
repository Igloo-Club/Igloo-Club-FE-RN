import React from 'react';
import styled from '@emotion/native';
import instance from '../apis/axiosInstance';
import {Text, TouchableOpacity} from 'react-native';
import {ExitNungilButton} from '../../main/assets/0_index';

const NungilModal = ({
  nungilId,
  closeModal,
}: {
  nungilId: number;
  closeModal: () => void;
}) => {
  const handleSendNungil = async () => {
    try {
      await instance.post('/api/nungil/send?', {
        params: {
          nungilId: nungilId,
        },
      });
    } catch (err) {
      console.log(err);
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
        <TouchableOpacity onPress={handleSendNungil}>
          <Text>눈길을 보낼래요</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteNungil}>
          <Text>프로필 삭제하기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={closeModal}>
          <ExitNungilButton />
        </TouchableOpacity>
      </Container>
    </Overlay>
  );
};

export default NungilModal;

const Overlay = styled.View`
  position: absolute;
  bottom: 0;
  right: 0%;
  width: 100%;
  height: 150%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Container = styled.View`
  position: absolute;
  bottom: 40px;
  right: 30px;
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;
