import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, TouchableOpacity, Image, Text} from 'react-native';
import styled from '@emotion/native';
import {globalStyles} from '../../common/styles/globalStyles';
import instance from '../../common/apis/axiosInstance';
import ArrowLeft from '../../detail/assets/images';
import {Add} from '../assets/images';
import {useIdContext} from '../../common/apis/contexts/useIdContext';
import {QuestionTypes} from '../types/QuestionType';

const QnA = ({navigation}: any) => {
  const [questions, setQuestions] = useState<(QuestionTypes | null)[]>([
    null,
    null,
    null,
  ]);
  const {setExposureNumber, setQaId} = useIdContext();

  const title = '추가 질문에 답하고\n매력을 더 어필해 보세요 💘';
  const subtitle =
    '내가 어떤 사람인지 더 자세히 어필할 수 있어요.\n최대 3가지 질문을 프로필에 등록해 보세요.';

  const navigateToQList = (number: number, qaId: number) => {
    setExposureNumber(number);
    setQaId(qaId);
    navigation.navigate('QuestionList');
  };

  const handleAllAnswer = async () => {
    try {
      const res = await instance.get('api/questions/exposing?page=0&size=3');
      const sortedQuestions: (QuestionTypes | null)[] = [null, null, null];

      res.data.content.forEach((question: QuestionTypes) => {
        sortedQuestions[question.exposureOrder] = question;
      });

      setQuestions(sortedQuestions);
      console.log(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAllAnswer();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Header>
        <BackButton onPress={() => navigation.navigate('MainPage')}>
          <Arrow source={ArrowLeft} />
        </BackButton>
      </Header>
      <Body>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        {questions.map((question, index) => (
          <AddButton
            key={index}
            onPress={() => navigateToQList(index, question ? question.qaId : 0)}
            question={!!question}>
            {question ? (
              <AnswerBox>
                <QuestionTitle>{question.questionTitle}</QuestionTitle>
                <AnswerTitle>{question.answer}</AnswerTitle>
              </AnswerBox>
            ) : (
              <>
                <AddImg source={Add} />
                <AddMent>질문을 선택하세요.</AddMent>
              </>
            )}
          </AddButton>
        ))}
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
  padding: 0px 20px 0px 20px;
`;

const Arrow = styled(Image)`
  width: 15px;
  height: 15px;
`;

const Body = styled(View)`
  flex-direction: column;
  gap: 15px;
  padding: 25px 20px 0px 20px;
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

const AddButton = styled(TouchableOpacity)<{question: boolean}>`
  height: 80px;
  flex-direction: row;
  align-items: center;
  padding: 20px 20px;
  background: ${({question}) => (question ? '#FAFAFB' : '#ffffff')};
  border: ${({question}) => (question ? '#FAFAFB' : '1px dashed #d0d6de')};
  border-radius: 18px;
  gap: 10px;
`;

const AnswerBox = styled(View)`
  flex-direction: column;
  gap: 8px;
`;

const QuestionTitle = styled.Text`
  color: #fa686b;
  font-size: 14px;
  font-weight: 500;
`;

const AnswerTitle = styled.Text`
  color: #636c7a;
  font-size: 15px;
  font-weight: 600;
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
