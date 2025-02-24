import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, View, Image} from 'react-native';
import styled from '@emotion/native';
import instance from '../../common/apis/axiosInstance';
import PickProfileBtn from '../components/PickProfileBtn';
import CustomSelect from '../components/CustomSelect';
import ImageSlider from '../components/ImageSlider';
import {ProfileDataTypesProps} from '../../common/types/ProfileDataTypesProps';
// import PushNoti from '../../common/components/PushNoti';

const MainPage = ({navigation}: any) => {
  const [myName, setMyName] = useState<string>('');
  const [profileData, setProfileData] = useState<ProfileDataTypesProps[]>([]);
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    handleList();
    handleMyData();
    handleLocation();
  }, []);

  useEffect(() => {
    handleList();
  }, [location]);

  console.log('음 : ', location);

  const handleList = async () => {
    console.log('ccc');
    try {
      const res = await instance.get('/api/nungil/list', {
        params: {
          status: 'RECOMMENDED',
          location: location,
          page: 0,
          size: 4,
        },
      });
      console.log('응답값 : ', res.data.content);
      setProfileData(res.data.content);
      console.log('데이터 :', profileData);
    } catch (err) {
      console.log('추천 눈길 리스트 조회 에러: ', err);
    }
  };

  const handleMyData = async () => {
    try {
      const res = await instance.get('/api/member');
      setMyName(res.data.nickname);
    } catch (err) {
      console.log('handleMyData 에러 : ', err);
    }
  };

  const handleLocation = async () => {
    try {
      const res = await instance.get('/api/member/location');
      setLocation(res.data.location);
    } catch (error) {
      console.log('본인 근무지 조회 에러:', error);
    }
  };

  return (
    <Container>
      <Header>
        <SelectArea>
          <CustomSelect onSelectedChange={setLocation} location={location} />
        </SelectArea>
        <MainTitle>
          <Title>{myName}님과 찰떡인</Title>
          <Title>오늘의 특별한 인연을 소개할게요</Title>
        </MainTitle>
      </Header>
      {profileData.length > 0 ? (
        <Content>
          <Comment>이 친구들은 어때요?</Comment>
          <ImageSlider navigation={navigation} profiles={profileData} />
        </Content>
      ) : (
        <NoContent>
          <NoRecommend>추천된 눈길이 없어요.</NoRecommend>
          <NoRecommend>
            아래 버튼을 눌러 새로운 프로필을 뽑아보세요!
          </NoRecommend>
        </NoContent>
      )}
      <Footer>
        <PickProfileBtn refreshList={handleList} location={location} />
      </Footer>
    </Container>
  );
};

export default MainPage;

const Container = styled(SafeAreaView)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
`;

const Header = styled(View)`
  padding: 25px 20px 0px 20px;
  margin-bottom: 24px;
  z-index: 999;
`;

const SelectArea = styled(View)`
  width: 100%;
  display: flex;
  justify-content: start;
  color: #686f7a;
  font-size: 16px;
  font-weight: 500;
  z-index: 999;
`;

const MainTitle = styled(View)``;

const Title = styled.Text`
  color: #303030;
  font-size: 24px;
  font-weight: 600;
`;

const Content = styled(View)`
  height: 100%;
  padding: 35px 20px 56px 20px;
  border-radius: 40px 40px 0px 0px;
  background-color: #ffffff;
  gap: 26px;
`;

const Comment = styled.Text`
  color: #303030;
  font-size: 18px;
  font-weight: 600;
`;

const NoContent = styled(View)`
  height: 100%;
  padding-top: 200px;
  align-items: center;
  border-radius: 40px 40px 0px 0px;
  background-color: #ffffff;
  gap: 20px;
`;

const NoRecommend = styled.Text`
  color: #303030;
  font-size: 18px;
  font-weight: 600;
`;

const Footer = styled(View)`
  position: absolute;
  bottom: 0;
  z-index: 999;
  width: 100%;
`;
