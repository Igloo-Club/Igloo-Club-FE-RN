import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../common/routing/routerTypes';
import {RouteProp} from '@react-navigation/native';
import {Text} from 'react-native';

type ChatRoomScreenRouteProp = RouteProp<RootStackParamList, 'ChatRoom'>;

const ChatRoom = ({route}: {route: ChatRoomScreenRouteProp}) => {
  const {chatRoomId} = route.params;
  return (
    <SafeAreaView>
      <Text>{chatRoomId}</Text>
    </SafeAreaView>
  );
};

export default ChatRoom;
