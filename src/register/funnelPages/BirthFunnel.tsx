import React, {useState} from 'react';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import RegisterLayout from '../components/RegisterLayout';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {getAdultMinimumDate} from '../utils/getAdultMinimumDate';

const BirthFunnel = ({step, onNext, onPrev}: IregisterFunnulProps) => {
  const [date, setDate] = useState(new Date());
  const minDate = getAdultMinimumDate();
  console.log(minDate);

  console.log(date);
  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={onNext}
      isBtnActive={true}>
      <View>
        <DatePicker
          date={date}
          onDateChange={setDate}
          mode="date"
          minimumDate={new Date(minDate)}
        />
      </View>
    </RegisterLayout>
  );
};

export default BirthFunnel;
