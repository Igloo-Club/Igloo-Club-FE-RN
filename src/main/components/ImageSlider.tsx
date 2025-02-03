import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  PanResponder,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ProfileDataTypesProps} from '../../common/types/ProfileDataTypesProps';
import {Height, Religion, Marriage, Mbti} from '../assets/0_index';
import {
  RELIGION,
  MARRIAGE_PLAN,
} from '../../detail/constants/DETAIL_PROFILE_SELECTS';

const {width} = Dimensions.get('window');

const dummyProfiles: ProfileDataTypesProps[] = [
  {
    nungilId: 1,
    nickname: '하늘나무',
    birthdate: '19991026',
    companyName: 'KIST',
    imageUrlList: ['https://source.unsplash.com/random/200x300?sig=1'],
    height: 175,
    religion: 'CHRISTIANITY',
    marriagePlan: 0,
    mbtiType: 'INFJ',
    tattoo: true,
    smoke: true,
  },
  {
    nungilId: 2,
    nickname: '푸른강',
    birthdate: '19980512',
    companyName: '삼성전자',
    imageUrlList: ['https://source.unsplash.com/random/200x300?sig=3'],
    height: 180,
    religion: 'NONE',
    marriagePlan: 3,
    mbtiType: 'ENTP',
    tattoo: true,
    smoke: true,
  },
  {
    nungilId: 3,
    nickname: '바람소리',
    birthdate: '19970703',
    companyName: '네이버',
    imageUrlList: ['https://source.unsplash.com/random/200x300?sig=5'],
    height: 165,
    religion: 'BUDDHISM',
    marriagePlan: 5,
    mbtiType: 'ISTJ',
    tattoo: true,
    smoke: true,
  },
  {
    nungilId: 4,
    nickname: '햇살마루',
    birthdate: '19960220',
    companyName: '카카오',
    imageUrlList: ['https://source.unsplash.com/random/200x300?sig=7'],
    height: 170,
    religion: 'CATHOLICISM',
    marriagePlan: 3,
    mbtiType: 'ESFP',
    tattoo: true,
    smoke: true,
  },
];

const ImageSlider = ({navigation}: {navigation: any}) => {
  const [pos, setPos] = useState(width * 1.2); // 현재 위치 상태

  const panResponder = PanResponder.create({
    // panResponder : 터치 이벤트 감지 및 화면 드래그 시 발생하는 이벤트 처리

    onMoveShouldSetPanResponder: () => true, // 화면 터치 시 드래그 시작하도록 설정
    onPanResponderMove: (e, gestureState) => {
      // 드래그 할 때마다 발생하는 이벤트 -> 슬라이드의 위치 값 (pos) 업데이트
      setPos(prev => {
        const newPos = prev + gestureState.dx;
        const minPos = width * 1.2;
        const maxPos = -(width * 0.5) * dummyProfiles.length + width;
        return Math.min(minPos, Math.max(maxPos, newPos));
      });
    },
    onPanResponderRelease: () => {}, // 드래그 종료 시 해당 위치로 고정되도록 아무런 동작 x
  });

  const handleClickImage = (nungilId: number) => {
    navigation.navigate('DetailPage', {nungilId});
  };
  return (
    <View style={styles.container}>
      <View
        style={[styles.sliderContainer, {transform: [{translateX: pos}]}]}
        {...panResponder.panHandlers}>
        {dummyProfiles.map(profile => (
          <TouchableOpacity
            key={profile.nungilId}
            style={styles.slide}
            onPress={() => handleClickImage(profile.nungilId)}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: profile.imageUrlList[0]}}
                style={styles.image}
              />
              <View style={styles.infoBox}>
                <View style={styles.infoTop}>
                  <Text style={styles.infoName}>{profile.nickname}</Text>
                  <Text style={styles.infoTopText}>
                    {new Date().getFullYear() -
                      parseInt(profile.birthdate.substring(0, 4), 10)}
                    세 |{' '}
                  </Text>
                  <Text style={styles.infoTopText}>{profile.companyName}</Text>
                </View>
                <View style={styles.infoBottom}>
                  <Height />
                  <Text style={styles.infoBottomText}>
                    {profile.height}cm |
                  </Text>
                  <Religion />
                  <Text style={styles.infoBottomText}>
                    {RELIGION.find(item => item.value === profile.religion)
                      ?.label || '없음'}{' '}
                    |
                  </Text>
                  <Marriage />
                  <Text style={styles.infoBottomText}>
                    {MARRIAGE_PLAN.find(
                      item => item.value === profile.marriagePlan,
                    )?.label || '미정'}{' '}
                    |
                  </Text>
                  <Mbti />
                  <Text style={styles.infoBottomText}>{profile.mbtiType}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
    width: (width * 0.8 + 10) * dummyProfiles.length,
  },
  slide: {
    width: width * 0.7,
    height: 357,
    marginHorizontal: width * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  infoBox: {
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    padding: 20,
    gap: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  infoTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  infoName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: 7,
    color: '#ffffff',
  },
  infoTopText: {
    fontSize: 13,
    color: '#ffffff',
  },
  infoBottomText: {
    fontSize: 14,
    color: '#ffffff',
  },
});

export default ImageSlider;
