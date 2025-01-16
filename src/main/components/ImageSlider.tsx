import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, PanResponder} from 'react-native';

const {width} = Dimensions.get('window');

const slides = [
  {id: '1', text: 'Slide 1', backgroundColor: 'rgba(20,20,200,0.3)'},
  {id: '2', text: 'Slide 2', backgroundColor: 'rgba(20,200,20,0.3)'},
  {id: '3', text: 'Slide 3', backgroundColor: 'rgba(200,20,20,0.3)'},
];

const ImageSlider = () => {
  const [pos, setPos] = useState(0); // 현재 슬라이드 위치

  const panResponder = PanResponder.create({
    // panResponder : 터치 이벤트 감지 및 화면 드래그 시 발생하는 이벤트 처리

    onMoveShouldSetPanResponder: () => true, // 화면 터치 시 드래그 시작하도록 설정
    onPanResponderMove: (e, gestureState) => {
      // 드래그 할 때마다 발생하는 이벤트 -> 슬라이드의 위치 값 (pos) 업데이트
      setPos(prev => {
        const newPos = prev + gestureState.dx;
        const minPos = 310;
        const maxPos = -(width * 0.8 + 10) + 60;
        return Math.min(minPos, Math.max(maxPos, newPos));
      });
    },
    onPanResponderRelease: () => {
      // 드래그 종료 시 해당 위치로 고정되도록 아무런 동작 x
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={[styles.sliderContainer, {transform: [{translateX: pos}]}]}
        {...panResponder.panHandlers}>
        {slides.map(slide => (
          <View
            key={slide.id}
            style={[styles.slide, {backgroundColor: slide.backgroundColor}]}>
            <Text>{slide.text}</Text>
          </View>
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
    width: (width * 0.8 + 10) * slides.length,
  },
  slide: {
    width: width * 0.7,
    height: 357,
    marginHorizontal: width * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default ImageSlider;
