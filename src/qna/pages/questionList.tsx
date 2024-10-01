import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
} from 'react-native';
import styled from '@emotion/native';
import {globalStyles} from '../../common/styles/globalStyles';
import ArrowLeft from '../../detail/assets/images';
import {CATEGORY} from '../constants/CATEGORY_CONSTANTS';
import instance from '../../common/apis/axiosInstance';

const QuestionList = ({navigation}: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    'LIFESTYLE',
  );
  const [questions, setQuestions] = useState<any[]>([]);

  const handleQuestions = async (questionCategory: string) => {
    try {
      const res = await instance.get(
        `api/questions/category/${questionCategory}?page=0&size=10`,
      );
      setQuestions(res.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategorySelect = (value: string) => {
    setSelectedCategory(value);
  };

  useEffect(() => {
    if (selectedCategory) {
      handleQuestions(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <View style={globalStyles.container}>
      <Header>
        <BackButton onPress={() => navigation.navigate('QnA')}>
          <Arrow source={ArrowLeft} />
        </BackButton>
        <HeaderText>질문 리스트</HeaderText>
      </Header>
      <Body>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Category>
            {CATEGORY.map(item => (
              <CategoryButton
                key={item.value}
                isSelected={selectedCategory === item.value}
                onPress={() => handleCategorySelect(item.value)}>
                <CategoryLabel isSelected={selectedCategory === item.value}>
                  {item.label}
                </CategoryLabel>
              </CategoryButton>
            ))}
          </Category>
        </ScrollView>
        {questions.map((question, index) => (
          <QuestionsWrapper
            onPress={() =>
              navigation.navigate('AnswerPage', {
                question: question.question,
                questionTitle: question.questionTitle,
              })
            }>
            <QuestionTitle key={index}>{question.questionTitle}</QuestionTitle>
          </QuestionsWrapper>
        ))}
      </Body>
    </View>
  );
};

export default QuestionList;

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
  left: 0;
`;

const Arrow = styled(Image)`
  width: 15px;
  height: 15px;
`;

const HeaderText = styled.Text`
  color: #303030;
  font-size: 15px;
  font-weight: 600;
`;

const Body = styled(View)`
  flex-direction: column;
  gap: 15px;
`;

const Category = styled(View)`
  flex-direction: row;
  margin-bottom: 10px;
`;

const CategoryButton = styled(TouchableOpacity)<{isSelected: boolean}>`
  background-color: ${({isSelected}) => (isSelected ? '#FF6C62' : '#FFFFFF')};
  border-radius: 20px;
  padding: 10px 15px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

const CategoryLabel = styled.Text<{isSelected: boolean}>`
  color: ${({isSelected}) => (isSelected ? '#FFFFFF' : '#000000')};
  font-size: 14px;
  font-weight: 500;
`;

const QuestionsWrapper = styled(TouchableOpacity)`
  margin-top: 20px;
  border-color: #ecebf1;
  border-bottom-width: 1px;
`;

const QuestionTitle = styled(Text)`
  padding-bottom: 20px;
  color: #303030;
  font-size: 15px;
  font-weight: 600;
`;
