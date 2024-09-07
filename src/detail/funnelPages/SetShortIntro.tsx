import React, {useState} from 'react';
import styled from '@emotion/native';
import {View, TextInput} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';
import {NavTypesProps} from '../types/navTypes';
import instance from '../../common/apis/axiosInstance';

const 한줄소개 = ({
  onPrev,
  onNext,
  step,
  handleDetailProfileValue,
  detailProfileValues,
}: NavTypesProps & {
  step: string;
}) => {
  const [shortIntro, setShortIntro] = useState('');

  const handleNextStep = async () => {
    const updatedDetailProfileValues = {
      ...detailProfileValues,
      intro: shortIntro,
    };

    console.log(updatedDetailProfileValues);

    if (handleDetailProfileValue) {
      handleDetailProfileValue(updatedDetailProfileValues);
    }

    try {
      const res = await instance.post(
        '/api/member/additional',
        updatedDetailProfileValues,
      );
      if (res.status === 200) {
        onNext();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={88} onPrev={onPrev} />
      <Title>
        {
          DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step)
            ?.mainTitle
        }{' '}
      </Title>
      <SubTitle>상대방에게 보여지는 첫인상이에요.</SubTitle>
      <InputBox>
        <Input
          placeholder="짧고 임팩트 있는 한 줄 소개를 작성하세요."
          value={shortIntro}
          onChangeText={setShortIntro}
          keyboardType="ascii-capable"
          maxLength={30}
        />
        <InputFooter>
          <InputLimit>최대 30자</InputLimit>
          <InputCount>
            <CountText>{shortIntro.length}</CountText>/30
          </InputCount>
        </InputFooter>
      </InputBox>
      <ExampleBox>
        <ExampleTitle>작성 예시</ExampleTitle>
        <ExampleText>클라이밍을 사랑하는 26살 여자입니다😄</ExampleText>
      </ExampleBox>
      <FooterBtn
        onPress={handleNextStep}
        isDisabled={!shortIntro}
        label="프로필 등록 완료하기"
      />
    </View>
  );
};

export default 한줄소개;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 0px 0px 10px 5px;
  line-height: 35px;
`;

const SubTitle = styled.Text`
  color: #646d7a;
  font-size: 14px;
  font-weight: 500;
  margin: 0px 0px 10px 5px;
`;

const InputBox = styled(View)`
  height: 120px;
  border-radius: 18px;
  background: #fafafb;
  margin-top: 20px;
  margin-bottom: 16px;
`;

const Input = styled(TextInput)`
  border-radius: 18px;
  background: #fafafb;
  padding: 18px 20px 80px 20px;
`;

const InputFooter = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: -20px;
  padding: 0 20px 10px 20px;
`;

const InputLimit = styled.Text`
  font-size: 11px;
  font-weight: 500;
`;

const InputCount = styled.Text`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const CountText = styled.Text`
  color: #d0d6de;
  font-size: 11px;
  font-weight: 500;
`;

const ExampleBox = styled(View)`
  flex-direction: row;
  margin-left: 10px;
  gap: 11px;
`;

const ExampleTitle = styled.Text`
  color: #808080;
  font-size: 12px;
  font-weight: 600;
`;

const ExampleText = styled.Text`
  color: #303030;
  font-size: 12px;
  font-weight: 600;
`;
