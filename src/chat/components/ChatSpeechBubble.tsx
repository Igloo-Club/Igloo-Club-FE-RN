import React from 'react';
import styled from '@emotion/native';
import {formatAMPM} from '../utils/formatAMPM';
import {Text, View} from 'react-native';

const ChatSpeechBubble = ({chatData}: {chatData: any}) => {
  const isAuthor = chatData.isAuthor;
  return (
    <StBubbleContainer isAuthor={isAuthor}>
      {isAuthor && <StTime>{formatAMPM(chatData.createdAt)}</StTime>}
      <StBubble isAuthor={isAuthor}>
        <StBubbleText isAuthor={isAuthor}>{chatData.content}</StBubbleText>
      </StBubble>
      {isAuthor || <StTime>{formatAMPM(chatData.createdAt)}</StTime>}
    </StBubbleContainer>
  );
};

export default ChatSpeechBubble;

const StBubbleContainer = styled(View)<{isAuthor: boolean}>`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: flex-end;
  align-self: ${({isAuthor}) => (isAuthor ? 'flex-end' : 'flex-start')};
`;

const StTime = styled(Text)`
  ${({theme}) => theme.fonts.caption};
  color: ${({theme}) => theme.colors.gray6};
`;

const StBubble = styled(View)<{isAuthor: boolean}>`
  width: fit-content;
  max-width: 250px;
  padding: 12px;
  margin-left: ${({isAuthor}) => (isAuthor ? '0' : '7px')};

  background-color: ${({isAuthor}) => (isAuthor ? '#FA7268' : '#F2F2F2')};
  border-radius: 17px;

  ${({theme}) => theme.fonts.body1r};
`;

const StBubbleText = styled(Text)<{isAuthor: boolean}>`
  color: ${({theme, isAuthor}) =>
    isAuthor ? theme.colors.white : theme.colors.black};
`;
