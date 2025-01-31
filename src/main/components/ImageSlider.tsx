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

const {width} = Dimensions.get('window');

const ImageSlider = ({
  navigation,
  profiles,
}: {
  navigation: any;
  profiles: ProfileDataTypesProps[];
}) => {
  const [pos, setPos] = useState(0); // 현재 위치 상태

  const panResponder = PanResponder.create({
    // panResponder : 터치 이벤트 감지 및 화면 드래그 시 발생하는 이벤트 처리

    onMoveShouldSetPanResponder: () => true, // 화면 터치 시 드래그 시작하도록 설정
    onPanResponderMove: (e, gestureState) => {
      // 드래그 할 때마다 발생하는 이벤트 -> 슬라이드의 위치 값 (pos) 업데이트
      setPos(prev => {
        const newPos = prev + gestureState.dx;
        const minPos = 310;
        const maxPos = -(width * 0.8 + 10) * profiles.length + width;
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
        {profiles.map(profile => (
          <TouchableOpacity
            key={profile.nungilId}
            style={styles.slide}
            onPress={() => handleClickImage(profile.nungilId)}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: profile.imageUrlList[0]}}
                style={styles.image}
              />
              <View style={styles.overlay}>
                <Text style={styles.infoText}>키: {profile.height}cm</Text>
                <Text style={styles.infoText}>종교: {profile.religion}</Text>
                <Text style={styles.infoText}>
                  결혼 계획: {profile.marriagPlan ? '있음' : '없음'}
                </Text>
                <Text style={styles.infoText}>MBTI: {profile.mbtiType}</Text>
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
    width: (width * 0.8 + 10) * 4,
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
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  infoText: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 5,
  },
});

export default ImageSlider;
