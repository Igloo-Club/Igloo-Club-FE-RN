import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styled from '@emotion/native';
import {globalStyles} from '../../common/styles/globalStyles';
import {X} from '../assets/images/x.png';
import CountInput from '../components/CountInput';
import FooterBtn from '../../detail/components/DetailProfileFooter';

const AnswerPage = ({navigation}: any) => {
  const [answerText, setAnswerText] = useState('');

  const handleSave = async () => {};

  return (
    <View style={globalStyles.container}>
      <Header>
        <BackButton onPress={() => navigation.navigate('QnA')}>
          <XImg source={X} />
        </BackButton>
        <HeaderText>답변 작성</HeaderText>
      </Header>
      <Body>
        <Question>
          <Q>Q.</Q>
          <QMent>{}</QMent>
        </Question>
        <Answer
          value={answerText}
          onChangeText={setAnswerText}
          placeholder="여기에 답변을 적어보세요"
          multiline
        />
      </Body>
      <Footer>
        <CountInput text={answerText} />
        <FooterBtn
          onPress={handleSave}
          isDisabled={answerText === ''}
          label="다음으로"
        />
      </Footer>
    </View>
  );
};

export default AnswerPage;

const Header = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 35px;
  background-color: #ffffff;
`;

const BackButton = styled(TouchableOpacity)`
  position: absolute;
  right: 0;
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
`;

const Question = styled(View)`
  flex-direction: row;
  gap: 5px;
`;

const Q = styled.Text`
  color: #d0d6de;
  font-size: 24px;
  font-weight: 700;
`;

const QMent = styled.Text`
  color: ${({theme}) => theme.colors.gray9};
  font-size: 22px;
  font-weight: 700;
`;

const Answer = styled.TextInput`
  padding: 5px;
  color: #303030;
  font-size: 15px;
  font-weight: 500;
  border-radius: 5px;
  height: 150px;
`;

const Footer = styled(View)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 20px;
`;
