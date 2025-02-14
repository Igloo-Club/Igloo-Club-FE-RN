import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  PanResponder,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {ProfileDataTypesProps} from '../../common/types/ProfileDataTypesProps';
import {Height, Religion, Marriage, Mbti} from '../assets/0_index';
import {
  RELIGION,
  MARRIAGE_PLAN,
} from '../../detail/constants/DETAIL_PROFILE_SELECTS';
import {BlurView} from '@react-native-community/blur';

const ImageSlider = ({
  navigation,
  profiles,
}: {
  navigation: any;
  profiles: ProfileDataTypesProps[];
}) => {
  const {width} = useWindowDimensions();
  const [pos, setPos] = useState(width * 1.2);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      setPos(prev => {
        const newPos = prev + gestureState.dx;
        const minPos = width * 1.2;
        const maxPos = -(width * 0.22) * profiles.length + width;
        return Math.min(minPos, Math.max(maxPos, newPos));
      });
    },
    onPanResponderRelease: () => {},
  });

  const handleClickImage = (nungilId: number) => {
    navigation.navigate('DetailPage', {nungilId, from: 'MainPage'});
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.sliderContainer,
          {width: (width * 0.8 + 10) * 4, transform: [{translateX: pos}]},
        ]}
        {...panResponder.panHandlers}>
        {profiles.map(profile => (
          <TouchableOpacity
            key={profile.nungilId}
            style={[
              styles.slide,
              {width: width * 0.7, marginHorizontal: width * 0.04},
            ]}
            onPress={() => handleClickImage(profile.nungilId)}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: profile.imageUrlList?.[0]}}
                style={styles.image}
              />
              <BlurView
                style={styles.blurView}
                blurAmount={15}
                reducedTransparencyFallbackColor="black"
              />
              <View style={styles.infoBox}>
                <View style={styles.infoTop}>
                  <Text style={styles.infoName}>{profile.nickname}</Text>
                  <Text style={styles.infoTopText}>
                    {new Date().getFullYear() -
                      parseInt(profile.birthdate.substring(0, 4), 10)}
                    세 | {profile.companyName}
                  </Text>
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

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
  },
  slide: {
    height: 357,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative', // Necessary for positioning the BlurView
  },
  image: {
    width: '100%',
    height: '100%',
  },
  blurView: {
    position: 'absolute', // Absolute positioning for the blur view
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  infoBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    gap: 10,
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
