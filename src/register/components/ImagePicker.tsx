import styled from '@emotion/native';
import React from 'react';

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

const ImagePicker = ({
  userImgs,
  responseList,
  handleImgList,
}: {
  userImgs?: string[];
  responseList: (ImagePickerResponse | null)[];
  handleImgList: (responseList: (ImagePickerResponse | null)[]) => void;
}) => {
  // 이미지 가져오기
  const onSelectImage = (index: number) => {
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

          // Update the response at the given index
          const updateList = () => {
            const newList = [...responseList];
            newList[index] = res;
            return newList;
          };
          const updatedList = updateList();
          handleImgList(updatedList);
        } catch {}
      },
    );
  };

  return (
    <StContainer>
      <StIMGWrapperMain onPress={() => onSelectImage(0)}>
        <StMainIMGtag>
          <IcStar />
          <StMainTagText>대표</StMainTagText>
        </StMainIMGtag>
        {responseList[0]?.assets && responseList[0].assets[0].uri ? (
          <StImg source={{uri: responseList[0].assets[0].uri}} />
        ) : userImgs?.[0] ? (
          <StImg source={{uri: userImgs[0]}} />
        ) : (
          <StImgContainer>
            <Text>+</Text>
            <Text>사진 추가</Text>
          </StImgContainer>
        )}
      </StIMGWrapperMain>
      <StSmallContainer>
        {[1, 2].map(index => (
          <StIMGWrapper key={index} onPress={() => onSelectImage(index)}>
            {responseList[index]?.assets?.[0]?.uri ? (
              <StImg source={{uri: responseList[index]?.assets?.[0]?.uri}} />
            ) : userImgs?.[index] ? (
              <StImg source={{uri: userImgs[index]}} />
            ) : (
              <>
                <Text>+</Text>
                <Text>사진 추가</Text>
              </>
            )}
          </StIMGWrapper>
        ))}
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
