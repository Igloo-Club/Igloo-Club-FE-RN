import React from 'react';
import styled from '@emotion/native';
import {formatAMPM} from '../utils/formatAMPM';
import {Text, View} from 'react-native';

const isSender = true;
const createdAt = '2024-10-07T14:33:12.421Z';

const ChatSppechBubble = () => {
  return (
    <StBubbleContainer isSender={isSender}>
      {isSender && <StTime>{formatAMPM(createdAt)}</StTime>}
      <StBubble isSender={isSender}>
        <StBubbleText isSender={isSender}>ㅎㅇㅎㅇ</StBubbleText>
      </StBubble>
      {isSender || <StTime>{formatAMPM(createdAt)}</StTime>}
    </StBubbleContainer>
  );
};

export default ChatSppechBubble;

const StBubbleContainer = styled(View)<{isSender: boolean}>`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: flex-end;
  align-self: ${({isSender}) => (isSender ? 'flex-end' : 'flex-start')};
`;

const StTime = styled(Text)`
  ${({theme}) => theme.fonts.caption};
  color: ${({theme}) => theme.colors.gray6};
`;

const StBubble = styled(View)<{isSender: boolean}>`
  width: fit-content;
  max-width: 250px;
  padding: 12px;
  margin-left: ${({isSender}) => (isSender ? '0' : '7px')};

  background-color: ${({theme, isSender}) =>
    isSender ? theme.colors.primary : '#F2F2F2'};
  border-radius: 17px;

  ${({theme}) => theme.fonts.body1r};
`;

const StBubbleText = styled(Text)<{isSender: boolean}>`
  color: ${({theme, isSender}) =>
    isSender ? theme.colors.white : theme.colors.black};
`;
