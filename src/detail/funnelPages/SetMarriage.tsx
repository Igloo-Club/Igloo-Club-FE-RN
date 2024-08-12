import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';

const 결혼예정여부 = ({navigation}: any) => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={40} navigation={navigation} />
      <Text style={globalStyles.title}>
        {DETAIL_PROFILE_VIEW_CONSTATNS[step].mainTitle}
      </Text>
      <SelectBox
        options={['미정', '3년 이내']}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <SelectBox
        options={['5년 이내', '7년 이내']}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <FooterBtn
        onPress={handleNextStep}
        isDisabled={!selectedOption}
        label="다음으로"
      />
    </View>
  );
};

export default 결혼예정여부;
