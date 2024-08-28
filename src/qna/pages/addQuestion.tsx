import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Image, Text} from 'react-native';
import styled from '@emotion/native';
import {globalStyles} from '../../common/styles/globalStyles';
import ArrowLeft from '../../detail/assets/images';
import {Add} from '../assets/images';

const QnA = ({navigation}: any) => {
  const title = '추가 질문에 답하고\n매력을 더 어필해 보세요 💘';
  const subtitle =
    '내가 어떤 사람인지 더 자세히 어필할 수 있어요.\n최대 3가지 질문을 프로필에 등록해 보세요.';
  return (
    <View style={globalStyles.container}>
      <Header>
        <BackButton onPress={() => navigation.navigate('마이페이지')}>
          <Arrow source={ArrowLeft} />
        </BackButton>
      </Header>
      <Body>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <AddButton onPress={() => navigation.navigate('AnswerPage')}>
          <AddImg source={Add} />
          <AddMent>질문을 선택하세요.</AddMent>
        </AddButton>
        <AddButton onPress={() => navigation.navigate('QuestionList')}>
          <AddImg source={Add} />
          <AddMent>질문을 선택하세요.</AddMent>
        </AddButton>
        <AddButton onPress={() => navigation.navigate('QuestionList')}>
          <AddImg source={Add} />
          <AddMent>질문을 선택하세요.</AddMent>
        </AddButton>
      </Body>
      <Footer>
        <FinishButton>
          <ButtonText>완료하기</ButtonText>
        </FinishButton>
      </Footer>
    </View>
  );
};

export default QnA;

const Header = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: start;
  margin-top: 10px;
  margin-bottom: 35px;
  background-color: #ffffff;
`;

const BackButton = styled(TouchableOpacity)`
  margin-top: 15px;
`;

const Arrow = styled(Image)`
  width: 15px;
  height: 15px;
`;

const Body = styled(View)`
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  color: ${({theme}) => theme.colors.gray9};
`;

const SubTitle = styled.Text`
  margin-bottom: 25px;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  color: #646d7a;
`;

const AddButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: 30px 20px;
  border: 1px dashed #d0d6de;
  border-radius: 18px;
  gap: 10px;
`;

const AddImg = styled(Image)`
  width: 20px;
  height: 20px;
`;

const AddMent = styled.Text`
  font-size: 17px;
  font-weight: 500;
  color: #646d7a;
`;

const Footer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  margin-bottom: 15px;
`;

const FinishButton = styled(TouchableOpacity)`
  background-color: '#FA7268';
  padding: 17px;
  border-radius: 7px;
  align-items: center;
`;

const ButtonText = styled(Text)`
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
`;
