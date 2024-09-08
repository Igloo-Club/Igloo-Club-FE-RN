import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import styled from '@emotion/native';

interface DetailProfileHeaderProps {
  percent: number;
  onPrev?: () => void;
}

const DetailProfileHeader: React.FC<DetailProfileHeaderProps> = ({
  percent,
  onPrev,
}) => {
  const ArrowLeft = require('../assets/images/ArrowLeft.png');
  return (
    <Container>
      <NavStyles>
        <BackButton onPress={onPrev}>
          <Arrow source={ArrowLeft} />
        </BackButton>
      </NavStyles>
      <ProgressBar progress={percent / 100} width={150} color={'#FA7268'} />
    </Container>
  );
};

export default DetailProfileHeader;

const Container = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 44px;
  background-color: #ffffff;
`;

const NavStyles = styled(View)`
  position: absolute;
  left: 0;
  margin-top: 15px;
`;

const Arrow = styled(Image)`
  width: 15px;
  height: 15px;
`;

const BackButton = styled(TouchableOpacity)`
  margin-top: 15px;
`;

const ProgressBar = styled(Progress.Bar)`
  height: 4px;
  margin-top: 15px;
  appearance: none;
`;
