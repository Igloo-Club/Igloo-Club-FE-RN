import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NavTypesProps} from '../types/navTypes';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';

const 종교여부 = ({onNext, navigation}: NavTypesProps) => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNextStep = () => {
    setStep(step + 1);
    onNext();
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={16} navigation={navigation} />
      <Text style={globalStyles.title}>
        {DETAIL_PROFILE_VIEW_CONSTATNS[step].mainTitle}
      </Text>
      <SelectBox
        options={['불교', '기독교']}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <SelectBox
        options={['천주교', '이슬람']}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <SelectBox
        options={['기타', '무교']}
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

export default 종교여부;
