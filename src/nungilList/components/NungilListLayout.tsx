import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import instance from '../../common/apis/axiosInstance';
import {ProfileDataTypesProps} from '../../common/types/ProfileDataTypesProps';
import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';

interface LayoutProps {
  status: 'RECEIVED' | 'SENT' | ('ACCEPTED_SENT' | 'ACCEPTED_RECEIVED')[];
  from: string;
}

const NungilListLayout = ({status, from}: LayoutProps) => {
  const navigation = useNavigation();
  const [profileData, setProfileData] = useState<ProfileDataTypesProps[]>([]);
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    handleLocation();
  }, []);

  console.log(location);

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
    } catch (err) {
      console.log('본인 근무지 조회 에러:', err);
    }
  };

  const handleList = async () => {
    try {
      let data: ProfileDataTypesProps[] = [];

      const statusArr = Array.isArray(status) ? status : [status];

      const ress = await Promise.all(
        statusArr.map(s =>
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

      setProfileData(data);
    } catch (err) {
      console.log(
        `${
          Array.isArray(status) ? status.join(', ') : status
        } 눈길 리스트 조회 에러 :`,
        err,
      );
    }
  };

  const handleClickImage = (nungilId: number) => {
    navigation.navigate('DetailPage', {nungilId, from});
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {profileData.map(profile => (
          <TouchableOpacity
            key={profile.nungilId}
            onPress={() => handleClickImage(profile.nungilId)}
            style={styles.item}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: profile.imageUrlList[0]}}
                style={styles.profileImg}
              />
              {status === 'SENT' ? (
                <BlurView
                  blurAmount={15}
                  reducedTransparencyFallbackColor="black"
                  style={styles.blur}
                />
              ) : (
                <></>
              )}
              <View style={styles.infoBox}>
                <Text style={styles.infoName}>{profile.nickname}</Text>
                <Text style={styles.infoText}>
                  {new Date().getFullYear() -
                    parseInt(profile.birthdate.substring(0, 4), 10)}
                  세 | {profile.companyName}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    flex: 0,
    width: '48%',
    marginBottom: 15,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  profileImg: {
    width: '100%',
    height: '100%',
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  infoBox: {
    flexDirection: 'column',
    position: 'absolute',
    left: 20,
    bottom: 20,
    gap: 5,
  },
  infoName: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
  },
  infoText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '400',
  },
});

export default NungilListLayout;
