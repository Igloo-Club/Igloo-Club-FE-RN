import styled from '@emotion/native';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ChatRoomBox from './components/ChatRoomBox';
import {MOCK_CHATLIST} from './constants/MOCK_CHATLIST';
import instance from '../common/apis/axiosInstance';

const Chat = () => {
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    getChatList();
  }, []);

  const getChatList = async () => {
    try {
      const {data} = await instance.get('api/chatroom');
      setChatList(data.content);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <StContainer>
      <StHeader>
        <StHeaderTitle>채팅</StHeaderTitle>
        <StHeaderExplain.Container>
          <StHeaderExplain.Text>
            모든 채팅방은 눈길 매칭 후{' '}
            <StHeaderExplain.Color>일주일</StHeaderExplain.Color> 동안 유지되며,
            이후 일괄 삭제돼요
          </StHeaderExplain.Text>
        </StHeaderExplain.Container>
      </StHeader>
      <Middle.Wrapper>
        <Middle.Box>
          {MOCK_CHATLIST.content.length > 0 ? (
            <>
              {MOCK_CHATLIST.content.map((item, idx) => {
                const {
                  content,
                  nickname,
                  createdAt,
                  imageUrl,
                  chatRoomId,
                  unreadCnt,
                } = item;
                return (
                  <ChatRoomBox
                    key={idx}
                    content={content}
                    nickname={nickname}
                    createdAt={createdAt}
                    imageUrl={imageUrl}
                    chatRoomId={chatRoomId}
                    unreadCnt={unreadCnt}
                  />
                );
              })}
            </>
          ) : (
            <Text>채팅 내역이 없습니다</Text>
          )}
        </Middle.Box>
      </Middle.Wrapper>
    </StContainer>
  );
};

export default Chat;

const StContainer = styled(SafeAreaView)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 22px 16px;
  overflow: auto;
`;

const StHeader = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  margin-bottom: 12px;
`;

const StHeaderTitle = styled(Text)`
  ${({theme}) => theme.fonts.title};
  color: ${({theme}) => theme.colors.gray9};

  margin-top: 1px;
  margin-left: 13px;
`;

const StHeaderExplain = {
  Container: styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 39px;
    background-color: ${({theme}) => theme.colors.gray0};
    border-radius: 10px;
  `,
  Text: styled(Text)`
    ${({theme}) => theme.fonts.caption};
    font-weight: 700;
    color: ${({theme}) => theme.colors.black};
  `,
  Color: styled(Text)`
    color: ${({theme}) => theme.colors.primary};
  `,
};

const Middle = {
  Wrapper: styled(View)`
    padding-bottom: 5px;
    overflow-y: scroll;
  `,
  Box: styled(View)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: start;
    width: 100%;
  `,
};
