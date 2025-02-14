import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

/** 남은 시간 계산 함수 **/
export const calculateTimeLeft = () => {
  const now = new Date();
  let targetTime = new Date();

  // 현재 시간이 13시부터 16시 사이이면 16시까지, 18시부터 다음날 11시 사이이면 다음날 11시까지
  if (now.getHours() >= 13 && now.getHours() < 16) {
    // 16시까지 남은 시간 계산
    targetTime.setHours(16, 0, 0, 0);
  } else if (now.getHours() >= 18 || now.getHours() < 11) {
    // 11시까지 남은 시간 계산 (다음날 11시)
    targetTime.setHours(11, 0, 0, 0);
    if (now.getHours() >= 18) {
      targetTime.setDate(targetTime.getDate() + 1); // 다음날로 설정
    }
  } else {
    // 그 외의 시간에는 11시까지 남은 시간 계산
    targetTime.setHours(11, 0, 0, 0);
  }

  const timeDifference = targetTime.getTime() - now.getTime();
  const totalSecondsLeft = Math.floor(timeDifference / 1000);

  const hours = Math.floor(totalSecondsLeft / 3600);
  const minutes = Math.floor((totalSecondsLeft % 3600) / 60);
  const seconds = totalSecondsLeft % 60;

  return {
    hours: formatTime(hours),
    minutes: formatTime(minutes),
    seconds: formatTime(seconds),
  };
};

const formatTime = (time: number) => {
  return time < 10 ? `0${time}` : `${time}`;
};

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Text>
      {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
    </Text>
  );
};

export default CountDown;
