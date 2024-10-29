import styled from '@emotion/native';
import React, {useState} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Text, // react-native에서 Text를 가져옵니다.
} from 'react-native';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {IcStar} from '../assets/0_index';

const ImagePicker = ({isBtnActive}: {isBtnActive: () => void}) => {
  // 상태 초기화
  const [response, setResponse] = useState<ImagePickerResponse | null>(null);
  const [response2, setResponse2] = useState<ImagePickerResponse | null>(null);
  const [response3, setResponse3] = useState<ImagePickerResponse | null>(null);
  // const [imageFile, setImageFile] = useState<string | undefined>(undefined);

  // 이미지 가져오기
  const onSelectImage = (response: number) => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 216,
        maxHeight: 216,
        includeBase64: true,
      },
      res => {
        try {
          if (res.didCancel) {
            return;
          } else if (res.errorCode) {
            console.log('Image Error : ' + res.errorCode);
            return;
          }
          if (response === 1) {
            setResponse(res);
          } else if (response === 2) {
            setResponse2(res);
          } else if (response === 3) {
            setResponse3(res);
          }
          // if (res.assets && res.assets[0].base64) {
          //   setImageFile(res.assets[0].base64);
          // }
          isBtnActive();
        } catch {}
      },
    );
  };

  return (
    <StContainer>
      <StIMGWrapperMain onPress={() => onSelectImage(1)}>
        <StMainIMGtag>
          <IcStar />
          <StMainTagText>대표</StMainTagText>
        </StMainIMGtag>
        {response?.assets && response.assets[0].uri ? (
          <StImg source={{uri: response.assets[0].uri}} />
        ) : (
          <StImgContainer>
            <Text>+</Text>
            <Text>사진 추가</Text>
          </StImgContainer>
        )}
      </StIMGWrapperMain>
      <StSmallContainer>
        <StIMGWrapper onPress={() => onSelectImage(2)}>
          {response2?.assets && response2.assets[0].uri ? (
            <StImg source={{uri: response2.assets[0].uri}} />
          ) : (
            <>
              <Text>+</Text>
              <Text>사진 추가</Text>
            </>
          )}
        </StIMGWrapper>
        <StIMGWrapper onPress={() => onSelectImage(3)}>
          {response3?.assets && response3.assets[0].uri ? (
            <StImg source={{uri: response3.assets[0].uri}} />
          ) : (
            <>
              <Text>+</Text>
              <Text>사진 추가</Text>
            </>
          )}
        </StIMGWrapper>
      </StSmallContainer>
    </StContainer>
  );
};

export default ImagePicker;

const StIMGWrapper = styled(TouchableOpacity)`
  position: relative;
  background-color: #fafafb;
  width: 110px;
  height: 110px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StIMGWrapperMain = styled(StIMGWrapper)`
  width: 231px;
  height: 231px;
`;
const StContainer = styled(View)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 38px;
`;

const StSmallContainer = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StImg = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const StImgContainer = styled(View)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StMainIMGtag = styled(View)`
  position: absolute;
  top: 13px;
  left: 16px;
  width: 55px;
  height: 26px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const StMainTagText = styled(Text)`
  color: white;
  font-size: 13px;
  font-weight: 600;
`;
