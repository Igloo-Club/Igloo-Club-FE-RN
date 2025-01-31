import React, {useState} from 'react';
import styled from '@emotion/native';
import {View, Text} from 'react-native';
import {X} from '../../qna/assets/images';

const ReceivedNungil = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Container>
      {isVisible ? (
        <IntroBox>
          <Text>
            님의 프로필을 보고 호감을 가진 분들이에요. 받은 눈길 리스트는 최대
            3일 보관되며, 이후엔 볼 수 없어요.
          </Text>
          <XButton onPress={() => setIsVisible(false)}>
            <X />
          </XButton>
        </IntroBox>
      ) : (
        ''
      )}
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

const IntroBox = styled(View)`
  padding: 20px;
  border-radius: 0px 15px 15px 15px;
  background: #fafafb;
`;

const XButton = styled.TouchableOpacity``;
