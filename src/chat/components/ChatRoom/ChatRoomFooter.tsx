import styled from '@emotion/native';
import React, {useRef, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {IcChatSendBtn} from '../../assets/0_index';

const ChatRoomFooter = ({
  chat,
  handleSubmit,
  handleChat,
}: {
  chat: string;
  handleChat: (text: string) => void;
  handleSubmit: () => void;
}) => {
  const ref = useRef(null);
  const [inputHeight, setInputHeight] = useState(40);
  return (
    <StContainer>
      <StTextarea
        ref={ref}
        placeholder="메시지 보내기"
        value={chat}
        onChangeText={handleChat}
        onContentSizeChange={event => {
          setInputHeight(event.nativeEvent.contentSize.height);
        }}
        style={{height: Math.max(40, inputHeight)}}
        multiline
      />
      <StChatSubmit
        onPress={e => {
          e.preventDefault();
          handleSubmit();
          // ref?.current?.focus();
        }}>
        <IcChatSendBtn />
      </StChatSubmit>
    </StContainer>
  );
};

export default ChatRoomFooter;

const StContainer = styled(View)`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  gap: 1px;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 425px;
  height: 80px;
  padding: 5px 20px;
  background-color: #fff;
`;

const StTextarea = styled(TextInput)`
  width: 80%;
  max-width: 425px;
  max-height: 60px;
  padding: 1px 17px;
  text-justify: center;
  word-wrap: break-word;
  resize: none;
  background-color: #f2f3f5;
  border-radius: 27px;
  overflow-y: scroll;
  ${({theme}) => theme.fonts.body1m};

  &::placeholder {
    color: ${({theme}) => theme.colors.gray5};
    ${({theme}) => theme.fonts.body1m};
  }
`;

const StChatSubmit = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
`;
