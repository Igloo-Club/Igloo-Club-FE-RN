import React, {useState, useEffect, ReactNode} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

interface IBottomModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BottomModal = ({isVisible, onClose, children}: IBottomModalProps) => {
  const [animatedValue] = useState(new Animated.Value(0)); // 초기값은 0

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isVisible ? 1 : 0,
      duration: isVisible ? 30 : 100,
      useNativeDriver: true,
    }).start();
  }, [isVisible, animatedValue]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  return (
    <>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.modalContent, {transform: [{translateY}]}]}>
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 2,
  },
});

export default BottomModal;
