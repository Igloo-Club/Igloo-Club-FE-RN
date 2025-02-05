import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styled from '@emotion/native';
import instance from '../../common/apis/axiosInstance';
import NungilListLayout from './NungilListLayout';

const SoonNungil = () => {
  const [myName, setMyName] = useState<string>('');
  const [isVisible, setIsVisible] = useState(true);
  const X = require('../../qna/assets/images/x.png');

  useEffect(() => {
    handleMyData();
  });

  const handleMyData = async () => {
    try {
      const res = await instance.get('/api/member');
      setMyName(res.data.nickname);
    } catch (err) {
      console.log('handleMyData 에러 : ', err);
    }
  };

  return (
    <Container>
      {isVisible && (
        <IntroBox>
          <NormalText>
            {myName}님의 프로필을 보고 호감을 가진 분들이에요. 받은 눈길
            리스트는{' '}
            <BoldText>최대 3일 보관되며, 이후엔 볼 수 없어요.</BoldText>
          </NormalText>
          <XButton onPress={() => setIsVisible(false)}>
            <Image source={X} style={{width: 12, height: 12}} />
          </XButton>
        </IntroBox>
      )}
      <NungilListLayout status="SOON" from="SoonNungil" />
    </Container>
  );
};

export default SoonNungil;

const Container = styled(View)`
  flex: 1;
  background-color: #ffffff;
`;

const IntroBox = styled(View)`
  display: flex;
  flex-direction: row;
  margin: 0px 15px;
  padding: 15px 30px 15px 20px;
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

const XButton = styled(TouchableOpacity)`
  position: absolute;
  top: 14px;
  right: 13px;
`;
