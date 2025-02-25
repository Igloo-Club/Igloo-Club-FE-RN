import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import instance from '../../common/apis/axiosInstance';
import {X} from '../assets/images/index';
import CountInput from '../components/CountInput';
import FooterBtn from '../../common/components/FooterBtn';
import {useIdContext} from '../../common/apis/contexts/useIdContext';
import {QuestionTypes} from '../types/QuestionType';

const AnswerPage = ({route, navigation}: any) => {
  const {question, questionTitle} = route.params;
  const {exposureNumber, qaId, setNewAnswer} = useIdContext();

  const [answerText, setAnswerText] = useState('');
  const [, setAnswer] = useState<QuestionTypes | null>(null);
  const [answered, setAnswered] = useState<boolean>();

  console.log(exposureNumber);

  const handleAnswer = async () => {
    try {
      await instance.post('api/questions', {
        question: question,
        answer: answerText,
        exposureOrder: exposureNumber,
      });
      setNewAnswer(true);
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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>답변 작성</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('QuestionList')}>
          <Image source={X} style={styles.xImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.question}>
          <Text style={styles.q}>Q.</Text>
          <Text style={styles.qMent}>{questionTitle}</Text>
        </View>
        <TextInput
          value={answerText}
          onChangeText={setAnswerText}
          placeholder="여기에 답변을 적어보세요"
          multiline={true}
          style={styles.inputAnswer}
        />
      </View>
      <View style={styles.footer}>
        <CountInput text={answerText} />
        <FooterBtn
          onPress={handleFooterBtn}
          isDisabled={answerText === ''}
          label="저장하기"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 35,
    backgroundColor: '#ffffff',
  },
  backButton: {
    position: 'absolute',
    right: 20,
  },
  xImg: {
    width: 11,
    height: 11,
  },
  headerText: {
    color: '#303030',
    fontSize: 15,
    fontWeight: '600',
  },
  body: {
    flexDirection: 'column',
    gap: 0,
    paddingHorizontal: 20,
  },
  question: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  q: {
    color: '#d0d6de',
    fontSize: 26,
    fontWeight: '700',
  },
  qMent: {
    color: '#303030',
    fontSize: 22,
    fontWeight: '700',
    marginRight: 30,
  },
  inputAnswer: {
    height: 150,
    paddingTop: 30,
    color: '#303030',
    fontSize: 15,
    fontWeight: '500',
    borderRadius: 5,
    flexGrow: 1,
    textAlignVertical: 'top',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
});

export default AnswerPage;
