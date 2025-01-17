import React from 'react';
import styled from '@emotion/native';
import {View, Text} from 'react-native';

const SoonNungil = () => {
  return (
    <Container>
      <Text>곧 맺어질 눈길</Text>
    </Container>
  );
};

export default SoonNungil;

const Container = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 0px 20px 0px 20px;
`;
