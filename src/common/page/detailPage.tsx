import React, {useState} from 'react';
import styled from '@emotion/native';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {BackArrow} from '../../main/assets/0_index';
import {NungilButton} from '../../main/assets/0_index';
import NungilModal from '../../main/components/NungilModal';

const DetailPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Top>
        <BackArrow />
      </Top>
      <Content>
        <IntroBox>
          <Text>저는요, 👋🏻</Text>
        </IntroBox>
        <InfoBox>
          <Title>상대방에 대한 간단한 정보예요</Title>
        </InfoBox>
        <QnABox>
          <Title>상대방이 작성한 1문 1답</Title>
          <QnA></QnA>
        </QnABox>
      </Content>
      <NungilBtn onPress={() => setIsModalOpen(true)}>
        <NungilButton />
      </NungilBtn>
      {isModalOpen && <NungilModal closeModal={() => setIsModalOpen(false)} />}
    </Container>
  );
};

export default DetailPage;

const Container = styled(SafeAreaView)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;
`;

const Top = styled(View)`
  padding: 25px 20px 0px 20px;
`;

const Content = styled(View)`
  padding: 25px 20px 0px 20px;
`;

const IntroBox = styled(View)`
  padding: 20px;
  border-radius: 0px 15px 15px 15px;
  background: #fafafb;
`;

const InfoBox = styled(View)`
  margin-top: 32px;
`;

const Title = styled(Text)`
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: 700;
`;

const QnABox = styled(View)`
  margin-top: 44px;
`;

const QnA = styled(View)`
  padding: 24px 20px;
  border-radius: 15px;
  background: #fafafb;
`;

const NungilBtn = styled(TouchableOpacity)`
  position: absolute;
  bottom: 40px;
  right: 30px;
`;
