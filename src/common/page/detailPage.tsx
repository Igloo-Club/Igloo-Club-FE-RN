import React, {useState, useEffect} from 'react';
import styled from '@emotion/native';
import {useRoute} from '@react-navigation/native';
import instance from '../apis/axiosInstance';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {BackArrow} from '../../main/assets/0_index';
import {NungilButton} from '../../main/assets/0_index';
import NungilModal from '../components/NungilModal';
import {DetailProfileDataTypesProps} from '../types/DetailProfileDataTypesProps';

const DetailPage = ({navigation}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailProfile, setDetailProfile] =
    useState<DetailProfileDataTypesProps | null>(null);
  const route = useRoute();
  // const {nungilId} = route.params as {nungilId: number};

  // useEffect(() => {
  //   const handleDetailProfile = async () => {
  //     try {
  //       const res = await instance.get(
  //         `/api/nungil/detail?nungilId=${nungilId}`,
  //       );
  //       setDetailProfile(res.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   handleDetailProfile();
  // }, [nungilId]);

  // if (!detailProfile) {
  //   return (
  //     <Container>
  //       <Text>Loading...</Text>
  //     </Container>
  //   );
  // }

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
          <QnA>
            <Text>무슨 일을 하고 계세요?</Text>
          </QnA>
        </QnABox>
      </Content>
      <NungilBtn onPress={() => setIsModalOpen(true)}>
        <NungilButton />
      </NungilBtn>
      {isModalOpen && (
        <NungilModal
          nungilId={detailProfile.nungilId}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
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
