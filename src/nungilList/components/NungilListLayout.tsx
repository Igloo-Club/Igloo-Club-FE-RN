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
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    handleLocation();
  }, []);

  useEffect(() => {
    if (location) {
      handleList();
    }
  }, [location]);

  // 사용자 위치 정보 가져오기
  const handleLocation = async () => {
    try {
      const res = await instance.get('/api/member/location');
      setLocation(res.data.location);
    } catch (error) {
      console.log('본인 근무지 조회 에러:', error);
    }
  };

  const handleList = async () => {
    try {
      let data = [];

      if (Array.isArray(status)) {
        // ACCEPTED_RECEIVED와 ACCEPTED_SENT의 눈길 리스트를 위한 처리
        const ress = await Promise.all(
          status.map(s =>
            instance.get('/api/nungil/list', {
              params: {status: s, location, page: 0, size: 4},
            }),
          ),
        );
        console.log(
          'API 응답:',
          ress.map(res => res.data),
        );
        data = ress.flatMap(res => res.data.content || []);
      } else {
        // 단일 상태일 경우
        const res = await instance.get('/api/nungil/list', {
          params: {status, location, page: 0, size: 4},
        });
        console.log('API 응답:', res.data);
        data = res.data.content || [];
      }

      setProfileData(data);
    } catch (err) {
      console.log(
        `${
          Array.isArray(status) ? status.join(', ') : status
        } 눈길 리스트 조회 에러:`,
        err,
      );
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
