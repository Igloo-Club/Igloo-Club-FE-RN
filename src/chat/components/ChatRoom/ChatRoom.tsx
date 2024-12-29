import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../common/routing/routerTypes';
import {RouteProp} from '@react-navigation/native';
import styled from '@emotion/native';
import ChatRoomHeader from './ChatRoomHeader';
import {MOCK_CHATROOM, chatRoomType} from '../../constants/MOCK_CHATROOM';
import ChatRoomFooter from './ChatRoomFooter';

type ChatRoomScreenRouteProp = RouteProp<RootStackParamList, 'ChatRoom'>;

const ChatRoom = ({route}: {route: ChatRoomScreenRouteProp}) => {
  const {chatRoomId} = route.params;
  const chatRoomData: chatRoomType = MOCK_CHATROOM;
  const [chat, setChat] = useState('');

  return (
    <StContainer>
      <ChatRoomHeader nickname={chatRoomData.nickname} />
      {/* <ChatRoomMain chatData={chatData} css={MainBox} /> */}
      <ChatRoomFooter
        chat={chat}
        handleSubmit={() => {}}
        handleChat={text => {
          setChat(text);
        }}
      />
    </StContainer>
  );
};

export default ChatRoom;

const StContainer = styled(SafeAreaView)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
