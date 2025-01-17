import React from 'react';
import styled from '@emotion/native';
import {View, Text} from 'react-native';

const ReceivedNungil = () => {
  return (
    <Container>
      <Text>받은 눈길</Text>
    </Container>
  );
};

export default ReceivedNungil;

const Container = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 0px 20px 0px 20px;
`;
