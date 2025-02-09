import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styled from '@emotion/native';
import instance from '../../common/apis/axiosInstance';
import {X} from '../assets/images/index';
import CountInput from '../components/CountInput';
import FooterBtn from '../../common/components/FooterBtn';
import {useIdContext} from '../../common/apis/contexts/useIdContext';
import {QuestionTypes} from '../types/QuestionType';

const AnswerPage = ({route, navigation}: any) => {
  const {question, questionTitle} = route.params;
  const {exposureNumber, qaId} = useIdContext();

  const [answerText, setAnswerText] = useState('');
  const [, setAnswer] = useState<QuestionTypes | null>(null);
  const [answered, setAnswered] = useState<boolean>();

  const handleAnswer = async () => {
    try {
      await instance.post('api/questions', {
        question: question,
        answer: answerText,
        exposureOrder: exposureNumber,
      });
      navigation.navigate('QnA');
    } catch (error) {
      console.log(error);
    }
  };

  const handleAnswered = async () => {
    try {
      const res = await instance.get(`api/questions/${qaId}`);
      if (question === res.data.question) {
        setAnswered(true);
        setAnswer(res.data);
        setAnswerText(res.data.answer);
      }
    } catch (error) {
      console.log('단일 응답 조회 실패', error);
    }
  };

  const handleEdit = async () => {
    try {
      await instance.patch(`api/questions/${qaId}`, {
        answer: answerText,
        exposureOrder: exposureNumber,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setAnswer(null);
    setAnswerText('');
    handleAnswered();
  }, [qaId]);

  const handleFooterBtn = () => {
    if (answered) {
      handleEdit();
    } else {
      handleAnswer();
    }
  };

  return (
    <SafeAreaView>
      <Header>
        <HeaderText>답변 작성</HeaderText>
        <BackButton onPress={() => navigation.navigate('QuestionList')}>
          <XImg source={X} />
        </BackButton>
      </Header>
      <Body>
        <Question>
          <Q>Q.</Q>
          <QMent>{questionTitle}</QMent>
        </Question>
        <InputAnswer
          value={answerText}
          onChangeText={setAnswerText}
          placeholder="여기에 답변을 적어보세요"
          multiline
        />
      </Body>
      <Footer>
        <CountInput text={answerText} />
        <FooterBtn
          onPress={handleFooterBtn}
          isDisabled={answerText === ''}
          label="저장하기"
        />
      </Footer>
    </SafeAreaView>
  );
};

export default AnswerPage;

const Header = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 35px;
  background-color: #ffffff;
`;

const BackButton = styled(TouchableOpacity)`
  position: absolute;
  right: 20;
`;

const XImg = styled(Image)`
  width: 11px;
  height: 11px;
`;

const HeaderText = styled.Text`
  color: #303030;
  font-size: 15px;
  font-weight: 600;
`;

const Body = styled(View)`
  flex-direction: column;
  gap: 35px;
  padding: 0px 20px 0px 20px;
`;

const Question = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Q = styled.Text`
  color: #d0d6de;
  font-size: 26px;
  font-weight: 700;
`;

const QMent = styled.Text`
  color: ${({theme}) => theme.colors.gray9};
  font-size: 22px;
  font-weight: 700;
  margin-right: 30px;
`;

const InputAnswer = styled.TextInput`
  padding: 5px;
  color: #303030;
  font-size: 15px;
  font-weight: 500;
  border-radius: 5px;
  height: 150px;
`;

const Footer = styled(View)`
  position: absolute;
  bottom: -100;
  left: 0;
  right: 0;
  padding: 20px 20px;
`;
