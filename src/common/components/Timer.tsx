import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TimerProps {
  minutes: number;
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({minutes = 0, seconds = 0}) => {
  const [time, setTime] = useState(minutes * 60 + seconds);

  useEffect(() => {
    if (time <= 0) {
      return;
    } // 타이머가 0초가 되면 종료

    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 정리
  }, [time]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(time)}</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  timerText: {
    color: '#fa7268',
    fontSize: 18,
    fontWeight: '700',
  },
});
