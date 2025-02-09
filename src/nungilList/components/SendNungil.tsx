import React from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import NungilListLayout from './NungilListLayout';

const SendNungil = () => {
  return (
    <Container>
      <NungilListLayout status="SENT" from="SendNungil" />
    </Container>
  );
};

export default SendNungil;

const Container = styled(View)`
  flex: 1;
  background-color: #ffffff;
`;
