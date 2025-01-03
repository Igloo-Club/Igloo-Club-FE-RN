import React from 'react';
import styled from '@emotion/native';
// import { theme } from '../styles/theme';
import {TouchableOpacity, View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {
  HomeBtn000,
  ChatBtn000,
  HeartBtn000,
  PeopleBtn000,
  HomeBtnGRAY,
  ChatBtnGRAY,
  HeartBtnGRAY,
  PeopleBtnGRAY,
} from '../assets/0_index';

const NavBar = ({navigation}: any) => {
  const route = useRoute();

  const handleActiveBtn = (path: string) => {
    if (route.name === path) {
      return 'active';
    } else {
      return 'inactive';
    }
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('mainPage')}>
        {handleActiveBtn('mainPage') === 'active' ? (
          <NavButton>
            <HomeBtn000 />
            <BtnText>홈</BtnText>
          </NavButton>
        ) : (
          <NavButton>
            <HomeBtnGRAY />
            <BtnText>홈</BtnText>
          </NavButton>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('chat')}>
        {handleActiveBtn('chat') === 'active' ? (
          <NavButton>
            <ChatBtn000 />
            <BtnText>매칭</BtnText>
          </NavButton>
        ) : (
          <NavButton>
            <ChatBtnGRAY />
            <BtnText>매칭</BtnText>
          </NavButton>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('nungillist', {state: {selectedBtn: 'received'}})
        }>
        {handleActiveBtn('nungillist') === 'active' ? (
          <NavButton>
            <HeartBtn000 />
            <BtnText>채팅</BtnText>
          </NavButton>
        ) : (
          <NavButton>
            <HeartBtnGRAY />
            <BtnText>채팅</BtnText>
          </NavButton>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('mypage')}>
        {handleActiveBtn('mypage') === 'active' ? (
          <NavButton>
            <PeopleBtn000 />
            <BtnText>마이</BtnText>
          </NavButton>
        ) : (
          <NavButton>
            <PeopleBtnGRAY />
            <BtnText>마이</BtnText>
          </NavButton>
        )}
      </TouchableOpacity>
    </Container>
  );
};

export default NavBar;

const Container = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 14px 37px 28px 37px;
  background-color: #ffffff;
`;

const NavButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const BtnText = styled(Text)<{active: boolean}>`
  font-size: 11px;
  font-weight: 700;
  color: ${({active}) => (active ? '#FA7268' : '#e4e8ec')};
`;
