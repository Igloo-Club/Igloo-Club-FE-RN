import React from 'react';
import {useEffect, useState} from 'react';
import {IcBackArrow} from '../common/assets/0_index';
import instance from '../common/apis/axiosInstance';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from '@emotion/native';
import ImagePicker from '../register/components/ImagePicker';
import {IProfile} from './types';
import {
  MY_PROFILE_INFO,
  ProfileKey,
  ProfileLabel,
  findProfileInfoByLabel,
} from './constants/MY_PROFILE_INFO';
import {
  MARRIAGE_PLAN,
  RELIGION,
  SCALE,
  SMOKE,
  TATTOO,
} from '../detail/constants/DETAIL_PROFILE_SELECTS';
import {findLabelByValue} from '../idealType/constants/IDEAL_OPTIONS';
// import instance from '../common/apis/axiosInstance';

const EditProfile = ({navigation}: any) => {
  const [data, setData] = useState<IProfile | null>(null);

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
        <ScrollView>
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
          <StInfoSection.container>
            <StSectionTitle>나의 간단한 정보</StSectionTitle>
            {/* 재직중인 회사 */}
            <StInfoSection.infoWrapper>
              <StInfoSection.infoKeyText>
                {MY_PROFILE_INFO[0].label}
              </StInfoSection.infoKeyText>
              <StInfoSection.infoValueText>
                {data[MY_PROFILE_INFO[0].key]} {MY_PROFILE_INFO[0].unit}
              </StInfoSection.infoValueText>
            </StInfoSection.infoWrapper>
            {/* 키 */}
            <StInfoSection.infoWrapper>
              <StInfoSection.infoKeyText>
                {MY_PROFILE_INFO[1].label}
              </StInfoSection.infoKeyText>
              <StInfoSection.infoValueText>
                {data[MY_PROFILE_INFO[1].key]} {MY_PROFILE_INFO[1].unit}
              </StInfoSection.infoValueText>
            </StInfoSection.infoWrapper>
            {/* 종교 */}
            <StInfoSection.infoWrapper>
              <StInfoSection.infoKeyText>
                {MY_PROFILE_INFO[2].label}
              </StInfoSection.infoKeyText>
              <StInfoSection.infoValueText>
                {findLabelByValue(RELIGION, data[MY_PROFILE_INFO[2].key])}
              </StInfoSection.infoValueText>
            </StInfoSection.infoWrapper>
            {/* 문신 유무 */}
            <StInfoSection.infoWrapper>
              <StInfoSection.infoKeyText>
                {MY_PROFILE_INFO[3].label}
              </StInfoSection.infoKeyText>
              <StInfoSection.infoValueText>
                {findLabelByValue(TATTOO, String(data[MY_PROFILE_INFO[3].key]))}
              </StInfoSection.infoValueText>
            </StInfoSection.infoWrapper>
            {/* 흡연 유무 */}
            <StInfoSection.infoWrapper>
              <StInfoSection.infoKeyText>
                {MY_PROFILE_INFO[4].label}
              </StInfoSection.infoKeyText>
              <StInfoSection.infoValueText>
                {findLabelByValue(SMOKE, String(data[MY_PROFILE_INFO[4].key]))}
              </StInfoSection.infoValueText>
            </StInfoSection.infoWrapper>
            {/* 결혼 계획 */}
            <StInfoSection.infoWrapper>
              <StInfoSection.infoKeyText>
                {MY_PROFILE_INFO[5].label}
              </StInfoSection.infoKeyText>
              <StInfoSection.infoValueText>
                {findLabelByValue(
                  MARRIAGE_PLAN,
                  Number(data[MY_PROFILE_INFO[5].key]),
                )}
              </StInfoSection.infoValueText>
            </StInfoSection.infoWrapper>
            {/* mbti */}
            <StInfoSection.infoWrapper>
              <StInfoSection.infoKeyText>
                {MY_PROFILE_INFO[6].label}
              </StInfoSection.infoKeyText>
              <StInfoSection.infoValueText>
                {data[MY_PROFILE_INFO[6].key]}
              </StInfoSection.infoValueText>
            </StInfoSection.infoWrapper>
            {/* 재직 중인 회사 규모 */}
            <StInfoSection.infoWrapper>
              <StInfoSection.infoKeyText>
                {MY_PROFILE_INFO[7].label}
              </StInfoSection.infoKeyText>
              <StInfoSection.infoValueText>
                {findLabelByValue(SCALE, data[MY_PROFILE_INFO[7].key])}
              </StInfoSection.infoValueText>
            </StInfoSection.infoWrapper>
            {/* 취미 */}
            <StInfoSection.infoWrapper>
              <StInfoSection.infoKeyText>
                {MY_PROFILE_INFO[8].label}
              </StInfoSection.infoKeyText>
              <StInfoSection.infoTextWrapper>
                {data[MY_PROFILE_INFO[8].key].map(hobby => {
                  return (
                    <StInfoSection.infoValueText>
                      {hobby.name}
                    </StInfoSection.infoValueText>
                  );
                })}
              </StInfoSection.infoTextWrapper>
            </StInfoSection.infoWrapper>
          </StInfoSection.container>

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
        </ScrollView>
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
  padding: 25px 0 0 0;
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
  left: 20px;
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

const StInfoSection = {
  container: styled(StSectionContainer)`
    gap: 13px;
  `,
  infoWrapper: styled(View)`
    width: 100%;
    padding: 20px 24px;
    border-radius: 15px;
    background: #fafafb;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  infoTextWrapper: styled(View)`
    width: 100px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  `,
  infoKeyText: styled(Text)`
    ${({theme}) => theme.fonts.body1m};
    color: #878d9b;
  `,
  infoValueText: styled(Text)`
    ${({theme}) => theme.fonts.body1m};
    color: #333a44;
  `,
};

const StDiv = styled(View)`
  width: 100%;
  height: 12px;
  background-color: #f6f7f9;
`;
