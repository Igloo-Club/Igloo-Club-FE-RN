import React from 'react';
import styled from '@emotion/native';
import {TouchableOpacity} from 'react-native';
import {ExitNungilButton} from '../assets/0_index';

const NungilModal = ({closeModal}: {closeModal: () => void}) => {
  return (
    <Overlay>
      <Container>
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
