import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import styled from '@emotion/native';
import instance from '../../common/apis/axiosInstance';
import {ProfileDataTypesProps} from '../../common/types/ProfileDataTypesProps';
import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';

interface LayoutProps {
  status: 'RECEIVED' | 'SENT' | 'ACCEPTED_SENT' | 'ACCEPTED_RECEIVED';
  from: string;
}

const NungilListLayout = ({status, from}: LayoutProps) => {
  const navigation = useNavigation();
  const {width, height} = useWindowDimensions();
  const [profileData, setProfileData] = useState<ProfileDataTypesProps[]>([]);

  useEffect(() => {
    handleList();
  }, []);

  const handleList = async () => {
    try {
      // 여러 개의 상태를 비동기 요청 후 합치기 (ACCEPTED_ 해당)
      const ress = await Promise.all(
        status.map(s =>
          instance.get('/api/nungil/list', {
            params: {status: s, page: 0, size: 4},
          }),
        ),
      );
      const data = ress.flatMap((res: any) => res.data.content);
      setProfileData(data);
    } catch (err) {
      console.log(`${status.join(', ')} 눈길 리스트 조회 에러: `, err);
    }
  };

  const rows: ProfileDataTypesProps[][] = [];
  for (let i = 0; i < profileData.length; i += 2) {
    rows.push(profileData.slice(i, i + 2));
  }

  const handleClickImage = (nungilId: number) => {
    navigation.navigate('DetailPage', {nungilId, from});
  };

  return (
    <Container>
      <ScrollView>
        {rows.map((v, i) => (
          <Row key={i}>
            {v.map(profile => (
              <Item
                key={profile.nungilId}
                onPress={() => handleClickImage(profile.nungilId)}>
                <ImageContainer
                  style={{width: width * 0.42, height: height * 0.25}}>
                  <ProfileImg source={{uri: profile.imageUrlList[0]}} />
                  <BlurOverlay
                    blurAmount={status === 'SENT' ? 15 : 0}
                    reducedTransparencyFallbackColor="black"
                  />
                  <InfoBox>
                    <InfoName>{profile.nickname}</InfoName>
                    <InfoText>
                      {new Date().getFullYear() -
                        parseInt(profile.birthdate.substring(0, 4), 10)}
                      세 | {profile.companyName}
                    </InfoText>
                  </InfoBox>
                </ImageContainer>
              </Item>
            ))}
            {v.length < 2 && <Item style={{flex: 1}} />}
          </Row>
        ))}
      </ScrollView>
    </Container>
  );
};

export default NungilListLayout;

const Container = styled(View)`
  flex: 1;
  background-color: #ffffff;
  padding: 20px 20px 0px 20px;
`;

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Item = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
`;

const ImageContainer = styled(View)`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const ProfileImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

const BlurOverlay = styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const InfoBox = styled(View)`
  flex-direction: column;
  position: absolute;
  left: 20px;
  bottom: 20px;
  gap: 5px;
`;

const InfoName = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
`;

const InfoText = styled.Text`
  color: #ffffff;
  font-size: 13px;
  font-weight: 400;
`;
