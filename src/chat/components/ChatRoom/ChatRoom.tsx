import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../common/routing/routerTypes';
import {RouteProp} from '@react-navigation/native';
import styled from '@emotion/native';
import ChatRoomHeader from './ChatRoomHeader';
import ChatRoomFooter from './ChatRoomFooter';
import ChatRoomMain from './ChatRoomMain';
import {VITE_WSS_URL} from '@env';
import {Client} from '@stomp/stompjs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ChatDataTypes, ChatMessageResponse} from '../../types/ChatDataTypes';
import instance from '../../../common/apis/axiosInstance';
const TextEncodingPolyfill = require('text-encoding');

Object.assign('global', {
  TextEncoder: TextEncodingPolyfill.TextEncoder,
  TextDecoder: TextEncodingPolyfill.TextDecoder,
});

type ChatRoomScreenRouteProp = RouteProp<RootStackParamList, 'ChatRoom'>;

const ChatRoom = ({route}: {route: ChatRoomScreenRouteProp}) => {
  const {chatRoomId} = route.params;
  // const chatRoomData: chatRoomType = MOCK_CHATROOM;
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [chat, setChat] = useState('');
  const [chatData, setChatData] = useState<ChatDataTypes>();
  const [chatContent, setChatContent] = useState<ChatMessageResponse[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const token = await AsyncStorage.getItem('ACCESS_TOKEN');
        if (token) {
          setAccessToken(token.replace(/['"]+/g, '')); // 따옴표 제거
        }
      } catch (error) {
        console.error('토큰 가져오기 실패:', error);
      }
    };

    getAccessToken();
    getChatData();
  }, []);

  useEffect(() => {
    if (!accessToken) {
      return;
    } // 토큰이 없으면 실행 안 함

    console.log('🛠 WebSocket 연결 시작, 토큰:', accessToken);

    const socket = new WebSocket(`${VITE_WSS_URL}/stomp/websocket`);
    // const socket = new SockJS('http://10.0.2.2:8080/stomp');

    const stompClient = new Client({
      webSocketFactory: () => socket,
      // brokerURL: 'ws://10.0.2.2:8080/stomp/websocket',
      forceBinaryWSFrames: true,
      appendMissingNULLonIncoming: true,
      connectHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
      debug: str => {
        console.log(
          `%c[STOMP DEBUG] ${str}`,
          'color: green; font-weight: bold;',
        );
      },
      onConnect: () => {
        setupSubscription(stompClient);
      },
      onStompError: frame => {
        console.error('Broker reported error: ' + frame.headers.message);
        console.error('Additional details: ' + frame.body);
      },
    });
    console.log(stompClient);

    stompClient.onStompError = error => {
      console.error('STOMP Error:', error);
    };

    stompClient.activate();
    setStompClient(stompClient);

    return () => {
      stompClient.deactivate();
    };
  }, [chatData]);

  // ✅ 3. WebSocket 메시지 구독
  const setupSubscription = (stompClient: Client) => {
    stompClient.subscribe(`/topic/chatroom/${chatRoomId}`, message => {
      const newChatMSG = JSON.parse(message.body);
      const newChat: ChatMessageResponse = {
        id: newChatMSG.id,
        nickname: newChatMSG.nickname,
        content: newChatMSG.content,
        createdAt: newChatMSG.createdAt,
        isAuthor: chatData?.ownMemberId === newChatMSG.senderId,
        status: newChatMSG.status,
      };
      // console.log(chatData?.ownMemberId, newChatMSG.senderId, newChat.isAuthor);
      // console.log('New Message:', newChatMSG);
      setChatContent(prev => [...prev, newChat]);
    });
  };

  const getChatData = async () => {
    try {
      const {data} = await instance.get(
        `api/chatroom/${chatRoomId}?pageNumber=0&pageSize=100`,
      );
      setChatData(data);
      setChatContent(data.messageSlice.content);
    } catch (err) {
      console.log(err);
    }
  };

  const sendMessage = () => {
    console.log(chat);
    if (stompClient && chat && accessToken) {
      stompClient.publish({
        destination: '/chat/send',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          chatRoomId: chatRoomId,
          content: chat,
        }),
      });
      setChat('');
    }
  };

  return chatData ? (
    <StContainer>
      <ChatRoomHeader
        nickname={chatData?.nickname}
        nungilId={chatData?.nungilId}
        chatRoomId={chatRoomId}
      />
      <ChatRoomMain chatData={chatContent} />
      <ChatRoomFooter
        chat={chat}
        handleSubmit={() => {
          sendMessage();
        }}
        handleChat={text => {
          setChat(text);
        }}
      />
    </StContainer>
  ) : (
    <></>
  );
};

export default ChatRoom;

const StContainer = styled(SafeAreaView)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
