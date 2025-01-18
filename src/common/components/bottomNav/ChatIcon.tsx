import React from 'react';
import {IcChatInActive, IcChatActive} from '../../assets/0_index';

const ChatIcon = ({focused}: {focused: boolean}) => {
  return focused ? <IcChatInActive /> : <IcChatActive />;
};

export default ChatIcon;
