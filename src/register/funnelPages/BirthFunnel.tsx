import React, {useState} from 'react';
import {IregisterFunnulProps} from '../types/registerFunnelType';
import RegisterLayout from '../components/RegisterLayout';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {getAdultMinimumDate} from '../utils/getAdultMinimumDate';
import {formatDate} from '../../common/utils/formatDate';

const BirthFunnel = ({
  step,
  onNext,
  onPrev,
  handleChange,
}: IregisterFunnulProps) => {
  const [date, setDate] = useState(new Date());
  const minDate = getAdultMinimumDate();

  console.log(formatDate(date));
  console.log(minDate);
  return (
    <RegisterLayout
      step={step}
      onBackPress={onPrev}
      onButtonPress={async () => {
        await handleChange?.('birthdate', formatDate(date));
        onNext();
      }}
      isBtnActive={true}>
      <View>
        <DatePicker
          date={date}
          onDateChange={setDate}
          mode="date"
          maximumDate={new Date(minDate)}
        />
      </View>
    </RegisterLayout>
  );
};

export default BirthFunnel;
