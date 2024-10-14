import React, {useState} from 'react';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import RegisterLayout from '../components/RegisterLayout';
import {Text, View} from 'react-native';
import ImagePicker from '../components/ImagePicker';
import styled from '@emotion/native';

const ProfileImgFunnel = ({step, onNext, onPrev}: IregisterFunnulProps) => {
  const [nickname, setNickname] = useState(false);

  const isImg = () => {
    setNickname(true);
  };
  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={async () => {
        onNext();
      }}
      isBtnActive={nickname}>
      <View>
        <Text>
          <StColor>왜 최대 3장인가요?🤔</StColor> 유저 분석 결과\n사진이 세 장
          이상일 때 상대방의 관심도가 높았어요.
        </Text>
        <ImagePicker isBtnActive={isImg} />
      </View>
    </RegisterLayout>
  );
};

export default ProfileImgFunnel;

const StColor = styled(Text)`
  color: #2293f3;
`;
