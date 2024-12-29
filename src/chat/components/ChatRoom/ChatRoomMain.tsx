import styled from '@emotion/native';
import React, {useEffect, useRef} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import ChatSpeechBubble from '../ChatSpeechBubble';

const ChatRoomMain = ({chatData}: {chatData: any}) => {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (chatData && scrollViewRef.current) {
      // chatData가 변경될 때마다 마지막으로 스크롤
      scrollViewRef.current.scrollToEnd({animated: true});
    }
  }, [chatData]);

  useEffect(() => {
    // 키보드가 올라올 때 마지막 메시지로 스크롤
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        scrollViewRef.current?.scrollToEnd({animated: true});
      },
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StContainer ref={scrollViewRef} keyboardShouldPersistTaps="handled">
        {chatData ? (
          <>
            <StContainerStyles>
              {chatData.map((item, idx) => {
                return (
                  <ChatSpeechBubble
                    key={item.isSender + item.createdAt + idx}
                    chatData={item}
                  />
                );
              })}
            </StContainerStyles>
          </>
        ) : (
          <></>
        )}
      </StContainer>
    </KeyboardAvoidingView>
  );
};

export default ChatRoomMain;

const StContainer = styled(ScrollView)`
  margin-bottom: 100px;
`;

const StContainerStyles = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-end;
  width: 100%;
  padding: 0 24px;
`;
