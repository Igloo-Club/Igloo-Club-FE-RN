import React from 'react';
import {useEffect, useState} from 'react';
import {IcBackArrow} from '../common/assets/0_index';
import instance from '../common/apis/axiosInstance';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from '@emotion/native';
import ImagePicker from '../register/components/ImagePicker';
// import instance from '../common/apis/axiosInstance';

const EditProfile = ({navigation}: any) => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const result = await instance.get('/api/member');
      console.log(result.data);
      setData(result.data);
    } catch (err) {
      console.log('getIdeal', err);
    }
  };

  const handleData = (
    key: string,
    value: string | number | string[] | boolean,
  ) => {
    setData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  const submitData = async () => {
    try {
      console.log(data);
      await instance.post('api/member/ideal', data);
      console.log('success post ideal');
      console.log(data);
      navigation.navigate(-1);
    } catch (err) {
      console.log('이상형등록 에러', err);
    }
  };
  if (!data) {
    return;
  }
  return (
    <View>
      <Container>
        <Header>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}>
            <IcBackArrow />
          </BackButton>
          <Title>프로필 수정하기</Title>
        </Header>
        <StProfileSection.container>
          <StProfileSection.titleWrapper>
            <StSectionTitle>나의 프로필 사진</StSectionTitle>
            <StProfileSection.tag>필수</StProfileSection.tag>
          </StProfileSection.titleWrapper>
          <ImagePicker
            userImgs={data.imageUrlList}
            responseList={[null]}
            handleImgList={() => {}}
          />
        </StProfileSection.container>
        <StDiv />
        <StIntroSection.container>
          <StSectionTitle>나의 짧은 한 줄 소개</StSectionTitle>
          <StIntroSection.introWrapper>
            <StIntroSection.introText>{data.intro}</StIntroSection.introText>
          </StIntroSection.introWrapper>
        </StIntroSection.container>
        <StDiv />
        {/* {IDEAL_LIST.map(item => {
          const content = formatIdealListValueText(item.label, data);
          return (
            <ListContainer
              key={item.label}
              label={item.label}
              content={content}
              onModal={() => {
                setIsModalOpen(item.key);
              }}
            />
          );
        })} */}
      </Container>
    </View>
  );
};

export default EditProfile;

const Container = styled(SafeAreaView)`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px 0 56px 0;
`;

const Header = styled(View)`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.colors.gray9};
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.3px;
`;

const StSectionTitle = styled(Text)`
  ${({theme}) => theme.fonts.subtitle2b};
`;

const StSectionContainer = styled(View)`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
`;

const StProfileSection = {
  titleWrapper: styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  container: styled(StSectionContainer)``,
  tag: styled(Text)`
    color: ${({theme}) => theme.colors.primary};
    margin-left: 7px;
  `,
};

const StIntroSection = {
  container: styled(StSectionContainer)`
    gap: 20px;
  `,
  introWrapper: styled(View)`
    width: 100%;
    height: fit-content;
    padding: 20px;
    border-radius: 15px;
    background: #fafafb;
  `,
  introText: styled(Text)`
    ${({theme}) => theme.fonts.body1m};
  `,
};

const StDiv = styled(View)`
  width: 100%;
  height: 12px;
  background-color: #f6f7f9;
`;
