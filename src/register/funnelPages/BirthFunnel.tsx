import React, {useState} from 'react';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import RegisterLayout from '../components/RegisterLayout';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {getAdultMinimumDate} from '../utils/getAdultMinimumDate';
import {formatDate} from '../../common/utils/formatDate';
import formatDateString from '../../common/utils/formatDateString';

const BirthFunnel = ({
  step,
  onNext,
  onPrev,
  handleChange,
  value,
}: IregisterFunnulProps) => {
  const minDate = getAdultMinimumDate();
  const [date, setDate] = useState<Date>(
    new Date(formatDateString(value?.birthdate) || minDate),
  );

  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={() => {
        handleChange?.('birthdate', formatDate(date));
        onNext();
      }}
      isBtnActive={true}>
      <View>
        <DatePicker
          date={date}
          onDateChange={setDate}
          locale="ko-KR"
          mode="date"
          maximumDate={new Date(minDate)}
        />
      </View>
    </RegisterLayout>
  );
};

export default BirthFunnel;
