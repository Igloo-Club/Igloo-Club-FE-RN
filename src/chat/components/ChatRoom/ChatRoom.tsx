import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../common/routing/routerTypes';
import {RouteProp} from '@react-navigation/native';
import styled from '@emotion/native';
import ChatRoomHeader from './ChatRoomHeader';
import {MOCK_CHATROOM, chatRoomType} from '../../constants/MOCK_CHATROOM';
import ChatRoomFooter from './ChatRoomFooter';
import ChatRoomMain from './ChatRoomMain';
import {VITE_WSS_URL} from '@env';
import getAccessToken from '../../../common/utils/getAccessToken';
import {Client} from '@stomp/stompjs';

type ChatRoomScreenRouteProp = RouteProp<RootStackParamList, 'ChatRoom'>;

const ChatRoom = ({route}: {route: ChatRoomScreenRouteProp}) => {
  const {chatRoomId} = route.params;
  const chatRoomData: chatRoomType = MOCK_CHATROOM;
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [chat, setChat] = useState('');

  useEffect(() => {
    const ACCESS_TOKEN = getAccessToken();

    const stompClientTmp = new Client({
      brokerURL: `${VITE_WSS_URL}/stomp/websocket`,
      connectHeaders: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      onConnect: () => {
        // setupSubscription(stompClientTmp);
      },
      onStompError: frame => {
        console.error('Broker reported error: ' + frame.headers.message);
        console.error('Additional details: ' + frame.body);
      },
    });

    stompClientTmp.activate();
    setStompClient(stompClientTmp);

    return () => {
      stompClientTmp.deactivate();
    };
  }, []);

  return (
    <StContainer>
      <ChatRoomHeader nickname={chatRoomData.nickname} />
      <ChatRoomMain chatData={chatRoomData.messageSlice.content} />
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
