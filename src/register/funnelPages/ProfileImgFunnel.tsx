import React, {useState} from 'react';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import RegisterLayout from '../components/RegisterLayout';
import {Text, View} from 'react-native';
import ImagePicker from '../components/ImagePicker';
import styled from '@emotion/native';
import {ImagePickerResponse} from 'react-native-image-picker';
import instance from '../../common/apis/axiosInstance';
import {submitImage} from '../apis/images';

const ProfileImgFunnel = ({step, onNext, onPrev}: IregisterFunnulProps) => {
  const [responseList, setResponseList] = useState<
    (ImagePickerResponse | null)[]
  >([null, null, null]);
  const [presignedUrl, setPresignedUrl] = useState<string[]>(['', '', '']);

  const handleImgList = (res: (ImagePickerResponse | null)[]) => {
    setResponseList(res);
  };

  const submitImgs = async () => {
    try {
      responseList[0]?.assets?.[0].fileName &&
        (await handlePresignedUrl(responseList[0]?.assets?.[0].fileName, 0));
      responseList[1]?.assets?.[0].fileName &&
        (await handlePresignedUrl(responseList[1]?.assets?.[0].fileName, 1));
      responseList[2]?.assets?.[0].fileName &&
        (await handlePresignedUrl(responseList[2]?.assets?.[0].fileName, 2));
    } catch {}
  };

  const handlePresignedUrl = async (fileName: string, index: number) => {
    if (!fileName) {
      return;
    }
    console.log('✅', fileName);
    try {
      //presignedURL 받아오기
      const {data} = await instance.post('api/member/images');
      console.log('🎉', data.presignedUrl);
      setPresignedUrl(prevUrls => {
        const newUrls = [...prevUrls];
        newUrls[index] = data.presignedUrl;
        return newUrls;
      });
      submitImage(responseList, presignedUrl);
      // onNext();
    } catch (error) {
      console.log('api/member/images', error);
    }
  };

  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={async () => {
        submitImgs();
        // onNext();
      }}
      isBtnActive={responseList[0] !== null}>
      <View>
        <StText>
          <Text>
            <StColor>왜 최대 3장인가요?🤔</StColor> 유저 분석 결과
          </Text>
          <Text>사진이 세 장 이상일 때 상대방의 관심도가 높았어요.</Text>
        </StText>
        <ImagePicker
          responseList={responseList}
          handleImgList={handleImgList}
        />
      </View>
    </RegisterLayout>
  );
};

export default ProfileImgFunnel;

const StColor = styled(Text)`
  color: #2293f3;
`;

const StText = styled(View)`
  display: flex;
  flex-direction: column;
`;
