import {Text, TouchableOpacity, View} from 'react-native';
import styled from '@emotion/native';
import React from 'react';
import {formatAMPM} from '../utils/formatAMPM';
import {Image} from 'react-native-svg';
import {RootStackParamList} from '../../common/routing/routerTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

interface ChatRoomProps {
  imageUrl: string;
  nickname: string;
  content: string;
  createdAt: string;
  chatRoomId: number;
  unreadCnt: number;
}

type ChatRoomNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ChatRoom'
>;

const ChatRoomBox = ({
  imageUrl,
  nickname,
  content,
  createdAt,
  unreadCnt,
  chatRoomId,
}: ChatRoomProps) => {
  const navigation = useNavigation<ChatRoomNavigationProp>();
  return (
    <StContainer onPress={() => navigation.navigate('ChatRoom', {chatRoomId})}>
      <StProfileContainer>
        <StProfile href={imageUrl} />
      </StProfileContainer>
      <StContentContainer>
        <StUserName>{nickname}</StUserName>
        <StContent>{content}</StContent>
      </StContentContainer>
      <StendContainer>
        <StTime>{formatAMPM(createdAt)}</StTime>
        <StUnread.Container>
          <StUnread.Text>{unreadCnt}</StUnread.Text>
        </StUnread.Container>
      </StendContainer>
    </StContainer>
  );
};

export default ChatRoomBox;

const StContainer = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
  width: 100%;
  padding: 2%;
`;

const StContentContainer = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: start;
  justify-content: center;
  width: 60%;
`;

const StProfileContainer = styled(View)`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #ccc;
  overflow: hidden;
`;

const StProfile = styled(Image)`
  width: 100%;
  height: 100%;
`;

const StendContainer = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 4px;
  width: 15%;
  padding-bottom: 2px;
`;

const StUserName = styled(Text)`
  ${({theme}) => theme.fonts.button1b};
  color: ${({theme}) => theme.colors.black};
`;

const StContent = styled(Text)`
  width: 100%;
  overflow: hidden;
  color: ${({theme}) => theme.colors.gray6};
  ${({theme}) => theme.fonts.body3};

  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StTime = styled(Text)`
  color: ${({theme}) => theme.colors.gray5};
  ${({theme}) => theme.fonts.body3};
`;

const StUnread = {
  Container: styled(View)`
    width: 30px;
    height: 18px;
    border-radius: 9px;
    background: #ff5300;
  `,
  Text: styled(Text)`
    ${({theme}) => theme.fonts.caption};
    color: white;
    text-align: center;
  `,
};
