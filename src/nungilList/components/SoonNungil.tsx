import React, {useState} from 'react';
import styled from '@emotion/native';
import {View, Image} from 'react-native';

const SoonNungil = () => {
  const [isVisible, setIsVisible] = useState(true);
  const X = require('../../qna/assets/images/x.png');

  return (
    <Container>
      {isVisible ? (
        <IntroBox>
          <NormalText>
            님의 프로필을 보고 호감을 가진 분들이에요. 받은 눈길 리스트는{' '}
            <BoldText>최대 3일 보관되며, 이후엔 볼 수 없어요.</BoldText>
          </NormalText>
          <XButton onPress={() => setIsVisible(false)}>
            <Image source={X} style={{width: 12, height: 12}} />
          </XButton>
        </IntroBox>
      ) : (
        ''
      )}
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

const IntroBox = styled(View)`
  display: flex;
  flex-direction: row;
  padding: 15px 25px;
  border-radius: 0px 15px 15px 15px;
  background: #fafafb;
`;

const NormalText = styled.Text`
  color: #566066;
  font-size: 13px;
  font-weight: 500;
`;

const BoldText = styled.Text`
  color: #303030;
  font-size: 13px;
  font-weight: 600;
`;

const XButton = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
`;
