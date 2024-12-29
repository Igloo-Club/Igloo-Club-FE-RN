import styled from '@emotion/native';
import React, {useRef} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-svg';
import {submitBtn} from '../../assets/0_index';

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
  return (
    <StContainer>
      <StTextarea
        ref={ref}
        placeholder="메시지 보내기"
        value={chat}
        onChangeText={handleChat}
      />
      <StChatSubmit
        onPress={e => {
          e.preventDefault();
          handleSubmit();
          // ref?.current?.focus();
        }}>
        <StChatSubmitImg href={submitBtn} />
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
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 425px;
  height: 100px;
  padding: 5px 20px 35px;
  background-color: #fff;
`;

const StTextarea = styled(TextInput)`
  width: 80%;
  max-width: 425px;
  height: 40px;
  padding: 1px 17px;
  text-justify: center;
  word-wrap: break-word;
  resize: none;
  background-color: #f2f3f5;
  border-radius: 27px;
  ${({theme}) => theme.fonts.body1m};

  &::placeholder {
    color: ${({theme}) => theme.colors.gray5};
    ${({theme}) => theme.fonts.body1m};
  }
`;

const StChatSubmit = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
  background-color: #ccc;
`;

const StChatSubmitImg = styled(Image)`
  width: 100%;
  height: 100%;
`;
