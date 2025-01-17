import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styled from '@emotion/native';
import {SelectArrow} from '../assets/0_index';
import NavBar from '../../common/components/NavBar';
import PickProfileBtn from '../components/PickProfileBtn';
import CustomSelect from '../components/CustomSelect';
import ImageSlider from '../components/ImageSlider';

const MainPage = ({navigation}: any) => {
  const handleSelectedChange = (newSelected: string) => {
    // setSelected(newSelected);
    // handleGetAllProfile();
  };

  return (
    <Container>
      <Header>
        <SelectArea>
          <CustomSelect onSelectedChange={handleSelectedChange} />
        </SelectArea>
        <MainTitle>
          <Title>마음에 드는 상대와</Title>
          <Title>오늘 커피 한 잔 어떠세요? ☕️</Title>
        </MainTitle>
      </Header>
      <Content>
        <Comment>이 친구들은 어때요?</Comment>
        <ImageSlider />
      </Content>
      <Footer>
        <PickProfileBtn />
        <NavBar />
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
`;

const SelectArea = styled(View)`
  width: 100%;
  display: flex;
  justify-content: start;
  color: #686f7a;
  font-size: 16px;
  font-weight: 500;
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

const Footer = styled(View)`
  position: absolute;
  bottom: 0;
  z-index: 999;
  width: 100%;
`;
