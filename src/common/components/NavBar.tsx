import React from 'react';
import styled from '@emotion/native';
// import { theme } from '../styles/theme';
import {TouchableOpacity, View, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  IcHomeInActive,
  IcChatInActive,
  IcHeartInActive,
  IcPeopleInActive,
  IcHomeActive,
  IcChatActive,
  IcHeartActive,
  IcPeopleActive,
} from '../assets/0_index';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routing/routerTypes';

const NavBar = () => {
  const route = useRoute();
  console.log(route);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleActiveBtn = (path: string) => {
    if (route.name === path) {
      return 'active';
    } else {
      return 'inactive';
    }
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
        {handleActiveBtn('mainPage') === 'active' ? (
          <NavButton>
            <IcHomeInActive />
            <BtnText active={true}>홈</BtnText>
          </NavButton>
        ) : (
          <NavButton>
            <IcHomeActive />
            <BtnText active={false}>홈</BtnText>
          </NavButton>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('chat으로 이동');
          navigation.navigate('Chat');
        }}>
        {handleActiveBtn('chat') === 'active' ? (
          <NavButton>
            <IcChatInActive />
            <BtnText active={true}>매칭</BtnText>
          </NavButton>
        ) : (
          <NavButton>
            <IcChatActive />
            <BtnText active={false}>매칭</BtnText>
          </NavButton>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('nungillist', {state: {selectedBtn: 'received'}})
        }>
        {handleActiveBtn('nungillist') === 'active' ? (
          <NavButton>
            <IcHeartInActive />
            <BtnText active={true}>채팅</BtnText>
          </NavButton>
        ) : (
          <NavButton>
            <IcHeartActive />
            <BtnText active={false}>채팅</BtnText>
          </NavButton>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
        {handleActiveBtn('mypage') === 'active' ? (
          <NavButton>
            <IcPeopleInActive />
            <BtnText active={true}>마이</BtnText>
          </NavButton>
        ) : (
          <NavButton>
            <IcPeopleActive />
            <BtnText active={false}>마이</BtnText>
          </NavButton>
        )}
      </TouchableOpacity>
    </Container>
  );
};

export default NavBar;

const Container = styled(View)`
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 14px 37px 28px 37px;
  background-color: #ffffff;
`;

const NavButton = styled(View)`
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
