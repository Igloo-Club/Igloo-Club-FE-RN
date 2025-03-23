import styled from '@emotion/native';
import React from 'react';
import {Text, View} from 'react-native';
import {IcBackArrow, IcMenu} from '../../../common/assets/0_index';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../common/routing/routerTypes';

interface ChatRoomHeaderProps {
  nickname: string | undefined;
  nungilId: number;
}

const ChatRoomHeader = ({nickname, nungilId}: ChatRoomHeaderProps) => {
  const notitext = `${nickname} 님과의 눈길이 매칭 되었어요.`;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <StHeaderContainer>
      <StHeaderWrapper>
        <IcBackArrow onPress={() => navigation.goBack()} />
        <StSenderInfoStyles>
          <StsenderProfileStyles>
            <StSenderName>{nickname}</StSenderName>
          </StsenderProfileStyles>
        </StSenderInfoStyles>
        <IcMenu />
      </StHeaderWrapper>
      <StChatModal.Container>
        <StChatModal.Text>
          <StChatModal.Bold>{notitext}</StChatModal.Bold> 상대와의 반가운 첫
          인사로 대화를 시작해 보세요.{' '}
          <StChatModal.UnderLine
            onPress={() =>
              navigation.navigate('DetailPage', {nungilId, from: 'ChatRoom'})
            }>
            상대방 프로필 보기
          </StChatModal.UnderLine>
        </StChatModal.Text>
      </StChatModal.Container>
      {/* {isModalOpen && (
        <InfoModal
          nickname={nickname}
          chatRoomId={chatRoomId}
          closeModal={() => setIsModalOpen(false)}
          css={ModalBox}
        />
      )} */}
    </StHeaderContainer>
  );
};

export default ChatRoomHeader;

const StHeaderContainer = styled(View)`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2px;
  white-space: pre-line;
`;
const StHeaderWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 425px;
  padding: 25px 10px 15px;
  background: #fff;
`;

const StSenderInfoStyles = styled(View)`
  display: flex;
  gap: 1px;
  align-items: center;
`;

const StsenderProfileStyles = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 04px;
`;

const StSenderName = styled(Text)`
  color: ${({theme}) => theme.colors.gray9};
  ${({theme}) => theme.fonts.body1};
`;

const StChatModal = {
  Container: styled(View)`
    display: inline-flex;
    flex-direction: row;
    gap: 15px;
    top: 10px;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: 0 10px;
    height: 61px;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    background: #ffeff0;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    }
  `,
  Text: styled(Text)`
    ${({theme}) => theme.fonts.body3m};
    color: ${({theme}) => theme.colors.gray8};
    text-align: center;
  `,
  Bold: styled(Text)`
    font-weight: 900;
  `,
  UnderLine: styled(Text)`
    text-decoration: underline;
  `,
};
