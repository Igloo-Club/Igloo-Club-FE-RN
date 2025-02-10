import React, {useEffect, useRef} from 'react';
import {FlatList, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import ChatSpeechBubble from '../ChatSpeechBubble';

const ChatRoomMain = ({chatData}: {chatData: any}) => {
  const scrollViewRef = useRef<FlatList>(null);

  useEffect(() => {
    if (chatData && scrollViewRef.current) {
      // chatData가 변경될 때마다 마지막으로 스크롤
      scrollViewRef.current.scrollToOffset({animated: true, offset: 0});
    }
  }, [chatData]);

  useEffect(() => {
    // 키보드가 올라올 때 마지막 메시지로 스크롤
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        scrollViewRef.current?.scrollToOffset({animated: true, offset: 0});
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
      <FlatList
        ref={scrollViewRef}
        data={[...chatData].reverse()} // ✅ 역순으로 변환해서 전달
        keyExtractor={(item, idx) => item.isSender + item.createdAt + idx}
        renderItem={({item}) => <ChatSpeechBubble chatData={item} />}
        inverted // ✅ 아래에서부터 스크롤 시작
        contentContainerStyle={{
          paddingTop: 110,
          paddingHorizontal: 24,
          rowGap: 15,
        }}
        keyboardShouldPersistTaps="handled"
      />
    </KeyboardAvoidingView>
  );
};

export default ChatRoomMain;
